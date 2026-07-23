import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { Download, BookOpen, Video, Calculator, ArrowRight, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources — Automation Guides & Tools | Nexus Automation',
  description: 'Free guides, calculators, and resources to help you understand AI automation for your business.',
}

const resources = [
  { 
    icon: <BookOpen className="w-5 h-5" />, 
    type: 'Concept Library', 
    title: '6 Industry Automation Scenarios', 
    desc: 'Explore example workflows, before/after process views, and projected outcomes for healthcare, real estate, dental, legal, e-commerce, and fitness.', 
    color: 'text-accent bg-accent/10', 
    cta: 'View Scenarios',
    link: '/case-studies'
  },
  { 
    icon: <Lightbulb className="w-5 h-5" />, 
    type: 'Interactive Map', 
    title: 'Automation Solutions Map', 
    desc: 'Choose your primary business goal and see a visual map of the AI systems that solve that specific bottleneck.', 
    color: 'text-primary bg-primary/10', 
    cta: 'Explore Solutions',
    link: '/solutions'
  },
  { 
    icon: <Video className="w-5 h-5" />, 
    type: 'Video', 
    title: 'AI Chatbot Demo Library', 
    desc: 'Watch real AI chatbot conversations across different industries and use cases. See exactly how they handle objections.', 
    color: 'text-sky-600 bg-sky-500/10', 
    cta: 'Coming Soon',
    link: '#'
  },
  { 
    icon: <Calculator className="w-5 h-5" />, 
    type: 'Calculator', 
    title: 'Missed Revenue Calculator', 
    desc: 'Calculate exactly how much revenue you\'re leaving on the table from missed calls and slow lead follow-up.', 
    color: 'text-warm bg-warm/10', 
    cta: 'Coming Soon',
    link: '#'
  },
]

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative page-container text-center max-w-2xl mx-auto z-10">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">Automation Resources</h1>
            <p className="text-lg text-white/60">Workflows, interactive maps, and tools to help you understand how AI automation can scale your operations.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container">
          <StaggerContainer className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {resources.map((r, i) => (
              <StaggerItem key={i}>
                <div className="card card-hover p-8 h-full flex flex-col bg-white border border-border rounded-3xl shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${r.color}`}>{r.icon}</div>
                  <span className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">{r.type}</span>
                  <h2 className="heading-md text-text-primary mb-3">{r.title}</h2>
                  <p className="text-base text-text-secondary flex-1 mb-8 leading-relaxed">{r.desc}</p>
                  
                  {r.link === '#' ? (
                     <span className="inline-flex items-center gap-2 text-text-muted font-medium text-sm">
                       {r.cta}
                     </span>
                  ) : (
                     <Link href={r.link} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm">
                       {r.cta} <ArrowRight className="w-4 h-4" />
                     </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
