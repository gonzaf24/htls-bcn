'use client'

import { NextUIProvider } from '@nextui-org/react'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function Providers ({ children, locale, messages }) {
  return (
    <NextIntlClientProvider locale={locale} timeZone="Europe/Vienna" now={new Date()} messages={messages}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme={'dark'}>
            {children}
        </NextThemesProvider>
      </NextUIProvider>
    </NextIntlClientProvider>
  )
}
