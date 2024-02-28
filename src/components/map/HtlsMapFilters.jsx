'use client'
import getRequestApiTestData from '@/app/lib/data'
import HtlsMapFilter from './HtlsMapFilter'
import { mapFilters } from './mapConfig'
import { useEffect, useState } from 'react'

export default function HtlsMapFilters () {
  const [filterStates, setFilterStates] = useState(mapFilters.map(() => true))

  const onFilterChange = (index) => {
    setFilterStates(prevStates => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  // Se llama a getRequestApiTestData() después de montar el componente
  useEffect(() => {
    getRequestApiTestData()
  }, [])

  return (
    <div className="flex justify-start items-center">
      {mapFilters.map((filter, index) => {
        return <HtlsMapFilter key={index} filter={filter} checked={filterStates[index]} onFilterChange={() => onFilterChange(index)} />
      })}
    </div>
  )
}
