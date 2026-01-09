import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
  Flame,
  BookOpen,
  MessageSquare,
  Target,
  TrendingUp,
  Clock,
  Award,
  ChevronRight,
  Play,
  RefreshCw
} from 'lucide-react'
import { useProgressStore, useSRSStore } from '@/stores'
import { Link } from 'react-router-dom'
import { britishTips } from '@/data/britishTips'

export default function Dashboard() {
  const { progress } = useProgressStore()
  const { getDueItems } = useSRSStore()
  const dueItems = getDueItems()

  // Separate due items by type
  const dueChunks = dueItems.filter(item => item.itemType === 'chunk')
  const dueVocabulary = dueItems.filter(item => item.itemType === 'vocabulary')

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

  // Auto-rotate tips every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex(prev => (prev + 1) % britishTips.length)
    }, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleNextTip = () => {
    setCurrentTipIndex(prev => (prev + 1) % britishTips.length)
  }

  const currentTip = britishTips[currentTipIndex]

  const dailyProgress = {
    minutes: Math.min((progress.dailyGoal.completedMinutes / progress.dailyGoal.targetMinutes) * 100, 100),
    chunks: Math.min((progress.dailyGoal.completedChunks / progress.dailyGoal.targetChunks) * 100, 100),
    vocabulary: Math.min((progress.dailyGoal.completedVocabulary / progress.dailyGoal.targetVocabulary) * 100, 100),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto space-y-6 pb-2 md:pb-0"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-navy-900">
          {greeting}
        </h1>
        <p className="text-navy-600 mt-2">
          Ready to improve your British English today?
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Streak */}
        <div className="card p-5 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-amber-600 uppercase tracking-wide">Streak</p>
              <p className="text-3xl font-bold text-amber-900 mt-1">{progress.currentStreak}</p>
              <p className="text-xs text-amber-600 mt-1">Best: {progress.longestStreak} days</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Chunks Learned */}
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-navy-500 uppercase tracking-wide">Chunks</p>
              <p className="text-3xl font-bold text-navy-900 mt-1">{progress.chunksLearned}</p>
              <p className="text-xs text-navy-500 mt-1">phrases mastered</p>
            </div>
            <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-navy-600" />
            </div>
          </div>
        </div>

        {/* Vocabulary */}
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-navy-500 uppercase tracking-wide">Vocabulary</p>
              <p className="text-3xl font-bold text-navy-900 mt-1">{progress.vocabularyLearned}</p>
              <p className="text-xs text-navy-500 mt-1">words learned</p>
            </div>
            <div className="w-12 h-12 bg-racing-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-racing-700" />
            </div>
          </div>
        </div>

        {/* Scenarios */}
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-navy-500 uppercase tracking-wide">Scenarios</p>
              <p className="text-3xl font-bold text-navy-900 mt-1">{progress.scenariosCompleted}</p>
              <p className="text-xs text-navy-500 mt-1">completed</p>
            </div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Daily Goal Progress */}
      <motion.div variants={itemVariants} className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-display font-semibold text-navy-900">Today's Progress</h2>
            <p className="text-sm text-navy-500">Günlük Hedef İlerlemesi</p>
          </div>
          <div className="badge-navy">
            <Clock className="w-3 h-3 mr-1" />
            {progress.dailyGoal.completedMinutes} / {progress.dailyGoal.targetMinutes} min
          </div>
        </div>

        <div className="space-y-4">
          {/* Study Time */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-navy-600">Study Time</span>
              <span className="font-medium text-navy-900">
                {progress.dailyGoal.completedMinutes} / {progress.dailyGoal.targetMinutes} min
              </span>
            </div>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${dailyProgress.minutes}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Chunks */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-navy-600">Chunks Reviewed</span>
              <span className="font-medium text-navy-900">
                {progress.dailyGoal.completedChunks} / {progress.dailyGoal.targetChunks}
              </span>
            </div>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${dailyProgress.chunks}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
              />
            </div>
          </div>

          {/* Vocabulary */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-navy-600">Vocabulary</span>
              <span className="font-medium text-navy-900">
                {progress.dailyGoal.completedVocabulary} / {progress.dailyGoal.targetVocabulary}
              </span>
            </div>
            <div className="progress-bar">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${dailyProgress.vocabulary}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Review Chunks */}
        <div className="card-hover p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-racing-100 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-racing-700" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Review Chunks</h3>
                <p className="text-xs text-navy-500">Kalıp tekrarı</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-navy-900 mt-2">{dueChunks.length}</p>
            <p className="text-sm text-navy-600 mt-1 mb-4">phrases due</p>
            <Link
              to="/chunks?mode=review"
              className="btn-primary py-2 px-4 text-sm mt-auto"
            >
              <Play className="w-4 h-4 mr-2" />
              Start
            </Link>
          </div>
        </div>

        {/* Review Vocabulary */}
        <div className="card-hover p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Review Vocabulary</h3>
                <p className="text-xs text-navy-500">Kelime tekrarı</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-navy-900 mt-2">{dueVocabulary.length}</p>
            <p className="text-sm text-navy-600 mt-1 mb-4">words due</p>
            <Link
              to="/vocabulary?mode=review"
              className="btn-primary py-2 px-4 text-sm mt-auto"
            >
              <Play className="w-4 h-4 mr-2" />
              Start
            </Link>
          </div>
        </div>

        {/* Learn New Words */}
        <div className="card-hover p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Learn Words</h3>
                <p className="text-xs text-navy-500">Kelime öğren</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-navy-900 mt-2">1000</p>
            <p className="text-sm text-navy-600 mt-1 mb-4">words available</p>
            <Link
              to="/vocabulary"
              className="btn-secondary py-2 px-4 text-sm mt-auto"
            >
              Study
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Practice Speaking */}
        <div className="card-hover p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-900">Practice</h3>
                <p className="text-xs text-navy-500">Konuşma pratiği</p>
              </div>
            </div>
            <p className="text-sm text-navy-600 mt-2 mb-4">
              Practice your English in real scenarios
            </p>
            <Link
              to="/conversation"
              className="btn-secondary py-2 px-4 text-sm mt-auto"
            >
              Start
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Recent Achievements */}
      {progress.achievements.length > 0 && (
        <motion.div variants={itemVariants} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-display font-semibold text-navy-900">Recent Achievements</h2>
            <Award className="w-5 h-5 text-amber-500" />
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {progress.achievements.slice(-5).map((achievement) => (
              <div 
                key={achievement.id}
                className="flex-shrink-0 w-32 text-center p-4 bg-cream-50 rounded-xl border border-cream-200"
              >
                <div className="w-12 h-12 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <p className="text-sm font-medium text-navy-900 line-clamp-2">{achievement.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Quick Tip */}
      <motion.div
        variants={itemVariants}
        className="card p-6 bg-gradient-to-r from-navy-800 to-navy-900 text-white"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-xl">💡</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">British English Tip</h3>
                <span className="px-2 py-0.5 text-xs bg-white/20 rounded-full capitalize">
                  {currentTip.category}
                </span>
                <span className="text-xs text-navy-300">
                  {currentTipIndex + 1} / {britishTips.length}
                </span>
              </div>
              <p className="text-navy-100 text-sm leading-relaxed mb-2">
                {currentTip.tip}
              </p>
              <p className="text-navy-300 text-xs italic">
                {currentTip.tipTurkish}
              </p>
            </div>
          </div>
          <button
            onClick={handleNextTip}
            className="btn-icon bg-white/10 hover:bg-white/20 text-white flex-shrink-0"
            title="Next tip"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
