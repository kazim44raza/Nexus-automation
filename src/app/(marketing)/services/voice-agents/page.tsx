import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/marketing/ServicePageTemplate'
import { Phone, Mic, Clock, Target, BarChart3, Shield, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Voice Agents — Never Miss Another Call | Nexus Automation',
  description: 'AI voice agents that answer every call 24/7, qualify leads, and book appointments automatically. Recover 80% of missed call revenue.',
}

export default function VoiceAgentsPage() {
  return (
    <ServicePageTemplate
      data={{
        tag: 'AI Voice Agents',
        headline: 'Every call answered. Every lead captured.',
        subheadline: 'Our AI voice agents sound human, think intelligently, and never put a caller on hold. Deploy a tireless phone agent that qualifies leads and books appointments 24/7.',
        heroVisual: (
          <div className="card-dark p-6 max-w-sm ml-auto space-y-4">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center animate-pulse">
                <Phone className="w-5 h-5 text-accent-light" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Incoming Call</p>
                <p className="text-white/40 text-xs">+1 (555) 094-2841 · 2:47 AM</p>
              </div>
              <span className="ml-auto badge bg-accent/20 text-accent-light text-xs">LIVE</span>
            </div>
            {[
              { speaker: 'AI', text: "Hi, thanks for calling! I'm the Nexus AI. How can I help you today?" },
              { speaker: 'Caller', text: "I need to book a dental appointment for my daughter" },
              { speaker: 'AI', text: "Of course! I can check availability right now. Is this for a cleaning, or is there a concern we should address?" },
              { speaker: 'Caller', text: "Just a checkup and cleaning" },
              { speaker: 'AI', text: "Perfect. We have availability Tuesday at 10am and Thursday at 2pm. Which works better?" },
            ].map((m, i) => (
              <div key={i} className="text-xs">
                <span className={`font-semibold ${m.speaker === 'AI' ? 'text-primary-light' : 'text-white/60'}`}>{m.speaker}: </span>
                <span className="text-white/70">{m.text}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse" />
              <span className="text-accent-light text-xs">Appointment booked: Tuesday 10am ✓</span>
            </div>
          </div>
        ),
        metrics: [
          { value: '100%', label: 'Calls Answered', context: 'Zero missed calls, zero hold times' },
          { value: '80%', label: 'Missed Revenue Recovered', context: 'From after-hours and overflow calls' },
          { value: '60%', label: 'Fewer No-Shows', context: 'With automated reminder calls' },
        ],
        benefits: [
          { icon: <Phone className="w-5 h-5" />, title: 'Answer Every Call', description: 'No more missed calls after hours, on weekends, or during busy periods. Every caller gets an immediate, friendly response.' },
          { icon: <Mic className="w-5 h-5" />, title: 'Human-Like Voice', description: 'Our AI voices are natural, warm, and professional. Callers often don\'t realize they\'re talking to an AI.' },
          { icon: <Target className="w-5 h-5" />, title: 'Lead Qualification', description: 'The AI asks the right questions to determine caller intent, budget, and urgency before routing to your team.' },
          { icon: <Clock className="w-5 h-5" />, title: '24/7 Operation', description: 'Your AI voice agent works nights, weekends, and holidays — ensuring you never miss a revenue opportunity.' },
          { icon: <BarChart3 className="w-5 h-5" />, title: 'Call Recording & Transcripts', description: 'Every call is recorded and transcribed. Review conversations, identify patterns, and improve your messaging.' },
          { icon: <Users className="w-5 h-5" />, title: 'Intelligent Escalation', description: 'When a caller needs a human, the AI smoothly transfers the call or schedules a callback at a convenient time.' },
        ],
        steps: [
          { number: '01', title: 'Voice & Script Design', description: 'We design your AI\'s personality, voice, and conversation flows based on your brand and most common call types.', detail: '1–3 days · Includes script review and voice selection' },
          { number: '02', title: 'Integration & Testing', description: 'We connect the AI to your phone system, CRM, and calendar. Then we rigorously test with real scenarios.', detail: '3–5 days · Works with most VoIP providers' },
          { number: '03', title: 'Launch & Refine', description: 'Go live with monitoring. We analyze every call and continuously improve the AI\'s handling of edge cases.', detail: 'Ongoing · Monthly reviews included' },
        ],
        faqs: [
          { question: 'Will callers know they\'re talking to an AI?', answer: 'The AI is disclosed as an AI assistant, but its natural voice and conversational ability make interactions smooth and comfortable. Most callers appreciate the immediate response over hold music.' },
          { question: 'What phone systems do you integrate with?', answer: 'We work with Twilio, RingCentral, Vonage, Google Voice, most VoIP providers, and even traditional landlines with the right setup.' },
          { question: 'Can the AI transfer calls to a human?', answer: 'Yes. You define transfer conditions — specific request types, high-value leads, or a caller explicitly asking for a person — and the AI handles the warm transfer seamlessly.' },
          { question: 'Can the AI speak multiple languages?', answer: 'Yes — we support English, Spanish, French, and many other languages. Multi-language support can be set up so the AI automatically matches the caller\'s language.' },
          { question: 'How do I review what the AI said on calls?', answer: 'Every call is recorded and transcribed in your admin dashboard. You can review, flag, and leave notes on any conversation.' },
        ],
        ctaTitle: 'Stop losing customers to voicemail',
        ctaDesc: 'See a live demo of an AI voice agent handling a real call scenario for your business.',
      }}
    />
  )
}
