import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { Tilt3D } from '@/components/shared/Tilt3D'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries We Serve — Nexus Automation',
  description: 'AI automation solutions purpose-built for healthcare, dental, real estate, legal, fitness, automotive, home services, and e-commerce.',
}

const industries = [
  { slug: 'healthcare', emoji: '🏥', title: 'Healthcare', desc: 'Fill your schedule, reduce no-shows, automate patient communication.', wins: ['Answer 100% of patient calls', 'Cut no-shows by 60%', 'Automate pre-screening'] },
  { slug: 'dental', emoji: '🦷', title: 'Dental Clinics', desc: 'Recover missed calls, auto-fill cancellations, automate appointment reminders.', wins: ['Fill every cancellation slot', 'Multi-step reminder sequences', 'New patient onboarding'] },
  { slug: 'real-estate', emoji: '🏡', title: 'Real Estate', desc: 'Qualify leads instantly, schedule showings, automate follow-up sequences.', wins: ['24/7 lead qualification', 'Auto-schedule viewings', 'CRM auto-update'] },
  { slug: 'legal', emoji: '⚖️', title: 'Legal Firms', desc: 'Automate intake calls, screen for case fit, schedule consultations.', wins: ['24/7 intake qualification', 'Conflict pre-screening', 'Consultation booking'] },
  { slug: 'fitness', emoji: '💪', title: 'Fitness Centers', desc: 'Instant lead follow-up, trial booking automation, membership renewal.', wins: ['Instant inquiry follow-up', 'Free trial scheduling', 'Retention sequences'] },
  { slug: 'automotive', emoji: '🚗', title: 'Automotive', desc: 'Handle service scheduling, lead qualification, and follow-up sequences.', wins: ['Service appointment booking', 'Lead qualification', 'Trade-in inquiry handling'] },
  { slug: 'home-services', emoji: '🔧', title: 'Home Services', desc: 'Capture every quote request, schedule jobs, and send follow-up messages.', wins: ['24/7 quote capture', 'Job scheduling automation', 'Review request sequences'] },
  { slug: 'ecommerce', emoji: '🛒', title: 'E-Commerce', desc: 'Handle support, recover abandoned carts, and automate post-purchase flows.', wins: ['80% ticket auto-resolution', 'Abandoned cart recovery', 'Post-purchase upsells'] },
  { slug: 'professional-services', emoji: '💼', title: 'Professional Services', desc: 'Qualify inbound leads, book discovery calls, and automate client onboarding.', wins: ['Lead qualification', 'Discovery call booking', 'Client onboarding flow'] },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <FloatingObjects count={8} className="opacity-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative z-10 page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">Built for your industry</h1>
            <p className="text-lg text-white/55">Generic automation doesn&apos;t work. We build systems that understand the specific workflows and customer journeys in your industry.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(ind => (
              <StaggerItem key={ind.slug}>
                <Tilt3D className="h-full rounded-2xl" max={7}>
                  <Link href={`/industries/${ind.slug}`} className="card-hover p-6 h-full flex flex-col group">
                    <span className="text-3xl mb-4 block" style={{ transform: 'translateZ(30px)' }}>{ind.emoji}</span>
                    <h2 className="font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">{ind.title}</h2>
                    <p className="text-sm text-text-secondary mb-4 flex-1">{ind.desc}</p>
                    <ul className="space-y-1.5 mb-4">
                      {ind.wins.map((w, i) => <li key={i} className="text-xs text-text-muted flex items-center gap-1.5"><span className="text-accent">✓</span>{w}</li>)}
                    </ul>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                      See solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </Tilt3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
