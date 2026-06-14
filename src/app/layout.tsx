import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nexusautomation.ai'),
  title: 'Nexus Automation | AI Chatbots, Voice Agents & Business Automation',
  description:
    'Nexus Automation provides AI chatbot services, AI voice agents, and business automation to help businesses capture leads 24/7, respond instantly, and grow revenue through intelligent automation.',
  keywords: [
    'AI chatbot',
    'AI voice agent',
    'business automation',
    'lead generation',
    'appointment booking',
    'missed call recovery',
    'AI automation agency',
    '24/7 customer service',
  ],
  authors: [{ name: 'Nexus Automation' }],
  creator: 'Nexus Automation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexusautomation.ai',
    siteName: 'Nexus Automation',
    title: 'Nexus Automation | AI-Powered Business Automation',
    description:
      'Stop losing leads after business hours. AI chatbots, voice agents, and automation systems that respond instantly, qualify leads, and book appointments 24/7.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexus Automation - AI-Powered Business Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Automation | AI-Powered Business Automation',
    description:
      'Stop losing leads after business hours. AI chatbots, voice agents, and automation systems that respond instantly and book appointments 24/7.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
