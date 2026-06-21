import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { ContactForm } from '@/components/marketing/ContactForm'
import { Mail, Clock, Globe, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Nexus Automation — Book a Free Demo',
  description: 'Get in touch with Nexus Automation. Book a free discovery call or send us a message. We respond within 1 business day.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% -10%, rgba(13,148,136,0.3), transparent)' }} />
        <div className="relative page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">Let's talk about your automation</h1>
            <p className="text-lg text-white/55">Fill out the form below or book a call directly. We typically respond within 4 hours.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container">
          <div className="grid lg:grid-cols-[1fr,480px] gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="card p-8">
                <h2 className="heading-md text-text-primary mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1} className="space-y-5">
              <div className="card p-6">
                <h3 className="font-bold text-text-primary mb-4">Or book directly</h3>
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/nexus-automation'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free 30-Min Call
                </a>
                <p className="text-xs text-text-muted text-center mt-3">No commitment · Strategy call · Real advice</p>
              </div>

              <div className="card p-6 space-y-4">
                <h3 className="font-bold text-text-primary mb-2">Contact info</h3>
                {[
                  { icon: <Mail className="w-4 h-4 text-primary" />, label: 'Email', value: 'hello@nexusautomation.ai' },
                  { icon: <Clock className="w-4 h-4 text-accent" />, label: 'Response time', value: 'Within 1 business day' },
                  { icon: <Globe className="w-4 h-4 text-warm" />, label: 'Location', value: 'Remote-first · Worldwide' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bg-alt rounded-lg flex items-center justify-center">{item.icon}</div>
                    <div>
                      <p className="text-xs text-text-muted">{item.label}</p>
                      <p className="text-sm font-semibold text-text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
