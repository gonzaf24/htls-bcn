import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import TestMap from '@/components/map/TestMap'
import PageLayout from '../../components/PageLayout'
/* import HtlsMap from '@/components/map/HtlsMap'
import markersData from '../fake-data' */

export default function Home ({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('MapPage')
  console.log('t : ', t('title'))

  return (
    <PageLayout >
      {/* <HtlsMap dataPlaces={ markersData } /> */}
      <TestMap />
    </PageLayout>
  )
}
