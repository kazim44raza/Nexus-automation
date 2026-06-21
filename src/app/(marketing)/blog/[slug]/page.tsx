import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

interface Props { params: Promise<{ slug: string }> }

async function getPost(slug: string) {
  try {
    return await prisma.blogPost.findFirst({ where: { slug, published: true } })
  } catch {
    return null
  }
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

  // Increment views (fire and forget)
  prisma.blogPost.update({ where: { id: post.id }, data: { views: { increment: 1 } } }).catch(() => {})

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
      <section className="section-py bg-bg-base border-b border-border">
        <div className="page-container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-primary text-sm font-medium transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="mb-4 flex gap-2 flex-wrap">
            {(post.tags as string[])?.map(tag => (
              <span key={tag} className="badge-neutral text-xs">{tag}</span>
            ))}
          </div>

          <h1 className="heading-xl text-text-primary mb-4">{post.title}</h1>

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
          <img src={post.coverImage} alt={post.title} className="w-full rounded-2xl object-cover max-h-80" />
        </div>
      )}

      {/* Content */}
      <article className="page-container max-w-3xl py-8 pb-20">
        <div className="prose prose-gray max-w-none prose-headings:font-display prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-primary prose-strong:text-text-primary">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return <h2 key={i} className="heading-md text-text-primary mt-10 mb-4">{line.slice(3)}</h2>
            if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-text-primary mt-8 mb-3">{line.slice(4)}</h3>
            if (line.startsWith('- ')) return <li key={i} className="text-text-secondary ml-4 mb-1">{line.slice(2)}</li>
            if (line.trim() === '') return <br key={i} />
            return <p key={i} className="text-text-secondary leading-relaxed mb-4">{line}</p>
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center">
          <h3 className="heading-sm text-text-primary mb-2">Ready to automate your business?</h3>
          <p className="text-text-secondary text-sm mb-5">Book a free 30-minute strategy call with our automation experts.</p>
          <Link href="/contact" className="btn-primary">Book a Free Demo</Link>
        </div>
      </article>
    </>
  )
}
