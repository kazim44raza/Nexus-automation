'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Owner',
    company: 'Chen Family Medical',
    industry: 'Healthcare',
    content: "We were losing $8,000+ a month in missed after-hours calls. Nexus set up an AI voice agent in less than a week. Now every call gets answered, patients get booked, and I wake up to a full schedule. Genuinely life-changing for my practice.",
    rating: 5,
    result: '+23 new patients in month 1',
  },
  {
    name: 'James Whitfield',
    role: 'Broker / Owner',
    company: 'HomeEdge Realty',
    industry: 'Real Estate',
    content: "My agents were spending hours on unqualified leads. Nexus built a qualification bot that screens every inquiry before it reaches my team. We closed 8 extra deals last quarter that we would have dropped before.",
    rating: 5,
    result: '8 additional closings in Q3',
  },
  {
    name: 'Marcus Foster',
    role: 'Managing Partner',
    company: 'Foster & Associates Law',
    industry: 'Legal',
    content: "We missed consultations because staff were overwhelmed with intake calls. The AI handles intake 24/7, screens for case fit, and books directly into our calendar. Our conversion rate went from 28% to 61%.",
    rating: 5,
    result: '+45% consultation conversions',
  },
  {
    name: 'Priya Nair',
    role: 'Founder',
    company: 'NairDental Group',
    industry: 'Dental',
    content: "The missed call text follow-up alone paid for the entire service in month one. We automatically recover patients who couldn't reach us during the day. Plus our no-show rate dropped from 22% to under 8%.",
    rating: 5,
    result: '$12k/month in recovered revenue',
  },
  {
    name: 'Alex Tran',
    role: 'Head of Operations',
    company: 'ShopNova',
    industry: 'E-Commerce',
    content: "We were drowning in support tickets — 400+ per day. Nexus built an AI support agent that handles order tracking, returns, and FAQs automatically. 80% of tickets are resolved without human touch. Our team finally has capacity to grow.",
    rating: 5,
    result: '65% reduction in support costs',
  },
  {
    name: 'Taylor Brooks',
    role: 'CEO',
    company: 'FitLife Studio Network',
    industry: 'Fitness',
    content: "Our sales team was manually following up with every trial lead. Now the AI follows up instantly, handles objections, and books trials automatically. Our trial-to-member conversion doubled — and we haven't added a single sales rep.",
    rating: 5,
    result: '2x trial-to-member conversion',
  },
]

export function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const next = () => setIdx(i => (i + 1) % testimonials.length)

  useEffect(() => {
    timeoutRef.current = setInterval(next, 5000)
    return () => clearInterval(timeoutRef.current)
  }, [])

  const t = testimonials[idx]

  return (
    <section className="section-py bg-bg-dark overflow-hidden relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="relative page-container">
        <AnimatedSection className="text-center mb-12">
          <span className="section-eyebrow text-primary-light">Social Proof</span>
          <h2 className="section-title text-white max-w-xl mx-auto mt-3">
            Results our clients actually talk about
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="card-dark p-8 sm:p-10 text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-warm text-warm" />
              ))}
            </div>

            <blockquote className="text-white/85 text-lg leading-relaxed mb-8 italic">
              "{t.content}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary-light font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}, {t.company}</p>
              </div>
              <div className="ml-4 bg-accent/20 border border-accent/30 rounded-full px-3 py-1">
                <span className="text-accent-light text-xs font-semibold">{t.result}</span>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIdx(i); clearInterval(timeoutRef.current) }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-primary-light w-6' : 'bg-white/20 w-1.5'}`}
              />
            ))}
          </div>
        </div>

        {/* Side cards for desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-4 mt-10">
          {[0, 1, 2].map(offset => {
            const t2 = testimonials[(idx + offset + 1) % testimonials.length]
            return (
              <div key={offset} className="card-dark p-5 opacity-40 hover:opacity-60 transition-opacity cursor-pointer" onClick={() => setIdx((idx + offset + 1) % testimonials.length)}>
                <p className="text-white text-xs leading-relaxed line-clamp-3">"{t2.content}"</p>
                <p className="text-white/40 text-xs mt-2">{t2.name} · {t2.company}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
