'use client'

// FloatingObjects has been replaced with a lightweight CSS-based ambient layer
// to avoid a dependency on three.js which caused ReactCurrentBatchConfig crashes
// in Next.js 15 production builds.

import { useRef } from 'react'
import { motion } from 'framer-motion'

interface FloatingObjectsProps {
  className?: string
  count?: number
}

const SHAPES = [
  'rounded-lg',
  'rounded-full',
  'rounded-sm',
  'rounded-xl',
]

export function FloatingObjects({ className = '', count = 9 }: FloatingObjectsProps) {
  const items = Array.from({ length: count }, (_, i) => ({
    x: 10 + (i * 11) % 80,
    y: 5 + (i * 13) % 80,
    size: 24 + (i * 7) % 32,
    duration: 6 + (i * 1.3) % 8,
    delay: i * 0.4,
    shape: SHAPES[i % SHAPES.length],
    opacity: 0.04 + (i % 4) * 0.02,
    rotate: i * 40,
  }))

  return (
    <div aria-hidden="true" className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute border border-[#B8774F] ${item.shape}`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            width: item.size,
            height: item.size,
            opacity: item.opacity,
            rotate: item.rotate,
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [item.rotate, item.rotate + 15, item.rotate],
            opacity: [item.opacity, item.opacity * 1.8, item.opacity],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
