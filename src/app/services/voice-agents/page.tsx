import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Clock,
  Brain,
  Shield,
  BarChart3,
  Settings,
  ArrowLeft,
  ArrowRight,
  Mic,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents | Nexus Automation",
  description:
    "AI-powered voice agents that handle calls, qualify leads, and schedule appointments with human-like conversation. Built by Nexus Automation.",
  openGraph: {
    title: "AI Voice Agents | Nexus Automation",
    description:
      "AI-powered voice agents that handle calls, qualify leads, and schedule appointments with human-like conversation. Built by Nexus Automation.",
    type: "website",
    url: "https://nexusautomation.com/services/voice-agents",
    siteName: "Nexus Automation",
  },
};

const features = [
  {
    icon: <Mic className="w-6 h-6 text-[#00F0FF]" />,
    title: "Human-Like Voice",
    description:
      "Powered by the latest neural text-to-speech technology, our voice agents sound natural and conversational — not robotic. Callers often cannot tell they are speaking with AI, creating a premium experience from the first hello.",
  },
  {
    icon: <Brain className="w-6 h-6 text-[#00F0FF]" />,
    title: "Intelligent Call Routing",
    description:
      "Your AI voice agent understands caller intent in real time and routes calls to the right department, books appointments, or handles requests autonomously. Complex calls are seamlessly warm-transferred to your team with full context.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#00F0FF]" />,
    title: "Zero Hold Times",
    description:
      "Every call is answered on the first ring, every time. No hold music, no voicemail, no missed opportunities. Your AI agent handles unlimited concurrent calls so no prospect ever waits in a queue.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#00F0FF]" />,
    title: "Call Recording & Transcription",
    description:
      "Every conversation is automatically recorded and transcribed with AI-generated summaries. Review calls, search by keyword, and extract actionable insights without listening to hours of audio.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#00F0FF]" />,
    title: "Real-Time Analytics",
    description:
      "Monitor call volume, conversion rates, average handle time, and qualification outcomes through a live dashboard. Identify trends, optimize scripts, and measure ROI with precision.",
  },
  {
    icon: <Settings className="w-6 h-6 text-[#00F0FF]" />,
    title: "CRM & Calendar Sync",
    description:
      "Automatically log every call in your CRM with detailed notes, update lead statuses, and book appointments directly on your team's calendar. Works with Salesforce, HubSpot, GoHighLevel, and more.",
  },
];

const steps = [
  {
    number: "01",
    title: "Script & Voice Design",
    description:
      "We map your call flows, design conversation scripts, and select the perfect voice profile that matches your brand. Every objection, question, and scenario is accounted for before launch.",
  },
  {
    number: "02",
    title: "Integration & Training",
    description:
      "Your voice agent is connected to your phone system, CRM, and calendar. We train it on your services, pricing, availability, and qualification criteria until it handles calls like your best employee.",
  },
  {
    number: "03",
    title: "Launch & Refine",
    description:
      "We activate your agent on your business line, monitor every call, and continuously refine the conversation model based on real interactions to improve outcomes week over week.",
  },
];

export default function VoiceAgentsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A1A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white hover:text-[#00F0FF] transition-colors"
          >
            Nexus<span className="text-[#00F0FF]">.</span>
          </Link>
          <Link
            href="/#contact"
            className="px-5 py-2 rounded-lg bg-[#00F0FF] text-[#0A0A1A] font-semibold text-sm hover:bg-[#00F0FF]/90 transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </nav>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#00F0FF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              AI-Powered Voice Solution
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              AI Voice{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">
                Agents
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl">
              AI-powered voice agents that answer every call, qualify every lead,
              and schedule appointments with human-like conversation. Your phones
              are covered 24 hours a day, 7 days a week — no hiring required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#00F0FF] text-[#0A0A1A] font-semibold hover:bg-[#00F0FF]/90 transition-colors"
              >
                Get Your Voice Agent
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl space-y-6 text-[#CBD5E1] leading-relaxed text-lg">
          <p>
            Phone calls remain the highest-intent channel for most service
            businesses. When a prospect picks up the phone, they are ready to
            take action — but only if someone answers. Studies show that 80% of
            callers who reach voicemail never call back, and the average small
            business misses 62% of incoming calls. Every unanswered ring is
            revenue walking out the door. Nexus Automation&apos;s AI Voice Agents
            eliminate this problem completely by answering every call instantly
            with a natural, intelligent voice that callers trust.
          </p>
          <p>
            Our voice agents are not the clunky IVR systems of the past. Built on
            cutting-edge conversational AI and neural speech synthesis, they hold
            real, dynamic conversations. They listen to what callers say,
            understand context and intent, ask clarifying questions, and respond
            with relevant answers drawn from your business knowledge base. Whether
            a caller wants to schedule a consultation, ask about pricing, check
            appointment availability, or get directions to your office, your AI
            voice agent handles it smoothly and professionally.
          </p>
          <p>
            The real power lies in what happens after the call. Every conversation
            is automatically transcribed, summarized, and logged in your CRM.
            Qualified leads are flagged and routed to your sales team with full
            context so they can follow up with confidence. Appointments are booked
            directly on your calendar with confirmation texts sent to the caller.
            Your team gets a detailed briefing before they ever pick up a follow-up
            call, creating a seamless experience that impresses prospects and
            accelerates your sales cycle.
          </p>
          <p>
            Scaling your phone operations used to mean hiring, training, and
            managing receptionists or call center staff. With Nexus Automation, you
            deploy a voice agent that handles unlimited concurrent calls without
            breaks, sick days, or turnover. It speaks in your brand&apos;s tone,
            follows your exact call scripts, and improves with every interaction.
            Whether you receive ten calls a day or ten thousand, your AI voice
            agent delivers consistent, high-quality conversations that convert.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful Voice AI{" "}
            <span className="text-[#00F0FF]">Capabilities</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Enterprise-grade voice technology made accessible for businesses of
            every size.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-white/10 bg-[#111127]/70 backdrop-blur-sm hover:border-[#00F0FF]/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-shadow">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-[#00F0FF]">Works</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            We handle the technical complexity so you get a voice agent that
            sounds and performs exactly how you need it to.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-5xl font-bold text-[#00F0FF]/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-white/10 bg-[#111127]/50 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Why Businesses Choose Our AI Voice Agents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Answer 100% of incoming calls on the first ring",
              "Handle unlimited concurrent calls without wait times",
              "Reduce missed call revenue loss by up to 90%",
              "Natural-sounding voice that builds caller trust",
              "Automatic call transcription and CRM logging",
              "Book appointments directly during the call",
              "Warm transfer to live agents when needed",
              "Continuous learning from every conversation",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00F0FF] mt-0.5 shrink-0" />
                <span className="text-[#CBD5E1]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center rounded-2xl border border-[#00F0FF]/20 bg-gradient-to-b from-[#00F0FF]/10 to-transparent p-8 sm:p-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stop Missing Calls. Start Closing Deals.
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">
            See our AI voice agent in action. Book a live demo and hear exactly
            how it will sound when it answers your business line. Setup takes
            less than a week.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#00F0FF] text-[#0A0A1A] font-bold text-lg hover:bg-[#00F0FF]/90 transition-colors shadow-[0_0_30px_rgba(0,240,255,0.3)]"
          >
            Book Your Free Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm">
            &copy; {new Date().getFullYear()} Nexus Automation. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-[#94A3B8] hover:text-[#00F0FF] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
