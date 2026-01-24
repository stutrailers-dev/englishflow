// ResponsiveVoice.js Service
// Cross-platform TTS with iOS fallback
// Free for non-commercial use

declare global {
    interface Window {
        responsiveVoice: {
            speak: (
                text: string,
                voice?: string,
                options?: {
                    pitch?: number
                    rate?: number
                    volume?: number
                    onstart?: () => void
                    onend?: () => void
                    onerror?: (e: Error) => void
                }
            ) => void
            cancel: () => void
            isPlaying: () => boolean
            getVoices: () => Array<{ name: string }>
            voiceSupport: () => boolean
        }
    }
}

// British English voices in ResponsiveVoice
export const BRITISH_VOICES = [
    'UK English Female',
    'UK English Male',
]

// American English voices in ResponsiveVoice
export const AMERICAN_VOICES = [
    'US English Female',
    'US English Male',
]

/**
 * Check if ResponsiveVoice is available
 * Note: voiceSupport() may return false on iOS Safari even when TTS works
 */
export function isResponsiveVoiceAvailable(): boolean {
    return typeof window !== 'undefined' &&
        typeof window.responsiveVoice !== 'undefined' &&
        typeof window.responsiveVoice.speak === 'function'
}

/**
 * Get available voices
 */
export function getVoices(): string[] {
    if (!isResponsiveVoiceAvailable()) return []
    return window.responsiveVoice.getVoices().map(v => v.name)
}

/**
 * Speak text using ResponsiveVoice
 */
export function speakWithResponsiveVoice(
    text: string,
    options: {
        accent?: 'british' | 'american'
        voiceName?: string
        rate?: number
        onStart?: () => void
        onEnd?: () => void
        onError?: (error: Error) => void
    } = {}
): void {
    if (!isResponsiveVoiceAvailable()) {
        options.onError?.(new Error('ResponsiveVoice not available'))
        return
    }

    const { accent = 'british', rate = 1, onStart, onEnd, onError } = options

    // Select voice based on accent
    let voiceName = options.voiceName
    if (!voiceName) {
        voiceName = accent === 'british' ? 'UK English Female' : 'US English Female'
    }

    try {
        window.responsiveVoice.speak(text, voiceName, {
            rate,
            pitch: 1,
            volume: 1,
            onstart: onStart,
            onend: onEnd,
            onerror: (e) => onError?.(e)
        })
    } catch (error) {
        onError?.(error as Error)
    }
}

/**
 * Stop ResponsiveVoice playback
 */
export function stopResponsiveVoice(): void {
    if (isResponsiveVoiceAvailable()) {
        window.responsiveVoice.cancel()
    }
}

/**
 * Check if ResponsiveVoice is currently playing
 */
export function isResponsiveVoicePlaying(): boolean {
    if (!isResponsiveVoiceAvailable()) return false
    return window.responsiveVoice.isPlaying()
}

export default {
    isResponsiveVoiceAvailable,
    getVoices,
    speakWithResponsiveVoice,
    stopResponsiveVoice,
    isResponsiveVoicePlaying,
    BRITISH_VOICES,
    AMERICAN_VOICES,
}
