'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showWordmark?: boolean
}

/**
 * Azorvin brand mark — precise inline SVG recreation of the two-panel + crystal logo.
 * Left panel: silver/steel gradient. Right panel: cyan gradient. 
 * Center: glowing cyan crystal. Fully transparent background.
 */
function AzorvinMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 200"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <defs>
        {/* Left panel: silver/steel */}
        <linearGradient id="lp" x1="15" y1="20" x2="65" y2="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D0D8E0" />
          <stop offset="40%" stopColor="#A0B0C0" />
          <stop offset="100%" stopColor="#607080" />
        </linearGradient>

        {/* Right panel: cyan/teal */}
        <linearGradient id="rp" x1="145" y1="20" x2="95" y2="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>

        {/* Crystal center glow */}
        <linearGradient id="crystal" x1="80" y1="72" x2="80" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>

        {/* Glow filter for crystal */}
        <filter id="glow" x="-80%" y="-40%" width="260%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft glow behind panels */}
        <filter id="softglow" x="-20%" y="-10%" width="140%" height="120%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left panel — silver parallelogram */}
      <polygon
        points="15,28 67,16 67,182 15,190"
        fill="url(#lp)"
        filter="url(#softglow)"
      />
      {/* Left panel inner highlight edge */}
      <line x1="67" y1="16" x2="67" y2="182" stroke="#E8F0F8" strokeWidth="1" opacity="0.4" />

      {/* Right panel — cyan parallelogram */}
      <polygon
        points="93,16 145,28 145,190 93,182"
        fill="url(#rp)"
        filter="url(#softglow)"
      />
      {/* Right panel inner highlight edge */}
      <line x1="93" y1="16" x2="93" y2="182" stroke="#67E8F9" strokeWidth="1" opacity="0.5" />

      {/* Crystal / gem center — tall diamond */}
      <polygon
        points="80,68 93,112 80,156 67,112"
        fill="url(#crystal)"
        filter="url(#glow)"
      />

      {/* Crystal bright core line */}
      <line
        x1="80" y1="74" x2="80" y2="150"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        opacity="0.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Logo({ variant = 'dark', showWordmark = true, className }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <AzorvinMark size={38} />
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
