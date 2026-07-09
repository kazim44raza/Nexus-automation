'use client'

import { useState, useEffect, useCallback } from 'react'
import { formatDateShort } from '@/lib/utils'
import { Search, Filter, RefreshCw } from 'lucide-react'

const statusColors: Record<string, string> = {
  NEW: 'badge-primary',
  CONTACTED: 'badge-warm',
  QUALIFIED: 'badge-accent',
  CONVERTED: 'badge bg-accent-dark/10 text-accent-dark',
  LOST: 'badge bg-red-100 text-red-600',
}

const statuses = ['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'LOST']

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [search, setSearch] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/leads?${statusFilter !== 'ALL' ? `status=${statusFilter}` : ''}`)
      if (res.ok) {
        const data = await res.json()
        setLeads(data.leads)
      }
    } finally {
      setLoading(false)
    }
  }, [statusFilter])

  useEffect(() => { load() }, [load])

  const filtered = leads.filter(l =>
    search ? [l.name, l.email, l.businessName].some(v => v?.toLowerCase().includes(search.toLowerCase())) : true
  )

  async function updateStatus(id: string, status: string) {
    await fetch('/api/leads', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg text-text-primary">Leads</h1>
          <p className="text-text-secondary text-sm mt-1">{leads.length} total leads</p>
        </div>
        <button onClick={load} className="btn-secondary text-sm">
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search leads…"
            className="input pl-10 py-2.5"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {statuses.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${statusFilter === s ? 'bg-primary text-white' : 'bg-surface border border-border text-text-secondary hover:border-primary/30'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-text-muted text-sm">Loading leads…</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-text-muted text-sm">No leads found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-bg-alt">
                  {['Name', 'Email', 'Business', 'Industry', 'Status', 'Date', 'Actions'].map(h => (
                    <th key={h} className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((lead: any) => (
                  <tr key={lead.id} className="hover:bg-bg-alt transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-xs">{lead.name.charAt(0)}</div>
                        <span className="font-semibold text-text-primary text-sm">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{lead.email}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{lead.businessName ?? '—'}</td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{lead.industry ?? '—'}</td>
                    <td className="px-5 py-4">
                      <span className={`badge text-xs ${statusColors[lead.status] ?? 'badge-neutral'}`}>{lead.status}</span>
                    </td>
                    <td className="px-5 py-4 text-xs text-text-muted">{formatDateShort(lead.createdAt)}</td>
                    <td className="px-5 py-4">
                      <select
                        value={lead.status}
                        onChange={e => updateStatus(lead.id, e.target.value)}
                        className="text-xs border border-border rounded-lg px-2 py-1 bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        {statuses.filter(s => s !== 'ALL').map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
