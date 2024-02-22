import PageLayout from '@/components/PageLayout'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function PathnamesPage ({ params: { locale } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  const t = useTranslations('PathnamesPage')

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
        {t('description')}
      </div>
    </PageLayout>
  )
}