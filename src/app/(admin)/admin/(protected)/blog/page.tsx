'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, Edit2, Trash2, Eye, EyeOff } from 'lucide-react'
import { formatDateShort } from '@/lib/utils'

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/blog')
      if (res.ok) { const data = await res.json(); setPosts(data.posts ?? data) }
    } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  async function togglePublish(post: any) {
    await fetch('/api/blog', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: post.id, published: !post.published }),
    })
    load()
  }

  async function remove(id: string) {
    if (!confirm('Delete this post permanently?')) return
    await fetch('/api/blog', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="heading-lg text-text-primary">Blog</h1>
          <p className="text-text-secondary text-sm mt-1">{posts.length} posts</p>
        </div>
        <Link href="/admin/blog/new" className="btn-primary text-sm">
          <Plus className="w-4 h-4" /> New Post
        </Link>
      </div>

      <div className="card overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-text-muted text-sm">Loading…</div>
        ) : posts.length === 0 ? (
          <div className="p-10 text-center text-text-muted text-sm">No blog posts yet. Create your first post.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-bg-alt">
                  {['Title', 'Status', 'Views', 'Date', 'Actions'].map(h => (
                    <th key={h} className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {posts.map((post: any) => (
                  <tr key={post.id} className="hover:bg-bg-alt transition-colors">
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-semibold text-text-primary text-sm">{post.title}</p>
                        <p className="text-xs text-text-muted mt-0.5">/{post.slug}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`badge text-xs ${post.published ? 'badge-accent' : 'badge-neutral'}`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-text-secondary">{post.views ?? 0}</td>
                    <td className="px-5 py-4 text-xs text-text-muted">{formatDateShort(post.createdAt)}</td>
                    <td className="px-5 py-4">
                      <div className="flex gap-1">
                        <Link href={`/admin/blog/${post.id}`} className="p-1.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-colors">
                          <Edit2 className="w-3.5 h-3.5" />
                        </Link>
                        <button onClick={() => togglePublish(post)} className="p-1.5 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-colors">
                          {post.published ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                        <button onClick={() => remove(post.id)} className="p-1.5 rounded-lg text-text-muted hover:text-red-500 hover:bg-red-50 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
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
