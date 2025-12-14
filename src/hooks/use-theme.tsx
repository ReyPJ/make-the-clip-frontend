import { ScriptOnce } from '@tanstack/react-router'
import { createContext, use, useEffect, useMemo, useState } from 'react'

export type ResolvedTheme = 'dark' | 'light'
export type Theme = ResolvedTheme | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)
const isBrowser = typeof window !== 'undefined'

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'ui-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (isBrowser) {
      const stored = localStorage.getItem(storageKey)
      if (stored === 'dark' || stored === 'light' || stored === 'system') {
        return stored
      }
    }
    return defaultTheme
  })
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light')

  useEffect(() => {
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function updateTheme() {
      root.classList.remove('light', 'dark')

      if (theme === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        setResolvedTheme(systemTheme)
        root.classList.add(systemTheme)
        return
      }

      setResolvedTheme(theme)
      root.classList.add(theme)
    }

    mediaQuery.addEventListener('change', updateTheme)
    updateTheme()

    return () => mediaQuery.removeEventListener('change', updateTheme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (newTheme: Theme) => {
        localStorage.setItem(storageKey, newTheme)
        setTheme(newTheme)
      },
    }),
    [theme, resolvedTheme, storageKey],
  )

  return (
    <ThemeProviderContext value={value}>
      <ScriptOnce>
        {`(function(storageKey) {
          var stored = localStorage.getItem(storageKey);
          if (
            stored === 'dark' ||
            ((stored === null || stored === 'system') &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          ) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.add('light');
          }
        })('${storageKey}')`}
      </ScriptOnce>
      {children}
    </ThemeProviderContext>
  )
}

export function useTheme() {
  const context = use(ThemeProviderContext)
  return context
}
