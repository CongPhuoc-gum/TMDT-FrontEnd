import { Bell, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PageHeader } from '@/components/shared/page-header'
import { routes } from '@/config/routes'

export function Label({ children, className = '' }) {
  return <span className={`luxe-label ${className}`}>{children}</span>
}

export function StaffTopbar({ placeholder = 'Search orders or clients...', rightLabel }) {
  return (
    <PageHeader
      placeholder={placeholder}
      className="border-black/20"
      searchWrapClassName="border border-black/20 bg-[#f5f3f3] sm:h-14"
      rightSlot={(
        <>
          <Link className="relative" to={routes.notifications} aria-label="Notifications">
            <Bell className="h-6 w-6 stroke-[1.8]" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-700" />
          </Link>
          {rightLabel ? <Label>{rightLabel}</Label> : null}
          <UserCircle className="h-7 w-7 stroke-[1.7] sm:h-8 sm:w-8" aria-hidden="true" />
        </>
      )}
    />
  )
}

export function StatusPill({ children, tone = 'light' }) {
  const tones = {
    light: 'bg-[#f5f3f3] text-black',
    dark: 'bg-black text-white',
    warm: 'bg-[#f2dfd1] text-black',
    danger: 'bg-red-50 text-red-700',
  }

  return <span className={`luxe-label inline-flex px-4 py-3 ${tones[tone]}`}>{children}</span>
}
