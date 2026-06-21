'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, Phone, RefreshCw } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const statusColors: Record<string, string> = {
  PENDING: 'badge-warm',
  CONFIRMED: 'badge-accent',
  CANCELLED: 'badge bg-red-100 text-red-600',
  COMPLETED: 'badge-neutral',
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ALL')

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/appointments')
      if (res.ok) { const data = await res.json(); setAppointments(data.appointments ?? []) }
    } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  const filtered = filter === 'ALL' ? appointments : appointments.filter(a => a.status === filter)

  async function updateStatus(id: string, status: string) {
    await fetch('/api/admin/appointments', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg text-text-primary">Appointments</h1>
          <p className="text-text-secondary text-sm mt-1">{appointments.length} total bookings</p>
        </div>
        <button onClick={load} className="btn-secondary text-sm"><RefreshCw className="w-4 h-4" /> Refresh</button>
      </div>

      {/* Status filters */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {['ALL', 'PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${filter === s ? 'bg-primary text-white' : 'bg-surface border border-border text-text-secondary hover:border-primary/30'}`}>{s}</button>
        ))}
      </div>

      {loading ? (
        <div className="card p-10 text-center text-text-muted text-sm">Loading…</div>
      ) : filtered.length === 0 ? (
        <div className="card p-10 text-center">
          <Calendar className="w-10 h-10 mx-auto mb-3 text-text-muted opacity-30" />
          <p className="text-text-muted text-sm">No appointments {filter !== 'ALL' ? `with status ${filter}` : 'yet'}.</p>
          <p className="text-text-muted text-xs mt-1">Appointments booked through the site will appear here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((apt: any) => (
            <div key={apt.id} className="card p-5 hover:shadow-card transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-bold text-text-primary">{apt.name}</span>
                    <span className={`badge text-xs ${statusColors[apt.status] ?? 'badge-neutral'}`}>{apt.status}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                      <Clock className="w-3.5 h-3.5 text-text-muted" />
                      {apt.scheduledAt ? new Date(apt.scheduledAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : '—'}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                      <Phone className="w-3.5 h-3.5 text-text-muted" />
                      {apt.phone ?? apt.email}
                    </div>
                    {apt.service && (
                      <span className="badge-neutral text-xs">{apt.service}</span>
                    )}
                  </div>
                  {apt.notes && <p className="text-xs text-text-muted mt-2 bg-bg-alt rounded-lg px-3 py-2">{apt.notes}</p>}
                </div>
                <select
                  value={apt.status}
                  onChange={e => updateStatus(apt.id, e.target.value)}
                  className="text-xs border border-border rounded-lg px-2 py-1 bg-surface focus:outline-none focus:ring-1 focus:ring-primary flex-shrink-0"
                >
                  {['PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED'].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
