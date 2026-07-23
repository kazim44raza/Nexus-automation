import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { DemoDisclaimer } from '@/components/ui/DemoDisclaimer'

export const metadata: Metadata = {
  title: 'Portfolio & Demo Implementations | Nexus Automation',
  description: 'Explore example automation systems and projected outcomes across different industries. These demonstrate the types of solutions we build.',
}

const cases = [
  { badge: 'Demo Implementation', industry: 'Healthcare', title: 'Healthcare Practice Automation', challenge: 'After-hours calls going to voicemail, resulting in lost patient opportunities and high no-show rates.', solution: 'AI Voice Agent + Appointment Booking System', results: ['Projected: +23 new patients/mo', 'Projected: 100% call answer rate', 'Projected: No-shows down 15%'], color: 'bg-blue-500' },
  { badge: 'Example Scenario', industry: 'Real Estate', title: 'Real Estate Lead System', challenge: 'Agents spending hours manually qualifying cold leads and scheduling viewings.', solution: 'AI Lead Qualification + CRM Automation', results: ['Projected: 8 extra closings/qtr', 'Projected: 73% leads auto-qualified', 'Projected: 8+ hours saved/week'], color: 'bg-amber-500' },
  { badge: 'Demo Implementation', industry: 'Dental', title: 'Dental Clinic Automation', challenge: 'High cancellation rates and lost revenue from missed calls during busy hours.', solution: 'Voice Agent + Appointment Automation', results: ['Estimated: $12k/month recovered', 'Estimated: Cancellations filled < 5min', 'Estimated: No-shows drop to 7%'], color: 'bg-cyan-500' },
  { badge: 'Example Scenario', industry: 'Legal', title: 'Legal Firm Intake System', challenge: 'Losing potential high-value cases because of delayed intake screening.', solution: 'AI Voice Intake + Lead Qualification', results: ['Projected: 45% more consults', 'Projected: 24/7 intake handling', 'Projected: Conversion rate to 61%'], color: 'bg-violet-500' },
  { badge: 'Concept Workflow', industry: 'E-Commerce', title: 'E-commerce Support Automation', challenge: 'Customer support team overwhelmed with repetitive questions about shipping and returns.', solution: 'AI Customer Support Agent', results: ['Estimated: 65% cost reduction', 'Estimated: 79% auto-resolution', 'Estimated: CSAT improvement'], color: 'bg-pink-500' },
  { badge: 'Projected Outcome', industry: 'Fitness', title: 'Fitness Studio Growth System', challenge: 'Slow follow-up times causing trial members to lose interest and go to competitors.', solution: 'AI Chatbot + Lead Nurture Automation', results: ['Projected: 2x trial conversion', 'Projected: Zero manual follow-up', 'Projected: +$34k MRR in 60 days'], color: 'bg-green-500' },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <FloatingObjects count={8} className="opacity-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative z-10 page-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-6">Portfolio & Demo Implementations</h1>
            <p className="text-lg text-white/55">Explore example automation systems and projected outcomes across different industries. These demonstrate the types of solutions we build.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container max-w-6xl mx-auto">
          
          <div className="mb-12">
            <DemoDisclaimer />
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((cs, i) => (
              <StaggerItem key={i}>
                <div className="card h-full flex flex-col overflow-hidden border border-border group hover:shadow-lg transition-all duration-300">
                  <div className={`h-2 ${cs.color}`} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <span className="badge-neutral text-xs">{cs.industry}</span>
                      <span className="bg-bg-alt text-text-secondary text-xs px-2 py-1 rounded font-medium border border-border">{cs.badge}</span>
                    </div>
                    
                    <h2 className="heading-sm text-text-primary mb-4">{cs.title}</h2>
                    
                    <div className="space-y-4 mb-6 flex-1">
                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Challenge</h4>
                        <p className="text-sm text-text-secondary">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Solution</h4>
                        <p className="text-sm font-medium text-text-primary">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-bg-alt rounded-lg p-4 mb-6 border border-border">
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Projected Outcomes</h4>
                      <div className="space-y-2">
                        {cs.results.map((r, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <TrendingUp className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span className="text-sm text-text-primary">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-auto">
                      View details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
