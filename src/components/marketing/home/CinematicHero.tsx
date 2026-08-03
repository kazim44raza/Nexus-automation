'use client'

import Image from 'next/image'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

export function CinematicHero() {
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24 })
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24 })
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8])
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6])

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      className="home-hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-labelledby="home-hero-title"
    >
      <Image
        src="/images/human-collaboration.jpg"
        alt="Two business professionals mapping a workflow together"
        fill
        priority
        sizes="100vw"
        className="home-hero__image"
      />
      <div className="home-hero__scrim" aria-hidden="true" />

      <motion.div
        className="home-hero__mark"
        aria-hidden="true"
        style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <Image src="/azorvin-mark.png" alt="" width={156} height={156} className="h-full w-full object-contain" />
      </motion.div>

      <div className="home-hero__content page-container">
        <motion.h1
          id="home-hero-title"
          className="home-hero__title"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Azorvin keeps customer requests moving.
        </motion.h1>

        <div className="home-hero__foot">
          <p>Practical voice, messaging, and workflow automation for service teams</p>
          <ul aria-label="Azorvin capabilities">
            <li>Voice</li>
            <li>Messaging</li>
            <li>Workflows</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
