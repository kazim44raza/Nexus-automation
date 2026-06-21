import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/marketing/ServicePageTemplate'
import { HeadphonesIcon, Zap, BarChart3, Users, Shield, Globe, Clock, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Support Automation — Resolve 80% of Tickets Automatically | Nexus Automation',
  description: 'AI customer support that resolves 80% of tickets automatically. Faster resolutions, lower costs, happier customers.',
}

export default function CustomerSupportPage() {
  return (
    <ServicePageTemplate
      data={{
        tag: 'Customer Support Automation',
        headline: 'Resolve 80% of support tickets without human touch',
        subheadline: 'Our AI support agent handles the questions your team answers 100 times a day — orders, returns, FAQs, troubleshooting — instantly, consistently, 24/7. Your team focuses on cases that actually need them.',
        heroVisual: (
          <div className="card-dark p-5 max-w-sm ml-auto space-y-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white font-semibold text-sm">Support Dashboard</p>
              <span className="text-white/40 text-xs">Today</span>
            </div>
            {[
              { label: 'Tickets Received', value: '143', trend: '' },
              { label: 'AI Resolved', value: '114', trend: '79.7%', color: 'text-accent-light' },
              { label: 'Escalated to Human', value: '29', trend: '20.3%', color: 'text-white/50' },
              { label: 'Avg Resolution Time', value: '< 30s', trend: '↓ 96%', color: 'text-accent-light' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2.5">
                <span className="text-white/50 text-xs">{stat.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold text-sm">{stat.value}</span>
                  {stat.trend && <span className={`text-xs ${stat.color}`}>{stat.trend}</span>}
                </div>
              </div>
            ))}
          </div>
        ),
        metrics: [
          { value: '80%', label: 'Tickets Auto-Resolved', context: 'Without any human involvement' },
          { value: '65%', label: 'Cost Reduction', context: 'In customer support spend' },
          { value: '< 30s', label: 'Resolution Time', context: 'For AI-handled tickets' },
        ],
        benefits: [
          { icon: <Zap className="w-5 h-5" />, title: 'Instant First Response', description: 'Every ticket gets an intelligent response within seconds — not hours. Customer satisfaction starts with speed.' },
          { icon: <HeadphonesIcon className="w-5 h-5" />, title: 'Deep Product Knowledge', description: 'The AI is trained on your products, policies, FAQs, and common issues so answers are accurate and on-brand.' },
          { icon: <Globe className="w-5 h-5" />, title: 'Omnichannel Coverage', description: 'Handle tickets from email, live chat, WhatsApp, SMS, and social — all from one AI system.' },
          { icon: <Users className="w-5 h-5" />, title: 'Smart Human Escalation', description: 'Complex or sensitive issues are automatically routed to a human with full conversation context attached.' },
          { icon: <Clock className="w-5 h-5" />, title: '24/7 Availability', description: 'Support that never takes a day off. Holiday weekend, 3AM — every customer gets an immediate response.' },
          { icon: <BarChart3 className="w-5 h-5" />, title: 'Support Analytics', description: 'See ticket volume trends, AI resolution rates, top issues, and CSAT scores in one dashboard.' },
        ],
        steps: [
          { number: '01', title: 'Knowledge Base Build', description: 'We ingest your existing documentation, FAQs, policies, and common support tickets to train your AI agent.', detail: '1–3 days · We handle the data prep' },
          { number: '02', title: 'Channel Integration', description: 'We connect the AI to your helpdesk (Zendesk, Intercom, Freshdesk, or custom), email, and chat channels.', detail: '3–5 days · Includes testing with real tickets' },
          { number: '03', title: 'Monitor & Improve', description: 'We track resolution rates and continuously add to the knowledge base as new issues emerge.', detail: 'Ongoing · Improves with every ticket' },
        ],
        faqs: [
          { question: 'What helpdesk platforms do you integrate with?', answer: 'Zendesk, Intercom, Freshdesk, Help Scout, Gorgias (for ecommerce), and custom email inboxes. We can also build a standalone chat widget.' },
          { question: 'How do you handle sensitive customer data?', answer: 'All customer data is encrypted in transit and at rest. We sign DPAs with all clients and ensure the AI never retains personally identifiable information beyond the conversation.' },
          { question: 'What if the AI gives a wrong answer?', answer: 'We set up human review for low-confidence responses. Over time, as we validate more responses, the AI confidence and accuracy improve significantly.' },
          { question: 'Can it handle product-specific troubleshooting?', answer: 'Yes — if you have technical documentation, troubleshooting guides, or video tutorials, we can train the AI to walk customers through solutions step-by-step.' },
        ],
        ctaTitle: 'Scale your support without scaling your team',
        ctaDesc: 'We\'ll show you how many of your current support tickets could be automated — and what the cost savings would look like.',
      }}
    />
  )
}
