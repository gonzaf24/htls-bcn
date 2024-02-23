import { useLocale, useTranslations } from 'next-intl'
import { locales } from '../config'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

export default function LocaleSwitcher () {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  console.log('locales', locales)
  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
