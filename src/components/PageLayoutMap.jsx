// import { unstable_setRequestLocale } from 'next-intl/server'

export default function PageLayoutMap ({ children, locale }) {
  console.log('locale', locale)
  // unstable_setRequestLocale(locale)

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-cyan-500 m-auto h-lvh">
      {children}
    </div>
  )
}
