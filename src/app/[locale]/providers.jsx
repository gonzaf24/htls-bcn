'use client'

import { NextUIProvider } from '@nextui-org/react'
import { NextIntlClientProvider, IntlErrorCode } from 'next-intl'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

function onError (error) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Missing translations are expected and should only log an error
    console.error(error)
  } else {
    // Other errors indicate a bug in the app and should be reported
    console.log('Other errors indicate a bug in the app and should be reported : ', error)
    // reportToErrorTracking(error)
  }
}

function getMessageFallback ({ namespace, key, error }) {
  const path = [namespace, key].filter((part) => part != null).join('.')

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return path + ' is not yet translated'
  } else {
    return 'Dear developer, please fix this message: ' + path
  }
}

export default function Providers ({ children, locale, messages }) {
  return (
    <NextIntlClientProvider
        locale={locale}
        timeZone="Europe/Vienna"
        now={new Date()}
        messages={messages}
        onError={onError}
        getMessageFallback={getMessageFallback}
      >
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme={'dark'}>
            {children}
        </NextThemesProvider>
      </NextUIProvider>
    </NextIntlClientProvider>
  )
}
