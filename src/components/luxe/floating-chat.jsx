import { Link } from 'react-router-dom'
import { Flower2, MessageSquare } from 'lucide-react'

import { appConfig } from '@/config/env'
import { cn } from '@/lib/utils'

export function FloatingChat({ to = '/c/custom', variant = 'florist' }) {
  const conciergeTo = variant === 'concierge' ? appConfig.staffChatPath : to
  const isConcierge = variant === 'concierge'

  return (
    <Link
      to={conciergeTo}
      className={cn(
        'fixed z-50 flex items-center justify-center transition-transform hover:scale-105',
        isConcierge
          ? 'bottom-10 right-10 h-16 w-16 rounded-full bg-black text-white shadow-xl'
          : 'bottom-6 right-6 h-14 w-14 rounded-full border border-white/30 bg-[#f4dfcb]/70 text-black shadow-xl backdrop-blur-md',
      )}
      aria-label={isConcierge ? 'Open concierge' : 'Chat with a florist'}
    >
      {isConcierge ? (
        <MessageSquare className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Flower2 className="h-6 w-6" aria-hidden="true" />
      )}
    </Link>
  )
}
