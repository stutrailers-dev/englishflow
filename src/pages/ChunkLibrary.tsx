import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Volume2,
  BookOpen,
  Briefcase,
  Plane,
  Coffee,
  Building2,
  Sun,
  ChevronRight,
  Play,
  Check
} from 'lucide-react'
import { useSpeechSynthesis } from '@/hooks'
import { useSRSStore } from '@/stores'
import { ChunkCategory } from '@/types'
import { clsx } from 'clsx'
import { chunks as allChunks } from '@/data/chunks'

// Get category counts dynamically
const getCategoryCount = (category: ChunkCategory) =>
  allChunks.filter(chunk => chunk.category === category).length

const categories: { id: ChunkCategory; label: string; labelTr: string; icon: typeof Briefcase }[] = [
  { id: 'technical', label: 'Technical', labelTr: 'Teknik', icon: Briefcase },
  { id: 'travel', label: 'Travel', labelTr: 'Seyahat', icon: Plane },
  { id: 'social', label: 'Social', labelTr: 'Sosyal', icon: Coffee },
  { id: 'business', label: 'Business', labelTr: 'İş', icon: Building2 },
  { id: 'daily', label: 'Daily', labelTr: 'Günlük', icon: Sun },
]

const LEARNED_CHUNKS_KEY = 'englishflow-learned-chunks'

interface ChunkLibraryProps {
  embedded?: boolean
}

export default function ChunkLibrary({ embedded = false }: ChunkLibraryProps) {
  const [searchParams] = useSearchParams()
  const reviewMode = searchParams.get('mode') === 'review'

  const [selectedCategory, setSelectedCategory] = useState<ChunkCategory | 'all'>('all')
  const [searchQuery] = useState('')
  const [expandedChunk, setExpandedChunk] = useState<string | null>(null)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  // Scroll to show buttons when chunk expands
  useEffect(() => {
    if (expandedChunk) {
      // Wait for expand animation to complete (framer-motion uses 200ms)
      const scrollTimer = setTimeout(() => {
        const buttonsElement = document.querySelector(`[data-buttons-for="${expandedChunk}"]`)
        if (buttonsElement) {
          const rect = buttonsElement.getBoundingClientRect()
          const viewportHeight = window.innerHeight
          const tabBarHeight = 80 // Approximate tab bar height including safe area

          // Check if buttons are below the visible area (above tab bar)
          if (rect.bottom > viewportHeight - tabBarHeight) {
            // Calculate how much we need to scroll
            const scrollAmount = rect.bottom - (viewportHeight - tabBarHeight) + 20 // 20px padding
            window.scrollBy({
              top: scrollAmount,
              behavior: 'smooth'
            })
          }
        }
      }, 500) // Longer delay to ensure animation is complete

      return () => clearTimeout(scrollTimer)
    }
  }, [expandedChunk])

  // Load learned chunks from localStorage
  const [learnedChunks, setLearnedChunks] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(LEARNED_CHUNKS_KEY)
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch {
      return new Set()
    }
  })

  // Save learned chunks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LEARNED_CHUNKS_KEY, JSON.stringify(Array.from(learnedChunks)))
    } catch (error) {
      console.error('Failed to save learned chunks:', error)
    }
  }, [learnedChunks])

  const { speak, isSpeaking, cancel } = useSpeechSynthesis()
  const { addItem, getItemByItemId, getDueItems, reviewItem } = useSRSStore()

  // Get due items for review mode
  const dueItems = useMemo(() => {
    const items = getDueItems()
    console.log('📋 Due items:', items)
    return items
  }, [getDueItems])

  const filteredChunks = useMemo(() => {
    // In review mode, only show due items
    if (reviewMode) {
      console.log('🔄 Review mode active!')
      const dueChunkIds = dueItems
        .filter(item => item.itemType === 'chunk')
        .map(item => item.itemId)

      console.log('📝 Due chunk IDs:', dueChunkIds)
      const chunks = allChunks.filter(chunk => dueChunkIds.includes(chunk.id))
      console.log('✅ Filtered chunks for review:', chunks)
      return chunks
    }

    // Normal mode - filter by category and search
    return allChunks.filter(chunk => {
      const matchesCategory = selectedCategory === 'all' || chunk.category === selectedCategory
      const matchesSearch = searchQuery === '' ||
        chunk.chunk.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chunk.turkishEquivalent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chunk.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery, reviewMode, dueItems])

  const handleSpeak = (text: string) => {
    if (isSpeaking) {
      cancel()
    } else {
      speak(text)
    }
  }

  const handleAddToSRS = (chunkId: string) => {
    addItem(chunkId, 'chunk')

    // Find next chunk that is not in SRS or learned, and expand it
    const currentIndex = filteredChunks.findIndex(c => c.id === chunkId)
    if (currentIndex >= 0 && currentIndex < filteredChunks.length - 1) {
      // Find next chunk that needs action
      for (let i = currentIndex + 1; i < filteredChunks.length; i++) {
        const nextChunk = filteredChunks[i]
        if (!learnedChunks.has(nextChunk.id) && !isInSRS(nextChunk.id)) {
          setExpandedChunk(nextChunk.id)
          return
        }
      }
    }
    // If no next chunk needs action, collapse current
    setExpandedChunk(null)
  }

  const isInSRS = (chunkId: string) => {
    return !!getItemByItemId(chunkId, 'chunk')
  }

  const isLearned = (chunkId: string) => {
    return learnedChunks.has(chunkId)
  }

  const handleMarkAsLearned = (chunkId: string) => {
    // Mark as learned
    setLearnedChunks(prev => new Set(prev).add(chunkId))

    // Find next unlearned chunk and expand it
    const currentIndex = filteredChunks.findIndex(c => c.id === chunkId)
    if (currentIndex >= 0 && currentIndex < filteredChunks.length - 1) {
      // Find next unlearned chunk
      for (let i = currentIndex + 1; i < filteredChunks.length; i++) {
        if (!learnedChunks.has(filteredChunks[i].id)) {
          setExpandedChunk(filteredChunks[i].id)
          return
        }
      }
    }
    // If no next unlearned chunk, collapse current
    setExpandedChunk(null)
  }

  // Auto-expand chunk in review mode
  useEffect(() => {
    if (reviewMode && filteredChunks.length > 0 && currentReviewIndex < filteredChunks.length) {
      const currentChunk = filteredChunks[currentReviewIndex]
      if (currentChunk) {
        setExpandedChunk(currentChunk.id)
        console.log(`📖 Showing review ${currentReviewIndex + 1}/${filteredChunks.length}: ${currentChunk.chunk}`)
      }
    }
  }, [reviewMode, filteredChunks, currentReviewIndex])

  const handleNextReview = () => {
    if (currentReviewIndex < filteredChunks.length - 1) {
      setCurrentReviewIndex(prev => prev + 1)
    }
  }

  const handleMarkReviewed = (chunkId: string, quality: number) => {
    const srsItem = getItemByItemId(chunkId, 'chunk')
    console.log(`🔍 Marking as reviewed: ${chunkId}, quality: ${quality}, found item:`, srsItem)
    if (srsItem) {
      reviewItem(srsItem.id, quality as 0 | 1 | 2 | 3 | 4 | 5)
      console.log(`✅ Chunk reviewed! Moving to next... (${currentReviewIndex + 1} -> ${currentReviewIndex + 2})`)
      handleNextReview()
    } else {
      console.error('❌ SRS item not found for chunk:', chunkId)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto space-y-6 pb-28 md:pb-4"
    >
      {/* Header - only show if not embedded */}
      {!embedded && (
        <div>
          {reviewMode ? (
            <>
              <h1 className="text-3xl font-display font-bold text-navy-900">Review Session</h1>
              <p className="text-navy-600 mt-2">
                Tekrar Oturumu — {filteredChunks.length} chunks due for review
                {filteredChunks.length > 0 && (
                  <span className="ml-2 text-racing-700 font-medium">
                    ({currentReviewIndex + 1} / {filteredChunks.length})
                  </span>
                )}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-display font-bold text-navy-900">Chunk Library</h1>
              <p className="text-navy-600 mt-2">
                Kalıp Kütüphanesi — Learn ready-made phrases
                <span className="ml-2 text-navy-400">({allChunks.length} chunks)</span>
              </p>
            </>
          )}
        </div>
      )}


      {/* Category Filter - iOS Horizontal Scroll */}
      {!reviewMode && (
        <div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={clsx(
                'flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap',
                selectedCategory === 'all'
                  ? 'bg-navy-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                  : 'bg-gray-100 dark:bg-neutral-800 text-navy-700 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
              )}
            >
              All
            </button>
            {categories.map(cat => {
              const isSelected = selectedCategory === cat.id

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={clsx(
                    'flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap',
                    isSelected
                      ? 'bg-navy-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                      : 'bg-gray-100 dark:bg-neutral-800 text-navy-700 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700'
                  )}
                >
                  {cat.label}
                  <span className={clsx(
                    'ml-1.5 text-xs',
                    isSelected ? 'opacity-80' : 'opacity-60'
                  )}>
                    {getCategoryCount(cat.id)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Chunks List */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {(reviewMode ? [filteredChunks[currentReviewIndex]].filter(Boolean) : filteredChunks).map((chunk, index) => {
            const isExpanded = expandedChunk === chunk.id
            const inSRS = isInSRS(chunk.id)
            const learned = isLearned(chunk.id)
            // In review mode, we're always showing the current review item
            const isCurrentReview = reviewMode

            return (
              <motion.div
                key={chunk.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className={clsx(
                  'card overflow-hidden',
                  learned && 'border-2 border-green-500',
                  inSRS && !learned && 'border-2 border-red-500'
                )}
              >
                {/* Main Row */}
                <button
                  onClick={() => !reviewMode && setExpandedChunk(isExpanded ? null : chunk.id)}
                  className="w-full p-5 text-left flex items-center gap-4 hover:bg-cream-50 dark:hover:bg-neutral-800 transition-colors"
                  disabled={reviewMode}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-navy-900 text-lg leading-tight">
                      "{chunk.chunk}"
                    </p>
                    <p className="text-sm text-navy-500 mt-1">{chunk.turkishEquivalent}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="badge-navy">{chunk.category}</span>
                      <span className="badge-green">{chunk.difficulty}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleSpeak(chunk.chunk)
                      }}
                      className="btn-icon"
                    >
                      <Volume2 className={clsx('w-5 h-5', isSpeaking && 'text-racing-600 animate-pulse')} />
                    </button>
                    <ChevronRight className={clsx(
                      'w-5 h-5 text-navy-400 transition-transform duration-200',
                      isExpanded && 'rotate-90'
                    )} />
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {(isExpanded || reviewMode) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-cream-200 dark:border-neutral-700"
                    >
                      <div className="bg-cream-50 dark:bg-neutral-800">
                        {/* Scrollable content area */}
                        <div className="p-4 space-y-2 max-h-[180px] overflow-y-auto">
                          {/* IPA */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-navy-500 uppercase tracking-wide">IPA:</span>
                            <span className="font-mono text-sm text-navy-700">{chunk.ipa}</span>
                          </div>

                          {/* Context */}
                          <div className="flex items-start gap-2">
                            <span className="text-xs font-medium text-navy-500 uppercase tracking-wide flex-shrink-0">Context:</span>
                            <span className="text-sm text-navy-700">{chunk.context}</span>
                          </div>

                          {/* Example */}
                          <div>
                            <div className="flex items-start gap-2">
                              <span className="text-xs font-medium text-navy-500 uppercase tracking-wide flex-shrink-0">Example:</span>
                              <span className="text-sm text-navy-700 italic">"{chunk.example}"</span>
                            </div>
                            <button
                              onClick={() => handleSpeak(chunk.example)}
                              className="mt-1 text-xs text-racing-700 hover:text-racing-800 flex items-center gap-1 ml-14"
                            >
                              <Play className="w-3 h-3" />
                              Listen to example
                            </button>
                          </div>

                          {/* Variations - show only 2 */}
                          <div>
                            <span className="text-xs font-medium text-navy-500 uppercase tracking-wide">Variations:</span>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                              {chunk.variations.slice(0, 2).map((variation, i) => (
                                <span key={i} className="text-sm text-navy-600 flex items-center gap-1">
                                  <span className="w-1 h-1 bg-navy-400 rounded-full" />
                                  {variation}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Fixed action buttons at bottom */}
                        <div
                          data-buttons-for={chunk.id}
                          className="p-4 pt-2 border-t border-cream-200 dark:border-neutral-700 bg-cream-50 dark:bg-neutral-800"
                        >
                          {(() => {
                            console.log('🎯 isCurrentReview:', isCurrentReview, 'reviewMode:', reviewMode, 'chunk:', chunk.id)
                            return isCurrentReview ? (
                              <div className="space-y-2">
                                <p className="text-sm font-medium text-navy-700">How well did you remember this?</p>
                                <div className="grid grid-cols-4 gap-2">
                                  <button
                                    onClick={() => handleMarkReviewed(chunk.id, 1)}
                                    className="btn-secondary py-2 text-sm flex flex-col items-center gap-1"
                                  >
                                    <span className="text-lg">😓</span>
                                    <span>Hard</span>
                                  </button>
                                  <button
                                    onClick={() => handleMarkReviewed(chunk.id, 2)}
                                    className="btn-secondary py-2 text-sm flex flex-col items-center gap-1"
                                  >
                                    <span className="text-lg">🤔</span>
                                    <span>Okay</span>
                                  </button>
                                  <button
                                    onClick={() => handleMarkReviewed(chunk.id, 3)}
                                    className="btn-secondary py-2 text-sm flex flex-col items-center gap-1"
                                  >
                                    <span className="text-lg">😊</span>
                                    <span>Good</span>
                                  </button>
                                  <button
                                    onClick={() => handleMarkReviewed(chunk.id, 4)}
                                    className="btn-primary py-2 text-sm flex flex-col items-center gap-1"
                                  >
                                    <span className="text-lg">🎯</span>
                                    <span>Easy</span>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => handleMarkAsLearned(chunk.id)}
                                  disabled={learned}
                                  className={clsx(
                                    'btn-secondary flex-1 h-11 text-sm',
                                    learned && 'opacity-50 cursor-not-allowed bg-green-100 text-green-700 border-green-300'
                                  )}
                                >
                                  {learned ? (
                                    <>
                                      <Check className="w-4 h-4 mr-2" />
                                      Learned
                                    </>
                                  ) : (
                                    <>
                                      <Check className="w-4 h-4 mr-2" />
                                      Mark as Learned
                                    </>
                                  )}
                                </button>
                                <button
                                  onClick={() => handleAddToSRS(chunk.id)}
                                  disabled={inSRS || learned}
                                  className={clsx(
                                    'btn-primary flex-1 h-11 text-sm',
                                    (inSRS || learned) && 'opacity-50 cursor-not-allowed bg-racing-700'
                                  )}
                                >
                                  {inSRS ? (
                                    <>
                                      <Check className="w-4 h-4 mr-2" />
                                      In Review
                                    </>
                                  ) : (
                                    <>
                                      <BookOpen className="w-4 h-4 mr-2" />
                                      Add to Review
                                    </>
                                  )}
                                </button>
                              </div>
                            )
                          })()}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {filteredChunks.length === 0 && (
          <div className="card p-12 text-center">
            {reviewMode ? (
              <>
                <div className="w-20 h-20 bg-racing-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-racing-700" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">All Done!</h3>
                <p className="text-navy-600">Tebrikler! You've reviewed all due items.</p>
                <p className="text-sm text-navy-400 mt-1">Come back later for more reviews</p>
                <Link to="/chunks" className="btn-primary mt-6 inline-flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse All Chunks
                </Link>
              </>
            ) : (
              <>
                <BookOpen className="w-12 h-12 text-navy-300 mx-auto mb-4" />
                <p className="text-navy-600">No chunks found</p>
                <p className="text-sm text-navy-400 mt-1">Try adjusting your search or filters</p>
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
