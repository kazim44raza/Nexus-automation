'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('w-full', className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const headerId = `accordion-header-${i}`
        const panelId = `accordion-panel-${i}`

        return (
          <div
            key={i}
            className="border-b border-gray-200 last:border-0"
          >
            <button
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded"
            >
              <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-lg pr-8">
                {item.question}
              </span>
              <span className="flex-shrink-0 text-gray-400 group-hover:text-primary transition-colors relative w-5 h-5 flex items-center justify-center">
                <Minus className={cn("absolute inset-0 w-5 h-5 transition-transform duration-300", isOpen ? "rotate-0 scale-100" : "rotate-90 scale-0")} />
                <Plus className={cn("absolute inset-0 w-5 h-5 transition-transform duration-300", isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100")} />
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
