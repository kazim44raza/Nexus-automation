'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, ChevronDown, Headphones, Menu, MessageCircle, MessageSquare, Phone, Target, Workflow, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/shared/Logo'

const services = [
  { label: 'AI Voice Agents', href: '/services/voice-agents', desc: 'Handle routine calls and structured handoffs', icon: Phone },
  { label: 'AI Chatbots', href: '/services/chatbots', desc: 'Guide visitors with approved answers', icon: MessageSquare },
  { label: 'WhatsApp Automation', href: '/services/whatsapp-automation', desc: 'Route messages into real workflows', icon: MessageCircle },
  { label: 'Business Automation', href: '/services/business-automation', desc: 'Connect tools around repeatable steps', icon: Workflow },
  { label: 'Appointment Booking', href: '/services/appointment-booking', desc: 'Coordinate availability and confirmations', icon: Calendar },
  { label: 'Lead Qualification', href: '/services/lead-qualification', desc: 'Capture context before human follow-up', icon: Target },
  { label: 'Customer Support', href: '/services/customer-support', desc: 'Triage requests and preserve escalation', icon: Headphones },
]

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > 24)
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-200',
          scrolled ? 'border-border bg-bg-base/92 backdrop-blur-xl' : 'border-transparent bg-transparent'
        )}
      >
        <nav className="page-container grid h-20 grid-cols-[1fr_auto_1fr] items-center lg:h-[4.5rem]" aria-label="Primary navigation">
          <Link href="/" className="justify-self-start rounded-lg" aria-label="Azorvin home">
            <Logo variant="light" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onBlur={event => {
                if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false)
              }}
              onKeyDown={event => {
                if (event.key === 'Escape') setServicesOpen(false)
              }}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(open => !open)}
                onFocus={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                className={cn(
                  'flex min-h-11 cursor-pointer items-center gap-1.5 whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors',
                  pathname.startsWith('/services') ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                Services <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', servicesOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-1/2 top-full w-[38rem] -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-xl border border-border bg-bg-surface p-3 shadow-xl" role="menu">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map(service => {
                          const Icon = service.icon
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              role="menuitem"
                              className="group flex min-h-16 items-start gap-3 rounded-lg p-3 transition-colors hover:bg-bg-alt focus-visible:bg-bg-alt"
                            >
                              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-text-muted transition-colors group-hover:text-primary" />
                              <span>
                                <span className="block text-sm font-semibold text-text-primary">{service.label}</span>
                                <span className="mt-1 block text-xs leading-relaxed text-text-secondary">{service.desc}</span>
                              </span>
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
                  'inline-flex min-h-11 items-center whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors',
                  pathname === link.href ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden justify-self-end lg:block">
            <Link href="/contact" className="btn-primary whitespace-nowrap">
              Book a call
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(open => !open)}
            className="min-h-11 min-w-11 cursor-pointer justify-self-end rounded-lg p-2 text-text-secondary transition-colors hover:text-text-primary lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-bg-base"
          >
            <div className="flex-1 space-y-2 px-6 pb-8 pt-24">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(open => !open)}
                className="flex min-h-14 w-full items-center justify-between border-b border-border py-3 text-left text-lg font-semibold text-text-primary"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown className={cn('h-5 w-5 transition-transform duration-200', mobileServicesOpen && 'rotate-180')} />
              </button>

              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="grid gap-1 border-b border-border py-2"
                  >
                    {services.map(service => (
                      <Link key={service.href} href={service.href} className="flex min-h-11 items-center pl-3 text-text-secondary transition-colors hover:text-primary">
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="flex min-h-14 items-center border-b border-border py-3 text-lg font-semibold text-text-primary transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-border bg-bg-surface p-6">
              <Link href="/contact" className="btn-primary w-full whitespace-nowrap text-center">
                Book a consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
