'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showWordmark?: boolean
}

/**
 * Azorvin brand mark — inline SVG recreation of the diamond/building mark.
 * Fully transparent background, renders cleanly on any dark or light surface.
 */
function AzorvinMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      {/* Left diamond panel — silver/grey */}
      <path
        d="M32 8 L14 32 L32 40 L32 8Z"
        fill="url(#leftPanel)"
      />
      {/* Right diamond panel — cyan accent */}
      <path
        d="M32 8 L50 32 L32 40 L32 8Z"
        fill="url(#rightPanel)"
      />
      {/* Bottom left */}
      <path
        d="M14 32 L32 40 L32 56 L14 32Z"
        fill="url(#bottomLeft)"
        opacity="0.7"
      />
      {/* Bottom right */}
      <path
        d="M50 32 L32 40 L32 56 L50 32Z"
        fill="url(#bottomRight)"
        opacity="0.5"
      />
      {/* Inner glow line */}
      <line x1="32" y1="12" x2="32" y2="54" stroke="#22D3EE" strokeWidth="1" opacity="0.6" />

      <defs>
        <linearGradient id="leftPanel" x1="14" y1="8" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C8D0D8" />
          <stop offset="100%" stopColor="#8090A0" />
        </linearGradient>
        <linearGradient id="rightPanel" x1="50" y1="8" x2="32" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>
        <linearGradient id="bottomLeft" x1="14" y1="32" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8090A0" />
          <stop offset="100%" stopColor="#4A5568" />
        </linearGradient>
        <linearGradient id="bottomRight" x1="50" y1="32" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Logo({ variant = 'dark', showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <AzorvinMark size={34} />
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
