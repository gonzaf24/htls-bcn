import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import PageLayout from '../../../components/PageLayout'

export default function TopsPage ({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('TopsPage')

  return (
    <PageLayout title={t('title')} locale={locale}>
      <div className="max-w-[490px]">
        {t('description')}
      </div>
    </PageLayout>
  )
}
