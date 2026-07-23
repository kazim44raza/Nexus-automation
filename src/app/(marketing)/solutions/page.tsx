import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'
import { SolutionsGrid } from '@/components/marketing/SolutionsGrid'

export const metadata: Metadata = {
  title: 'AI Automation Solutions | Nexus Automation',
  description: 'Find the right automation system for your business. Explore our library of AI automation solutions for lead capture, appointment booking, and more.',
}

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <FloatingObjects count={8} className="opacity-50" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative z-10 page-container text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">Solutions for every business challenge</h1>
            <p className="text-lg text-white/55">Explore our Automation System Library to find the right AI systems to solve your specific operational bottlenecks.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container max-w-7xl mx-auto">
          <SolutionsGrid />
        </div>
      </section>
    </>
  )
}
