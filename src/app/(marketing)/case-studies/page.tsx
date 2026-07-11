import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { Tilt3D } from '@/components/shared/Tilt3D'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ArrowRight, TrendingUp, HeartPulse, Home, Smile, Scale, ShoppingCart, Dumbbell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies — Real Results from Real Businesses | Nexus Automation',
  description: 'Real automation results: 40% more leads, 60% fewer no-shows, $12k/month recovered. Read how businesses like yours grew with Nexus Automation.',
}

const cases = [
  { slug: 'chen-family-medical', icon: HeartPulse, title: 'How Dr. Chen Added 23 New Patients in Month 1', company: 'Chen Family Medical', industry: 'Healthcare', results: ['+23 new patients in 30 days', '100% of after-hours calls answered', 'No-shows down from 24% to 9%'], solution: 'AI Voice Agent + Appointment Booking', color: 'from-blue-500/10 to-accent/10' },
  { slug: 'homeedge-realty', icon: Home, title: 'HomeEdge Realty Closed 8 Extra Deals With AI Lead Qualification', company: 'HomeEdge Realty', industry: 'Real Estate', results: ['8 additional closings in Q3', '73% of leads auto-qualified', 'Agents save 8+ hours/week'], solution: 'AI Lead Qualification + CRM Automation', color: 'from-warm/10 to-primary/10' },
  { slug: 'bright-smile-dental', icon: Smile, title: 'Bright Smile Dental Recovered $12k/Month With Missed Call AI', company: 'Bright Smile Dental', industry: 'Dental', results: ['$12,000/month recovered', 'No-shows from 22% to 7%', 'Cancellations filled in under 5min'], solution: 'Voice Agent + Appointment Automation', color: 'from-sky-500/10 to-cyan-500/10' },
  { slug: 'foster-law', icon: Scale, title: 'Foster Law Increased Consultations by 45% Without New Staff', company: 'Foster & Associates', industry: 'Legal', results: ['45% more consultations booked', 'Intake calls handled 24/7', 'Conversion rate: 28% → 61%'], solution: 'AI Voice Intake + Lead Qualification', color: 'from-accent/10 to-cyan-500/10' },
  { slug: 'shopnova', icon: ShoppingCart, title: 'ShopNova Reduced Support Costs 65% With AI Customer Support', company: 'ShopNova', industry: 'E-Commerce', results: ['65% support cost reduction', '79% ticket auto-resolution', 'CSAT improved from 3.8 to 4.7/5'], solution: 'AI Customer Support Agent', color: 'from-sky-500/10 to-primary/10' },
  { slug: 'fitlife-studio', icon: Dumbbell, title: 'FitLife Studio Doubled Trial-to-Member Conversion With AI', company: 'FitLife Studio Network', industry: 'Fitness', results: ['2x trial-to-member conversion', 'Zero manual follow-up needed', '+$34k MRR in 60 days'], solution: 'AI Chatbot + Lead Nurture Automation', color: 'from-warm/10 to-red-500/10' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <FloatingObjects count={8} className="opacity-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative z-10 page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">Results that speak for themselves</h1>
            <p className="text-lg text-white/55">Real numbers from real businesses. No cherry-picking — these are what our clients actually saw in their first 90 days.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cases.map(cs => (
              <StaggerItem key={cs.slug}>
                <Tilt3D className="h-full rounded-2xl" max={7}>
                  <div className="card-hover p-0 overflow-hidden h-full flex flex-col">
                    <div className={`h-32 bg-gradient-to-br ${cs.color} flex items-center justify-center`}>
                      <div className="w-16 h-16 bg-surface/80 backdrop-blur-sm rounded-2xl border border-border flex items-center justify-center text-primary shadow-card" style={{ transform: 'translateZ(34px)' }}>
                        <cs.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="badge-neutral text-xs">{cs.industry}</span>
                        <span className="text-text-muted text-xs">{cs.company}</span>
                      </div>
                      <h2 className="font-bold text-text-primary leading-tight mb-4">{cs.title}</h2>
                      <div className="space-y-2 flex-1 mb-4">
                        {cs.results.map((r, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <TrendingUp className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span className="text-sm text-text-primary font-medium">{r}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-text-muted mb-1">Solution used</p>
                        <p className="text-xs font-semibold text-primary">{cs.solution}</p>
                      </div>
                    </div>
                  </div>
                </Tilt3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-14">
            <h2 className="heading-md text-text-primary mb-4">Ready to write your own case study?</h2>
            <Link href="/contact" className="btn-primary-lg">
              Book a Free Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
