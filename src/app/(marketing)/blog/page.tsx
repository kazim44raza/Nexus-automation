import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { formatDateShort } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog — AI Automation Insights | Nexus Automation',
  description: 'Expert articles on AI chatbots, voice agents, business automation, and lead generation for SMB owners.',
}

const posts = [
  { slug: 'how-ai-chatbots-recover-lost-leads', title: 'How AI Chatbots Recover the Leads You\'re Losing After Hours', excerpt: 'Most businesses lose 35-40% of their potential leads simply because no one answered the phone or chat after 5PM. Here\'s how AI fixes that.', date: '2025-06-01', readingTime: 5, tags: ['AI Chatbots', 'Lead Generation'] },
  { slug: 'ai-voice-agents-vs-traditional-receptionist', title: 'AI Voice Agents vs. Traditional Receptionists: What the Numbers Say', excerpt: 'A detailed cost comparison between hiring a receptionist and deploying an AI voice agent — including hidden costs most businesses miss.', date: '2025-05-22', readingTime: 7, tags: ['Voice Agents', 'ROI'] },
  { slug: 'appointment-booking-automation-healthcare', title: 'How Healthcare Practices Are Cutting No-Shows by 60% With AI', excerpt: 'Patient no-shows cost the average medical practice $150,000 per year. Here\'s the exact automation system that\'s changing that.', date: '2025-05-15', readingTime: 6, tags: ['Healthcare', 'Appointments'] },
  { slug: 'lead-qualification-small-business', title: '5 Lead Qualification Mistakes That Cost Small Businesses Fortune', excerpt: 'Most small businesses are burning sales hours on leads that were never going to close. These 5 automation fixes change everything.', date: '2025-05-08', readingTime: 5, tags: ['Lead Qualification', 'Sales'] },
  { slug: 'workflow-automation-real-estate', title: 'The Complete Real Estate Automation Playbook for 2025', excerpt: 'How top-performing real estate teams are using AI to qualify every lead, schedule every showing, and follow up automatically.', date: '2025-04-30', readingTime: 8, tags: ['Real Estate', 'Automation'] },
  { slug: 'crm-automation-integration', title: 'Why Your CRM Is Worthless Without Automation', excerpt: 'A CRM only as good as the data in it. Most CRMs are graveyard of leads no one followed up with. Automation changes the equation.', date: '2025-04-22', readingTime: 6, tags: ['CRM', 'Automation'] },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">AI Automation Insights</h1>
            <p className="text-lg text-white/55">Practical guides and case studies for business owners who want to grow without hiring more people.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="card-hover p-0 overflow-hidden h-full flex flex-col group block">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map(t => <span key={t} className="badge-primary text-xs">{t}</span>)}
                    </div>
                    <h2 className="font-bold text-text-primary leading-tight mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
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
