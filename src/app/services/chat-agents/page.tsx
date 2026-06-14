import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Clock,
  Users,
  Zap,
  BarChart3,
  Globe,
  ArrowLeft,
  ArrowRight,
  Bot,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chat Agents | Nexus Automation",
  description:
    "Deploy intelligent AI chatbots that engage visitors, qualify leads, and book appointments 24/7. Custom-built for your business by Nexus Automation.",
  openGraph: {
    title: "AI Chat Agents | Nexus Automation",
    description:
      "Deploy intelligent AI chatbots that engage visitors, qualify leads, and book appointments 24/7. Custom-built for your business by Nexus Automation.",
    type: "website",
    url: "https://nexusautomation.com/services/chat-agents",
    siteName: "Nexus Automation",
  },
};

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-[#00F0FF]" />,
    title: "Natural Conversations",
    description:
      "Our AI chat agents use advanced natural language processing to hold fluid, human-like conversations that make visitors feel heard and understood — not like they are talking to a script.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#00F0FF]" />,
    title: "24/7 Availability",
    description:
      "Never miss a lead again. Your AI chat agent works around the clock, engaging website visitors at 2 AM just as effectively as at 2 PM, capturing opportunities your competitors sleep through.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#00F0FF]" />,
    title: "Lead Qualification",
    description:
      "Every conversation automatically qualifies prospects by asking the right questions at the right time, scoring leads based on your criteria, and routing hot leads directly to your sales team.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#00F0FF]" />,
    title: "Instant Response Time",
    description:
      "Research shows that responding within 5 minutes increases conversion rates by 400%. Our chat agents respond in under one second, ensuring you never lose a prospect to slow follow-up.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#00F0FF]" />,
    title: "Analytics Dashboard",
    description:
      "Track every conversation, conversion, and qualified lead in real time. Understand what questions visitors ask most, where they drop off, and how to continuously optimize your funnel.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#00F0FF]" />,
    title: "Multi-Platform Deployment",
    description:
      "Deploy your AI chat agent across your website, Facebook Messenger, Instagram DMs, WhatsApp, and SMS — all managed from a single dashboard with unified conversation history.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Training",
    description:
      "We learn your business, services, pricing, and ideal customer profile. Then we train your AI agent on your unique knowledge base, FAQs, and brand voice so it represents you perfectly.",
  },
  {
    number: "02",
    title: "Build & Test",
    description:
      "Our team builds your custom chat agent with intelligent conversation flows, qualification logic, and CRM integrations. We rigorously test every scenario before going live.",
  },
  {
    number: "03",
    title: "Deploy & Optimize",
    description:
      "We launch your agent across all channels, monitor performance daily, and continuously refine responses based on real conversation data to maximize your conversion rates.",
  },
];

export default function ChatAgentsPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              AI-Powered Chat Solution
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              AI Chat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#3B82F6]">
                Agents
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed mb-8 max-w-2xl">
              Deploy intelligent AI chatbots that engage every visitor, qualify
              leads in real time, and book appointments on your calendar — all
              without lifting a finger. Custom-built for your business by Nexus
              Automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#00F0FF] text-[#0A0A1A] font-semibold hover:bg-[#00F0FF]/90 transition-colors"
              >
                Get Your AI Agent
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
            Every visitor who lands on your website is a potential customer, and
            every second they wait without engagement is a second closer to
            clicking away. Traditional live chat requires human agents to be
            online, trained, and responsive at all times — an expensive and
            impractical demand for growing businesses. Nexus Automation&apos;s AI
            Chat Agents solve this problem entirely by providing an always-on,
            intelligent conversational layer that greets visitors, answers their
            questions, and guides them toward booking a call or making a purchase.
          </p>
          <p>
            Unlike generic chatbot builders that rely on rigid decision trees, our
            AI chat agents are powered by large language models trained
            specifically on your business data. This means they understand context,
            handle unexpected questions gracefully, and adapt their tone to match
            your brand personality. Whether a visitor asks about pricing, service
            availability, or a complex product question, your AI agent responds
            with accurate, helpful answers that build trust and move the
            conversation forward.
          </p>
          <p>
            The impact on your bottom line is measurable from day one. Businesses
            using our AI chat agents see an average 35% increase in qualified leads
            within the first 30 days. The agent captures contact information
            naturally during the conversation, scores each lead based on your
            qualification criteria, and pushes high-intent prospects directly into
            your CRM with full conversation context. Your sales team stops wasting
            time on cold leads and starts focusing exclusively on prospects who are
            ready to buy.
          </p>
          <p>
            Beyond lead generation, our chat agents handle appointment scheduling,
            FAQ responses, product recommendations, and even basic support tickets.
            They integrate seamlessly with your existing tech stack including
            Google Calendar, HubSpot, Salesforce, GoHighLevel, and dozens of other
            platforms. Setup takes days, not months, and our team handles the
            entire process from training to deployment to ongoing optimization.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything Your Chat Agent{" "}
            <span className="text-[#00F0FF]">Can Do</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Powerful capabilities designed to convert more visitors into customers
            while reducing your team&apos;s workload.
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
            From onboarding to optimization, we handle everything so you can
            focus on closing deals.
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
            Why Businesses Choose Our AI Chat Agents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Increase qualified leads by up to 35% in the first month",
              "Respond to every website visitor in under one second",
              "Reduce customer support costs by up to 60%",
              "Capture leads 24/7 including weekends and holidays",
              "Seamless CRM integration with full conversation logs",
              "Custom-trained on your products, services, and brand voice",
              "Multi-language support for global audiences",
              "No long-term contracts — month-to-month flexibility",
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
            Ready to Put Your Sales on Autopilot?
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">
            Book a free demo and see exactly how an AI chat agent can transform
            your website into a 24/7 lead generation machine. No commitment, no
            pressure — just results.
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
