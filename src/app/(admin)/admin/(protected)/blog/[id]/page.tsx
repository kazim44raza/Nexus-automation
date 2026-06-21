'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Save, Eye } from 'lucide-react'
import Link from 'next/link'

export default function BlogEditorPage() {
  const router = useRouter()
  const params = useParams()
  const isNew = params.id === 'new'

  const [form, setForm] = useState({
    title: '', slug: '', excerpt: '', content: '',
    coverImage: '', tags: '', seoTitle: '', seoDescription: '', published: false,
  })
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(!isNew)

  useEffect(() => {
    if (isNew) return
    async function load() {
      const res = await fetch(`/api/blog?slug=${params.id}`)
      if (res.ok) {
        const data = await res.json()
        if (data.post) {
          setForm({ ...data.post, tags: (data.post.tags ?? []).join(', ') })
        }
      }
      setLoading(false)
    }
    load()
  }, [params.id, isNew])

  function autoSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }

  function field(key: string, value: any) {
    setForm(f => ({ ...f, [key]: value }))
    if (key === 'title' && isNew) setForm(f => ({ ...f, title: value, slug: autoSlug(value) }))
  }

  async function save(publish?: boolean) {
    setSaving(true)
    try {
      const payload = {
        ...form,
        tags: form.tags.split(',').map((t: string) => t.trim()).filter(Boolean),
        published: publish !== undefined ? publish : form.published,
      }
      const method = isNew ? 'POST' : 'PATCH'
      const body = isNew ? payload : { id: params.id, ...payload }
      const res = await fetch('/api/blog', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.ok) router.push('/admin/blog')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-10 text-center text-text-muted text-sm">Loading…</div>

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/blog" className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-alt transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <h1 className="heading-lg text-text-primary flex-1">{isNew ? 'New Post' : 'Edit Post'}</h1>
        <div className="flex gap-2">
          <button onClick={() => save(false)} disabled={saving} className="btn-secondary text-sm">
            Save Draft
          </button>
          <button onClick={() => save(true)} disabled={saving} className="btn-primary text-sm">
            <Save className="w-4 h-4" /> {saving ? 'Saving…' : 'Publish'}
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {/* Core fields */}
        <div className="card p-6 space-y-4">
          <h3 className="font-bold text-text-primary text-sm">Content</h3>
          <div>
            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Title</label>
            <input value={form.title} onChange={e => field('title', e.target.value)} placeholder="Post title…" className="input text-lg font-semibold" />
          </div>
          <div>
            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Slug (URL)</label>
            <input value={form.slug} onChange={e => field('slug', e.target.value)} placeholder="url-slug" className="input font-mono text-sm" />
          </div>
          <div>
            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Excerpt</label>
            <textarea rows={2} value={form.excerpt} onChange={e => field('excerpt', e.target.value)} placeholder="Short summary shown in cards…" className="input resize-none" />
          </div>
          <div>
            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Content (Markdown)</label>
            <textarea rows={20} value={form.content} onChange={e => field('content', e.target.value)} placeholder="Write your post in Markdown…" className="input resize-none font-mono text-sm leading-relaxed" />
          </div>
        </div>

        {/* Meta */}
        <div className="card p-6 space-y-4">
          <h3 className="font-bold text-text-primary text-sm">Metadata</h3>
          <div>
            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Cover Image URL</label>
            <input value={form.coverImage} onChange={e => field('coverImage', e.target.value)} placeholder="https://…" className="input" />
          </div>
          <div>
            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">Tags (comma-separated)</label>
            <input value={form.tags} onChange={e => field('tags', e.target.value)} placeholder="automation, AI, CRM" className="input" />
          </div>
          <div>
            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">SEO Title</label>
            <input value={form.seoTitle} onChange={e => field('seoTitle', e.target.value)} placeholder="Override title for search engines…" className="input" />
          </div>
          <div>
            <label className="text-xs font-semibold text-text-secondary mb-1.5 block">SEO Description</label>
            <textarea rows={2} value={form.seoDescription} onChange={e => field('seoDescription', e.target.value)} placeholder="Meta description for search engines…" className="input resize-none" />
          </div>
        </div>
      </div>
    </div>
  )
}
