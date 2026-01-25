import { NavLink, useLocation } from 'react-router-dom'
import { Home, BookOpen, Headphones, MessageCircle, Settings } from 'lucide-react'
import './TabBar.css'

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
    <nav className="tabbar-nav">
      <div className="tabbar-container">
        {tabs.map((tab) => {
          const Icon = tab.icon
          let isActive = location.pathname === tab.path
          if (tab.path === '/learn') isActive = isLearnActive
          if (tab.path === '/practice') isActive = isPracticeActive

          const isHome = tab.path === '/'

          return (
            <NavLink key={tab.path} to={tab.path} className="tabbar-item">
              {isActive && isHome ? (
                <div className="tabbar-home-active">
                  <Icon size={16} color="white" fill="white" />
                  <span>{tab.label}</span>
                </div>
              ) : (
                <div className="tabbar-tab">
                  <Icon
                    size={20}
                    className={isActive ? 'tabbar-icon-active' : 'tabbar-icon'}
                    fill={isActive ? 'currentColor' : 'none'}
                  />
                  <span className={isActive ? 'tabbar-label-active' : 'tabbar-label'}>
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
