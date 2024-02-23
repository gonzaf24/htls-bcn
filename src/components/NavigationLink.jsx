'use client'

import { Link } from '../navigation'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function NavigationLink ({ href, onLinkClick, ...rest }) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  const linkClassName = `inline-block px-2 py-3 transition-colors ${
    isActive ? 'text-danger font-bold ' : 'text-danger hover:text-danger-600 dark:text-white dark:hover:text-danger-600'
  }`

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={linkClassName}
      onClick={onLinkClick}
      href={href}
      {...rest}
    />
  )
}
