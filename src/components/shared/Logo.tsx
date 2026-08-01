'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showWordmark?: boolean
}

/**
 * Uses the original /logo.png.
 * mix-blend-mode: screen removes the dark navy background of the PNG
 * so only the silver + cyan mark is visible on dark site backgrounds.
 */
export function Logo({ variant = 'dark', showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="Azorvin"
        className="h-8 md:h-10 w-auto flex-shrink-0"
        style={{ mixBlendMode: 'screen' }}
      />
      {showWordmark && (
        <span
          className={cn(
            'font-display font-semibold tracking-tight leading-none',
            'text-xl md:text-2xl',
            variant === 'light' ? 'text-text-primary' : 'text-[#1C1B18]'
          )}
        >
          Azorvin
        </span>
      )}
    </span>
  )
}
