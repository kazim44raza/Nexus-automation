'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2, Send } from 'lucide-react'

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
const services = ['AI Chatbots', 'AI Voice Agents', 'Business Automation', 'Lead Qualification', 'Appointment Booking', 'Customer Support', 'Not sure yet']

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
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="heading-md text-text-primary mb-2">Message received!</h3>
        <p className="text-text-secondary">We&apos;ll get back to you within 1 business day. Check your email for a confirmation.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label">Full Name *</label>
          <input {...register('name')} className="input" placeholder="Your name" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="label">Email Address *</label>
          <input {...register('email')} type="email" className="input" placeholder="you@company.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label">Phone</label>
          <input {...register('phone')} type="tel" className="input" placeholder="+1 (555) 000-0000" />
        </div>
        <div>
          <label className="label">Business Name</label>
          <input {...register('businessName')} className="input" placeholder="Your company" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label">Industry</label>
          <select {...register('industry')} className="input">
            <option value="">Select your industry</option>
            {industries.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label className="label">Service Interest</label>
          <select {...register('serviceInterest')} className="input">
            <option value="">What are you looking for?</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="label">Current Challenges</label>
        <input {...register('challenges')} className="input" placeholder="e.g. Missing calls after hours, manual follow-ups taking too long..." />
      </div>

      <div>
        <label className="label">Message *</label>
        <textarea {...register('message')} rows={4} className="input resize-none" placeholder="Tell us about your business and what you're hoping to automate..." />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary-lg w-full">
        {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <><Send className="w-4 h-4" /> Send Message</>}
      </button>

      <p className="text-center text-xs text-text-muted">We typically respond within 4 hours during business days.</p>
    </form>
  )
}
