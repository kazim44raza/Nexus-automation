'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { CheckCircle2 } from 'lucide-react'

const industries = [
  {
    label: 'Healthcare',
    emoji: '🏥',
    headline: 'Fill your appointment calendar automatically',
    description: "Healthcare providers miss 30–40% of new patient calls. Our AI answers every call, qualifies the patient, and books them directly into your schedule — 24/7.",
    wins: ['Answer 100% of patient calls', 'Reduce no-shows by 60%', 'Automate insurance pre-screening', 'HIPAA-compliant workflows'],
    result: 'Dr. Sarah Chen added 23 new patients in month one',
  },
  {
    label: 'Real Estate',
    emoji: '🏡',
    headline: 'Qualify leads before your agents pick up the phone',
    description: "Real estate is a volume game. Our AI instantly qualifies every inquiry, filters out tire-kickers, and books showings directly for your agents.",
    wins: ['Qualify leads at 2AM', 'Auto-schedule viewings', 'CRM auto-update on every call', 'Instant follow-up texts'],
    result: 'HomeEdge Realty closed 8 extra deals in Q3',
  },
  {
    label: 'Legal',
    emoji: '⚖️',
    headline: 'Never miss a high-value consultation request',
    description: "Legal clients expect immediate responses. Our AI handles intake calls, screens for case fit, and schedules consultations — freeing your attorneys for billable work.",
    wins: ['24/7 intake qualification', 'Conflict-check screening', 'Automated consultation booking', 'CRM sync & follow-up'],
    result: 'Foster Law increased consults by 45% without new hires',
  },
  {
    label: 'Dental',
    emoji: '🦷',
    headline: 'A full appointment book, managed by AI',
    description: "Dental practices lose thousands per week to unanswered phones and no-shows. Our system fills cancellations automatically and reminds patients before they forget.",
    wins: ['Auto-fill cancellations', '3x reminder sequences', 'New patient onboarding flow', 'Insurance verification automation'],
    result: 'Bright Smile Dental added $12k/month in recovered revenue',
  },
  {
    label: 'Fitness',
    emoji: '💪',
    headline: 'Convert more gym inquiries into paying members',
    description: "Fitness businesses get hundreds of inquiries but convert a fraction. Our AI follows up instantly, handles objections, and books free trials automatically.",
    wins: ['Instant lead follow-up', 'Free trial booking flow', 'Membership renewal sequences', 'Class waitlist automation'],
    result: 'FitLife Studio doubled their trial-to-member conversion',
  },
  {
    label: 'E-Commerce',
    emoji: '🛒',
    headline: 'Support thousands of customers without growing your team',
    description: "E-commerce support is relentless. Our AI handles order tracking, returns, FAQs, and complaints — resolving 80% of tickets without a human.",
    wins: ['Order status automation', 'Returns & refund handling', 'Product recommendation AI', 'Abandoned cart recovery'],
    result: 'ShopNova reduced support costs by 65%',
  },
]

export function IndustriesSection() {
  const [active, setActive] = useState(0)
  const ind = industries[active]

  return (
    <section className="section-py bg-bg-alt">
      <div className="page-container">
        <AnimatedSection className="text-center mb-12">
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="section-title max-w-2xl mx-auto">
            Built for your specific industry
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-[280px,1fr] gap-6">
          {/* Tab list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar">
            {industries.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                  active === i
                    ? 'bg-primary text-white shadow-primary-sm'
                    : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-primary/30'
                }`}
              >
                <span>{ind.emoji}</span>
                {ind.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="card p-8"
            >
              <span className="text-3xl mb-4 block">{ind.emoji}</span>
              <h3 className="heading-lg text-text-primary mb-3">{ind.headline}</h3>
              <p className="text-text-secondary leading-relaxed mb-6">{ind.description}</p>

              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {ind.wins.map((win, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-text-primary">{win}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/8 border border-accent/20 rounded-xl px-5 py-4">
                <p className="text-sm font-semibold text-accent-dark">✓ Real result: {ind.result}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
