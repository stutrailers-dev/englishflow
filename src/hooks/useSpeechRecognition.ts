import { useState, useEffect, useCallback, useRef } from 'react'
import { SpeechRecognitionResult as AppSpeechRecognitionResult } from '@/types'

interface UseSpeechRecognitionOptions {
  language?: string
  continuous?: boolean
  interimResults?: boolean
  onResult?: (result: AppSpeechRecognitionResult) => void
  onError?: (error: string) => void
  onEnd?: () => void
}

interface UseSpeechRecognitionReturn {
  isListening: boolean
  isSupported: boolean
  transcript: string
  interimTranscript: string
  confidence: number
  startListening: () => void
  stopListening: () => void
  resetTranscript: () => void
  error: string | null
}

// Web Speech API type declarations
interface SpeechRecognitionEvent extends Event {
  resultIndex: number
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionResultList {
  length: number
  item(index: number): SpeechRecognitionResult
  [index: number]: SpeechRecognitionResult
}

interface SpeechRecognitionResult {
  isFinal: boolean
  length: number
  item(index: number): SpeechRecognitionAlternative
  [index: number]: SpeechRecognitionAlternative
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string
  message: string
}

interface SpeechRecognition extends EventTarget {
  lang: string
  continuous: boolean
  interimResults: boolean
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null
  onend: ((this: SpeechRecognition, ev: Event) => any) | null
  start(): void
  stop(): void
  abort(): void
}

declare var SpeechRecognition: {
  prototype: SpeechRecognition
  new(): SpeechRecognition
}

// Extend Window interface for SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition
    webkitSpeechRecognition: typeof SpeechRecognition
  }
}

export function useSpeechRecognition(
  options: UseSpeechRecognitionOptions = {}
): UseSpeechRecognitionReturn {
  const {
    language = 'en-GB', // British English by default
    continuous = false,
    interimResults = true,
    onResult,
    onError,
    onEnd,
  } = options

  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interimTranscript, setInterimTranscript] = useState('')
  const [confidence, setConfidence] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const recognitionRef = useRef<SpeechRecognition | null>(null)

  const isSupported = typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)

  // Lazy initialization of recognition instance
  const getRecognition = useCallback(() => {
    if (recognitionRef.current) return recognitionRef.current
    if (!isSupported) return null

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = language
    recognition.continuous = continuous
    recognition.interimResults = interimResults

    recognitionRef.current = recognition
    return recognition
  }, [language, continuous, interimResults, isSupported])

  // Attach listeners dynamically
  const attachListeners = useCallback((recognition: SpeechRecognition) => {
    recognition.onstart = () => {
      setIsListening(true)
      setError(null)
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalTranscript = ''
      let interim = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        const transcriptText = result[0].transcript

        if (result.isFinal) {
          finalTranscript += transcriptText
          setConfidence(result[0].confidence)

          onResult?.({
            transcript: transcriptText,
            confidence: result[0].confidence,
            isFinal: true,
          })
        } else {
          interim += transcriptText
        }
      }

      if (finalTranscript) {
        setTranscript(prev => prev + finalTranscript)
      }
      setInterimTranscript(interim)
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      const errorMessage = getErrorMessage(event.error)
      // Ignore 'no-speech' and 'aborted' errors to avoid UI flicker
      if (event.error !== 'no-speech' && event.error !== 'aborted') {
        setError(errorMessage)
        onError?.(errorMessage)
      }
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
      setInterimTranscript('')
      onEnd?.()
    }
  }, [onResult, onError, onEnd])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort()
        recognitionRef.current = null
      }
    }
  }, [])

  // Update listeners when dependencies change
  useEffect(() => {
    if (recognitionRef.current) {
      // We can't easily remove old listeners, so we rely on the closure
      // But since we use ref for recognition, we might want to recreate it if language changes
      // For now, assume slight config changes don't require full recreation unless explicit
    }
  }, [onResult, onError, onEnd]) // This effect is a bit tricky with event listeners

  const startListening = useCallback(() => {
    const recognition = getRecognition()
    if (!recognition) {
      setError('Speech recognition is not supported in this browser')
      return
    }

    // Attach fresh listeners with current closure
    attachListeners(recognition)

    setError(null)
    setInterimTranscript('')

    try {
      recognition.start()
    } catch (err) {
      // Recognition might already be running
      // console.warn('Speech recognition start error:', err)
    }
  }, [getRecognition, attachListeners])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }
  }, [])

  const resetTranscript = useCallback(() => {
    setTranscript('')
    setInterimTranscript('')
    setConfidence(0)
    setError(null)
  }, [])

  return {
    isListening,
    isSupported,
    transcript,
    interimTranscript,
    confidence,
    startListening,
    stopListening,
    resetTranscript,
    error,
  }
}

function getErrorMessage(error: string): string {
  switch (error) {
    case 'no-speech':
      return 'No speech was detected. Please try again.'
    case 'audio-capture':
      return 'No microphone was found. Please check your microphone settings.'
    case 'not-allowed':
      return 'Microphone permission was denied. Please allow microphone access.'
    case 'network':
      return 'A network error occurred. Please check your connection.'
    case 'aborted':
      return 'Speech recognition was aborted.'
    case 'language-not-supported':
      return 'The selected language is not supported.'
    case 'service-not-allowed':
      return 'Speech recognition service is not allowed.'
    default:
      return `An error occurred: ${error}`
  }
}

export default useSpeechRecognition
