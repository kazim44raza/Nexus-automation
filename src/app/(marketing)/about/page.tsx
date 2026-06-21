import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { ArrowRight, Zap, Target, Heart, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Nexus Automation — Our Story, Mission & Team',
  description: 'Learn about Nexus Automation — the AI automation agency helping 120+ businesses capture more leads, book more appointments, and scale without hiring.',
}

const values = [
  { icon: <Target className="w-5 h-5" />, title: 'Results First', description: 'We measure success by your business outcomes, not by the technology we deploy. Every system is built with a clear ROI target.' },
  { icon: <Heart className="w-5 h-5" />, title: 'Long-Term Partnership', description: 'We\'re not a one-time vendor. We\'re your automation partner — monitoring, optimizing, and improving your systems as your business grows.' },
  { icon: <Zap className="w-5 h-5" />, title: 'Move Fast', description: 'Most clients are live within 10 business days. Speed matters in business — we don\'t drag out implementations that could go live this week.' },
  { icon: <Globe className="w-5 h-5" />, title: 'Honest Advice', description: 'If automation won\'t help you, we\'ll tell you. We\'d rather walk away from a sale than deploy something that doesn\'t deliver.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% -10%, rgba(13,148,136,0.3), transparent)' }} />
        <div className="relative page-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="badge-primary mb-6 inline-flex">Our Story</span>
            <h1 className="heading-display text-white mb-6">We help businesses run without manual work</h1>
            <p className="text-lg text-white/55 leading-relaxed">
              Nexus Automation was founded on a simple observation: businesses spend enormous amounts of time and money on work that could — and should — be automated. We exist to fix that.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      {/* Mission */}
      <section className="section-py bg-bg-base">
        <div className="page-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="section-title mt-3">Every business deserves enterprise-grade automation</h2>
              <p className="text-text-secondary mt-4 leading-relaxed">
                Large enterprises have had access to sophisticated automation for years. Smaller businesses — dental practices, real estate agencies, legal firms, healthcare providers — were left behind.
              </p>
              <p className="text-text-secondary mt-3 leading-relaxed">
                We're changing that. We build the same caliber of AI systems for SMBs that Fortune 500 companies use — at a fraction of the cost, deployed in days, not months.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '120+', label: 'Businesses Served' },
                  { value: '$2.4M+', label: 'Revenue Recovered' },
                  { value: '98%', label: 'Client Retention' },
                  { value: '< 10 days', label: 'Avg Time to Live' },
                ].map((stat, i) => (
                  <div key={i} className="card p-5 text-center">
                    <div className="stat-value gradient-text-primary">{stat.value}</div>
                    <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-bg-alt">
        <div className="page-container">
          <AnimatedSection className="text-center mb-12">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title max-w-xl mx-auto mt-3">How we think and work</h2>
          </AnimatedSection>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className="card p-6 h-full">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">{v.icon}</div>
                  <h3 className="font-bold text-text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-bg-base">
        <div className="page-container text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-text-primary mb-4">Ready to work with us?</h2>
            <p className="text-text-secondary mb-8">Book a free discovery call and let's talk about your business.</p>
            <Link href="/contact" className="btn-primary-lg">
              Book a Free Call <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
