import { NavLink, useLocation } from 'react-router-dom'
import { Home, BookOpen, Headphones, MessageCircle, Settings } from 'lucide-react'

const tabs = [
  { path: '/', icon: Home, label: 'Home', labelTr: 'Ana Sayfa' },
  { path: '/learn', icon: BookOpen, label: 'Learn', labelTr: 'Öğren' },
  { path: '/practice', icon: Headphones, label: 'Practice', labelTr: 'Pratik' },
  { path: '/conversation', icon: MessageCircle, label: 'Chat', labelTr: 'Konuşma' },
  { path: '/settings', icon: Settings, label: 'Settings', labelTr: 'Ayarlar' }
]

export default function TabBar() {
  const location = useLocation()

  // Learn tab aktif mi kontrolü (vocabulary veya tenses sayfasındaysa)
  const isLearnActive = ['/learn', '/vocabulary', '/tenses'].includes(location.pathname)

  // Practice tab aktif mi kontrolü (chunks veya shadowing sayfasındaysa)
  const isPracticeActive = ['/practice', '/chunks', '/shadowing'].includes(location.pathname)

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      {/* Blur background - explicit light/dark mode support */}
      <div
        className="absolute inset-0 backdrop-blur-xl border-t"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: 'rgba(229, 231, 235, 0.5)'
        }}
      />
      {/* Dark mode overlay - only visible in dark mode */}
      <div className="absolute inset-0 backdrop-blur-xl border-t border-neutral-700/50 bg-neutral-900/90 hidden dark:block" />

      {/* Tab items */}
      <div
        className="relative flex justify-around items-center h-[64px]"
        style={{
          paddingLeft: 'max(12px, env(safe-area-inset-left))',
          paddingRight: 'max(12px, env(safe-area-inset-right))'
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
              className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors ${
                isActive
                  ? 'text-[#004225] dark:text-[#86efac]'
                  : 'text-[#8E8E93] dark:text-neutral-400'
              }`}
            >
              <Icon
                className="w-6 h-6 mb-1"
                strokeWidth={isActive ? 2.5 : 2}
                fill={isActive ? 'currentColor' : 'none'}
              />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
