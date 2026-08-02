'use client'

import { usePathname } from 'next/navigation'

function resolveTheme(pathname: string) {
  if (pathname === '/') return 'theme-cobalt'
  if (pathname.startsWith('/services/voice-agents') || pathname.startsWith('/services/chatbots')) return 'theme-ice'
  if (pathname.startsWith('/services')) return 'theme-steel'
  if (pathname.startsWith('/industries')) return 'theme-warm-metal'
  if (pathname.startsWith('/about') || pathname.startsWith('/work')) return 'theme-silver'
  if (pathname.startsWith('/contact')) return 'theme-cyan'
  return 'theme-cobalt'
}

export function PageTheme({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <div className={resolveTheme(pathname)}>{children}</div>
}
