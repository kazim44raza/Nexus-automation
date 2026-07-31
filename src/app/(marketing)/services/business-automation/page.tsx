'use client';
import React from 'react';
import { ArrowRight, Workflow, Zap, Clock, Users, Database, ShieldAlert, CheckCircle2, XCircle, Bot, AlertTriangle, Shield, Check } from 'lucide-react';

export default function BusinessAutomationPage() {
  return (
    <div className="min-h-screen bg-[#11120F] text-[#F2EEE6] font-sans selection:bg-[#BEB7AB] selection:text-[#11120F]">
      {/* 1. Clear Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Intelligent Business <span className="text-[#BEB7AB]">Automation</span>
          </h1>
          <p className="text-xl text-[#BEB7AB] mb-10 leading-relaxed">
            Eliminate manual repetition and reduce error rates with custom, robust workflows. 
            We build precise operational pipelines that connect your existing tools, handle complex 
            logic, and gracefully escalate to human operators when needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary px-8 py-4 bg-[#B87A5B] hover:bg-[#A36A4E] text-[#11120F] font-medium rounded transition-colors flex items-center justify-center gap-2">
              Start a Project <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary px-8 py-4 border border-[#918B81] text-[#F2EEE6] hover:bg-[#181915] font-medium rounded transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* 2. Specific Use Cases */}
      <section className="py-20 bg-[#181915] border-y border-[#20211C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-light mb-12">Targeted Operational Efficiencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#20211C] p-8 rounded-sm">
              <Users className="w-8 h-8 text-[#918B81] mb-6" />
              <h3 className="text-xl mb-4">Client Onboarding</h3>
              <p className="text-[#BEB7AB] leading-relaxed">
                Automate contract generation, CRM setup, welcome emails, and provisioning 
                without dropping a single detail. Ensure new clients receive immediate attention 
                while your team saves hours per account.
              </p>
            </div>
            <div className="bg-[#20211C] p-8 rounded-sm">
              <Database className="w-8 h-8 text-[#918B81] mb-6" />
              <h3 className="text-xl mb-4">Data Synchronization</h3>
              <p className="text-[#BEB7AB] leading-relaxed">
                Keep inventory, financial records, and project management tools in perfect 
                alignment. Eliminate double-entry and discrepancies with real-time, bi-directional 
                sync pipelines.
              </p>
            </div>
            <div className="bg-[#20211C] p-8 rounded-sm">
              <ShieldAlert className="w-8 h-8 text-[#918B81] mb-6" />
              <h3 className="text-xl mb-4">Incident Response</h3>
              <p className="text-[#BEB7AB] leading-relaxed">
                Detect anomalies, alert the correct on-call personnel, create incident tickets, 
                and aggregate preliminary diagnostic data instantly before a human even opens 
                their laptop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual Workflow & 5. Human Escalation */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-light mb-6">Anatomy of a Robust Workflow</h2>
        <p className="text-[#BEB7AB] max-w-2xl mb-16">
          Real automation isn't just about connecting Point A to Point B. It's about handling 
          conditionals, API failures, rate limits, and knowing exactly when to step back and 
          ask a human for help.
        </p>
        
        <div className="bg-[#181915] p-8 md:p-12 border border-[#20211C] rounded-sm font-mono text-sm">
          {/* Trigger */}
          <div className="flex items-start gap-6 mb-8 relative">
            <div className="w-12 h-12 bg-[#20211C] rounded flex items-center justify-center shrink-0 z-10 border border-[#918B81]">
              <Zap className="w-6 h-6 text-[#F2EEE6]" />
            </div>
            <div>
              <div className="text-[#918B81] mb-1">TRIGGER</div>
              <div className="text-lg text-[#F2EEE6] mb-2">New Support Ticket Created</div>
              <div className="text-[#BEB7AB]">Payload parsed: severity, customer_tier, intent_classification</div>
            </div>
            {/* Connecting line */}
            <div className="absolute top-12 left-6 w-px h-12 bg-[#20211C]"></div>
          </div>

          {/* Condition */}
          <div className="flex items-start gap-6 mb-8 relative">
            <div className="w-12 h-12 bg-[#20211C] rounded flex items-center justify-center shrink-0 z-10 border border-[#918B81]">
              <Workflow className="w-6 h-6 text-[#F2EEE6]" />
            </div>
            <div className="flex-1">
              <div className="text-[#918B81] mb-1">CONDITION EVALUATION</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-[#11120F] p-4 border border-[#20211C]">
                  <div className="text-[#BEB7AB] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#918B81]" /> Path A: Standard Request
                  </div>
                  <div className="text-[#918B81]">IF severity &lt; high AND known_issue = true</div>
                  <div className="mt-2 pl-4 border-l-2 border-[#20211C]">
                    <div className="py-2">→ Action: Auto-reply with resolution docs</div>
                    <div className="py-2">→ Action: Close ticket</div>
                  </div>
                </div>
                <div className="bg-[#20211C] p-4 border border-[#918B81]">
                  <div className="text-[#F2EEE6] mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#B87A5B]" /> Path B: Edge Case / High Severity
                  </div>
                  <div className="text-[#918B81]">IF severity = critical OR unknown_intent</div>
                  <div className="mt-2 pl-4 border-l-2 border-[#B87A5B]">
                    <div className="py-2 text-[#F2EEE6]">→ Action: Enrich with customer history</div>
                    <div className="py-2 text-[#F2EEE6]">→ Handoff: Escalate to Human On-Call</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Handoff / Exception Handling */}
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-[#B87A5B] rounded flex items-center justify-center shrink-0 z-10">
              <Users className="w-6 h-6 text-[#11120F]" />
            </div>
            <div>
              <div className="text-[#918B81] mb-1">HUMAN ESCALATION (HANDOFF)</div>
              <div className="text-lg text-[#F2EEE6] mb-2">Slack Alert to Operations Team</div>
              <div className="text-[#BEB7AB]">
                Automation halts execution. Pushes aggregated context, recent logs, and action buttons directly into Slack. Human operator reviews and clicks "Approve Refund" to resume workflow.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integrations */}
      <section className="py-20 bg-[#181915] border-y border-[#20211C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-light mb-6">System Integrations</h2>
              <p className="text-[#BEB7AB] leading-relaxed mb-6">
                We don't rely on brittle third-party integration platforms that break when 
                an API changes. We build custom, authenticated connections using secure webhooks, 
                OAuth2, and REST/GraphQL APIs.
              </p>
              <ul className="space-y-4">
                {['CRMs (Salesforce, HubSpot)', 'Financial (Stripe, QuickBooks)', 'Comms (Slack, Teams, Twilio)', 'Custom Internal APIs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#BEB7AB]">
                    <Check className="w-5 h-5 text-[#918B81]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
               {/* Abstract representation of systems */}
               <div className="bg-[#20211C] h-32 rounded flex items-center justify-center text-[#918B81] border border-[#11120F]">System A</div>
               <div className="bg-[#20211C] h-32 rounded flex items-center justify-center text-[#918B81] border border-[#11120F]">System B</div>
               <div className="bg-[#20211C] h-32 rounded flex items-center justify-center text-[#918B81] border border-[#11120F]">System C</div>
               <div className="bg-[#20211C] h-32 rounded flex items-center justify-center text-[#918B81] border border-[#11120F]">System D</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Implementation Approach */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-light mb-12 text-center">Our Implementation Approach</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Process Audit', desc: 'We map out your current manual processes, identifying bottlenecks and edge cases.' },
            { step: '02', title: 'Architecture', desc: 'Designing the logic flow, data transformations, and error handling mechanisms.' },
            { step: '03', title: 'Development', desc: 'Building custom scripts, webhooks, and secure API connections.' },
            { step: '04', title: 'Monitoring', desc: 'Deploying with full observability so failures are caught and handled instantly.' }
          ].map((phase, i) => (
            <div key={i} className="relative">
              <div className="text-4xl font-light text-[#20211C] mb-4">{phase.step}</div>
              <h3 className="text-lg mb-2">{phase.title}</h3>
              <p className="text-[#918B81] text-sm">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Limitations */}
      <section className="py-20 bg-[#11120F] border-t border-[#20211C]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Shield className="w-12 h-12 text-[#918B81] mx-auto mb-6" />
          <h2 className="text-3xl font-light mb-6">Service Limitations</h2>
          <p className="text-[#BEB7AB] leading-relaxed mb-8">
            We believe in setting transparent boundaries. We do not automate core creative processes, 
            high-stakes strategic decision making, or scenarios lacking predictable logic structures. 
            If an operation requires nuanced human empathy or subjective judgement, we will design a 
            workflow that hands off to a human, rather than attempting to automate it entirely.
          </p>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-light mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h4 className="text-lg mb-2">What happens when an API breaks?</h4>
            <p className="text-[#918B81]">Our systems are built with automatic retries and exponential backoff. If an endpoint remains unreachable, the workflow gracefully suspends and alerts your technical team immediately.</p>
          </div>
          <div className="h-px bg-[#20211C] w-full"></div>
          <div>
            <h4 className="text-lg mb-2">Can you automate legacy systems without APIs?</h4>
            <p className="text-[#918B81]">Yes, provided the system has export capabilities, database access, or structured email reporting. However, we avoid brittle screen-scraping RPA solutions when possible.</p>
          </div>
          <div className="h-px bg-[#20211C] w-full"></div>
          <div>
            <h4 className="text-lg mb-2">How do you handle sensitive data?</h4>
            <p className="text-[#918B81]">We implement zero-retention architectures where possible. Data passes through memory during processing and is not logged permanently unless explicitly required for audit trails.</p>
          </div>
        </div>
      </section>

      {/* 8. Meaningful CTA */}
      <section className="py-32 bg-[#181915] border-t border-[#20211C] text-center px-6">
        <h2 className="text-4xl font-light mb-6">Ready to eliminate operational friction?</h2>
        <p className="text-[#BEB7AB] max-w-2xl mx-auto mb-10">
          Stop wasting your team's talent on repetitive data entry and manual routing. 
          Let's discuss how custom automation can scale your operations.
        </p>
        <button className="btn-primary px-8 py-4 bg-[#B87A5B] hover:bg-[#A36A4E] text-[#11120F] font-medium rounded transition-colors">
          Schedule a Process Audit
        </button>
      </section>
    </div>
  );
}

