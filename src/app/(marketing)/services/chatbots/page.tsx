import { Metadata } from 'next';
import Link from 'next/link';
import { MessageSquare, Users, Globe, Database, Network, Bot, Search, LayoutTemplate, Smartphone, Handshake } from 'lucide-react';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';
import { AnimatedSection, ChatbotHeroVisual } from './client';

export const metadata: Metadata = {
  title: 'AI Chatbots | Nexus Automation',
  description: 'Deploy intelligent chatbots that engage visitors, capture lead information, and schedule consultations without human intervention.',
  openGraph: {
    title: 'AI Chatbots | Nexus Automation',
    description: 'Deploy intelligent chatbots that engage visitors, capture lead information, and schedule consultations without human intervention.',
  }
};

const faqs = [
  {
    question: "How is this different from a traditional chatbot?",
    answer: "Traditional chatbots use rigid, rule-based decision trees. If a user asks something slightly off-script, they break. Our AI chatbots use advanced LLMs (like GPT-4) to understand intent, handle complex questions, and guide users naturally toward your business goals."
  },
  {
    question: "How do you train the chatbot on my business?",
    answer: "We connect the bot to your existing knowledge base. You can upload PDFs, Word docs, provide your website URL, or connect to Notion/Zendesk. The bot reads everything and uses it as the source of truth for answering questions."
  },
  {
    question: "Can it capture lead information?",
    answer: "Yes, the bot is programmed to naturally ask for names, emails, and phone numbers during the conversation and instantly sync that data to your CRM (HubSpot, GoHighLevel, etc.)."
  },
  {
    question: "Where can I deploy the chatbot?",
    answer: "You can embed it on your website as a floating widget, use it as a full-page chat interface, or deploy it across WhatsApp, Facebook Messenger, and Instagram Direct Messages."
  },
  {
    question: "Can a human take over the chat?",
    answer: "Absolutely. The bot can detect when a user is frustrated or explicitly asks for a human. It will seamlessly alert your team via Slack or email and pause its automated responses while a human steps in."
  }
];

export default function AIChatbotsPage() {
  return (
    <div className="page-container relative overflow-hidden bg-gray-50/50 dark:bg-black">
      
      {/* Hero Section */}
      <section className="section-py relative pt-32 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/20 via-black/0 to-black/0 dark:from-purple-900/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
                <MessageSquare className="w-4 h-4" />
                Intelligent Website Engagement
              </div>
              <h1 className="heading-display mb-6">
                Turn website visitors into <span className="text-gradient from-purple-500 to-indigo-600">qualified leads.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
                Deploy intelligent chatbots that engage visitors, answer business-specific questions, capture lead information, and schedule consultations — all without human intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary-lg bg-purple-600 hover:bg-purple-700">
                  Build Your Bot
                </Link>
                <Link href="#how-it-works" className="btn-secondary px-8 py-4 text-lg border-purple-500/20 hover:bg-purple-500/5">
                  See How it Works
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative lg:pl-12">
              <ChatbotHeroVisual />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Visitor Journey Process */}
      <section className="section-py bg-white dark:bg-gray-900/50 border-y border-gray-200 dark:border-white/5 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">The automated lead journey.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Your website should be your best sales rep. Here is how our AI guides visitors to action.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { icon: Globe, label: "Visit", desc: "User lands on site" },
              { icon: MessageSquare, label: "Engage", desc: "Proactive greeting" },
              { icon: Search, label: "Qualify", desc: "Asks key questions" },
              { icon: Database, label: "Capture", desc: "Collects info to CRM" },
              { icon: Users, label: "Book", desc: "Schedules meeting" }
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative">
                {/* Arrow connecting steps (desktop) */}
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent z-0" />
                )}
                
                <div className="relative z-10 card p-6 flex flex-col items-center text-center bg-gray-50 dark:bg-black/50 border-purple-500/10 hover:border-purple-500/30 transition-colors">
                  <div className="h-16 w-16 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{step.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="section-py relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="heading-lg mb-6">Trained on your business DNA.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Your chatbot isn't generic. It learns exactly how your business operates by ingesting your existing documentation, website content, and FAQs.
              </p>
              
              <div className="space-y-6 mt-8">
                {[
                  { title: "Website Scraping", desc: "Point the bot at your URL and it learns everything public." },
                  { title: "Document Upload", desc: "Feed it PDFs, SOPs, and pricing sheets securely." },
                  { title: "Custom Instructions", desc: "Give it a persona, tone of voice, and strict behavioral guardrails." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-6 bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Knowledge Base Sync</h3>
                
                <div className="space-y-4">
                  {[
                    { name: "main_website.html", status: "Synced", time: "2 mins ago", type: "URL" },
                    { name: "pricing_guide_2024.pdf", status: "Synced", time: "1 hour ago", type: "PDF" },
                    { name: "customer_support_faqs.docx", status: "Synced", time: "3 hours ago", type: "DOCX" },
                    { name: "return_policy.md", status: "Synced", time: "1 day ago", type: "Text" }
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5">
                      <div className="flex items-center gap-3">
                        <LayoutTemplate className="w-5 h-5 text-purple-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{doc.name}</p>
                          <p className="text-xs text-gray-500">{doc.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {doc.status}
                        </span>
                        <p className="text-[10px] text-gray-400 mt-1">{doc.time}</p>
                      </div>
                    </div>
                  ))}
                  
                  <button className="w-full py-3 mt-4 border-2 border-dashed border-gray-200 dark:border-white/20 rounded-xl text-sm font-medium text-gray-500 hover:border-purple-500 hover:text-purple-500 transition-colors flex items-center justify-center gap-2">
                    <Database className="w-4 h-4" />
                    Add Knowledge Source
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Deployment & Handoff */}
      <section className="section-py bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="card h-full p-8 border-t-4 border-t-purple-500">
                <Network className="w-10 h-10 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Omnichannel Deployment</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Build once, deploy everywhere. Your AI assistant maintains the same knowledge and logic across all your customer touchpoints.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Website Widget', 'WhatsApp', 'Facebook Messenger', 'Instagram DM', 'SMS'].map((channel, i) => (
                    <span key={i} className="px-4 py-2 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card h-full p-8 border-t-4 border-t-indigo-500">
                <Handshake className="w-10 h-10 text-indigo-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Seamless Human Handoff</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  AI doesn't replace your team; it protects their time. When complex issues arise, the bot transfers the full context to a human.
                </p>
                <ul className="space-y-3">
                  {['Detects frustration or complex edge-cases', 'Alerts team via Slack, Email, or CRM', 'Pauses automation during live chat', 'Resumes automation when chat is closed'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
