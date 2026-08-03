import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { ArrowRight } from 'lucide-react'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About Azorvin — AI Automation Systems Company',
  description: 'Learn about Azorvin, an AI automation systems company building practical voice, messaging, CRM, and workflow solutions for service businesses.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <section className="bg-bg-base pt-40 pb-24 relative overflow-hidden">
        <div className="page-container max-w-5xl mx-auto">
          <AnimatedSection>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-tight text-text-primary mb-8 leading-[1.1] max-w-3xl">
              Building practical automation, <span className="text-primary">not hype.</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-light">
              Azorvin is an AI automation systems company for service businesses. We started it because too many teams were being sold chatbots that didn&apos;t integrate with their operations or solve real problems.
            </p>
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
              <h2 className="font-display text-3xl md:text-4xl text-text-primary mb-12">Why Azorvin exists</h2>
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
