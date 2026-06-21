import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { Tilt3D } from '@/components/shared/Tilt3D'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ArrowRight, Phone, Bot, Calendar, Target, Workflow, HeadphonesIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Automation Solutions — Nexus Automation',
  description: 'Complete AI automation solutions for lead capture, appointment booking, customer support, and workflow automation. Explore what we can build for your business.',
}

const solutions = [
  { icon: Phone, title: 'Missed Call Recovery System', desc: 'Never lose a lead to voicemail again. AI instantly texts every missed caller with a personalized message and guides them to book.', href: '/services/voice-agents', tags: ['Voice', 'SMS', 'Booking'] },
  { icon: Bot, title: 'Website Lead Capture Bot', desc: 'A 24/7 AI chatbot that engages every visitor, qualifies them as leads, and routes hot prospects to your team instantly.', href: '/services/chatbots', tags: ['Chatbot', 'Lead Gen'] },
  { icon: Calendar, title: 'Automated Booking Pipeline', desc: 'From first contact to confirmed appointment — fully automated. Integrate with any calendar and eliminate scheduling friction.', href: '/services/appointment-booking', tags: ['Booking', 'Reminders'] },
  { icon: Target, title: 'AI Lead Qualification Engine', desc: 'Score every inbound lead instantly. Route hot leads to your best closers. Put cold leads in nurture. Stop wasting time.', href: '/services/lead-qualification', tags: ['Scoring', 'Routing'] },
  { icon: Workflow, title: 'CRM & Workflow Automation', desc: 'Connect your CRM, email, calendar, and communication tools into one automated machine that keeps everything in sync.', href: '/services/business-automation', tags: ['CRM', 'Workflows'] },
  { icon: HeadphonesIcon, title: 'AI Customer Support', desc: 'Handle 80% of support tickets automatically. Instant responses, consistent quality, and human escalation when needed.', href: '/services/customer-support', tags: ['Support', 'AI'] },
]

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <FloatingObjects count={8} className="opacity-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative z-10 page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">Solutions for every revenue leak</h1>
            <p className="text-lg text-white/55">Every service we offer targets a specific place where businesses lose leads, customers, and revenue. Find yours.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(sol => {
              const Icon = sol.icon
              return (
                <StaggerItem key={sol.href}>
                  <Tilt3D className="h-full rounded-2xl" max={7}>
                    <Link href={sol.href} className="card-hover p-6 h-full flex flex-col group">
                      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-200" style={{ transform: 'translateZ(28px)' }}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {sol.tags.map(t => <span key={t} className="badge-neutral text-xs">{t}</span>)}
                      </div>
                      <h2 className="font-bold text-text-primary mb-2">{sol.title}</h2>
                      <p className="text-sm text-text-secondary flex-1">{sol.desc}</p>
                      <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </Tilt3D>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
