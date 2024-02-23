import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import PageLayout from '../../../components/PageLayout'

export default function TopsPage ({ params: { locale } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  const t = useTranslations('TopsPage')

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
        {t('description')}
      </div>
    </PageLayout>
  )
}
