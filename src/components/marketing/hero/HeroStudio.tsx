'use client'

import Image from 'next/image'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { CalendarCheck, MessagesSquare, Workflow } from 'lucide-react'

const flow = [
  { label: 'Conversation', icon: MessagesSquare },
  { label: 'Workflow', icon: Workflow },
  { label: 'Booked', icon: CalendarCheck },
]

export function HeroStudio() {
  const reducedMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22 })
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22 })
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7])
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6])

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <div
      className="relative min-w-0"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{ perspective: 1100 }}
    >
      <figure className="relative min-h-[520px] overflow-hidden rounded-[1.75rem] border border-border bg-bg-alt lg:min-h-[660px]">
        <Image
          src="/images/human-collaboration.jpg"
          alt="Two business professionals discussing a workflow together"
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover object-[56%_center] saturate-[0.78] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.04)_25%,rgba(7,17,31,0.88)_100%)]" />

        <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-bg-base/85 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-text-primary backdrop-blur-md">
          HUMAN-LED SYSTEM DESIGN
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute right-5 top-5 flex h-28 w-28 items-center justify-center rounded-2xl border border-white/20 bg-bg-base/80 p-5 backdrop-blur-md sm:h-36 sm:w-36"
          style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          <Image src="/favicon-512.png" alt="" width={112} height={112} className="h-full w-full object-contain" />
        </motion.div>

        <figcaption className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-bg-base/90 p-4 backdrop-blur-md sm:p-5">
          <p className="mb-4 max-w-xl text-sm leading-relaxed text-text-secondary">
            Technology handles the repeatable steps. Your team keeps judgment, relationships, and the final say.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {flow.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex min-w-0 items-center gap-2 border-t border-border pt-3 text-xs font-medium text-text-primary sm:text-sm">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="truncate">{item.label}</span>
                  {index < flow.length - 1 && <span className="ml-auto hidden text-text-muted sm:inline">/</span>}
                </div>
              )
            })}
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
