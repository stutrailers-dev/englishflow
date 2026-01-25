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
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex justify-around items-center h-[50px] px-2">
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
              className="flex flex-col items-center justify-center"
              style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
            >
              {isActive && isHome ? (
                /* Home Active - Red background pill with icon + label inside */
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E85D5D] rounded-xl">
                  <Icon className="w-4 h-4 text-white" strokeWidth={2} fill="white" />
                  <span className="text-xs font-semibold text-white">{tab.label}</span>
                </div>
              ) : (
                /* Other tabs - icon above label */
                <div className="flex flex-col items-center gap-0.5">
                  <Icon
                    className={`w-5 h-5 ${isActive ? 'text-white' : 'text-neutral-500'}`}
                    strokeWidth={1.5}
                    fill={isActive ? 'currentColor' : 'none'}
                  />
                  <span className={`text-[10px] ${isActive ? 'text-white' : 'text-neutral-500'}`}>
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
