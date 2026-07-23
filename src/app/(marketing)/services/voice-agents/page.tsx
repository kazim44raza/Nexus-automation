import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Users, Calendar, Clock, BarChart3, ShieldCheck, ArrowRight, BrainCircuit, Headphones, MessageSquare, BriefcaseMedical, UserPlus, MapPin, CreditCard, RotateCcw } from 'lucide-react';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';
import { AnimatedSection, VoiceHeroVisual, WaveDecoration } from './client';

export const metadata: Metadata = {
  title: 'AI Voice Agents | Nexus Automation',
  description: 'Never send another valuable call to voicemail. Deploy AI voice agents that answer calls, qualify leads, and book appointments 24/7.',
  openGraph: {
    title: 'AI Voice Agents | Nexus Automation',
    description: 'Never send another valuable call to voicemail. Deploy AI voice agents that answer calls, qualify leads, and book appointments 24/7.',
  }
};

const callTypes = [
  { icon: Phone, label: "New Inquiries" },
  { icon: Calendar, label: "Appointment Booking" },
  { icon: RotateCcw, label: "Rescheduling" },
  { icon: MessageSquare, label: "General FAQs" },
  { icon: BarChart3, label: "Lead Qualification" },
  { icon: UserPlus, label: "Customer Intake" },
  { icon: Clock, label: "After-Hours Coverage" },
  { icon: MapPin, label: "Call Routing" },
  { icon: Headphones, label: "Human Transfer" },
  { icon: Phone, label: "Follow-Up Calls" }
];

const faqs = [
  {
    question: "Do the AI agents sound robotic?",
    answer: "Not at all. We use ultra-realistic text-to-speech models with sub-500ms latency. They use conversational fillers (like 'hmm' or 'got it'), detect interruptions, and sound virtually indistinguishable from a human receptionist."
  },
  {
    question: "Can it integrate with my specific scheduling software?",
    answer: "Yes. Our agents connect via API to most modern CRM and calendar systems including GoHighLevel, HubSpot, Calendly, Acuity, and industry-specific tools like JaneApp or Mindbody."
  },
  {
    question: "What happens if the AI doesn't know the answer?",
    answer: "You define the exact fallback behavior. Typically, if the AI detects low confidence or a complex request, it politely informs the caller it will transfer them to a specialist and seamlessly routes the call to your human team."
  },
  {
    question: "How long does it take to deploy a voice agent?",
    answer: "A standard voice agent customized to your business knowledge and booking flow takes approximately 7-14 days to build, test, and deploy."
  },
  {
    question: "Is it HIPAA compliant for medical practices?",
    answer: "Yes, we can deploy HIPAA-compliant infrastructure for healthcare clients, ensuring all transcripts, call recordings, and patient data are handled securely and in accordance with regulations."
  }
];

export default function AIVoiceAgentsPage() {
  return (
    <div className="page-container relative overflow-hidden bg-gray-50/50 dark:bg-black">
      
      {/* Hero Section */}
      <section className="section-py relative pt-32 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-black/0 to-black/0 dark:from-cyan-900/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available 24/7/365
              </div>
              <h1 className="heading-display mb-6">
                Never send another valuable call to <span className="text-gradient from-cyan-500 to-blue-600">voicemail.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
                Our AI voice agents answer every call, qualify leads through natural conversation, book appointments, and escalate to your team when needed — instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary-lg">
                  Get a Custom Demo
                </Link>
                <Link href="#how-it-works" className="btn-secondary px-8 py-4 text-lg flex items-center justify-center">
                  Listen to Samples
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} className="relative">
              <VoiceHeroVisual />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-py bg-white dark:bg-gray-900/50 border-y border-gray-200 dark:border-white/5 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">One agent. Infinite capabilities.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Train your voice agent to handle any standard phone interaction, freeing your staff to focus on high-value conversations.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {callTypes.map((type, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card card-hover p-6 flex flex-col items-center text-center gap-3 bg-gray-50 dark:bg-black/50">
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <type.icon className="h-6 w-6" />
                  </div>
                  <span className="font-medium text-sm text-gray-900 dark:text-white">{type.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Intelligence */}
      <section className="section-py relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="card p-8 border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">Live Analysis Engine</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500 dark:text-gray-400">Caller Sentiment</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">Positive (0.85)</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[85%] rounded-full" />
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">Extracted Entities</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge-accent bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">Name: John Doe</span>
                      <span className="badge-accent bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">Service: HVAC Repair</span>
                      <span className="badge-accent bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300">Urgency: High</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">Recommended Action</span>
                    <p className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-cyan-500" />
                      Priority Route to Emergency Technician
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2">
              <h2 className="heading-lg mb-6">Beyond transcription. <br/>True <span className="text-cyan-600 dark:text-cyan-400">understanding.</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our voice AI doesn't just convert speech to text. It understands context, detects emotion, and extracts actionable data from every sentence.
              </p>
              <ul className="space-y-4">
                {[
                  "Understands interruptions and tangential questions",
                  "Maintains context throughout 20+ minute conversations",
                  "Detects frustration and auto-escalates to humans",
                  "Structures unstructured conversation into CRM fields"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="section-py bg-cyan-900/5 dark:bg-cyan-900/10">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">From ring to calendar.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Watch how our agents seamlessly turn callers into booked appointments directly in your existing calendar.</p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row items-center justify-between relative max-w-5xl mx-auto">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-500 to-cyan-500/20 -translate-y-1/2 z-0" />
              
              {[
                { step: "1", title: "Answer & Qualify", desc: "Agent picks up instantly and gathers info" },
                { step: "2", title: "Check Availability", desc: "Queries your live calendar API" },
                { step: "3", title: "Propose Times", desc: "Negotiates a slot with the caller" },
                { step: "4", title: "Book & Confirm", desc: "Writes to CRM and sends SMS" }
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center mb-8 lg:mb-0 w-full lg:w-48 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-white/10 flex items-center justify-center text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4 transition-transform group-hover:scale-110 group-hover:border-cyan-500">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Analytics Dashboard Mock */}
      <section className="section-py relative overflow-hidden">
        <WaveDecoration />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Complete visibility into every call.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Stop wondering why callers aren't booking. Get detailed analytics, full transcripts, and audio recordings for quality assurance.</p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="card p-2 bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-white/10 mx-auto max-w-5xl rounded-2xl shadow-2xl">
              <div className="bg-white dark:bg-black rounded-xl p-6 lg:p-8">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100 dark:border-white/10">
                  <h3 className="font-semibold text-lg dark:text-white">Call Performance (Last 30 Days)</h3>
                  <div className="flex gap-2">
                    <span className="badge-accent bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white">Export</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: "Total Calls Handled", value: "1,248", trend: "+12%" },
                    { label: "Appointments Booked", value: "312", trend: "+24%" },
                    { label: "Avg Handling Time", value: "2m 14s", trend: "-15s" },
                    { label: "Human Escalations", value: "5%", trend: "-2%" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold dark:text-white">{stat.value}</span>
                        <span className="text-sm font-medium text-green-500 mb-1">{stat.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mock Chart Area */}
                <div className="h-48 w-full bg-gradient-to-t from-cyan-500/5 to-transparent rounded-lg border border-dashed border-gray-200 dark:border-white/10 flex items-end justify-between p-4">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-full mx-0.5 bg-cyan-500/40 rounded-t-sm hover:bg-cyan-500 transition-colors"
                      style={{ height: `${Math.max(20, Math.random() * 100)}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection />
      
      <CTASection />
    </div>
  );
}
