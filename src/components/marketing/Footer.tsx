import Link from 'next/link'
import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'

const services = [
  ['Voice agents', '/services/voice-agents'],
  ['Chat systems', '/services/chatbots'],
  ['WhatsApp', '/services/whatsapp-automation'],
  ['Business automation', '/services/business-automation'],
  ['Appointment booking', '/services/appointment-booking'],
  ['Lead qualification', '/services/lead-qualification'],
  ['Customer support', '/services/customer-support'],
]

const explore = [
  ['Solutions', '/solutions'],
  ['Industries', '/industries'],
  ['Work', '/work'],
  ['About Azorvin', '/about'],
  ['Blog', '/blog'],
  ['Resources', '/resources'],
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt text-text-secondary">
      <div className="page-container overflow-hidden py-14 sm:py-18 lg:py-20">
        <div className="border-b border-border pb-8">
          <Link href="/" className="inline-flex rounded-lg">
            <Logo variant="light" />
          </Link>
          <p aria-hidden="true" className="mt-12 whitespace-nowrap font-display text-[clamp(4rem,16vw,13rem)] font-medium leading-none tracking-[-0.075em] text-text-primary">
            AZORVIN
          </p>
        </div>

        <div className="grid gap-10 border-b border-border py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end">
          <p className="max-w-[20ch] font-display text-3xl font-medium leading-[1.06] tracking-[-0.035em] text-text-primary sm:text-4xl lg:text-5xl">
            Less admin between a customer and a decision.
          </p>
          <div className="lg:justify-self-end">
            <p className="mb-5 max-w-md leading-relaxed">
              Voice, messaging, and workflow systems designed around the way your team actually operates.
            </p>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Start a conversation <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-9 border-b border-border py-10 md:grid-cols-2">
          <nav aria-label="Service links">
            <h2 className="mb-4 text-sm font-semibold text-text-primary">Services</h2>
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {services.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="whitespace-nowrap text-sm transition-colors hover:text-text-primary">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore links">
            <h2 className="mb-4 text-sm font-semibold text-text-primary">Explore</h2>
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {explore.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="whitespace-nowrap text-sm transition-colors hover:text-text-primary">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <a href="mailto:ahmed@azorvin.com" className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap font-medium text-text-primary transition-colors hover:text-primary">
              <Mail className="h-4 w-4" aria-hidden="true" /> ahmed@azorvin.com
            </a>
            <a href="https://www.linkedin.com/in/azorvin-systems-2139b540a" target="_blank" rel="noopener noreferrer" aria-label="Azorvin on LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/azorvinsystems/" target="_blank" rel="noopener noreferrer" aria-label="Azorvin on Instagram" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
            <span>© {new Date().getFullYear()} Azorvin</span>
            <Link href="/privacy" className="whitespace-nowrap hover:text-text-primary">Privacy</Link>
            <Link href="/terms" className="whitespace-nowrap hover:text-text-primary">Terms</Link>
            <Link href="/sitemap.xml" className="whitespace-nowrap hover:text-text-primary">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
