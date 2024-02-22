import { useLocale, useTranslations } from 'next-intl'
import { locales } from '../config'
import LocaleSwitcherSelect from './LocalesSwitcherSelect'

export default function LocaleSwitcher () {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  console.log('locale', locale)

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}
