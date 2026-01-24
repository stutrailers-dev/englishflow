import { create } from 'zustand'

interface AudioState {
    voices: SpeechSynthesisVoice[]
    isInitialized: boolean
    init: () => void
}

export const useAudioStore = create<AudioState>((set, get) => ({
    voices: [],
    isInitialized: false,

    init: () => {
        if (get().isInitialized) return
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices()
            if (voices.length > 0) {
                set({ voices, isInitialized: true })
                // console.log('🔊 Audio Store: Voices loaded', voices.length)
            }
        }

        loadVoices()

        // Chrome/Safari async voice loading
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => {
                loadVoices()
            }
        }
    },
}))
