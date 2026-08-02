import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/Footer'
import { ChatbotWidget } from '@/components/marketing/ChatbotWidget'
import { PageTheme } from '@/components/marketing/PageTheme'
import { WhatsAppButton } from '@/components/marketing/WhatsAppButton'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content"><PageTheme>{children}</PageTheme></main>
      <Footer />
      <WhatsAppButton />
      <ChatbotWidget />
    </>
  )
}
