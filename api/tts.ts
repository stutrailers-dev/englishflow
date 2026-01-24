// Vercel Serverless Function for Google Cloud TTS
// This proxy allows secure API key usage from the frontend

export const config = {
    runtime: 'edge',
}

const TTS_API_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize'

interface TTSRequest {
    text: string
    voice?: string
    accent?: 'british' | 'american'
    speakingRate?: number
}

// Voice mapping
const VOICES = {
    british: {
        male: { name: 'en-GB-Wavenet-B', languageCode: 'en-GB', ssmlGender: 'MALE' },
        female: { name: 'en-GB-Wavenet-A', languageCode: 'en-GB', ssmlGender: 'FEMALE' },
    },
    american: {
        male: { name: 'en-US-Wavenet-D', languageCode: 'en-US', ssmlGender: 'MALE' },
        female: { name: 'en-US-Wavenet-C', languageCode: 'en-US', ssmlGender: 'FEMALE' },
    },
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

    const apiKey = process.env.GOOGLE_TTS_API_KEY
    if (!apiKey) {
        return new Response(JSON.stringify({ error: 'TTS API key not configured' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }

    try {
        const body: TTSRequest = await req.json()
        const { text, accent = 'british', speakingRate = 1.0 } = body

        if (!text) {
            return new Response(JSON.stringify({ error: 'Text is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        // Select voice
        const voiceConfig = VOICES[accent]?.female || VOICES.british.female

        const ttsRequest = {
            input: { text },
            voice: {
                languageCode: voiceConfig.languageCode,
                name: voiceConfig.name,
                ssmlGender: voiceConfig.ssmlGender,
            },
            audioConfig: {
                audioEncoding: 'MP3',
                speakingRate,
                pitch: 0,
            },
        }

        const response = await fetch(`${TTS_API_URL}?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ttsRequest),
        })

        if (!response.ok) {
            const error = await response.json()
            console.error('Google TTS Error:', error)
            return new Response(JSON.stringify({ error: error.error?.message || 'TTS failed' }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        const data = await response.json()

        return new Response(JSON.stringify({ audioContent: data.audioContent }), {
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
