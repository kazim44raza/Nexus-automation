'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -70% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
      setIsOpen(false);
    },
    []
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,10,26,0.92)] backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-[rgba(10,10,26,0.4)] backdrop-blur-md border-b border-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-0.5 group"
            aria-label="Nexus Automation - Go to homepage"
          >
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#00F0FF] group-hover:via-[#3B82F6] group-hover:to-[#8B5CF6]">
              Nexus
            </span>
            <span className="font-display text-2xl font-bold text-white ml-1">
              Automation
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-[#00F0FF]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-[#00F0FF]/[0.08] border border-[#00F0FF]/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/[0.06] bg-[rgba(10,10,26,0.97)] backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-[#00F0FF] bg-[#00F0FF]/[0.08] border border-[#00F0FF]/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05, duration: 0.3 }}
                className="pt-3"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300 active:scale-[0.98]"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
