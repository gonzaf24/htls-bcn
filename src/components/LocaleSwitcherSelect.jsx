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
    <label className={'relative transition-opacity [&:disabled]:opacity-30'} >
      <p className="sr-only">{label}</p>
      <select
        className=" text-danger inline-flex appearance-none bg-transparent py-0 px-2 border rounded-3xl border-danger dark:border-white dark:text-white"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  )
}
