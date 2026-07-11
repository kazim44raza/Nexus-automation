'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { AutomationPipeline } from './AutomationPipeline'

// Real WebGL — client-only, lazy-loaded so it never blocks first paint or SSR.
const WaveField = dynamic(() => import('./WaveField').then(m => m.WaveField), {
  ssr: false,
  loading: () => null,
})

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-bg-dark overflow-hidden flex flex-col justify-center pt-16">
      {/* Static gradient fallback — always visible, also the backdrop if WebGL is unavailable */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(2,132,199,0.26), transparent)',
      }} />
      <div className="absolute inset-0 bg-dot-pattern opacity-15" />

      {/* 3D flowing wave field */}
      <div className="absolute inset-0 z-0">
        <WaveField />
      </div>

      {/* Readability scrim — keeps headline crisp over the moving surface */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 55% at 50% 38%, rgba(11,18,32,0.80) 0%, rgba(11,18,32,0.38) 45%, transparent 72%)',
      }} />

      <div className="relative z-10 page-container py-20 lg:py-28">
        <div className="text-center max-w-5xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-accent-light rounded-full animate-pulse" />
            <span className="text-primary-light text-xs font-semibold tracking-wide">AI Automation Agency · Built for Service Businesses</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-white mb-6 leading-[1.08]"
          >
            Your Business,{' '}
            <span className="bg-gradient-to-r from-primary-light via-sky-300 to-accent-light bg-clip-text text-transparent">
              Running on Autopilot
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build AI chatbots, voice agents, and automation systems that capture leads, book appointments, and follow up — 24/7, without you lifting a finger.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link href="/contact" className="btn-primary-lg">
              Book a Free Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/case-studies" className="btn-dark">
              <Play className="w-4 h-4" />
              See Case Studies
            </Link>
          </motion.div>

          {/* Automation Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AutomationPipeline />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade — sits above the wave, blends into the page */}
      <div className="absolute bottom-0 inset-x-0 h-40 z-[2] bg-gradient-to-t from-bg-base via-bg-dark/40 to-transparent" />
    </section>
  )
}
