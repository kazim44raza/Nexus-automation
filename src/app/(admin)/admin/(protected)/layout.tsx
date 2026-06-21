import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { AdminSidebar } from '@/components/admin/AdminSidebar'

const STAFF_ROLES = ['ADMIN', 'AGENT']

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  // Require a session AND a staff role — a logged-in non-staff user (e.g. a
  // future OAuth signup) must never reach the admin panel.
  if (!session || !STAFF_ROLES.includes(session.user.role)) redirect('/admin/login')

  return (
    <div className="flex h-screen bg-bg-base overflow-hidden">
      <AdminSidebar user={session.user} />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
