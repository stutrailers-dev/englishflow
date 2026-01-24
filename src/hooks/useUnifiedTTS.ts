// Unified TTS Hook
// Uses ElevenLabs when usePremiumVoice is enabled, otherwise uses local device voices

import { useCallback, useState } from 'react'
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

    // State to track cloud TTS speaking status
    const [isCloudSpeaking, setIsCloudSpeaking] = useState(false)

    // Determine actual provider (fallback to legacy usePremiumVoice if ttsProvider is not set/local but premium toggle is on)
    let activeProvider = ttsProvider

    // Legacy compatibility: If user has premium enabled but provider is local, set to elevenlabs
    if (usePremiumVoice && ttsProvider === 'local') {
        activeProvider = 'elevenlabs'
    }

    const speak = useCallback((text: string, options?: { onStart?: () => void; onEnd?: () => void; onError?: (e: Error) => void }) => {
        if (activeProvider !== 'local') {
            setIsCloudSpeaking(true)
            // Use Cloud TTS (ElevenLabs or Google)
            speakWithCloudTTS(text, {
                provider: activeProvider as 'elevenlabs' | 'google',
                accent: preferredAccent || 'british',
                speakingRate: speechRate || 1.0,
                onStart: () => {
                    setIsCloudSpeaking(true)
                    options?.onStart?.()
                },
                onEnd: () => {
                    setIsCloudSpeaking(false)
                    options?.onEnd?.()
                },
                onError: (e) => {
                    setIsCloudSpeaking(false)
                    options?.onError?.(e)
                },
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
            setIsCloudSpeaking(false)
        } else {
            localTTS.cancel()
        }
    }, [activeProvider, localTTS])

    return {
        speak,
        cancel,
        isSpeaking: activeProvider !== 'local' ? isCloudSpeaking : localTTS.isSpeaking,
        isPremium: activeProvider !== 'local',
    }
}

export default useUnifiedTTS
