'use client'

import { useState, useEffect } from 'react'
import { Plus, Trash2, Edit2, Save, X, BookOpen } from 'lucide-react'

interface Entry { id: string; title: string; content: string; category: string; active: boolean }
interface FAQ { id: string; question: string; answer: string; category: string; published: boolean }

export default function KnowledgeBasePage() {
  const [tab, setTab] = useState<'entries' | 'faqs'>('entries')
  const [entries, setEntries] = useState<Entry[]>([])
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<string | null>(null)
  const [form, setForm] = useState<any>({})
  const [showNew, setShowNew] = useState(false)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/knowledge')
      if (res.ok) { const data = await res.json(); setEntries(data.entries); setFaqs(data.faqs) }
    } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  async function save(type: string) {
    if (editing) {
      await fetch('/api/knowledge', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: editing, type, ...form }) })
    } else {
      await fetch('/api/knowledge', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, ...form }) })
    }
    setEditing(null); setForm({}); setShowNew(false); load()
  }

  async function remove(id: string, type: string) {
    if (!confirm('Delete this item?')) return
    await fetch('/api/knowledge', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, type }) })
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg text-text-primary">Knowledge Base</h1>
          <p className="text-text-secondary text-sm mt-1">These entries are fed directly to the AI chatbot</p>
        </div>
        <button onClick={() => { setShowNew(true); setEditing(null); setForm({}) }} className="btn-primary text-sm">
          <Plus className="w-4 h-4" /> Add {tab === 'entries' ? 'Entry' : 'FAQ'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        {(['entries', 'faqs'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors capitalize ${tab === t ? 'bg-primary text-white' : 'bg-surface border border-border text-text-secondary'}`}>{t}</button>
        ))}
      </div>

      {/* New/Edit Form */}
      {(showNew || editing) && (
        <div className="card p-6 mb-5 border-primary/30 border">
          <h3 className="font-bold text-text-primary mb-4">{editing ? 'Edit' : 'New'} {tab === 'entries' ? 'Knowledge Entry' : 'FAQ'}</h3>
          <div className="space-y-3">
            {tab === 'entries' ? (
              <>
                <input placeholder="Title" value={form.title ?? ''} onChange={e => setForm((f: any) => ({ ...f, title: e.target.value }))} className="input" />
                <input placeholder="Category (e.g. Services, Pricing)" value={form.category ?? ''} onChange={e => setForm((f: any) => ({ ...f, category: e.target.value }))} className="input" />
                <textarea rows={5} placeholder="Content — this is what the AI will know and use" value={form.content ?? ''} onChange={e => setForm((f: any) => ({ ...f, content: e.target.value }))} className="input resize-none" />
              </>
            ) : (
              <>
                <input placeholder="Question" value={form.question ?? ''} onChange={e => setForm((f: any) => ({ ...f, question: e.target.value }))} className="input" />
                <input placeholder="Category (e.g. general, pricing)" value={form.category ?? ''} onChange={e => setForm((f: any) => ({ ...f, category: e.target.value }))} className="input" />
                <textarea rows={4} placeholder="Answer" value={form.answer ?? ''} onChange={e => setForm((f: any) => ({ ...f, answer: e.target.value }))} className="input resize-none" />
              </>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={() => save(tab === 'entries' ? 'entry' : 'faq')} className="btn-primary text-sm"><Save className="w-4 h-4" /> Save</button>
            <button onClick={() => { setShowNew(false); setEditing(null); setForm({}) }} className="btn-secondary text-sm"><X className="w-4 h-4" /> Cancel</button>
          </div>
        </div>
      )}

      {/* List */}
      <div className="card overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-text-muted text-sm">Loading…</div>
        ) : tab === 'entries' ? (
          entries.length === 0 ? <div className="p-10 text-center text-text-muted text-sm">No entries yet. Add knowledge to make your AI chatbot smarter.</div> : (
            <div className="divide-y divide-border">
              {entries.map(entry => (
                <div key={entry.id} className="p-5 hover:bg-bg-alt transition-colors">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-text-primary text-sm">{entry.title}</span>
                        <span className="badge-neutral text-xs">{entry.category}</span>
                        {!entry.active && <span className="badge bg-red-100 text-red-600 text-xs">Inactive</span>}
                      </div>
                      <p className="text-xs text-text-secondary line-clamp-2">{entry.content}</p>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <button onClick={() => { setEditing(entry.id); setForm(entry); setShowNew(false) }} className="p-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => remove(entry.id, 'entry')} className="p-1.5 rounded-lg text-text-muted hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          faqs.length === 0 ? <div className="p-10 text-center text-text-muted text-sm">No FAQs yet.</div> : (
            <div className="divide-y divide-border">
              {faqs.map(faq => (
                <div key={faq.id} className="p-5 hover:bg-bg-alt transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-text-primary text-sm mb-1">{faq.question}</p>
                      <p className="text-xs text-text-secondary line-clamp-2">{faq.answer}</p>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <button onClick={() => { setEditing(faq.id); setForm(faq); setShowNew(false) }} className="p-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"><Edit2 className="w-3.5 h-3.5" /></button>
                      <button onClick={() => remove(faq.id, 'faq')} className="p-1.5 rounded-lg text-text-muted hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  )
}
