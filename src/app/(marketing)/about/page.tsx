import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { ArrowRight, Wrench, BarChart, Users, Repeat, Globe, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Nexus Automation | AI Automation Agency',
  description: 'We help businesses run without manual work by building practical AI automation systems.',
}

const principles = [
  { icon: Wrench, title: 'Practical Automation', description: 'We build systems that solve real problems, not technology for technology\'s sake. Every automation is tied to a core business workflow.' },
  { icon: BarChart, title: 'Measurable Impact', description: 'Every system we build targets specific, trackable operational improvements. We want you to see the ROI clearly.' },
  { icon: Users, title: 'Human Escalation', description: 'AI handles routine work. Humans handle what matters. We design clear handoff points so your team is always in the loop when needed.' },
  { icon: Repeat, title: 'Ongoing Optimization', description: 'We don\'t launch and leave. We monitor, refine, and expand your automation systems as your business grows and changes.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative page-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-6">We help businesses run without manual work</h1>
            <p className="text-lg text-white/55 leading-relaxed">
              We observed that businesses spend enormous amounts of time and money on repetitive communication and data tasks. We exist to build automation systems that fix this.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-text-primary mb-6">Why we exist</h2>
            <div className="prose prose-lg prose-neutral dark:prose-invert">
              <p className="text-text-secondary leading-relaxed mb-4">
                <strong>The problem:</strong> Most businesses are bottlenecked by manual processes. Teams spend hours every week answering routine questions, copying data between tools, chasing leads, and managing schedules. This leads to burned-out employees, dropped balls, and lost revenue.
              </p>
              <p className="text-text-secondary leading-relaxed">
                <strong>The solution:</strong> We build practical AI automation systems designed around your specific workflows. We connect your tools, train AI to handle the repetitive tasks, and set up reliable systems that work 24/7 without taking a break.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-py bg-bg-alt">
        <div className="page-container max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="heading-lg text-text-primary">Our approach</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <StaggerItem key={i}>
                <div className="card p-8 h-full bg-bg-base border border-border flex gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex-shrink-0 flex items-center justify-center text-primary">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="heading-sm text-text-primary mb-3">{p.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-text-primary mb-8 text-center">How we work</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6 border border-border">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h3 className="heading-sm text-text-primary mb-2">Remote-first & Worldwide</h3>
                <p className="text-text-secondary">We are a remote agency working with clients globally. Our processes are designed for seamless asynchronous communication and clear deliverables.</p>
              </div>
              <div className="card p-6 border border-border">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="heading-sm text-text-primary mb-2">Technology-Agnostic</h3>
                <p className="text-text-secondary">We don't force you into a specific software stack. We evaluate your current setup and use the right tools that fit your business needs best.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-py bg-bg-alt">
        <div className="page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-text-primary mb-6">Ready to automate?</h2>
            <p className="text-text-secondary mb-8 text-lg">Let's talk about the operational bottlenecks in your business and see if we can help.</p>
            <Link href="/contact" className="btn-primary-lg">
              Let's talk <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
