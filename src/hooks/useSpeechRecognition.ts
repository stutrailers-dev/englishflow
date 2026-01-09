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

  useEffect(() => {
    if (!isSupported) return

    const SpeechRecognition = 
      window.SpeechRecognition || window.webkitSpeechRecognition
    
    const recognition = new SpeechRecognition()
    recognition.lang = language
    recognition.continuous = continuous
    recognition.interimResults = interimResults

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
      setError(errorMessage)
      onError?.(errorMessage)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
      setInterimTranscript('')
      onEnd?.()
    }

    recognitionRef.current = recognition

    return () => {
      recognition.abort()
    }
  }, [language, continuous, interimResults, onResult, onError, onEnd, isSupported])

  const startListening = useCallback(() => {
    if (!isSupported || !recognitionRef.current) {
      setError('Speech recognition is not supported in this browser')
      return
    }

    setError(null)
    setInterimTranscript('')
    
    try {
      recognitionRef.current.start()
    } catch (err) {
      // Recognition might already be running
      console.warn('Speech recognition start error:', err)
    }
  }, [isSupported])

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
