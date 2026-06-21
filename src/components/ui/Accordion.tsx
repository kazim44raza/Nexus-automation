'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
  dark?: boolean
}

export function Accordion({ items, className, dark }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            'rounded-2xl border overflow-hidden transition-colors duration-200',
            dark
              ? open === i ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/5'
              : open === i ? 'border-primary/30 bg-primary/5' : 'border-border bg-surface'
          )}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className={cn('font-semibold text-sm', dark ? 'text-white' : 'text-text-primary')}>
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                'w-4 h-4 flex-shrink-0 transition-transform duration-300 ml-4',
                dark ? 'text-white/50' : 'text-text-muted',
                open === i && 'rotate-180'
              )}
            />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <p className={cn(
                  'px-6 pb-5 text-sm leading-relaxed',
                  dark ? 'text-white/60' : 'text-text-secondary'
                )}>
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
