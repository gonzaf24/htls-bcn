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
  // Obtener las traducciones según el idioma
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' })

  // Metadatos para SEO
  return {
    title: t('title'),
    description: t('title'),
    keywords: t('title'),
    author: t('title'),
    robots: 'index, follow',
    language: locale,
    canonicalUrl: 'https://example.com/pagina-ejemplo',
    ogImage: 'https://example.com/imagen.png',
    twitterCardType: 'summary_large_image',
    twitterImage: 'https://example.com/imagen.png'
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
