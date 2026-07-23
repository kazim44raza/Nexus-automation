import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Calendar, CheckCircle2, Clock, Globe, Sparkles, Target, Users } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ContactForm } from '@/components/marketing/ContactForm'

const industries = {
  healthcare: {
    title: 'Healthcare',
    tag: 'Healthcare Automation',
    headline: 'Keep patient communication moving without adding front-desk load',
    description:
      'Automate appointment reminders, intake, follow-ups, and missed-call recovery so your team spends less time on repetitive admin and more time with patients.',
    stats: [
      { value: '100%', label: 'Call Coverage', context: 'Never miss another after-hours inquiry' },
      { value: '60%', label: 'Fewer No-Shows', context: 'With smart reminders and confirmations' },
      { value: '24/7', label: 'Patient Access', context: 'Answer questions and book visits around the clock' },
    ],
    benefits: [
      'Recover missed calls automatically',
      'Automate intake and reminders',
      'Route urgent requests to staff fast',
      'Reduce no-shows with multi-step follow-up',
      'Keep scheduling accurate across locations',
      'Collect patient info before the appointment',
    ],
    useCases: [
      'New patient inquiries',
      'Appointment booking and rescheduling',
      'Pre-visit intake and reminders',
      'Missed-call text back flows',
    ],
    faq: [
      { question: 'Can this work with our current scheduling tools?', answer: 'Yes. We can connect to common calendar and booking systems so your availability stays in sync.' },
      { question: 'Will it handle patient questions after hours?', answer: 'Yes. The system can answer FAQs, capture details, and route urgent matters to the right person.' },
      { question: 'Can we keep a human in the loop?', answer: 'Absolutely. We set escalation rules so staff take over whenever a conversation needs it.' },
    ],
  },
  dental: {
    title: 'Dental Clinics',
    tag: 'Dental Automation',
    headline: 'Fill cancellation slots and reduce front-desk back-and-forth',
    description:
      'Automate confirmations, recall flows, and waitlist fills so your chairs stay occupied and your team stops chasing appointment details manually.',
    stats: [
      { value: '24/7', label: 'Booking Coverage', context: 'Patients can request appointments anytime' },
      { value: '60%', label: 'Less No-Show Risk', context: 'With layered reminders and confirmations' },
      { value: '2 min', label: 'Slot Fill Time', context: 'Open slots can be pushed to a waitlist quickly' },
    ],
    benefits: [
      'Fill cancellations faster',
      'Automate recall and hygiene reminders',
      'Collect intake before visits',
      'Handle after-hours inquiries',
      'Reduce manual confirmation calls',
      'Support multi-location scheduling',
    ],
    useCases: [
      'New patient booking',
      'Recall campaigns',
      'Waitlist fills',
      'Treatment follow-up',
    ],
    faq: [
      { question: 'Can this handle multiple providers?', answer: 'Yes. We can configure provider-specific schedules, services, and availability rules.' },
      { question: 'Does it help with recalls and reactivation?', answer: 'Yes. We can build automated sequences to bring inactive patients back in.' },
      { question: 'Can it work across locations?', answer: 'Yes. Location-specific booking rules and routing are supported.' },
    ],
  },
  'real-estate': {
    title: 'Real Estate',
    tag: 'Real Estate Automation',
    headline: 'Qualify leads fast and book showings before competitors reply',
    description:
      'Capture listing inquiries, qualify prospects, and schedule viewings automatically so agents respond in minutes instead of hours.',
    stats: [
      { value: '24/7', label: 'Lead Capture', context: 'Never leave an inquiry waiting' },
      { value: '< 2 min', label: 'First Response', context: 'AI replies immediately to inbound leads' },
      { value: '40%', label: 'More Qualified Leads', context: 'Stronger qualification before handoff' },
    ],
    benefits: [
      'Qualify buyers and renters instantly',
      'Book showings automatically',
      'Route hot leads to the right agent',
      'Recover missed calls and texts',
      'Send property info on demand',
      'Keep CRM records up to date',
    ],
    useCases: [
      'New listing inquiries',
      'Showing requests',
      'Open house follow-up',
      'Rental lead qualification',
    ],
    faq: [
      { question: 'Can it ask pre-qualification questions?', answer: 'Yes. We can collect budget, timeline, location, and property preferences before handing off to an agent.' },
      { question: 'Can it schedule showings directly?', answer: 'Yes. It can check availability and route qualified leads into your booking flow.' },
      { question: 'Will it work for teams and brokerages?', answer: 'Yes. We can route leads by territory, listing, or agent assignment.' },
    ],
  },
  legal: {
    title: 'Legal Firms',
    tag: 'Legal Intake Automation',
    headline: 'Screen, qualify, and schedule consultations without slowing attorneys down',
    description:
      'Automate intake calls, conflict pre-screening, and consultation booking so your team only spends time on the cases that fit.',
    stats: [
      { value: '24/7', label: 'Intake Coverage', context: 'Capture leads outside office hours' },
      { value: '100%', label: 'Structured Screening', context: 'Consistent intake questions every time' },
      { value: '< 5 min', label: 'Booking Time', context: 'Consultations can be scheduled automatically' },
    ],
    benefits: [
      'Pre-screen for case fit',
      'Route urgent matters quickly',
      'Book consultations automatically',
      'Reduce missed opportunities',
      'Standardize intake questions',
      'Keep records organized for follow-up',
    ],
    useCases: [
      'Lead intake',
      'Conflict pre-screening',
      'Consultation booking',
      'Case type qualification',
    ],
    faq: [
      { question: 'Can it help with intake screening?', answer: 'Yes. We can build structured qualification flows for your practice areas.' },
      { question: 'Can it collect contact details and case notes?', answer: 'Yes. The system can gather the details your staff needs before a consult.' },
      { question: 'Can we route different practice areas separately?', answer: 'Yes. Leads can be sent to different queues or attorneys based on case type.' },
    ],
  },
  fitness: {
    title: 'Fitness Centers',
    tag: 'Fitness Automation',
    headline: 'Turn every inquiry into a booked trial or membership conversation',
    description:
      'Automate trial booking, inquiry follow-up, and membership reminders so your team keeps prospects moving toward the next visit.',
    stats: [
      { value: '24/7', label: 'Lead Follow-Up', context: 'No more waiting on manual replies' },
      { value: '3x', label: 'Faster Response', context: 'Instant answers to membership questions' },
      { value: '60%', label: 'More Trial Bookings', context: 'Better capture of interested prospects' },
    ],
    benefits: [
      'Book free trials automatically',
      'Follow up on inquiries instantly',
      'Handle membership questions',
      'Recover missed leads',
      'Support class and session scheduling',
      'Automate renewal reminders',
    ],
    useCases: [
      'Trial pass bookings',
      'Membership inquiries',
      'Class scheduling',
      'Reactivation campaigns',
    ],
    faq: [
      { question: 'Can it handle trial pass bookings?', answer: 'Yes. We can automate the handoff from inquiry to booked trial.' },
      { question: 'Can it follow up on leads that go cold?', answer: 'Yes. We can set up automated re-engagement sequences.' },
      { question: 'Does it work for multi-location gyms?', answer: 'Yes. We can route inquiries by location and service.' },
    ],
  },
  automotive: {
    title: 'Automotive',
    tag: 'Automotive Automation',
    headline: 'Keep service bays, sales teams, and follow-up queues moving',
    description:
      'Automate service scheduling, lead qualification, and post-visit follow-up so dealerships and repair shops stay responsive without adding overhead.',
    stats: [
      { value: '24/7', label: 'Service Booking', context: 'Accept appointments outside business hours' },
      { value: '100%', label: 'Lead Capture', context: 'No missed test-drive or service requests' },
      { value: 'Faster', label: 'Follow-Up', context: 'Customers hear back immediately' },
    ],
    benefits: [
      'Schedule service appointments automatically',
      'Qualify sales and trade-in leads',
      'Handle missed-call recovery',
      'Send follow-up messages automatically',
      'Keep customers updated on next steps',
      'Reduce front-desk admin work',
    ],
    useCases: [
      'Service booking',
      'Sales lead qualification',
      'Trade-in inquiries',
      'Post-service follow-up',
    ],
    faq: [
      { question: 'Can it handle service scheduling?', answer: 'Yes. We can build workflows for service requests and appointment booking.' },
      { question: 'Can it help sales teams qualify leads?', answer: 'Yes. It can ask the right questions and route strong leads quickly.' },
      { question: 'Can it connect to our CRM?', answer: 'Yes. We can integrate with your existing sales and service systems.' },
    ],
  },
  'home-services': {
    title: 'Home Services',
    tag: 'Home Services Automation',
    headline: 'Capture every quote request and keep your crews booked',
    description:
      'Automate quote intake, job scheduling, and follow-up so missed calls and slow responses stop costing you work.',
    stats: [
      { value: '24/7', label: 'Quote Capture', context: 'Collect requests any time of day' },
      { value: '100%', label: 'Lead Coverage', context: 'No more voicemail bottlenecks' },
      { value: '< 5 min', label: 'Response Time', context: 'Prospects get answers fast' },
    ],
    benefits: [
      'Capture quote requests automatically',
      'Schedule jobs faster',
      'Recover missed calls',
      'Send estimates and follow-ups',
      'Keep crews booked efficiently',
      'Request reviews after completion',
    ],
    useCases: [
      'Service inquiries',
      'Quote request intake',
      'Job scheduling',
      'Review generation',
    ],
    faq: [
      { question: 'Can it book service calls?', answer: 'Yes. We can route and schedule requests based on your availability and service area.' },
      { question: 'Can it help with missed-call follow-up?', answer: 'Yes. We can trigger instant text-back and booking flows.' },
      { question: 'Does it support multiple service types?', answer: 'Yes. Different service categories can have their own workflows.' },
    ],
  },
  ecommerce: {
    title: 'E-Commerce',
    tag: 'E-Commerce Automation',
    headline: 'Recover carts, answer support questions, and keep customers moving',
    description:
      'Automate support, post-purchase follow-up, and abandoned cart recovery so your store captures more revenue without extra support load.',
    stats: [
      { value: '80%', label: 'Ticket Deflection', context: 'Common questions resolved automatically' },
      { value: '24/7', label: 'Store Support', context: 'Always-on assistance for shoppers' },
      { value: 'More', label: 'Recovered Revenue', context: 'Abandoned carts can be re-engaged automatically' },
    ],
    benefits: [
      'Answer product and shipping questions instantly',
      'Recover abandoned carts automatically',
      'Handle order status requests',
      'Support post-purchase upsells',
      'Reduce support ticket volume',
      'Send proactive follow-ups',
    ],
    useCases: [
      'Customer support',
      'Cart recovery',
      'Order updates',
      'Post-purchase flows',
    ],
    faq: [
      { question: 'Can it answer order questions?', answer: 'Yes. We can connect the assistant to your support and order systems.' },
      { question: 'Can it recover carts automatically?', answer: 'Yes. We can build reminder and follow-up sequences for abandoned carts.' },
      { question: 'Can it handle more than one channel?', answer: 'Yes. We can deploy on web chat and other channels depending on your stack.' },
    ],
  },
  'professional-services': {
    title: 'Professional Services',
    tag: 'Professional Services Automation',
    headline: 'Qualify inbound leads and book discovery calls automatically',
    description:
      'Automate lead qualification, client onboarding, and follow-up so your experts spend more time on billable work and less on admin.',
    stats: [
      { value: '24/7', label: 'Lead Intake', context: 'Every inquiry gets a response' },
      { value: 'Faster', label: 'Discovery Booking', context: 'Qualified leads move straight to calls' },
      { value: 'Less', label: 'Admin Work', context: 'Teams focus on delivery, not back-and-forth' },
    ],
    benefits: [
      'Qualify leads before handoff',
      'Book discovery calls automatically',
      'Streamline onboarding',
      'Capture the right project details',
      'Reduce admin bottlenecks',
      'Follow up on warm leads consistently',
    ],
    useCases: [
      'Lead qualification',
      'Consultation booking',
      'Client onboarding',
      'Proposal follow-up',
    ],
    faq: [
      { question: 'Can it screen out bad-fit leads?', answer: 'Yes. We can build qualification flows that surface only the opportunities you want.' },
      { question: 'Can it help with onboarding?', answer: 'Yes. We can automate forms, reminders, and next-step messaging.' },
      { question: 'Is it customizable by practice area?', answer: 'Yes. The workflow can be tuned for the specific services you offer.' },
    ],
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
        <FloatingObjects count={6} className="opacity-40" />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(6,182,212,0.1), transparent)' }} />
        <div className="relative z-10 page-container">
          <div className="max-w-3xl">
            <AnimatedSection>
              <span className="badge-accent mb-5 inline-flex">{industry.tag}</span>
              <h1 className="heading-display text-text-primary mb-5 leading-tight">{industry.headline}</h1>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">{industry.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Free Demo <Calendar className="w-5 h-5" />
                </Link>
                <Link href="/industries" className="btn-secondary">
                  View All Industries
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-py-sm bg-white border-b border-border">
        <div className="page-container">
          <div className="grid grid-cols-3 gap-6">
            {industry.stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center px-4">
                <div className="text-gradient font-bold text-3xl md:text-4xl">{stat.value}</div>
                <p className="font-semibold text-text-primary text-sm mt-1">{stat.label}</p>
                <p className="text-xs text-text-muted mt-0.5">{stat.context}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="badge-accent mb-3 inline-flex">Why it works</span>
              <h2 className="heading-lg text-text-primary mt-3">Built around the workflows that matter most</h2>
              <p className="text-lg text-text-secondary mt-4">
                This setup is designed to remove repetitive work, speed up response time, and keep qualified prospects from slipping away.
              </p>
              <div className="mt-8 space-y-3">
                {industry.benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="card p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">Typical use cases</h3>
                    <p className="text-xs text-text-muted">Common entry points for this industry</p>
                  </div>
                </div>
                <StaggerContainer className="grid sm:grid-cols-2 gap-3">
                  {industry.useCases.map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary shadow-sm">{item}</div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-text-secondary">
                  <div className="rounded-xl bg-white border border-border shadow-sm p-3">
                    <Clock className="w-4 h-4 text-accent mb-2" />
                    Faster response times
                  </div>
                  <div className="rounded-xl bg-white border border-border shadow-sm p-3">
                    <Users className="w-4 h-4 text-accent mb-2" />
                    Better lead qualification
                  </div>
                  <div className="rounded-xl bg-white border border-border shadow-sm p-3">
                    <Target className="w-4 h-4 text-accent mb-2" />
                    Clear handoff rules
                  </div>
                  <div className="rounded-xl bg-white border border-border shadow-sm p-3">
                    <Globe className="w-4 h-4 text-accent mb-2" />
                    24/7 availability
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-py bg-white border-t border-border">
        <div className="page-container max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <span className="badge-accent mb-3 inline-flex">FAQ</span>
            <h2 className="heading-lg text-text-primary mt-3">Common questions</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              {industry.faq.map((item, index) => (
                <div key={index} className="card p-5 shadow-sm border border-border">
                  <h3 className="font-bold text-text-primary mb-2">{item.question}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-py bg-bg-base border-t border-border">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="badge-accent mb-3 inline-flex">Get Started</span>
              <h2 className="heading-lg text-text-primary mt-3 max-w-md">Let&apos;s map out the best automation flow for your team</h2>
              <p className="text-lg text-text-secondary mt-4">Book a short call and we&apos;ll show you the most practical ways to automate this workflow.</p>
              <div className="mt-6 space-y-3">
                {['Free discovery call', 'Industry-specific workflow review', 'Clear implementation path'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="card p-8 shadow-sm">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
