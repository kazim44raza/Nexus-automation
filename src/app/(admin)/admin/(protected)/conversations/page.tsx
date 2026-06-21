'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, ChevronRight, X } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function ConversationsPage() {
  const [sessions, setSessions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<any | null>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [loadingMessages, setLoadingMessages] = useState(false)

  async function loadSessions() {
    try {
      const res = await fetch('/api/admin/conversations')
      if (res.ok) { const data = await res.json(); setSessions(data.sessions ?? []) }
    } finally { setLoading(false) }
  }

  async function loadMessages(sessionId: string) {
    setLoadingMessages(true)
    try {
      const res = await fetch(`/api/admin/conversations?sessionId=${sessionId}`)
      if (res.ok) { const data = await res.json(); setMessages(data.messages ?? []) }
    } finally { setLoadingMessages(false) }
  }

  useEffect(() => { loadSessions() }, [])

  function openSession(session: any) {
    setSelected(session)
    setMessages([])
    loadMessages(session.id)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="heading-lg text-text-primary">Conversations</h1>
        <p className="text-text-secondary text-sm mt-1">All chatbot sessions with visitors</p>
      </div>

      <div className="flex gap-5 h-[calc(100vh-200px)]">
        {/* Session list */}
        <div className="w-72 flex-shrink-0 card overflow-y-auto">
          {loading ? (
            <div className="p-8 text-center text-text-muted text-sm">Loading…</div>
          ) : sessions.length === 0 ? (
            <div className="p-8 text-center text-text-muted text-sm">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-30" />
              No conversations yet.
            </div>
          ) : (
            <div className="divide-y divide-border">
              {sessions.map((s: any) => (
                <button
                  key={s.id}
                  onClick={() => openSession(s)}
                  className={`w-full text-left px-4 py-4 hover:bg-bg-alt transition-colors flex items-start gap-3 ${selected?.id === s.id ? 'bg-primary/5 border-l-2 border-primary' : ''}`}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-text-primary truncate">{s.visitorId?.slice(0, 12) ?? 'Visitor'}…</p>
                    <p className="text-xs text-text-muted mt-0.5">{s._count?.messages ?? 0} messages</p>
                    <p className="text-xs text-text-muted">{formatDate(s.startedAt)}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-text-muted flex-shrink-0 mt-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Message thread */}
        <div className="flex-1 card overflow-y-auto flex flex-col">
          {!selected ? (
            <div className="flex-1 flex items-center justify-center text-center">
              <div>
                <MessageSquare className="w-12 h-12 mx-auto mb-3 text-text-muted opacity-30" />
                <p className="text-text-muted text-sm">Select a conversation to view messages</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between p-5 border-b border-border flex-shrink-0">
                <div>
                  <p className="font-semibold text-text-primary text-sm">Session {selected.id.slice(0, 8)}…</p>
                  <p className="text-xs text-text-muted">{formatDate(selected.startedAt)}</p>
                </div>
                <button onClick={() => setSelected(null)} className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-alt transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {loadingMessages ? (
                  <div className="text-center text-text-muted text-sm">Loading messages…</div>
                ) : messages.length === 0 ? (
                  <div className="text-center text-text-muted text-sm">No messages in this session.</div>
                ) : (
                  messages.map((m: any) => (
                    <div key={m.id} className={`flex ${m.role === 'USER' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${m.role === 'USER' ? 'bg-primary text-white' : 'bg-bg-alt text-text-primary border border-border'}`}>
                        <p className="leading-relaxed">{m.content}</p>
                        <p className={`text-xs mt-1 ${m.role === 'USER' ? 'text-primary-light/70' : 'text-text-muted'}`}>
                          {new Date(m.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
