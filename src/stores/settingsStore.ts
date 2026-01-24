import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { UserSettings } from '@/types'

interface SettingsState {
  settings: UserSettings
  updateSettings: (updates: Partial<UserSettings>) => void
  resetSettings: () => void
}

const DEFAULT_SETTINGS: UserSettings = {
  preferredAccent: 'british',
  selectedVoiceName: 'Google UK English Female Online',
  dailyReminderTime: '09:00',
  notificationsEnabled: false,
  autoPlayAudio: true,
  showIPA: true,
  showTurkishTranslations: true,
  theme: 'light',
  speechRate: 0.9, // Slightly slower for learning
  fontSize: 'small',
  usePremiumVoice: false, // ElevenLabs premium voice disabled by default
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: DEFAULT_SETTINGS,

      updateSettings: (updates) => {
        set(state => ({
          settings: {
            ...state.settings,
            ...updates,
          },
        }))
      },

      resetSettings: () => {
        set({ settings: DEFAULT_SETTINGS })
      },
    }),
    {
      name: 'english-flow-settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
