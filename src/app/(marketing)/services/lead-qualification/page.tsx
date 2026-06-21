import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/marketing/ServicePageTemplate'
import { Target, Filter, Zap, BarChart3, Users, Bell, TrendingUp, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Lead Qualification — Stop Chasing Cold Leads | Nexus Automation',
  description: 'Automatically score and qualify every lead so your sales team only talks to buyers. Increase sales efficiency by 3x.',
}

export default function LeadQualificationPage() {
  return (
    <ServicePageTemplate
      data={{
        tag: 'Lead Qualification',
        headline: 'Let AI decide which leads are worth your time',
        subheadline: 'Our AI lead qualification system automatically scores every inbound lead based on your criteria and routes only the best prospects to your sales team — in real time.',
        heroVisual: (
          <div className="card-dark p-5 max-w-sm ml-auto space-y-3">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Lead Scoring Dashboard</p>
            {[
              { name: 'Dr. Sarah Chen', score: 94, status: 'Hot', color: 'text-accent-light bg-accent/20' },
              { name: 'James Wilson', score: 78, status: 'Warm', color: 'text-warm-light bg-warm/20' },
              { name: 'Maria Rodriguez', score: 61, status: 'Warm', color: 'text-warm-light bg-warm/20' },
              { name: 'David Thompson', score: 23, status: 'Cold', color: 'text-white/40 bg-white/5' },
            ].map((lead, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-3 py-2.5">
                <div className="w-7 h-7 bg-primary/20 rounded-lg flex items-center justify-center text-xs font-bold text-primary-light">
                  {lead.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-semibold truncate">{lead.name}</p>
                  <div className="w-full bg-white/10 rounded-full h-1 mt-1">
                    <div className="h-1 rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${lead.score}%` }} />
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${lead.color}`}>{lead.status}</span>
                <span className="text-white/60 text-xs font-mono">{lead.score}</span>
              </div>
            ))}
          </div>
        ),
        metrics: [
          { value: '3x', label: 'Sales Efficiency', context: 'Your team talks to 3x more buyers' },
          { value: '40%', label: 'Higher Close Rate', context: 'By focusing only on qualified leads' },
          { value: '<30s', label: 'Qualification Speed', context: 'Every lead scored instantly' },
        ],
        benefits: [
          { icon: <Target className="w-5 h-5" />, title: 'Custom Scoring Criteria', description: 'Define what makes a lead valuable for your business — industry, budget, timeline, company size — and we build the logic.' },
          { icon: <Filter className="w-5 h-5" />, title: 'Automatic Lead Routing', description: 'Hot leads go directly to your best closer. Warm leads enter nurture sequences. Cold leads are filed for future contact.' },
          { icon: <Bell className="w-5 h-5" />, title: 'Instant Hot Lead Alerts', description: 'The moment a lead hits your threshold, your sales team gets an SMS, email, and CRM notification with full context.' },
          { icon: <Users className="w-5 h-5" />, title: 'Behavioral Scoring', description: 'Score leads based on what they click, pages they visit, questions they ask, and forms they fill — not just demographics.' },
          { icon: <TrendingUp className="w-5 h-5" />, title: 'Pipeline Visibility', description: 'See your full lead pipeline with scores, status, and history. Know exactly what\'s in each stage at all times.' },
          { icon: <BarChart3 className="w-5 h-5" />, title: 'Conversion Reporting', description: 'Track which lead sources produce the highest scores and conversion rates. Double down on what works.' },
        ],
        steps: [
          { number: '01', title: 'Define Your Ideal Customer', description: 'We work with your sales team to build a precise lead scoring model based on your best historical customers.', detail: '1 day · ICP workshop included' },
          { number: '02', title: 'Build Scoring & Routing Logic', description: 'We build the scoring engine, connect it to your lead sources, and set up the routing rules for each lead tier.', detail: '3–5 days · CRM integration included' },
          { number: '03', title: 'Monitor & Refine', description: 'We track conversion rates by score tier and continuously calibrate the model as you collect more sales data.', detail: 'Ongoing · Model improves over time' },
        ],
        faqs: [
          { question: 'Can I customize the scoring criteria?', answer: 'Absolutely. We work with you to build scoring that reflects your specific business. You can weight any combination of demographic, behavioral, and engagement signals.' },
          { question: 'Does this work with leads from multiple sources?', answer: 'Yes — we unify leads from your website, chatbot, ads, social media, phone, and referrals into one scoring system.' },
          { question: 'What CRMs do you integrate with?', answer: 'HubSpot, GoHighLevel, Salesforce, Pipedrive, Zoho CRM, and most others via API.' },
          { question: 'How long until I see results?', answer: 'Most clients see measurable improvement in sales team efficiency within the first two weeks of deployment.' },
        ],
        ctaTitle: 'Let your best leads find your best closers',
        ctaDesc: 'We\'ll show you how our lead scoring system would work with your specific lead sources and CRM.',
      }}
    />
  )
}
