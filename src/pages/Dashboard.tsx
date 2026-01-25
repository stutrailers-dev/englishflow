import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { HeroCarousel, ContinueLearningCard } from '@/components/dashboard'

// Continue Learning items with photos
const continueLearningItems = [
  {
    id: 'vocabulary',
    image: '/images/cards/vocabulary.png',
    title: 'Vocabulary Practice',
    link: '/vocabulary'
  },
  {
    id: 'shadowing',
    image: '/images/cards/shadowing.png',
    title: 'Shadowing Session',
    link: '/practice'
  },
  {
    id: 'chunks',
    image: '/images/cards/chunks.png',
    title: 'Phrase Chunks',
    link: '/chunks'
  },
  {
    id: 'conversation',
    image: '/images/cards/conversation.png',
    title: 'Daily Conversation',
    link: '/conversation'
  }
]

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white"
      style={{ paddingBottom: 'calc(70px + env(safe-area-inset-bottom))' }}
    >
      {/* Hero Carousel - Full screen */}
      <HeroCarousel />

      {/* Continue Learning Section */}
      <div className="px-4 py-4 bg-black">
        <div className="flex items-center gap-1 mb-4">
          <h2 className="text-xl font-semibold text-white">
            Continue Learning
          </h2>
          <ChevronRight className="w-5 h-5 text-white/60" />
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          {continueLearningItems.map(item => (
            <ContinueLearningCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
