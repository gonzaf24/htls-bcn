import { unstable_setRequestLocale } from 'next-intl/server'
import Navigation from '../../components/Navigation'

export default async function LocaleLayout ({ children, params: { locale } }) {
  unstable_setRequestLocale(locale)
  return (
    <html className="h-full" lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js i18n</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
