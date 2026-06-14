'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Building2,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  ArrowRight,
  Calendar,
  MessageCircle,
  CheckCircle,
  Lock,
  Loader2,
  AlertCircle,
} from 'lucide-react';

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  businessType: '',
  message: '',
};

const businessTypes = [
  'Healthcare',
  'Real Estate',
  'Legal',
  'Fitness',
  'Auto Services',
  'E-commerce',
  'Local Services',
  'Other',
];

const contactCards = [
  {
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Book a 15-minute discovery call to discuss your automation needs.',
    action: 'View Calendar',
    // Replace href with your Calendly link, e.g. https://calendly.com/your-username
    href: '#contact',
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'hello@nexusautomation.tech',
    action: null,
    href: 'mailto:hello@nexusautomation.tech',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: '+1 (555) 123-4567',
    action: null,
    href: 'tel:+15551234567',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat on WhatsApp',
    action: null,
    // Replace with your WhatsApp link: https://wa.me/YOUR_PHONE_NUMBER
    href: 'https://wa.me/15551234567',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // --- Validation ---
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.businessName.trim()) {
      setError('Please enter your business name.');
      return;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      // ============================================================
      // OPTION 1: Formspree Integration
      // Uncomment the block below and replace YOUR_FORM_ID with
      // your actual Formspree form ID from https://formspree.io
      // ============================================================
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     businessName: formData.businessName,
      //     email: formData.email,
      //     phone: formData.phone,
      //     businessType: formData.businessType,
      //     message: formData.message,
      //   }),
      // });
      // if (!response.ok) throw new Error('Failed to send message.');

      // ============================================================
      // OPTION 2: EmailJS Integration
      // Install emailjs: npm install @emailjs/browser
      // Then uncomment and configure with your EmailJS credentials
      // from https://www.emailjs.com
      // ============================================================
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',   // EmailJS service ID
      //   'YOUR_TEMPLATE_ID',  // EmailJS template ID
      //   {
      //     from_name: formData.name,
      //     business_name: formData.businessName,
      //     from_email: formData.email,
      //     phone: formData.phone,
      //     business_type: formData.businessType,
      //     message: formData.message,
      //   },
      //   'YOUR_PUBLIC_KEY'    // EmailJS public key
      // );

      // ============================================================
      // OPTION 3: Resend Integration (via Next.js API route)
      // Create an API route at /api/send that uses Resend SDK.
      // Install resend: npm install resend
      // See: https://resend.com/docs/send-with-nextjs
      // ============================================================
      // const response = await fetch('/api/send', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     businessName: formData.businessName,
      //     email: formData.email,
      //     phone: formData.phone,
      //     businessType: formData.businessType,
      //     message: formData.message,
      //   }),
      // });
      // if (!response.ok) throw new Error('Failed to send message.');

      // ============================================================
      // CURRENT: Simulated success — Replace with actual API call above
      // ============================================================
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccess(true);
      setFormData(initialFormData);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-label="Contact us"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00F0FF]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Ready to Automate Your Growth?
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Book a free consultation and discover how AI automation can transform your business.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left column — Lead capture form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl border border-white/[0.06] p-6 sm:p-8 bg-[rgba(17,17,39,0.7)] backdrop-blur-xl">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-12 gap-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00F0FF]/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-[#00F0FF]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Thank you!
                    </h3>
                    <p className="text-slate-400 max-w-sm">
                      We&apos;ll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-4 text-sm text-[#00F0FF] hover:text-[#00F0FF]/80 underline underline-offset-4 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name */}
                    <div className="input-field relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        required
                        aria-label="Your name"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00F0FF]/40 focus:ring-1 focus:ring-[#00F0FF]/20 transition-all duration-300"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="input-field relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Business Name *"
                        required
                        aria-label="Business name"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00F0FF]/40 focus:ring-1 focus:ring-[#00F0FF]/20 transition-all duration-300"
                      />
                    </div>

                    {/* Email */}
                    <div className="input-field relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        required
                        aria-label="Email address"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00F0FF]/40 focus:ring-1 focus:ring-[#00F0FF]/20 transition-all duration-300"
                      />
                    </div>

                    {/* Phone */}
                    <div className="input-field relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number (optional)"
                        aria-label="Phone number"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00F0FF]/40 focus:ring-1 focus:ring-[#00F0FF]/20 transition-all duration-300"
                      />
                    </div>

                    {/* Business Type */}
                    <div className="input-field relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        aria-label="Business type"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-[#00F0FF]/40 focus:ring-1 focus:ring-[#00F0FF]/20 transition-all duration-300 [&>option]:bg-[#111127] [&>option]:text-white"
                      >
                        <option value="" disabled className="text-slate-500">
                          Select Business Type
                        </option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-slate-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="input-field relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500 pointer-events-none" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business needs (optional)"
                        rows={4}
                        aria-label="Your message"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00F0FF]/40 focus:ring-1 focus:ring-[#00F0FF]/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Error message */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{error}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] text-[#0A0A1A] font-semibold py-3.5 px-6 rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Book Your Free Consultation</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right column — Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.title === 'WhatsApp' ? '_blank' : undefined}
                  rel={card.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card group flex items-start gap-4 rounded-xl border border-white/[0.06] p-5 bg-[rgba(17,17,39,0.7)] backdrop-blur-xl hover:border-[#00F0FF]/20 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)] transition-all duration-300 cursor-pointer"
                  aria-label={card.title}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center group-hover:bg-[#00F0FF]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#00F0FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {card.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  {card.action && (
                    <span className="flex-shrink-0 text-xs text-[#00F0FF] font-medium border border-[#00F0FF]/20 rounded-lg px-3 py-1.5 group-hover:bg-[#00F0FF]/10 transition-colors duration-300 self-center">
                      {card.action}
                    </span>
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-2 text-slate-500 text-sm"
        >
          <Lock className="w-4 h-4" />
          <span>
            Your information is secure and never shared with third parties.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
