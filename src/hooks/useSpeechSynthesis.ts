import { useState, useEffect, useCallback, useRef } from 'react'
import { useSettingsStore } from '@/stores'

interface UseSpeechSynthesisOptions {
  onEnd?: () => void
  onError?: (error: string) => void
  onStart?: () => void
  onPause?: () => void
  onResume?: () => void
}

interface UseSpeechSynthesisReturn {
  speak: (text: string, options?: UseSpeechSynthesisOptions) => void
  cancel: () => void
  pause: () => void
  resume: () => void
  isSpeaking: boolean
  isPaused: boolean
  isSupported: boolean
  voices: SpeechSynthesisVoice[]
  britishVoices: SpeechSynthesisVoice[]
  americanVoices: SpeechSynthesisVoice[]
  selectedVoice: SpeechSynthesisVoice | null
  setVoice: (voice: SpeechSynthesisVoice) => void
  error: string | null
}

// British English voice name patterns
const BRITISH_VOICE_PATTERNS = [
  /en-GB/i,
  /en_GB/i,
  /British/i,
  /UK/i,
  /United Kingdom/i,
]

// American English voice name patterns
const AMERICAN_VOICE_PATTERNS = [
  /en-US/i,
  /en_US/i,
  /American/i,
  /United States/i,
]

// Premium/Natural voice indicators (prioritize these for better quality)
const PREMIUM_VOICE_INDICATORS = [
  /Premium/i,
  /Enhanced/i,
  /Natural/i,
  /Neural/i,
  /Wavenet/i,
  /Online/i,
  /Cloud/i,
  /Siri/i,
  /Google/i,
  /Microsoft.*Online/i,
  /Microsoft.*Natural/i,
]

// Preferred British voices - ordered by quality and naturalness
// Online/Cloud voices first, then premium local voices
const PREFERRED_BRITISH_VOICES = [
  // Online/Cloud voices (highest quality, most natural)
  /Google UK English Female/i,     // Google Cloud - very natural
  /Google UK English Male/i,       // Google Cloud - natural male
  /Microsoft Sonia Online/i,       // Microsoft Azure - natural British female
  /Microsoft Ryan Online/i,        // Microsoft Azure - natural British male
  /Microsoft Libby Online/i,       // Microsoft Azure - British female
  /Microsoft Mia Online/i,         // Microsoft Azure - British female
  // iOS/macOS Premium voices
  /Serena.*Premium/i,              // iOS Premium - very natural
  /Daniel.*Premium/i,              // iOS Premium - natural British male
  /Kate.*Premium/i,                // Premium British
  /Stephanie.*Enhanced/i,          // macOS Enhanced
  /Oliver.*Premium/i,              // iOS Premium male
  // Standard quality voices (fallback)
  /Serena/i,                       // iOS standard
  /Daniel/i,                       // iOS/macOS standard male
  /Kate/i,                         // Standard British female
  /Martha/i,                       // Windows British
  /Hazel/i,                        // Windows British
]

// Preferred American voices - ordered by quality and naturalness
const PREFERRED_AMERICAN_VOICES = [
  // Online/Cloud voices (highest quality, most natural)
  /Google US English Female/i,     // Google Cloud - very natural
  /Google US English Male/i,       // Google Cloud - natural male
  /Microsoft Jenny Online/i,       // Microsoft Azure - natural American female
  /Microsoft Aria Online/i,        // Microsoft Azure - natural American female
  /Microsoft Guy Online/i,         // Microsoft Azure - natural American male
  /Microsoft Eric Online/i,        // Microsoft Azure - American male
  /Microsoft Michelle Online/i,    // Microsoft Azure - American female
  // iOS/macOS Premium voices
  /Samantha.*Premium/i,            // iOS Premium - very natural
  /Samantha.*Enhanced/i,           // macOS Enhanced
  /Alex.*Premium/i,                // iOS Premium male
  /Ava.*Premium/i,                 // iOS Premium female
  /Allison.*Enhanced/i,            // macOS Enhanced
  /Tom.*Premium/i,                 // iOS Premium male
  // Standard quality voices (fallback)
  /Samantha/i,                     // iOS/macOS standard - still good
  /Alex/i,                         // macOS standard male
  /Ava/i,                          // iOS standard
  /Zira/i,                         // Windows female
  /David/i,                        // Windows male
]

export function useSpeechSynthesis(
  options: UseSpeechSynthesisOptions = {}
): UseSpeechSynthesisReturn {
  const { onEnd, onError, onStart, onPause, onResume } = options
  const { settings } = useSettingsStore()

  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null)
  const [error, setError] = useState<string | null>(null)

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const lastAccentRef = useRef<string | null>(null)

  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  // Get British English voices
  const britishVoices = voices.filter(voice =>
    BRITISH_VOICE_PATTERNS.some(pattern =>
      pattern.test(voice.lang) || pattern.test(voice.name)
    )
  )

  // Get American English voices
  const americanVoices = voices.filter(voice =>
    AMERICAN_VOICE_PATTERNS.some(pattern =>
      pattern.test(voice.lang) || pattern.test(voice.name)
    )
  )

  // Find the best voice based on accent preference
  // Priority: Online/Cloud voices > Premium local voices > Standard voices
  const findBestVoice = useCallback((availableVoices: SpeechSynthesisVoice[], accent: 'british' | 'american') => {
    const patterns = accent === 'british' ? BRITISH_VOICE_PATTERNS : AMERICAN_VOICE_PATTERNS
    const preferredNames = accent === 'british' ? PREFERRED_BRITISH_VOICES : PREFERRED_AMERICAN_VOICES

    // Filter voices by accent
    const accentVoices = availableVoices.filter(voice =>
      patterns.some(pattern => pattern.test(voice.lang) || pattern.test(voice.name))
    )

    if (accentVoices.length === 0) {
      // Fallback to any English voice
      return availableVoices.find(v => /en/i.test(v.lang)) || null
    }

    // Separate online and local voices
    const onlineVoices = accentVoices.filter(v => !v.localService)
    const localVoices = accentVoices.filter(v => v.localService)

    // 1. First, try to find an online voice from preferred list
    for (const namePattern of preferredNames) {
      const onlineMatch = onlineVoices.find(v => namePattern.test(v.name))
      if (onlineMatch) return onlineMatch
    }

    // 2. Try to find any online voice with premium indicators
    const premiumOnline = onlineVoices.find(v =>
      PREMIUM_VOICE_INDICATORS.some(p => p.test(v.name))
    )
    if (premiumOnline) return premiumOnline

    // 3. Try any online voice for this accent
    if (onlineVoices.length > 0) {
      return onlineVoices[0]
    }

    // 4. Fall back to local voices - try preferred list first
    for (const namePattern of preferredNames) {
      const localMatch = localVoices.find(v => namePattern.test(v.name))
      if (localMatch) return localMatch
    }

    // 5. Try to find a premium local voice
    const premiumLocal = localVoices.find(v =>
      PREMIUM_VOICE_INDICATORS.some(p => p.test(v.name))
    )
    if (premiumLocal) return premiumLocal

    // 6. Return first available accent voice
    return accentVoices[0]
  }, [])

  // Load available voices and select based on saved preference or accent
  useEffect(() => {
    if (!isSupported) return

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices()
      setVoices(availableVoices)

      if (availableVoices.length > 0) {
        const accent = settings.preferredAccent || 'british'
        const savedVoiceName = settings.selectedVoiceName

        // First, try to use the saved voice name
        if (savedVoiceName) {
          const savedVoice = availableVoices.find(v => v.name === savedVoiceName)
          if (savedVoice) {
            setSelectedVoice(savedVoice)
            lastAccentRef.current = accent
            return
          }
        }

        // If no saved voice or saved voice not available, auto-select best voice
        if (!selectedVoice || lastAccentRef.current !== accent) {
          const bestVoice = findBestVoice(availableVoices, accent)
          if (bestVoice) {
            setSelectedVoice(bestVoice)
            lastAccentRef.current = accent
          }
        }
      }
    }

    // Load voices (may be async)
    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices

    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [isSupported, settings.preferredAccent, settings.selectedVoiceName, findBestVoice, selectedVoice])

  // Re-select voice when accent preference changes (but not if user has a saved voice for new accent)
  useEffect(() => {
    if (voices.length > 0 && lastAccentRef.current !== settings.preferredAccent) {
      // When accent changes, find best voice for new accent
      const bestVoice = findBestVoice(voices, settings.preferredAccent || 'british')
      if (bestVoice) {
        setSelectedVoice(bestVoice)
        lastAccentRef.current = settings.preferredAccent
      }
    }
  }, [settings.preferredAccent, voices, findBestVoice])

  const speak = useCallback((text: string, speakOptions?: UseSpeechSynthesisOptions) => {
    if (!isSupported) {
      setError('Speech synthesis is not supported in this browser')
      return
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)

    // Configure utterance
    if (selectedVoice) {
      utterance.voice = selectedVoice
    }

    // Set language based on accent preference
    utterance.lang = settings.preferredAccent === 'american' ? 'en-US' : 'en-GB'
    utterance.rate = settings.speechRate
    utterance.pitch = 1
    utterance.volume = 1

    // Merge options
    const mergedOnEnd = speakOptions?.onEnd || onEnd
    const mergedOnError = speakOptions?.onError || onError
    const mergedOnStart = speakOptions?.onStart || onStart

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
      setError(null)
      mergedOnStart?.()
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
      mergedOnEnd?.()
    }

    utterance.onerror = (event) => {
      const errorMessage = `Speech synthesis error: ${event.error}`
      setError(errorMessage)
      setIsSpeaking(false)
      setIsPaused(false)
      mergedOnError?.(errorMessage)
    }

    utterance.onpause = () => {
      setIsPaused(true)
      onPause?.()
    }

    utterance.onresume = () => {
      setIsPaused(false)
      onResume?.()
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [isSupported, selectedVoice, settings.speechRate, settings.preferredAccent, onStart, onEnd, onError, onPause, onResume])

  const cancel = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      setIsPaused(false)
    }
  }, [isSupported])

  const pause = useCallback(() => {
    if (isSupported && isSpeaking) {
      window.speechSynthesis.pause()
    }
  }, [isSupported, isSpeaking])

  const resume = useCallback(() => {
    if (isSupported && isPaused) {
      window.speechSynthesis.resume()
    }
  }, [isSupported, isPaused])

  const setVoice = useCallback((voice: SpeechSynthesisVoice) => {
    setSelectedVoice(voice)
  }, [])

  return {
    speak,
    cancel,
    pause,
    resume,
    isSpeaking,
    isPaused,
    isSupported,
    voices,
    britishVoices,
    americanVoices,
    selectedVoice,
    setVoice,
    error,
  }
}

export default useSpeechSynthesis
