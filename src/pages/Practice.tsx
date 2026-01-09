import { useState } from 'react'
import ChunkLibrary from './ChunkLibrary'
import ShadowingStudio from './ShadowingStudio'

export default function Practice() {
  const [activeTab, setActiveTab] = useState<'chunks' | 'shadowing'>('chunks')

  return (
    <div className="min-h-screen">
      {/* iOS Segmented Control */}
      <div className="mb-4 pt-2">
        <div className="flex bg-gray-100 dark:bg-neutral-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('chunks')}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
              activeTab === 'chunks'
                ? 'bg-white dark:bg-neutral-600 text-navy-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-neutral-400'
            }`}
          >
            Chunks
          </button>
          <button
            onClick={() => setActiveTab('shadowing')}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
              activeTab === 'shadowing'
                ? 'bg-white dark:bg-neutral-600 text-navy-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-neutral-400'
            }`}
          >
            Shadowing
          </button>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'chunks' ? <ChunkLibrary embedded /> : <ShadowingStudio embedded />}
      </div>
    </div>
  )
}
