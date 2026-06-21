'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
  threshold?: number
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -32 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, amount: threshold })

  return (
    <motion.div
      ref={ref}
      variants={directionVariants[direction]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  threshold?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: threshold })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}) {
  return (
    <motion.div
      variants={{
        hidden: directionVariants[direction].hidden,
        visible: {
          ...directionVariants[direction].visible,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
