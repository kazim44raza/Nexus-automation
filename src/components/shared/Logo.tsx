'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showWordmark?: boolean
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <span className={cn('flex items-center', className)}>
      <span
        className={cn(
          'font-display font-semibold tracking-tight leading-none',
          'text-xl md:text-2xl',
          variant === 'light' ? 'text-text-primary' : 'text-[#1C1B18]'
        )}
      >
        Azorvin
      </span>
    </span>
  )
}
