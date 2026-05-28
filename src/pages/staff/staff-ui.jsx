import { Bell, Search, UserCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Label({ children, className = '' }) {
  return <span className={`luxe-label ${className}`}>{children}</span>
}

export function StaffTopbar({ placeholder = 'Search orders or clients...', rightLabel }) {
  return (
    <header className="flex h-20 items-center gap-4 border-b border-black/20 px-4 sm:px-6 lg:px-10">
      <div className="flex h-12 min-w-0 flex-1 items-center gap-3 border border-black/20 bg-[#f5f3f3] px-4 sm:h-14 sm:max-w-xl sm:gap-4 sm:px-5">
        <Search className="h-5 w-5 shrink-0 stroke-[1.7] sm:h-6 sm:w-6" aria-hidden="true" />
        <input
          className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[#6f7280] sm:text-lg"
          placeholder={placeholder}
          type="search"
        />
      </div>

      <div className="flex shrink-0 items-center gap-4 sm:gap-6">
        <Link className="relative" to="/notifications" aria-label="Notifications">
          <Bell className="h-6 w-6 stroke-[1.8]" aria-hidden="true" />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-700" />
        </Link>
        {rightLabel && <Label>{rightLabel}</Label>}
        <UserCircle className="h-7 w-7 stroke-[1.7] sm:h-8 sm:w-8" aria-hidden="true" />
      </div>
    </header>
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
