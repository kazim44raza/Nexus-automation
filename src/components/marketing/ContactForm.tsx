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
      <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100 px-6">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="font-geist text-2xl font-bold text-gray-900 mb-3">Message received!</h3>
        <p className="text-gray-500 text-lg">We&apos;ll get back to you within 1 business day. Check your email for a confirmation.</p>
      </div>
    )
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all placeholder:text-gray-400"
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register('name')} className={cn(inputClass, errors.name && "border-red-500 focus:ring-red-500/30 focus:border-red-500")} placeholder="Your name" />
          {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input {...register('email')} type="email" className={cn(inputClass, errors.email && "border-red-500 focus:ring-red-500/30 focus:border-red-500")} placeholder="you@company.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone</label>
          <input {...register('phone')} type="tel" className={inputClass} placeholder="+1 (555) 000-0000" />
        </div>
        <div>
          <label className={labelClass}>Business Name</label>
          <input {...register('businessName')} className={inputClass} placeholder="Your company" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Industry</label>
          <select {...register('industry')} className={inputClass}>
            <option value="">Select your industry</option>
            {industries.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Service Interest</label>
          <select {...register('serviceInterest')} className={inputClass}>
            <option value="">What are you looking for?</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Current Challenges</label>
        <input {...register('challenges')} className={inputClass} placeholder="e.g. Missing calls after hours, manual follow-ups taking too long..." />
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea {...register('message')} rows={4} className={cn(inputClass, "resize-none", errors.message && "border-red-500 focus:ring-red-500/30 focus:border-red-500")} placeholder="Tell us about your business and what you're hoping to automate..." />
        {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-primary text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.01] transition-all disabled:opacity-50 disabled:pointer-events-none text-lg">
        {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</> : <><Send className="w-5 h-5" /> Send Message</>}
      </button>

      <p className="text-center text-sm text-gray-500">We typically respond within 4 hours during business days.</p>
    </form>
  )
}
