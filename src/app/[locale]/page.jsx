'use client'
import myMarkersPlaces from '@/components/map/fake_data'
import HtlsMap from '@/components/map/HtlsMap'
import HtlsMapFilters from '@/components/map/HtlsMapFilters'
import PageLayoutMap from '@/components/PageLayoutMap'
import { HtlsMapLoading } from '@/components/map/HtlsMapLoading'
import { Suspense } from 'react'

export default function Home ({ params: { locale } }) {
  return (
      <PageLayoutMap>
          <div className="relative h-[calc(100vh_-_180px)]">
          <Suspense fallback={<div>Loading...</div>}>
              <HtlsMapFilters />
          </Suspense>
          <Suspense fallback={<HtlsMapLoading/>}>
              <HtlsMap locale={locale} places={myMarkersPlaces} />
          </Suspense>
          </div>
      </PageLayoutMap>
  )
}
