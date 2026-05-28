import { UserPlus } from 'lucide-react'

import { luxeImages } from '@/data/luxe-data'
import { AdminMetric, AdminPage, AdminTitle } from './admin-ui'

const members = [
  {
    date: 'Jan 12, 2021',
    name: 'Elena Voloshyna',
    role: 'Senior Florist',
    specialty: 'Bridal & Sculptural',
    permissions: ['Lead Editor'],
    image: luxeImages.story,
  },
  {
    date: 'Mar 05, 2022',
    name: 'Dmytro Kovalenko',
    role: 'Logistics Manager',
    specialty: 'Sustainable Supply',
    permissions: ['Inventory', 'Admin'],
    image: luxeImages.magenta,
  },
  {
    date: 'Jul 18, 2022',
    name: 'Svitlana Petrova',
    role: 'Floral Designer',
    specialty: 'Minimalist Ikebana',
    permissions: ['Standard Contributor'],
    image: luxeImages.ivory,
  },
  {
    date: 'Nov 30, 2023',
    name: 'Andrii Shevchenko',
    role: 'Tech Operations',
    specialty: 'E-commerce Flow',
    permissions: ['Super Admin'],
    image: luxeImages.dried,
  },
]

function Permission({ children }) {
  const dark = String(children).toLowerCase().includes('super')
  return (
    <span className={dark ? 'rounded-full bg-black px-3 py-1 text-[0.65rem] uppercase text-white' : 'rounded-full bg-neutral-200 px-3 py-1 text-[0.65rem] uppercase'}>
      {children}
    </span>
  )
}

export default function AdminStaff() {
  return (
    <AdminPage>
      <AdminTitle
        title="The Collective"
        action={
          <button className="inline-flex h-14 items-center gap-3 bg-black px-8 text-sm font-semibold uppercase text-white">
            <UserPlus className="h-5 w-5" aria-hidden="true" />
            Add New Staff
          </button>
        }
      >
        Managing the specialized team of botanical artists and operational experts. Curate permissions to maintain the high standard of Kyiv LuxeBouquets' editorial identity.
      </AdminTitle>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <AdminMetric label="Total Staff" value="24" />
        <AdminMetric label="Senior Florists" value="08" />
        <AdminMetric label="Admins" value="03" />
        <AdminMetric label="Pending Access" value="02" tone="danger" />
      </div>

      <section className="mt-12 border border-neutral-300">
        <div className="grid grid-cols-[0.55fr_1.1fr_0.95fr_1fr_1.15fr_0.8fr] bg-neutral-100 px-7 py-6 text-sm uppercase text-neutral-600">
          <span>Hire Date</span>
          <span>Staff Name</span>
          <span>Position</span>
          <span>Specialization</span>
          <span>Permissions</span>
          <span>Actions</span>
        </div>
        {members.map((member) => (
          <div
            key={member.name}
            className="grid grid-cols-[0.55fr_1.1fr_0.95fr_1fr_1.15fr_0.8fr] items-center border-t border-neutral-300 px-7 py-7"
          >
            <div>{member.date}</div>
            <div className="flex items-center gap-4">
              <img src={member.image} alt="" className="h-12 w-12 object-cover grayscale" />
              <strong>{member.name}</strong>
            </div>
            <div>{member.role}</div>
            <div>{member.specialty}</div>
            <div className="flex flex-wrap gap-2">
              {member.permissions.map((permission) => (
                <Permission key={permission}>{permission}</Permission>
              ))}
            </div>
            <div className="space-y-2 text-center text-sm uppercase">
              <button className="border-b border-black">Edit Permissions</button>
              <button className="block w-full border border-neutral-400 px-4 py-3">Manage Role</button>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-neutral-300 px-7 py-5 text-sm text-neutral-600">
          <span>Showing 1-4 of 24 members</span>
          <span className="uppercase">Previous&nbsp;&nbsp; 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; Next</span>
        </div>
      </section>

      <section className="mt-28 grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div className="relative aspect-square overflow-hidden bg-neutral-200">
          <img src={luxeImages.story} alt="" className="h-full w-full object-cover grayscale" />
          <h2 className="luxe-serif absolute bottom-10 left-10 max-w-xs text-4xl">Security & Artistic Integrity</h2>
        </div>
        <div className="border-l border-neutral-300 pl-10">
          <p className="luxe-label mb-8 text-neutral-500">Access Level Hierarchy</p>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold">Super Admin</h3>
              <p className="mt-2 text-neutral-700">Full system access, fiscal control, and user management capabilities. Reserved for owners and lead directors.</p>
            </div>
            <div>
              <h3 className="font-semibold">Lead Editor</h3>
              <p className="mt-2 text-neutral-700">Manage collections, product imagery, and descriptions. Can approve or reject storefront changes.</p>
            </div>
            <div>
              <h3 className="font-semibold">Inventory Admin</h3>
              <p className="mt-2 text-neutral-700">Real-time stock management and supplier relations. Access to floral availability forecasts.</p>
            </div>
          </div>
          <button className="mt-8 border-b border-black pb-1 text-sm font-semibold uppercase">View Full Permission Matrix -&gt;</button>
        </div>
      </section>
    </AdminPage>
  )
}
