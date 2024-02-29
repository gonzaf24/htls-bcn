'use client'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'

const colorClasses = {
  red: 'bg-red-500',
  indigo: 'bg-indigo-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500'
}

const textColorClasses = {
  red: 'text-red-500',
  indigo: 'text-indigo-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500'
}

export default function HtlsMapFilter ({ filter, checked, onFilterChange }) {
  const t = useTranslations('NavBar')

  const colorClass = colorClasses[filter.color] || 'bg-gray-300'
  const textColorClass = textColorClasses[filter.color] || 'text-gray-400'

  return <div className="flex flex-col justify-start items-start gap-2 p-2">
            <h6 className="text-white text-xs pl-3">{t(filter.label)}</h6>
            <label htmlFor={`${filter.label}-ID`} className={clsx('relative h-8 w-14 cursor-pointer rounded-full transition', checked ? colorClass : 'bg-gray-300')}>
                <input
                    checked={checked}
                    onChange={onFilterChange}
                    type="checkbox"
                    id={`${filter.label}-ID`}
                    className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
                />

                <span className={clsx('absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-white transition-all peer-checked:start-6', textColorClass)}>
                  <svg
                    data-unchecked-icon
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>

                    <svg
                    data-checked-icon
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
            </label>
          </div>
}
