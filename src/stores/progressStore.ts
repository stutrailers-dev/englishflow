import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {
  UserProgress,
  DailyGoal,
  Achievement,
  WeeklyStat
} from '@/types'
import { startOfDay, isToday, differenceInDays, startOfWeek } from 'date-fns'

interface ScenarioProgress {
  scenarioId: string
  currentTurnIndex: number
  userResponses: Array<{ turnId: string; text: string; score: number }>
  lastUpdated: Date
}

interface ProgressState {
  progress: UserProgress
  isLoading: boolean
  scenarioProgress: Record<string, ScenarioProgress>

  // Actions
  initializeProgress: () => void
  updateStreak: () => void
  addStudyTime: (minutes: number) => void
  incrementChunksLearned: (count?: number) => void
  incrementVocabularyLearned: (count?: number) => void
  incrementScenariosCompleted: () => void
  completeScenario: () => void
  updateDailyGoal: (updates: Partial<DailyGoal>) => void
  addAchievement: (achievement: Omit<Achievement, 'unlockedAt'>) => void
  resetDailyProgress: () => void
  resetProgress: () => void
  getWeeklyProgress: () => WeeklyStat | null
  saveScenarioProgress: (scenarioId: string, currentTurnIndex: number, userResponses: Map<string, { text: string; score: number }>) => void
  getScenarioProgress: (scenarioId: string) => ScenarioProgress | null
  clearScenarioProgress: (scenarioId: string) => void
}

const DEFAULT_DAILY_GOAL: DailyGoal = {
  targetMinutes: 30,
  targetChunks: 5,
  targetVocabulary: 10,
  completedMinutes: 0,
  completedChunks: 0,
  completedVocabulary: 0,
}

const DEFAULT_PROGRESS: UserProgress = {
  userId: 'default',
  currentStreak: 0,
  longestStreak: 0,
  lastActivityDate: new Date(),
  totalStudyTime: 0,
  chunksLearned: 0,
  vocabularyLearned: 0,
  scenariosCompleted: 0,
  dailyGoal: DEFAULT_DAILY_GOAL,
  achievements: [],
  weeklyStats: [],
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: DEFAULT_PROGRESS,
      isLoading: false,
      scenarioProgress: {},

      initializeProgress: () => {
        const { progress } = get()
        const lastActivity = new Date(progress.lastActivityDate)

        // Check if we need to reset daily progress
        if (!isToday(lastActivity)) {
          const daysSinceLastActivity = differenceInDays(new Date(), lastActivity)

          set(state => ({
            progress: {
              ...state.progress,
              // Reset streak if more than 1 day has passed
              currentStreak: daysSinceLastActivity > 1 ? 0 : state.progress.currentStreak,
              dailyGoal: {
                ...state.progress.dailyGoal,
                completedMinutes: 0,
                completedChunks: 0,
                completedVocabulary: 0,
              },
            },
          }))
        }
      },

      updateStreak: () => {
        const { progress } = get()
        const lastActivity = new Date(progress.lastActivityDate)
        const today = startOfDay(new Date())
        const lastActivityDay = startOfDay(lastActivity)

        // If already updated today, do nothing
        if (lastActivityDay.getTime() === today.getTime()) {
          return
        }

        const daysDiff = differenceInDays(today, lastActivityDay)

        set(state => {
          let newStreak = state.progress.currentStreak

          if (daysDiff === 1) {
            // Consecutive day - increment streak
            newStreak += 1
          } else if (daysDiff > 1) {
            // Streak broken - reset to 1
            newStreak = 1
          } else {
            // Same day or future (shouldn't happen)
            newStreak = Math.max(newStreak, 1)
          }

          return {
            progress: {
              ...state.progress,
              currentStreak: newStreak,
              longestStreak: Math.max(state.progress.longestStreak, newStreak),
              lastActivityDate: new Date(),
            },
          }
        })
      },

      addStudyTime: (minutes: number) => {
        set(state => ({
          progress: {
            ...state.progress,
            totalStudyTime: state.progress.totalStudyTime + minutes,
            lastActivityDate: new Date(),
            dailyGoal: {
              ...state.progress.dailyGoal,
              completedMinutes: state.progress.dailyGoal.completedMinutes + minutes,
            },
          },
        }))

        // Update streak
        get().updateStreak()
      },

      incrementChunksLearned: (count = 1) => {
        set(state => ({
          progress: {
            ...state.progress,
            chunksLearned: state.progress.chunksLearned + count,
            lastActivityDate: new Date(),
            dailyGoal: {
              ...state.progress.dailyGoal,
              completedChunks: state.progress.dailyGoal.completedChunks + count,
            },
          },
        }))

        get().updateStreak()
      },

      incrementVocabularyLearned: (count = 1) => {
        set(state => ({
          progress: {
            ...state.progress,
            vocabularyLearned: state.progress.vocabularyLearned + count,
            lastActivityDate: new Date(),
            dailyGoal: {
              ...state.progress.dailyGoal,
              completedVocabulary: state.progress.dailyGoal.completedVocabulary + count,
            },
          },
        }))

        get().updateStreak()
      },

      completeScenario: () => {
        set(state => ({
          progress: {
            ...state.progress,
            scenariosCompleted: state.progress.scenariosCompleted + 1,
            lastActivityDate: new Date(),
          },
        }))

        get().updateStreak()
      },

      incrementScenariosCompleted: () => {
        set(state => ({
          progress: {
            ...state.progress,
            scenariosCompleted: state.progress.scenariosCompleted + 1,
            lastActivityDate: new Date(),
          },
        }))

        get().updateStreak()
      },

      updateDailyGoal: (updates: Partial<DailyGoal>) => {
        set(state => ({
          progress: {
            ...state.progress,
            dailyGoal: {
              ...state.progress.dailyGoal,
              ...updates,
            },
          },
        }))
      },

      addAchievement: (achievement) => {
        const { progress } = get()

        // Check if achievement already exists
        if (progress.achievements.some(a => a.id === achievement.id)) {
          return
        }

        set(state => ({
          progress: {
            ...state.progress,
            achievements: [
              ...state.progress.achievements,
              { ...achievement, unlockedAt: new Date() },
            ],
          },
        }))
      },

      resetDailyProgress: () => {
        set(state => ({
          progress: {
            ...state.progress,
            dailyGoal: {
              ...state.progress.dailyGoal,
              completedMinutes: 0,
              completedChunks: 0,
              completedVocabulary: 0,
            },
          },
        }))
      },

      resetProgress: () => {
        set({ progress: DEFAULT_PROGRESS, scenarioProgress: {} })
      },

      getWeeklyProgress: () => {
        const { progress } = get()
        const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 })

        return progress.weeklyStats.find(
          stat => new Date(stat.weekStart).getTime() === weekStart.getTime()
        ) || null
      },

      saveScenarioProgress: (scenarioId: string, currentTurnIndex: number, userResponses: Map<string, { text: string; score: number }>) => {
        const responsesArray = Array.from(userResponses.entries()).map(([turnId, response]) => ({
          turnId,
          text: response.text,
          score: response.score
        }))

        set(state => ({
          scenarioProgress: {
            ...state.scenarioProgress,
            [scenarioId]: {
              scenarioId,
              currentTurnIndex,
              userResponses: responsesArray,
              lastUpdated: new Date()
            }
          }
        }))
      },

      getScenarioProgress: (scenarioId: string) => {
        const { scenarioProgress } = get()
        return scenarioProgress[scenarioId] || null
      },

      clearScenarioProgress: (scenarioId: string) => {
        set(state => {
          const newProgress = { ...state.scenarioProgress }
          delete newProgress[scenarioId]
          return { scenarioProgress: newProgress }
        })
      },
    }),
    {
      name: 'english-flow-progress',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
