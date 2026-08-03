import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { ArrowRight } from 'lucide-react'
import { createPageMetadata } from '@/lib/seo'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = createPageMetadata({
  title: 'What Is Azorvin? AI Systems & Automation Company',
  description: 'Azorvin is an AI systems and business automation company building chatbots, voice agents, WhatsApp, CRM, booking, and workflow systems for service businesses.',
  path: '/about',
})

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.azorvin.com/about#webpage',
      url: 'https://www.azorvin.com/about',
      name: 'What Is Azorvin?',
      description: 'Official company profile for Azorvin, an AI systems and business automation company.',
      isPartOf: { '@id': 'https://www.azorvin.com/#website' },
      mainEntity: { '@id': 'https://www.azorvin.com/#organization' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.azorvin.com/#organization',
      name: 'Azorvin',
      alternateName: ['Azorvin AI', 'Azorvin Systems'],
      url: 'https://www.azorvin.com/',
      description: 'Azorvin is an AI systems and business automation company for service businesses.',
      disambiguatingDescription: 'Azorvin is the AI systems and business automation company operating at azorvin.com.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.azorvin.com/azorvin-logo-master.jpg',
        contentUrl: 'https://www.azorvin.com/azorvin-logo-master.jpg',
        width: 1448,
        height: 1086,
        caption: 'Official Azorvin logo',
      },
      image: 'https://www.azorvin.com/azorvin-logo-master.jpg',
      email: 'ahmed@azorvin.com',
      sameAs: [
        'https://www.linkedin.com/in/azorvin-systems-2139b540a',
        'https://www.instagram.com/azorvinsystems/',
      ],
      knowsAbout: [
        'AI chatbots',
        'AI voice agents',
        'WhatsApp automation',
        'appointment booking automation',
        'CRM automation',
        'business workflow automation',
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <section className="bg-bg-base pt-40 pb-24 relative overflow-hidden">
        <div className="page-container max-w-5xl mx-auto">
          <AnimatedSection>
            <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About Azorvin', path: '/about' }]} />
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tight text-text-primary mb-8 leading-[1.1] max-w-3xl">
              What is <span className="text-primary">Azorvin?</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-light">
              Azorvin is an AI systems and business automation company for service businesses. We build chatbots, voice agents, WhatsApp, booking, CRM, and workflow systems around the way a team actually operates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-y border-border/40 bg-bg-alt py-16" aria-labelledby="azorvin-profile-title">
        <div className="page-container max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Official company profile</p>
                <h2 id="azorvin-profile-title" className="font-display text-3xl md:text-4xl text-text-primary">Azorvin at a glance</h2>
                <p className="mt-5 max-w-md leading-relaxed text-text-secondary">
                  On this website, Azorvin refers to the technology company operating at <span className="font-medium text-text-primary">azorvin.com</span>.
                </p>
                <figure className="mt-8 overflow-hidden rounded-xl border border-border bg-bg-base">
                  <Image
                    src="/azorvin-logo-master.jpg"
                    alt="Official Azorvin logo with metallic silver and cyan architectural mark"
                    width={1448}
                    height={1086}
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="border-t border-border px-4 py-3 text-xs uppercase tracking-[0.14em] text-text-muted">
                    Official Azorvin identity
                  </figcaption>
                </figure>
              </div>

              <dl className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {[
                  ['Company', 'Azorvin'],
                  ['Category', 'AI systems and business automation'],
                  ['Built for', 'Service businesses and operational teams'],
                  ['Core work', 'Chat, voice, WhatsApp, booking, CRM, and workflows'],
                  ['Human role', 'Review, judgment, exceptions, and sensitive decisions'],
                  ['Official contact', 'ahmed@azorvin.com'],
                ].map(([term, detail]) => (
                  <div key={term} className="bg-bg-base p-6">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">{term}</dt>
                    <dd className="mt-2 leading-relaxed text-text-primary">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Story / Founder Section */}
      <section className="py-24 bg-bg-surface">
        <div className="page-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <AnimatedSection className="md:col-span-5 md:sticky top-24">
              <div className="relative aspect-[3/4] overflow-hidden bg-bg-elevated border border-border/50">
                <Image 
                  src="/images/human-collaboration.jpg"
                  alt="Two business professionals discussing a workflow together"
                  fill
                  className="object-cover object-[58%_center] saturate-[0.78] transition-[filter] duration-300 hover:saturate-100"
                />
                <div className="absolute inset-0 border border-text-primary/10" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="md:col-span-7 pt-12">
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-12">Why the company exists</h2>
              <div className="space-y-8 text-lg font-light">
                <p className="text-text-secondary leading-relaxed">
                  Most service businesses we talk to have the same story. They&apos;re good at what they do — great, even — but they&apos;re losing leads because nobody picked up the phone at 7pm, or because a follow-up email never went out, or because their CRM is a mess of half-entered contacts.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We started Azorvin because we kept seeing the same gap. The AI tools existed, but nobody was wiring them into actual business workflows. Chatbots that couldn&apos;t book appointments. Voice agents that couldn&apos;t update your CRM. Automations that broke the moment something didn&apos;t match a template.
                </p>
                <p className="text-text-primary leading-relaxed font-normal text-xl">
                  So that&apos;s what we do. We sit down with you, understand how your operations actually run — not how they&apos;re supposed to run on paper — and build systems that plug directly into the tools you already use.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  No generic setups. No dashboards you&apos;ll never open. Just automation that works quietly in the background while your team focuses on the work that matters.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Implementation Philosophy */}
      <section className="py-32 bg-bg-base border-t border-border/30">
        <div className="page-container max-w-6xl mx-auto">
          <AnimatedSection className="mb-20 md:w-2/3">
            <h2 className="font-display text-4xl text-text-primary mb-6">How we build</h2>
            <p className="text-xl text-text-secondary font-light">Our implementation philosophy is based on reliability, strict scoping, and measurable operational outcomes.</p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-12 gap-8 md:gap-12">
            <StaggerItem className="md:col-span-4 flex flex-col">
              <span className="font-display text-text-muted text-5xl mb-6">01</span>
              <h3 className="text-xl text-text-primary mb-4 font-medium">Deep Discovery</h3>
              <p className="text-text-secondary leading-relaxed font-light">We document your exact current process before writing a single line of code. We need to know where the bottlenecks are and exactly what data needs to move where.</p>
            </StaggerItem>
            <StaggerItem className="md:col-span-4 flex flex-col md:pt-16">
              <span className="font-display text-text-muted text-5xl mb-6">02</span>
              <h3 className="text-xl text-text-primary mb-4 font-medium">Custom Plumbing</h3>
              <p className="text-text-secondary leading-relaxed font-light">AI models are smart, but they need instructions. We build custom API connections, webhooks, and n8n/Make workflows to ensure the AI can actually take action in your systems.</p>
            </StaggerItem>
            <StaggerItem className="md:col-span-4 flex flex-col md:pt-32">
              <span className="font-display text-text-muted text-5xl mb-6">03</span>
              <h3 className="text-xl text-text-primary mb-4 font-medium">Human Guardrails</h3>
              <p className="text-text-secondary leading-relaxed font-light">We never let AI run completely unchecked. We design strict escalation paths so that if an edge-case occurs, the system smoothly hands the conversation over to your team.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Tools & Ongoing Support */}
      <section className="py-24 bg-bg-surface border-y border-border/30">
        <div className="page-container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <h3 className="font-display text-2xl text-text-primary mb-8 pb-4 border-b border-border/50">
                Our Stack
              </h3>
              <p className="text-text-secondary mb-8 font-light text-lg">We are technology-agnostic but highly opinionated about reliability. We assemble the best tools for your specific workflow.</p>
              <div className="space-y-6">
                <div className="grid grid-cols-3 border-b border-border/20 pb-4">
                  <div className="text-text-primary font-medium">Logic & Workflows</div>
                  <div className="col-span-2 text-text-secondary font-light">n8n, Make.com, Zapier</div>
                </div>
                <div className="grid grid-cols-3 border-b border-border/20 pb-4">
                  <div className="text-text-primary font-medium">Conversational AI</div>
                  <div className="col-span-2 text-text-secondary font-light">Voiceflow, Retell, OpenAI, Anthropic</div>
                </div>
                <div className="grid grid-cols-3 pb-4">
                  <div className="text-text-primary font-medium">Custom Backend</div>
                  <div className="col-span-2 text-text-secondary font-light">Next.js, Node.js, Vercel</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="font-display text-2xl text-text-primary mb-8 pb-4 border-b border-border/50">
                Ongoing Support
              </h3>
              <p className="text-text-secondary mb-6 font-light text-lg">Automation isn't a "launch and leave" product. Businesses evolve, software updates, and edge-cases emerge.</p>
              <p className="text-text-secondary font-light text-lg">
                We monitor your live workflows, review conversation transcripts, and push constant refinements to your prompts and routing logic. We act as your dedicated automation engineering partner for the long haul.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-32 bg-bg-base">
        <div className="page-container max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-8">Ready to solve operational bottlenecks?</h2>
            <p className="text-text-secondary mb-12 text-xl font-light">Let's look at your current manual processes and see if a custom automation system makes sense.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-text-primary text-bg-base hover:bg-bg-surface transition-colors duration-300 font-medium tracking-wide text-sm uppercase">
              Book a technical discovery <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
