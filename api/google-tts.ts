// Vercel Serverless Function for Google Cloud TTS
// Used to securely call Google Cloud TTS API without exposing API keys
// Supports WaveNet and Neural2 high-quality voices

export const config = {
    runtime: 'edge',
}

// Google Cloud TTS API endpoint
const GOOGLE_TTS_API_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize'

interface GoogleTTSRequest {
    text: string
    languageCode?: string
    name?: string // Voice name (e.g., en-GB-Neural2-A)
    ssmlGender?: 'MALE' | 'FEMALE'
    speakingRate?: number
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

    const apiKey = process.env.GOOGLE_CLOUD_API_KEY
    if (!apiKey) {
        return new Response(JSON.stringify({ error: 'Google Cloud API key not configured' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }

    try {
        const body: GoogleTTSRequest = await req.json()
        const {
            text,
            languageCode = 'en-GB',
            name = 'en-GB-Neural2-A', // Default to high quality Neural2 female
            ssmlGender = 'FEMALE',
            speakingRate = 1.0
        } = body

        if (!text) {
            return new Response(JSON.stringify({ error: 'Text is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        // Prepare request to Google Cloud TTS
        // IMPORTANT: API Key is passed as a query parameter '?key=...'
        const url = `${GOOGLE_TTS_API_URL}?key=${apiKey}`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                input: { text },
                voice: {
                    languageCode,
                    name,
                    ssmlGender
                },
                audioConfig: {
                    audioEncoding: 'MP3',
                    speakingRate: speakingRate,
                    pitch: 0,
                    volumeGainDb: 0,
                    effectsProfileId: ['headphone-class-device'] // Optimize for headphones
                }
            }),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Google Cloud TTS Error:', errorText)
            return new Response(JSON.stringify({
                error: 'TTS synthesis failed',
                details: errorText
            }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            })
        }

        const data = await response.json()

        // Google returns { "audioContent": "base64..." }
        return new Response(JSON.stringify({ audioContent: data.audioContent }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
    } catch (error) {
        console.error('Google TTS Proxy Error:', error)
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}
