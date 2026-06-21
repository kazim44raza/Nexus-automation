import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/Footer'
import { ChatbotWidget } from '@/components/marketing/ChatbotWidget'
import { CursorGlow } from '@/components/shared/CursorGlow'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatbotWidget />
    </>
  )
}
