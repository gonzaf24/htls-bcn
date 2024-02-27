import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import TestMap from '@/components/map/TestMap'
import PageLayoutMap from '@/components/PageLayoutMap'
import myMarkersPlaces from '@/components/map/fake_data'

export default function Home ({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('MapPage')
  return (
    <PageLayoutMap title={t('title')}>
      <div className="relative h-[calc(100%_-_48px)]">
          <TestMap locale={locale} places={myMarkersPlaces}/>
      </div>
    </PageLayoutMap>
  )
}
