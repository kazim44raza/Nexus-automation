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
  'how-ai-chatbots-recover-lost-leads': {
    slug: 'how-ai-chatbots-recover-lost-leads',
    title: "How AI Chatbots Recover the Leads You're Losing After Hours",
    excerpt: 'Most businesses lose 35-40% of their potential leads simply because no one answered the phone or chat after 5PM. Here is how AI fixes that.',
    content:
      '## The real cost of missed responses\n\nEvery unanswered call, chat, or form submission is a lead that may never come back.\n\n## What the chatbot does\n\nAn AI chatbot responds instantly, answers common questions, qualifies the visitor, and moves them toward booking or a sales handoff.\n\n## Why it works\n\nSpeed matters. When your prospect gets a useful answer immediately, you keep the conversation alive and reduce drop-off.\n\n- Instant response\n- Lead qualification\n- Appointment booking\n- 24/7 coverage\n\n## Bottom line\n\nA well-built chatbot turns after-hours traffic into a measurable revenue stream instead of a missed opportunity.',
    tags: ['AI Chatbots', 'Lead Generation'],
    readingTime: 5,
    publishedAt: new Date('2025-06-01'),
    updatedAt: new Date('2025-06-01'),
  },
  'ai-voice-agents-vs-traditional-receptionist': {
    slug: 'ai-voice-agents-vs-traditional-receptionist',
    title: 'AI Voice Agents vs. Traditional Receptionists: What the Numbers Say',
    excerpt: 'A detailed cost comparison between hiring a receptionist and deploying an AI voice agent, including hidden costs most businesses miss.',
    content:
      '## The staffing math\n\nA receptionist is valuable, but the real cost is more than salary. You are also paying for benefits, time off, training, turnover, and coverage gaps.\n\n## What AI voice agents change\n\nAI voice agents answer every call, qualify the caller, route the conversation, and schedule the next step without downtime.\n\n## Where the savings come from\n\nThe biggest savings are not just in payroll. They come from missed calls recovered, faster response time, and consistent coverage outside business hours.\n\n- Lower operating cost\n- 24/7 availability\n- No missed lunch breaks or sick days\n- Consistent intake every time\n\n## Best use case\n\nThe strongest setup is often a hybrid one: AI handles first response and qualification, then routes high-value calls to a human team member.',
    tags: ['Voice Agents', 'ROI'],
    readingTime: 7,
    publishedAt: new Date('2025-05-22'),
    updatedAt: new Date('2025-05-22'),
  },
  'appointment-booking-automation-healthcare': {
    slug: 'appointment-booking-automation-healthcare',
    title: 'How Healthcare Practices Are Cutting No-Shows by 60% With AI',
    excerpt: 'Patient no-shows cost the average medical practice $150,000 per year. Here is the exact automation system that changes that.',
    content:
      '## Why no-shows happen\n\nPatients forget, get busy, or never complete the booking flow. Automation closes those gaps before they turn into lost revenue.\n\n## The system\n\nThe booking flow confirms appointments, sends reminders, and fills cancellations from a waitlist.\n\n## What changes operationally\n\nYour front desk spends less time chasing confirmations and more time supporting patients who actually need help.\n\n- Appointment reminders\n- Waitlist auto-fill\n- Intake collection\n- Reschedule handling\n\n## Result\n\nPractices get a fuller calendar, fewer gaps, and a much smoother patient experience.',
    tags: ['Healthcare', 'Appointments'],
    readingTime: 6,
    publishedAt: new Date('2025-05-15'),
    updatedAt: new Date('2025-05-15'),
  },
  'lead-qualification-small-business': {
    slug: 'lead-qualification-small-business',
    title: '5 Lead Qualification Mistakes That Cost Small Businesses Fortune',
    excerpt: 'Most small businesses burn sales time on leads that were never going to close. These five automation fixes change everything.',
    content:
      '## Mistake 1: responding too slowly\n\nIf you wait hours to reply, the prospect is already talking to someone else.\n\n## Mistake 2: asking too little\n\nQualification should filter fit, budget, urgency, and service need.\n\n## Mistake 3: no routing rules\n\nHot leads should reach the right person immediately.\n\n## Mistake 4: manual follow-up\n\nAutomated sequences keep leads warm without depending on memory.\n\n## Mistake 5: no visibility\n\nIf you cannot measure conversion by source, you cannot improve the system.\n\n## The fix\n\nA simple AI qualification flow can remove waste and focus your team on better opportunities.',
    tags: ['Lead Qualification', 'Sales'],
    readingTime: 5,
    publishedAt: new Date('2025-05-08'),
    updatedAt: new Date('2025-05-08'),
  },
  'workflow-automation-real-estate': {
    slug: 'workflow-automation-real-estate',
    title: 'The Complete Real Estate Automation Playbook for 2025',
    excerpt: 'How top-performing real estate teams are using AI to qualify every lead, schedule every showing, and follow up automatically.',
    content:
      '## The modern real estate workflow\n\nWinning teams respond fast, route inquiries properly, and keep follow-up consistent across every listing.\n\n## Where automation helps\n\nAutomation can qualify leads, book showings, send property details, and keep the CRM updated without manual effort.\n\n## Why it matters\n\nReal estate is competitive. The team that replies first and follows up best often wins the client.\n\n- Instant lead response\n- Showing coordination\n- Open house follow-up\n- CRM syncing\n\n## Takeaway\n\nA few well-designed automations can make a small team feel much larger.',
    tags: ['Real Estate', 'Automation'],
    readingTime: 8,
    publishedAt: new Date('2025-04-30'),
    updatedAt: new Date('2025-04-30'),
  },
  'crm-automation-integration': {
    slug: 'crm-automation-integration',
    title: 'Why Your CRM Is Worthless Without Automation',
    excerpt: 'A CRM is only as good as the data in it. Most CRMs become graveyards of leads no one followed up with. Automation changes the equation.',
    content:
      '## The CRM problem\n\nA CRM does not create revenue by itself. It only works when the right actions happen at the right time.\n\n## What automation adds\n\nAutomation keeps records clean, updates fields, triggers follow-up, and nudges your team when something needs attention.\n\n## The upside\n\nWhen the CRM and the workflow engine work together, you get better visibility and fewer dropped leads.\n\n- Better data\n- Better follow-up\n- Better handoffs\n- Better reporting\n\n## Bottom line\n\nThe CRM becomes useful when it is part of a system, not just a database.',
    tags: ['CRM', 'Automation'],
    readingTime: 6,
    publishedAt: new Date('2025-04-22'),
    updatedAt: new Date('2025-04-22'),
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
