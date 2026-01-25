import { useEffect } from 'react'
import { useSettingsStore } from '@/stores/settingsStore'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { settings } = useSettingsStore()
  const { fontSize } = settings

  useEffect(() => {
    const root = document.documentElement
    const body = document.body

    // Always force dark mode
    root.classList.add('dark')
    body.classList.add('dark')
    root.classList.remove('light')
    body.classList.remove('light')
  }, [])

  useEffect(() => {
    const root = document.documentElement

    // Remove all font size classes
    root.classList.remove('text-size-small', 'text-size-medium', 'text-size-large')

    // Add the appropriate font size class
    root.classList.add(`text-size-${fontSize}`)
  }, [fontSize])

  return <>{children}</>
}
