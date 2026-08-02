import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { IntegrationStrip } from '@/components/ui/IntegrationStrip'
import { FAQSection } from '@/components/marketing/FAQSection'
import { CTASection } from '@/components/marketing/CTASection'
import { IndustrySelector } from '@/components/marketing/IndustrySelector'
import { ProcessSection } from '@/components/marketing/ProcessSection'
import { CinematicHero } from '@/components/marketing/home/CinematicHero'

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
    <div className="home-cinema min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <CinematicHero />

      <section className="home-intro">
        <div className="page-container home-intro__grid">
          <h2>Automation is useful when the handoff is clear.</h2>
          <div className="home-intro__copy">
            <p>
              Azorvin connects calls, messages, calendars, CRMs, and internal steps around one practical goal: move a customer request forward without losing context or human judgment.
            </p>
            <div className="home-intro__actions">
              <Link href="/contact" className="home-button home-button--dark whitespace-nowrap">
                Book a consultation
              </Link>
              <Link href="/solutions" className="home-text-link whitespace-nowrap">
                See the system <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <IntegrationStrip />

      <section className="home-photo-fold page-container" aria-labelledby="home-operating-title">
        <figure className="home-photo-fold__media">
          <Image
            src="/images/founder_workspace.jpg"
            alt="A business owner reviewing operations at a desk"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover object-center"
          />
          <figcaption>Systems designed around real work, not a generic demo.</figcaption>
        </figure>

        <div className="home-photo-fold__copy">
          <h2 id="home-operating-title">Built for the operating reality.</h2>
          <p>
            We start with the conversation, the systems behind it, and the moments where a person should stay involved. Then we design the workflow, interfaces, and safeguards as one connected service.
          </p>
          <Link href="/about" className="home-text-link home-text-link--light whitespace-nowrap">
            How Azorvin works <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="home-principle">
        <div className="page-container home-principle__grid">
          <div className="home-principle__statement">
            <h2>Engineering × judgment</h2>
            <p>
              The repeatable work can move automatically. Exceptions, sensitive decisions, and relationships stay visible to the people responsible for them.
            </p>
          </div>
          <figure className="home-principle__media">
            <Image
              src="/images/business-automation-human-scene-v2.webp"
              alt="An operations professional reviewing a visual business workflow on her monitor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-services-title">
        <div className="page-container">
          <div className="home-services__head">
            <h2 id="home-services-title">What we design</h2>
            <p>Different entry points. One connected operating system.</p>
          </div>

          <div className="home-services__grid">
            <Link href="/services/voice-agents" className="home-service home-service--voice">
              <Image
                src="/images/voice-agent-human-scene-v2.webp"
                alt="A service professional reviewing a live voice-call workflow"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <span className="home-service__scrim" aria-hidden="true" />
              <span className="home-service__body">
                <span>Voice systems</span>
                <strong>Route routine calls without hiding the human exit.</strong>
                <ArrowUpRight aria-hidden="true" />
              </span>
            </Link>

            <Link href="/services/whatsapp-automation" className="home-service home-service--whatsapp">
              <Image
                src="/images/whatsapp-workspace.png"
                alt="WhatsApp automation shown in a real business workspace"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <span className="home-service__scrim" aria-hidden="true" />
              <span className="home-service__body">
                <span>WhatsApp automation</span>
                <strong>Turn messages into tracked work.</strong>
                <ArrowUpRight aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="home-service-index">
            <Link href="/services/business-automation">
              <span>Business automation</span>
              <strong>Connect repeatable steps across the tools your team already uses.</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/services/customer-support">
              <span>Customer support</span>
              <strong>Collect context, answer approved questions, and escalate clearly.</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSection />
      <IndustrySelector />
      <FAQSection />
      <CTASection />
    </div>
  )
}
