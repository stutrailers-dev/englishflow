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

async function listModels() {
    console.log(`Debug Script Started.`);
    console.log(`Checking Available Models for Key: ${apiKey.substring(0, 5)}...`);
    console.log(`\n--- LISTING AVAILABLE MODELS ---`);

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const resp = await fetch(url);

        if (!resp.ok) {
            console.error(`HTTP Error: ${resp.status} ${resp.statusText}`);
            console.error("Error Body:", await resp.text());
            return;
        }

        const data = await resp.json();
        if (data.models) {
            console.log("Available Models for this Key:");
            let found = false;
            data.models.forEach(m => {
                // Filter for generateContent support
                if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")) {
                    console.log(`- ${m.name}`);
                    found = true;
                }
            });
            if (!found) console.log("No models with generateContent support found.");
        } else {
            console.error("No models list found in response:", data);
        }
    } catch (e) {
        console.error("Network Error:", e);
    }
}

listModels();
