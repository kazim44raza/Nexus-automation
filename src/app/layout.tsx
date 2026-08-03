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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.azorvin.com',
    siteName: 'Azorvin',
    title: 'Azorvin — AI Systems & Automation | Chatbots, Voice Agents & Workflow Automation',
    description:
      'Azorvin builds AI chatbots, voice agents, WhatsApp automation, appointment booking, and workflow systems for service businesses.',
    images: [{ url: '/azorvin-logo-master.jpg', width: 1448, height: 1086, alt: 'Official Azorvin logo' }],
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
    google: process.env.GOOGLE_SITE_VERIFICATION || 'O3iWN_QcC3ZMLRmW8ZKWz51DADc3fjSW57u0UVF-bTg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=azorvin-blank-3" type="image/svg+xml" sizes="any" />
      </head>
      <body className={`${instrumentSans.variable} ${spaceGrotesk.variable} antialiased bg-bg-base text-text-primary overflow-x-clip min-h-screen flex flex-col`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
