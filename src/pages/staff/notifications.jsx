import {
  Bell,
  CheckCircle2,
  ChevronRight,
  Filter,
  MessageSquare,
  Package,
  Search,
  Sparkles,
  Truck,
} from 'lucide-react'

import { Label, StaffTopbar } from '@/components/staff/staff-ui'

const notifications = [
  {
    id: 'NTF-9021',
    type: 'orders',
    title: 'Order #LB-89234 requires manual confirmation',
    text: 'Client requested same-day delivery and premium wrapping add-on.',
    time: '2 min ago',
    unread: true,
    level: 'High Priority',
  },
  {
    id: 'NTF-9020',
    type: 'messages',
    title: 'New client message from Elena Voloshyna',
    text: 'Asked to adjust color palette from ivory to peach + white.',
    time: '12 min ago',
    unread: true,
    level: 'Needs Reply',
  },
  {
    id: 'NTF-9019',
    type: 'logistics',
    title: 'Route B delayed by 25 minutes',
    text: 'Traffic congestion around Khreshchatyk St. Driver updated ETA.',
    time: '28 min ago',
    unread: true,
    level: 'Operational',
  },
  {
    id: 'NTF-9018',
    type: 'bespoke',
    title: 'Moodboard approved for wedding concept',
    text: 'Client approved final direction. Procurement can begin.',
    time: '1 h ago',
    unread: false,
    level: 'Update',
  },
  {
    id: 'NTF-9017',
    type: 'orders',
    title: 'Order #LB-89229 marked as delivered',
    text: 'Courier completed handoff with photo confirmation.',
    time: '3 h ago',
    unread: false,
    level: 'Completed',
  },
]

const typeConfig = {
  orders: { icon: Package, chip: 'Orders', iconBg: 'bg-[#efeded]' },
  messages: { icon: MessageSquare, chip: 'Messages', iconBg: 'bg-[#f2dfd1]' },
  logistics: { icon: Truck, chip: 'Logistics', iconBg: 'bg-[#e4e2e2]' },
  bespoke: { icon: Sparkles, chip: 'Bespoke', iconBg: 'bg-[#efeded]' },
}

const quickFilters = ['All', 'Unread', 'Orders', 'Messages', 'Logistics']

export default function StaffNotifications() {
  const unreadCount = notifications.filter((item) => item.unread).length

  return (
    <div className="overflow-hidden">
      <StaffTopbar placeholder="Search notifications..." rightLabel="Notification Center" />

      <div className="grid min-h-[calc(100svh-5rem)] grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="border-b border-black/20 bg-[#f5f3f3] xl:border-b-0 xl:border-r">
          <div className="border-b border-black/20 px-4 py-6 sm:px-6 sm:py-8">
            <Label>Overview</Label>
            <h1 className="luxe-serif mt-4 text-4xl leading-none sm:text-5xl">Notifications</h1>
            <p className="mt-4 text-base text-[#444748] sm:text-lg">Track updates from orders, clients, and logistics in one place.</p>
          </div>

          <div className="space-y-4 px-4 py-6 sm:px-6 sm:py-8">
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-black/20 bg-white p-4">
                <Label>Total</Label>
                <p className="mt-4 text-3xl font-semibold">{notifications.length}</p>
              </div>
              <div className="border border-black/20 bg-white p-4">
                <Label>Unread</Label>
                <p className="mt-4 text-3xl font-semibold">{unreadCount}</p>
              </div>
            </div>

            <div className="rounded-none border border-black/20 bg-white p-4">
              <div className="mb-3 flex items-center gap-3">
                <Filter className="h-4 w-4" />
                <Label>Quick Filters</Label>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter, index) => (
                  <button
                    key={filter}
                    type="button"
                    className={`px-3 py-2 text-xs uppercase ${index === 0 ? 'bg-black text-white' : 'bg-[#efeded]'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section className="flex min-h-0 min-w-0 flex-col">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-black/20 px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex min-w-0 items-center gap-3">
              <Bell className="h-5 w-5 shrink-0" />
              <p className="truncate text-base sm:text-lg">
                You have <strong>{unreadCount}</strong> unread notifications
              </p>
            </div>
            <button type="button" className="luxe-label flex h-10 items-center gap-2 border border-black/25 px-4">
              <CheckCircle2 className="h-4 w-4" />
              Mark All Read
            </button>
          </header>

          <div className="min-h-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
            <div className="mb-4 flex h-12 items-center gap-3 border border-black/20 bg-[#f5f3f3] px-4">
              <Search className="h-4 w-4 shrink-0" />
              <input
                className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#6f7280] sm:text-base"
                placeholder="Search by order ID, client, or keyword..."
                type="search"
              />
            </div>

            <div className="space-y-3">
              {notifications.map((item) => {
                const config = typeConfig[item.type]
                const Icon = config.icon

                return (
                  <article
                    key={item.id}
                    className={`grid grid-cols-[44px_minmax(0,1fr)] gap-3 border p-4 sm:grid-cols-[52px_minmax(0,1fr)_auto] sm:gap-4 sm:p-5 ${
                      item.unread ? 'border-black/30 bg-[#efeded]' : 'border-black/20 bg-white'
                    }`}
                  >
                    <div className={`flex h-11 w-11 items-center justify-center ${config.iconBg} sm:h-12 sm:w-12`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-white/80 px-2 py-1 text-[11px] uppercase sm:text-xs">{config.chip}</span>
                        <span className="text-[11px] uppercase text-[#56595b] sm:text-xs">{item.level}</span>
                        {item.unread ? <span className="h-2 w-2 rounded-full bg-black" /> : null}
                      </div>
                      <h3 className="mt-2 text-base font-semibold sm:text-lg">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#303031] sm:text-base">{item.text}</p>
                      <p className="mt-3 text-xs text-[#747878] sm:text-sm">{item.time}</p>
                    </div>

                    <button
                      type="button"
                      className="hidden h-10 w-10 items-center justify-center self-center border border-black/20 sm:flex"
                      aria-label={`Open notification ${item.id}`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
