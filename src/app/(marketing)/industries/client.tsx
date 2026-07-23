'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Stethoscope, Scale, Building, Wrench, Dumbbell, ShoppingCart, Briefcase, Heart } from 'lucide-react'

const industries = [
  { 
    slug: 'dental', 
    icon: Stethoscope, 
    title: 'Dental', 
    desc: 'Recover missed calls, auto-fill cancellations, and automate patient reminders.',
    workflow: [
      { step: 'Patient calls during busy hours' },
      { step: 'AI answers & offers times' },
      { step: 'Appointment booked in PMS' }
    ]
  },
  { 
    slug: 'legal', 
    icon: Scale, 
    title: 'Legal', 
    desc: 'Automate intake calls, screen for case fit, and schedule consultations.',
    workflow: [
      { step: 'Web inquiry submitted' },
      { step: 'AI screens case type' },
      { step: 'Intake summary sent to attorney' }
    ]
  },
  { 
    slug: 'real-estate', 
    icon: Building, 
    title: 'Real Estate', 
    desc: 'Qualify leads instantly, schedule showings, and automate follow-up sequences.',
    workflow: [
      { step: 'Lead asks about listing' },
      { step: 'AI qualifies budget/timeline' },
      { step: 'Showing scheduled automatically' }
    ]
  },
  { 
    slug: 'home-services', 
    icon: Wrench, 
    title: 'Home Services', 
    desc: 'Capture every quote request, schedule jobs, and send follow-up messages.',
    workflow: [
      { step: 'Customer texts for quote' },
      { step: 'AI gathers project details' },
      { step: 'Estimate generated & sent' }
    ]
  },
  { 
    slug: 'healthcare', 
    icon: Heart, 
    title: 'Healthcare', 
    desc: 'Fill your schedule, reduce no-shows, and automate patient communication.',
    workflow: [
      { step: 'Patient needs appointment' },
      { step: 'AI checks EMR availability' },
      { step: 'Visit confirmed & reminders set' }
    ]
  },
  { 
    slug: 'ecommerce', 
    icon: ShoppingCart, 
    title: 'E-commerce', 
    desc: 'Handle support, recover abandoned carts, and automate post-purchase flows.',
    workflow: [
      { step: 'Shopper abandons cart' },
      { step: 'AI sends personalized offer' },
      { step: 'Sale recovered & tracked' }
    ]
  }
]

export function IndustryShowcase() {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeInd = industries[activeIdx]

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
      {/* List */}
      <div className="lg:col-span-5 space-y-2">
        {industries.map((ind, idx) => {
          const isActive = activeIdx === idx
          const Icon = ind.icon
          return (
            <button
              key={ind.slug}
              onClick={() => setActiveIdx(idx)}
              className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 ${
                isActive ? 'bg-white shadow-md border border-border' : 'hover:bg-black/5 border border-transparent'
              }`}
            >
              <div className={`mt-1 p-2 rounded-xl shrink-0 transition-colors ${isActive ? 'bg-text-primary text-white' : 'bg-black/5 text-text-secondary'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>{ind.title}</h3>
                <p className={`text-sm ${isActive ? 'text-text-secondary' : 'text-text-muted hidden md:block'}`}>{ind.desc}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Diorama */}
      <div className="lg:col-span-7 sticky top-24">
        <div className="bg-bg-base border border-border rounded-3xl p-8 md:p-12 min-h-[450px] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-radial-gradient from-accent/5 to-transparent opacity-50" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInd.slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col h-full"
            >
              <div className="mb-8">
                <span className="badge-accent mb-4 inline-flex">{activeInd.title} Workflow</span>
                <h3 className="heading-md text-text-primary mb-2">Example Scenario</h3>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-6">
                {activeInd.workflow.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center font-bold text-text-primary shadow-sm z-10 relative">
                      {i + 1}
                      {i < activeInd.workflow.length - 1 && (
                        <div className="absolute top-10 left-1/2 w-px h-8 bg-border -translate-x-1/2" />
                      )}
                    </div>
                    <div className="bg-white border border-border rounded-xl p-4 shadow-sm flex-1">
                      <p className="font-medium text-text-primary">{step.step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-6 border-t border-border flex justify-end">
                 <Link href={`/industries/${activeInd.slug}`} className="flex items-center gap-2 text-sm font-semibold text-text-primary hover:text-accent transition-colors">
                    Explore {activeInd.title} Solutions <ArrowRight className="w-4 h-4" />
                 </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
