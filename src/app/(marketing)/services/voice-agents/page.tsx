'use client';
import React, { useState } from 'react';
import { 
  Phone, 
  Brain, 
  MessageSquare, 
  CalendarCheck, 
  UserPlus, 
  Database, 
  PhoneForwarded, 
  AlertTriangle,
  CheckCircle2,
  Cpu,
  ChevronDown,
  Headphones,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function VoiceAgentsPage() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      title: "Incoming Call",
      description: "Agent receives or initiates a call with an optimized connection.",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Intent Detection",
      description: "Real-time semantic analysis to understand the caller's objective.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Information Capture",
      description: "Extracting entities, context, and required data points seamlessly.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Action Execution",
      description: "Triggering API calls or business logic based on captured info.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Appointment / Routing",
      description: "Booking a slot or intelligently routing the call if required.",
      icon: <CalendarCheck className="w-6 h-6" />
    },
    {
      title: "Summary & Update",
      description: "Generating a concise summary and pushing it to your CRM.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Human Handoff",
      description: "Transferring context and audio to a human agent when needed.",
      icon: <PhoneForwarded className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-bg-base text-text-primary selection:bg-bg-surface selection:text-text-primary">
      {/* 1. Clear Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Conversational Voice Agents
          </h1>
          <p className="text-xl text-text-secondary mb-10 leading-relaxed">
            Deploy intelligent voice agents capable of conducting natural, human-like conversations. Handle inbound inquiries, outbound outreach, and complex scheduling with a focus on reliability and seamless human escalation.
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">Deploy an Agent</button>
            <button className="btn-secondary">View Documentation</button>
          </div>
        </div>
      </section>

      {/* 2. Specific Use Cases */}
      <section className="py-20 bg-bg-alt px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Target Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg-surface p-8 border border-bg-surface/50 rounded-lg">
              <Headphones className="w-8 h-8 text-text-muted mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frontline Support</h3>
              <p className="text-text-secondary">
                Resolve tier-1 support queries instantly over the phone. Free up your human agents for complex problem-solving while the AI handles repetitive troubleshooting and FAQ.
              </p>
            </div>
            <div className="bg-bg-surface p-8 border border-bg-surface/50 rounded-lg">
              <CalendarCheck className="w-8 h-8 text-text-muted mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automated Scheduling</h3>
              <p className="text-text-secondary">
                Inbound or outbound calling to confirm, reschedule, or book appointments. The agent integrates directly with your calendar to find available slots in real-time.
              </p>
            </div>
            <div className="bg-bg-surface p-8 border border-bg-surface/50 rounded-lg">
              <UserPlus className="w-8 h-8 text-text-muted mb-4" />
              <h3 className="text-xl font-semibold mb-3">Lead Qualification</h3>
              <p className="text-text-secondary">
                Contact inbound leads within minutes of form submission. The agent asks qualifying questions, updates the CRM, and routes high-intent prospects to sales reps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual Workflow */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">How It Works</h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {workflowSteps.map((step, index) => (
              <div 
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 border ${
                  activeStep === index 
                    ? 'bg-bg-surface border-text-secondary/30' 
                    : 'bg-transparent border-transparent hover:bg-bg-alt'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${activeStep === index ? 'bg-bg-alt text-text-primary' : 'bg-bg-surface text-text-muted'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className={`text-lg font-medium ${activeStep === index ? 'text-text-primary' : 'text-text-secondary'}`}>
                      {step.title}
                    </h4>
                    {activeStep === index && (
                      <p className="text-text-secondary mt-2 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-bg-alt rounded-2xl p-8 border border-bg-surface h-[500px] flex items-center justify-center relative overflow-hidden">
             {/* Interactive Visual Representation */}
             <div className="text-center w-full max-w-sm">
                <div className="w-20 h-20 bg-bg-surface rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-text-muted">
                   {workflowSteps[activeStep].icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{workflowSteps[activeStep].title}</h3>
                <p className="text-text-secondary">{workflowSteps[activeStep].description}</p>
                
                <div className="mt-12 flex justify-between items-center px-8 opacity-50">
                  <span className="text-xs uppercase tracking-widest text-text-muted">Step {activeStep + 1} of {workflowSteps.length}</span>
                  <div className="flex gap-1">
                    {workflowSteps.map((_, i) => (
                      <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeStep ? 'w-6 bg-text-primary' : 'w-2 bg-bg-surface'}`} />
                    ))}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Integrations & 5. Human Escalation */}
      <section className="py-20 bg-bg-alt px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Seamless Integrations</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Voice agents shouldn't operate in a silo. Our platform connects directly with your existing infrastructure to read and write data during calls.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text-secondary">
                <CheckCircle2 className="w-5 h-5 text-text-primary" />
                <strong>CRM Systems:</strong> Salesforce, HubSpot, Pipedrive
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <CheckCircle2 className="w-5 h-5 text-text-primary" />
                <strong>Scheduling:</strong> Calendly, Google Calendar, Cal.com
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <CheckCircle2 className="w-5 h-5 text-text-primary" />
                <strong>Custom APIs:</strong> Webhooks and REST APIs for proprietary systems
              </li>
            </ul>
          </div>
          <div className="bg-bg-base p-8 rounded-xl border border-bg-surface">
            <div className="flex items-center gap-4 mb-6">
              <ShieldAlert className="w-8 h-8 text-text-primary" />
              <h2 className="text-2xl font-bold">Human Escalation Protocol</h2>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              No AI is perfect. When an agent detects frustration, complex edge cases, or explicitly receives a request for a human, the fallback system engages immediately.
            </p>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3">
                <span className="text-text-primary font-bold">1.</span>
                Call is seamlessly bridged to your SIP trunk or agent pool.
              </li>
              <li className="flex gap-3">
                <span className="text-text-primary font-bold">2.</span>
                A real-time transcript and conversation summary is pushed to the human agent's dashboard.
              </li>
              <li className="flex gap-3">
                <span className="text-text-primary font-bold">3.</span>
                The human takes over without forcing the caller to repeat themselves.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Limitations & 7. Implementation Approach */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-bg-surface">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">System Limitations</h2>
            <p className="text-text-secondary mb-8">
              We believe in transparency. Before deploying, consider these current technical boundaries.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-text-muted shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Latency Variations</h4>
                  <p className="text-sm text-text-secondary">
                    While we optimize for conversational speed, latency can fluctuate based on network conditions, LLM provider response times, and the complexity of real-time API lookups.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-text-muted shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Background Noise Validation</h4>
                  <p className="text-sm text-text-secondary">
                    Extremely noisy environments may degrade transcription accuracy, leading to potential misinterpretations of user intent.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-text-muted shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Strict Compliance Boundaries</h4>
                  <p className="text-sm text-text-secondary">
                    Not currently certified for PCI DSS or HIPAA out-of-the-box. Do not use for collecting raw credit card numbers or sensitive health information without custom enterprise agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Implementation Approach</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-bg-surface before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-bg-surface bg-bg-alt text-text-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#11120F]">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-bg-surface bg-bg-alt">
                  <h4 className="font-semibold mb-2">Discovery & Design</h4>
                  <p className="text-sm text-text-secondary">Map out conversation flows, API requirements, and escalation triggers.</p>
                </div>
              </div>
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-bg-surface bg-bg-alt text-text-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#11120F]">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-bg-surface bg-bg-alt">
                  <h4 className="font-semibold mb-2">Prompting & Integration</h4>
                  <p className="text-sm text-text-secondary">Develop system prompts, configure voice synthesis, and connect backend systems.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-bg-surface bg-bg-alt text-text-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#11120F]">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-bg-surface bg-bg-alt">
                  <h4 className="font-semibold mb-2">Testing & Refinement</h4>
                  <p className="text-sm text-text-secondary">Internal simulation testing to eliminate edge cases and optimize latency.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-bg-surface bg-bg-alt text-text-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#11120F]">
                  4
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-bg-surface bg-bg-alt">
                  <h4 className="font-semibold mb-2">Deployment & Monitoring</h4>
                  <p className="text-sm text-text-secondary">Gradual rollout with real-time logging and human oversight.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-bg-alt px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group border border-bg-surface rounded-lg bg-bg-base [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-text-primary">
                <h3 className="font-medium">Can I use my own SIP infrastructure?</h3>
                <span className="shrink-0 rounded-sm p-1.5 text-text-muted sm:p-3 group-open:-rotate-180 transition-transform">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                Yes, we support Bring Your Own Carrier (BYOC) via SIP trunking. You can route calls from your existing Twilio, Telnyx, or custom PBX setup directly to our agents.
              </div>
            </details>
            
            <details className="group border border-bg-surface rounded-lg bg-bg-base [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-text-primary">
                <h3 className="font-medium">How natural do the voices sound?</h3>
                <span className="shrink-0 rounded-sm p-1.5 text-text-muted sm:p-3 group-open:-rotate-180 transition-transform">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                We utilize state-of-the-art TTS models including ElevenLabs, OpenAI, and Deepgram. You can choose from pre-configured voices or clone a custom voice for your brand.
              </div>
            </details>

            <details className="group border border-bg-surface rounded-lg bg-bg-base [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-text-primary">
                <h3 className="font-medium">What happens if the AI hallucinates?</h3>
                <span className="shrink-0 rounded-sm p-1.5 text-text-muted sm:p-3 group-open:-rotate-180 transition-transform">
                  <ChevronDown className="w-5 h-5" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                We implement strict boundary prompting and RAG (Retrieval-Augmented Generation) guardrails. Additionally, any detected uncertainty or customer frustration immediately triggers the human escalation protocol.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 8. Meaningful CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to automate your voice channels?</h2>
          <p className="text-xl text-text-secondary mb-10">
            Let's design a custom workflow that fits your specific operational requirements.
          </p>
          <button className="btn-primary flex items-center justify-center gap-2 mx-auto">
            Schedule a Technical Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

