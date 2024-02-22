'use client'

import { useSelectedLayoutSegment } from 'next/navigation'
import { Link } from '../navigation'

export default function NavigationLink ({
  href,
  ...rest
}) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  const linkClassName = `inline-block px-2 py-3 transition-colors ${
    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
  }`

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={linkClassName}
      href={href}
      {...rest}
    />
  )
}
