import Link from 'next/link'
import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'

const groups = [
  {
    label: 'Services',
    links: [
      ['Voice agents', '/services/voice-agents'],
      ['Chat systems', '/services/chatbots'],
      ['WhatsApp', '/services/whatsapp-automation'],
      ['Business automation', '/services/business-automation'],
      ['Appointment booking', '/services/appointment-booking'],
      ['Lead qualification', '/services/lead-qualification'],
      ['Customer support', '/services/customer-support'],
    ],
  },
  {
    label: 'Explore',
    links: [
      ['Solutions', '/solutions'],
      ['Industries', '/industries'],
      ['Work', '/work'],
      ['About', '/about'],
      ['Blog', '/blog'],
      ['Resources', '/resources'],
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt text-text-secondary">
      <div className="page-container py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 border-b border-border pb-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end">
          <div>
            <Link href="/" className="mb-8 inline-flex transition-opacity hover:opacity-80">
              <Logo variant="light" />
            </Link>
            <p className="max-w-[18ch] font-display text-4xl font-medium leading-[1.06] tracking-[-0.035em] text-text-primary sm:text-5xl lg:text-6xl">
              Less admin between a customer and a decision.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <p className="mb-5 max-w-md text-base leading-relaxed text-text-secondary">
              Voice, messaging, and workflow systems designed around the way your team actually operates.
            </p>
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Start a conversation <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <a href="mailto:hello@azorvin.com" className="inline-flex items-center gap-3 whitespace-nowrap text-sm font-medium text-text-primary transition-colors hover:text-primary">
              <Mail className="h-4 w-4 text-primary" /> hello@azorvin.com
            </a>
            <p className="text-sm text-text-muted">Available worldwide · Remote-first</p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/azorvin-systems-2139b540a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="Azorvin on LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/azorvinsystems?igsh=ZjY1dmRmMGRtZXVl" target="_blank" rel="noopener noreferrer" aria-label="Azorvin on Instagram" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors hover:border-primary hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {groups.map(group => (
              <div key={group.label}>
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">{group.label}</h2>
                <ul className="flex flex-wrap gap-x-5 gap-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="whitespace-nowrap text-sm text-text-secondary transition-colors hover:text-text-primary">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Azorvin. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="whitespace-nowrap hover:text-text-primary">Privacy</Link>
            <Link href="/terms" className="whitespace-nowrap hover:text-text-primary">Terms</Link>
            <Link href="/sitemap.xml" className="whitespace-nowrap hover:text-text-primary">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
