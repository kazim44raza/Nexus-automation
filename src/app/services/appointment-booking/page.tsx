import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, RefreshCw, BellRing, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Appointment Booking | Nexus Automation',
  description: 'Intelligent AI-powered appointment scheduling that syncs with your calendar, sends reminders, and reduces no-shows. By Nexus Automation.',
  openGraph: {
    title: 'AI Appointment Booking | Nexus Automation',
    description: 'Intelligent AI-powered appointment scheduling that syncs with your calendar, sends reminders, and reduces no-shows.',
  },
};

const features = [
  { icon: Calendar, title: 'Smart Calendar Sync', description: 'Integrates natively with Google Calendar, Outlook, Calendly, and other major scheduling platforms.' },
  { icon: Clock, title: '24/7 Scheduling', description: 'Allow leads and clients to book appointments at any time, even outside of normal business hours.' },
  { icon: BellRing, title: 'Automated Reminders', description: 'Reduce no-shows by up to 60% with automated email and SMS reminders leading up to the appointment.' },
  { icon: CheckCircle2, title: 'Instant Confirmation', description: 'Provide immediate confirmation to the customer with all necessary details and a calendar invite.' },
  { icon: UserCheck, title: 'Pre-appointment Intake', description: 'Gather necessary information automatically before the appointment begins to save time.' },
  { icon: RefreshCw, title: 'Easy Rescheduling', description: 'Allow clients to easily reschedule or cancel appointments without needing to speak to a human agent.' },
];

const steps = [
  { num: '01', title: 'Connect Your Calendar', description: 'We securely link your existing calendar system to our AI booking engine.' },
  { num: '02', title: 'Define Your Rules', description: 'Set your availability, buffer times, and any specific rules for when appointments can be booked.' },
  { num: '03', title: 'Start Booking 24/7', description: 'Your AI agent handles all scheduling, confirmations, and reminders automatically.' },
];

export default function AppointmentBookingPage() {
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
              <Calendar className="w-4 h-4 text-[#00F0FF]" />
              <span className="text-sm text-[#00F0FF]">AI Appointment Booking</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fill Your Calendar on <span className="bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent">Autopilot</span>
            </h1>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Stop losing prospects to slow scheduling processes. Our AI appointment booking system handles the back-and-forth, syncs with your calendar, and secures meetings 24/7 — ensuring you wake up to a calendar full of qualified appointments.
            </p>
            <p className="text-base text-slate-400 mb-6 leading-relaxed">
              The modern consumer expects instant gratification. If they have to wait for your team to check their schedule and reply to an email, they might just go to a competitor. Nexus Automation integrates an intelligent scheduling layer directly into your chat, voice, and SMS channels, allowing prospects to book a time that works for them, the moment they are most interested.
            </p>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">
              Beyond just booking the time, our system reduces costly no-shows through intelligent, automated SMS and email reminders. It can even handle rescheduling requests autonomously, freeing up your team to focus on the actual meetings rather than the logistics of organizing them.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent">Smart Scheduling Features</h2>
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
          <Calendar className="w-12 h-12 text-[#00F0FF] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Booking More Meetings</h2>
          <p className="text-lg text-slate-400 mb-8">Let us show you how AI can transform your scheduling process, reduce no-shows, and increase your revenue.</p>
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
