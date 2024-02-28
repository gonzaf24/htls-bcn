// LocaleSwitcherSelect.jsx

import { useTransition } from 'react'
import { useRouter, usePathname } from '../navigation'

export default function LocaleSwitcherSelectAux ({ defaultValue, label }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()

  function onSelectChange (event) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(
        { pathname },
        { locale: nextLocale }
      )
    })
  }

  return (
    <label className={'relative transition-opacity [&:disabled]:opacity-30'} >
      <p className="sr-only">{label}</p>
      <select
        className="text-danger inline-flex appearance-none bg-transparent py-0 px-2 border rounded-3xl border-danger dark:border-white dark:text-white"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        {/* Agrega más opciones de idioma según sea necesario */}
      </select>
    </label>
  )
}
