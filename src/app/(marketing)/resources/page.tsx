import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { Download, BookOpen, Video, Calculator, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources — Automation Guides & Tools | Nexus Automation',
  description: 'Free guides, calculators, and resources to help you understand AI automation for your business.',
}

const resources = [
  { icon: <Download className="w-5 h-5" />, type: 'Guide', title: 'The SMB Automation Playbook', desc: 'A step-by-step guide to identifying and automating the 10 workflows every small business should tackle first.', color: 'text-primary bg-primary/10', cta: 'Download Free Guide' },
  { icon: <Calculator className="w-5 h-5" />, type: 'Calculator', title: 'Missed Revenue Calculator', desc: 'Calculate exactly how much revenue you\'re leaving on the table from missed calls and slow lead follow-up.', color: 'text-accent bg-accent/10', cta: 'Calculate My ROI' },
  { icon: <BookOpen className="w-5 h-5" />, type: 'Case Study Pack', title: '6 Industry Case Studies', desc: 'Real results from healthcare, real estate, dental, legal, fitness, and e-commerce — with full implementation details.', color: 'text-warm bg-warm/10', cta: 'Get Case Studies' },
  { icon: <Video className="w-5 h-5" />, type: 'Video', title: 'AI Chatbot Demo Library', desc: 'Watch real AI chatbot conversations across different industries and use cases. See exactly how they handle objections.', color: 'text-sky-600 bg-sky-500/10', cta: 'Watch Demos' },
]

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-bg-base pt-32 pb-20 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="relative page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-text-primary mb-4">Free Automation Resources</h1>
            <p className="text-lg text-text-secondary">Guides, calculators, and tools to help you understand how AI automation can grow your business — no sales pitch required.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container">
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {resources.map((r, i) => (
              <StaggerItem key={i}>
                <div className="card card-hover p-6 h-full flex flex-col bg-white">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${r.color}`}>{r.icon}</div>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">{r.type}</span>
                  <h2 className="heading-md text-text-primary mb-2">{r.title}</h2>
                  <p className="text-sm text-text-secondary flex-1 mb-5">{r.desc}</p>
                  <Link href="/contact" className="btn-secondary text-sm">
                    {r.cta} <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
