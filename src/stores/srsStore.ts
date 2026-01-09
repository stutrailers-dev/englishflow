import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { SRSItem, ReviewQuality, ReviewHistory } from '@/types'
import { addDays, isBefore, startOfDay } from 'date-fns'

interface SRSState {
  items: SRSItem[]

  // Actions
  addItem: (itemId: string, itemType: SRSItem['itemType']) => void
  removeItem: (id: string) => void
  reviewItem: (id: string, quality: ReviewQuality) => void
  getDueItems: (type?: SRSItem['itemType']) => SRSItem[]
  getItemById: (id: string) => SRSItem | undefined
  getItemByItemId: (itemId: string, itemType: SRSItem['itemType']) => SRSItem | undefined
  getStats: () => SRSStats
  resetAll: () => void
}

interface SRSStats {
  totalItems: number
  dueToday: number
  learned: number
  reviewing: number
  averageEaseFactor: number
}

// SM-2 Algorithm Implementation
function calculateSM2(
  quality: ReviewQuality,
  repetitions: number,
  easeFactor: number,
  interval: number
): { newInterval: number; newEaseFactor: number; newRepetitions: number } {
  let newEaseFactor = easeFactor
  let newInterval = interval
  let newRepetitions = repetitions

  // Update ease factor based on quality
  newEaseFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  )

  if (quality < 3) {
    // Failed recall - reset
    newRepetitions = 0
    newInterval = 1
  } else {
    // Successful recall
    newRepetitions += 1

    if (newRepetitions === 1) {
      newInterval = 1
    } else if (newRepetitions === 2) {
      newInterval = 3
    } else {
      newInterval = Math.round(interval * newEaseFactor)
    }
  }

  return {
    newInterval,
    newEaseFactor,
    newRepetitions,
  }
}

function generateId(): string {
  return `srs_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export const useSRSStore = create<SRSState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (itemId, itemType) => {
        const existing = get().getItemByItemId(itemId, itemType)
        if (existing) return // Already exists

        const newItem: SRSItem = {
          id: generateId(),
          itemId,
          itemType,
          easeFactor: 2.5, // Default ease factor
          interval: 0, // Will be set to 1 after first review
          repetitions: 0,
          nextReviewDate: new Date(), // Due immediately
          history: [],
        }

        set(state => ({
          items: [...state.items, newItem],
        }))
      },

      removeItem: (id) => {
        set(state => ({
          items: state.items.filter(item => item.id !== id),
        }))
      },

      reviewItem: (id, quality) => {
        const item = get().getItemById(id)
        if (!item) return

        const { newInterval, newEaseFactor, newRepetitions } = calculateSM2(
          quality,
          item.repetitions,
          item.easeFactor,
          item.interval
        )

        const reviewEntry: ReviewHistory = {
          date: new Date(),
          quality,
          responseTime: 0, // Can be tracked separately
        }

        set(state => ({
          items: state.items.map(i => {
            if (i.id !== id) return i

            return {
              ...i,
              easeFactor: newEaseFactor,
              interval: newInterval,
              repetitions: newRepetitions,
              nextReviewDate: addDays(startOfDay(new Date()), newInterval),
              lastReviewDate: new Date(),
              history: [...i.history, reviewEntry],
            }
          }),
        }))
      },

      getDueItems: (type) => {
        const { items } = get()
        const today = startOfDay(new Date())

        return items.filter(item => {
          if (type && item.itemType !== type) return false
          const nextReview = startOfDay(new Date(item.nextReviewDate))
          return isBefore(nextReview, addDays(today, 1)) // Due today or overdue
        })
      },

      getItemById: (id) => {
        return get().items.find(item => item.id === id)
      },

      getItemByItemId: (itemId, itemType) => {
        return get().items.find(
          item => item.itemId === itemId && item.itemType === itemType
        )
      },

      getStats: () => {
        const { items } = get()
        const today = startOfDay(new Date())

        const dueToday = items.filter(item => {
          const nextReview = startOfDay(new Date(item.nextReviewDate))
          return isBefore(nextReview, addDays(today, 1))
        }).length

        const learned = items.filter(item => item.interval >= 21).length
        const reviewing = items.filter(item =>
          item.interval > 0 && item.interval < 21
        ).length

        const totalEaseFactor = items.reduce((sum, item) => sum + item.easeFactor, 0)
        const averageEaseFactor = items.length > 0
          ? totalEaseFactor / items.length
          : 2.5

        return {
          totalItems: items.length,
          dueToday,
          learned,
          reviewing,
          averageEaseFactor: Math.round(averageEaseFactor * 100) / 100,
        }
      },

      resetAll: () => {
        set({ items: [] })
      },
    }),
    {
      name: 'english-flow-srs',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
