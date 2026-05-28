import { Bell, ChevronLeft, ChevronRight, Search, UserCircle } from 'lucide-react'

export function AdminTopbar({ placeholder = 'Search analytics...', role = 'ADMIN USER' }) {
  return (
    <div className="flex h-20 items-center border-b border-neutral-300 px-6 sm:px-10">
      <div className="flex h-12 w-full max-w-md items-center gap-3 bg-white px-5 text-neutral-500">
        <Search className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        <span className="text-sm sm:text-base">{placeholder}</span>
      </div>
      <div className="ml-auto hidden items-center gap-5 lg:flex">
        <span className="relative">
          <Bell className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-600" />
        </span>
        <span className="text-sm font-semibold uppercase">{role}</span>
        <UserCircle className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
      </div>
    </div>
  )
}

export function AdminMetric({ label, value, note, tone = 'default', children }) {
  return (
    <div className="min-h-32 border border-neutral-300 bg-[#f7f7f5] p-7">
      <div className="luxe-label text-neutral-600">{label}</div>
      <div
        className={
          tone === 'danger'
            ? 'luxe-serif mt-8 text-4xl text-red-700'
            : 'luxe-serif mt-8 text-4xl text-black'
        }
      >
        {value}
      </div>
      {note ? <p className="mt-2 text-sm text-neutral-600">{note}</p> : null}
      {children}
    </div>
  )
}

export function AdminPage({ children, compact = false }) {
  return (
    <section className={compact ? 'px-6 py-8 sm:px-10' : 'px-6 py-12 sm:px-10 lg:px-16'}>
      {children}
    </section>
  )
}

export function AdminTitle({ eyebrow, title, children, action }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {eyebrow ? <p className="luxe-label mb-4 text-neutral-600">{eyebrow}</p> : null}
        <h2 className="luxe-serif text-5xl leading-none sm:text-6xl lg:text-7xl">{title}</h2>
        {children ? <div className="mt-4 max-w-4xl text-lg leading-8 text-neutral-700">{children}</div> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

export function Pager() {
  return (
    <div className="flex items-center gap-3">
      <button className="flex h-12 w-12 items-center justify-center border border-neutral-300 text-neutral-400">
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button className="flex h-12 w-12 items-center justify-center bg-black text-white">1</button>
      <button className="flex h-12 w-12 items-center justify-center border border-neutral-300">2</button>
      <button className="flex h-12 w-12 items-center justify-center border border-neutral-300">3</button>
      <button className="flex h-12 w-12 items-center justify-center border border-neutral-300">
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
