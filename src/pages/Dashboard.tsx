import { motion } from 'framer-motion'
import { HeroCarousel, ContinueLearningCard } from '@/components/dashboard'

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
      className="min-h-screen bg-neutral-950 text-white"
      style={{ paddingBottom: 'calc(80px + env(safe-area-inset-bottom))' }}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 flex items-center justify-between">
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

      {/* Hero Carousel */}
      <div className="px-4">
        <HeroCarousel />
      </div>

      {/* Continue Learning Section - Always shows 4 cards */}
      <div className="mt-6 px-4">
        <h2 className="text-lg font-semibold text-white mb-3">
          Continue Learning
        </h2>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
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
    </motion.div>
  )
}
