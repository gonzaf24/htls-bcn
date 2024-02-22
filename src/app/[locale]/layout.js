import './globals.css'
import { unstable_setRequestLocale } from 'next-intl/server'
import { generateStaticParams } from '../../config' // Importa la función generateStaticParams desde tu archivo de configuración
import Navigation from '@/components/Navigation'

export default async function LocaleLayout ({ children, params: { locale } }) {
  unstable_setRequestLocale(locale)

  return (
    <html className="h-full" lang={locale}>
      <head>
        {/* Aquí van tus etiquetas <head> si las tienes */}
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export function getStaticPaths () {
  const staticParams = generateStaticParams() // Genera los parámetros estáticos para todas las rutas
  const paths = staticParams.map((params) => ({
    params
  }))

  return {
    paths,
    fallback: false
  }
}
