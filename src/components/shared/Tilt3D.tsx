'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'

interface Tilt3DProps {
  children: ReactNode
  className?: string
  /** Max tilt in degrees */
  max?: number
  /** Show a moving light glare */
  glare?: boolean
  /** Lift the card toward the viewer on hover (px) */
  lift?: number
}

/**
 * Interactive 3D tilt wrapper. Tracks the pointer and rotates the card in 3D
 * (perspective + rotateX/Y) with a spring, plus an optional light glare.
 * Pure CSS 3D transforms — GPU-accelerated and cheap. Mouse-only (won't
 * fire on touch), so mobile gets a clean, static card.
 */
export function Tilt3D({ children, className = '', max = 9, glare = true, lift = 6 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const z = useMotionValue(0)

  const hover = useMotionValue(0)

  const sx = useSpring(px, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(py, { stiffness: 220, damping: 18, mass: 0.4 })
  const sz = useSpring(z, { stiffness: 260, damping: 22 })
  const glareOpacity = useSpring(hover, { stiffness: 200, damping: 26 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max])

  const glareX = useTransform(sx, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(sy, [-0.5, 0.5], [0, 100])
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22), transparent 55%)`

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }

  function handleEnter() {
    z.set(lift)
    hover.set(1)
  }

  function handleLeave() {
    px.set(0)
    py.set(0)
    z.set(0)
    hover.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        z: sz,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
          style={{ background: glareBg, opacity: glareOpacity }}
        />
      )}
    </motion.div>
  )
}
