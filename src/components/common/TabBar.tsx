import { NavLink, useLocation } from 'react-router-dom'
import { Home, BookOpen, Headphones, MessageCircle, Settings } from 'lucide-react'

const tabs = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/learn', icon: BookOpen, label: 'Learn' },
  { path: '/practice', icon: Headphones, label: 'Practice' },
  { path: '/conversation', icon: MessageCircle, label: 'Speak' },
  { path: '/settings', icon: Settings, label: 'Settings' }
]

export default function TabBar() {
  const location = useLocation()

  // Learn tab aktif mi kontrolü
  const isLearnActive = ['/learn', '/vocabulary', '/tenses'].includes(location.pathname)

  // Practice tab aktif mi kontrolü
  const isPracticeActive = ['/practice', '/chunks', '/shadowing'].includes(location.pathname)

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-neutral-900/95 backdrop-blur-xl border-t border-white/5" />

      {/* Tab items */}
      <div
        className="relative flex justify-around items-center h-[60px]"
        style={{
          paddingLeft: 'max(8px, env(safe-area-inset-left))',
          paddingRight: 'max(8px, env(safe-area-inset-right))'
        }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon

          // Özel aktif kontrolleri
          let isActive = location.pathname === tab.path
          if (tab.path === '/learn') isActive = isLearnActive
          if (tab.path === '/practice') isActive = isPracticeActive

          // Home tab için özel styling (kırmızı pill)
          const isHome = tab.path === '/'

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className="flex flex-col items-center justify-center flex-1"
              style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
            >
              {isActive && isHome ? (
                // Home active - red pill with icon and label
                <div className="flex items-center gap-1.5 px-4 py-2 bg-red-500/20 rounded-full">
                  <Icon
                    className="w-5 h-5 text-red-500"
                    strokeWidth={2}
                    fill="currentColor"
                  />
                  <span className="text-xs font-medium text-red-500">
                    {tab.label}
                  </span>
                </div>
              ) : isActive ? (
                // Other tabs active - white
                <div className="flex flex-col items-center">
                  <Icon
                    className="w-6 h-6 text-white"
                    strokeWidth={2}
                    fill="currentColor"
                  />
                  <span className="text-[10px] font-medium text-white mt-1">
                    {tab.label}
                  </span>
                </div>
              ) : (
                // Inactive - gray icon only
                <div className="flex flex-col items-center py-2">
                  <Icon
                    className="w-6 h-6 text-neutral-500"
                    strokeWidth={1.5}
                  />
                  <span className="text-[10px] font-medium text-neutral-500 mt-1">
                    {tab.label}
                  </span>
                </div>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
