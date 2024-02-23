'use client'

import { useTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { useState, useEffect } from 'react'
import { SunIcon } from './icons/SunIcon'
import { MoonIcon } from './icons/MoonIcon'

export function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex justify-center justify-items-center">
        <Switch
          onChange={toggleDarkMode}
            defaultSelected
            size="sm"
            thumbIcon={({ isSelected, className }) =>
              isSelected
                ? <SunIcon className={className} />
                : <MoonIcon className={className} />
              }
        />
    </div>
  )
};
