'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showWordmark?: boolean
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <span className={cn('flex items-center gap-3', className)} aria-label="Azorvin">
      <Image
        src="/azorvin-mark.png"
        alt=""
        width={44}
        height={44}
        className="h-9 w-9 shrink-0 object-contain md:h-10 md:w-10"
        priority
      />
      <span className={cn('font-body text-sm font-semibold uppercase leading-none tracking-[0.28em] md:text-[15px]', variant === 'light' ? 'text-text-primary' : 'text-text-light-primary')}>
        Azorvin
      </span>
    </span>
  )
}
