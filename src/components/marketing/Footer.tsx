import Link from 'next/link'
import { Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'

const services = [
  { label: 'AI Chatbots', href: '/services/chatbots' },
  { label: 'AI Voice Agents', href: '/services/voice-agents' },
  { label: 'Business Automation', href: '/services/business-automation' },
  { label: 'Lead Qualification', href: '/services/lead-qualification' },
  { label: 'Appointment Booking', href: '/services/appointment-booking' },
  { label: 'Customer Support', href: '/services/customer-support' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
  { label: 'Careers', href: '/about#careers' },
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
    <footer className="bg-bg-dark text-white">
      {/* Main footer */}
      <div className="page-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-4">
              <Logo variant="light" size={52} />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              AI automation solutions that help businesses capture more leads, book more appointments, and scale without hiring.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:info@nexus-automation.tech" className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-light" />
                info@nexus-automation.tech
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-primary-light" />
                Available Worldwide · Remote-First
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map(i => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="page-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Nexus Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-xs text-white/30 hover:text-white/60 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
