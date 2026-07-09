import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { FloatingObjects } from '@/components/shared/FloatingObjects'

export function CTASection() {
  return (
    <section className="section-py bg-bg-dark relative overflow-hidden">
      {/* 3D floating geometry */}
      <FloatingObjects count={10} className="opacity-90" />

      {/* Glows + readability scrim */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(2,132,199,0.28), transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(11,18,32,0.72) 0%, rgba(11,18,32,0.25) 55%, transparent 78%)' }} />

      <div className="relative z-10 page-container text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/80 tracking-wide uppercase mb-6">
            Free Discovery Call — No Commitment
          </span>
          <h2 className="heading-display text-white mb-6 max-w-3xl mx-auto">
            See how much revenue automation can recover for your business
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            In 30 minutes, we&apos;ll map your biggest automation opportunities and show you exactly what we&apos;d build for you — with a clear ROI estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn bg-white text-primary-dark font-bold px-8 py-4 text-base rounded-xl hover:bg-white/90 hover:-translate-y-0.5 shadow-lg transition-all duration-200">
              <Calendar className="w-5 h-5" />
              Book My Free Strategy Call
            </Link>
            <Link href="/case-studies" className="btn-dark text-base px-8 py-4">
              See Results First
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-white/30 text-xs mt-6">No sales pressure · 30-minute call · Actionable insights guaranteed</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
