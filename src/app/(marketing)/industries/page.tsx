import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { ArrowRight, Heart, Stethoscope, Scale, Building, Wrench, Dumbbell, ShoppingCart, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industry Solutions | Nexus Automation',
  description: 'AI automation solutions purpose-built for healthcare, dental, real estate, legal, fitness, home services, and e-commerce.',
}

const industries = [
  { slug: 'dental', icon: Stethoscope, title: 'Dental', desc: 'Recover missed calls, auto-fill cancellations, and automate patient reminders.', color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/50' },
  { slug: 'healthcare', icon: Heart, title: 'Healthcare', desc: 'Fill your schedule, reduce no-shows, and automate patient communication.', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'hover:border-blue-500/50' },
  { slug: 'legal', icon: Scale, title: 'Legal', desc: 'Automate intake calls, screen for case fit, and schedule consultations.', color: 'text-violet-500', bg: 'bg-violet-500/10', border: 'hover:border-violet-500/50' },
  { slug: 'real-estate', icon: Building, title: 'Real Estate', desc: 'Qualify leads instantly, schedule showings, and automate follow-up sequences.', color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'hover:border-amber-500/50' },
  { slug: 'home-services', icon: Wrench, title: 'Home Services', desc: 'Capture every quote request, schedule jobs, and send follow-up messages.', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'hover:border-orange-500/50' },
  { slug: 'fitness', icon: Dumbbell, title: 'Fitness', desc: 'Instant lead follow-up, trial booking automation, and membership renewal.', color: 'text-green-500', bg: 'bg-green-500/10', border: 'hover:border-green-500/50' },
  { slug: 'ecommerce', icon: ShoppingCart, title: 'E-commerce', desc: 'Handle support, recover abandoned carts, and automate post-purchase flows.', color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'hover:border-pink-500/50' },
  { slug: 'professional-services', icon: Briefcase, title: 'Professional Services', desc: 'Qualify inbound leads, book discovery calls, and automate client onboarding.', color: 'text-indigo-500', bg: 'bg-indigo-500/10', border: 'hover:border-indigo-500/50' },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <FloatingObjects count={8} className="opacity-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative z-10 page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">Built for your industry</h1>
            <p className="text-lg text-white/55">Generic automation doesn&apos;t work. We build custom-tailored automation solutions that fit the specific workflows of your industry.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container max-w-5xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className={`card block p-6 h-full transition-all duration-300 hover:-translate-y-1 border border-border ${ind.border} group`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${ind.bg} ${ind.color}`}>
                    <ind.icon className="w-6 h-6" />
                  </div>
                  <h2 className="heading-sm text-text-primary mb-3">{ind.title}</h2>
                  <p className="text-sm text-text-secondary mb-6">{ind.desc}</p>
                  <div className={`flex items-center gap-2 text-sm font-semibold transition-colors ${ind.color} opacity-80 group-hover:opacity-100`}>
                    View solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-20 text-center max-w-xl mx-auto p-8 rounded-2xl bg-bg-alt border border-border">
            <h3 className="heading-md text-text-primary mb-3">Don&apos;t see your industry?</h3>
            <p className="text-text-secondary mb-6">We build custom solutions tailored to your unique operational needs.</p>
            <Link href="/contact" className="btn-primary">
              Let&apos;s talk about your business
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
