import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageCircle,
  Mic,
  MicOff,
  Volume2,
  Check,
  X,
  ChevronRight,
  RotateCcw,
  Target,
  Clock,
  Trophy,
  Lightbulb,
  Pause,
  BookOpen,
  Star
} from 'lucide-react'
import { scenarios } from '@/data/scenarios'
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition'
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis'
import { useProgressStore } from '@/stores/progressStore'
import type { Scenario, ScenarioCategory } from '@/types'

// Calculate similarity between two strings
const calculateSimilarity = (str1: string, str2: string): number => {
  const s1 = str1.toLowerCase().replace(/[.,!?]/g, '').trim()
  const s2 = str2.toLowerCase().replace(/[.,!?]/g, '').trim()

  const words1 = s1.split(/\s+/)
  const words2 = s2.split(/\s+/)

  const matchingWords = words1.filter(word =>
    words2.some(w => w.includes(word) || word.includes(w))
  )

  return Math.round((matchingWords.length / Math.max(words1.length, words2.length)) * 100)
}


// Category labels with Turkish translations
const categoryLabels: Record<ScenarioCategory, { en: string; tr: string; icon: string }> = {
  'airport': { en: 'Airport', tr: 'Havalimanı', icon: '✈️' },
  'hotel': { en: 'Hotel', tr: 'Otel', icon: '🏨' },
  'restaurant': { en: 'Restaurant', tr: 'Restoran', icon: '🍽️' },
  'business-meeting': { en: 'Business Meeting', tr: 'İş Toplantısı', icon: '💼' },
  'factory-visit': { en: 'Factory Visit', tr: 'Fabrika Ziyareti', icon: '🏭' },
  'technical-presentation': { en: 'Technical Presentation', tr: 'Teknik Sunum', icon: '📊' },
  'phone-call': { en: 'Phone Call', tr: 'Telefon', icon: '📞' },
  'small-talk': { en: 'Small Talk', tr: 'Sohbet', icon: '💬' }
}

export default function ConversationSimulator() {
  // State - store only scenario ID, derive scenario from original array
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null)
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0)
  const [userResponses, setUserResponses] = useState<Map<string, { text: string; score: number }>>(new Map())

  // Derive selectedScenario from ID - always read from original immutable array
  const selectedScenario = useMemo(() => {
    if (!selectedScenarioId) return null
    return scenarios.find(s => s.id === selectedScenarioId) || null
  }, [selectedScenarioId])
  const [userName] = useState(() => localStorage.getItem('englishflow-user-name') || '')
  const [userGender] = useState<'male' | 'female'>(() => (localStorage.getItem('englishflow-user-gender') as 'male' | 'female') || 'male')

  const [showHints, setShowHints] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState<ScenarioCategory | 'all'>('all')
  const [showFeedback, setShowFeedback] = useState(false)
  const [lastScore, setLastScore] = useState<number | null>(null)
  const [lastFeedback, setLastFeedback] = useState<{
    userResponse: string
    expectedResponses: { text: string; score: number }[]
    bestMatch: string
    matchedKeywords: string[]
    missedKeywords: string[]
  } | null>(null)

  // Hooks
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    error: speechError
  } = useSpeechRecognition()

  const { speak, cancel, isSpeaking } = useSpeechSynthesis()
  const {
    incrementScenariosCompleted,
    addStudyTime,
    incrementChunksLearned,
    incrementVocabularyLearned,
    saveScenarioProgress,
    getScenarioProgress,
    clearScenarioProgress
  } = useProgressStore()

  // Ref to track previous listening state
  const wasListeningRef = useRef(false)
  // Ref to prevent double submission
  const isSubmittingRef = useRef(false)
  // Ref for dialogue area to scroll to
  const dialogueAreaRef = useRef<HTMLDivElement>(null)
  // Ref for conversation history scroll container
  const conversationHistoryRef = useRef<HTMLDivElement>(null)

  // Filter scenarios
  const filteredScenarios = useMemo(() => {
    return scenarios.filter(scenario => {
      const matchesCategory = categoryFilter === 'all' || scenario.category === categoryFilter
      return matchesCategory
    })
  }, [categoryFilter])

  // Helper to personalize text
  const personalizeText = useCallback((text: string) => {
    if (!text) return text

    let personalized = text
    const name = userName || '[Name]'
    const title = userGender === 'female' ? 'Ms.' : 'Mr.'

    // Handle title + placeholder pattern (created by python script replacement)
    personalized = personalized.replace(/Mr\.?\s*{{USER_NAME}}/g, '{{USER_TITLE}} {{USER_NAME}}')

    // Handle gender-specific address terms (Sir/Madam)
    if (userGender === 'female') {
      personalized = personalized.replace(/\bSir\b/g, 'Madam')
      personalized = personalized.replace(/\bsir\b/g, 'madam')
    }

    // Replace placeholders
    personalized = personalized.replace(/{{USER_NAME}}/g, name)
    personalized = personalized.replace(/{{USER_TITLE}}/g, title)

    // Legacy fallback for any missed generic placeholders
    if (userName) {
      personalized = personalized.replace(/\bLewis\b/g, name)
      personalized = personalized.replace(/\bMr\.?\s*Lewis\b/g, `${title} ${name}`)
    }

    return personalized
  }, [userName, userGender])

  // Get current dialogue turn
  const currentTurn = useMemo(() => {
    if (!selectedScenario) return null
    const turn = selectedScenario.dialogue[currentTurnIndex]

    return {
      ...turn,
      text: personalizeText(turn.text),
      expectedResponses: turn.expectedResponses?.map(r => ({
        ...r,
        text: personalizeText(r.text)
      }))
    }
  }, [selectedScenario, currentTurnIndex, personalizeText])

  // Handle user response submission
  const submitResponse = useCallback(() => {
    if (!currentTurn || !transcript || currentTurn.role !== 'user') return

    // Prevent double submission
    if (isSubmittingRef.current) return
    isSubmittingRef.current = true

    // Calculate score
    let score = 0
    const rawPreviousTurn = selectedScenario?.dialogue[currentTurnIndex - 1]
    const previousTurn = rawPreviousTurn ? {
      ...rawPreviousTurn,
      expectedResponses: rawPreviousTurn.expectedResponses?.map(er => ({
        ...er,
        text: personalizeText(er.text)
      })),
      acceptableKeywords: rawPreviousTurn.acceptableKeywords?.map(kw => personalizeText(kw))
    } : undefined

    let bestMatchText = ''
    let matchedKeywords: string[] = []
    let missedKeywords: string[] = []

    if (previousTurn?.expectedResponses) {
      // Find best matching expected response
      const similarities = previousTurn.expectedResponses.map(er => ({
        text: er.text,
        similarity: calculateSimilarity(transcript, er.text),
        score: er.score
      }))
      const bestMatch = similarities.reduce((best, current) =>
        current.similarity > best.similarity ? current : best
      )
      score = bestMatch.similarity
      bestMatchText = bestMatch.text
    }

    // Check keywords and track matches/misses
    if (previousTurn?.acceptableKeywords) {
      const lowerTranscript = transcript.toLowerCase()
      previousTurn.acceptableKeywords.forEach(kw => {
        if (lowerTranscript.includes(kw.toLowerCase())) {
          matchedKeywords.push(kw)
        } else {
          missedKeywords.push(kw)
        }
      })
      // Bonus for keywords
      score = Math.min(100, score + (matchedKeywords.length * 5))
    }

    // Store response
    setUserResponses(prev => new Map(prev).set(currentTurn.id, { text: transcript, score }))
    setLastScore(score)

    // Store detailed feedback
    setLastFeedback({
      userResponse: transcript,
      expectedResponses: previousTurn?.expectedResponses || [],
      bestMatch: bestMatchText,
      matchedKeywords,
      missedKeywords
    })

    setShowFeedback(true)
  }, [currentTurn, transcript, selectedScenario, currentTurnIndex])

  // Close feedback and move to next turn
  const closeFeedbackAndContinue = useCallback(() => {
    setShowFeedback(false)
    setLastScore(null)
    setLastFeedback(null)
    resetTranscript()
    isSubmittingRef.current = false

    // Add study time for this turn (roughly 1-2 minutes per turn)
    addStudyTime(1)
    console.log('✅ Progress saved: +1 minute study time')

    // Track learned content - add a portion of chunks and vocabulary for each successful turn
    if (selectedScenario) {
      const chunksPerTurn = Math.ceil(selectedScenario.chunks.length / selectedScenario.dialogue.filter(d => d.role === 'user').length)
      const vocabPerTurn = Math.ceil(selectedScenario.vocabulary.length / selectedScenario.dialogue.filter(d => d.role === 'user').length)

      incrementChunksLearned(chunksPerTurn)
      incrementVocabularyLearned(vocabPerTurn)
      console.log(`✅ Progress saved: +${chunksPerTurn} chunks, +${vocabPerTurn} vocabulary`)
    }

    if (currentTurnIndex < (selectedScenario?.dialogue.length || 0) - 1) {
      const nextIndex = currentTurnIndex + 1
      setCurrentTurnIndex(nextIndex)

      // Save progress after moving to next turn
      if (selectedScenario) {
        saveScenarioProgress(selectedScenario.id, nextIndex, userResponses)
        console.log(`💾 Progress saved for: ${selectedScenario.title} (Turn ${nextIndex + 1}/${selectedScenario.dialogue.length})`)
      }
    } else {
      setIsComplete(true)
      incrementScenariosCompleted()

      // Clear saved progress on completion
      if (selectedScenario) {
        clearScenarioProgress(selectedScenario.id)
        console.log(`🎉 Scenario completed! Progress cleared for: ${selectedScenario.title}`)
      }
    }
  }, [currentTurnIndex, selectedScenario, resetTranscript, incrementScenariosCompleted, addStudyTime, incrementChunksLearned, incrementVocabularyLearned, userResponses, saveScenarioProgress, clearScenarioProgress])


  // Cleanup when leaving a scenario - ensures state is fully reset
  useEffect(() => {
    if (!selectedScenario) {
      // Reset all state when no scenario is selected
      setCurrentTurnIndex(0)
      setUserResponses(new Map())
      setIsComplete(false)
      setShowHints(false)
      setShowFeedback(false)
      setLastScore(null)
      setLastFeedback(null)
      resetTranscript()
      cancel()
      isSubmittingRef.current = false
      wasListeningRef.current = false
    }
  }, [selectedScenario, resetTranscript, cancel])

  // Auto-play agent turns
  useEffect(() => {
    if (currentTurn?.role === 'agent' && selectedScenario) {
      speak(currentTurn.text)
    }
  }, [currentTurn, selectedScenario, speak])

  // Auto-scroll conversation history to bottom when new message is added
  useEffect(() => {
    if (conversationHistoryRef.current) {
      setTimeout(() => {
        conversationHistoryRef.current?.scrollTo({
          top: conversationHistoryRef.current.scrollHeight,
          behavior: 'smooth'
        })
      }, 100)
    }
  }, [currentTurnIndex, userResponses.size])

  // Auto-submit when recording stops and there's a transcript
  useEffect(() => {
    // Detect when listening stops (was listening, now not listening)
    if (wasListeningRef.current && !isListening && transcript && currentTurn?.role === 'user') {
      submitResponse()
    }
    wasListeningRef.current = isListening
  }, [isListening, transcript, currentTurn, submitResponse])

  // Reset scenario
  const resetScenario = useCallback(() => {
    if (selectedScenario) {
      clearScenarioProgress(selectedScenario.id)
      console.log(`🔄 Scenario reset: ${selectedScenario.title}`)
    }

    setCurrentTurnIndex(0)
    setUserResponses(new Map())
    setIsComplete(false)
    setShowHints(false)
    setShowFeedback(false)
    setLastScore(null)
    resetTranscript()
    cancel()
    isSubmittingRef.current = false
    wasListeningRef.current = false
  }, [resetTranscript, cancel, selectedScenario, clearScenarioProgress])

  // Load scenario with saved progress
  const loadScenario = useCallback((scenario: Scenario) => {
    // ALWAYS cancel any ongoing speech/listening first
    cancel()
    if (isListening) {
      stopListening()
    }
    resetTranscript()

    // ALWAYS reset ALL state first - this prevents any carryover
    setCurrentTurnIndex(0)
    setUserResponses(new Map())
    setIsComplete(false)
    setShowHints(false)
    setShowFeedback(false)
    setLastScore(null)
    setLastFeedback(null)
    isSubmittingRef.current = false
    wasListeningRef.current = false

    // Now check for saved progress and restore if exists
    const savedProgress = getScenarioProgress(scenario.id)
    if (savedProgress) {
      console.log(`📂 Loading saved progress for: ${scenario.title}`)
      // Use setTimeout to ensure state is reset before restoring
      setTimeout(() => {
        setCurrentTurnIndex(savedProgress.currentTurnIndex)
        const responsesMap = new Map(
          savedProgress.userResponses.map(r => [r.turnId, { text: r.text, score: r.score }])
        )
        setUserResponses(responsesMap)
      }, 0)
    } else {
      console.log(`🆕 Starting new scenario: ${scenario.title}`)
    }

    setSelectedScenarioId(scenario.id)
  }, [getScenarioProgress, resetTranscript, cancel, isListening, stopListening])

  // Track progress when leaving scenario
  const handleBackToScenarios = useCallback(() => {
    // Save progress before leaving if user hasn't completed
    if (selectedScenario && userResponses.size > 0 && !isComplete) {
      // Additional study time for partial completion (extra minute per response)
      const extraTime = userResponses.size
      addStudyTime(extraTime)
      console.log(`✅ Partial completion saved: +${extraTime} minutes for ${userResponses.size} responses`)
    }

    // Reset state first (while selectedScenario is still available)
    resetScenario()
    // Then clear selected scenario
    setSelectedScenarioId(null)
  }, [selectedScenario, userResponses.size, isComplete, addStudyTime, resetScenario])

  // Handle recording toggle
  const toggleRecording = () => {
    if (isListening) {
      stopListening()
      // submitResponse will be called automatically by the useEffect when listening stops
    } else {
      resetTranscript()
      startListening()
    }
  }

  // Skip to next turn (for agent turns)
  const nextTurn = () => {
    cancel()
    if (currentTurnIndex < (selectedScenario?.dialogue.length || 0) - 1) {
      const nextIndex = currentTurnIndex + 1
      setCurrentTurnIndex(nextIndex)

      // Auto-start recording if next turn is user's turn
      const nextDialogueTurn = selectedScenario?.dialogue[nextIndex]
      if (nextDialogueTurn?.role === 'user') {
        resetTranscript()
        startListening()
      }
    }
  }

  // Calculate overall score
  const overallScore = useMemo(() => {
    if (userResponses.size === 0) return 0
    const scores = Array.from(userResponses.values()).map(r => r.score)
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  }, [userResponses])

  // Replay agent audio
  const replayAudio = () => {
    if (currentTurn?.role === 'agent') {
      speak(currentTurn.text)
    }
  }

  // Scenario selection view
  if (!selectedScenario) {
    return (
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-display font-bold text-navy-900 mb-2">
            Conversation Simulator
          </h1>
          <p className="text-navy-600">
            Konuşma Simülatörü - Practice real-world dialogues
          </p>
        </motion.div>

        {/* Category Filter - iOS Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${categoryFilter === 'all'
                ? 'bg-navy-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                : 'bg-gray-100 dark:bg-neutral-800 text-navy-700 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
                }`}
            >
              All Categories
              <span className={`ml-1.5 text-xs ${categoryFilter === 'all' ? 'opacity-80' : 'opacity-60'}`}>
                {scenarios.length}
              </span>
            </button>
            {Object.entries(categoryLabels).map(([key, { en, icon }]) => (
              <button
                key={key}
                onClick={() => setCategoryFilter(key as ScenarioCategory)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${categoryFilter === key
                  ? 'bg-navy-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                  : 'bg-gray-100 dark:bg-neutral-800 text-navy-700 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
                  }`}
              >
                {icon} {en}
                <span className={`ml-1.5 text-xs ${categoryFilter === key ? 'opacity-80' : 'opacity-60'}`}>
                  {scenarios.filter(s => s.category === key).length}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Scenario Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredScenarios.map((scenario, index) => {
            const savedProgress = getScenarioProgress(scenario.id)
            const hasProgress = savedProgress && savedProgress.currentTurnIndex > 0

            return (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => loadScenario(scenario)}
                className="card card-hover p-5 cursor-pointer group"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">
                    {categoryLabels[scenario.category].icon}
                  </span>
                  <div className="flex items-center gap-2">
                    {hasProgress && (
                      <span className="badge bg-racing-700 text-white text-xs">
                        Continue
                      </span>
                    )}
                    <span className="badge badge-navy text-xs">
                      {scenario.difficulty}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-navy-900 mb-1 group-hover:text-racing-700 transition-colors">
                  {scenario.title}
                </h3>
                <p className="text-sm text-navy-500 mb-3">
                  {scenario.titleTurkish}
                </p>

                {/* Setting preview */}
                <p className="text-sm text-navy-600 line-clamp-2 mb-4">
                  {scenario.setting}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-navy-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{scenario.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    <span>{scenario.objectives.length} hedef</span>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <ChevronRight className="w-6 h-6 text-racing-700" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {filteredScenarios.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-navy-300 mx-auto mb-4" />
            <p className="text-navy-500">No scenarios found matching your criteria.</p>
          </div>
        )}
      </div>
    )
  }

  // Scenario completion view
  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 text-center"
        >
          {/* Trophy */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-2xl font-display font-bold text-navy-900 mb-2">
            Scenario Complete!
          </h2>
          <p className="text-navy-600 mb-6">
            Tebrikler! You've completed this conversation.
          </p>

          {/* Score */}
          <div className="bg-navy-50 rounded-xl p-6 mb-6">
            <div className="text-5xl font-bold text-navy-900 mb-2">
              {overallScore}%
            </div>
            <p className="text-navy-600">Overall Performance</p>

            {/* Score breakdown */}
            <div className="flex justify-center gap-8 mt-4">
              <div className="text-center">
                <div className="text-xl font-semibold text-racing-700">
                  {userResponses.size}
                </div>
                <div className="text-sm text-navy-500">Responses</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-racing-700">
                  {selectedScenario.duration}min
                </div>
                <div className="text-sm text-navy-500">Study Time</div>
              </div>
            </div>
          </div>

          {/* Performance feedback */}
          <div className="text-left bg-cream-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-navy-900 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Feedback
            </h4>
            {overallScore >= 80 ? (
              <p className="text-navy-600">
                Excellent work! Your responses were natural and appropriate for the context.
                Keep practising to maintain your fluency.
              </p>
            ) : overallScore >= 60 ? (
              <p className="text-navy-600">
                Good effort! You communicated effectively. Try using more of the suggested
                phrases next time for even better results.
              </p>
            ) : (
              <p className="text-navy-600">
                Keep practising! Review the chunks and vocabulary from this scenario,
                then try again. Each attempt builds your confidence.
              </p>
            )}
          </div>

          {/* Key vocabulary reminder */}
          <div className="text-left mb-6">
            <h4 className="font-semibold text-navy-900 mb-2">Key Phrases to Remember:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedScenario.chunks.map((chunk, i) => (
                <span key={i} className="badge badge-green text-sm">
                  {chunk}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={resetScenario}
              className="btn-secondary flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
            <button
              onClick={() => {
                resetScenario()
                setSelectedScenarioId(null)
              }}
              className="btn-primary flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Choose Another
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  // Active scenario view - key forces React to remount when scenario changes
  return (
    <div key={`scenario-${selectedScenario.id}`} className="max-w-4xl mx-auto pb-24 md:pb-4">
      {/* Compact Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3"
      >
        <button
          onClick={handleBackToScenarios}
          className="text-navy-500 hover:text-navy-700 mb-2 flex items-center gap-1 text-sm"
        >
          ← Back
        </button>

        <div className="card p-4 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">
                {categoryLabels[selectedScenario.category].icon}
              </span>
              <div>
                <h1 className="text-lg font-display font-bold">
                  {selectedScenario.title}
                </h1>
                <p className="text-navy-200 text-xs">
                  {selectedScenario.titleTurkish}
                </p>
              </div>
            </div>
            <span className="badge bg-white/20 text-white text-xs">
              {selectedScenario.difficulty}
            </span>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-2">
            <div className="flex-1 progress-bar bg-white/20 h-1.5">
              <motion.div
                className="progress-fill bg-racing-700"
                initial={{ width: 0 }}
                animate={{ width: `${((currentTurnIndex + 1) / selectedScenario.dialogue.length) * 100}%` }}
              />
            </div>
            <span className="text-xs text-navy-200 whitespace-nowrap">
              {currentTurnIndex + 1}/{selectedScenario.dialogue.length}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Compact Objectives - Single Line with Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="card p-3 mb-3"
      >
        <div className="flex items-center gap-2 text-xs">
          <Target className="w-4 h-4 text-racing-700 flex-shrink-0" />
          <span className="font-medium text-navy-600">Hedefler:</span>
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
            {selectedScenario.objectives.map((obj, i) => (
              <div key={obj.id} className="flex items-center gap-1 flex-shrink-0">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${i < Math.floor(currentTurnIndex / 2) ? 'bg-racing-700 text-white' : 'bg-navy-100 text-navy-500'
                  }`}>
                  {i < Math.floor(currentTurnIndex / 2) ? (
                    <Check className="w-2.5 h-2.5" />
                  ) : (
                    <span className="text-[9px]">{i + 1}</span>
                  )}
                </div>
                <span className="text-navy-700">{obj.descriptionTurkish || obj.description}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Dialogue Area */}
      <motion.div
        ref={dialogueAreaRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-5 mb-6"
      >
        {/* Conversation history */}
        <div ref={conversationHistoryRef} className="space-y-4 mb-3 max-h-[250px] overflow-y-auto scrollbar-thin">
          {selectedScenario.dialogue.slice(0, currentTurnIndex + 1).map((turn) => {
            // Only render if it's an agent turn OR a user turn with a response
            const hasContent = turn.role === 'agent' || userResponses.has(turn.id)
            if (!hasContent) return null

            return (
              <motion.div
                key={turn.id}
                initial={{ opacity: 0, x: turn.role === 'agent' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex ${turn.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${turn.role === 'agent'
                  ? 'bg-navy-100 text-navy-900 rounded-tl-sm'
                  : 'bg-racing-700 text-white rounded-tr-sm'
                  }`}>
                  {turn.role === 'agent' ? (
                    <p className="text-sm">{personalizeText(turn.text)}</p>
                  ) : (
                    <>
                      <p className="text-sm">{userResponses.get(turn.id)?.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <Star className="w-3 h-3 opacity-70" />
                        <span className="text-xs opacity-70">
                          {userResponses.get(turn.id)?.score}%
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Current turn interaction */}
        {currentTurn && (
          <div className="border-t border-navy-100 pt-4">
            {currentTurn.role === 'agent' ? (
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <button
                    onClick={replayAudio}
                    disabled={isSpeaking}
                    className="btn-icon"
                  >
                    {isSpeaking ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <span className="text-sm text-navy-500">
                    {isSpeaking ? 'Playing...' : 'Replay audio'}
                  </span>
                </div>
                <button
                  onClick={nextTurn}
                  className="btn-primary"
                >
                  Answer <Mic className="w-4 h-4 ml-1 inline" />
                </button>
              </div>
            ) : (
              <div>
                <p className="text-sm text-navy-500 mb-3 text-center">
                  Your turn to respond. Press the microphone to speak.
                </p>

                {/* Transcript display */}
                {transcript && (
                  <div className="bg-navy-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-navy-700">{transcript}</p>
                  </div>
                )}

                {/* Recording controls */}
                <div className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={toggleRecording}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${isListening
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-racing-700 text-white hover:bg-racing-800'
                      }`}
                  >
                    {isListening ? (
                      <MicOff className="w-7 h-7" />
                    ) : (
                      <Mic className="w-7 h-7" />
                    )}
                  </motion.button>
                </div>

                {isListening && (
                  <p className="text-center text-sm text-red-500 mt-2 animate-pulse">
                    Recording... Click again to stop
                  </p>
                )}

                {speechError && (
                  <p className="text-center text-sm text-red-500 mt-2">
                    {speechError}
                  </p>
                )}

                {/* Hints toggle */}
                <div className="mt-4 text-center">
                  <button
                    onClick={() => setShowHints(!showHints)}
                    className="text-sm text-navy-500 hover:text-racing-700 flex items-center gap-1 mx-auto"
                  >
                    <Lightbulb className="w-4 h-4" />
                    {showHints ? 'Hide hints' : 'Show hints'}
                  </button>

                  <AnimatePresence>
                    {showHints && selectedScenario.dialogue[currentTurnIndex - 1]?.hints && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 bg-yellow-50 rounded-lg p-3"
                      >
                        <ul className="text-sm text-yellow-800 space-y-1">
                          {selectedScenario.dialogue[currentTurnIndex - 1].hints?.map((hint, i) => (
                            <li key={i}>💡 {hint}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Feedback overlay */}
      <AnimatePresence>
        {showFeedback && lastScore !== null && lastFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.5, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 20 }}
              className="bg-white rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Score Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${lastScore >= 70 ? 'bg-green-100' : lastScore >= 40 ? 'bg-yellow-100' : 'bg-red-100'
                  }`}>
                  {lastScore >= 70 ? (
                    <Check className="w-7 h-7 text-green-600" />
                  ) : lastScore >= 40 ? (
                    <span className="text-2xl">👍</span>
                  ) : (
                    <span className="text-2xl">💪</span>
                  )}
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy-900">
                    {lastScore}%
                  </div>
                  <p className="text-sm text-navy-600">
                    {lastScore >= 70 ? 'Excellent!' : lastScore >= 40 ? 'Good effort!' : 'Keep practising!'}
                  </p>
                </div>
              </div>

              {/* Your Response */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-2">
                  Senin Cevabın / Your Response
                </h4>
                <div className="bg-navy-50 rounded-lg p-3">
                  <p className="text-sm text-navy-700">{lastFeedback.userResponse}</p>
                </div>
              </div>

              {/* Suggested Answer */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-2">
                  Önerilen Cevap / Suggested Answer
                </h4>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-sm text-green-800">{lastFeedback.bestMatch}</p>
                </div>
              </div>

              {/* Keywords Analysis */}
              {(lastFeedback.matchedKeywords.length > 0 || lastFeedback.missedKeywords.length > 0) && (
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-2">
                    Anahtar Kelimeler / Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lastFeedback.matchedKeywords.map((kw, i) => (
                      <span key={`matched-${i}`} className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        <Check className="w-3 h-3" />
                        {kw}
                      </span>
                    ))}
                    {lastFeedback.missedKeywords.map((kw, i) => (
                      <span key={`missed-${i}`} className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                        <X className="w-3 h-3" />
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Feedback Message */}
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <div className="flex gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    {lastScore >= 70
                      ? 'Harika! Cümlen doğal ve bağlama uygun. / Great! Your sentence was natural and appropriate.'
                      : lastScore >= 40
                        ? 'İyi deneme! Önerilen cevabı inceleyerek kelime dağarcığını geliştirebilirsin. / Good try! Review the suggested answer to improve your vocabulary.'
                        : 'Eksik anahtar kelimeleri kullanmayı dene. Önerilen cevabı sesli olarak tekrar et. / Try using the missing keywords. Repeat the suggested answer out loud.'}
                  </p>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={closeFeedbackAndContinue}
                className="w-full mt-4 btn-primary flex items-center justify-center gap-2"
              >
                Devam Et / Continue
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vocabulary quick reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card p-5"
      >
        <h3 className="font-semibold text-navy-900 mb-3">Key Vocabulary</h3>
        <div className="flex flex-wrap gap-2">
          {selectedScenario.vocabulary.map((word, i) => (
            <span key={i} className="badge badge-navy text-sm">
              {word}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
