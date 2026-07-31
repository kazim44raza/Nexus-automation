'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** Wordmark text colour variant */
  variant?: 'light' | 'dark'
  /** Size of the logo mark in px */
  size?: number
  /** Show the "Azorvin" wordmark next to the mark */
  showWordmark?: boolean
  className?: string
}

/** Inline robot mark — clean, always-renders fallback that echoes the brand logo. */
function RobotMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" className="flex-shrink-0">
      <defs>
        <radialGradient id="logoBg" cx="50%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#020A18" />
          <stop offset="100%" stopColor="#020A18" />
        </radialGradient>
        <linearGradient id="logoRing" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      {/* Badge + ring */}
      <circle cx="24" cy="24" r="22.5" fill="url(#logoBg)" stroke="url(#logoRing)" strokeWidth="2" />
      {/* Antenna */}
      <line x1="24" y1="9" x2="24" y2="13.5" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="8" r="1.7" fill="#22D3EE" />
      {/* Head */}
      <rect x="13" y="13.5" width="22" height="17" rx="7" fill="#F8FAFC" />
      {/* Ears */}
      <rect x="10.5" y="18.5" width="3" height="7" rx="1.5" fill="#CBD5E1" />
      <rect x="34.5" y="18.5" width="3" height="7" rx="1.5" fill="#CBD5E1" />
      {/* Eyes (glowing teal) */}
      <circle cx="19.5" cy="22" r="2.6" fill="#22D3EE" />
      <circle cx="28.5" cy="22" r="2.6" fill="#22D3EE" />
      <circle cx="19.5" cy="22" r="1.1" fill="#22D3EE" />
      <circle cx="28.5" cy="22" r="1.1" fill="#22D3EE" />
      {/* Laptop hint */}
      <rect x="15" y="32" width="18" height="6" rx="1.5" fill="#334155" />
      <rect x="17" y="33.5" width="14" height="3" rx="1" fill="#1E293B" />
      <circle cx="24" cy="35" r="0.9" fill="#22D3EE" />
    </svg>
  )
}

/**
 * Brand logo. Prefers /logo.png from the public folder (your real logo);
 * if it's missing or fails to load it shows a clean inline robot mark, so
 * the UI never shows a broken image — even on pre-hydration load failures.
 */
export function Logo({ variant = 'dark', showWordmark = true, className }: Omit<LogoProps, 'size'>) {
  const [useFallback, setUseFallback] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const retried = useRef(false)

  function handleError() {
    if (!retried.current && imgRef.current) {
      retried.current = true
      imgRef.current.src = `/logo.png?v=${Date.now()}`
      return
    }
    setUseFallback(true)
  }

  return (
    <span className={cn('flex items-center gap-3', className)}>
      {useFallback ? (
        <div className="h-7 md:h-9 w-auto flex-shrink-0 flex items-center">
          <RobotMark size={32} />
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imgRef}
          src="/logo.png"
          alt="Azorvin logo"
          onError={handleError}
          onLoad={() => setUseFallback(false)}
          className="h-7 md:h-9 w-auto object-contain object-left flex-shrink-0 m-0 p-0"
        />
      )}
      {showWordmark && (
        <span
          className={cn(
            'font-display font-medium tracking-tight leading-none text-xl md:text-2xl',
            variant === 'light' ? 'text-text-primary' : 'text-text-primary'
          )}
        >
          Azorvin
        </span>
      )}
    </span>
  )
}
