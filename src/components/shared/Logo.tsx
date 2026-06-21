'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** Wordmark text colour variant */
  variant?: 'light' | 'dark'
  /** Size of the logo mark in px */
  size?: number
  /** Show the "Nexus Automation" wordmark next to the mark */
  showWordmark?: boolean
  className?: string
}

/** Inline robot mark — clean, always-renders fallback that echoes the brand logo. */
function RobotMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" className="flex-shrink-0">
      <defs>
        <radialGradient id="logoBg" cx="50%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#10243A" />
          <stop offset="100%" stopColor="#0B1220" />
        </radialGradient>
        <linearGradient id="logoRing" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      {/* Badge + ring */}
      <circle cx="24" cy="24" r="22.5" fill="url(#logoBg)" stroke="url(#logoRing)" strokeWidth="2" />
      {/* Antenna */}
      <line x1="24" y1="9" x2="24" y2="13.5" stroke="#5EEAD4" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="8" r="1.7" fill="#5EEAD4" />
      {/* Head */}
      <rect x="13" y="13.5" width="22" height="17" rx="7" fill="#F8FAFC" />
      {/* Ears */}
      <rect x="10.5" y="18.5" width="3" height="7" rx="1.5" fill="#CBD5E1" />
      <rect x="34.5" y="18.5" width="3" height="7" rx="1.5" fill="#CBD5E1" />
      {/* Eyes (glowing teal) */}
      <circle cx="19.5" cy="22" r="2.6" fill="#0D9488" />
      <circle cx="28.5" cy="22" r="2.6" fill="#0D9488" />
      <circle cx="19.5" cy="22" r="1.1" fill="#5EEAD4" />
      <circle cx="28.5" cy="22" r="1.1" fill="#5EEAD4" />
      {/* Laptop hint */}
      <rect x="15" y="32" width="18" height="6" rx="1.5" fill="#334155" />
      <rect x="17" y="33.5" width="14" height="3" rx="1" fill="#1E293B" />
      <circle cx="24" cy="35" r="0.9" fill="#14B8A6" />
    </svg>
  )
}

/**
 * Brand logo. Prefers /logo.png from the public folder (your real logo);
 * if it's missing or fails to load it shows a clean inline robot mark, so
 * the UI never shows a broken image — even on pre-hydration load failures.
 */
export function Logo({ variant = 'dark', size = 36, showWordmark = true, className }: LogoProps) {
  const [useFallback, setUseFallback] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Catch failures that happened before React attached the onError handler.
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setUseFallback(true)
  }, [])

  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      {useFallback ? (
        <RobotMark size={size} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src="/logo.png"
          alt="Nexus Automation logo"
          width={size}
          height={size}
          onError={() => setUseFallback(true)}
          className="rounded-full object-cover ring-1 ring-primary/40 shadow-primary-sm flex-shrink-0"
          style={{ width: size, height: size }}
        />
      )}
      {showWordmark && (
        <span
          className={cn(
            'font-display font-extrabold tracking-tight leading-none',
            variant === 'light' ? 'text-white' : 'text-text-primary'
          )}
        >
          Nexus Automation
        </span>
      )}
    </span>
  )
}
