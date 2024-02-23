import Providers from './providers'
import HeaderBar from '@/components/HeaderBar'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams () {
  return [{ locale: 'en' }, { locale: 'es' }]
}

export default async function LocaleLayout ({ children, params: { locale } }) {
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
      <body>
        <main className="text-foreground bg-background flex flex-col justify-center items-center ">
          <NextIntlClientProvider locale={locale} timeZone="Europe/Vienna" now={new Date()} messages={messages}>
            <Providers >
                <HeaderBar />
                {children}
            </Providers>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}
