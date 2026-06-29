'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/shared/Logo'

const services = [
  { label: 'AI Chatbots', href: '/services/chatbots', desc: '24/7 intelligent customer conversations' },
  { label: 'AI Voice Agents', href: '/services/voice-agents', desc: 'Answer every call automatically' },
  { label: 'Business Automation', href: '/services/business-automation', desc: 'End-to-end workflow automation' },
  { label: 'Lead Qualification', href: '/services/lead-qualification', desc: 'Score and route leads automatically' },
  { label: 'Appointment Booking', href: '/services/appointment-booking', desc: 'Intelligent scheduling & reminders' },
  { label: 'Customer Support', href: '/services/customer-support', desc: 'Automate 80% of support tickets' },
]

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-border'
            : 'bg-transparent'
        )}
      >
        <nav className="page-container flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="group">
            <Logo
              variant={scrolled ? 'dark' : 'light'}
              size={44}
              className="transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={cn(
                'btn-ghost flex items-center gap-1',
                scrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/80 hover:text-white hover:bg-white/10'
              )}>
                Services <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', servicesOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]"
                  >
                    <div className="card shadow-card-lg p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map(s => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex flex-col gap-0.5 px-3 py-3 rounded-xl hover:bg-bg-alt transition-colors duration-150 group"
                          >
                            <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                              {s.label}
                            </span>
                            <span className="text-xs text-text-muted">{s.desc}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border mt-2 pt-2 px-2">
                        <Link href="/services" className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors">
                          View all services <ArrowRight className="w-3 h-3" />
                        </Link>
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
                  'btn-ghost text-sm',
                  scrolled ? 'text-text-secondary hover:text-text-primary' : 'text-white/80 hover:text-white hover:bg-white/10',
                  pathname === link.href && (scrolled ? 'text-text-primary font-semibold' : 'text-white font-semibold')
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className={cn(
              'btn-ghost text-sm',
              scrolled ? 'text-text-secondary' : 'text-white/80 hover:text-white hover:bg-white/10'
            )}>
              Contact
            </Link>
            <Link href="/contact" className="btn-primary text-sm">
              Book a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              scrolled ? 'text-text-primary hover:bg-bg-alt' : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-border shadow-card-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="page-container py-4 space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-text-muted px-3 py-2">Services</p>
              {services.map(s => (
                <Link key={s.href} href={s.href} className="block px-3 py-2.5 rounded-xl text-sm text-text-secondary hover:text-text-primary hover:bg-bg-alt transition-colors">
                  {s.label}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="block px-3 py-2.5 rounded-xl text-sm text-text-secondary hover:text-text-primary hover:bg-bg-alt transition-colors">
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border my-2 pt-2">
                <Link href="/contact" className="btn-primary w-full">Book a Free Demo</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
