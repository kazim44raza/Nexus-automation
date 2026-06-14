import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Target, Filter, Zap, Users, ShieldCheck, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Lead Qualification | Nexus Automation',
  description: 'Automatically score and qualify every lead with AI-powered qualification that ensures your team talks to high-value prospects. By Nexus Automation.',
  openGraph: {
    title: 'AI Lead Qualification | Nexus Automation',
    description: 'Automatically score and qualify every lead with AI-powered qualification that ensures your team talks to high-value prospects.',
  },
};

const features = [
  { icon: Target, title: 'Precision Scoring', description: 'Assign scores to leads based on their responses, behavior, and demographic data to identify high-value prospects.' },
  { icon: Filter, title: 'Automated Routing', description: 'Automatically route qualified leads directly to your sales team, while nurturing unqualified leads automatically.' },
  { icon: Zap, title: 'Instant Qualification', description: 'Qualify leads in real-time during conversations on your website, via text, or over the phone.' },
  { icon: Users, title: 'Increased Sales Efficiency', description: 'Stop your sales team from wasting time on unqualified tire-kickers and let them focus on closing deals.' },
  { icon: ShieldCheck, title: 'Custom Criteria', description: 'We build the AI to qualify leads based entirely on your specific business requirements and ideal customer profile.' },
  { icon: BarChart3, title: 'Data Enrichment', description: 'The AI can automatically ask follow-up questions to gather necessary data before passing the lead to a human.' },
];

const steps = [
  { num: '01', title: 'Define Your Ideal Customer', description: 'We work with you to outline the exact criteria that make a lead qualified for your business.' },
  { num: '02', title: 'AI Qualification Engine', description: 'We deploy an AI agent that naturally asks the right questions to determine a lead\'s quality.' },
  { num: '03', title: 'Seamless Handoff', description: 'Qualified leads are instantly sent to your team or calendar, while others are entered into a nurture sequence.' },
];

export default function LeadQualificationPage() {
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
              <Target className="w-4 h-4 text-[#00F0FF]" />
              <span className="text-sm text-[#00F0FF]">AI Lead Qualification</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Only Talk to <span className="bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent">Qualified Buyers</span>
            </h1>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Your sales team\'s time is expensive. Stop wasting it on unqualified leads. Our AI lead qualification systems instantly engage prospects, ask the right questions, score them based on your criteria, and seamlessly route the best opportunities to your team.
            </p>
            <p className="text-base text-slate-400 mb-6 leading-relaxed">
              Traditional forms have low conversion rates, and relying entirely on human SDRs is costly and slow. Nexus Automation replaces the manual triage process with intelligent, conversational AI agents that operate 24/7 across your website, SMS, and voice channels. The AI naturally converses with the lead, uncovering their budget, timeline, and needs without feeling like an interrogation.
            </p>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">
              By implementing automated lead qualification, you ensure that your closers are only spending their energy on high-probability deals. Unqualified or low-intent leads aren\'t discarded; they are automatically routed into long-term automated nurture campaigns, preserving your pipeline while maximizing immediate ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent">Intelligent Qualification</h2>
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

      {/* CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-12 h-12 text-[#00F0FF] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Supercharge Your Sales Team</h2>
          <p className="text-lg text-slate-400 mb-8">Book a free consultation and learn how AI lead qualification can improve your close rates and reduce wasted time.</p>
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
