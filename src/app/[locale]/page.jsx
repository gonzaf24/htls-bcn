'use client'

import myMarkersPlaces from '@/components/map/fake_data'
import HtlsMap from '@/components/map/HtlsMap'
import PageLayoutMap from '@/components/PageLayoutMap'
import { useEffect, useState } from 'react'

export default function Home ({ params: { locale } }) {
  const [loaded, setLoaded] = useState(false)

  // Una vez que el componente ha sido montado, actualiza el estado
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
      <PageLayoutMap>
          <div className="relative  h-[calc(100vh_-_180px)]">
            {loaded && <HtlsMap locale={locale} places={myMarkersPlaces} />}
          </div>
      </PageLayoutMap>
  )
}
