import { BarChart3, TrendingUp, Users, MessageSquare, ExternalLink } from 'lucide-react'
import { prisma } from '@/lib/prisma'

async function getAnalytics() {
  try {
    const [totalLeads, chatSessions, submissions, bySource, byIndustry, byService] = await Promise.all([
      prisma.lead.count(),
      prisma.chatSession.count(),
      prisma.contactSubmission.count(),
      prisma.lead.groupBy({ by: ['source'], _count: true }),
      prisma.lead.groupBy({ by: ['industry'], _count: true, where: { industry: { not: null } } }),
      prisma.lead.groupBy({ by: ['serviceInterest'], _count: true, where: { serviceInterest: { not: null } } }),
    ])
    return { totalLeads, chatSessions, submissions, bySource, byIndustry, byService }
  } catch {
    return { totalLeads: 0, chatSessions: 0, submissions: 0, bySource: [], byIndustry: [], byService: [] }
  }
}

export default async function AnalyticsPage() {
  const stats = await getAnalytics()
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  const cards = [
    { label: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'text-primary bg-primary/10' },
    { label: 'Chat Sessions', value: stats.chatSessions, icon: MessageSquare, color: 'text-sky-600 bg-sky-100' },
    { label: 'Form Submissions', value: stats.submissions, icon: TrendingUp, color: 'text-accent bg-accent/10' },
    { label: 'Conversion Est.', value: stats.totalLeads > 0 ? `${Math.round((stats.submissions / stats.totalLeads) * 100)}%` : '—', icon: BarChart3, color: 'text-warm bg-warm/10' },
  ]

  function BarList({ items, label }: { items: any[]; label: string }) {
    const max = Math.max(...items.map(i => i._count), 1)
    return (
      <div className="card p-5">
        <h3 className="font-bold text-text-primary text-sm mb-4">{label}</h3>
        {items.length === 0 ? (
          <p className="text-text-muted text-xs">No data yet.</p>
        ) : (
          <div className="space-y-3">
            {items.sort((a, b) => b._count - a._count).slice(0, 8).map((item: any, i) => {
              const key = Object.values(item).find(v => typeof v === 'string') as string
              const pct = (item._count / max) * 100
              return (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-text-secondary font-medium">{key ?? '—'}</span>
                    <span className="text-text-muted">{item._count}</span>
                  </div>
                  <div className="h-1.5 bg-bg-alt rounded-full overflow-hidden">
                    <div className="h-full bg-primary/60 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="heading-lg text-text-primary">Analytics</h1>
        <p className="text-text-secondary text-sm mt-1">Lead acquisition and engagement overview</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map(c => {
          const Icon = c.icon
          return (
            <div key={c.label} className="card p-5">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${c.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-2xl font-bold text-text-primary">{c.value}</div>
              <p className="text-xs text-text-muted mt-1">{c.label}</p>
            </div>
          )
        })}
      </div>

      {/* Bar charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <BarList items={stats.bySource as any} label="Leads by Source" />
        <BarList items={stats.byIndustry as any} label="Leads by Industry" />
        <BarList items={stats.byService as any} label="Leads by Service" />
      </div>

      {/* Google Analytics embed */}
      {gaId ? (
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-text-primary text-sm">Google Analytics</h3>
            <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-primary font-semibold hover:underline">
              Open GA4 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-text-muted text-sm">GA4 property <code className="bg-bg-alt px-1.5 py-0.5 rounded text-xs font-mono">{gaId}</code> is configured. Detailed traffic, session, and conversion data is available in the Google Analytics dashboard.</p>
        </div>
      ) : (
        <div className="card p-5 border-dashed border-2 border-border">
          <div className="flex items-center gap-3 text-text-muted">
            <BarChart3 className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">Google Analytics not configured</p>
              <p className="text-xs mt-0.5">Set <code className="bg-bg-alt px-1 rounded text-xs">NEXT_PUBLIC_GA_ID</code> in your environment to enable detailed traffic analytics.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
