'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  businessName: z.string().optional(),
  industry: z.string().optional(),
  serviceInterest: z.string().optional(),
  challenges: z.string().optional(),
  message: z.string().min(10, 'Please describe how we can help'),
})

type FormData = z.infer<typeof schema>

const industries = ['Healthcare', 'Dental', 'Real Estate', 'Legal', 'Fitness', 'Automotive', 'Home Services', 'E-Commerce', 'Professional Services', 'Other']
const services = ['AI Chatbots', 'AI Voice Agents', 'WhatsApp Automation', 'Business Automation', 'Lead Qualification', 'Appointment Booking', 'Customer Support', 'Not sure yet']

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // silent fail — form is still usable
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 bg-bg-surface rounded-2xl shadow-sm border border-border px-6">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-3">Message received.</h3>
        <p className="text-text-secondary text-lg">We&apos;ll get back to you within 1 business day.</p>
      </div>
    )
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-bg-alt text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all placeholder:text-text-muted"
  const labelClass = "block text-sm font-semibold text-text-secondary mb-1.5"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={labelClass}>Full Name *</label>
          <input id="contact-name" {...register('name')} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} className={cn(inputClass, errors.name && "border-red-500 focus:ring-red-500/30 focus:border-red-500")} placeholder="Your name" />
          {errors.name && <p id="contact-name-error" className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>Email Address *</label>
          <input id="contact-email" {...register('email')} type="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className={cn(inputClass, errors.email && "border-red-500 focus:ring-red-500/30 focus:border-red-500")} placeholder="you@company.com" />
          {errors.email && <p id="contact-email-error" className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className={labelClass}>Phone</label>
          <input id="contact-phone" {...register('phone')} type="tel" className={inputClass} placeholder="+1 (555) 000-0000" />
        </div>
        <div>
          <label htmlFor="contact-business" className={labelClass}>Business Name</label>
          <input id="contact-business" {...register('businessName')} className={inputClass} placeholder="Your company" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-industry" className={labelClass}>Industry</label>
          <select id="contact-industry" {...register('industry')} className={inputClass}>
            <option value="">Select your industry</option>
            {industries.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="contact-service" className={labelClass}>Service Interest</label>
          <select id="contact-service" {...register('serviceInterest')} className={inputClass}>
            <option value="">What are you looking for?</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-challenges" className={labelClass}>Current Challenges</label>
        <input id="contact-challenges" {...register('challenges')} className={inputClass} placeholder="e.g. Missing calls after hours, manual follow-ups taking too long..." />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>Message *</label>
        <textarea id="contact-message" {...register('message')} rows={4} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} className={cn(inputClass, "resize-none", errors.message && "border-red-500 focus:ring-red-500/30 focus:border-red-500")} placeholder="Tell us about your business and what you're hoping to automate..." />
        {errors.message && <p id="contact-message-error" className="text-red-500 text-xs mt-1.5 font-medium">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-primary text-text-primary font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all disabled:opacity-50 disabled:pointer-events-none text-lg">
        {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</> : <><Send className="w-5 h-5" /> Send Message</>}
      </button>

      <p className="text-center text-sm text-text-muted">We typically respond within 4 hours during business days.</p>
    </form>
  )
}
