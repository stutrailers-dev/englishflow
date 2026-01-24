import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Volume2,
  Bell,
  Type,
  Moon,
  Sun,
  Monitor,
  Mic,
  BookOpen,
  Target,
  RotateCcw,
  Download,
  Upload,
  Trash2,
  Info,
  ChevronRight,
  Languages,
  User,
  Check,
  Cloud,
  Zap,
  Smartphone
} from 'lucide-react'
import { useSettingsStore } from '@/stores/settingsStore'
import { useProgressStore } from '@/stores/progressStore'
import { useSRSStore } from '@/stores/srsStore'
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis'
import { useUnifiedTTS } from '@/hooks/useUnifiedTTS'


// Settings Section component
const SettingsSection = ({
  title,
  titleTr,
  icon: Icon,
  children
}: {
  title: string
  titleTr: string
  icon: React.ElementType
  children: React.ReactNode
}) => (
  <div className="card p-5 mb-6">
    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-navy-100">
      <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-navy-700" />
      </div>
      <div>
        <h2 className="font-semibold text-navy-900">{title}</h2>
        <p className="text-sm text-navy-500">{titleTr}</p>
      </div>
    </div>
    <div className="space-y-4">
      {children}
    </div>
  </div>
)

// Toggle Setting component
const ToggleSetting = ({
  label,
  labelTr,
  description,
  value,
  onChange
}: {
  label: string
  labelTr: string
  description?: string
  value: boolean
  onChange: (value: boolean) => void
}) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="font-medium text-navy-900">{label}</p>
      <p className="text-sm text-navy-500">{labelTr}</p>
      {description && (
        <p className="text-xs text-navy-400 mt-1">{description}</p>
      )}
    </div>
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onChange(!value)
      }}
      onMouseDown={(e) => {
        // Prevent focus-related scroll behavior
        e.preventDefault()
      }}
      className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 focus:outline-none ${value ? 'bg-racing-700' : 'bg-navy-200'
        }`}
    >
      <div
        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ease-out"
        style={{ left: value ? '28px' : '4px' }}
      />
    </button>
  </div>
)

export default function Settings() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { settings, updateSettings, resetSettings } = useSettingsStore()
  const { progress, resetProgress } = useProgressStore()

  // Use useSpeechSynthesis for getting voice list ONLY
  const synthesis = useSpeechSynthesis()
  const { voices, britishVoices, americanVoices, refreshVoices } = synthesis

  // Use useUnifiedTTS for actual speaking (supports Google/ElevenLabs)
  const unifiedTTS = useUnifiedTTS()
  const speak = unifiedTTS.speak

  // Destructure settings for easier access
  const {
    preferredAccent,
    dailyReminderTime,
    notificationsEnabled,
    autoPlayAudio,
    showIPA,
    showTurkishTranslations,
    theme,
    speechRate,
    fontSize,
    usePremiumVoice,
    ttsProvider
  } = settings

  // Destructure progress for easier access
  const { currentStreak, chunksLearned, vocabularyLearned, scenariosCompleted } = progress

  // Helper functions for updating individual settings
  const setPreferredAccent = (value: 'british' | 'american') => {
    // Clear saved voice when accent changes so new accent gets best voice auto-selected
    updateSettings({ preferredAccent: value, selectedVoiceName: undefined })
  }
  const setDailyReminderTime = (value: string) => updateSettings({ dailyReminderTime: value })
  const setNotificationsEnabled = async (value: boolean) => {
    if (value && 'Notification' in window) {
      const permission = await Notification.requestPermission()
      if (permission === 'granted') {
        updateSettings({ notificationsEnabled: true })
        new Notification('EnglishFlow', {
          body: 'Notifications enabled! You\'ll receive daily reminders to practice.',
          icon: '/favicon.ico'
        })
      }
    } else {
      updateSettings({ notificationsEnabled: value })
    }
  }
  const setAutoPlayAudio = (value: boolean) => updateSettings({ autoPlayAudio: value })
  const setShowIPA = (value: boolean) => updateSettings({ showIPA: value })
  const setShowTurkishTranslations = (value: boolean) => updateSettings({ showTurkishTranslations: value })
  const setTheme = (value: 'light' | 'dark' | 'system') => updateSettings({ theme: value })
  const setSpeechRate = (value: number) => updateSettings({ speechRate: value })
  const setFontSize = (value: 'small' | 'medium' | 'large') => updateSettings({ fontSize: value })

  const [showResetConfirm, setShowResetConfirm] = useState(false)
  const [showResetProgressConfirm, setShowResetProgressConfirm] = useState(false)
  const [testVoicePlaying, setTestVoicePlaying] = useState(false)

  // User name from localStorage
  const [userName, setUserName] = useState(() => {
    try {
      return localStorage.getItem('englishflow-user-name') || ''
    } catch {
      return ''
    }
  })

  // User gender from localStorage
  const [userGender, setUserGender] = useState<'male' | 'female'>(() => {
    try {
      return (localStorage.getItem('englishflow-user-gender') as 'male' | 'female') || 'male'
    } catch {
      return 'male'
    }
  })

  // Save user name to localStorage
  useEffect(() => {
    try {
      if (userName) {
        localStorage.setItem('englishflow-user-name', userName)
      } else {
        localStorage.removeItem('englishflow-user-name')
      }
    } catch (error) {
      console.error('Failed to save user name:', error)
    }
  }, [userName])

  // Save user gender to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('englishflow-user-gender', userGender)
    } catch (error) {
      console.error('Failed to save user gender:', error)
    }
  }, [userGender])

  // Test voice
  const testVoice = () => {
    setTestVoicePlaying(true)
    const testText = preferredAccent === 'american'
      ? 'Hello! This is a test of the American English voice. How does it sound to you?'
      : 'Hello! This is a test of the British English voice. How does it sound to you?'
    speak(testText, {
      onEnd: () => setTestVoicePlaying(false),
      onError: (e) => {
        setTestVoicePlaying(false)
        console.error('TTS Test Error:', e)
        alert(`Ses hatası: ${e.message || 'Bilinmeyen hata'}`)
      }
    })
  }

  // Export progress data
  const exportData = () => {
    const data = {
      settings: {
        preferredAccent,
        dailyReminderTime,
        notificationsEnabled,
        autoPlayAudio,
        showIPA,
        showTurkishTranslations,
        theme,
        speechRate,
        fontSize
      },
      progress: {
        currentStreak,
        chunksLearned,
        vocabularyLearned,
        scenariosCompleted
      },
      exportDate: new Date().toISOString()
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `englishflow-backup-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div ref={containerRef} className="max-w-3xl mx-auto pb-2 md:pb-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-navy-900 mb-2">
          Settings
        </h1>
        <p className="text-navy-600">
          Ayarlar - Customise your learning experience
        </p>
      </div>

      {/* Personal Settings */}
      <SettingsSection title="Personal" titleTr="Kişisel Bilgiler" icon={User}>
        <div>
          <label className="block font-medium text-navy-900 mb-1">
            Your Name (Optional)
          </label>
          <p className="text-sm text-navy-500 mb-2">İsminiz (İsteğe Bağlı)</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
          />
          <p className="text-xs text-navy-400 mt-2">
            Your name will be used to personalise your experience. Leave blank for generic greetings.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-navy-100">
          <label className="block font-medium text-navy-900 mb-2">
            Gender
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setUserGender('male')}
              className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${userGender === 'male'
                ? 'border-racing-700 bg-racing-700/5 text-racing-700'
                : 'border-navy-200 hover:border-navy-300 text-navy-600'
                }`}
            >
              <span className="font-medium">Male</span>
              <span className="text-xs opacity-70">(Erkek)</span>
            </button>
            <button
              type="button"
              onClick={() => setUserGender('female')}
              className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${userGender === 'female'
                ? 'border-racing-700 bg-racing-700/5 text-racing-700'
                : 'border-navy-200 hover:border-navy-300 text-navy-600'
                }`}
            >
              <span className="font-medium">Female</span>
              <span className="text-xs opacity-70">(Kadın)</span>
            </button>
          </div>
          <p className="text-xs text-navy-400 mt-2">
            Used to determine your title (Mr. or Ms.) in scenarios.
          </p>
        </div>
      </SettingsSection>

      {/* Voice & Audio Settings */}
      <SettingsSection title="Voice & Audio" titleTr="Ses Ayarları" icon={Volume2}>
        {/* Accent preference */}
        <div>
          <label className="block font-medium text-navy-900 mb-1">
            Preferred Accent
          </label>
          <p className="text-sm text-navy-500 mb-2">Tercih Edilen Aksan</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setPreferredAccent('british')
              }}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${preferredAccent === 'british'
                ? 'border-racing-700 bg-racing-700/5 text-racing-700'
                : 'border-navy-200 hover:border-navy-300'
                }`}
            >
              <span className="text-lg mb-1 block">🇬🇧</span>
              <span className="font-medium">British</span>
              <span className="text-xs block text-navy-500">Recommended</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setPreferredAccent('american')
              }}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
              className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${preferredAccent === 'american'
                ? 'border-racing-700 bg-racing-700/5 text-racing-700'
                : 'border-navy-200 hover:border-navy-300'
                }`}
            >
              <span className="text-lg mb-1 block">🇺🇸</span>
              <span className="font-medium">American</span>
              <span className="text-xs block text-navy-500">Alternative</span>
            </button>
          </div>
        </div>

        {/* Voice Engine Selection */}
        <div className="mb-6">
          <label className="block font-medium text-navy-900 mb-2">
            Voice Engine
          </label>
          <div className="grid grid-cols-1 gap-2">
            {[
              {
                id: 'local',
                name: 'Device Default',
                desc: 'Offline, fast, standard quality',
                icon: Smartphone
              },
              {
                id: 'elevenlabs',
                name: 'ElevenLabs Premium',
                desc: 'Ultra-realistic AI voices (Requires internet)',
                icon: Zap
              },
              {
                id: 'google',
                name: 'Google Cloud',
                desc: 'High quality Neural voices (Safari compatible)',
                icon: Cloud
              }
            ].map((provider) => (
              <button
                key={provider.id}
                onClick={() => {
                  updateSettings({
                    ttsProvider: provider.id as any,
                    // Sync legacy flag for compatibility
                    usePremiumVoice: provider.id !== 'local'
                  })
                }}
                className={`flex items-center p-3 rounded-lg border text-left transition-all ${(ttsProvider || (usePremiumVoice ? 'elevenlabs' : 'local')) === provider.id
                  ? 'border-navy-600 bg-navy-50 ring-1 ring-navy-600'
                  : 'border-gray-200 hover:border-navy-300 bg-white'
                  }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${(ttsProvider || (usePremiumVoice ? 'elevenlabs' : 'local')) === provider.id
                  ? 'bg-navy-100 text-navy-700'
                  : 'bg-gray-100 text-gray-500'
                  }`}>
                  <provider.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm text-navy-900">{provider.name}</p>
                    {(ttsProvider || (usePremiumVoice ? 'elevenlabs' : 'local')) === provider.id && (
                      <Check className="w-4 h-4 text-navy-600" />
                    )}
                  </div>
                  <p className="text-xs text-navy-500">{provider.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>



        {/* Speech rate */}
        <div>
          <label className="block font-medium text-navy-900 mb-1">
            Speech Rate
          </label>
          <p className="text-sm text-navy-500 mb-2">Konuşma Hızı: {speechRate.toFixed(1)}x</p>
          <input
            type="range"
            min="0.5"
            max="1.5"
            step="0.1"
            value={speechRate}
            onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
            className="w-full h-2 bg-navy-200 rounded-lg appearance-none cursor-pointer accent-racing-700"
          />
          <div className="flex justify-between text-xs text-navy-400 mt-1">
            <span>Slow (0.5x)</span>
            <span>Normal (1.0x)</span>
            <span>Fast (1.5x)</span>
          </div>
        </div>

        {/* Test voice button */}
        <div>
          <button
            onClick={testVoice}
            disabled={testVoicePlaying}
            className="btn-secondary w-full flex items-center justify-center gap-2"
          >
            {testVoicePlaying ? (
              <>
                <span className="w-4 h-4 border-2 border-navy-400 border-t-transparent rounded-full animate-spin" />
                Playing...
              </>
            ) : (
              <>
                <Mic className="w-4 h-4" />
                Test Voice
              </>
            )}
          </button>
          <div className="flex items-center justify-center gap-4 mt-2">
            <p className="text-xs text-navy-400">
              {preferredAccent === 'british'
                ? `British voices: ${britishVoices.length}`
                : `American voices: ${americanVoices.length}`
              } / Total: {voices.length}
            </p>
            <button
              onClick={refreshVoices}
              className="text-xs text-racing-600 hover:text-racing-700 underline"
            >
              🔄 Sesleri Yenile
            </button>
          </div>


        </div>



        <ToggleSetting
          label="Auto-play Audio"
          labelTr="Otomatik Ses Çalma"
          description="Automatically play audio for new content"
          value={autoPlayAudio}
          onChange={setAutoPlayAudio}
        />
      </SettingsSection>

      {/* Display Settings */}
      <SettingsSection title="Display" titleTr="Görünüm" icon={Monitor}>
        {/* Theme */}
        <div>
          <label className="block font-medium text-navy-900 mb-1">
            Theme
          </label>
          <p className="text-sm text-navy-500 mb-2">Tema</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setTheme('light')
              }}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
              className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${theme === 'light'
                ? 'border-racing-700 bg-racing-700/5'
                : 'border-navy-200 hover:border-navy-300'
                }`}
            >
              <Sun className="w-4 h-4" />
              Light
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setTheme('dark')
              }}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
              className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${theme === 'dark'
                ? 'border-racing-700 bg-racing-700/5'
                : 'border-navy-200 hover:border-navy-300'
                }`}
            >
              <Moon className="w-4 h-4" />
              Dark
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setTheme('system')
              }}
              onMouseDown={(e) => {
                e.preventDefault()
              }}
              className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${theme === 'system'
                ? 'border-racing-700 bg-racing-700/5'
                : 'border-navy-200 hover:border-navy-300'
                }`}
            >
              <Monitor className="w-4 h-4" />
              System
            </button>
          </div>
        </div>

        {/* Font size */}
        <div>
          <label className="block font-medium text-navy-900 mb-1">
            Font Size
          </label>
          <p className="text-sm text-navy-500 mb-2">Yazı Boyutu</p>
          <div className="flex gap-2">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setFontSize(size)
                }}
                onMouseDown={(e) => {
                  e.preventDefault()
                }}
                className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all ${fontSize === size
                  ? 'border-racing-700 bg-racing-700/5'
                  : 'border-navy-200 hover:border-navy-300'
                  }`}
              >
                <Type className={`mx-auto ${size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-5 h-5' : 'w-6 h-6'
                  }`} />
                <span className="text-xs block mt-1 capitalize">{size}</span>
              </button>
            ))}
          </div>
        </div>

        <ToggleSetting
          label="Show IPA Pronunciation"
          labelTr="IPA Telaffuz Göster"
          description="Display phonetic transcription"
          value={showIPA}
          onChange={setShowIPA}
        />

        <ToggleSetting
          label="Show Turkish Translations"
          labelTr="Türkçe Çeviri Göster"
          description="Display Turkish equivalents for content"
          value={showTurkishTranslations}
          onChange={setShowTurkishTranslations}
        />
      </SettingsSection>

      {/* Notifications */}
      <SettingsSection title="Notifications" titleTr="Bildirimler" icon={Bell}>
        <ToggleSetting
          label="Enable Notifications"
          labelTr="Bildirimleri Etkinleştir"
          description="Get reminders to practice"
          value={notificationsEnabled}
          onChange={setNotificationsEnabled}
        />

        {notificationsEnabled && (
          <div>
            <label className="block font-medium text-navy-900 mb-1">
              Daily Reminder Time
            </label>
            <p className="text-sm text-navy-500 mb-2">Günlük Hatırlatma Saati</p>
            <input
              type="time"
              value={dailyReminderTime || '09:00'}
              onChange={(e) => setDailyReminderTime(e.target.value)}
              className="w-full max-w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-racing-700 focus:ring-2 focus:ring-racing-700/20 box-border"
            />
          </div>
        )}
      </SettingsSection>

      {/* Learning Goals */}
      <SettingsSection title="Learning Goals" titleTr="Öğrenme Hedefleri" icon={Target}>
        <div className="bg-navy-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-navy-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-navy-700">
                Your personalised learning path is designed for B1-B2 progression,
                focusing on business travel and technical communication in British English.
              </p>
              <p className="text-xs text-navy-500 mt-2">
                Kişiselleştirilmiş öğrenme yolunuz, İngiliz İngilizcesi ile iş seyahati
                ve teknik iletişime odaklanarak B1-B2 ilerlemesi için tasarlanmıştır.
              </p>
            </div>
          </div>
        </div>

        {/* Daily Study Time Goal */}
        <div>
          <label className="block font-medium text-navy-900 mb-1">
            Daily Study Time Goal
          </label>
          <p className="text-sm text-navy-500 mb-2">Günlük Çalışma Süresi Hedefi</p>
          <div className="grid grid-cols-4 gap-2">
            {[5, 10, 15, 20].map((minutes) => (
              <button
                key={minutes}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  const { updateDailyGoal } = useProgressStore.getState()
                  updateDailyGoal({ targetMinutes: minutes })
                }}
                onMouseDown={(e) => {
                  e.preventDefault()
                }}
                className={`py-2 px-3 rounded-lg border-2 transition-all text-center ${progress.dailyGoal.targetMinutes === minutes
                  ? 'border-racing-700 bg-racing-700/5 text-racing-700'
                  : 'border-navy-200 hover:border-navy-300'
                  }`}
              >
                <span className="font-medium">{minutes}</span>
                <span className="text-xs block">min</span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {[30, 45, 60].map((minutes) => (
              <button
                key={minutes}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  const { updateDailyGoal } = useProgressStore.getState()
                  updateDailyGoal({ targetMinutes: minutes })
                }}
                onMouseDown={(e) => {
                  e.preventDefault()
                }}
                className={`py-2 px-3 rounded-lg border-2 transition-all text-center ${progress.dailyGoal.targetMinutes === minutes
                  ? 'border-racing-700 bg-racing-700/5 text-racing-700'
                  : 'border-navy-200 hover:border-navy-300'
                  }`}
              >
                <span className="font-medium">{minutes}</span>
                <span className="text-xs block">min</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current progress summary */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-cream-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-navy-900">{currentStreak}</p>
            <p className="text-xs text-navy-500">Day Streak</p>
          </div>
          <div className="bg-cream-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-navy-900">{chunksLearned}</p>
            <p className="text-xs text-navy-500">Chunks Learned</p>
          </div>
          <div className="bg-cream-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-navy-900">{vocabularyLearned}</p>
            <p className="text-xs text-navy-500">Vocabulary</p>
          </div>
          <div className="bg-cream-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-navy-900">{scenariosCompleted}</p>
            <p className="text-xs text-navy-500">Scenarios</p>
          </div>
        </div>
      </SettingsSection>

      {/* Data Management */}
      <SettingsSection title="Data Management" titleTr="Veri Yönetimi" icon={BookOpen}>
        <div className="space-y-3">
          {/* Export */}
          <button
            onClick={exportData}
            className="w-full flex items-center justify-between p-3 rounded-lg border border-navy-200 hover:border-navy-300 hover:bg-navy-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-navy-600" />
              <div className="text-left">
                <p className="font-medium text-navy-900">Export Data</p>
                <p className="text-xs text-navy-500">Veriyi Dışa Aktar</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-navy-400" />
          </button>

          {/* Import placeholder */}
          <button
            disabled
            className="w-full flex items-center justify-between p-3 rounded-lg border border-navy-200 opacity-50 cursor-not-allowed"
          >
            <div className="flex items-center gap-3">
              <Upload className="w-5 h-5 text-navy-600" />
              <div className="text-left">
                <p className="font-medium text-navy-900">Import Data</p>
                <p className="text-xs text-navy-500">Veri İçe Aktar (Coming soon)</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-navy-400" />
          </button>

          {/* Reset settings */}
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full flex items-center justify-between p-3 rounded-lg border border-navy-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-yellow-600" />
              <div className="text-left">
                <p className="font-medium text-navy-900">Reset Settings</p>
                <p className="text-xs text-navy-500">Ayarları Sıfırla</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-navy-400" />
          </button>

          {/* Reset progress */}
          <button
            onClick={() => setShowResetProgressConfirm(true)}
            className="w-full flex items-center justify-between p-3 rounded-lg border border-red-200 hover:border-red-400 hover:bg-red-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <Trash2 className="w-5 h-5 text-red-600" />
              <div className="text-left">
                <p className="font-medium text-red-900">Reset All Progress</p>
                <p className="text-xs text-red-500">Tüm İlerlemeyi Sıfırla</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-red-400" />
          </button>
        </div>
      </SettingsSection>

      {/* About */}
      <div className="card p-5 mb-6 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <Languages className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display font-bold text-xl">EnglishFlow</h2>
            <p className="text-navy-200 text-sm">Version 1.0.0</p>
          </div>
        </div>
        <p className="text-navy-200 text-sm">
          A personalised British English learning application designed for
          business professionals, featuring evidence-based methodologies
          including Krashen's Comprehensible Input, shadowing technique,
          and spaced repetition.
        </p>
        <p className="text-navy-300 text-xs mt-3">
          İş profesyonelleri için tasarlanmış, Krashen'in Anlaşılabilir Girdi teorisi,
          shadowing tekniği ve aralıklı tekrar gibi kanıta dayalı metodolojileri içeren
          kişiselleştirilmiş bir İngiliz İngilizcesi öğrenme uygulaması.
        </p>
        <p className="text-navy-400 text-xs mt-4 pt-3 border-t border-navy-700">
          Created by mussand. All Rights Reserved.
        </p>
      </div>

      {/* Reset Settings Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-lg font-semibold text-navy-900 mb-2">
              Reset Settings?
            </h3>
            <p className="text-navy-600 mb-4">
              This will restore all settings to their default values. Your progress will not be affected.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetSettings()
                  setShowResetConfirm(false)
                }}
                className="btn-primary flex-1 bg-yellow-500 hover:bg-yellow-600"
              >
                Reset Settings
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Reset Progress Confirmation Modal */}
      {showResetProgressConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2 text-center">
              Reset All Progress?
            </h3>
            <p className="text-navy-600 mb-4 text-center">
              This will permanently delete all your learning progress, including streaks,
              vocabulary, and completed scenarios. This action cannot be undone.
            </p>
            <p className="text-sm text-red-600 mb-4 text-center font-medium">
              ⚠️ Bu işlem geri alınamaz!
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetProgressConfirm(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetProgress()
                  // Also reset SRS data
                  useSRSStore.getState().resetAll()
                  // Also clear learned chunks from localStorage
                  localStorage.removeItem('englishflow-learned-chunks')
                  // Also clear vocabulary progress from localStorage
                  localStorage.removeItem('englishflow-vocab-progress')
                  setShowResetProgressConfirm(false)
                }}
                className="flex-1 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Delete Everything
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
