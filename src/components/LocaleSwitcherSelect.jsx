'use client'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'
import { useRouter, usePathname } from '../navigation'

export default function LocaleSwitcherSelect ({
  children,
  defaultValue,
  label
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange (event) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <label className={'relative text-gray-40 transition-opacity [&:disabled]:opacity-30'} >
      <p className="sr-only">{label}</p>
      <select
        className="text-black dark:text-white text-cerise-red-500 inline-flex appearance-none bg-transparent py-3 pl-2 pr-6 "
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  )
}
