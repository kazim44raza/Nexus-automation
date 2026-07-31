import Link from 'next/link'
import { Mail, MapPin, Linkedin, Instagram } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'

const services = [
  { label: 'AI Voice Agents', href: '/services/voice-agents' },
  { label: 'AI Chatbots', href: '/services/chatbots' },
  { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
  { label: 'Business Automation', href: '/services/business-automation' },
  { label: 'Appointment Booking', href: '/services/appointment-booking' },
  { label: 'Lead Qualification', href: '/services/lead-qualification' },
  { label: 'Customer Support', href: '/services/customer-support' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
]

const industries = [
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Legal Firms', href: '/industries/legal' },
  { label: 'Dental Clinics', href: '/industries/dental' },
  { label: 'Fitness Centers', href: '/industries/fitness' },
  { label: 'E-Commerce', href: '/industries/ecommerce' },
]

export function Footer() {
  return (
    <footer className="bg-bg-alt relative overflow-hidden text-text-secondary border-t border-border">
      {/* Animated dot pattern background (dark variant) */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--color-border) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      {/* Main footer */}
      <div className="page-container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6 hover:opacity-90 transition-opacity">
              <Logo variant="light" size={48} />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-xs font-display">
              Automation systems that keep business moving.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@azorvin.com" className="flex items-center gap-3 text-sm text-text-secondary hover:text-primary transition-colors font-medium">
                <Mail className="w-5 h-5 text-primary" />
                hello@azorvin.com
              </a>
              <div className="flex items-center gap-3 text-sm text-text-secondary font-medium">
                <MapPin className="w-5 h-5 text-primary" />
                Available Worldwide · Remote-First
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a href="https://www.linkedin.com/in/azorvin-systems-2139b540a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-bg-surface border border-border shadow-sm flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/azorvinsystems?igsh=ZjY1dmRmMGRtZXVl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-bg-surface border border-border shadow-sm flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-primary text-sm mb-6 uppercase tracking-wider font-display">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-text-primary text-sm mb-6 uppercase tracking-wider font-display">Industries</h4>
            <ul className="space-y-3">
              {industries.map(i => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-primary text-sm mb-6 uppercase tracking-wider font-display">Company</h4>
            <ul className="space-y-3">
              {company.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border relative z-10 bg-bg-base">
        <div className="page-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm font-display">
            © {new Date().getFullYear()} Azorvin. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-text-muted hover:text-text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-text-muted hover:text-text-primary transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-sm text-text-muted hover:text-text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
