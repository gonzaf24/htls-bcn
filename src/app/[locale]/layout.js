import { unstable_setRequestLocale } from 'next-intl/server'
import Providers from './providers'
import NavBar from '@/components/NavBar'

export default async function LocaleLayout ({ children, params: { locale } }) {
  unstable_setRequestLocale(locale)
  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js i18n</title>
      </head>
      <body>
        <Providers>
          <main className="text-foreground bg-background">
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
