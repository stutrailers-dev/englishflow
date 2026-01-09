import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Volume2,
  BookOpen,
  RotateCcw,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useSpeechSynthesis } from '@/hooks'
import { useSRSStore, useProgressStore } from '@/stores'
import { vocabulary } from '@/data/vocabulary'
import type { ChunkCategory, DifficultyLevel } from '@/types'
import { clsx } from 'clsx'

const VOCAB_PROGRESS_KEY = 'englishflow-vocab-progress'

interface VocabularyLibraryProps {
  embedded?: boolean
}

export default function VocabularyLibrary({ embedded = false }: VocabularyLibraryProps) {
  const [searchParams] = useSearchParams()
  const reviewMode = searchParams.get('mode') === 'review'

  // Load saved filters and progress from localStorage
  const [selectedCategory, setSelectedCategory] = useState<ChunkCategory | 'all'>(() => {
    if (reviewMode) return 'all'
    try {
      const saved = localStorage.getItem(VOCAB_PROGRESS_KEY)
      if (saved) {
        const data = JSON.parse(saved)
        return data.selectedCategory || 'all'
      }
    } catch (error) {
      console.error('Failed to load vocabulary filters:', error)
    }
    return 'all'
  })

  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>(() => {
    if (reviewMode) return 'all'
    try {
      const saved = localStorage.getItem(VOCAB_PROGRESS_KEY)
      if (saved) {
        const data = JSON.parse(saved)
        return data.selectedDifficulty || 'all'
      }
    } catch (error) {
      console.error('Failed to load vocabulary filters:', error)
    }
    return 'all'
  })

  const [searchQuery] = useState(() => {
    if (reviewMode) return ''
    try {
      const saved = localStorage.getItem(VOCAB_PROGRESS_KEY)
      if (saved) {
        const data = JSON.parse(saved)
        return data.searchQuery || ''
      }
    } catch (error) {
      console.error('Failed to load vocabulary filters:', error)
    }
    return ''
  })

  // Load saved progress from localStorage
  const [currentCardIndex, setCurrentCardIndex] = useState(() => {
    if (reviewMode) return 0
    try {
      const saved = localStorage.getItem(VOCAB_PROGRESS_KEY)
      if (saved) {
        const data = JSON.parse(saved)
        return data.currentCardIndex || 0
      }
    } catch (error) {
      console.error('Failed to load vocabulary progress:', error)
    }
    return 0
  })

  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  const { speak, isSpeaking, cancel } = useSpeechSynthesis()
  const { addItem, getItemByItemId, getDueItems, reviewItem } = useSRSStore()
  const { incrementVocabularyLearned } = useProgressStore()

  // Get due items for review mode
  const dueItems = useMemo(() => getDueItems(), [getDueItems])

  const filteredWords = useMemo(() => {
    // In review mode, only show due items
    if (reviewMode) {
      const dueWordIds = dueItems
        .filter(item => item.itemType === 'vocabulary')
        .map(item => item.itemId)
      return vocabulary.filter(word => dueWordIds.includes(word.id))
    }

    // Normal mode - filter by category, difficulty and search
    return vocabulary.filter(word => {
      const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === 'all' || word.difficulty === selectedDifficulty
      const matchesSearch = searchQuery === '' ||
        word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.definitions.some(def => def.meaning.toLowerCase().includes(searchQuery.toLowerCase())) ||
        word.definitions.some(def => def.turkishMeaning?.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesDifficulty && matchesSearch
    })
  }, [selectedCategory, selectedDifficulty, searchQuery, reviewMode, dueItems])

  const currentWord = reviewMode ? filteredWords[currentReviewIndex] : filteredWords[currentCardIndex]

  // Save progress and filters to localStorage
  useEffect(() => {
    if (!reviewMode) {
      try {
        localStorage.setItem(VOCAB_PROGRESS_KEY, JSON.stringify({
          currentCardIndex,
          selectedCategory,
          selectedDifficulty,
          searchQuery,
          lastUpdated: new Date().toISOString()
        }))
      } catch (error) {
        console.error('Failed to save vocabulary progress:', error)
      }
    }
  }, [currentCardIndex, selectedCategory, selectedDifficulty, searchQuery, reviewMode])

  // Track previous filter values to detect actual changes
  const [prevFilters, setPrevFilters] = useState({ selectedCategory, selectedDifficulty, searchQuery })

  // Reset progress only when filters actually change (not on mount)
  useEffect(() => {
    if (!reviewMode) {
      const filtersChanged =
        prevFilters.selectedCategory !== selectedCategory ||
        prevFilters.selectedDifficulty !== selectedDifficulty ||
        prevFilters.searchQuery !== searchQuery

      if (filtersChanged && (prevFilters.selectedCategory !== 'all' || prevFilters.selectedDifficulty !== 'all' || prevFilters.searchQuery !== '')) {
        // Only reset if filters actually changed AND we're not on initial load
        setCurrentCardIndex(0)
      }

      setPrevFilters({ selectedCategory, selectedDifficulty, searchQuery })
    }
  }, [selectedCategory, selectedDifficulty, searchQuery, reviewMode])

  const handleSpeak = (text: string) => {
    if (isSpeaking) {
      cancel()
    } else {
      speak(text)
    }
  }

  const handleFlipCard = (wordId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(wordId)) {
        newSet.delete(wordId)
      } else {
        newSet.add(wordId)
      }
      return newSet
    })
  }

  const handleAddToSRS = (wordId: string) => {
    addItem(wordId, 'vocabulary')
    incrementVocabularyLearned(1)
  }

  const isInSRS = (wordId: string) => {
    return !!getItemByItemId(wordId, 'vocabulary')
  }

  const handleNext = () => {
    if (reviewMode) {
      if (currentReviewIndex < filteredWords.length - 1) {
        setCurrentReviewIndex((prev: number) => prev + 1)
        // Reset flipped state for new card
        setFlippedCards(new Set())
      }
    } else {
      if (currentCardIndex < filteredWords.length - 1) {
        setCurrentCardIndex((prev: number) => prev + 1)
        // Reset flipped state for new card
        setFlippedCards(new Set())
      }
    }
  }

  const handlePrevious = () => {
    if (reviewMode) {
      if (currentReviewIndex > 0) {
        setCurrentReviewIndex((prev: number) => prev - 1)
        setFlippedCards(new Set())
      }
    } else {
      if (currentCardIndex > 0) {
        setCurrentCardIndex((prev: number) => prev - 1)
        setFlippedCards(new Set())
      }
    }
  }

  const handleMarkReviewed = (wordId: string, quality: number) => {
    const srsItem = getItemByItemId(wordId, 'vocabulary')
    if (srsItem) {
      reviewItem(srsItem.id, quality as 0 | 1 | 2 | 3 | 4 | 5)
      handleNext()
    }
  }

  const isCardFlipped = currentWord ? flippedCards.has(currentWord.id) : false

  const categories: Array<{ id: ChunkCategory | 'all'; label: string }> = [
    { id: 'all', label: 'All' },
    { id: 'business', label: 'Business' },
    { id: 'technical', label: 'Technical' },
    { id: 'travel', label: 'Travel' },
    { id: 'daily', label: 'Daily' },
    { id: 'social', label: 'Social' }
  ]

  const difficulties: Array<{ id: DifficultyLevel | 'all'; label: string }> = [
    { id: 'all', label: 'All Levels' },
    { id: 'A2', label: 'A2' },
    { id: 'B1', label: 'B1' },
    { id: 'B2', label: 'B2' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-3 pb-28 md:pb-4"
    >
      {/* Header - only show if not embedded */}
      {!embedded && (
        <div>
          {reviewMode ? (
            <>
              <h1 className="text-3xl font-display font-bold text-navy-900">Vocabulary Review</h1>
              <p className="text-navy-600 mt-2">
                Kelime Tekrarı — {filteredWords.length} words due for review
                {filteredWords.length > 0 && (
                  <span className="ml-2 text-racing-700 font-medium">
                    ({reviewMode ? currentReviewIndex + 1 : currentCardIndex + 1} / {filteredWords.length})
                  </span>
                )}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-display font-bold text-navy-900">Vocabulary Library</h1>
              <p className="text-navy-600 mt-2">
                Kelime Hazinesi — Master essential British English words
                <span className="ml-2 text-navy-400">({vocabulary.length} words)</span>
              </p>
            </>
          )}
        </div>
      )}

      {/* Filters - Only in normal mode */}
      {!reviewMode && (
        <div className="space-y-2">
          {/* Category Filter - iOS Horizontal Scroll */}
          <div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={clsx(
                    'flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap',
                    selectedCategory === cat.id
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-gray-100 text-navy-700 hover:bg-gray-200'
                  )}
                >
                  {cat.label}
                  {cat.id !== 'all' && (
                    <span className={clsx(
                      'ml-1.5 text-xs',
                      selectedCategory === cat.id ? 'opacity-80' : 'opacity-60'
                    )}>
                      {vocabulary.filter(w => w.category === cat.id).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter - iOS Horizontal Scroll */}
          <div>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
              {difficulties.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setSelectedDifficulty(diff.id)}
                  className={clsx(
                    'flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap',
                    selectedDifficulty === diff.id
                      ? 'bg-racing-700 text-white shadow-sm'
                      : 'bg-gray-100 text-navy-700 hover:bg-gray-200'
                  )}
                >
                  {diff.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {filteredWords.length > 0 && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-navy-500 font-medium">
            {reviewMode ? currentReviewIndex + 1 : currentCardIndex + 1} / {filteredWords.length}
          </span>
          <div className="flex-1 h-1.5 bg-cream-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-navy-600 rounded-full transition-all duration-300"
              style={{
                width: `${(((reviewMode ? currentReviewIndex : currentCardIndex) + 1) / filteredWords.length) * 100}%`
              }}
            />
          </div>
        </div>
      )}

      {/* Flashcard */}
      {filteredWords.length > 0 && currentWord ? (
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord.id}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isCardFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative min-h-[280px]"
            >
              {/* Front of Card */}
              <div
                className={clsx(
                  'absolute inset-0 backface-hidden cursor-pointer',
                  isCardFlipped && 'pointer-events-none'
                )}
                style={{ backfaceVisibility: 'hidden' }}
                onClick={() => handleFlipCard(currentWord.id)}
              >
                <div className="card-elevated p-6 h-full flex flex-col items-center justify-center text-center space-y-4">
                  {/* Category & Difficulty Badge */}
                  <div className="flex items-center gap-2">
                    <span className="badge-navy capitalize text-xs">{currentWord.category}</span>
                    <span className="badge-green text-xs">{currentWord.difficulty}</span>
                  </div>

                  {/* Word */}
                  <div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-2">
                      {currentWord.word}
                    </h2>
                    <p className="font-mono text-xl text-navy-500">{currentWord.ipa}</p>
                  </div>

                  {/* Play Audio Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSpeak(currentWord.word)
                    }}
                    className="btn-icon w-14 h-14 md:w-20 md:h-20 bg-navy-100 hover:bg-navy-200"
                  >
                    <Volume2 className={clsx('w-6 h-6 md:w-8 md:h-8 text-navy-700', isSpeaking && 'animate-pulse')} />
                  </button>

                  {/* Tap instruction */}
                  <p className="text-xs text-navy-400 mt-4">Tap card to see definition</p>
                </div>
              </div>

              {/* Back of Card */}
              <div
                className={clsx(
                  'absolute inset-0 backface-hidden cursor-pointer',
                  !isCardFlipped && 'pointer-events-none'
                )}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                onClick={() => handleFlipCard(currentWord.id)}
              >
                <div className="card-elevated p-4 h-full flex flex-col bg-cream-50 overflow-hidden">
                  {/* Word (small) */}
                  <div className="text-center border-b border-cream-300 pb-2 flex-shrink-0">
                    <h3 className="text-xl font-display font-bold text-navy-900">
                      {currentWord.word}
                    </h3>
                    <p className="text-xs font-mono text-navy-500">{currentWord.ipa}</p>
                  </div>

                  {/* Scrollable content */}
                  <div className="flex-1 overflow-y-auto py-2 space-y-2">
                    {/* Definitions */}
                    <div>
                      <p className="text-xs font-medium text-navy-500 uppercase tracking-wide mb-1">
                        Definitions
                      </p>
                      {currentWord.definitions.slice(0, 1).map((def, idx) => (
                        <div key={idx}>
                          <p className="text-sm text-navy-900">{def.meaning}</p>
                          {def.turkishMeaning && (
                            <p className="text-navy-600 text-xs mt-0.5">{def.turkishMeaning}</p>
                          )}
                          <p className="text-navy-700 italic text-xs mt-0.5">"{def.example}"</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleSpeak(def.example)
                            }}
                            className="mt-1 text-xs text-racing-700 hover:text-racing-800 flex items-center gap-1"
                          >
                            <Volume2 className="w-3 h-3" />
                            Listen
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Collocations */}
                    {currentWord.collocations && currentWord.collocations.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-navy-500 uppercase tracking-wide mb-1">
                          Common Phrases
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {currentWord.collocations.slice(0, 3).map((collocation, i) => (
                            <span key={i} className="px-2 py-0.5 bg-navy-100 text-navy-700 text-xs rounded">
                              {collocation}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tap instruction */}
                  <p className="text-xs text-navy-400 text-center flex-shrink-0 pt-1">Tap to flip</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Learning Action Buttons */}
          {!reviewMode && (
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={() => {
                  // Add to SRS for learning
                  if (!isInSRS(currentWord.id)) {
                    handleAddToSRS(currentWord.id)
                  }
                  // Move to next word
                  handleNext()
                }}
                className="btn-secondary flex-1 py-4 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                <div className="flex flex-col items-start">
                  <span className="font-semibold">Should Learn</span>
                  <span className="text-xs opacity-70">Öğrenmem lazım</span>
                </div>
              </button>

              <button
                onClick={() => handleFlipCard(currentWord.id)}
                className="btn-icon w-12 h-12"
                title="Flip card"
              >
                <RotateCcw className="w-6 h-6" />
              </button>

              <button
                onClick={() => {
                  // Skip this word (don't add to SRS)
                  handleNext()
                }}
                className="btn-primary flex-1 py-4 flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                <div className="flex flex-col items-start">
                  <span className="font-semibold">Already Knew</span>
                  <span className="text-xs opacity-70">Zaten biliyorum</span>
                </div>
              </button>
            </div>
          )}

          {/* Review Mode Navigation */}
          {reviewMode && (
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentReviewIndex === 0}
                className={clsx(
                  'btn-secondary flex items-center gap-2',
                  currentReviewIndex === 0 && 'opacity-50 cursor-not-allowed'
                )}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <button
                onClick={() => handleFlipCard(currentWord.id)}
                className="btn-icon"
                title="Flip card"
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentReviewIndex === filteredWords.length - 1}
                className={clsx(
                  'btn-secondary flex items-center gap-2',
                  currentReviewIndex === filteredWords.length - 1 && 'opacity-50 cursor-not-allowed'
                )}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Review Mode Quality Buttons */}
          {reviewMode && (
            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium text-navy-700 text-center">How well did you remember this?</p>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => handleMarkReviewed(currentWord.id, 1)}
                  className="btn-secondary py-3 text-sm flex flex-col items-center gap-1"
                >
                  <span className="text-lg">😓</span>
                  <span>Hard</span>
                </button>
                <button
                  onClick={() => handleMarkReviewed(currentWord.id, 2)}
                  className="btn-secondary py-3 text-sm flex flex-col items-center gap-1"
                >
                  <span className="text-lg">🤔</span>
                  <span>Okay</span>
                </button>
                <button
                  onClick={() => handleMarkReviewed(currentWord.id, 3)}
                  className="btn-secondary py-3 text-sm flex flex-col items-center gap-1"
                >
                  <span className="text-lg">😊</span>
                  <span>Good</span>
                </button>
                <button
                  onClick={() => handleMarkReviewed(currentWord.id, 4)}
                  className="btn-primary py-3 text-sm flex flex-col items-center gap-1"
                >
                  <span className="text-lg">🎯</span>
                  <span>Easy</span>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="card p-12 text-center">
          {reviewMode ? (
            <>
              <div className="w-20 h-20 bg-racing-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-racing-700" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">All Done!</h3>
              <p className="text-navy-600">Tebrikler! You've reviewed all due vocabulary.</p>
              <p className="text-sm text-navy-400 mt-1">Come back later for more reviews</p>
              <Link to="/vocabulary" className="btn-primary mt-6 inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Browse All Vocabulary
              </Link>
            </>
          ) : (
            <>
              <BookOpen className="w-12 h-12 text-navy-300 mx-auto mb-4" />
              <p className="text-navy-600">No words found</p>
              <p className="text-sm text-navy-400 mt-1">Try adjusting your filters</p>
            </>
          )}
        </div>
      )}
    </motion.div>
  )
}
