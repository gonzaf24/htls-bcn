import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import TestMap from '@/components/map/TestMap'
import PageLayout from '../../components/PageLayout'

export default function Home ({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('MapPage')
  console.log('t : ', t('title'))

  return (
    <PageLayout title={t('title')}>
      <TestMap />
    </PageLayout>
  )
}
