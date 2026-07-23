import { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Users, Calendar, Megaphone, UserPlus, Server, ShieldCheck, Zap, Repeat } from 'lucide-react';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';
import { AnimatedSection, WhatsAppHeroVisual } from './client';

export const metadata: Metadata = {
  title: 'WhatsApp Automation | Nexus Automation',
  description: 'Turn WhatsApp into an always-on customer channel. Automate conversations, capture leads, and book appointments directly in WhatsApp.',
  openGraph: {
    title: 'WhatsApp Automation | Nexus Automation',
    description: 'Turn WhatsApp into an always-on customer channel. Automate conversations, capture leads, and book appointments directly in WhatsApp.',
  }
};

const faqs = [
  {
    question: "Do I need the WhatsApp Business API for this?",
    answer: "Yes, our automation requires the official WhatsApp Business API. We handle all the technical setup, API verification, and Facebook Business Manager configuration for you."
  },
  {
    question: "Can I still reply manually to customers?",
    answer: "Absolutely. The bot handles initial inquiries and routine tasks, but you can jump into the conversation at any time through our unified inbox or your CRM."
  },
  {
    question: "Are there per-message costs from WhatsApp?",
    answer: "Yes, Meta charges per conversation (a 24-hour window). Service/utility messages cost a few cents, while marketing messages have different rates depending on your region. We'll provide a clear breakdown of these pass-through costs."
  },
  {
    question: "Can it send automated appointment reminders?",
    answer: "Yes! We connect your CRM calendar directly to WhatsApp. When an appointment is booked, a confirmation is sent, followed by automated reminders 24 hours and 1 hour before the meeting."
  },
  {
    question: "What if the customer's question is too complex?",
    answer: "The bot is programmed to recognize its limits. If it encounters a complex issue or a frustrated customer, it automatically tags the chat for human review and alerts your team."
  }
];

export default function WhatsAppAutomationPage() {
  return (
    <div className="page-container relative overflow-hidden bg-gray-50/50 dark:bg-black">
      
      {/* Hero Section */}
      <section className="section-py relative pt-32 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#25D366]/10 via-black/0 to-black/0 dark:from-[#25D366]/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 text-[#128C7E] dark:text-[#25D366] text-sm font-medium mb-6 border border-[#25D366]/20">
                <MessageCircle className="w-4 h-4" />
                Official API Integration
              </div>
              <h1 className="heading-display mb-6">
                Turn WhatsApp into an always-on <span className="text-[#128C7E] dark:text-[#25D366]">sales channel.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
                Automate customer conversations, capture leads, book appointments, and send updates through WhatsApp — the channel your customers already use every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary-lg bg-[#25D366] hover:bg-[#128C7E] text-white">
                  Automate Your WhatsApp
                </Link>
                <Link href="#features" className="btn-secondary px-8 py-4 text-lg border-[#25D366]/20 hover:bg-[#25D366]/5 dark:text-white">
                  Explore Features
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative">
              <WhatsAppHeroVisual />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="features" className="section-py bg-white dark:bg-gray-900/50 border-y border-gray-200 dark:border-white/5 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Meet your customers where they are.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">With a 98% open rate, WhatsApp is the most effective channel for customer engagement. Make it automated and scalable.</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: UserPlus, 
                title: "Lead Collection", 
                desc: "Capture names, emails, and specific needs natively within the chat flow, syncing instantly to your CRM."
              },
              { 
                icon: Calendar, 
                title: "Booking & Reminders", 
                desc: "Let customers view available slots and book appointments via chat. Send automated reminders to reduce no-shows."
              },
              { 
                icon: Megaphone, 
                title: "Broadcast & Follow-up", 
                desc: "Send personalized mass campaigns (like abandoned cart reminders or reactivation offers) safely through the API."
              }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card h-full p-8 bg-gray-50 dark:bg-black/50 border-t-4 border-t-[#25D366] hover:shadow-xl transition-shadow">
                  <div className="h-14 w-14 rounded-2xl bg-[#25D366]/10 text-[#128C7E] dark:text-[#25D366] flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Integration */}
      <section className="section-py relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="card p-8 border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 blur-3xl rounded-full" />
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">API Integration Architecture</h3>
                
                <div className="relative">
                  {/* Connecting line */}
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#25D366]/50 to-[#25D366]/10 z-0" />
                  
                  <div className="space-y-8 relative z-10">
                    <div className="flex gap-4 items-start">
                      <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-white/5 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-8 h-8 text-[#25D366]" />
                      </div>
                      <div className="pt-2">
                        <h4 className="font-bold text-gray-900 dark:text-white">WhatsApp Client</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Customer sends a message</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-white/5 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-8 h-8 text-yellow-500" />
                      </div>
                      <div className="pt-2">
                        <h4 className="font-bold text-gray-900 dark:text-white">Nexus AI Engine</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Understands intent & generates response</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-white/5 flex items-center justify-center flex-shrink-0">
                        <Server className="w-8 h-8 text-blue-500" />
                      </div>
                      <div className="pt-2">
                        <h4 className="font-bold text-gray-900 dark:text-white">Your CRM / Calendar</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Data synced & actions executed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <h2 className="heading-lg mb-6">Enterprise-grade infrastructure.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We build on the official WhatsApp Business API, ensuring stability, compliance, and access to advanced features like rich media, interactive buttons, and list messages.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Official Meta Business Partner integration",
                  "Interactive list messages and quick reply buttons",
                  "Automated human handoff to live agents",
                  "Rich media support (PDFs, Images, Audio)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="h-6 w-6 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400 italic">
                *Disclaimer: Nexus Automation provides software tools that interface with the WhatsApp API. We are an independent software provider and are not affiliated with, endorsed by, or sponsored by WhatsApp Inc. or Meta Platforms, Inc.
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQSection />
      
      <CTASection />
    </div>
  );
}
