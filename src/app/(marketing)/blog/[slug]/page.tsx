import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

interface Props { params: Promise<{ slug: string }> }

type BlogFallbackPost = {
  slug: string
  title: string
  excerpt: string
  content: string
  tags: string[]
  readingTime: number
  publishedAt: Date
  updatedAt: Date
  seoTitle?: string | null
  seoDescription?: string | null
  coverImage?: string | null
}

const fallbackPosts: Record<string, BlogFallbackPost> = {
  'how-we-build-reliable-voice-agents': {
    slug: 'how-we-build-reliable-voice-agents',
    title: 'How We Build Voice Agents That Don\'t Hallucinate',
    excerpt: 'The problem with most AI voice agents is they are given too much freedom. Here is our exact framework for scoping voice workflows to prevent errors.',
    content:
      '## The Hallucination Problem\n\nMost voice agents are built by connecting a language model to a telephony provider and saying "you are a helpful assistant." This is dangerous. Without boundaries, the AI will confidently provide wrong answers or invent policies.\n\n## Constraining the Model\n\nWe build voice agents using strict routing architectures. The LLM is constrained to a specific knowledge base (RAG) and is given exact scripts for certain workflows.\n\n## Clear Escalation Paths\n\nWhen a voice agent does not know the answer with 95% confidence, it does not guess. It says, "Let me get someone from our team to help with that specific question," and routes the call to a human.\n\n## The Result\n\nYou get an agent that sounds natural but operates within the strict boundaries of a traditional IVR system.',
    tags: ['Engineering', 'Voice AI'],
    readingTime: 6,
    publishedAt: new Date('2025-06-01'),
    updatedAt: new Date('2025-06-01'),
  },
  'why-we-prefer-n8n': {
    slug: 'why-we-prefer-n8n',
    title: 'Why We Prefer n8n over Zapier for Core Business Workflows',
    excerpt: 'Zapier is great for simple triggers, but when you are managing multi-step AI logic and complex data routing, n8n offers the control engineers need.',
    content:
      '## The Limits of Linear Automation\n\nZapier is fantastic for "If A happens, do B." But modern AI automation often looks like "If A happens, check B, then prompt C, and depending on the result, do D or E."\n\n## Enter n8n\n\nWe build heavily on n8n (and Make) because they allow for complex, code-level control of workflows. We can write custom JavaScript inside nodes to handle data transformations that would require 15 steps in Zapier.\n\n## Webhooks and APIs\n\nn8n gives us bare-metal access to APIs. If an integration doesn\'t exist, we just build an HTTP node and handle the authentication ourselves.\n\n## Scalability\n\nBecause n8n allows for branching logic and robust error handling, the systems we build don\'t break when an edge case occurs. They gracefully fail and notify your team.',
    tags: ['Technical', 'Plumbing'],
    readingTime: 8,
    publishedAt: new Date('2025-05-22'),
    updatedAt: new Date('2025-05-22'),
  },
  'automation-is-data-not-chat': {
    slug: 'automation-is-data-not-chat',
    title: 'Automation is About Moving Data, Not Just Chatting',
    excerpt: 'A chatbot that can talk is a toy. A chatbot that can query your database, update a CRM record, and trigger a calendar invite is a business system.',
    content:
      '## Beyond the Chat Window\n\nHaving an LLM answer FAQs on your website is easy. But that doesn\'t actually save your team much time. True automation happens when the AI is connected to your core business systems.\n\n## Building the Plumbing\n\nWe spend 20% of our time designing the conversational experience, and 80% of our time building the API connections that let the AI take action. \n\n## A Real Example\n\nWhen a prospect says they want to book a showing, our system doesn\'t just say "Great, I can help." It makes an API call to the agent\'s calendar, finds the next 3 available slots, presents them, and when the user picks one, it creates the calendar event and updates the CRM record.\n\n## Conclusion\n\nDon\'t invest in AI that can only talk. Invest in AI that can do.',
    tags: ['Systems', 'Strategy'],
    readingTime: 5,
    publishedAt: new Date('2025-05-15'),
    updatedAt: new Date('2025-05-15'),
  },
}

async function getPost(slug: string) {
  try {
    const post = await prisma.blogPost.findFirst({ where: { slug, published: true } })
    if (post) return post
  } catch {
    // Fall back to the static post copy below when the database is unavailable.
  }

  return fallbackPosts[slug] ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  // Increment views (fire and forget) only for persisted posts.
  if ('id' in post) {
    prisma.blogPost.update({ where: { id: post.id }, data: { views: { increment: 1 } } }).catch(() => {})
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: { '@type': 'Organization', name: 'Nexus Automation' },
    publisher: { '@type': 'Organization', name: 'Nexus Automation' },
    image: post.coverImage,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-bg-base pt-32 pb-12 border-b border-border">
        <div className="page-container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-accent text-sm font-medium transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="mb-4 flex gap-2 flex-wrap">
            {(post.tags as string[])?.map(tag => (
              <span key={tag} className="badge-accent text-xs">{tag}</span>
            ))}
          </div>

          <h1 className="heading-display text-text-primary mb-4 leading-tight">{post.title}</h1>

          {post.excerpt && <p className="text-lg text-text-secondary mb-6 leading-relaxed">{post.excerpt}</p>}

          <div className="flex items-center gap-4 text-sm text-text-muted">
            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </div>
            )}
            {post.readingTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </div>
            )}
          </div>
        </div>
      </section>

      {post.coverImage && (
        <div className="page-container max-w-3xl py-8">
          <Image src={post.coverImage} alt={post.title} width={1200} height={630} className="w-full rounded-2xl object-cover max-h-80 shadow-sm" />
        </div>
      )}

      {/* Content */}
      <article className="page-container max-w-3xl py-8 pb-20">
        <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-text-primary">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i} className="heading-lg text-text-primary mt-10 mb-4">{line.slice(3)}</h2>
            if (line.startsWith('### ')) return <h3 key={i} className="heading-md text-text-primary mt-8 mb-3">{line.slice(4)}</h3>
            if (line.startsWith('- ')) return <li key={i} className="text-text-secondary ml-4 mb-1">{line.slice(2)}</li>
            if (line.trim() === '') return <br key={i} />
            return <p key={i} className="text-text-secondary leading-relaxed mb-4">{line}</p>
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-bg-alt border border-border rounded-2xl text-center shadow-sm">
          <h3 className="heading-md text-text-primary mb-2">Ready to automate your business?</h3>
          <p className="text-text-secondary mb-6">Book a free 30-minute strategy call with our automation experts.</p>
          <Link href="/contact" className="btn-primary">Book a Free Demo</Link>
        </div>
      </article>
    </>
  )
}
