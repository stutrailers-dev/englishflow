import { NavLink, useLocation } from 'react-router-dom'
import { Home, BookOpen, Headphones, MessageCircle, Settings } from 'lucide-react'

const tabs = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/learn', icon: BookOpen, label: 'Learn' },
  { path: '/practice', icon: Headphones, label: 'Practice' },
  { path: '/conversation', icon: MessageCircle, label: 'Chat' },
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
      {/* Glassmorphism Background */}
      <div
        className="absolute inset-0 backdrop-blur-2xl border-t border-white/10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.8))'
        }}
      />

      {/* Tab items */}
      <div
        className="relative flex justify-around items-center h-[56px]"
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

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className="flex flex-col items-center justify-center flex-1 py-2 transition-all duration-200"
              style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Icon Container */}
              <div className={`relative transition-all duration-200 ${isActive
                  ? 'text-white'
                  : 'text-neutral-500 hover:text-neutral-400'
                }`}>
                {/* Active background glow */}
                {isActive && (
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-lg" />
                )}
                <Icon
                  className="relative w-6 h-6"
                  strokeWidth={isActive ? 2 : 1.5}
                  fill={isActive ? 'currentColor' : 'none'}
                />
              </div>

              {/* Label - only visible when active */}
              <span
                className={`text-[10px] font-medium mt-1 transition-all duration-200 ${isActive
                    ? 'text-white opacity-100'
                    : 'text-neutral-500 opacity-0 h-0 overflow-hidden'
                  }`}
              >
                {tab.label}
              </span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
