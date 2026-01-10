import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mic,
  MicOff,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  ChevronRight,
  AlertCircle
} from 'lucide-react'
import { useSpeechRecognition, useSpeechSynthesis } from '@/hooks'
import { clsx } from 'clsx'
import { shadowingContent } from '@/data/shadowingContent'

type ShadowingPhase = 'listen' | 'practice' | 'record' | 'compare'
type CategoryFilter = 'all' | 'travel' | 'technical' | 'social' | 'business' | 'daily' | 'conditional'

const categoryLabels: Record<CategoryFilter, string> = {
  all: 'Tümü',
  travel: 'Seyahat',
  technical: 'Teknik',
  social: 'Sosyal',
  business: 'İş',
  daily: 'Günlük',
  conditional: 'Koşullu Cümleler',
}

interface ShadowingStudioProps {
  embedded?: boolean
}

export default function ShadowingStudio({ embedded = false }: ShadowingStudioProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [phase, setPhase] = useState<ShadowingPhase>('listen')
  const [showIPA] = useState(true)
  const [finalTranscript, setFinalTranscript] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  // Track if we were listening to detect when recording stops
  const wasListeningRef = useRef(false)
  // Ref for auto-scroll to controls card
  const controlsCardRef = useRef<HTMLDivElement>(null)

  // Filter content by category
  const filteredContent = categoryFilter === 'all'
    ? shadowingContent
    : shadowingContent.filter(item => item.category === categoryFilter)

  const currentItem = filteredContent[currentIndex]

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0)
    setPhase('listen')
    setFinalTranscript('')
  }, [categoryFilter])

  const {
    speak,
    cancel,
    isSpeaking
  } = useSpeechSynthesis()

  const {
    isListening,
    isSupported: isSpeechSupported,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    error: recognitionError,
  } = useSpeechRecognition()

  // Detect when recording stops and save the transcript
  useEffect(() => {
    if (wasListeningRef.current && !isListening && phase === 'record') {
      // Recording just stopped, save transcript and move to compare
      if (transcript) {
        setFinalTranscript(transcript)
      }
      setPhase('compare')
      // Auto-scroll to show comparison results after a short delay
      setTimeout(() => {
        controlsCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
    wasListeningRef.current = isListening
  }, [isListening, transcript, phase])

  const handlePlayOriginal = useCallback(() => {
    if (isSpeaking) {
      cancel()
    } else {
      speak(currentItem.text)
    }
  }, [isSpeaking, cancel, speak, currentItem.text])

  const handleStartRecording = useCallback(() => {
    if (!isSpeechSupported) {
      alert('Speech recognition is not supported in your browser')
      return
    }

    setFinalTranscript('')
    resetTranscript()
    // Switch to record phase if not already there
    if (phase !== 'record') {
      setPhase('record')
    }
    startListening()
  }, [isSpeechSupported, resetTranscript, startListening, phase])

  const handleStopRecording = useCallback(() => {
    stopListening()
  }, [stopListening])

  const handleReset = useCallback(() => {
    setPhase('listen')
    setFinalTranscript('')
    resetTranscript()
    cancel()
    wasListeningRef.current = false
    setIsCardFlipped(false)
  }, [resetTranscript, cancel])

  const handleNext = useCallback(() => {
    if (currentIndex < filteredContent.length - 1) {
      setCurrentIndex(prev => prev + 1)
      handleReset()
    }
  }, [currentIndex, filteredContent.length, handleReset])

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      handleReset()
    }
  }, [currentIndex, handleReset])

  // Simple word matching for comparison
  const compareTexts = useCallback(() => {
    const textToCompare = finalTranscript || transcript
    if (!textToCompare) return 0

    const originalWords = currentItem.text.toLowerCase().replace(/[.,!?']/g, '').split(' ')
    const userWords = textToCompare.toLowerCase().replace(/[.,!?']/g, '').split(' ')

    let matches = 0
    originalWords.forEach(word => {
      if (userWords.some(w => w.includes(word) || word.includes(w))) matches++
    })

    return Math.round((matches / originalWords.length) * 100)
  }, [currentItem.text, finalTranscript, transcript])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto space-y-3 pb-24 md:pb-4"
    >
      {/* Header - only show if not embedded */}
      {!embedded && (
        <div>
          <h1 className="text-3xl font-display font-bold text-navy-900">Shadowing Studio</h1>
          <p className="text-navy-600 mt-2">Gölgeleme Stüdyosu — Practice British pronunciation</p>
        </div>
      )}

      {/* Category Filter - iOS Horizontal Scroll */}
      <div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          {(Object.keys(categoryLabels) as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={clsx(
                'flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap',
                categoryFilter === cat
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-gray-100 text-navy-700 hover:bg-gray-200'
              )}
            >
              {categoryLabels[cat]}
              {cat !== 'all' && (
                <span className={clsx(
                  'ml-1.5 text-xs',
                  categoryFilter === cat ? 'opacity-80' : 'opacity-60'
                )}>
                  {shadowingContent.filter(i => i.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-1">
        <span className="text-xs text-navy-500 font-medium mr-2">
          {currentIndex + 1} / {filteredContent.length}
        </span>
        <div className="flex-1 h-1.5 bg-cream-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-navy-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / filteredContent.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Card - Click to Flip, Swipe to Navigate */}
      <motion.div
        className="cursor-pointer"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.x < -100 && currentIndex < filteredContent.length - 1) {
            handleNext()
          } else if (info.offset.x > 100 && currentIndex > 0) {
            handlePrevious()
          }
        }}
        onClick={() => setIsCardFlipped(!isCardFlipped)}
      >
        <AnimatePresence mode="wait">
          {!isCardFlipped ? (
            /* Front of Card - English */
            <motion.div
              key="front"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.3 }}
              className="card-elevated p-5"
            >
              {/* Context Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="badge-navy">{currentItem.context}</span>
                  <span className="badge-green">{currentItem.difficulty}</span>
                  <span className="px-2 py-0.5 text-xs bg-cream-200 text-navy-600 rounded-full">
                    {categoryLabels[currentItem.category as CategoryFilter]}
                  </span>
                </div>
                <span className="text-sm text-navy-500">
                  {currentIndex + 1} / {filteredContent.length}
                </span>
              </div>

              {/* Original Text */}
              <div className="text-center">
                <p className="text-lg font-display text-navy-900 leading-relaxed">
                  "{currentItem.text}"
                </p>
                {showIPA && (
                  <p className="font-mono text-xs text-navy-500 mt-2">
                    {currentItem.ipa}
                  </p>
                )}
              </div>

              <p className="text-xs text-navy-400 text-center mt-4">👆 Çevirmek için dokun</p>
            </motion.div>
          ) : (
            /* Back of Card - Turkish Translation & Key Words */
            <motion.div
              key="back"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.3 }}
              className="card-elevated p-5 bg-cream-50 dark:bg-neutral-800"
            >
              {/* Header */}
              <div className="text-center border-b border-cream-300 dark:border-neutral-700 pb-3 mb-3">
                <h3 className="text-base font-display font-bold text-navy-900">🇹🇷 Türkçe Çeviri</h3>
              </div>

              {/* Turkish Translation */}
              <div className="mb-4">
                <p className="text-navy-800 text-center leading-relaxed">
                  {currentItem.turkishTranslation || 'Çeviri henüz eklenmedi'}
                </p>
              </div>

              {/* Key Words */}
              {currentItem.keyWords && currentItem.keyWords.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-navy-500 uppercase tracking-wide mb-2">
                    📚 Önemli Kelimeler
                  </p>
                  <div className="space-y-1.5">
                    {currentItem.keyWords.map((kw, i) => (
                      <div key={i} className="flex justify-between items-center bg-white dark:bg-neutral-700 rounded-lg px-3 py-2 shadow-sm">
                        <span className="text-sm font-medium text-navy-900">{kw.word}</span>
                        <span className="text-sm text-racing-700">{kw.translation}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-xs text-navy-400 text-center mt-4">👆 Geri dönmek için dokun</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Controls Card */}
      <div ref={controlsCardRef} className="card-elevated p-4">
        {/* Phase Indicator */}
        <div className="flex justify-center gap-2 mb-4">
          {[
            { phase: 'listen', label: 'Listen' },
            { phase: 'record', label: 'Record' },
            { phase: 'compare', label: 'Compare' }
          ].map((item, i) => {
            const phases = ['listen', 'record', 'compare']
            const currentPhaseIndex = phases.indexOf(phase)
            const isActive = item.phase === phase
            // When in compare phase, all steps are complete (including compare itself)
            const isCompleted = i < currentPhaseIndex || (phase === 'compare' && item.phase === 'compare')

            return (
              <div key={item.phase} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={clsx(
                    'w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors',
                    isCompleted
                      ? 'bg-racing-600 text-white'
                      : isActive
                        ? 'bg-navy-900 text-white'
                        : 'bg-cream-200 text-navy-500'
                  )}>
                    {i + 1}
                  </div>
                  <span className="text-xs text-navy-500 mt-1">{item.label}</span>
                </div>
                {i < 2 && (
                  <div className={clsx(
                    'w-12 h-0.5 mx-2',
                    isCompleted
                      ? 'bg-racing-600'
                      : 'bg-cream-200'
                  )} />
                )}
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2">
          {/* Listen Phase */}
          {phase === 'listen' && (
            <div className="flex items-center gap-3 w-full justify-center">
              <button
                onClick={handlePlayOriginal}
                className="btn-secondary flex-1 max-w-[140px] py-2.5"
              >
                {isSpeaking ? (
                  <>
                    <Pause className="w-5 h-5 mr-1" />
                    Pause
                  </>
                ) : (
                  <>
                    <Volume2 className="w-5 h-5 mr-1" />
                    Listen
                  </>
                )}
              </button>
              <button
                onClick={handleStartRecording}
                className="btn-accent flex-1 max-w-[160px] py-2.5"
              >
                <Mic className="w-5 h-5 mr-1" />
                Record
              </button>
            </div>
          )}

          {/* Practice Phase */}
          {phase === 'practice' && (
            <>
              <p className="text-navy-600 text-center text-sm mb-1">
                Listen again and try to speak along silently (mumbling)
              </p>
              <button
                onClick={handlePlayOriginal}
                className="btn-primary w-44 py-2.5"
              >
                {isSpeaking ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Play Again
                  </>
                )}
              </button>
              <button
                onClick={() => setPhase('record')}
                className="btn-accent"
              >
                Ready to record
                <Mic className="w-4 h-4 ml-2" />
              </button>
            </>
          )}

          {/* Record Phase */}
          {phase === 'record' && (
            <>
              <div className={clsx(
                'w-16 h-16 rounded-full flex items-center justify-center transition-all',
                isListening
                  ? 'bg-red-500 animate-pulse'
                  : 'bg-navy-900'
              )}>
                <Mic className="w-6 h-6 text-white" />
              </div>
              <p className="text-navy-600 text-xs">
                {isListening ? 'Recording... Speak now!' : 'Ready to record'}
              </p>

              {/* Show live transcript while recording */}
              {isListening && transcript && (
                <div className="w-full max-w-md p-2 bg-navy-50 rounded-lg border border-navy-200">
                  <p className="text-xs text-navy-500 mb-1">Hearing:</p>
                  <p className="text-navy-800 text-sm">{transcript}</p>
                </div>
              )}

              <div className="flex gap-2">
                {!isListening ? (
                  <>
                    <button
                      onClick={handlePlayOriginal}
                      className="btn-secondary"
                    >
                      <Volume2 className="w-5 h-5 mr-2" />
                      Listen Again
                    </button>
                    <button
                      onClick={handleStartRecording}
                      className="btn-primary"
                    >
                      <Mic className="w-5 h-5 mr-2" />
                      Start Recording
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleStopRecording}
                    className="btn-secondary bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
                  >
                    <MicOff className="w-5 h-5 mr-2" />
                    Stop Recording
                  </button>
                )}
              </div>
              {recognitionError && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {recognitionError}
                </div>
              )}
            </>
          )}

          {/* Compare Phase */}
          {phase === 'compare' && (
            <div className="w-full space-y-3">
              <div className="grid md:grid-cols-2 gap-2">
                {/* Original */}
                <div className="p-2.5 bg-cream-50 rounded-lg">
                  <p className="text-xs font-medium text-navy-500 uppercase tracking-wide mb-0.5">
                    Original
                  </p>
                  <p className="text-navy-900 text-sm leading-snug">{currentItem.text}</p>
                </div>

                {/* User's Version */}
                <div className="p-2.5 bg-racing-50 rounded-lg border border-racing-200">
                  <p className="text-xs font-medium text-racing-700 uppercase tracking-wide mb-0.5">
                    Your Version
                  </p>
                  <p className="text-navy-900 text-sm leading-snug">
                    {finalTranscript || transcript || '(No speech detected)'}
                  </p>
                </div>
              </div>

              {/* Score */}
              {(finalTranscript || transcript) && (
                <div className="text-center p-3 bg-navy-50 rounded-lg">
                  <p className="text-xs text-navy-600">Similarity Score</p>
                  <p className="text-2xl font-bold text-navy-900">
                    {compareTexts()}%
                  </p>
                  <p className="text-xs text-navy-500 mt-1">
                    {compareTexts() >= 80
                      ? 'Excellent! Your pronunciation is very close.'
                      : compareTexts() >= 60
                        ? 'Good effort! Keep practicing.'
                        : 'Keep trying! Listen and practice more.'}
                  </p>
                </div>
              )}

              <div className="flex justify-center gap-2 mt-1">
                <button onClick={handleReset} className="btn-secondary py-2 text-sm">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
                {currentIndex < filteredContent.length - 1 && (
                  <button onClick={handleNext} className="btn-primary py-2 text-sm">
                    Next Phrase
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

    </motion.div >
  )
}
