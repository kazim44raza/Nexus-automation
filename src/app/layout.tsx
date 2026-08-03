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

const SITE_URL = 'https://www.azorvin.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Azorvin',
  title: {
    default: 'Azorvin — AI Systems & Automation | Chatbots, Voice Agents & Workflow Automation',
    template: '%s | Azorvin',
  },
  description:
    'Azorvin designs practical voice, messaging, booking, and workflow systems for service businesses, with clear human handoffs and operational controls.',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/favicon-192.png', sizes: '192x192', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.azorvin.com',
    siteName: 'Azorvin',
    title: 'Azorvin — AI Systems & Automation | Chatbots, Voice Agents & Workflow Automation',
    description:
      'Azorvin builds AI chatbots, voice agents, WhatsApp automation, appointment booking, and workflow systems for service businesses.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Azorvin AI systems and automation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azorvin — AI Systems & Automation | Chatbots, Voice Agents & Workflow Automation',
    description: 'Azorvin builds AI chatbots, voice agents, WhatsApp automation, appointment booking, and workflow systems for service businesses.',
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
