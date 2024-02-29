import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default async function PageLayout ({ children, title, locale }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('PageLayout')
  console.log('t', t)

  return (
    <div className="bg-gradient-to-b from-slate-900 via-cyan-500 h-dvh w-full m-auto py-10 p-6 dark:bg-gradient- ">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">{title}</h1>
      {children}
    </div>
  )
}
