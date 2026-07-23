import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { SolutionsGrid } from '@/components/marketing/SolutionsGrid'
import { InteractiveSystemMap } from './client'

export const metadata: Metadata = {
  title: 'AI Automation Solutions | Nexus Automation',
  description: 'Find the right automation system for your business. Explore our library of AI automation solutions for lead capture, appointment booking, and more.',
}

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-bg-base pt-32 pb-20 relative overflow-hidden border-b border-border">
        <FloatingObjects count={5} className="opacity-40" />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="relative z-10 page-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <span className="badge-accent mb-5 inline-flex">Interactive Library</span>
            <h1 className="heading-display text-text-primary mb-4">Design your ideal workflow</h1>
            <p className="text-lg text-text-secondary mb-8">Select your primary operational goal to see how our AI systems map to your specific bottlenecks.</p>
          </AnimatedSection>
        </div>
        
        <div className="page-container relative z-10">
           <InteractiveSystemMap />
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="page-container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-text-primary mb-4">Detailed Solutions Library</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Deep dive into specific implementations and capabilities of each automation module.</p>
          </div>
          <SolutionsGrid />
        </div>
      </section>
    </>
  )
}
