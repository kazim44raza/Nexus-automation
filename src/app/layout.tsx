import type { Metadata } from 'next'
import { Instrument_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/Footer'

const instrumentSans = Instrument_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const getSiteUrl = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://azorvin.com';
  return url.startsWith('http') ? url : `https://${url}`;
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Azorvin — AI Systems & Automation',
    template: '%s | Azorvin',
  },
  description:
    'Azorvin helps businesses capture more leads, book more appointments, and scale without hiring through AI chatbots, voice agents, and intelligent workflow automation.',
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
  authors: [{ name: 'Azorvin' }],
  creator: 'Azorvin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azorvin.com',
    siteName: 'Azorvin',
    title: 'Azorvin — AI Systems & Automation',
    description:
      'AI chatbots, voice agents, and business automation that respond instantly, qualify leads, and book appointments 24/7.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Azorvin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azorvin — AI Systems & Automation',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${instrumentSans.variable} ${spaceGrotesk.variable} antialiased bg-bg-base text-text-primary overflow-x-clip min-h-screen flex flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
