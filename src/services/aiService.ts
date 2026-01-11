/// <reference types="vite/client" />

// Initialize Gemini API Key
const API_KEY = (import.meta.env.VITE_GEMINI_API_KEY || '').trim();

// DEBUG: Log API key status on load
console.log('🔑 AI Service initialized');
console.log('🔑 API Key present:', !!API_KEY);
console.log('🔑 API Key preview:', API_KEY ? API_KEY.substring(0, 10) + '...' : 'EMPTY');
console.log('🔑 All VITE env vars:', Object.keys(import.meta.env).filter(k => k.startsWith('VITE_')));

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
    offTopicCount?: number; // How many times user went off-topic
}

export interface AIResponse {
    text: string;
    action: 'NEXT_TURN' | 'STAY' | 'TERMINATE';
    reason?: string;
}

export const generateDynamicResponse = async (params: DynamicResponseParams): Promise<AIResponse | null> => {
    if (!API_KEY) {
        console.warn('Gemini API Key missing, falling back to original response');
        return null;
    }

    const patienceExhausted = (params.offTopicCount ?? 0) >= 6; // 7th attempt triggers termination

    const prompt = `
      You are an English language tutor roleplaying in a conversation simulation. Also, you are the DIRECTOR of the flow.
      
      SCENARIO SETTING:
      ${params.scenarioContext}
      
      YOUR ROLE: ${params.role}
      USER'S NAME: ${params.userName || 'User'}

      CONTEXT:
      You just said: "${params.previousAgentLine}"
      The user responded: "${params.userResponse}"
      
      SYSTEM DETECTED CHOICE: ${params.detectedChoice ? params.detectedChoice.toUpperCase() : 'N/A'}
      USER OFF-TOPIC COUNT: ${params.offTopicCount ?? 0} / 7
      PATIENCE EXHAUSTED: ${patienceExhausted ? 'YES - YOU MUST TERMINATE' : 'NO'}
      
      CRITICAL INSTRUCTIONS:
      1. **ANALYZE USER INTENT:** Determine if the user answered the question, asked for help, or is off-topic.
      2. **ADAPT THE SCRIPT:** Personalize the response based on the user's input.
      3. **CONTROL THE FLOW (ACTION):**
         - **NEXT_TURN**: The user answered the question (even if briefly). Proceed to the "ORIGINAL SCRIPTED RESPONSE".
         - **STAY**: The user did NOT answer. They asked for repetition, clarification, or asked an irrelevant question (e.g., "Can I have water?", "May I call my spouse?").
           * **IMPORTANT FOR STAY**: First, briefly acknowledge their request IN CHARACTER (e.g., "Water is near the exit." or "I'm sorry, but this process must be done individually."). Then, politely RE-ASK the original question. Do NOT advance to the next script line.
         - **TERMINATE**: ONLY use if:
           a) The user explicitly wants to quit ("Stop", "Go back", "Scared", "Cancel").
           b) **PATIENCE EXHAUSTED is YES**: The user has been off-topic too many times. You MUST terminate with a firm but professional message appropriate to your role (e.g., for border control: "I'm sorry, but I cannot continue this process. Please step aside, an officer will assist you. Next, please!").

      ORIGINAL SCRIPTED RESPONSE (Target for NEXT_TURN):
      "${params.originalNextLine}"

      OUTPUT FORMAT:
      Respond ONLY in valid JSON:
      {
        "text": "Your dialogue string",
        "action": "NEXT_TURN" | "STAY" | "TERMINATE",
        "reason": "Explanation"
      }
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
                        responseMimeType: "application/json"
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
            const textContent = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (textContent) {
                console.log(`✅ Success with ${modelName}:`, textContent);
                // CACHE THE SUCCESSFUL MODEL
                if (modelName !== preferredModel) {
                    localStorage.setItem('GEMINI_PREFERRED_MODEL', modelName);
                    console.log(`💾 Cached new preferred model: ${modelName}`);
                }

                try {
                    const parsed = JSON.parse(textContent);
                    return parsed;
                } catch (e) {
                    console.warn("Failed to parse JSON, returning text as NEXT_TURN", e);
                    return { text: textContent, action: 'NEXT_TURN' };
                }
            } else {
                console.warn(`⚠️ Empty response from ${modelName}`, data);
            }

        } catch (error: any) {
            console.warn(`❌ Network Error with ${modelName}:`, error);
            continue;
        }
    }

    console.error('All REST API attempts failed. Returning fail-safe response.');
    // Fail-safe: Instead of null (which breaks the simulator), return a generic STAY action.
    // This prevents the simulator from advancing on errors.
    return {
        text: "I'm sorry, I didn't catch that correctly. Could you please say it again?",
        action: 'STAY'
    };
};
