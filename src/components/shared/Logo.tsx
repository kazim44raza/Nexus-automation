'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showWordmark?: boolean
}

/**
 * Azorvin logo — original logo.png in a rounded dark badge.
 * Badge is tall enough to show the full hexagon mark without cropping.
 */
export function Logo({ variant = 'dark', showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span
        className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
        style={{
          width: 44,
          height: 48,
          background: '#020A18',
          border: '1px solid rgba(34,211,238,0.15)',
          padding: 4,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Azorvin"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </span>

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
