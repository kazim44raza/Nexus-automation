import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nexusautomation.ai'),
  title: {
    default: 'Nexus Automation — AI Automation Agency',
    template: '%s | Nexus Automation',
  },
  description:
    'Nexus Automation helps businesses capture more leads, book more appointments, and scale without hiring through AI chatbots, voice agents, and intelligent workflow automation.',
  keywords: [
    'AI automation agency',
    'AI chatbot',
    'AI voice agent',
    'business process automation',
    'lead qualification',
    'appointment booking automation',
    'missed call recovery',
    'CRM automation',
    'workflow automation',
    'customer support automation',
  ],
  authors: [{ name: 'Nexus Automation' }],
  creator: 'Nexus Automation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexusautomation.ai',
    siteName: 'Nexus Automation',
    title: 'Nexus Automation — AI Automation Agency',
    description:
      'AI chatbots, voice agents, and business automation that respond instantly, qualify leads, and book appointments 24/7.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Nexus Automation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Automation — AI Automation Agency',
    description: 'AI-powered automation that grows your business 24/7.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions (autofill, etc.) inject
    // attributes like `crxlauncher`/`fdprocessedid` before React hydrates.
    // This silences those harmless extension-caused mismatches.
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-bg-base text-text-primary" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
