import { prisma } from '@/lib/prisma'
import { Users, MessageSquare, FileText, Calendar, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { formatDateShort } from '@/lib/utils'

async function getStats() {
  try {
    const [totalLeads, newLeads, sessions, submissions, posts] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { status: 'NEW' } }),
      prisma.chatSession.count(),
      prisma.contactSubmission.count({ where: { status: 'NEW' } }),
      prisma.blogPost.count({ where: { published: true } }),
    ])
    const recentLeads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    })
    return { totalLeads, newLeads, sessions, submissions, posts, recentLeads }
  } catch {
    return { totalLeads: 0, newLeads: 0, sessions: 0, submissions: 0, posts: 0, recentLeads: [] }
  }
}

const statusColors: Record<string, string> = {
  NEW: 'bg-primary/10 text-primary',
  CONTACTED: 'bg-warm/10 text-warm',
  QUALIFIED: 'bg-accent/10 text-accent',
  CONVERTED: 'bg-accent-dark/10 text-accent-dark',
  LOST: 'bg-red-100 text-red-600',
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const cards = [
    { label: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'text-primary bg-primary/10', href: '/admin/leads' },
    { label: 'New (Uncontacted)', value: stats.newLeads, icon: TrendingUp, color: 'text-accent bg-accent/10', href: '/admin/leads?status=NEW' },
    { label: 'Chat Sessions', value: stats.sessions, icon: MessageSquare, color: 'text-sky-600 bg-sky-100', href: '/admin/conversations' },
    { label: 'Pending Submissions', value: stats.submissions, icon: FileText, color: 'text-warm bg-warm/10', href: '/admin/leads' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="heading-lg text-text-primary">Dashboard</h1>
        <p className="text-text-secondary text-sm mt-1">Overview of your Nexus Automation platform</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map(card => {
          const Icon = card.icon
          return (
            <Link key={card.href} href={card.href} className="card-hover p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="stat-value text-2xl text-text-primary">{card.value}</div>
              <p className="text-xs text-text-muted mt-1">{card.label}</p>
            </Link>
          )
        })}
      </div>

      {/* Recent Leads */}
      <div className="card">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-bold text-text-primary">Recent Leads</h2>
          <Link href="/admin/leads" className="text-xs text-primary font-semibold flex items-center gap-1 hover:gap-1.5 transition-all">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        {stats.recentLeads.length === 0 ? (
          <div className="p-8 text-center text-text-muted text-sm">No leads yet. Connect your database to see data here.</div>
        ) : (
          <div className="divide-y divide-border">
            {stats.recentLeads.map((lead: any) => (
              <div key={lead.id} className="flex items-center gap-4 px-6 py-4 hover:bg-bg-alt transition-colors">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">
                  {lead.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text-primary text-sm truncate">{lead.name}</p>
                  <p className="text-text-muted text-xs truncate">{lead.email} · {lead.businessName ?? '—'}</p>
                </div>
                <span className={`badge text-xs ${statusColors[lead.status] ?? 'bg-bg-alt text-text-muted'}`}>{lead.status}</span>
                <span className="text-xs text-text-muted hidden sm:block">{formatDateShort(lead.createdAt)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
