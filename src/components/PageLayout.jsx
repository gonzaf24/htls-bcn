// import { useTranslations } from 'next-intl'

export default function PageLayout ({ children, title }) {
  // const t = useTranslations('NavBar')

  return (
    <div className="bg-gradient-to-b from-slate-900 via-cyan-500 w-full m-auto h-dvh py-10 p-6">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">{title}</h1>
      {children}
    </div>
  )
}
