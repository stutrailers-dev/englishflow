/// <reference types="vite/client" />

// Initialize Gemini API Key
const API_KEY = (import.meta.env.VITE_GEMINI_API_KEY || '').trim();

// List of models to try in order of preference (Updated for 2026 availability)
const MODELS_TO_TRY = [
    "gemini-2.5-flash",
    "gemini-flash-latest",
    "gemini-2.0-flash",
    "gemini-2.5-pro",
    "gemini-pro-latest"
];

interface DynamicResponseParams {
    scenarioContext: string;
    role: string;
    previousAgentLine: string;
    userResponse: string;
    originalNextLine: string;
    userName?: string;
    detectedChoice?: string;
}

export const generateDynamicResponse = async (params: DynamicResponseParams): Promise<string | null> => {
    if (!API_KEY) {
        console.warn('Gemini API Key missing, falling back to original response');
        return null;
    }

    const prompt = `
      You are an English language tutor roleplaying in a conversation simulation.
      
      SCENARIO SETTING:
      ${params.scenarioContext}
      
      YOUR ROLE: ${params.role}
      USER'S NAME: ${params.userName || 'User'}

      CONTEXT:
      You just said: "${params.previousAgentLine}"
      The user responded: "${params.userResponse}"
      
      SYSTEM DETECTED CHOICE: ${params.detectedChoice ? params.detectedChoice.toUpperCase() : 'N/A'} (Use this as a strong hint for user intent)
      
      CRITICAL INSTRUCTIONS:
      1. **ANALYZE USER INTENT:** First, determine what the user actually wants. Pay close attention to negations (e.g., "I don't want window", "Not aisle").
         - If user says "Not window", they imply "Aisle".
         - If user says "No luggage", confirm NO luggage. Do not assume hand luggage.
      
      2. **ADAPT THE SCRIPT:**
         - The "ORIGINAL SCRIPTED RESPONSE" is just a guide for the *type* of information to give.
         - You MUST change the details (seat number, location, etc.) to match the USER'S preference.

      3. **RESPONSE STYLE:**
         - Keep it natural, polite, and at CEFR B1 level (Intermediate).
         - Be concise. Similar length to the original script.
         - Do NOT include any explanations or meta-text. Just the character's dialogue.

      4. **FILLING DETAILS:**
         - Replace any {{PLACEHOLDERS}} with realistic data that matches the user's choice.

      ORIGINAL SCRIPTED RESPONSE (What you were supposed to say):
      "${params.originalNextLine}"
    `;

    // OPTIMIZATION: Prioritize the model that worked previously
    const preferredModel = localStorage.getItem('GEMINI_PREFERRED_MODEL');
    let optimizationQueue = [...MODELS_TO_TRY];

    if (preferredModel && MODELS_TO_TRY.includes(preferredModel)) {
        optimizationQueue = [preferredModel, ...MODELS_TO_TRY.filter(m => m !== preferredModel)];
        console.log(`🚀 Optimization: Trying previously successful model first: ${preferredModel}`);
    }

    // Try models using raw REST API (bypassing SDK)
    for (const modelName of optimizationQueue) {
        try {
            console.log(`📡 Attempting REST API call to: ${modelName}`);

            // Clean model name for URL (remove 'models/' prefix if present, though we removed it from list above)
            const cleanModelName = modelName.replace('models/', '');
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModelName}:generateContent?key=${API_KEY}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        temperature: 0.4,
                        maxOutputTokens: 1000,
                    },
                    safetySettings: [
                        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
                    ]
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.warn(`❌ REST API Error (${modelName}): ${response.status} ${response.statusText}`, errorText);
                continue;
            }

            const data = await response.json();

            // Parse response safely
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (text) {
                console.log(`✅ Success with ${modelName}:`, text);
                // CACHE THE SUCCESSFUL MODEL
                if (modelName !== preferredModel) {
                    localStorage.setItem('GEMINI_PREFERRED_MODEL', modelName);
                    console.log(`💾 Cached new preferred model: ${modelName}`);
                }
                return text.trim();
            } else {
                console.warn(`⚠️ Empty response from ${modelName}`, data);
            }

        } catch (error: any) {
            console.warn(`❌ Network Error with ${modelName}:`, error);
            continue;
        }
    }

    console.error('All REST API attempts failed. Falling back to template.');
    return null;
};
