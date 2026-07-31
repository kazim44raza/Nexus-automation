import type { Metadata } from 'next'
import Link from 'next/link'
import { IntegrationStrip } from '@/components/ui/IntegrationStrip'
import ProductStories from '@/components/marketing/ProductStories'
import { HowItWorks } from '@/components/marketing/HowItWorks'
import { DemoArea } from '@/components/marketing/DemoArea'
import { FAQSection } from '@/components/marketing/FAQSection'
import { CTASection } from '@/components/marketing/CTASection'
import { AutomationHub3DWrapper } from '@/components/marketing/hero/AutomationHub3DWrapper'
import { HumanFocusSection } from '@/components/marketing/HumanFocusSection'

export const metadata: Metadata = {
  title: { absolute: 'Azorvin — AI Systems & Automation | Chatbots, Voice Agents & Workflow Automation' },
  description: 'We build AI chatbots, voice agents, and automation systems that capture leads, book appointments, and follow up 24/7. Book a free demo.',
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
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("/noise.png")' }} />
        
        <div className="page-container relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left pt-10 lg:pt-0 flex flex-col items-center lg:items-start order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-surface text-text-secondary text-xs uppercase tracking-widest font-semibold mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Intelligent Infrastructure
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-text-primary leading-[1.05] mb-8">
                Automation systems that keep business moving.
              </h1>
              
              <p className="text-lg text-text-secondary mb-10 max-w-xl font-light leading-relaxed">
                Azorvin engineers voice agents, chatbots, and connected workflows that operate with precision—qualifying leads and driving growth without the overhead.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary">
                  Book a Consultation
                </Link>
                <Link href="/solutions" className="btn-ghost">
                  Explore Architecture
                </Link>
              </div>
              
              <div className="text-xs text-text-muted font-mono uppercase tracking-wider">
                <p>Built for scale · Zero-latency ops · Custom logic</p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] lg:h-[750px] w-full flex items-center justify-center order-1 lg:order-2">
              <AutomationHub3DWrapper />
            </div>
          </div>
        </div>
      </section>

      <IntegrationStrip />
      
      {/* We strip out LiveActivity, BeforeAfter, and IndustrySelector to break the "SaaS template" feel */}
      <HumanFocusSection />
      <HowItWorks />
      <ProductStories />
      <DemoArea />
      <FAQSection />
      <CTASection />
    </div>
  )
}
