import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import TestMap from '@/components/map/TestMap'
import PageLayoutMap from '@/components/PageLayoutMap'

export default function Home ({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('MapPage')

  return (
    <PageLayoutMap title={t('title')}>
      <div className="relative h-3/4">
        <TestMap/>
      </div>
    </PageLayoutMap>
  )
}
