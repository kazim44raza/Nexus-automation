import type { Metadata } from 'next'
import { HeroSection } from '@/components/marketing/hero/HeroSection'
import { LogoBar } from '@/components/marketing/LogoBar'
import { ServicesGrid } from '@/components/marketing/ServicesGrid'
import { StatsBar } from '@/components/marketing/StatsBar'
import { ProcessSection } from '@/components/marketing/ProcessSection'
import { IndustriesSection } from '@/components/marketing/IndustriesSection'
import { CTASection } from '@/components/marketing/CTASection'
import { FAQSection } from '@/components/marketing/FAQSection'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ContactForm } from '@/components/marketing/ContactForm'
import { Mail, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nexus Automation — AI Automation Agency | Chatbots, Voice Agents & Workflow Automation',
  description: 'We build AI chatbots, voice agents, and automation systems that capture leads, book appointments, and follow up 24/7. Trusted by 120+ businesses. Book a free demo.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nexus Automation',
  url: 'https://nexusautomation.ai',
  description: 'AI automation agency specializing in chatbots, voice agents, and business workflow automation.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@nexusautomation.ai',
  },
  sameAs: [],
  service: [
    { '@type': 'Service', name: 'AI Chatbots', url: 'https://nexusautomation.ai/services/chatbots' },
    { '@type': 'Service', name: 'Voice Agents', url: 'https://nexusautomation.ai/services/voice-agents' },
    { '@type': 'Service', name: 'Business Automation', url: 'https://nexusautomation.ai/services/business-automation' },
    { '@type': 'Service', name: 'Lead Qualification', url: 'https://nexusautomation.ai/services/lead-qualification' },
    { '@type': 'Service', name: 'Appointment Booking', url: 'https://nexusautomation.ai/services/appointment-booking' },
    { '@type': 'Service', name: 'Customer Support Automation', url: 'https://nexusautomation.ai/services/customer-support' },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <HeroSection />
      <LogoBar />
      <ServicesGrid />
      <StatsBar />
      <ProcessSection />
      <IndustriesSection />
      <CTASection />
      <FAQSection />

      {/* Contact section */}
      <section className="section-py bg-bg-alt" id="contact">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="section-eyebrow">Get In Touch</span>
              <h2 className="section-title mt-3 max-w-md">
                Let's talk about your automation strategy
              </h2>
              <p className="section-desc mt-4">
                Fill out the form and we'll reach out within 1 business day. No spam, no obligation — just a genuine conversation about how we can help.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Email us</p>
                    <p className="text-sm font-semibold text-text-primary">hello@nexusautomation.ai</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Response time</p>
                    <p className="text-sm font-semibold text-text-primary">Within 1 business day</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="card p-8">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
