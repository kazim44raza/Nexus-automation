import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { MultiStepContactForm } from '@/components/marketing/MultiStepContactForm'
import { Mail, Clock, Globe, Calendar } from 'lucide-react'

const DEFAULT_CALENDLY_URL = 'https://calendly.com/nexus-automation'

export const metadata: Metadata = {
  title: 'Contact Nexus Automation — Book a Free Demo',
  description: 'Book a free strategy call or request an audit to map out the automation opportunities for your business.',
}

export default function ContactPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim()
  const hasCalendlyBookingLink = Boolean(calendlyUrl && calendlyUrl !== DEFAULT_CALENDLY_URL)
  const bookingHref = hasCalendlyBookingLink ? calendlyUrl : '#contact-form'

  return (
    <>
      <section className="bg-bg-base pt-32 pb-20 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative page-container text-center max-w-2xl mx-auto z-10">
          <AnimatedSection>
            <h1 className="heading-display text-text-primary mb-4">Let's map your automation opportunities</h1>
            <p className="text-lg text-text-secondary">Get a free strategy audit. We'll identify where you're losing time and how AI can fix it.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
            <AnimatedSection direction="left">
              <div id="contact-form" className="card p-8 border border-border">
                <MultiStepContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1} className="space-y-6">
              <div className="card p-6 border border-border bg-bg-alt">
                <h3 className="heading-sm text-text-primary mb-4">Book directly</h3>
                <a
                  href={bookingHref}
                  {...(hasCalendlyBookingLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="btn-primary w-full justify-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {hasCalendlyBookingLink ? 'Book a Free 30-Min Call' : 'Request a Free Call'}
                </a>
                <p className="text-xs text-text-muted text-center mt-4">
                  {hasCalendlyBookingLink
                    ? 'No commitment · Strategy call'
                    : 'Calendar link is being updated'}
                </p>
              </div>

              <div className="card p-6 border border-border space-y-5">
                <h3 className="heading-sm text-text-primary mb-2">Contact details</h3>
                {[
                  { icon: Mail, label: 'Email', value: 'info@nexus-automation.tech' },
                  { icon: Clock, label: 'Response time', value: 'Within 1 business day' },
                  { icon: Globe, label: 'Location', value: 'Remote-first, Worldwide' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-sm font-semibold text-text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
