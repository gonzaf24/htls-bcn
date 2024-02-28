import myMarkersPlaces from '@/components/map/fake_data'
import HtlsMap from '@/components/map/HtlsMap'
import PageLayoutMap from '@/components/PageLayoutMap'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function Home ({ params: { locale } }) {
  unstable_setRequestLocale(locale)

  return (
      <PageLayoutMap>
          <div className="flex relative shrink h-[calc(100vh_-_180px)]">
            <HtlsMap locale={locale} places={myMarkersPlaces} />
          </div>
      </PageLayoutMap>
  )
}
