'use client'

import Link from 'next/link'
import { BookOpen } from 'lucide-react'

export default function FAQsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="heading-lg text-text-primary">FAQs</h1>
        <p className="text-text-secondary text-sm mt-1">Manage frequently asked questions</p>
      </div>
      <div className="card p-8 text-center">
        <BookOpen className="w-10 h-10 mx-auto mb-3 text-text-muted opacity-30" />
        <p className="text-text-primary font-semibold mb-1">FAQs are managed in the Knowledge Base</p>
        <p className="text-text-muted text-sm mb-4">Use the Knowledge Base page to add, edit, and delete FAQs. They share the same management interface.</p>
        <Link href="/admin/knowledge-base" className="btn-primary text-sm inline-flex">Go to Knowledge Base</Link>
      </div>
    </div>
  )
}
