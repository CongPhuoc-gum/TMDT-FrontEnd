import { cn } from '@/lib/utils'

export function LuxePage({ children, className, bg = '#f9f8f5' }) {
  return (
    <div
      className={cn('luxe-home min-h-screen text-[#191919]', className)}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  )
}
