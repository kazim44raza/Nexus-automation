import type { Metadata } from 'next'
import Link from 'next/link'
import { IntegrationStrip } from '@/components/ui/IntegrationStrip'
import ProductStories from '@/components/marketing/ProductStories'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { DemoArea } from '@/components/marketing/DemoArea'
import { FAQSection } from '@/components/marketing/FAQSection'
import { CTASection } from '@/components/marketing/CTASection'
import { HeroStudio } from '@/components/marketing/hero/HeroStudio'
import LiveActivity from '@/components/marketing/LiveActivity'
import BeforeAfter from '@/components/marketing/BeforeAfter'
import { IndustrySelector } from '@/components/marketing/IndustrySelector'
import { ProcessSection } from '@/components/marketing/ProcessSection'

export const metadata: Metadata = {
  title: { absolute: 'Azorvin — AI Systems & Automation | Chatbots, Voice Agents & Workflow Automation' },
  description: 'Azorvin designs chat, voice, and workflow systems around the way your team already works. Start with a practical conversation about where automation belongs.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Azorvin',
  url: 'https://azorvin.com',
  description: 'AI Systems & Automation specializing in chatbots, voice agents, and business workflow automation.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@azorvin.com',
  },
  sameAs: [],
  service: [
    { '@type': 'Service', name: 'AI Chatbots', url: 'https://azorvin.com/services/chatbots' },
    { '@type': 'Service', name: 'Voice Agents', url: 'https://azorvin.com/services/voice-agents' },
    { '@type': 'Service', name: 'Business Automation', url: 'https://azorvin.com/services/business-automation' },
    { '@type': 'Service', name: 'Lead Qualification', url: 'https://azorvin.com/services/lead-qualification' },
    { '@type': 'Service', name: 'Appointment Booking', url: 'https://azorvin.com/services/appointment-booking' },
    { '@type': 'Service', name: 'Customer Support Automation', url: 'https://azorvin.com/services/customer-support' },
  ],
}

export default function HomePage() {
  return (
    <div className="bg-bg-base min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      
      <section className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
        <div className="page-container relative z-10">
          <div className="grid min-w-0 gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
            <div className="min-w-0 max-w-2xl">
              <h1 className="mb-7 max-w-[12ch] break-words font-display text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.045em] text-text-primary">
                The customer conversation is only the beginning.
              </h1>
              <p className="mb-9 max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                Azorvin connects voice, messaging, calendars, CRMs, and internal workflows so an inquiry can become a completed action—with your team in control.
              </p>
              <div className="mb-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary whitespace-nowrap">
                  Book a consultation
                </Link>
                <Link href="/solutions" className="btn-secondary whitespace-nowrap">
                  See the system
                </Link>
              </div>
              <div className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-3 border-t border-border pt-5 text-sm text-text-secondary sm:grid-cols-4">
                {['Voice', 'Messaging', 'Workflows', 'Human handoff'].map(item => (
                  <span key={item} className="whitespace-nowrap">{item}</span>
                ))}
              </div>
            </div>

            <HeroStudio />
          </div>
        </div>
      </section>

      <IntegrationStrip />
      <BeforeAfter />
      <LiveActivity />
      <DemoArea />
      <HowItWorks />
      <ProcessSection />
      <IndustrySelector />
      <ProductStories />
      <FAQSection />
      <CTASection />
    </div>
  )
}
