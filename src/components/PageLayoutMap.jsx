'use client'
import { useTranslations } from 'next-intl'

export default function PageLayoutMap ({ children }) {
  const t = useTranslations('MapPage')

  return (
    <div className="bg-gradient-to-b from-slate-900 via-cyan-500 w-full m-auto max-h-[calc(100vh_-_64px)] h-dvh ">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
        {t('title')}
      </h1>
      {children}
    </div>
  )
}
