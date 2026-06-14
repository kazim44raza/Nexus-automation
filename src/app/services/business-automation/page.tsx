import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Workflow, GitBranch, Zap, Database, Mail, Calendar, BarChart3, Settings, Plug, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Automation | Nexus Automation',
  description: 'End-to-end business automation connecting your CRM, calendar, email, and messaging into one seamless AI-powered workflow. Built by Nexus Automation.',
  openGraph: {
    title: 'Business Automation | Nexus Automation',
    description: 'End-to-end business automation connecting your CRM, calendar, email, and messaging into one seamless AI-powered workflow.',
  },
};

const features = [
  { icon: GitBranch, title: 'Workflow Orchestration', description: 'Design and automate complex multi-step workflows that connect every part of your business operations seamlessly.' },
  { icon: Database, title: 'CRM Integration', description: 'Sync leads, contacts, and deals with your CRM automatically. Support for HubSpot, GoHighLevel, Salesforce, and more.' },
  { icon: Mail, title: 'Email & SMS Automation', description: 'Trigger personalized follow-up emails and SMS messages based on lead behavior, appointments, and custom events.' },
  { icon: Calendar, title: 'Calendar Sync', description: 'Real-time calendar integration ensures appointments are never double-booked and reminders are sent automatically.' },
  { icon: BarChart3, title: 'Analytics & Reporting', description: 'Track every lead, conversion, and interaction with detailed dashboards that show your automation ROI.' },
  { icon: Plug, title: 'Third-Party Integrations', description: 'Connect with Zapier, Make, Airtable, Google Sheets, Slack, and hundreds of other tools your business already uses.' },
];

const steps = [
  { num: '01', title: 'Audit Your Workflows', description: 'We map out your current business processes to identify bottlenecks, manual tasks, and automation opportunities.' },
  { num: '02', title: 'Design & Build', description: 'Our team architects custom automation workflows tailored to your specific business logic, tools, and goals.' },
  { num: '03', title: 'Deploy & Optimize', description: 'We launch your automation system, monitor performance, and continuously optimize for maximum efficiency.' },
];

export default function BusinessAutomationPage() {
  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[rgba(10,10,26,0.9)] backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-bold text-xl bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent">Nexus</span>
            <span className="font-bold text-xl text-white">Automation</span>
          </Link>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all">
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#00F0FF] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/5 mb-6">
              <Workflow className="w-4 h-4 text-[#00F0FF]" />
              <span className="text-sm text-[#00F0FF]">Business Automation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              End-to-End <span className="bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent">Business Automation</span>
            </h1>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Stop wasting hours on repetitive manual tasks. Nexus Automation connects your CRM, calendar, email, messaging platforms, and internal tools into one seamless, intelligent workflow — powered by AI and designed to scale with your business.
            </p>
            <p className="text-base text-slate-400 mb-6 leading-relaxed">
              Our business automation solutions go far beyond simple task scheduling. We architect complete automation ecosystems that understand your business logic, respond to real-time events, and make intelligent decisions that drive growth. From lead capture to customer onboarding, from appointment scheduling to follow-up campaigns — every touchpoint is automated, optimized, and measurable.
            </p>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">
              Whether you are a solo practice looking to eliminate administrative overhead or a multi-location business needing consistent processes across teams, our custom automation solutions are designed to fit your exact workflow requirements. We integrate with the tools you already use and build bridges between systems that were never designed to talk to each other.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent">Automation Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="relative bg-[rgba(17,17,39,0.7)] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 hover:border-[#00F0FF]/25 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00F0FF] to-[#3B82F6] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative bg-[rgba(17,17,39,0.5)] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8">
                <span className="text-5xl font-bold text-[#00F0FF]/10 absolute top-4 right-6">{step.num}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ready */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Integration-Ready Architecture</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">Our automation platform is built to integrate with the tools and platforms your business already relies on — including HubSpot, GoHighLevel, Calendly, Airtable, Zapier, Make, Google Workspace, and hundreds more.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['HubSpot', 'GoHighLevel', 'Calendly', 'Airtable', 'Zapier', 'Make', 'Google Workspace', 'Slack', 'Stripe'].map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-slate-300">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RefreshCw className="w-12 h-12 text-[#00F0FF] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Automate Your Business?</h2>
          <p className="text-lg text-slate-400 mb-8">Book a free consultation and let us show you how custom automation can save time, reduce errors, and grow your revenue.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#0A0A1A] bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.4)] transition-all">
            Book Your Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.06] text-center">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Nexus Automation. All rights reserved.</p>
      </footer>
    </div>
  );
}
