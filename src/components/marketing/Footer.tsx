import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'
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
  { label: 'Case Studies', href: '/case-studies' },
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
    <footer className="bg-gray-50 relative overflow-hidden text-gray-600">
      {/* Animated dot pattern background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      {/* Main footer */}
      <div className="page-container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6">
              <Logo variant="dark" size={52} />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              AI automation solutions that help businesses capture more leads, book more appointments, and scale without hiring.
            </p>
            <div className="space-y-4">
              <a href="mailto:info@nexus-automation.tech" className="flex items-center gap-3 text-sm text-gray-500 hover:text-accent transition-colors font-medium">
                <Mail className="w-5 h-5 text-accent" />
                info@nexus-automation.tech
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                <MapPin className="w-5 h-5 text-accent" />
                Available Worldwide · Remote-First
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a href="https://www.linkedin.com/in/nexus-automation-2139b540a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bqfr3Tu93S5%2BC0HcjyvFXOg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent hover:shadow-md transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/nexus.automation_?igsh=ZjY1dmRmMGRtZXVl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent hover:shadow-md transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-500 hover:text-accent transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-6 uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3">
              {industries.map(i => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-gray-500 hover:text-accent transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 text-sm mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {company.map(c => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-gray-500 hover:text-accent transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 relative z-10 bg-white/50">
        <div className="page-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nexus Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
