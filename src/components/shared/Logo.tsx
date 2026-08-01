'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showWordmark?: boolean
}

/**
 * Azorvin logo — original logo.png displayed inside a rounded dark badge.
 * The container background (#020A18) matches the PNG's own dark navy background
 * so it looks clean and intentional — no white edges, no bleed.
 */
export function Logo({ variant = 'dark', showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      {/* Rounded dark badge containing the logo PNG */}
      <span
        className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
        style={{
          width: 40,
          height: 40,
          background: '#020A18',
          border: '1px solid rgba(34,211,238,0.15)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="Azorvin"
          style={{
            width: '90%',
            height: '90%',
            objectFit: 'contain',
            objectPosition: 'center',
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
