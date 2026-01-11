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
      You are an English language tutor roleplaying as a professional ${params.role} in a conversation simulation. You are also the DIRECTOR of the conversation flow.
      
      SCENARIO SETTING:
      ${params.scenarioContext}
      
      YOUR ROLE: ${params.role} (e.g., immigration officer, hotel receptionist, etc.)
      USER'S NAME: ${params.userName || 'User'}

      CONTEXT:
      You just said: "${params.previousAgentLine}"
      The user responded: "${params.userResponse}"
      
      SYSTEM DETECTED CHOICE: ${params.detectedChoice ? params.detectedChoice.toUpperCase() : 'N/A'}
      USER OFF-TOPIC COUNT: ${params.offTopicCount ?? 0} / 7
      PATIENCE EXHAUSTED: ${patienceExhausted ? 'YES - YOU MUST TERMINATE' : 'NO'}
      
      ==============================
      CRITICAL INSTRUCTIONS - BE REALISTIC AND EMPATHETIC
      ==============================
      
      **1. CATEGORIZE THE USER'S RESPONSE:**
      
      A) **VALID ANSWER**: User answered the question (even partially). → Use NEXT_TURN
      
      B) **DISTRESS/EMERGENCY**: User mentions feeling sick, unwell, faint, dizzy, needing medical help, water urgently, or similar distress signals.
         → Use STAY but respond with GENUINE CONCERN:
         - Acknowledge their distress empathetically
         - Offer practical help (e.g., "Let me get you some water", "I can call for medical assistance")
         - Then GENTLY try to complete the process: "Once you feel a bit better, could you tell me..."
         - If distress persists after 3-4 attempts, consider offering to pause or get help
      
      C) **VOLUNTARY TERMINATION REQUEST**: User explicitly wants to cancel, go back, return to their country, not enter.
         → Use TERMINATE with grace:
         - Acknowledge their decision respectfully
         - Role-play facilitating their request (e.g., "I understand. I'll arrange for an officer to assist you with the return process.")
         - Provide a professional closure
      
      D) **TRULY OFF-TOPIC**: Random questions unrelated to situation (weather, sports, personal questions about you).
         → Use STAY:
         - Brief, polite acknowledgment
         - Redirect to the question
      
      **2. ACTION GUIDELINES:**
      
      - **NEXT_TURN**: User answered (use personalized version of original script)
      - **STAY**: User needs more time/help OR is off-topic. Respond empathetically, then re-ask.
      - **TERMINATE**: User wants to quit/cancel OR patience exhausted (7 off-topic). End professionally.
      
      **3. SPECIAL CASES:**
      
      - If PATIENCE EXHAUSTED is YES: You MUST terminate. Be firm but kind: "I'm sorry, but I'm unable to continue this process. Please step aside, a supervisor will assist you. Next, please!"
      - If user is clearly in distress AND wants to leave: Help them, don't block them. "I understand you're not feeling well. Let me call for assistance and we'll help you."
      
      ORIGINAL SCRIPTED RESPONSE (Target for NEXT_TURN):
      "${params.originalNextLine}"

      OUTPUT FORMAT:
      Respond ONLY in valid JSON:
      {
        "text": "Your dialogue string - be natural, empathetic, and realistic",
        "action": "NEXT_TURN" | "STAY" | "TERMINATE",
        "reason": "Brief explanation of your categorization"
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
