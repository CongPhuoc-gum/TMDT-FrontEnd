import { ChevronLeft, ChevronRight } from 'lucide-react'

import { PageHeader } from '@/components/shared/page-header'

export function AdminTopbar({ placeholder = 'Search analytics...' }) {
  return (
    <PageHeader
      placeholder={placeholder}
      className="border-neutral-300 px-6 sm:px-10"
      searchWrapClassName="w-full max-w-md bg-white text-neutral-500"
      inputClassName="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-500 sm:text-base"
      iconClassName="h-5 w-5 stroke-[1.8] sm:h-5 sm:w-5"
    />
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
      <button type="button" className="flex h-12 w-12 items-center justify-center border border-neutral-300 text-neutral-400">
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" className="flex h-12 w-12 items-center justify-center bg-black text-white">
        1
      </button>
      <button type="button" className="flex h-12 w-12 items-center justify-center border border-neutral-300">
        2
      </button>
      <button type="button" className="flex h-12 w-12 items-center justify-center border border-neutral-300">
        3
      </button>
      <button type="button" className="flex h-12 w-12 items-center justify-center border border-neutral-300">
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
