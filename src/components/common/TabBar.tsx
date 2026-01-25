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

  const isLearnActive = ['/learn', '/vocabulary', '/tenses'].includes(location.pathname)
  const isPracticeActive = ['/practice', '/chunks', '/shadowing'].includes(location.pathname)

  return (
    <nav
      className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* Floating glass container */}
      <div
        className="flex justify-around items-center h-[56px] rounded-2xl backdrop-blur-xl"
        style={{
          background: 'rgba(40, 40, 40, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon
          let isActive = location.pathname === tab.path
          if (tab.path === '/learn') isActive = isLearnActive
          if (tab.path === '/practice') isActive = isPracticeActive

          const isHome = tab.path === '/'

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className="flex flex-col items-center justify-center flex-1"
              style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
            >
              {isActive && isHome ? (
                /* Home Active - Red pill with icon + label */
                <div
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl"
                  style={{ background: 'rgba(232, 93, 93, 0.9)' }}
                >
                  <Icon className="w-4 h-4 text-white" strokeWidth={2} fill="white" />
                  <span className="text-xs font-semibold text-white">{tab.label}</span>
                </div>
              ) : (
                /* Other tabs */
                <div className="flex flex-col items-center gap-0.5 py-1">
                  <Icon
                    className={`w-5 h-5 ${isActive ? 'text-white' : 'text-neutral-400'}`}
                    strokeWidth={1.5}
                    fill={isActive ? 'currentColor' : 'none'}
                  />
                  <span className={`text-[10px] ${isActive ? 'text-white' : 'text-neutral-400'}`}>
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
