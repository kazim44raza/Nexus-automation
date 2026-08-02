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
  title: { absolute: 'Azorvin — Voice, Messaging & Workflow Systems' },
  description: 'Azorvin helps service teams handle calls, messages, bookings, and routine handoffs without losing the human judgment each request needs.',
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
    email: 'ahmed@azorvin.com',
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
          <h2>When the system is unsure, your team takes over.</h2>
          <div className="home-intro__copy">
            <p>
              We connect phone, WhatsApp, calendars, and your CRM so a request can be captured, assigned, and followed up without copying details between tools. You decide what runs automatically and when a person steps in.
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
          <figcaption>A working session starts with your current process—not a product demo.</figcaption>
        </figure>

        <div className="home-photo-fold__copy">
          <h2 id="home-operating-title">We map the work before we automate it.</h2>
          <p>
            We look at how enquiries arrive today: who answers, where details are recorded, what gets delayed, and which decisions must stay with your team. The workflow follows those answers.
          </p>
          <Link href="/about" className="home-text-link home-text-link--light whitespace-nowrap">
            How Azorvin works <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="home-principle">
        <div className="page-container home-principle__grid">
          <div className="home-principle__statement">
            <h2>Routine steps move. Decisions stay with people.</h2>
            <p>
              Confirmations, reminders, routing, and data entry can run in the background. Pricing exceptions, sensitive conversations, and unclear requests reach the right person with the context attached.
            </p>
          </div>
          <figure className="home-principle__media">
            <Image
              src="/images/business-automation-human-scene-v3.webp"
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
            <h2 id="home-services-title">Start where the work gets stuck.</h2>
            <p>Missed calls, busy inboxes, or handoffs between tools—each can be a sensible first project.</p>
          </div>

          <div className="home-services__grid">
            <Link href="/services/voice-agents" className="home-service home-service--voice">
              <Image
                src="/images/homepage-voice-service-manager-v1.webp"
                alt="A service manager handling a customer call while recording the next action"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <span className="home-service__scrim" aria-hidden="true" />
              <span className="home-service__body">
                <span>Voice systems</span>
                <strong>Answer common calls, capture the reason, and pass complex ones to your team.</strong>
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
                <strong>Reply, collect the details, and create the next task from one conversation.</strong>
                <ArrowUpRight aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="home-service-index">
            <Link href="/services/business-automation">
              <span>Business automation</span>
              <strong>Move bookings, form entries, and status updates between the tools you already use.</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/services/customer-support">
              <span>Customer support</span>
              <strong>Use approved answers for routine questions and route the rest with context.</strong>
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
