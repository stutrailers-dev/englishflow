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
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Full oval/pill TabBar - matching mockup */}
      <div
        className="mx-3 mb-3 flex justify-around items-center h-14"
        style={{
          borderRadius: '28px',
          background: 'rgba(30, 30, 30, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
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
              className="flex items-center justify-center"
              style={{
                flex: isActive && isHome ? 'none' : 1,
                touchAction: 'manipulation'
              }}
            >
              {isActive && isHome ? (
                /* Home Active - Red oval pill with icon + label */
                <div
                  className="flex items-center gap-1.5 px-4 py-2"
                  style={{
                    borderRadius: '20px',
                    background: '#E74C3C'
                  }}
                >
                  <Icon className="w-4 h-4 text-white" strokeWidth={2} fill="white" />
                  <span className="text-xs font-semibold text-white">{tab.label}</span>
                </div>
              ) : (
                /* Other tabs */
                <div className="flex flex-col items-center gap-0.5">
                  <Icon
                    className={`w-5 h-5 ${isActive ? 'text-white' : 'text-neutral-500'}`}
                    strokeWidth={1.5}
                    fill={isActive ? 'currentColor' : 'none'}
                  />
                  <span className={`text-[9px] ${isActive ? 'text-white' : 'text-neutral-500'}`}>
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
