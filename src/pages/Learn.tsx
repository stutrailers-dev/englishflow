import { useState } from 'react'
import VocabularyLibrary from './VocabularyLibrary'
import TenseTrainer from './TenseTrainer'

export default function Learn() {
  const [activeTab, setActiveTab] = useState<'vocabulary' | 'tenses'>('vocabulary')

  return (
    <div className="min-h-screen">
      {/* iOS Segmented Control */}
      <div className="mb-4 pt-2">
        <div className="flex bg-gray-100 dark:bg-neutral-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('vocabulary')}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
              activeTab === 'vocabulary'
                ? 'bg-white dark:bg-neutral-600 text-navy-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-neutral-400'
            }`}
          >
            Vocabulary
          </button>
          <button
            onClick={() => setActiveTab('tenses')}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
              activeTab === 'tenses'
                ? 'bg-white dark:bg-neutral-600 text-navy-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-neutral-400'
            }`}
          >
            Tenses
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'vocabulary' ? <VocabularyLibrary embedded /> : <TenseTrainer embedded />}
      </div>
    </div>
  )
}
