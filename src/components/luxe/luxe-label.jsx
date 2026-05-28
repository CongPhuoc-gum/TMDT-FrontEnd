import { cn } from '@/lib/utils'

export function LuxeLabel({ children, className }) {
  return <span className={cn('luxe-label', className)}>{children}</span>
}
