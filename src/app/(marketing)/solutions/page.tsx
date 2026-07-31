import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { SolutionsGrid } from '@/components/marketing/SolutionsGrid'
import { InteractiveSystemMap } from './client'

export const metadata: Metadata = {
  title: 'AI Automation Solutions',
  description: 'Find the right automation system for your business. Explore our library of AI automation solutions for lead capture, appointment booking, and more.',
}

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-bg-base pt-32 pb-20 relative overflow-hidden border-b border-border/30">
        <div className="relative z-10 page-container max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-widest text-text-muted mb-6 block font-semibold">Interactive Library</span>
            <h1 className="font-display text-5xl md:text-7xl text-text-primary mb-6 leading-tight">Design your ideal workflow</h1>
            <p className="text-xl text-text-secondary mb-12 font-light max-w-2xl">Select your primary operational goal to see how our AI systems map to your specific bottlenecks.</p>
          </AnimatedSection>
        </div>
        
        <div className="page-container relative z-10">
           <InteractiveSystemMap />
        </div>
      </section>

      <section className="py-24 bg-bg-surface">
        <div className="page-container max-w-7xl mx-auto">
          <div className="mb-20 md:w-2/3 border-l border-accent-primary/30 pl-8">
            <h2 className="font-display text-4xl text-text-primary mb-4">Detailed Solutions Library</h2>
            <p className="text-lg text-text-secondary font-light max-w-2xl">Deep dive into specific implementations and capabilities of each automation module. Built for scale, designed for precision.</p>
          </div>
          <SolutionsGrid />
        </div>
      </section>
    </>
  )
}
