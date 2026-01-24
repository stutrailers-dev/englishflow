// Cloud TTS Service via Vercel API Proxy
// Uses Vercel Edge Function to securely call Google Cloud TTS

// API endpoint - uses Vercel serverless function
// API endpoint - uses Vercel serverless function (provider based)


// Audio element for playback
let audioElement: HTMLAudioElement | null = null
let currentAudioUrl: string | null = null

/**
 * Check if Cloud TTS API is available
 * Always returns true since we use server-side API key
 */
export function isCloudTTSAvailable(): boolean {
    return true
}

/**
 * Speak text using Cloud TTS via Vercel API
 */
export async function speakWithCloudTTS(
    text: string,
    options: {
        provider?: 'elevenlabs' | 'google'
        accent?: 'british' | 'american'
        speakingRate?: number
        onStart?: () => void
        onEnd?: () => void
        onError?: (error: Error) => void
    } = {}
): Promise<void> {
    const { provider = 'elevenlabs', accent = 'british', speakingRate = 1.0, onStart, onEnd, onError } = options

    try {
        // Stop any currently playing audio
        stopCloudTTS()

        onStart?.()

        // Prepare request based on provider
        let endpoint = '/api/tts' // Default ElevenLabs
        let body = {}

        if (provider === 'google') {
            endpoint = '/api/google-tts'
            // Map accent to Google Voice ID
            // Google UK Female: en-GB-Neural2-A (High quality)
            // Google US Female: en-US-Neural2-C (High quality)
            const languageCode = accent === 'british' ? 'en-GB' : 'en-US'
            const name = accent === 'british' ? 'en-GB-Neural2-A' : 'en-US-Neural2-C' // Neural2 is premium quality

            body = {
                text,
                languageCode,
                name,
                speakingRate
            }
        } else {
            // ElevenLabs
            endpoint = '/api/tts'
            body = {
                text,
                accent,
                speakingRate
            }
        }

        // Call Vercel API proxy
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Cloud TTS API Error:', errorText)
            throw new Error(`API Error ${response.status}: ${errorText.slice(0, 100)}`)
        }

        const data = await response.json()

        if (!data.audioContent) {
            throw new Error('No audio content received')
        }

        // Create audio URL from base64
        const audioBlob = base64ToBlob(data.audioContent, 'audio/mp3')
        currentAudioUrl = URL.createObjectURL(audioBlob)

        // Create and play audio
        audioElement = new Audio(currentAudioUrl)

        audioElement.onended = () => {
            cleanup()
            onEnd?.()
        }

        audioElement.onerror = () => {
            cleanup()
            onError?.(new Error('Audio playback failed'))
        }

        await audioElement.play()
    } catch (error) {
        cleanup()
        onError?.(error as Error)
    }
}

/**
 * Stop cloud TTS playback
 */
export function stopCloudTTS(): void {
    if (audioElement) {
        audioElement.pause()
        audioElement.currentTime = 0
        cleanup()
    }
}

/**
 * Check if cloud TTS is currently playing
 */
export function isCloudTTSPlaying(): boolean {
    return audioElement !== null && !audioElement.paused
}

/**
 * Cleanup audio resources
 */
function cleanup(): void {
    if (currentAudioUrl) {
        URL.revokeObjectURL(currentAudioUrl)
        currentAudioUrl = null
    }
    audioElement = null
}

/**
 * Convert base64 to Blob
 */
function base64ToBlob(base64: string, mimeType: string): Blob {
    const byteCharacters = atob(base64)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type: mimeType })
}

export default {
    isCloudTTSAvailable,
    speakWithCloudTTS,
    stopCloudTTS,
    isCloudTTSPlaying,
}
