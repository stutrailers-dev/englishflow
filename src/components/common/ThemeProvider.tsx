import { useEffect } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettingsStore()
  const { theme, fontSize } = settings

  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    // Handle theme
    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        root.classList.add('dark')
        body.classList.add('dark')
      } else {
        root.classList.remove('dark')
        body.classList.remove('dark')
      }
    }

    if (theme === 'dark') {
      applyTheme(true)
    } else if (theme === 'light') {
      applyTheme(false)
    } else {
      // System preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      applyTheme(mediaQuery.matches)

      const handler = (e: MediaQueryListEvent) => applyTheme(e.matches)
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }
  }, [theme])

  useEffect(() => {
    const root = document.documentElement

    // Remove all font size classes
    root.classList.remove('text-size-small', 'text-size-medium', 'text-size-large')

    // Add the appropriate font size class
    root.classList.add(`text-size-${fontSize}`)
  }, [fontSize])

  return <>{children}</>
}
