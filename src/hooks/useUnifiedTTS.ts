// Unified TTS Hook
// Uses ElevenLabs when usePremiumVoice is enabled, otherwise uses local device voices

import { useCallback } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis'
import { speakWithCloudTTS, stopCloudTTS } from '@/services/cloudTTSService'

interface UseUnifiedTTSReturn {
    speak: (text: string, options?: { onStart?: () => void; onEnd?: () => void; onError?: (e: Error) => void }) => void
    cancel: () => void
    isSpeaking: boolean
    isPremium: boolean
}

export function useUnifiedTTS(): UseUnifiedTTSReturn {
    const { settings } = useSettingsStore()
    const { ttsProvider, usePremiumVoice, preferredAccent, speechRate } = settings
    const localTTS = useSpeechSynthesis()

    // Determine actual provider (fallback to legacy usePremiumVoice if ttsProvider is not set/local but premium toggle is on)
    let activeProvider = ttsProvider

    // Legacy compatibility: If user has premium enabled but provider is local, set to elevenlabs
    if (usePremiumVoice && ttsProvider === 'local') {
        activeProvider = 'elevenlabs'
    }

    const speak = useCallback((text: string, options?: { onStart?: () => void; onEnd?: () => void; onError?: (e: Error) => void }) => {
        if (activeProvider !== 'local') {
            // Use Cloud TTS (ElevenLabs or Google)
            speakWithCloudTTS(text, {
                provider: activeProvider as 'elevenlabs' | 'google',
                accent: preferredAccent || 'british',
                speakingRate: speechRate || 1.0,
                onStart: options?.onStart,
                onEnd: options?.onEnd,
                onError: options?.onError,
            })
        } else {
            // Use local device voice
            localTTS.speak(text, {
                onStart: options?.onStart,
                onEnd: options?.onEnd,
                onError: (e) => options?.onError?.(new Error(e)),
            })
        }
    }, [activeProvider, preferredAccent, speechRate, localTTS])

    const cancel = useCallback(() => {
        if (activeProvider !== 'local') {
            stopCloudTTS()
        } else {
            localTTS.cancel()
        }
    }, [activeProvider, localTTS])

    return {
        speak,
        cancel,
        isSpeaking: localTTS.isSpeaking, // For local TTS only, cloud TTS doesn't have this state
        isPremium: usePremiumVoice,
    }
}

export default useUnifiedTTS
