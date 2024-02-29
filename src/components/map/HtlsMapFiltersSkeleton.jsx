import React from 'react'
import { Skeleton } from '@nextui-org/react'

export default function HtlsMapFiltersSkeleton () {
  return (
    <div className="w-full flex items-start p-3 gap-5">
    <div className="w-min flex flex-col items-start gap-2">
      <div>
        <Skeleton className="flex rounded-md w-12 h-2"/>
      </div>
      <div className="w-min flex flex-col gap-2">
        <Skeleton className="h-6 w-12 rounded-lg"/>
      </div>
    </div>
    <div className="w-min flex flex-col items-start gap-2">
      <div>
        <Skeleton className="flex rounded-md w-12 h-2"/>
      </div>
      <div className="w-min flex flex-col gap-2">
        <Skeleton className="h-6 w-12 rounded-lg"/>
      </div>
    </div>
    <div className="w-min flex flex-col items-start gap-2">
      <div>
        <Skeleton className="flex rounded-md w-12 h-2"/>
      </div>
      <div className="w-min flex flex-col gap-2">
        <Skeleton className="h-6 w-12 rounded-lg"/>
      </div>
    </div>
    <div className="w-min flex flex-col items-start gap-2">
      <div>
        <Skeleton className="flex rounded-md w-12 h-2"/>
      </div>
      <div className="w-min flex flex-col gap-2">
        <Skeleton className="h-6 w-12 rounded-lg"/>
      </div>
    </div>
    </div>

  )
}
