'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Phone, Bot, CheckCircle, Calendar, TrendingUp } from 'lucide-react'

const nodes = [
  {
    id: 'call',
    icon: Phone,
    label: 'Missed Call',
    sublabel: '+1 (555) 094-2841',
    color: '#0EA5E9',
    bg: 'bg-primary/10 border-primary/20',
    iconColor: 'text-primary',
    count: '847',
    countLabel: 'calls/mo',
  },
  {
    id: 'ai',
    icon: Bot,
    label: 'AI Responds',
    sublabel: 'In < 1 second',
    color: '#0284C7',
    bg: 'bg-primary/10 border-primary/20',
    iconColor: 'text-primary-dark',
    count: '< 1s',
    countLabel: 'response',
  },
  {
    id: 'qualify',
    icon: CheckCircle,
    label: 'Lead Qualified',
    sublabel: 'Budget · Need · Timeline',
    color: '#06B6D4',
    bg: 'bg-accent/10 border-accent/20',
    iconColor: 'text-accent',
    count: '73%',
    countLabel: 'qualify rate',
  },
  {
    id: 'book',
    icon: Calendar,
    label: 'Appointment Set',
    sublabel: 'Calendar synced',
    color: '#F59E0B',
    bg: 'bg-warm/10 border-warm/20',
    iconColor: 'text-warm',
    count: '60%',
    countLabel: 'less no-shows',
  },
  {
    id: 'revenue',
    icon: TrendingUp,
    label: 'New Customer',
    sublabel: 'Deal closed',
    color: '#0891B2',
    bg: 'bg-accent-dark/10 border-accent-dark/20',
    iconColor: 'text-accent-dark',
    count: '$4.2k',
    countLabel: 'avg deal',
  },
]

function PipelineConnector({ delay }: { delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <div ref={ref} className="hidden md:flex flex-1 items-center px-1 min-w-[24px]">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={inView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left center', background: 'linear-gradient(90deg, rgba(14,165,233,0.5), rgba(6,182,212,0.5))', width: '100%', height: '2px', borderRadius: '9999px' }}
      />
    </div>
  )
}

export function AutomationPipeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [activeNode, setActiveNode] = useState<string | null>(null)

  useEffect(() => {
    if (!inView) return
    const ids = nodes.map(n => n.id)
    let i = 0
    const timer = setInterval(() => {
      setActiveNode(ids[i % ids.length])
      i++
    }, 800)
    return () => clearInterval(timer)
  }, [inView])

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto">
      {/* Flow label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-center text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-8"
      >
        Live Automation Flow
      </motion.p>

      {/* Pipeline nodes — wraps into a 3+2 grid on mobile, single row with connectors on md+ */}
      <div className="flex flex-wrap justify-center gap-y-8 md:flex-nowrap md:items-center">
        {nodes.map((node, i) => {
          const Icon = node.icon
          const isActive = activeNode === node.id
          return (
            <div key={node.id} className="flex items-center justify-center basis-1/3 md:basis-auto md:flex-1 min-w-0">
              <motion.div
                className="flex flex-col items-center gap-2.5 flex-shrink-0"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Node icon */}
                <motion.div
                  animate={isActive ? { scale: 1.12, boxShadow: `0 0 0 8px ${node.color}22, 0 0 24px ${node.color}44` } : { scale: 1, boxShadow: 'none' }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center ${node.bg} transition-all duration-300`}
                >
                  <Icon className={`w-6 h-6 ${node.iconColor}`} />
                </motion.div>

                {/* Label */}
                <div className="text-center max-w-[80px]">
                  <p className="text-white text-xs font-semibold leading-tight">{node.label}</p>
                  <p className="text-white/40 text-[10px] leading-tight mt-0.5 hidden sm:block">{node.sublabel}</p>
                </div>

                {/* Metric */}
                <div className="flex flex-col items-center">
                  <span className={`text-base font-extrabold ${node.iconColor} font-display`}>{node.count}</span>
                  <span className="text-white/30 text-[9px] uppercase tracking-wider">{node.countLabel}</span>
                </div>
              </motion.div>

              {/* Connector (not after last node) */}
              {i < nodes.length - 1 && <PipelineConnector delay={i * 0.12 + 0.3} />}
            </div>
          )
        })}
      </div>

      {/* Floating activity cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {[
          { icon: Phone, iconColor: 'text-primary-light', text: 'New call from +1 (555) 091-xxxx', time: 'Just now' },
          { icon: Bot, iconColor: 'text-accent-light', text: 'Lead qualified — Healthcare · $5k budget', time: '2s ago' },
          { icon: Calendar, iconColor: 'text-warm-light', text: 'Appointment booked for tomorrow 2PM', time: '4s ago' },
        ].map((item, i) => {
          const ItemIcon = item.icon
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
              className="glass-dark rounded-xl p-3 border border-white/10 flex items-start gap-2.5"
            >
              <ItemIcon className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${item.iconColor}`} />
              <div className="min-w-0">
                <p className="text-white/80 text-[11px] leading-relaxed">{item.text}</p>
                <p className="text-white/25 text-[10px] mt-1">{item.time}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
