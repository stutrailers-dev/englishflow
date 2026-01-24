// Vercel Serverless Function for ElevenLabs TTS
// ElevenLabs provides high-quality neural TTS voices

export const config = {
    runtime: 'edge',
}

// ElevenLabs API endpoint
const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1/text-to-speech'

// Voice IDs for different accents
// British English
const BRITISH_VOICES = {
    female: 'Xb7hH8MSUJpSbSDYk0k2', // Charlotte - British female
    male: 'N2lVS1w4EtoT3dr4eOWO', // Callum - British male
}

// American English
const AMERICAN_VOICES = {
    female: 'EXAVITQu4vr4xnSDxMaL', // Bella - American female
    male: 'VR6AewLTigWG4xSOukaG', // Arnold - American male
}

interface TTSRequest {
    text: string
    accent?: 'british' | 'american'
    gender?: 'male' | 'female'
    speakingRate?: number // 0.5 to 2.0, default 1.0
}

export default async function handler(req: Request) {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        })
    }

    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        })
    }

    const apiKey = process.env.ELEVENLABS_API_KEY
    if (!apiKey) {
        return new Response(JSON.stringify({ error: 'ElevenLabs API key not configured' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }

    try {
        const body: TTSRequest = await req.json()
        const { text, accent = 'british', gender = 'female', speakingRate = 1.0 } = body

        if (!text) {
            return new Response(JSON.stringify({ error: 'Text is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        // Select voice based on accent and gender
        const voices = accent === 'british' ? BRITISH_VOICES : AMERICAN_VOICES
        const voiceId = gender === 'male' ? voices.male : voices.female

        // Adjust stability based on speaking rate
        // Lower rate = higher stability (slower, more stable speech)
        // Rate 0.5 -> stability 0.9, Rate 1.0 -> stability 0.7, Rate 1.5 -> stability 0.5
        const stability = Math.max(0.3, Math.min(0.95, 1.1 - (speakingRate * 0.4)))

        // Call ElevenLabs API
        const response = await fetch(`${ELEVENLABS_API_URL}/${voiceId}`, {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': apiKey,
            },
            body: JSON.stringify({
                text,
                model_id: 'eleven_multilingual_v2',
                voice_settings: {
                    stability: stability,
                    similarity_boost: 0.75,
                    style: 0.3, // Lower style = more consistent pacing
                    use_speaker_boost: true,
                },
            }),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error('ElevenLabs Error:', errorText)
            return new Response(JSON.stringify({ error: 'TTS synthesis failed' }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        // Get audio as ArrayBuffer and convert to base64
        const audioBuffer = await response.arrayBuffer()
        const base64Audio = btoa(
            new Uint8Array(audioBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )

        return new Response(JSON.stringify({ audioContent: base64Audio }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
    } catch (error) {
        console.error('TTS Proxy Error:', error)
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}
