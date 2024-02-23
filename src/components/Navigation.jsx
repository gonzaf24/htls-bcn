import { ThemeSwitcher } from './ThemeSwitcher'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'
import NavigationLink from './NavigationLink'

export default function Navigation () {
  const t = useTranslations('Navigation')

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t('home')}</NavigationLink>
          <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
          <NavigationLink href="/posts">{t('posts')}</NavigationLink>
        </div>
        <div className="flex justify-between">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </nav>
    </div>
  )
}
