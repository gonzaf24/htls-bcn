import Providers from './providers'
import HeaderBar from '@/components/HeaderBar'
import { notFound } from 'next/navigation'
import { monstserrat } from './fonts'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '../../config'

export function generateStaticParams () {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata ({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

  return {
    title: t('title')
  }
}

export default async function LocaleLayout ({ children, params: { locale } }) {
  unstable_setRequestLocale(locale)

  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    console.error(error)
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Cache-control" content="no-cache, no-store, must-revalidate"/>
        <title>Highlights Bcn</title>
      </head>
      <body className={ `${monstserrat.className} `} >
          <Providers locale={locale} messages={messages} >
            <main>
              <HeaderBar />
              {children}
            </main>
          </Providers>
      </body>
    </html>
  )
}
