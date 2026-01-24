// Google Cloud Text-to-Speech Service
// Uses Google Cloud TTS API for high-quality voice synthesis
// Free tier: 1 million characters/month for standard, 1 million for WaveNet

const TTS_API_KEY = (import.meta.env.VITE_GOOGLE_TTS_API_KEY || '').trim()
const TTS_API_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize'

export interface TTSVoice {
    name: string
    languageCode: string
    ssmlGender: 'MALE' | 'FEMALE' | 'NEUTRAL'
}

// British English voices (ordered by quality)
export const BRITISH_VOICES: TTSVoice[] = [
    { name: 'en-GB-Wavenet-B', languageCode: 'en-GB', ssmlGender: 'MALE' },     // High quality male
    { name: 'en-GB-Wavenet-A', languageCode: 'en-GB', ssmlGender: 'FEMALE' },   // High quality female
    { name: 'en-GB-Neural2-B', languageCode: 'en-GB', ssmlGender: 'MALE' },     // Neural male
    { name: 'en-GB-Neural2-A', languageCode: 'en-GB', ssmlGender: 'FEMALE' },   // Neural female
    { name: 'en-GB-Standard-B', languageCode: 'en-GB', ssmlGender: 'MALE' },    // Standard male
    { name: 'en-GB-Standard-A', languageCode: 'en-GB', ssmlGender: 'FEMALE' },  // Standard female
]

// American English voices (ordered by quality)
export const AMERICAN_VOICES: TTSVoice[] = [
    { name: 'en-US-Wavenet-D', languageCode: 'en-US', ssmlGender: 'MALE' },     // High quality male
    { name: 'en-US-Wavenet-C', languageCode: 'en-US', ssmlGender: 'FEMALE' },   // High quality female
    { name: 'en-US-Neural2-D', languageCode: 'en-US', ssmlGender: 'MALE' },     // Neural male
    { name: 'en-US-Neural2-C', languageCode: 'en-US', ssmlGender: 'FEMALE' },   // Neural female
    { name: 'en-US-Standard-D', languageCode: 'en-US', ssmlGender: 'MALE' },    // Standard male
    { name: 'en-US-Standard-C', languageCode: 'en-US', ssmlGender: 'FEMALE' },  // Standard female
]

interface SynthesizeRequest {
    input: {
        text?: string
        ssml?: string
    }
    voice: {
        languageCode: string
        name: string
        ssmlGender?: string
    }
    audioConfig: {
        audioEncoding: 'MP3' | 'LINEAR16' | 'OGG_OPUS'
        speakingRate?: number
        pitch?: number
        volumeGainDb?: number
    }
}

interface SynthesizeResponse {
    audioContent: string // Base64 encoded audio
}

// Audio element for playback
let audioElement: HTMLAudioElement | null = null
let currentAudioUrl: string | null = null

/**
 * Check if Google Cloud TTS is available (API key is set)
 */
export function isCloudTTSAvailable(): boolean {
    return !!TTS_API_KEY
}

/**
 * Synthesize text to speech using Google Cloud TTS
 */
export async function synthesizeSpeech(
    text: string,
    options: {
        voice?: TTSVoice
        accent?: 'british' | 'american'
        speakingRate?: number
        pitch?: number
    } = {}
): Promise<string> {
    if (!TTS_API_KEY) {
        throw new Error('Google Cloud TTS API key not configured')
    }

    const { accent = 'british', speakingRate = 1.0, pitch = 0 } = options

    // Select voice based on accent if not specified
    const voice = options.voice || (accent === 'british' ? BRITISH_VOICES[0] : AMERICAN_VOICES[0])

    const request: SynthesizeRequest = {
        input: { text },
        voice: {
            languageCode: voice.languageCode,
            name: voice.name,
            ssmlGender: voice.ssmlGender,
        },
        audioConfig: {
            audioEncoding: 'MP3',
            speakingRate,
            pitch,
        },
    }

    try {
        const response = await fetch(`${TTS_API_URL}?key=${TTS_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        })

        if (!response.ok) {
            const error = await response.json()
            console.error('TTS API Error:', error)
            throw new Error(error.error?.message || 'TTS synthesis failed')
        }

        const data: SynthesizeResponse = await response.json()
        return data.audioContent // Base64 audio
    } catch (error) {
        console.error('Cloud TTS Error:', error)
        throw error
    }
}

/**
 * Speak text using Google Cloud TTS
 */
export async function speakWithCloudTTS(
    text: string,
    options: {
        voice?: TTSVoice
        accent?: 'british' | 'american'
        speakingRate?: number
        onStart?: () => void
        onEnd?: () => void
        onError?: (error: Error) => void
    } = {}
): Promise<void> {
    const { onStart, onEnd, onError } = options

    try {
        // Stop any currently playing audio
        stopCloudTTS()

        onStart?.()

        const audioContent = await synthesizeSpeech(text, options)

        // Create audio URL from base64
        const audioBlob = base64ToBlob(audioContent, 'audio/mp3')
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
    synthesizeSpeech,
    speakWithCloudTTS,
    stopCloudTTS,
    isCloudTTSPlaying,
    BRITISH_VOICES,
    AMERICAN_VOICES,
}
