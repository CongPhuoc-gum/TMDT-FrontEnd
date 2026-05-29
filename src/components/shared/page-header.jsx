import { Search } from 'lucide-react'

import { cn } from '@/lib/utils'

export function PageHeader({
  placeholder = 'Search...',
  className,
  searchWrapClassName,
  inputClassName,
  iconClassName,
  rightSlot,
  rightSlotClassName,
}) {
  return (
    <header className={cn('flex h-20 items-center gap-4 border-b px-4 sm:px-6 lg:px-10', className)}>
      <div
        className={cn(
          'flex h-12 min-w-0 flex-1 items-center gap-3 px-4 sm:max-w-xl sm:gap-4 sm:px-5',
          searchWrapClassName,
        )}
      >
        <Search className={cn('h-5 w-5 shrink-0 stroke-[1.7] sm:h-6 sm:w-6', iconClassName)} aria-hidden="true" />
        <input
          className={cn(
            'h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-[#6f7280] sm:text-lg',
            inputClassName,
          )}
          placeholder={placeholder}
          type="search"
        />
      </div>

      {rightSlot ? (
        <div className={cn('flex shrink-0 items-center gap-4 sm:gap-6', rightSlotClassName)}>
          {rightSlot}
        </div>
      ) : null}
    </header>
  )
}
