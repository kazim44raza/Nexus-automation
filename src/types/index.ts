export type { Role, LeadStatus, LeadSource, ServiceInterest, Industry, MessageRole, AppointmentStatus, SubmissionStatus } from '@prisma/client'

export interface NavItem {
  label: string
  href: string
  description?: string
  children?: NavItem[]
}

export interface ServicePage {
  slug: string
  title: string
  description: string
  icon: string
  heroTag: string
  heroTitle: string
  heroDesc: string
  benefits: Benefit[]
  steps: Step[]
  metrics: Metric[]
  faqs: FAQItem[]
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface Metric {
  value: string
  label: string
  description?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating?: number
  industry?: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  businessName?: string
  industry?: string
  serviceInterest?: string
  challenges?: string
  message: string
}
