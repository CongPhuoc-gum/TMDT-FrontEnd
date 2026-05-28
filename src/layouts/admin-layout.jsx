import { NavLink, Outlet } from 'react-router-dom'
import {
  BarChart3,
  Bell,
  Box,
  LogOut,
  Settings,
  Tag,
  UserCircle,
  Users,
} from 'lucide-react'

import { cn } from '@/lib/utils'

const navItems = [
  { to: '/admin/dashboard', label: 'Insights', icon: BarChart3 },
  { to: '/admin/inventory', label: 'Product Manager', icon: Box },
  { to: '/admin/staff', label: 'Team & Permissions', icon: Users },
  { to: '/admin/coupons', label: 'Coupon Control', icon: Tag },
  { to: '/admin/customers', label: 'Customer Relations', icon: Users },
]

function AdminNavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'flex h-14 items-center gap-4 border-l-4 border-transparent px-7 text-[1rem] text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black',
          isActive && 'border-black bg-neutral-100 font-semibold text-black',
        )
      }
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
      <span>{label}</span>
    </NavLink>
  )
}

export default function AdminLayout() {
  return (
    <div className="luxe-home min-h-screen bg-[#f6f6f4] text-black">
      <div className="grid min-h-screen lg:grid-cols-[290px_1fr] xl:grid-cols-[320px_1fr]">
        <aside className="border-r border-neutral-300 bg-[#f4f4f2]">
          <div className="flex min-h-screen flex-col">
            <div className="border-b border-neutral-300 px-7 py-8">
              <h1 className="luxe-serif text-[2rem] leading-none sm:text-[2.35rem]">
                Kyiv
                <br />
                LuxeBouquets
              </h1>
              <p className="luxe-label mt-3 text-neutral-700">Management Portal</p>
            </div>

            <nav className="py-10" aria-label="Admin navigation">
              {navItems.map((item) => (
                <AdminNavItem key={item.to} {...item} />
              ))}
            </nav>

            <div className="mt-auto border-t border-neutral-300 py-6">
              <button className="flex h-14 w-full items-center gap-4 px-7 text-left text-[1rem] text-neutral-700 hover:bg-neutral-100 hover:text-black">
                <Settings className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                <span>Settings</span>
              </button>
              <button className="flex h-14 w-full items-center gap-4 px-7 text-left text-[1rem] text-neutral-700 hover:bg-neutral-100 hover:text-black">
                <LogOut className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="flex h-20 items-center border-b border-neutral-300 bg-[#f8f8f6] px-6 sm:px-10">
            <div className="hidden flex-1 items-center gap-4 text-neutral-500 md:flex">
              <span className="h-px w-12 bg-neutral-300" />
              <span className="text-sm">Kyiv LuxeBouquets administrative workspace</span>
            </div>
            <div className="ml-auto flex items-center gap-5">
              <span className="relative">
                <Bell className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-600" />
              </span>
              <span className="hidden text-sm font-semibold uppercase sm:inline">Admin User</span>
              <UserCircle className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
            </div>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
