// import { useTranslations } from 'next-intl'
'use client'

export default function PageLayoutMap ({ children, title }) {
  // const t = useTranslations('NavBar')

  return (
    <div className="bg-gradient-to-b from-slate-900 via-cyan-500 h-dvh w-full m-auto py-10 dark:bg-gradient- ">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">{title}</h1>
      {children}
    </div>
  )
}
