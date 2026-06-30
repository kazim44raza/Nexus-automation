import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { Accordion } from '@/components/ui/Accordion'
import { Tilt3D } from '@/components/shared/Tilt3D'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ContactForm } from './ContactForm'

export interface ServicePageData {
  tag: string
  headline: string
  subheadline: string
  heroVisual: React.ReactNode
  benefits: { icon: React.ReactNode; title: string; description: string }[]
  steps: { number: string; title: string; description: string; detail?: string }[]
  metrics: { value: string; label: string; context: string }[]
  faqs: { question: string; answer: string }[]
  ctaTitle: string
  ctaDesc: string
}

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-dark pt-32 pb-20 overflow-hidden">
        <FloatingObjects count={7} className="opacity-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(2,132,199,0.3), transparent)' }} />
        <div className="relative z-10 page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-primary mb-5 inline-flex">{data.tag}</span>
              <h1 className="heading-display text-white mb-5 leading-tight">{data.headline}</h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8">{data.subheadline}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary-lg">
                  Book a Free Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/case-studies" className="btn-dark">See Case Studies</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {data.heroVisual}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      {/* Metrics */}
      <section className="section-py-sm bg-bg-alt border-b border-border">
        <div className="page-container">
          <div className="grid grid-cols-3 divide-x divide-border">
            {data.metrics.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center px-6">
                <div className="stat-value gradient-text-primary">{m.value}</div>
                <p className="font-semibold text-text-primary text-sm mt-1">{m.label}</p>
                <p className="text-xs text-text-muted mt-0.5">{m.context}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-py bg-bg-base">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <span className="section-eyebrow">Key Benefits</span>
            <h2 className="section-title max-w-2xl mx-auto mt-3">What you get with this service</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.benefits.map((b, i) => (
              <StaggerItem key={i}>
                <Tilt3D className="h-full rounded-2xl" max={7}>
                  <div className="card p-6 h-full">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary" style={{ transform: 'translateZ(28px)' }}>
                      {b.icon}
                    </div>
                    <h3 className="font-bold text-text-primary mb-2">{b.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{b.description}</p>
                  </div>
                </Tilt3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-py bg-bg-alt">
        <div className="page-container max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <span className="section-eyebrow">The Process</span>
            <h2 className="section-title mt-3">How it works</h2>
          </AnimatedSection>
          <StaggerContainer className="space-y-6">
            {data.steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-5 card p-6">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-extrabold text-primary text-sm">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">{step.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                    {step.detail && <p className="text-xs text-text-muted mt-2 bg-bg-alt rounded-lg px-3 py-2">{step.detail}</p>}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-bg-base">
        <div className="page-container max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title mt-3">Common questions</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion items={data.faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="section-py bg-bg-alt">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <span className="section-eyebrow">Get Started</span>
              <h2 className="section-title mt-3 max-w-md">{data.ctaTitle}</h2>
              <p className="section-desc mt-4">{data.ctaDesc}</p>
              <div className="mt-6 space-y-3">
                {['Free discovery call — no obligation', 'Live demo of your specific use case', 'Clear ROI estimate before you commit'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
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
