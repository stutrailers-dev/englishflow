/// <reference types="vite/client" />
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// Initialize Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
// Using gemini-1.5-flash with optimized settings for conversation
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    ],
    generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 150,
    }
});

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
      
      SYSTEM DETECTED CHOICE: ${params.detectedChoice ? params.detectedChoice.toUpperCase() : 'N/A'} (Use this as a strong hint for user intent)
      
      ORIGINAL SCRIPTED RESPONSE (What you were supposed to say):
      "${params.originalNextLine}"

      TASK:
      You are an intelligent roleplay partner. Your goal is to generate the next response in the dialogue based on the USER'S actual input and the ORIGINAL SCRIPT.
      
      CRITICAL INSTRUCTIONS:
      1. **ANALYZE USER INTENT:** First, determine what the user actually wants. Pay close attention to negations (e.g., "I don't want window", "Not aisle").
         - If user says "Not window", they imply "Aisle".
         - If user says "No luggage", confirm NO luggage. Do not assume hand luggage.
      
      2. **ADAPT THE SCRIPT:**
         - The "ORIGINAL SCRIPTED RESPONSE" is just a guide for the *type* of information to give.
         - You MUST change the details (seat number, location, etc.) to match the USER'S preference.
         - If the original script says "Seat 14A (Window)" but the user asked for "Aisle", you MUST change it to "Seat 14C (Aisle)".
         - Do not blindly follow the placeholders in the original script.

      3. **RESPONSE STYLE:**
         - Keep it natural, polite, and at CEFR B1 level (Intermediate).
         - Be concise. Similar length to the original script.
         - Do NOT include any explanations or meta-text. Just the character's dialogue.

      4. **FILLING DETAILS:**
         - Replace any {{PLACEHOLDERS}} with realistic data that matches the user's choice.
         - Examples: {{SEAT_NUMBER}} -> "12C", {{SEAT_LOCATION}} -> "aisle seat".
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
