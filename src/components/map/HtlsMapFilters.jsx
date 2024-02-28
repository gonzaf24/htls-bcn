import getRequestApiTestData from '@/app/lib/data'
import HtlsMapFilter from './HtlsMapFilter'
import { mapFilters } from './mapConfig'

export default async function HtlsMapFilters () {
  await getRequestApiTestData()

  return (
    <div className="flex justify-start items-center">
      {mapFilters.map((filter, index) => {
        return <HtlsMapFilter key={index} filter={filter} checked={true}/>
      })}
    </div>
  )
}
