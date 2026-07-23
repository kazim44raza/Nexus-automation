'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'

const serviceOptions = [
  'Calls', 'Website Leads', 'WhatsApp', 'Booking', 'Follow-up', 'Internal Workflows', 'Customer Support', 'Not Sure'
]

const industries = [
  'Healthcare', 'Dental', 'Real Estate', 'Legal', 'Fitness', 'E-commerce', 'Home Services', 'Professional Services', 'Other'
]

export function MultiStepContactForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    services: [] as string[],
    challenges: '',
    name: '',
    email: '',
    phone: '',
    businessName: '',
    industry: '',
    contactMethod: 'Email',
    preferredTime: ''
  })

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const nextStep = () => setStep(s => Math.min(s + 1, 4))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const message = `
Challenges: ${formData.challenges}
Preferred Contact Method: ${formData.contactMethod}
Preferred Time: ${formData.preferredTime}
      `.trim()

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.businessName,
          industry: formData.industry,
          serviceInterest: formData.services.join(', '),
          challenges: formData.challenges,
          message: message
        }),
      })

      if (res.ok) {
        setIsSuccess(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="heading-md text-text-primary mb-3">Request Received</h3>
        <p className="text-text-secondary">We'll review your details and get back to you within 1 business day.</p>
      </motion.div>
    )
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Step {step} of 4</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-1.5 w-8 rounded-full ${i <= step ? 'bg-primary' : 'bg-border'}`} />
          ))}
        </div>
      </div>

      <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep() }}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <div>
                <h3 className="heading-sm text-text-primary mb-4">What do you want to improve?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map(option => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleService(option)}
                      className={`p-3 text-sm rounded-xl border text-left transition-all ${formData.services.includes(option) ? 'border-primary bg-primary/5 text-primary font-medium' : 'border-border bg-bg-base text-text-secondary hover:border-text-muted'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <div>
                <h3 className="heading-sm text-text-primary mb-4">What challenges are you experiencing?</h3>
                <textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your current bottlenecks..."
                  className="input min-h-[160px] resize-none"
                  required
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
              <h3 className="heading-sm text-text-primary mb-2">Business details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="label">Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="input" />
                </div>
                <div className="space-y-1.5">
                  <label className="label">Email *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="input" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="label">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input" />
                </div>
                <div className="space-y-1.5">
                  <label className="label">Business Name</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="input" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="label">Industry</label>
                <select name="industry" value={formData.industry} onChange={handleChange} className="input">
                  <option value="">Select industry...</option>
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <h3 className="heading-sm text-text-primary mb-2">Preferred contact method</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  {['Email', 'Phone', 'WhatsApp'].map(method => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contactMethod" value={method} checked={formData.contactMethod === method} onChange={handleChange} className="w-4 h-4 text-primary" />
                      <span className="text-sm text-text-secondary">{method}</span>
                    </label>
                  ))}
                </div>
                <div className="space-y-1.5 mt-4">
                  <label className="label">Preferred time to connect (Optional)</label>
                  <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="input">
                    <option value="">Any time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8 pt-6 border-t border-border">
          {step > 1 ? (
            <button type="button" onClick={prevStep} className="btn-secondary">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </button>
          ) : <div />}
          
          {step < 4 ? (
            <button type="submit" className="btn-primary">
              Next Step <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
