import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { RefreshCw } from 'lucide-react'
import { HeroCarousel, ContinueLearningCard } from '@/components/dashboard'
import { britishTips } from '@/data/britishTips'

// Fixed learning categories - always shown
const learningCategories = [
  {
    id: 'vocabulary',
    type: 'vocabulary' as const,
    title: 'Vocabulary',
    link: '/vocabulary'
  },
  {
    id: 'chunks',
    type: 'chunks' as const,
    title: 'Chunks',
    link: '/chunks'
  },
  {
    id: 'shadowing',
    type: 'shadowing' as const,
    title: 'Shadowing',
    link: '/practice'
  },
  {
    id: 'conversation',
    type: 'conversation' as const,
    title: 'Conversation',
    link: '/conversation'
  }
]

export default function Dashboard() {
  // Get user name from localStorage
  const userName = (() => {
    try {
      return localStorage.getItem('englishflow-user-name') || ''
    } catch {
      return ''
    }
  })()

  // Get dynamic greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour >= 5 && hour < 12) {
      return 'Good morning'
    } else if (hour >= 12 && hour < 18) {
      return 'Good afternoon'
    } else {
      return 'Good evening'
    }
  }

  const greeting = userName ? `${getGreeting()}, ${userName}` : `${getGreeting()}!`

  // British tip rotation
  const [currentTipIndex, setCurrentTipIndex] = useState(() =>
    Math.floor(Math.random() * britishTips.length)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex(prev => (prev + 1) % britishTips.length)
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleNextTip = () => {
    setCurrentTipIndex(prev => (prev + 1) % britishTips.length)
  }

  const currentTip = britishTips[currentTipIndex]

  // Calculate progress for each category from localStorage
  const getProgress = (type: string): number => {
    try {
      if (type === 'vocabulary') {
        const data = localStorage.getItem('englishflow-vocabulary-progress')
        if (data) {
          const parsed = JSON.parse(data)
          return Math.min(Math.round((parsed.learned / 1000) * 100), 100) || 0
        }
      }
      if (type === 'chunks') {
        const data = localStorage.getItem('englishflow-chunks-progress')
        if (data) {
          const parsed = JSON.parse(data)
          return Math.min(Math.round((parsed.learned / 500) * 100), 100) || 0
        }
      }
      if (type === 'shadowing') {
        const data = localStorage.getItem('englishflow-shadowing-progress')
        if (data) {
          const parsed = JSON.parse(data)
          return Math.min(parsed.completedPercent || 0, 100)
        }
      }
      if (type === 'conversation') {
        const data = localStorage.getItem('englishflow-conversation-progress')
        if (data) {
          const parsed = JSON.parse(data)
          const completed = Object.values(parsed).filter((s: any) => s.completed).length
          return Math.min(Math.round((completed / 50) * 100), 100) || 0
        }
      }
    } catch {
      return 0
    }
    return 0
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white"
      style={{ paddingBottom: 'calc(80px + env(safe-area-inset-bottom))' }}
    >
      {/* Header - integrated into dark theme */}
      <div
        className="px-4 flex items-center justify-between bg-black"
        style={{ paddingTop: 'max(16px, env(safe-area-inset-top))' }}
      >
        <h1 className="text-2xl font-display font-bold text-white">
          {greeting}
        </h1>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-racing-600 to-racing-800 flex items-center justify-center overflow-hidden">
          {userName ? (
            <span className="text-white font-semibold text-sm">
              {userName[0].toUpperCase()}
            </span>
          ) : (
            <span className="text-xl">🇬🇧</span>
          )}
        </div>
      </div>

      {/* Hero Carousel - edge to edge */}
      <div className="mt-4">
        <HeroCarousel />
      </div>

      {/* Continue Learning Section - Larger cards */}
      <div className="mt-8 px-4">
        <h2 className="text-xl font-semibold text-white mb-4">
          Continue Learning
        </h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          {learningCategories.map(category => (
            <ContinueLearningCard
              key={category.id}
              id={category.id}
              type={category.type}
              title={category.title}
              progress={getProgress(category.type)}
              link={category.link}
            />
          ))}
        </div>
      </div>

      {/* British Tip - Card style */}
      <div className="mt-8 px-4">
        <div className="relative rounded-2xl overflow-hidden border border-white/10">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-800/90 to-navy-900/90" />

          {/* Content */}
          <div className="relative p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-white">British Tip</h3>
                    <span className="px-2 py-0.5 text-[10px] bg-white/20 rounded-full capitalize">
                      {currentTip.category}
                    </span>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {currentTip.tip}
                  </p>
                  <p className="text-white/50 text-xs mt-2 italic">
                    {currentTip.tipTurkish}
                  </p>
                </div>
              </div>
              <button
                onClick={handleNextTip}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors flex-shrink-0"
              >
                <RefreshCw className="w-4 h-4 text-white/70" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
