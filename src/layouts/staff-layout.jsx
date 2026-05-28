import { NavLink, Outlet } from 'react-router-dom'
import {
  Bell,
  CircleHelp,
  Grid2X2,
  MessageSquare,
  Package,
  Settings,
  Sparkles,
  Truck,
} from 'lucide-react'

import { cn } from '@/lib/utils'

const navItems = [
  { to: '/staff/dashboard', icon: Grid2X2, label: 'Dashboard' },
  { to: '/staff/orders', icon: Package, label: 'Orders' },
  { to: '/chat', icon: MessageSquare, label: 'Communication' },
  { to: '/notifications', icon: Bell, label: 'Notifications' },
  { to: '/staff/requests', icon: Sparkles, label: 'Bespoke Requests' },
  { to: '/staff/logistics', icon: Truck, label: 'Logistics' },
]

function StaffNavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex h-14 items-center gap-5 border-l-4 border-transparent px-6 text-lg text-[#303031] transition-colors hover:bg-[#efeded]',
          isActive && 'border-black bg-[#efeded] font-semibold text-black',
        )
      }
    >
      <Icon className="h-6 w-6 stroke-[1.7]" aria-hidden="true" />
      <span>{label}</span>
    </NavLink>
  )
}

export default function StaffLayout() {
  return (
    <div className="luxe-home min-h-screen bg-[#fbf9f9] text-[#1b1c1c]">
      <div className="grid min-h-screen lg:grid-cols-[360px_1fr]">
        <aside className="hidden border-r border-black/20 bg-[#fbf9f9] lg:flex lg:flex-col">
          <div className="px-8 py-10">
            <div className="luxe-serif text-5xl leading-[1.05]">
              Kyiv
              <br />
              LuxeBouquets
            </div>
            <div className="luxe-label mt-5">Staff Portal</div>
          </div>

          <div className="px-8 py-6">
            <button className="luxe-label flex h-18 w-full items-center justify-center gap-4 bg-black text-white" type="button">
              New Order
            </button>
          </div>

          <nav className="mt-8 grid" aria-label="Staff navigation">
            {navItems.map((item) => (
              <StaffNavItem key={item.to} {...item} />
            ))}
          </nav>

          <div className="mt-auto border-t border-black/20 py-8">
            <StaffNavItem to="/staff/settings" icon={Settings} label="Settings" />
            <StaffNavItem to="/staff/support" icon={CircleHelp} label="Support" />
          </div>
        </aside>

        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
