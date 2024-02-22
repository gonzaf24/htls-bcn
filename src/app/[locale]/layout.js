import './globals.css'
import { unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '../../config'
import Navigation from '@/components/Navigation'

export function generateStaticParams () {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout ({ children, params: { locale } }) {
  unstable_setRequestLocale(locale)

  return (
    <html className="h-full" lang={locale}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
