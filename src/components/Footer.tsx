'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Press', href: '#' },
];

const serviceLinks = [
  { label: 'AI Chatbots', href: '#' },
  { label: 'Voice Agents', href: '#' },
  { label: 'Automation', href: '#' },
  { label: 'Lead Qualification', href: '#' },
  { label: 'Appointment Booking', href: '#' },
];

const supportLinks = [
  { label: 'Contact', href: '#' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Documentation', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

const bottomLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#111127' }}
      aria-label="Site footer"
    >
      {/* Top gradient border */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(to right, transparent, #00F0FF, #3B82F6, #8B5CF6, transparent)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      >
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-baseline gap-1 mb-4">
              <span
                className="text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #00F0FF 0%, #3B82F6 100%)',
                }}
              >
                Nexus
              </span>
              <span className="text-2xl font-bold text-white">Automation</span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered chatbots, voice agents, and automation systems that
              help businesses capture leads, book appointments, and grow
              revenue&nbsp;&mdash;&nbsp;24/7.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] text-slate-400 transition-all duration-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/30 hover:shadow-[0_0_12px_rgba(0,240,255,0.15)]"
                  style={{ backgroundColor: 'rgba(17, 17, 39, 0.5)' }}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Support */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
          }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; 2024 Nexus Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 text-xs hover:text-[#00F0FF] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
