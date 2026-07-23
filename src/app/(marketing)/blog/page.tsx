import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { formatDateShort } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog — AI Automation Insights',
  description: 'Expert articles on AI chatbots, voice agents, business automation, and lead generation for SMB owners.',
}

const posts = [
  { slug: 'how-we-build-reliable-voice-agents', title: 'How We Build Voice Agents That Don\'t Hallucinate', excerpt: 'The problem with most AI voice agents is they are given too much freedom. Here is our exact framework for scoping voice workflows to prevent errors.', date: '2025-06-01', readingTime: 6, tags: ['Engineering', 'Voice AI'] },
  { slug: 'why-we-prefer-n8n', title: 'Why We Prefer n8n over Zapier for Core Business Workflows', excerpt: 'Zapier is great for simple triggers, but when you are managing multi-step AI logic and complex data routing, n8n offers the control engineers need.', date: '2025-05-22', readingTime: 8, tags: ['Technical', 'Plumbing'] },
  { slug: 'automation-is-data-not-chat', title: 'Automation is About Moving Data, Not Just Chatting', excerpt: 'A chatbot that can talk is a toy. A chatbot that can query your database, update a CRM record, and trigger a calendar invite is a business system.', date: '2025-05-15', readingTime: 5, tags: ['Systems', 'Strategy'] },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-bg-base pt-32 pb-20 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="relative page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-text-primary mb-4">AI Automation Insights</h1>
            <p className="text-lg text-text-secondary">Practical guides and case studies for business owners who want to grow without hiring more people.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="card card-hover p-0 overflow-hidden h-full flex flex-col group block bg-white">
                  <div className="h-40 bg-bg-alt flex items-center justify-center border-b border-border">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      <span className="text-2xl">📝</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map(t => <span key={t} className="badge-accent text-xs">{t}</span>)}
                    </div>
                    <h2 className="heading-md text-text-primary leading-tight mb-3 group-hover:text-accent transition-colors">{post.title}</h2>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDateShort(post.date)}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime} min read
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
