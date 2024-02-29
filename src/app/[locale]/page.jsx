import myMarkersPlaces from '@/components/map/fake_data'
import HtlsMap from '@/components/map/HtlsMap'
import PageLayoutMap from '@/components/PageLayoutMap'
import { HtlsMapLoading } from '@/components/map/HtlsMapLoading'
import { Suspense } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import HtlsMapFiltersServer from '@/components/map/HtlsMapFiltersServer'
import HtlsMapFiltersSkeleton from '@/components/map/HtlsMapFiltersSkeleton'
// import { useTranslations } from 'next-intl'

export default function Home ({ params: { locale } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)

  // const t = useTranslations('PathnamesPage')

  return (
      <PageLayoutMap locale={locale}>
          <div className="relative h-[calc(100vh_-_180px)]">
          <Suspense fallback={<HtlsMapFiltersSkeleton/>}>
              <HtlsMapFiltersServer />
          </Suspense>
          <Suspense fallback={<HtlsMapLoading/>}>
              <HtlsMap locale={locale} places={myMarkersPlaces} />
          </Suspense>
          </div>
      </PageLayoutMap>
  )
}
