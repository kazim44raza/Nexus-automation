'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Phone, MessageSquare, MessageCircle, Workflow, Calendar, Target, Headphones } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/shared/Logo'

const services = [
  { label: 'AI Voice Agents', href: '/services/voice-agents', desc: 'Answer every call with AI', icon: Phone },
  { label: 'AI Chatbots', href: '/services/chatbots', desc: 'Convert visitors 24/7', icon: MessageSquare },
  { label: 'WhatsApp Automation', href: '/services/whatsapp-automation', desc: 'Automate WhatsApp conversations', icon: MessageCircle },
  { label: 'Business Automation', href: '/services/business-automation', desc: 'Connect and automate workflows', icon: Workflow },
  { label: 'Appointment Booking', href: '/services/appointment-booking', desc: 'Fill your calendar automatically', icon: Calendar },
  { label: 'Lead Qualification', href: '/services/lead-qualification', desc: 'Score and route leads intelligently', icon: Target },
  { label: 'Customer Support', href: '/services/customer-support', desc: 'Resolve issues instantly', icon: Headphones },
]

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { 
    setMobileOpen(false)
    setMobileServicesOpen(false) 
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg-surface/80 backdrop-blur-xl border-b border-border shadow-sm py-3'
            : 'bg-bg-base/40 backdrop-blur-md border-b border-transparent py-5'
        )}
      >
        <nav className="page-container flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <Logo
              variant="light"
              size={40}
              className="transition-transform duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Services mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={cn(
                'px-4 py-2 text-sm font-medium flex items-center gap-1.5 transition-colors',
                pathname.startsWith('/services') 
                  ? 'text-primary' 
                  : 'text-text-secondary hover:text-text-primary'
              )}>
                Services <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', servicesOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
                  >
                    <div className="bg-bg-surface rounded-xl shadow-xl border border-border p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {services.map(s => {
                          const Icon = s.icon
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-alt transition-colors group"
                            >
                              <div className="text-text-muted group-hover:text-primary transition-colors mt-0.5">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="block text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                                  {s.label}
                               </span>
                                <span className="block text-xs text-text-secondary mt-1">{s.desc}</span>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm transition-colors',
                  pathname === link.href 
                    ? 'text-primary font-medium' 
                    : 'text-text-secondary font-medium hover:text-text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="btn-secondary">
              Book a Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-bg-base flex flex-col overflow-y-auto"
          >
            <div className="flex-1 px-6 pt-28 pb-8 space-y-4">
              <div className="space-y-1">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-4 text-lg font-semibold text-text-primary border-b border-border"
                >
                  Services
                  <ChevronDown className={cn('w-5 h-5 transition-transform duration-200', mobileServicesOpen && 'rotate-180')} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="py-2 pl-4 space-y-2">
                        {services.map(s => (
                          <Link key={s.href} href={s.href} className="block py-2 text-text-secondary hover:text-primary">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-4 text-lg font-semibold text-text-primary border-b border-border hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="p-6 border-t border-border bg-bg-surface">
              <Link href="/contact" className="btn-primary w-full text-center text-lg py-4">
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
