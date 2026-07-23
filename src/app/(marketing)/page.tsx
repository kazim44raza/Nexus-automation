import type { Metadata } from 'next'
import Link from 'next/link'
import { IntegrationStrip } from '@/components/ui/IntegrationStrip'
import LiveActivity from '@/components/marketing/LiveActivity'
import ProductStories from '@/components/marketing/ProductStories'
import BeforeAfter from '@/components/marketing/BeforeAfter'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { IndustrySelector } from '@/components/marketing/IndustrySelector'
import { DemoArea } from '@/components/marketing/DemoArea'
import { FAQSection } from '@/components/marketing/FAQSection'
import { CTASection } from '@/components/marketing/CTASection'
import NexusHub3D from '@/components/marketing/hero/NexusHub3D'
import { HumanFocusSection } from '@/components/marketing/HumanFocusSection'

export const metadata: Metadata = {
  title: { absolute: 'Nexus Automation — AI Automation Agency | Chatbots, Voice Agents & Workflow Automation' },
  description: 'We build AI chatbots, voice agents, and automation systems that capture leads, book appointments, and follow up 24/7. Book a free demo.',
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
    email: 'info@nexus-automation.tech',
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
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center bg-surface overflow-hidden pt-20">
        <div className="page-container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left pt-10 lg:pt-0 flex flex-col items-center lg:items-start order-2 lg:order-1">
              <span className="badge-accent mb-6 inline-block">AI Automation for Service Businesses</span>
              <h1 className="heading-display mb-6">
                Your AI team answers, qualifies and books — 24/7.
              </h1>
              <p className="text-lg text-secondary mb-10 max-w-xl">
                Nexus Automation builds voice agents, chatbots and automated workflows that help businesses respond faster, capture more opportunities and operate without repetitive manual work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary-lg">
                  Book a Free Demo
                </Link>
                <Link href="/solutions" className="btn-secondary">
                  Explore AI Systems
                </Link>
              </div>
              <div className="text-sm text-muted">
                <p>Custom-built for your business · Integrates with your existing tools · Ongoing optimization</p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
              <NexusHub3D />
            </div>
          </div>
        </div>
      </section>

      <IntegrationStrip />
      <HumanFocusSection />
      <LiveActivity />
      <ProductStories />
      <BeforeAfter />
      <HowItWorks />
      <IndustrySelector />
      <DemoArea />
      <FAQSection />
      <CTASection />
    </>
  )
}
