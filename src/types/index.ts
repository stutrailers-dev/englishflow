// ==========================================
// Core Types for EnglishFlow Application
// ==========================================

// --- Chunk Types ---
export interface Chunk {
  id: string
  category: ChunkCategory
  subcategory: string
  chunk: string
  ipa: string
  audioUrl?: string
  context: string
  example: string
  turkishEquivalent: string
  variations: string[]
  difficulty: DifficultyLevel
  tags: string[]
}

export type ChunkCategory = 'technical' | 'travel' | 'social' | 'business' | 'daily'

export type DifficultyLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

// --- Vocabulary Types ---
export interface VocabularyItem {
  id: string
  word: string
  ipa: string
  partOfSpeech: PartOfSpeech
  definitions: Definition[]
  audioUrl?: string
  imageUrl?: string
  examples: string[]
  collocations: string[]
  synonyms: string[]
  antonyms: string[]
  difficulty: DifficultyLevel
  tags: string[]
  category: ChunkCategory
}

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'preposition'
  | 'conjunction'
  | 'pronoun'
  | 'interjection'
  | 'phrasal-verb'

export interface Definition {
  meaning: string
  example: string
  turkishMeaning?: string
}

// --- Tense Types ---
export interface TenseInfo {
  id: string
  name: string
  turkishName: string
  turkishEquivalent: string
  structure: TenseStructure
  usage: string[]
  signalWords: string[]
  examples: TenseExample[]
  commonMistakes: CommonMistake[]
  timeline: TimelinePosition
}

export interface TenseStructure {
  affirmative: string
  negative: string
  question: string
}

export interface TenseExample {
  english: string
  turkish: string
  audioUrl?: string
  context?: string
}

export interface CommonMistake {
  wrong: string
  correct: string
  explanation: string
}

export type TimelinePosition = 'past' | 'present' | 'future'

// --- Scenario Types ---
export interface Scenario {
  id: string
  title: string
  titleTurkish: string
  setting: string
  settingTurkish: string
  difficulty: DifficultyLevel
  category: ScenarioCategory
  objectives: ScenarioObjective[]
  dialogue: DialogueTurn[]
  vocabulary: string[]
  chunks: string[]
  duration: number // in minutes
  imageUrl?: string
  // Emergency exit logic (e.g. user wants to go back/abort)
  terminationConfig?: {
    keywords: string[]
    targetTurnId: string
  }
}

export type ScenarioCategory =
  | 'airport'
  | 'hotel'
  | 'restaurant'
  | 'business-meeting'
  | 'factory-visit'
  | 'technical-presentation'
  | 'phone-call'
  | 'small-talk'

export interface ScenarioObjective {
  id: string
  description: string
  descriptionTurkish: string
  completed: boolean
}

export interface DialogueTurn {
  id: string
  role: 'agent' | 'user'
  text: string
  audioUrl?: string
  hints?: string[]
  expectedResponses?: ExpectedResponse[]
  acceptableKeywords?: string[]
  // Dynamic response system: allows agent responses to adapt based on user choices
  choiceKeywords?: string[] // Keywords to detect in user's previous response (e.g., ['window', 'aisle'])
  dynamicReplacements?: Record<string, Record<string, string>> // { 'window': { SEAT: '14A', LOCATION: 'by the window' } }
  skipLogic?: {
    triggerKeywords: string[]
    skipCount: number
    invertCondition?: boolean
  }
}

export interface ExpectedResponse {
  text: string
  score: number // 0-100
  relatesToChoice?: string[] // Only valid if previous choices include one of these
}

// --- SRS (Spaced Repetition) Types ---
export interface SRSItem {
  id: string
  itemId: string
  itemType: 'chunk' | 'vocabulary' | 'tense'
  easeFactor: number
  interval: number // in days
  repetitions: number
  nextReviewDate: Date
  lastReviewDate?: Date
  history: ReviewHistory[]
}

export interface ReviewHistory {
  date: Date
  quality: ReviewQuality
  responseTime: number // in milliseconds
}

export type ReviewQuality = 0 | 1 | 2 | 3 | 4 | 5
// 0: Complete blackout
// 1: Incorrect, but remembered upon seeing answer
// 2: Incorrect, but answer seemed easy to recall
// 3: Correct with serious difficulty
// 4: Correct after hesitation
// 5: Perfect recall

// --- User Progress Types ---
export interface UserProgress {
  userId: string
  currentStreak: number
  longestStreak: number
  lastActivityDate: Date
  totalStudyTime: number // in minutes
  chunksLearned: number
  vocabularyLearned: number
  scenariosCompleted: number
  dailyGoal: DailyGoal
  achievements: Achievement[]
  weeklyStats: WeeklyStat[]
}

export interface DailyGoal {
  targetMinutes: number
  targetChunks: number
  targetVocabulary: number
  completedMinutes: number
  completedChunks: number
  completedVocabulary: number
}

export interface Achievement {
  id: string
  name: string
  description: string
  iconUrl: string
  unlockedAt: Date
  category: AchievementCategory
}

export type AchievementCategory =
  | 'streak'
  | 'vocabulary'
  | 'chunks'
  | 'scenarios'
  | 'accuracy'
  | 'consistency'

export interface WeeklyStat {
  weekStart: Date
  totalMinutes: number
  chunksReviewed: number
  vocabularyReviewed: number
  averageAccuracy: number
}

// --- Settings Types ---
export type TTSProvider = 'local' | 'elevenlabs' | 'google'

export interface UserSettings {
  preferredAccent: 'british' | 'american'
  selectedVoiceName?: string // User's preferred voice name
  dailyReminderTime?: string // HH:mm format
  notificationsEnabled: boolean
  autoPlayAudio: boolean
  showIPA: boolean
  showTurkishTranslations: boolean
  theme: 'light' | 'dark' | 'system'
  speechRate: number // 0.5 - 2.0
  fontSize: 'small' | 'medium' | 'large'
  usePremiumVoice: boolean // Legacy flag, now synced with ttsProvider === 'elevenlabs'
  ttsProvider: TTSProvider
}

// --- Speech Recognition Types ---
export interface SpeechRecognitionResult {
  transcript: string
  confidence: number
  isFinal: boolean
}

export interface PronunciationScore {
  overall: number
  accuracy: number
  fluency: number
  completeness: number
  phonemes?: PhonemeScore[]
}

export interface PhonemeScore {
  phoneme: string
  score: number
  feedback?: string
}

// --- Audio Types ---
export interface AudioState {
  isPlaying: boolean
  isPaused: boolean
  isRecording: boolean
  currentTime: number
  duration: number
  volume: number
  playbackRate: number
}

// --- Navigation Types ---
export interface NavItem {
  id: string
  label: string
  labelTurkish: string
  path: string
  icon: string
  badge?: number
}

// --- API Response Types ---
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// --- Utility Types ---
export type Nullable<T> = T | null
export type Optional<T> = T | undefined

export interface PaginatedResult<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// --- Filter Types ---
export interface ChunkFilter {
  category?: ChunkCategory
  difficulty?: DifficultyLevel
  tags?: string[]
  searchQuery?: string
}

export interface VocabularyFilter {
  category?: ChunkCategory
  partOfSpeech?: PartOfSpeech
  difficulty?: DifficultyLevel
  searchQuery?: string
}
