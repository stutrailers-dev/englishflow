import fs from 'fs';
import path from 'path';

// Load env explicitly
const envPath = path.resolve(process.cwd(), '.env');
let apiKey = '';

try {
    const envContent = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of envContent) {
        if (line.startsWith('VITE_GEMINI_API_KEY=')) {
            apiKey = line.split('=')[1].trim();
            break;
        }
    }
} catch (e) {
    console.error("Could not read .env file");
}

if (!apiKey) {
    console.error("API Key not found or empty.");
    process.exit(1);
}

// Remove any quotes if present
apiKey = apiKey.replace(/^"|"$/g, '').replace(/^'|'$/g, '');

const TEST_PROMPT = `
      You are an English language tutor roleplaying in a conversation simulation.
      
      SCENARIO SETTING:
      Scenario: Passport Control
      Goal: Answer questions about your visit
             Conversation History:
             agent: Good afternoon. Passport, please.
             user: Here you are.
      
      YOUR ROLE: agent
      USER'S NAME: User

      CONTEXT:
      You just said: "What is the purpose of your visit to the United Kingdom?"
      The user responded: "Sure he is it is the business trip"
      
      SYSTEM DETECTED CHOICE: BUSINESS (Use this as a strong hint for user intent)
      
      CRITICAL INSTRUCTIONS:
      1. **ANALYZE USER INTENT:** First, determine what the user actually wants. Pay close attention to negations.
      2. **ADAPT THE SCRIPT:** Change the details to match the USER'S preference.
      3. **RESPONSE STYLE:**
         - Keep it natural, polite, and at CEFR B1 level (Intermediate).
         - Be concise. Similar length to the original script.
         - Do NOT include any explanations or meta-text. Just the character's dialogue.

      ORIGINAL SCRIPTED RESPONSE (What you were supposed to say):
      "I see. And how long are you planning to stay in the UK?"
`;

async function testPrompt() {
    console.log("Testing Prompt with Gemini 2.5...");
    // Use the model name without 'models/' prefix as confirmed by previous successful logic
    const model = "gemini-2.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: TEST_PROMPT }] }],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 1000, // INCREASED TO 1000
                }
                // Omitting safety settings for simple test
            })
        });

        const data = await resp.json();

        if (data.candidates && data.candidates[0].content) {
            console.log("------------------------------------------------");
            console.log("GENERATED TEXT:", data.candidates[0].content.parts[0].text);
            console.log("------------------------------------------------");

            if (data.candidates[0].finishReason) {
                console.log("FINISH REASON:", data.candidates[0].finishReason);
            }
        } else {
            console.error("No content generated. Full response:", JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error("Network Error:", e);
    }
}

testPrompt();
