import { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Library,
  BookOpen,
  Mic,
  Clock,
  MessageSquare,
  Settings,
  Flame
} from 'lucide-react'
import { useProgressStore } from '@/stores'
import { clsx } from 'clsx'
import TabBar from './TabBar'

interface LayoutProps {
  children: ReactNode
}

const navItems = [
  { path: '/', label: 'Dashboard', labelTr: 'Panel', icon: LayoutDashboard },
  { path: '/chunks', label: 'Chunk Library', labelTr: 'Kalıp Kütüphanesi', icon: Library },
  { path: '/vocabulary', label: 'Vocabulary', labelTr: 'Kelime Hazinesi', icon: BookOpen },
  { path: '/shadowing', label: 'Shadowing', labelTr: 'Gölgeleme', icon: Mic },
  { path: '/tenses', label: 'Tense Trainer', labelTr: 'Zaman Eğitimi', icon: Clock },
  { path: '/conversation', label: 'Conversation', labelTr: 'Konuşma', icon: MessageSquare },
  { path: '/settings', label: 'Settings', labelTr: 'Ayarlar', icon: Settings },
]

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const { progress } = useProgressStore()

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-neutral-900 border-r border-cream-200 dark:border-neutral-800 hidden lg:flex flex-col shadow-soft z-40">
        {/* Logo */}
        <div className="p-6 border-b border-cream-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-navy-700 to-racing-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-navy-900">EnglishFlow</h1>
              <p className="text-xs text-navy-500">Created by mussand</p>
            </div>
          </div>
        </div>

        {/* Streak Badge */}
        <div className="px-4 py-4">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-amber-700">Current Streak</p>
                <p className="text-xl font-bold text-amber-900">{progress.currentStreak} days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto scrollbar-thin">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            const Icon = item.icon
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={clsx(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
                  isActive 
                    ? 'bg-navy-900 text-white shadow-soft' 
                    : 'text-navy-600 hover:bg-navy-50 hover:text-navy-900'
                )}
              >
                <Icon className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="font-medium">{item.label}</span>
                  <span className={clsx(
                    'text-xs',
                    isActive ? 'text-navy-200' : 'text-navy-400'
                  )}>
                    {item.labelTr}
                  </span>
                </div>
              </NavLink>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-cream-200">
          <div className="text-xs text-navy-400 text-center">
            <p>Designed for British English</p>
            <p className="mt-1">© 2025 EnglishFlow</p>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-neutral-900 border-b border-cream-200 dark:border-neutral-800 lg:hidden flex items-center justify-between px-4 shadow-soft z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-navy-700 to-racing-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold">E</span>
          </div>
          <div>
            <span className="font-display font-bold text-navy-900 dark:text-white block leading-tight">EnglishFlow</span>
            <span className="text-[10px] text-navy-500 dark:text-neutral-400">Created by mussand</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Streak */}
          <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
            <Flame className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-bold text-amber-700">{progress.currentStreak}</span>
          </div>
        </div>
      </header>


      {/* Main Content */}
      <main className="lg:pl-72 pt-16 lg:pt-0 min-h-screen">
        <div className="p-4 md:p-6 lg:p-8 pb-20 lg:pb-8">
          {children}
        </div>
      </main>

      {/* Tab Bar - Mobile Only */}
      <TabBar />
    </div>
  )
}
