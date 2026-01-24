// Unified TTS Hook
// Uses ElevenLabs when usePremiumVoice is enabled, otherwise uses local device voices

import { useCallback } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis'
import { speakWithCloudTTS, stopCloudTTS } from '@/services/cloudTTSService'

interface UseUnifiedTTSReturn {
    speak: (text: string, options?: { onEnd?: () => void; onError?: (e: Error) => void }) => void
    cancel: () => void
    isSpeaking: boolean
    isPremium: boolean
}

export function useUnifiedTTS(): UseUnifiedTTSReturn {
    const { settings } = useSettingsStore()
    const { usePremiumVoice, preferredAccent, speechRate } = settings
    const localTTS = useSpeechSynthesis()

    const speak = useCallback((text: string, options?: { onEnd?: () => void; onError?: (e: Error) => void }) => {
        if (usePremiumVoice) {
            // Use ElevenLabs via Vercel API proxy
            speakWithCloudTTS(text, {
                accent: preferredAccent || 'british',
                speakingRate: speechRate || 1.0,
                onEnd: options?.onEnd,
                onError: options?.onError,
            })
        } else {
            // Use local device voice
            localTTS.speak(text, {
                onEnd: options?.onEnd,
                onError: (e) => options?.onError?.(new Error(e)),
            })
        }
    }, [usePremiumVoice, preferredAccent, speechRate, localTTS])

    const cancel = useCallback(() => {
        if (usePremiumVoice) {
            stopCloudTTS()
        } else {
            localTTS.cancel()
        }
    }, [usePremiumVoice, localTTS])

    return {
        speak,
        cancel,
        isSpeaking: localTTS.isSpeaking, // For local TTS only, cloud TTS doesn't have this state
        isPremium: usePremiumVoice,
    }
}

export default useUnifiedTTS
