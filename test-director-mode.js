// Test script to verify Gemini API is working for Director Mode
const API_KEY = process.env.VITE_GEMINI_API_KEY || '';

async function testDirectorMode() {
    console.log('=== Gemini API Test for Director Mode ===\n');

    if (!API_KEY) {
        console.error('❌ VITE_GEMINI_API_KEY is not set!');
        console.log('Please run: export VITE_GEMINI_API_KEY="your-key-here"');
        process.exit(1);
    }

    console.log('✅ API Key found:', API_KEY.substring(0, 10) + '...');

    const testCases = [
        {
            name: 'Off-topic: Water request',
            userResponse: 'Can I have a water?',
            previousAgentLine: 'How long are you planning to stay in the UK?',
            originalNextLine: 'I see. And where will you be staying?',
            expectedAction: 'STAY'
        },
        {
            name: 'Termination: Want to go back',
            userResponse: 'I wanna turn back to my country',
            previousAgentLine: 'Where will you be staying during your visit?',
            originalNextLine: 'What company do you work for?',
            expectedAction: 'TERMINATE'
        },
        {
            name: 'Valid answer: Business trip',
            userResponse: 'I am here for a business trip',
            previousAgentLine: 'What is the purpose of your visit?',
            originalNextLine: 'I see. And how long are you planning to stay?',
            expectedAction: 'NEXT_TURN'
        }
    ];

    for (const testCase of testCases) {
        console.log(`\n--- Testing: ${testCase.name} ---`);
        console.log(`User said: "${testCase.userResponse}"`);

        const prompt = `
      You are an English language tutor roleplaying in a conversation simulation. Also, you are the DIRECTOR of the flow.
      
      SCENARIO SETTING:
      Scenario: Passport Control
      Goal: Navigate through passport control successfully
      
      YOUR ROLE: agent
      USER'S NAME: Test User

      CONTEXT:
      You just said: "${testCase.previousAgentLine}"
      The user responded: "${testCase.userResponse}"
      
      SYSTEM DETECTED CHOICE: N/A
      USER OFF-TOPIC COUNT: 0 / 7
      PATIENCE EXHAUSTED: NO
      
      CRITICAL INSTRUCTIONS:
      1. **ANALYZE USER INTENT:** Determine if the user answered the question, asked for help, or is off-topic.
      2. **ADAPT THE SCRIPT:** Personalize the response based on the user's input.
      3. **CONTROL THE FLOW (ACTION):**
         - **NEXT_TURN**: The user answered the question (even if briefly). Proceed to the "ORIGINAL SCRIPTED RESPONSE".
         - **STAY**: The user did NOT answer. They asked for repetition, clarification, or asked an irrelevant question (e.g., "Can I have water?", "May I call my spouse?").
           * **IMPORTANT FOR STAY**: First, briefly acknowledge their request IN CHARACTER. Then, politely RE-ASK the original question.
         - **TERMINATE**: ONLY use if the user explicitly wants to quit ("Stop", "Go back", "Scared", "Cancel").

      ORIGINAL SCRIPTED RESPONSE (Target for NEXT_TURN):
      "${testCase.originalNextLine}"

      OUTPUT FORMAT:
      Respond ONLY in valid JSON:
      {
        "text": "Your dialogue string",
        "action": "NEXT_TURN" | "STAY" | "TERMINATE",
        "reason": "Explanation"
      }
    `;

        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.4,
                        maxOutputTokens: 1000,
                        responseMimeType: "application/json"
                    }
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`❌ API Error: ${response.status}`, errorText);
                continue;
            }

            const data = await response.json();
            const textContent = data?.candidates?.[0]?.content?.parts?.[0]?.text;

            console.log('Raw API Response:', textContent);

            if (textContent) {
                try {
                    const parsed = JSON.parse(textContent);
                    console.log('Parsed Action:', parsed.action);
                    console.log('Parsed Text:', parsed.text);
                    console.log('Expected Action:', testCase.expectedAction);

                    if (parsed.action === testCase.expectedAction) {
                        console.log('✅ PASS');
                    } else {
                        console.log('❌ FAIL - Wrong action');
                    }
                } catch (e) {
                    console.error('❌ JSON Parse Error:', e);
                }
            }
        } catch (error) {
            console.error('❌ Network Error:', error);
        }
    }
}

testDirectorMode();
