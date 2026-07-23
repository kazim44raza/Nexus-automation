'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { CheckCircle2, HeartPulse, Home, Scale, Smile, Dumbbell, ShoppingCart } from 'lucide-react'

const industries = [
  {
    label: 'Healthcare',
    icon: HeartPulse,
    headline: 'Fill your appointment calendar automatically',
    description: "Healthcare providers miss 30–40% of new patient calls. Our AI answers every call, qualifies the patient, and books them directly into your schedule — 24/7.",
    wins: ['Answer 100% of patient calls', 'Automate appointment reminders', 'Automate insurance pre-screening', 'HIPAA-compliant workflows'],
    result: 'Increased patient intake volume',
  },
  {
    label: 'Real Estate',
    icon: Home,
    headline: 'Qualify leads before your agents pick up the phone',
    description: "Real estate is a volume game. Our AI instantly qualifies every inquiry, filters out tire-kickers, and books showings directly for your agents.",
    wins: ['Qualify leads at 2AM', 'Auto-schedule viewings', 'CRM auto-update on every call', 'Instant follow-up texts'],
    result: 'Decreased lead response time to seconds',
  },
  {
    label: 'Legal',
    icon: Scale,
    headline: 'Never miss a high-value consultation request',
    description: "Legal clients expect immediate responses. Our AI handles intake calls, screens for case fit, and schedules consultations — freeing your attorneys for billable work.",
    wins: ['24/7 intake qualification', 'Conflict-check screening', 'Automated consultation booking', 'CRM sync & follow-up'],
    result: 'Consistent 24/7 intake process',
  },
  {
    label: 'Dental',
    icon: Smile,
    headline: 'A full appointment book, managed by AI',
    description: "Dental practices lose thousands per week to unanswered phones and no-shows. Our system fills cancellations automatically and reminds patients before they forget.",
    wins: ['Auto-fill cancellations', '3x reminder sequences', 'New patient onboarding flow', 'Insurance verification automation'],
    result: 'Automated cancellation recovery',
  },
  {
    label: 'Fitness',
    icon: Dumbbell,
    headline: 'Convert more gym inquiries into paying members',
    description: "Fitness businesses get hundreds of inquiries but convert a fraction. Our AI follows up instantly, handles objections, and books free trials automatically.",
    wins: ['Instant lead follow-up', 'Free trial booking flow', 'Membership renewal sequences', 'Class waitlist automation'],
    result: 'Automated lead follow-up sequence',
  },
  {
    label: 'E-Commerce',
    icon: ShoppingCart,
    headline: 'Support thousands of customers without growing your team',
    description: "E-commerce support is relentless. Our AI handles order tracking, returns, FAQs, and complaints — resolving routine tickets without a human.",
    wins: ['Order status automation', 'Returns & refund handling', 'Product recommendation AI', 'Abandoned cart recovery'],
    result: 'Faster ticket resolution time',
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
            {industries.map((item, i) => {
              const TabIcon = item.icon
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    active === i
                      ? 'bg-primary text-white shadow-primary-sm'
                      : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-primary/30'
                  }`}
                >
                  <TabIcon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </button>
              )
            })}
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
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                <ind.icon className="w-6 h-6" />
              </div>
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
                <p className="text-sm font-semibold text-accent-dark">Typical result: {ind.result}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
