import { Bell, Search, UserCircle } from 'lucide-react'

export function Label({ children, className = '' }) {
  return <span className={`luxe-label ${className}`}>{children}</span>
}

export function StaffTopbar({ placeholder = 'Search orders or clients...', rightLabel }) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-black/20 px-6 lg:px-10">
      <div className="flex h-14 w-full max-w-xl items-center gap-4 border border-black/20 bg-[#f5f3f3] px-5">
        <Search className="h-6 w-6 stroke-[1.7]" aria-hidden="true" />
        <input
          className="h-full flex-1 bg-transparent text-lg outline-none placeholder:text-[#6f7280]"
          placeholder={placeholder}
          type="search"
        />
      </div>

      <div className="ml-6 flex items-center gap-6">
        <button className="relative" type="button" aria-label="Notifications">
          <Bell className="h-6 w-6 stroke-[1.8]" aria-hidden="true" />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-700" />
        </button>
        {rightLabel && <Label>{rightLabel}</Label>}
        <UserCircle className="h-8 w-8 stroke-[1.7]" aria-hidden="true" />
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
