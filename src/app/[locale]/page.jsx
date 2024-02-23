import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import PageLayout from '../../components/PageLayout'

export default function Home ({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('MapPage')

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
        {t('description')}
      </div>
    </PageLayout>
  )
}
