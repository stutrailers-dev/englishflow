import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { Mic, RotateCcw, Volume2, X, ChevronRight, Target, Lock as Clock, Trophy, Lightbulb, Pause, BookOpen, Star, Check, MicOff, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { generateDynamicResponse, AIResponse } from '../services/aiService'
import { useSpeechRecognition } from '../hooks/useSpeechRecognition'
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis'
import { scenarios } from '../data/scenarios'
import { Scenario, ScenarioCategory } from '../types'
import { useProgressStore } from '../stores/progressStore'
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
  const [shouldDelaySort, setShouldDelaySort] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isGeneratingResponse, setIsGeneratingResponse] = useState(false)
  const [lastScore, setLastScore] = useState<number | null>(null)
  const [offTopicCount, setOffTopicCount] = useState(0)

  // Track detected user choices and AI responses
  const [userChoices, setUserChoices] = useState<Map<number, string>>(new Map())
  const [aiResponses, setAiResponses] = useState<Map<number, string>>(new Map())

  // STAY exchanges: Accumulates all off-topic user messages and AI responses
  // This array grows with each STAY action and is cleared on NEXT_TURN
  interface StayExchange {
    userText: string
    userScore: number
    aiResponse: string
  }
  const [stayExchanges, setStayExchanges] = useState<StayExchange[]>([])

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
    clearScenarioProgress,
    markScenarioCompleted,
    isScenarioCompleted
  } = useProgressStore()

  // Ref to track previous listening state
  const wasListeningRef = useRef(false)
  // Ref to prevent double submission
  const isSubmittingRef = useRef(false)
  // Ref for dialogue area to scroll to
  const dialogueAreaRef = useRef<HTMLDivElement>(null)
  // Ref for conversation history scroll container
  const conversationHistoryRef = useRef<HTMLDivElement>(null)

  // Filter and sort scenarios (completed ones go to bottom, with delay for just-completed)
  const filteredScenarios = useMemo(() => {
    const filtered = scenarios.filter(scenario => {
      const matchesCategory = categoryFilter === 'all' || scenario.category === categoryFilter
      return matchesCategory
    })
    // If delay is active, don't sort - keep natural order (just-completed stays at top)
    if (shouldDelaySort) {
      return filtered
    }
    // Sort: incomplete first, completed last
    return filtered.sort((a, b) => {
      const aCompleted = isScenarioCompleted(a.id)
      const bCompleted = isScenarioCompleted(b.id)
      if (aCompleted === bCompleted) return 0
      return aCompleted ? 1 : -1
    })
  }, [categoryFilter, isScenarioCompleted, shouldDelaySort])

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

  // Helper to personalize text and clean placeholders
  const processText = useCallback((text: string) => {
    let processed = personalizeText(text)
    // Clean any remaining placeholders like {{SEAT_NUMBER}} if they weren't replaced
    // Replace with "..." to avoid showing code to user
    processed = processed.replace(/\{\{[A-Z_]+\}\}/g, '...')
    return processed
  }, [personalizeText])

  // Helper to get processed text for any turn (history or current)
  const getDisplayText = useCallback((turn: any, index: number) => {
    // 1. Check for AI response
    const aiResponse = aiResponses.get(index)
    if (aiResponse) {
      return processText(aiResponse)
    }

    // 2. Fallback to template system
    let processedText = turn.text
    if (turn.dynamicReplacements && turn.choiceKeywords) {
      // Look for user's previous choice in collected userChoices
      for (let i = index - 1; i >= 0; i--) {
        const previousChoice = userChoices.get(i)
        if (previousChoice && turn.dynamicReplacements[previousChoice]) {
          const replacements = turn.dynamicReplacements[previousChoice]
          for (const [placeholder, value] of Object.entries(replacements)) {
            processedText = processedText.replace(new RegExp(`\\{\\{${placeholder}\\}\\}`, 'g'), String(value))
          }
          break
        }
      }

      // Default choice if still has placeholders
      if (processedText.includes('{{')) {
        const defaultChoice = Object.keys(turn.dynamicReplacements)[0]
        if (defaultChoice) {
          const replacements = turn.dynamicReplacements[defaultChoice]
          for (const [placeholder, value] of Object.entries(replacements)) {
            processedText = processedText.replace(new RegExp(`\\{\\{${placeholder}\\}\\}`, 'g'), String(value))
          }
        }
      }
    }

    // 3. Cleanup placeholders and personalize
    return processText(processedText)
  }, [aiResponses, userChoices, processText])

  // Get current dialogue turn with dynamic replacements based on user choices
  const currentTurn = useMemo(() => {
    if (!selectedScenario) return null
    const turn = selectedScenario.dialogue[currentTurnIndex]
    if (!turn) return null

    const processedText = getDisplayText(turn, currentTurnIndex)

    return {
      ...turn,
      text: processedText,
      expectedResponses: turn.expectedResponses?.map(r => ({
        ...r,
        text: processText(r.text)
      }))
    }
  }, [selectedScenario, currentTurnIndex, getDisplayText, processText])

  // Handle user response submission
  const submitResponse = useCallback(() => {
    if (!currentTurn || !transcript || currentTurn.role !== 'user') return

    // Prevent double submission
    if (isSubmittingRef.current) return
    isSubmittingRef.current = true

    // Calculate score
    // Calculate score
    let score = 0
    const rawPreviousTurn = selectedScenario?.dialogue[currentTurnIndex - 1]

    // Context-aware filtering: Only consider responses relevant to user's previous choices
    let relevantExpectedResponses = rawPreviousTurn?.expectedResponses
    if (relevantExpectedResponses && userChoices.size > 0) {
      const filtered = relevantExpectedResponses.filter(er => {
        if (!er.relatesToChoice) return true
        return er.relatesToChoice.some(choice => Array.from(userChoices.values()).includes(choice))
      })
      if (filtered.length > 0) {
        relevantExpectedResponses = filtered
      }
    }

    const previousTurn = rawPreviousTurn ? {
      ...rawPreviousTurn,
      expectedResponses: relevantExpectedResponses?.map(er => ({
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
  }, [currentTurn, transcript, selectedScenario, currentTurnIndex, userChoices])

  // Close feedback and move to next turn
  const closeFeedbackAndContinue = useCallback(async () => {
    console.log('🎬 closeFeedbackAndContinue called')
    console.log('🎬 currentTurnIndex:', currentTurnIndex)
    console.log('🎬 transcript:', transcript)
    console.log('🎬 selectedScenario:', selectedScenario?.id)

    setShowFeedback(false)
    setLastScore(null)
    setLastFeedback(null)

    // Detect user choice from transcript before resetting
    let nextTurnIndex = currentTurnIndex + 1

    if (selectedScenario && transcript) {
      console.log('🎬 Inside main if block')
      const lowerText = transcript.toLowerCase()
      let isTerminating = false

      // 1. Check Global Termination (Emergency Exit)
      if (selectedScenario.terminationConfig) {
        const { keywords, targetTurnId } = selectedScenario.terminationConfig
        if (keywords.some(kw => lowerText.includes(kw.toLowerCase()))) {
          const targetIndex = selectedScenario.dialogue.findIndex(d => d.id === targetTurnId)
          if (targetIndex !== -1) {
            nextTurnIndex = targetIndex
            isTerminating = true
          }
        }
      }

      // 2. Check Skip Logic (if not terminating)
      const currentDialogueTurn = selectedScenario.dialogue[currentTurnIndex]
      if (!isTerminating && currentDialogueTurn?.skipLogic) {
        const { triggerKeywords, skipCount, invertCondition } = currentDialogueTurn.skipLogic
        let shouldSkip = triggerKeywords.some(kw => lowerText.includes(kw.toLowerCase()))
        if (invertCondition) shouldSkip = !shouldSkip
        if (shouldSkip) {
          nextTurnIndex += skipCount
        }
      }

      const nextTurn = selectedScenario.dialogue[nextTurnIndex]
      let detectedChoice: string | null = null

      // Fix: Choice keywords should be checked on the CURRENT turn (the question being answered), 
      // not the next turn. The metadata is on the Agent turn asking the question.
      if (currentDialogueTurn?.choiceKeywords) {
        const userResponseLower = transcript.toLowerCase()

        // Smart detection that handles negations
        // Example: "I don't want window" -> detects "window" but sees "don't", so picks "aisle" (if available)
        for (const keyword of currentDialogueTurn.choiceKeywords) {
          const kw = keyword.toLowerCase()
          if (userResponseLower.includes(kw)) {
            // Check for nearby negations (not, no, don't, won't) within reasonable distance before the keyword
            // Regex checks for negation words up to 5 words before the keyword
            const negationRegex = new RegExp(`(not|no|don't|dont|won't|wont|prefer)\\s+(?:\\w+\\s+){0,5}${kw}`, 'i')
            const isNegated = negationRegex.test(userResponseLower) && !userResponseLower.includes(`prefer ${kw}`) // Exception for "prefer window"

            if (isNegated) {
              // Be clever: If user says "no window", look for the OTHER keyword in the list
              const otherOption = currentDialogueTurn.choiceKeywords.find(k => k.toLowerCase() !== kw)
              if (otherOption) {
                detectedChoice = otherOption.toLowerCase()
              }
            } else {
              detectedChoice = kw
            }
            break
          }
        }

        // Also handle direct negative answers for Yes/No questions (Luggage etc)
        if (!detectedChoice && (currentDialogueTurn.choiceKeywords.includes('yes') || currentDialogueTurn.choiceKeywords.includes('no'))) {
          if (userResponseLower.includes('no') || userResponseLower.includes('not') || userResponseLower.includes("don't")) {
            detectedChoice = 'no'
          } else if (userResponseLower.includes('yes') || userResponseLower.includes('yeah') || userResponseLower.includes('sure')) {
            detectedChoice = 'yes'
          }
        }

        if (detectedChoice) {
          setUserChoices(prev => {
            const newMap = new Map(prev)
            newMap.set(currentTurnIndex, detectedChoice!)
            return newMap
          })
        }
      }

      // AI Response Generation
      // When user answers a question, they are on a USER turn (currentTurnIndex).
      // The question they answered is in the PREVIOUS turn (agent turn).
      // So we need to check if the PREVIOUS turn is an agent turn.
      const answeredTurn = currentTurnIndex > 0 ? selectedScenario.dialogue[currentTurnIndex - 1] : null
      console.log('🤖 Checking AI generation condition:')
      console.log('🤖 currentTurnIndex:', currentTurnIndex)
      console.log('🤖 answeredTurn (previous):', answeredTurn?.id, answeredTurn?.role)

      if (answeredTurn && answeredTurn.role === 'agent') {
        console.log('🤖 ENTERING AI generation block!')
        setIsGeneratingResponse(true)
        try {
          const contextTurns = selectedScenario.dialogue.slice(Math.max(0, currentTurnIndex - 3), currentTurnIndex)
          const scenarioContext = `
            Scenario: ${selectedScenario.title}
            Goal: ${selectedScenario.objectives.map(o => o.description).join(', ')}
            Conversation History:
            ${contextTurns.map(t => `${t.role}: ${t.text}`).join('\n')}
          `

          const previousAgentTurn = answeredTurn  // The agent turn that was answered

          console.log('🤖 Calling generateDynamicResponse...')
          const responseData: AIResponse | null = await generateDynamicResponse({
            scenarioContext,
            role: 'agent',
            previousAgentLine: previousAgentTurn.text,
            userResponse: transcript,
            originalNextLine: getDisplayText(nextTurn, nextTurnIndex),
            userName: userName,
            detectedChoice: detectedChoice ?? undefined,
            offTopicCount: offTopicCount
          })
          console.log('🤖 AI Response received:', responseData)

          if (responseData) {
            const { text, action } = responseData

            // DIRECTOR ACTION LOGIC
            let responseIndex = nextTurnIndex // Default: save response for the next turn

            if (action === 'TERMINATE') {
              // Add the final exchange to stayExchanges so it's visible
              const lastUserScore = lastScore ?? 0
              setStayExchanges(prev => [...prev, {
                userText: transcript,
                userScore: lastUserScore,
                aiResponse: text
              }])

              // Remove from userResponses to avoid duplication
              const currentUserTurn = selectedScenario.dialogue[currentTurnIndex]
              if (currentUserTurn) {
                setUserResponses(prev => {
                  const newMap = new Map(prev)
                  newMap.delete(currentUserTurn.id)
                  return newMap
                })
              }

              // Trigger TTS for the TERMINATE response
              console.log('🔊 Speaking TERMINATE response:', text.substring(0, 50) + '...')
              speak(text)

              if (selectedScenario.terminationConfig) {
                const abortIndex = selectedScenario.dialogue.findIndex(d => d.id === selectedScenario.terminationConfig!.targetTurnId)
                if (abortIndex !== -1) {
                  nextTurnIndex = abortIndex
                }
              }
              // Don't save to aiResponses - we already have it in stayExchanges
              responseIndex = -1
            } else if (action === 'STAY') {
              if (offTopicCount >= 6) {
                // 7th off-topic attempt -> AI should have returned TERMINATE, but as fallback:
                if (selectedScenario.terminationConfig) {
                  const abortIndex = selectedScenario.dialogue.findIndex(d => d.id === selectedScenario.terminationConfig!.targetTurnId)
                  if (abortIndex !== -1) {
                    nextTurnIndex = abortIndex
                    responseIndex = abortIndex
                  }
                }
              } else {
                setOffTopicCount(prev => prev + 1)
                nextTurnIndex = currentTurnIndex // Prevent advancement

                // For STAY: Add to the stayExchanges array (accumulates all off-topic exchanges)
                const lastUserScore = lastScore ?? 0
                setStayExchanges(prev => [...prev, {
                  userText: transcript,
                  userScore: lastUserScore,
                  aiResponse: text
                }])

                // Remove the user's off-topic response from userResponses to avoid duplication
                // (it's now stored in stayExchanges instead)
                const currentUserTurn = selectedScenario.dialogue[currentTurnIndex]
                if (currentUserTurn) {
                  setUserResponses(prev => {
                    const newMap = new Map(prev)
                    newMap.delete(currentUserTurn.id)
                    return newMap
                  })
                }

                // Trigger TTS for the AI response
                console.log('🔊 Speaking dynamic AI response:', text.substring(0, 50) + '...')
                speak(text)

                responseIndex = -1 // Don't save to aiResponses for STAY
              }
            } else {
              // NEXT_TURN -> Reset quota and clear STAY exchanges
              setOffTopicCount(0)
              setStayExchanges([])
            }

            // Only save to aiResponses if not using dynamicAgentMessages (i.e., not STAY)
            if (responseIndex !== -1) {
              console.log('🤖 Saving AI response at index:', responseIndex, 'text:', text.substring(0, 50) + '...')
              setAiResponses(prev => {
                const newMap = new Map(prev)
                newMap.set(responseIndex, text)
                return newMap
              })
            }
          }
        } catch (error) {
          console.error("AI Generation failed, falling back to script", error)
        } finally {
          setIsGeneratingResponse(false)
        }
      }
    }

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

    if (nextTurnIndex < (selectedScenario?.dialogue.length || 0)) {
      const nextIndex = nextTurnIndex
      setCurrentTurnIndex(nextIndex)

      // Save progress after moving to next turn
      if (selectedScenario) {
        saveScenarioProgress(selectedScenario.id, nextIndex, userResponses)
        console.log(`💾 Progress saved for: ${selectedScenario.title} (Turn ${nextIndex + 1}/${selectedScenario.dialogue.length})`)
      }
    } else {
      setIsComplete(true)
      incrementScenariosCompleted()

      // Mark scenario as completed and clear saved progress
      if (selectedScenario) {
        markScenarioCompleted(selectedScenario.id)
        clearScenarioProgress(selectedScenario.id)
        console.log(`🎉 Scenario completed! Marked as completed: ${selectedScenario.title}`)
      }
    }
  }, [currentTurnIndex, selectedScenario, resetTranscript, incrementScenariosCompleted, addStudyTime, incrementChunksLearned, incrementVocabularyLearned, userResponses, saveScenarioProgress, clearScenarioProgress, markScenarioCompleted, transcript, userName, offTopicCount, getDisplayText, userChoices])


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
      setUserChoices(new Map())
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
      conversationHistoryRef.current.scrollTop = conversationHistoryRef.current.scrollHeight
    }
  }, [currentTurnIndex, transcript, isGeneratingResponse])

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
    setUserChoices(new Map())
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
            const completed = isScenarioCompleted(scenario.id)

            return (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => loadScenario(scenario)}
                className={`card card-hover p-5 cursor-pointer group ${completed ? 'opacity-70' : ''}`}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">
                    {categoryLabels[scenario.category].icon}
                  </span>
                  <div className="flex items-center gap-2">
                    {completed ? (
                      <span className="badge bg-green-600 text-white text-xs flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Tamamlandı
                      </span>
                    ) : hasProgress && (
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
      <div className="max-w-2xl mx-auto pb-24 md:pb-4">
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

          <h2 className="text-2xl font-display font-bold text-navy-900 mb-1">
            Senaryo Tamamlandı! 🎉
          </h2>
          <p className="text-sm text-navy-500 mb-1">Scenario Complete!</p>
          <p className="text-navy-600 mb-6">
            Tebrikler! Bu konuşmayı başarıyla tamamladınız.
          </p>

          {/* Score */}
          <div className="bg-navy-50 rounded-xl p-6 mb-6">
            <div className="text-5xl font-bold text-navy-900 mb-2">
              {overallScore}%
            </div>
            <p className="text-navy-600">Genel Performans</p>
            <p className="text-xs text-navy-400">Overall Performance</p>

            {/* Score breakdown */}
            <div className="flex justify-center gap-8 mt-4">
              <div className="text-center">
                <div className="text-xl font-semibold text-racing-700">
                  {userResponses.size}
                </div>
                <div className="text-sm text-navy-500">Yanıtlar</div>
                <div className="text-xs text-navy-400">Responses</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-racing-700">
                  {selectedScenario.duration}dk
                </div>
                <div className="text-sm text-navy-500">Çalışma Süresi</div>
                <div className="text-xs text-navy-400">Study Time</div>
              </div>
            </div>
          </div>

          {/* Performance feedback */}
          <div className="text-left bg-cream-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-navy-900 mb-2 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              Geri Bildirim / Feedback
            </h4>
            {overallScore >= 80 ? (
              <p className="text-navy-600">
                Harika! Cevaplarınız doğal ve bağlama uygundu. Akıcılığınızı korumak için pratik yapmaya devam edin.
              </p>
            ) : overallScore >= 60 ? (
              <p className="text-navy-600">
                İyi çalışma! Etkili iletişim kurdunuz. Daha iyi sonuçlar için önerilen ifadeleri kullanmayı deneyin.
              </p>
            ) : (
              <p className="text-navy-600">
                Pratik yapmaya devam edin! Bu senaryodaki kalıpları ve kelimeleri gözden geçirin, sonra tekrar deneyin.
              </p>
            )}
          </div>

          {/* Key vocabulary reminder */}
          <div className="text-left mb-6">
            <h4 className="font-semibold text-navy-900 mb-1">Hatırlanacak Önemli İfadeler</h4>
            <p className="text-xs text-navy-400 mb-2">Key Phrases to Remember</p>
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
              Tekrar Dene
            </button>
            <button
              onClick={() => {
                resetScenario()
                // Enable delay sort so completed scenario stays at top briefly
                setShouldDelaySort(true)
                setSelectedScenarioId(null)
                // Scroll to top of page when returning to scenario list
                window.scrollTo({ top: 0, behavior: 'smooth' })
                // After 1750ms, disable delay sort to move completed to bottom
                setTimeout(() => {
                  setShouldDelaySort(false)
                }, 1750)
              }}
              className="btn-primary flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Başka Senaryo
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
          {selectedScenario.dialogue.slice(0, currentTurnIndex + 1).map((turn, index) => {
            // Hide the current active turn if we are generating a response for it
            if (index === currentTurnIndex && isGeneratingResponse && turn.role === 'agent') return null

            // Only render if it's an agent turn OR a user turn with a response
            const hasContent = turn.role === 'agent' || userResponses.has(turn.id)
            if (!hasContent) return null

            return (
              <React.Fragment key={turn.id}>
                <motion.div
                  initial={{ opacity: 0, x: turn.role === 'agent' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${turn.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${turn.role === 'agent'
                    ? 'bg-navy-100 text-navy-900 rounded-tl-sm'
                    : 'bg-racing-700 text-white rounded-tr-sm'
                    }`}>
                    {turn.role === 'agent' ? (
                      <p className="text-sm">{getDisplayText(turn, index)}</p>
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
              </React.Fragment>
            )
          })}

          {/* STAY Exchanges: Off-topic user messages and AI redirect responses */}
          {stayExchanges.map((exchange, idx) => (
            <React.Fragment key={`stay-${idx}`}>
              {/* User's off-topic message */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-end"
              >
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-racing-700 text-white rounded-tr-sm">
                  <p className="text-sm">{exchange.userText}</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <Star className="w-3 h-3 opacity-70" />
                    <span className="text-xs opacity-70">{exchange.userScore}%</span>
                  </div>
                </div>
              </motion.div>

              {/* AI's redirect response */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-start"
              >
                <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-navy-100 text-navy-900 rounded-tl-sm border-l-4 border-racing-500">
                  <p className="text-sm">{exchange.aiResponse}</p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}

          {/* AI Thinking Indicator */}
          {isGeneratingResponse && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-navy-100 text-navy-600 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2 shadow-sm">
                <div className="flex space-x-1">
                  <motion.div className="w-1.5 h-1.5 bg-navy-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.div className="w-1.5 h-1.5 bg-navy-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.div className="w-1.5 h-1.5 bg-navy-400 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
                <span className="text-xs font-medium">AI Thinking...</span>
              </div>
            </motion.div>
          )}
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
                {/* Check if this is the last turn */}
                {currentTurnIndex === selectedScenario.dialogue.length - 1 ? (
                  <button
                    onClick={() => {
                      markScenarioCompleted(selectedScenario.id)
                      incrementScenariosCompleted()
                      setIsComplete(true)
                    }}
                    className="btn-primary"
                  >
                    <Check className="w-4 h-4 mr-1 inline" /> Senaryoyu Tamamla
                  </button>
                ) : (
                  <button
                    onClick={nextTurn}
                    className="btn-primary"
                  >
                    Answer <Mic className="w-4 h-4 ml-1 inline" />
                  </button>
                )}
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
