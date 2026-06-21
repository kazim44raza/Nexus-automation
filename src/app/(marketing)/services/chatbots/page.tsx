import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/marketing/ServicePageTemplate'
import { Bot, Clock, Target, Zap, MessageSquare, BarChart3, Globe, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Chatbots — 24/7 Customer Engagement & Lead Qualification',
  description: 'Deploy AI chatbots that qualify leads, answer questions, and book appointments 24/7. Increase qualified leads by 40%. No developers required.',
}

export default function ChatbotsPage() {
  return (
    <ServicePageTemplate
      data={{
        tag: 'AI Chatbots',
        headline: 'Capture every lead. Answer every question. 24/7.',
        subheadline: 'Our AI chatbots engage website visitors instantly, qualify them as leads, and book appointments — even when your team is asleep. Deploy in days, not months.',
        heroVisual: (
          <div className="card-dark p-6 space-y-3 max-w-sm ml-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-light" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Nexus AI</p>
                <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-accent-light rounded-full animate-pulse" /><span className="text-white/40 text-[10px]">Online</span></div>
              </div>
            </div>
            {[
              { role: 'ai', text: "Hi! I'm the AI assistant. What brings you here today?" },
              { role: 'user', text: 'We keep missing leads after hours' },
              { role: 'ai', text: "That's exactly what we solve! Our AI handles all inquiries 24/7. What industry are you in?" },
              { role: 'user', text: 'Healthcare' },
              { role: 'ai', text: "Perfect — I can show you how we've helped 30+ healthcare providers capture 40% more patients. Can I grab your email to send over a case study?" },
            ].map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl px-3 py-2 text-xs ${m.role === 'user' ? 'bg-primary text-white' : 'bg-white/10 text-white/80'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        ),
        metrics: [
          { value: '40%', label: 'More Qualified Leads', context: 'Average across all chatbot clients' },
          { value: '<2s', label: 'Response Time', context: 'Always, regardless of volume' },
          { value: '24/7', label: 'Always Available', context: 'Zero downtime, zero fatigue' },
        ],
        benefits: [
          { icon: <Clock className="w-5 h-5" />, title: '24/7 Coverage', description: 'Your AI chatbot never sleeps, never takes a lunch break, and handles unlimited simultaneous conversations.' },
          { icon: <Target className="w-5 h-5" />, title: 'Intelligent Lead Qualification', description: 'Ask the right questions, score leads automatically, and only surface high-value prospects to your team.' },
          { icon: <MessageSquare className="w-5 h-5" />, title: 'Human-Like Conversations', description: 'Trained on your business data, tone, and FAQs for responses that feel personal and on-brand.' },
          { icon: <Globe className="w-5 h-5" />, title: 'Multi-Platform Deployment', description: 'Embed on your website, and connect to WhatsApp, Facebook Messenger, and more from one system.' },
          { icon: <BarChart3 className="w-5 h-5" />, title: 'Conversion Analytics', description: 'See exactly what questions convert, what pages drive the most leads, and where visitors drop off.' },
          { icon: <Shield className="w-5 h-5" />, title: 'Smooth Human Escalation', description: 'When the AI hits a limit, it collects contact details and notifies your team instantly.' },
        ],
        steps: [
          { number: '01', title: 'Strategy & Knowledge Base', description: 'We map your most common customer questions, objections, and conversion goals to build your chatbot\'s intelligence.', detail: '1–2 days · Includes a full audit of your current website and messaging' },
          { number: '02', title: 'Build & Train', description: 'Our team builds the chatbot, trains it on your services, pricing, and FAQs, and connects it to your CRM.', detail: '3–5 days · Full integration with your existing tools' },
          { number: '03', title: 'Deploy & Optimize', description: 'We launch, monitor conversations, and continuously improve the AI based on real user interactions and your feedback.', detail: 'Ongoing · Weekly reports and proactive updates' },
        ],
        faqs: [
          { question: 'Will the chatbot understand my industry-specific questions?', answer: 'Yes — we train every chatbot specifically on your business, services, pricing, and common questions. It\'s not a generic bot; it\'s your AI representative.' },
          { question: 'Can it book appointments directly?', answer: 'Absolutely. We integrate with Calendly, Google Calendar, and most booking systems so the chatbot can check availability and book appointments in real time.' },
          { question: 'What happens if someone asks something the chatbot can\'t answer?', answer: 'The chatbot will acknowledge the question, collect the visitor\'s contact details, and immediately notify your team via email/SMS so no lead is lost.' },
          { question: 'How long does setup take?', answer: 'Most chatbot deployments are live within 5–7 business days. Complex multi-flow chatbots may take up to 2 weeks.' },
          { question: 'Can I update the chatbot\'s knowledge base myself?', answer: 'Yes — through our admin panel, you can add new FAQs, update service information, and the chatbot learns instantly. No developers needed.' },
        ],
        ctaTitle: 'Ready to capture leads while you sleep?',
        ctaDesc: 'Book a free demo and we\'ll show you exactly how your custom AI chatbot would look and perform for your specific business.',
      }}
    />
  )
}
