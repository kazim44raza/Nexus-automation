import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/marketing/ServicePageTemplate'
import { Workflow, Clock, BarChart3, Link2, Shield, RefreshCw, Database, Mail, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Process Automation — Eliminate Manual Work | Nexus Automation',
  description: 'Automate repetitive business workflows with AI. Connect your CRM, calendar, email, and tools. Reduce manual admin by 70%.',
}

export default function BusinessAutomationPage() {
  return (
    <ServicePageTemplate
      data={{
        tag: 'Business Automation',
        headline: 'Stop doing manually what machines can do better',
        subheadline: 'We design and build end-to-end automation workflows that connect your tools, eliminate data entry, and free your team to focus on work that actually requires humans.',
        heroVisual: (
          <div className="card-dark p-5 max-w-sm ml-auto space-y-3">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Live Automation Flow</p>
            {[
              { from: 'New Lead in CRM', to: 'HubSpot', color: 'bg-primary/20 text-primary-light', icon: Database },
              { from: 'Email Sequence Triggered', to: 'Resend', color: 'bg-sky-500/20 text-sky-300', icon: Mail },
              { from: 'Calendar Invite Sent', to: 'Calendly', color: 'bg-accent/20 text-accent-light', icon: Calendar },
              { from: 'Slack Notification', to: 'Sales Team', color: 'bg-warm/20 text-warm-light', icon: MessageSquare },
              { from: 'CRM Status Updated', to: 'Salesforce', color: 'bg-sky-500/20 text-sky-300', icon: CheckCircle2 },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className={`px-2.5 py-1.5 rounded-lg text-xs font-medium ${step.color} flex items-center gap-1.5 flex-1`}>
                  <step.icon className="w-3.5 h-3.5 flex-shrink-0" />{step.from}
                </div>
                <span className="text-white/20 text-xs">→</span>
                <span className="text-white/40 text-xs">{step.to}</span>
              </div>
            ))}
            <div className="border-t border-white/10 pt-2 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent-light rounded-full animate-pulse" />
              <span className="text-accent-light text-xs">All automated · 0 manual steps</span>
            </div>
          </div>
        ),
        metrics: [
          { value: '70%', label: 'Less Manual Work', context: 'Average time saved per client' },
          { value: '15+', label: 'Integrations', context: 'Pre-built connectors available' },
          { value: '< 2wks', label: 'Time to Deploy', context: 'From kickoff to live automation' },
        ],
        benefits: [
          { icon: <Workflow className="w-5 h-5" />, title: 'End-to-End Workflows', description: 'Connect every step of your customer journey into one seamless automated flow — no gaps, no manual handoffs.' },
          { icon: <Link2 className="w-5 h-5" />, title: '15+ Native Integrations', description: 'HubSpot, GoHighLevel, Salesforce, Calendly, Airtable, Zapier, Make, Slack, Twilio, Stripe, and more.' },
          { icon: <Clock className="w-5 h-5" />, title: 'Timed Sequences', description: 'Send follow-ups, reminders, and nurture emails at exactly the right moment — automatically triggered by user actions.' },
          { icon: <RefreshCw className="w-5 h-5" />, title: 'Real-Time Sync', description: 'Data stays synchronized across all your tools in real time. No more copy-pasting between systems.' },
          { icon: <BarChart3 className="w-5 h-5" />, title: 'Automation Analytics', description: 'See exactly how many tasks have been automated, time saved, and error rates across all workflows.' },
          { icon: <Shield className="w-5 h-5" />, title: 'Error Handling & Alerts', description: 'Every workflow has built-in error detection. Get notified instantly if something needs human attention.' },
        ],
        steps: [
          { number: '01', title: 'Workflow Audit', description: 'We map your current processes, identify every manual step, and design the automation architecture.', detail: '1–2 days · Includes process mapping document' },
          { number: '02', title: 'Build & Integrate', description: 'We build each workflow, connect your tools via API, and test every path with real data.', detail: '5–10 days depending on complexity' },
          { number: '03', title: 'Deploy & Monitor', description: 'Workflows go live with full monitoring. We handle maintenance, updates, and improvements as your business evolves.', detail: 'Ongoing · Included in all plans' },
        ],
        faqs: [
          { question: 'Do I need to replace my existing tools?', answer: 'No — we work with what you already have. Our job is to connect your existing tools and make them work together automatically.' },
          { question: 'What\'s the difference between this and Zapier?', answer: 'Zapier is a DIY tool for simple if-this-then-that connections. We design and build complex, multi-step business processes with error handling, branching logic, and AI decision-making — then manage them for you.' },
          { question: 'Can you automate processes that involve human approval?', answer: 'Yes. We build human-in-the-loop automations where specific steps pause for a person to review and approve before continuing.' },
          { question: 'What if something breaks?', answer: 'All workflows are monitored 24/7. If something fails, we\'re alerted immediately and fix it — usually before you even notice.' },
        ],
        ctaTitle: 'Map your automation opportunities — free',
        ctaDesc: 'We\'ll audit your current workflows, identify every manual bottleneck, and show you exactly what we\'d automate and the projected time savings.',
      }}
    />
  )
}
