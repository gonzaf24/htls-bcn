'use client'

import HtlsMapFilter from './HtlsMapFilter'
import { mapFilters } from './mapConfig'
import { useState } from 'react'

export default function HtlsMapFilters () {
  const [filterStates, setFilterStates] = useState(mapFilters.map(() => true))

  const onFilterChange = (index) => {
    setFilterStates(prevStates => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  return <div className="flex justify-start items-center">
      {mapFilters.map((filter, index) => (
        <HtlsMapFilter key={index} filter={filter} checked={filterStates[index]} onFilterChange={() => onFilterChange(index)} />
      ))}
  </div>
}
