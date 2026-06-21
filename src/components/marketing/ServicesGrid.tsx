import Link from 'next/link'
import { Bot, Mic, Workflow, Target, Calendar, HeadphonesIcon, ArrowRight } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'
import { Tilt3D } from '@/components/shared/Tilt3D'

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Deploy intelligent chatbots that handle customer inquiries, qualify leads, and book appointments around the clock.',
    href: '/services/chatbots',
    color: 'text-primary bg-primary/10',
    metrics: '40% more leads',
  },
  {
    icon: Mic,
    title: 'AI Voice Agents',
    description: 'Never miss another call. Our AI voice agents answer every call with a human-like voice and handle the full conversation.',
    href: '/services/voice-agents',
    color: 'text-sky-600 bg-sky-500/10',
    metrics: '100% call coverage',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: 'Connect your tools and automate repetitive workflows — from CRM updates to email sequences and reporting.',
    href: '/services/business-automation',
    color: 'text-accent bg-accent/10',
    metrics: '70% less manual work',
  },
  {
    icon: Target,
    title: 'Lead Qualification',
    description: 'Automatically score and route leads so your team only speaks with prospects who are ready to buy.',
    href: '/services/lead-qualification',
    color: 'text-warm bg-warm/10',
    metrics: '3x sales efficiency',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Intelligent scheduling that syncs with your calendar, sends reminders, and cuts no-shows by 60%.',
    href: '/services/appointment-booking',
    color: 'text-sky-600 bg-sky-500/10',
    metrics: '60% fewer no-shows',
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer Support',
    description: 'Automate 80% of support tickets with an AI that understands your products and escalates when needed.',
    href: '/services/customer-support',
    color: 'text-rose-600 bg-rose-500/10',
    metrics: '80% auto-resolved',
  },
]

export function ServicesGrid() {
  return (
    <section className="section-py bg-bg-base">
      <div className="page-container">
        <AnimatedSection className="text-center mb-14">
          <span className="section-eyebrow">What We Build</span>
          <h2 className="section-title max-w-2xl mx-auto">
            AI systems that work while you sleep
          </h2>
          <p className="section-desc mx-auto text-center">
            Every service is purpose-built to solve a specific revenue leak in your business — and they all work together.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(svc => {
            const Icon = svc.icon
            return (
              <StaggerItem key={svc.href}>
                <Tilt3D className="h-full rounded-2xl">
                  <Link
                    href={svc.href}
                    className="card-hover p-6 h-full flex flex-col group"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${svc.color} mb-5 transition-transform duration-200 group-hover:scale-110`} style={{ transform: 'translateZ(30px)' }}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="heading-md text-text-primary mb-2">{svc.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">{svc.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="badge-accent text-xs">{svc.metrics}</span>
                      <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </Link>
                </Tilt3D>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
