'use client'

import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

interface StatProps {
  value: string
  suffix?: string
  label: string
  description: string
}

const stats: StatProps[] = [
  { value: '40', suffix: '%', label: 'More Qualified Leads', description: 'Average increase across all clients' },
  { value: '60', suffix: '%', label: 'Fewer No-Shows', description: 'With automated appointment reminders' },
  { value: '80', suffix: '%', label: 'Missed Calls Recovered', description: 'Turned into booked appointments' },
  { value: '24', suffix: '/7', label: 'Always On', description: 'Zero downtime, instant responses' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="stat-value gradient-text-primary">
      {count}{suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="section-py-sm bg-bg-alt border-y border-border">
      <div className="page-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center">
              <AnimatedCounter
                target={parseInt(stat.value)}
                suffix={stat.suffix ?? ''}
              />
              <p className="font-semibold text-text-primary text-sm mt-2">{stat.label}</p>
              <p className="text-xs text-text-muted mt-1">{stat.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
