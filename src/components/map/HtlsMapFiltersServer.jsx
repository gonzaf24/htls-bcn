import getRequestApiTestData from '@/app/lib/data'
import HtlsMapFilters from './HtlsMapFilters'

export default async function HtlsMapFiltersServer () {
  await getRequestApiTestData('Filters')
  return <HtlsMapFilters />
}
