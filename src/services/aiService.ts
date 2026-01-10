/// <reference types="vite/client" />
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
// Using gemini-1.5-flash for faster responses and lower latency suitable for conversation
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

interface DynamicResponseParams {
    scenarioContext: string;
    role: string;
    previousAgentLine: string;
    userResponse: string;
    originalNextLine: string;
    userName?: string;
}

export const generateDynamicResponse = async (params: DynamicResponseParams): Promise<string | null> => {
    if (!API_KEY) {
        console.warn('Gemini API Key missing, falling back to original response');
        return null;
    }

    try {
        const prompt = `
      You are an English language tutor roleplaying in a conversation simulation.
      
      SCENARIO SETTING:
      ${params.scenarioContext}
      
      YOUR ROLE: ${params.role}
      USER'S NAME: ${params.userName || 'User'}

      CONTEXT:
      You just said: "${params.previousAgentLine}"
      The user responded: "${params.userResponse}"
      
      ORIGINAL SCRIPTED RESPONSE (What you were supposed to say):
      "${params.originalNextLine}"

      TASK:
      Rewrite the "ORIGINAL SCRIPTED RESPONSE" to naturally acknowledge and adapt to what the user actually said.
      
      RULES:
      1. Keep the core information/action from the original response (e.g., if you need to ask about luggage, you MUST still ask about luggage).
      2. If the user changed a preference (e.g., asked for aisle instead of window), acknowledge it and confirm the change in your response.
      3. If the user's response was negative or opposite to what was expected, adapt politely.
      4. Keep the response length similar to the original.
      5. Maintain the CEFR B1 level simplicity.
      6. Do NOT output any explanations, just the dialogue text.
      7. IMPORTANT: Do NOT use any placeholders like {{SEAT_NUMBER}} or {{LUGGAGE_RESPONSE}}. Fill them with appropriate realistic fictional data (e.g. "Seat 12A", "Okay, I've checked your bag").
    `;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        console.log('🤖 AI Generated Response:', text);
        return text.trim();
    } catch (error) {
        console.error('Error generating AI response:', error);
        return null; // Return null to fallback to template system
    }
};
