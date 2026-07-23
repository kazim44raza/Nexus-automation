import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ContactForm } from '@/components/marketing/ContactForm'

const industries = {
  healthcare: {
    title: 'Healthcare',
    tag: 'Healthcare Automation',
    headline: 'Keep patient communication moving without adding front-desk load',
    description: 'Automate appointment reminders, intake, follow-ups, and missed-call recovery so your team spends less time on repetitive admin and more time with patients.',
    stats: [
      { value: '100%', label: 'Call Coverage', context: 'Never miss an inquiry' },
      { value: '60%', label: 'Fewer No-Shows', context: 'With smart reminders' },
      { value: '24/7', label: 'Patient Access', context: 'Book visits anytime' },
    ],
    workflow: [
      { step: 'Patient attempts to book during peak hours', type: 'input' },
      { step: 'AI Assistant answers immediately without hold time', type: 'ai' },
      { step: 'Assistant checks EMR/EHR system for available slots', type: 'system' },
      { step: 'Appointment confirmed and pre-visit intake forms sent', type: 'output' }
    ]
  },
  dental: {
    title: 'Dental Clinics',
    tag: 'Dental Automation',
    headline: 'Fill cancellation slots and reduce front-desk back-and-forth',
    description: 'Automate confirmations, recall flows, and waitlist fills so your chairs stay occupied and your team stops chasing appointment details manually.',
    stats: [
      { value: '24/7', label: 'Booking Coverage', context: 'Patients book anytime' },
      { value: '60%', label: 'Less No-Shows', context: 'Layered confirmations' },
      { value: '2 min', label: 'Slot Fill Time', context: 'Fast waitlist routing' },
    ],
    workflow: [
      { step: 'Patient cancels appointment via text at 9PM', type: 'input' },
      { step: 'System instantly identifies matching patients on waitlist', type: 'system' },
      { step: 'AI sends targeted SMS to waitlist offering the slot', type: 'ai' },
      { step: 'First patient replies "Yes" and slot is filled automatically', type: 'output' }
    ]
  },
  'real-estate': {
    title: 'Real Estate',
    tag: 'Real Estate Automation',
    headline: 'Qualify leads fast and book showings before competitors reply',
    description: 'Capture listing inquiries, qualify prospects, and schedule viewings automatically so agents respond in minutes instead of hours.',
    stats: [
      { value: '24/7', label: 'Lead Capture', context: 'Never leave an inquiry waiting' },
      { value: '< 2m', label: 'First Response', context: 'AI replies immediately' },
      { value: '40%', label: 'More Qualified', context: 'Stronger qualification' },
    ],
    workflow: [
      { step: 'Prospect submits Zillow/Web inquiry for listing', type: 'input' },
      { step: 'AI engages instantly via SMS to qualify budget/timeline', type: 'ai' },
      { step: 'Lead confirmed as high-intent buyer', type: 'system' },
      { step: 'Showing scheduled and details pushed to Agent CRM', type: 'output' }
    ]
  },
  legal: {
    title: 'Legal Firms',
    tag: 'Legal Intake Automation',
    headline: 'Screen, qualify, and schedule consultations without slowing attorneys down',
    description: 'Automate intake calls, conflict pre-screening, and consultation booking so your team only spends time on the cases that fit.',
    stats: [
      { value: '24/7', label: 'Intake Coverage', context: 'Capture leads anytime' },
      { value: '100%', label: 'Structured Screening', context: 'Consistent questions' },
      { value: '< 5m', label: 'Booking Time', context: 'Instant consult scheduling' },
    ],
    workflow: [
      { step: 'Potential client calls from marketing campaign', type: 'input' },
      { step: 'Voice AI answers and asks intake screening questions', type: 'ai' },
      { step: 'System determines case type and potential viability', type: 'system' },
      { step: 'Summary sent to attorney & consult booked if qualified', type: 'output' }
    ]
  },
  fitness: {
    title: 'Fitness Centers',
    tag: 'Fitness Automation',
    headline: 'Turn every inquiry into a booked trial or membership conversation',
    description: 'Automate trial booking, inquiry follow-up, and membership reminders so your team keeps prospects moving toward the next visit.',
    stats: [
      { value: '24/7', label: 'Lead Follow-Up', context: 'No waiting on replies' },
      { value: '3x', label: 'Faster Response', context: 'Instant answers' },
      { value: '60%', label: 'More Trials', context: 'Better capture rates' },
    ],
    workflow: [
      { step: 'Prospect DMs on Instagram asking about prices', type: 'input' },
      { step: 'AI responds with membership tiers and trial offer', type: 'ai' },
      { step: 'Prospect clicks link to choose trial class time', type: 'system' },
      { step: 'Class booked, waiver sent, and CRM updated', type: 'output' }
    ]
  },
  automotive: {
    title: 'Automotive',
    tag: 'Automotive Automation',
    headline: 'Keep service bays, sales teams, and follow-up queues moving',
    description: 'Automate service scheduling, lead qualification, and post-visit follow-up so dealerships and repair shops stay responsive.',
    stats: [
      { value: '24/7', label: 'Service Booking', context: 'Accept appointments anytime' },
      { value: '100%', label: 'Lead Capture', context: 'No missed requests' },
      { value: 'Instant', label: 'Follow-Up', context: 'Customers hear back immediately' },
    ],
    workflow: [
      { step: 'Customer requests service quote online', type: 'input' },
      { step: 'AI Assistant gathers vehicle make/model/issue', type: 'ai' },
      { step: 'System references standard repair times/costs', type: 'system' },
      { step: 'Quote provided and service appointment scheduled', type: 'output' }
    ]
  },
  'home-services': {
    title: 'Home Services',
    tag: 'Home Services Automation',
    headline: 'Capture every quote request and keep your crews booked',
    description: 'Automate quote intake, job scheduling, and follow-up so missed calls and slow responses stop costing you work.',
    stats: [
      { value: '24/7', label: 'Quote Capture', context: 'Collect requests anytime' },
      { value: '100%', label: 'Lead Coverage', context: 'No voicemail bottlenecks' },
      { value: '< 5m', label: 'Response Time', context: 'Prospects get answers fast' },
    ],
    workflow: [
      { step: 'Homeowner calls while crew is on another job', type: 'input' },
      { step: 'Voice AI answers, capturing name, address, and issue', type: 'ai' },
      { step: 'System checks availability for that service area', type: 'system' },
      { step: 'Job scheduled and dispatch notified', type: 'output' }
    ]
  },
  ecommerce: {
    title: 'E-Commerce',
    tag: 'E-Commerce Automation',
    headline: 'Recover carts, answer support questions, and keep customers moving',
    description: 'Automate support, post-purchase follow-up, and abandoned cart recovery so your store captures more revenue without extra support load.',
    stats: [
      { value: '80%', label: 'Ticket Deflection', context: 'Common questions resolved' },
      { value: '24/7', label: 'Store Support', context: 'Always-on assistance' },
      { value: 'More', label: 'Recovered Revenue', context: 'Automated cart recovery' },
    ],
    workflow: [
      { step: 'Shopper asks "Where is my order?" in web chat', type: 'input' },
      { step: 'AI identifies user and queries Shopify/Logistics system', type: 'system' },
      { step: 'AI provides real-time tracking update instantly', type: 'ai' },
      { step: 'Ticket closed automatically without human intervention', type: 'output' }
    ]
  },
  'professional-services': {
    title: 'Professional Services',
    tag: 'Professional Services Automation',
    headline: 'Qualify inbound leads and book discovery calls automatically',
    description: 'Automate lead qualification, client onboarding, and follow-up so your experts spend more time on billable work and less on admin.',
    stats: [
      { value: '24/7', label: 'Lead Intake', context: 'Every inquiry gets a response' },
      { value: 'Faster', label: 'Discovery Booking', context: 'Direct to calendar' },
      { value: 'Less', label: 'Admin Work', context: 'Teams focus on delivery' },
    ],
    workflow: [
      { step: 'Lead submits contact form for consulting services', type: 'input' },
      { step: 'AI emails intake questionnaire automatically', type: 'ai' },
      { step: 'Lead completes form; system scores based on criteria', type: 'system' },
      { step: 'If qualified, calendar link sent for Discovery Call', type: 'output' }
    ]
  },
} as const

type IndustrySlug = keyof typeof industries

function getIndustry(slug: string) {
  return industries[slug as IndustrySlug]
}

export function generateStaticParams() {
  return Object.keys(industries).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return { title: 'Industry Not Found' }

  return {
    title: `${industry.title} Automation — Nexus Automation`,
    description: industry.description,
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  return (
    <>
      <section className="relative bg-bg-base pt-32 pb-20 overflow-hidden border-b border-border">
        <FloatingObjects count={5} className="opacity-30" />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="relative z-10 page-container">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Link href="/industries" className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 mb-6">
                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Industries
              </Link>
              <span className="badge-accent mb-4 inline-flex">{industry.tag}</span>
              <h1 className="heading-display text-text-primary mb-5 leading-tight">{industry.headline}</h1>
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">{industry.description}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Editorial split layout with workflow diorama */}
      <section className="section-py bg-white border-b border-border">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="heading-lg text-text-primary mb-6">Example Workflow</h2>
              <p className="text-lg text-text-secondary mb-10">See how automation handles a typical scenario from start to finish without human intervention.</p>
              
              <div className="space-y-6 relative">
                <div className="absolute top-4 bottom-4 left-5 w-px bg-border" />
                {industry.workflow.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-6">
                    <div className={`w-10 h-10 rounded-full border-4 border-white shrink-0 flex items-center justify-center shadow-sm relative z-10 
                      ${item.type === 'input' ? 'bg-bg-alt text-text-secondary' : 
                        item.type === 'ai' ? 'bg-text-primary text-white' : 
                        item.type === 'system' ? 'bg-border text-text-secondary' : 'bg-accent text-white'}`}
                    >
                      {idx + 1}
                    </div>
                    <div className="bg-bg-base border border-border p-5 rounded-2xl flex-1 shadow-sm mt-[-4px]">
                       <p className="font-medium text-text-primary">{item.step}</p>
                       <p className="text-xs text-text-muted mt-2 uppercase tracking-wider font-semibold">
                          {item.type === 'input' ? 'User Action' : item.type === 'ai' ? 'AI Assistant' : item.type === 'system' ? 'System Process' : 'Result'}
                       </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2} className="relative">
               <div className="absolute inset-0 bg-radial-gradient from-accent/10 to-transparent opacity-50 blur-3xl" />
               <div className="grid grid-cols-1 gap-6 relative z-10">
                 {industry.stats.map((stat, index) => (
                   <div key={index} className="bg-white border border-border p-8 rounded-3xl shadow-sm text-center">
                     <div className="text-gradient font-bold text-5xl mb-2">{stat.value}</div>
                     <p className="font-bold text-text-primary text-lg mb-1">{stat.label}</p>
                     <p className="text-text-secondary">{stat.context}</p>
                   </div>
                 ))}
               </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container">
          <div className="max-w-4xl mx-auto bg-white border border-border rounded-3xl p-8 md:p-12 shadow-sm text-center">
            <span className="badge-accent mb-4 inline-flex">Get Started</span>
            <h2 className="heading-lg text-text-primary mb-4">Ready to automate your {industry.title.toLowerCase()} workflows?</h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">Book a short call and we&apos;ll show you the most practical ways to implement this system for your team.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              {['Free discovery call', 'Workflow mapping', 'Clear ROI estimate'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <div className="max-w-md mx-auto text-left">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
