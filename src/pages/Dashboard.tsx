import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import {
  ChevronRight,
  Flame,
  BookOpen,
  Target,
  MessageSquare,
  RefreshCw
} from 'lucide-react'
import { useProgressStore, useSRSStore } from '@/stores'
import { Link } from 'react-router-dom'
import { britishTips } from '@/data/britishTips'
import { HeroCarousel, ContinueLearningCard } from '@/components/dashboard'

// Scenario/Shadowing progress types
interface LearningProgress {
  id: string
  type: 'shadowing' | 'conversation' | 'chunks' | 'vocabulary'
  title: string
  progress: number
  link: string
}

export default function Dashboard() {
  const { progress } = useProgressStore()
  const { getDueItems } = useSRSStore()
  const dueItems = getDueItems()

  // Get user name from localStorage
  const userName = useState(() => {
    try {
      return localStorage.getItem('englishflow-user-name') || ''
    } catch {
      return ''
    }
  })[0]

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

  // Calculate continue learning items from localStorage/stores
  const continueLearningItems = useMemo<LearningProgress[]>(() => {
    const items: LearningProgress[] = []

    // Check for in-progress scenarios
    try {
      const savedProgress = localStorage.getItem('englishflow-conversation-progress')
      if (savedProgress) {
        const progressMap = JSON.parse(savedProgress)
        Object.entries(progressMap).forEach(([scenarioId, data]: [string, any]) => {
          if (data.currentTurnIndex > 0 && !data.completed) {
            const totalTurns = data.totalTurns || 10
            const percent = Math.round((data.currentTurnIndex / totalTurns) * 100)
            items.push({
              id: scenarioId,
              type: 'conversation',
              title: data.scenarioTitle || 'Conversation',
              progress: Math.min(percent, 99),
              link: `/conversation?scenario=${scenarioId}`
            })
          }
        })
      }
    } catch (e) {
      console.error('Error reading scenario progress:', e)
    }

    // Add SRS due items as "continue learning"
    if (dueItems.filter(i => i.itemType === 'chunk').length > 0) {
      items.push({
        id: 'chunks-review',
        type: 'chunks',
        title: 'Chunks Review',
        progress: 0,
        link: '/chunks?mode=review'
      })
    }

    if (dueItems.filter(i => i.itemType === 'vocabulary').length > 0) {
      items.push({
        id: 'vocab-review',
        type: 'vocabulary',
        title: 'Vocabulary Review',
        progress: 0,
        link: '/vocabulary?mode=review'
      })
    }

    // Add shadowing placeholder if user has started
    items.push({
      id: 'shadowing-1',
      type: 'shadowing',
      title: 'Shadowing Practice',
      progress: 35,
      link: '/practice'
    })

    return items.slice(0, 6) // Max 6 items
  }, [dueItems])

  // Separate due items by type
  const dueChunks = dueItems.filter(item => item.itemType === 'chunk')
  const dueVocabulary = dueItems.filter(item => item.itemType === 'vocabulary')

  return (
    <div className="min-h-screen bg-neutral-950 text-white pb-24">
      {/* Header */}
      <div className="px-4 pt-4 pb-2 flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-white">
          {greeting}
        </h1>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-racing-600 to-racing-800 flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            {userName ? userName[0].toUpperCase() : '🇬🇧'}
          </span>
        </div>
      </div>

      {/* Hero Carousel */}
      <div className="px-4 mt-2">
        <HeroCarousel />
      </div>

      {/* Continue Learning Section */}
      {continueLearningItems.length > 0 && (
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-1">
              Continue Learning
              <ChevronRight className="w-5 h-5 text-white/60" />
            </h2>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            {continueLearningItems.map(item => (
              <ContinueLearningCard
                key={item.id}
                id={item.id}
                type={item.type}
                title={item.title}
                progress={item.progress}
                link={item.link}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quick Stats Row */}
      <div className="mt-8 px-4">
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-neutral-900/50 rounded-xl p-3 text-center border border-white/5">
            <Flame className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <p className="text-xl font-bold text-white">{progress.currentStreak}</p>
            <p className="text-[10px] text-white/50 uppercase tracking-wide">Streak</p>
          </div>
          <div className="bg-neutral-900/50 rounded-xl p-3 text-center border border-white/5">
            <BookOpen className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
            <p className="text-xl font-bold text-white">{progress.chunksLearned}</p>
            <p className="text-[10px] text-white/50 uppercase tracking-wide">Chunks</p>
          </div>
          <div className="bg-neutral-900/50 rounded-xl p-3 text-center border border-white/5">
            <Target className="w-5 h-5 text-blue-500 mx-auto mb-1" />
            <p className="text-xl font-bold text-white">{progress.vocabularyLearned}</p>
            <p className="text-[10px] text-white/50 uppercase tracking-wide">Words</p>
          </div>
          <div className="bg-neutral-900/50 rounded-xl p-3 text-center border border-white/5">
            <MessageSquare className="w-5 h-5 text-purple-500 mx-auto mb-1" />
            <p className="text-xl font-bold text-white">{progress.scenariosCompleted}</p>
            <p className="text-[10px] text-white/50 uppercase tracking-wide">Chats</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 px-4">
        <h2 className="text-xl font-semibold text-white mb-4">Start Learning</h2>
        <div className="grid grid-cols-2 gap-3">
          {/* Review Chunks */}
          <Link
            to="/chunks?mode=review"
            className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border border-emerald-500/20 rounded-xl p-4 hover:border-emerald-500/40 transition-all"
          >
            <BookOpen className="w-6 h-6 text-emerald-400 mb-2" />
            <p className="font-semibold text-white">Review Chunks</p>
            <p className="text-emerald-300 text-2xl font-bold">{dueChunks.length}</p>
            <p className="text-xs text-white/50">phrases due</p>
          </Link>

          {/* Review Vocabulary */}
          <Link
            to="/vocabulary?mode=review"
            className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 border border-amber-500/20 rounded-xl p-4 hover:border-amber-500/40 transition-all"
          >
            <Target className="w-6 h-6 text-amber-400 mb-2" />
            <p className="font-semibold text-white">Review Words</p>
            <p className="text-amber-300 text-2xl font-bold">{dueVocabulary.length}</p>
            <p className="text-xs text-white/50">words due</p>
          </Link>

          {/* Practice Speaking */}
          <Link
            to="/conversation"
            className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/20 rounded-xl p-4 hover:border-blue-500/40 transition-all"
          >
            <MessageSquare className="w-6 h-6 text-blue-400 mb-2" />
            <p className="font-semibold text-white">Practice Chat</p>
            <p className="text-xs text-white/50 mt-1">AI-powered scenarios</p>
          </Link>

          {/* Shadowing */}
          <Link
            to="/practice"
            className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/20 rounded-xl p-4 hover:border-purple-500/40 transition-all"
          >
            <svg className="w-6 h-6 text-purple-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <p className="font-semibold text-white">Shadowing</p>
            <p className="text-xs text-white/50 mt-1">Improve pronunciation</p>
          </Link>
        </div>
      </div>

      {/* British Tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 mx-4 p-4 rounded-xl bg-gradient-to-r from-navy-800/80 to-navy-900/80 border border-white/10"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lg">💡</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-white text-sm">British Tip</h3>
                <span className="px-1.5 py-0.5 text-[10px] bg-white/20 rounded-full capitalize">
                  {currentTip.category}
                </span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                {currentTip.tip}
              </p>
              <p className="text-white/50 text-xs mt-1 italic">
                {currentTip.tipTurkish}
              </p>
            </div>
          </div>
          <button
            onClick={handleNextTip}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
          >
            <RefreshCw className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
