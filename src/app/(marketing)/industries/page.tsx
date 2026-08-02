import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { IndustryShowcase } from './client'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Workflow Automation by Industry',
  description: 'Explore practical workflow automation patterns for healthcare, dental, real estate, legal, fitness, automotive, home services, e-commerce, and professional services.',
  path: '/industries',
})

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="relative z-10 page-container text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <h1 className="heading-display text-white mb-4">Built for your specific workflows</h1>
            <p className="text-lg text-white/60 mb-8">Generic automation breaks. We build custom-tailored automation solutions designed to fit seamlessly into the specific operations of your industry.</p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py bg-bg-base">
        <div className="page-container max-w-7xl mx-auto">
          <IndustryShowcase />

          <AnimatedSection className="mt-32 text-center max-w-2xl mx-auto p-12 rounded-3xl bg-bg-surface border border-border shadow-sm">
            <h3 className="heading-md text-text-primary mb-4">Don&apos;t see your industry?</h3>
            <p className="text-text-secondary mb-8 text-lg">We build custom automation systems tailored to any unique operational workflow.</p>
            <Link href="/contact" className="btn-primary">
              Let&apos;s map your workflow
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
