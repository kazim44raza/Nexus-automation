'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
  showWordmark?: boolean
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  const [markVisible, setMarkVisible] = useState(false)

  useEffect(() => {
    const revealMark = () => setMarkVisible(true)

    if (document.readyState === 'complete') {
      revealMark()
      return
    }

    window.addEventListener('load', revealMark, { once: true })
    return () => window.removeEventListener('load', revealMark)
  }, [])

  return (
    <span className={cn('flex items-center gap-3', className)} aria-label="Azorvin">
      <Image
        src="/favicon-512.png"
        alt=""
        width={44}
        height={44}
        className={cn(
          'h-9 w-9 shrink-0 object-contain transition-opacity duration-200 md:h-10 md:w-10',
          markVisible ? 'opacity-100' : 'opacity-0',
        )}
      />
      <span className={cn('font-body text-sm font-semibold uppercase leading-none tracking-[0.28em] md:text-[15px]', variant === 'light' ? 'text-text-primary' : 'text-text-light-primary')}>
        Azorvin
      </span>
    </span>
  )
}
