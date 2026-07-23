import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { ArrowRight, Wrench, Search, Code2, Repeat, Server, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Nexus Automation | Genuine AI Automation',
  description: 'Learn why Nexus Automation was founded and how we build practical, un-hyped automation systems for service businesses.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative page-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-6">Building practical automation, not hype.</h1>
            <p className="text-lg text-white/55 leading-relaxed">
              We started Nexus Automation because too many businesses were being sold AI chatbots that didn't actually integrate with their operations or solve real problems.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      {/* The Story / Founder Section */}
      <section className="section-py bg-bg-base">
        <div className="page-container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image 
                  src="/images/founder_workspace.jpg" 
                  alt="Founder's workspace showing automation nodes"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="heading-lg text-text-primary mb-6">Why Nexus exists</h2>
              <div className="prose prose-lg prose-neutral dark:prose-invert">
                <p className="text-text-secondary leading-relaxed mb-4">
                  My name is Kazim, and I started Nexus Automation after noticing a frustrating gap in the market. Service businesses were drowning in missed calls, scattered leads, and repetitive admin work. Meanwhile, the tech industry was pushing "AI" as a magic wand without building the necessary plumbing to make it useful.
                </p>
                <p className="text-text-secondary leading-relaxed mb-4">
                  I personally design and build these systems. I don't believe in generic templates. Instead, I map out exactly how your business operates—where data goes, who needs to be notified, and what software you already use—and I build custom pipelines that connect your Voice Agents and Chatbots directly into your CRM and calendar.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  We operate as a remote-first technical partner. When you work with us, you aren't handed off to a massive account management team. You work directly with the people building your automation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Implementation Philosophy */}
      <section className="section-py bg-bg-alt">
        <div className="page-container max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-lg text-text-primary mb-4">How we build</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Our implementation philosophy is based on reliability, strict scoping, and measurable operational outcomes.</p>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <div className="card p-8 h-full border border-border bg-bg-base">
                <Search className="w-8 h-8 text-primary mb-4" />
                <h3 className="heading-sm text-text-primary mb-3">1. Deep Discovery</h3>
                <p className="text-text-secondary leading-relaxed text-sm">We document your exact current process before writing a single line of code. We need to know where the bottlenecks are and exactly what data needs to move where.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card p-8 h-full border border-border bg-bg-base">
                <Code2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="heading-sm text-text-primary mb-3">2. Custom Plumbing</h3>
                <p className="text-text-secondary leading-relaxed text-sm">AI models are smart, but they need instructions. We build custom API connections, webhooks, and n8n/Make workflows to ensure the AI can actually take action in your systems.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="card p-8 h-full border border-border bg-bg-base">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="heading-sm text-text-primary mb-3">3. Human Guardrails</h3>
                <p className="text-text-secondary leading-relaxed text-sm">We never let AI run completely unchecked. We design strict escalation paths so that if an edge-case occurs, the system smoothly hands the conversation over to your team.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Tools & Ongoing Support */}
      <section className="section-py bg-bg-base border-t border-border">
        <div className="page-container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection>
              <h3 className="heading-md text-text-primary mb-4 flex items-center gap-3">
                <Server className="w-6 h-6 text-accent" />
                Our Stack
              </h3>
              <p className="text-text-secondary mb-4">We are technology-agnostic but highly opinionated about reliability. We assemble the best tools for your specific workflow.</p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <strong>Logic & Workflows:</strong> n8n, Make.com, Zapier
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <strong>Conversational AI:</strong> Voiceflow, Retell, OpenAI, Anthropic
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <strong>Custom Backend:</strong> Next.js, Node.js, Vercel
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h3 className="heading-md text-text-primary mb-4 flex items-center gap-3">
                <Repeat className="w-6 h-6 text-primary" />
                Ongoing Support
              </h3>
              <p className="text-text-secondary mb-4">Automation isn't a "launch and leave" product. Businesses evolve, software updates, and edge-cases emerge.</p>
              <p className="text-text-secondary">
                We monitor your live workflows, review conversation transcripts, and push constant refinements to your prompts and routing logic. We act as your dedicated automation engineering partner for the long haul.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-py bg-bg-alt">
        <div className="page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-text-primary mb-6">Ready to solve operational bottlenecks?</h2>
            <p className="text-text-secondary mb-8 text-lg">Let's look at your current manual processes and see if a custom automation system makes sense.</p>
            <Link href="/contact" className="btn-primary-lg">
              Book a technical discovery <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
