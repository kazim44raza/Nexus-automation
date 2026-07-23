import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Clock, UserCheck } from 'lucide-react'
import { DemoDisclaimer } from '@/components/ui/DemoDisclaimer'

export const metadata: Metadata = {
  title: 'Portfolio & Demo Implementations | Nexus Automation',
  description: 'Explore example automation systems and projected outcomes across different industries. These demonstrate the types of solutions we build.',
}

const cases = [
  { 
    badge: 'Demo Implementation', 
    industry: 'Healthcare', 
    title: 'Healthcare Practice Automation', 
    challenge: 'After-hours calls going to voicemail, resulting in lost patient opportunities and high no-show rates.', 
    solution: 'AI Voice Agent + Appointment Booking System', 
    metrics: [
      { label: 'Projected New Patients', value: '+23/mo' },
      { label: 'Call Answer Rate', value: '100%' },
      { label: 'No-show Reduction', value: '15%' }
    ],
    color: 'bg-blue-500',
    iconColor: 'text-blue-500',
    bgLight: 'bg-blue-50',
    workflow: [
      'Patient calls at 9 PM',
      'AI schedules visit in EMR',
      'Intake form sent via SMS',
      'Automated reminders 24h prior'
    ]
  },
  { 
    badge: 'Example Scenario', 
    industry: 'Real Estate', 
    title: 'Real Estate Lead System', 
    challenge: 'Agents spending hours manually qualifying cold leads and scheduling viewings.', 
    solution: 'AI Lead Qualification + CRM Automation', 
    metrics: [
      { label: 'Extra Closings', value: '+8/qtr' },
      { label: 'Auto-qualified', value: '73%' },
      { label: 'Time Saved', value: '8+ hrs/wk' }
    ],
    color: 'bg-amber-500',
    iconColor: 'text-amber-500',
    bgLight: 'bg-amber-50',
    workflow: [
      'Zillow lead submitted',
      'AI SMS confirms budget',
      'Showing scheduled in Cal',
      'CRM updated for Agent'
    ]
  },
  { 
    badge: 'Concept Workflow', 
    industry: 'E-Commerce', 
    title: 'E-commerce Support Automation', 
    challenge: 'Customer support team overwhelmed with repetitive questions about shipping and returns.', 
    solution: 'AI Customer Support Agent', 
    metrics: [
      { label: 'Cost Reduction', value: '65%' },
      { label: 'Auto-resolution', value: '79%' },
      { label: 'CSAT Score', value: '+18%' }
    ],
    color: 'bg-pink-500',
    iconColor: 'text-pink-500',
    bgLight: 'bg-pink-50',
    workflow: [
      'Customer asks "Where is order?"',
      'AI queries Shopify data',
      'Tracking info provided',
      'Ticket closed automatically'
    ]
  },
  { 
    badge: 'Projected Outcome', 
    industry: 'Fitness', 
    title: 'Fitness Studio Growth System', 
    challenge: 'Slow follow-up times causing trial members to lose interest and go to competitors.', 
    solution: 'AI Chatbot + Lead Nurture Automation', 
    metrics: [
      { label: 'Trial Conversion', value: '2x' },
      { label: 'Manual Follow-up', value: '0 hrs' },
      { label: 'Projected MRR', value: '+$34k' }
    ],
    color: 'bg-green-500',
    iconColor: 'text-green-500',
    bgLight: 'bg-green-50',
    workflow: [
      'IG DM inquiry on price',
      'AI answers & offers trial',
      'Class booked via link',
      'Pre-class tips sent'
    ]
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <FloatingObjects count={5} className="opacity-30" />
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="relative z-10 page-container text-center max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="badge-accent mb-6 inline-flex bg-white/10 text-white border-white/20">Visual Portfolio</span>
            <h1 className="heading-display text-white mb-6">Explore demo implementations and concept workflows</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">See how we map out AI automation systems before writing a single line of code. Review example scenarios and projected outcomes.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container max-w-6xl mx-auto">
          
          <div className="mb-16">
            <DemoDisclaimer />
          </div>

          <div className="space-y-24">
            {cases.map((cs, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm font-semibold tracking-wide uppercase text-text-muted">{cs.industry}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-border" />
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${cs.bgLight} ${cs.iconColor}`}>{cs.badge}</span>
                    </div>
                    
                    <h2 className="heading-lg text-text-primary mb-6">{cs.title}</h2>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-sm font-bold text-text-primary flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-accent" /> Before (The Challenge)
                        </h4>
                        <p className="text-text-secondary">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-text-primary flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-accent" /> After (The Solution)
                        </h4>
                        <p className="text-text-secondary">{cs.solution}</p>
                      </div>
                    </div>

                    <Link href="/contact" className="btn-secondary w-full sm:w-auto justify-center">
                      Discuss this implementation <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </AnimatedSection>
                </div>

                <div className="flex-1 w-full">
                  <AnimatedSection direction={i % 2 === 0 ? 'right' : 'left'} delay={0.2}>
                    <div className="bg-white border border-border rounded-3xl p-8 shadow-sm relative overflow-hidden">
                      <div className={`absolute top-0 left-0 w-2 h-full ${cs.color}`} />
                      
                      <h4 className="font-bold text-text-primary mb-6 flex items-center gap-2">
                        System Workflow
                      </h4>
                      <div className="space-y-4 relative mb-10">
                        <div className="absolute top-2 bottom-2 left-3.5 w-px bg-border" />
                        {cs.workflow.map((step, stepIdx) => (
                          <div key={stepIdx} className="relative flex items-center gap-4">
                            <div className={`w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center relative z-10 text-xs font-bold ${stepIdx === 0 ? 'border-border text-text-muted' : `border-transparent ${cs.color} text-white`}`}>
                              {stepIdx + 1}
                            </div>
                            <p className="text-sm font-medium text-text-primary">{step}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-bg-alt rounded-2xl p-5 border border-border">
                         <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4">Projected Outcomes</h4>
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {cs.metrics.map((m, mIdx) => (
                              <div key={mIdx}>
                                <div className={`text-xl font-bold mb-1 ${cs.iconColor}`}>{m.value}</div>
                                <div className="text-xs text-text-secondary leading-tight">{m.label}</div>
                              </div>
                            ))}
                         </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-white border-t border-border">
         <div className="page-container max-w-4xl mx-auto text-center">
           <AnimatedSection>
             <h2 className="heading-lg text-text-primary mb-6">Ready to see a custom workflow for your business?</h2>
             <p className="text-lg text-text-secondary mb-8">We build interactive maps and ROI projections before you commit to any development.</p>
             <Link href="/contact" className="btn-primary">
               Request a Workflow Map
             </Link>
           </AnimatedSection>
         </div>
      </section>
    </>
  )
}
