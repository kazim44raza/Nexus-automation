'use client';
import React from 'react';
import { Bot, MessageSquare, Database, UserCheck, Calendar, Headset, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ChatbotsServicePage() {
  return (
    <div className="bg-bg-base text-text-primary min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-bg-surface">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-text-primary mb-6">
            Intelligent Chatbots for Autonomous Operations
          </h1>
          <p className="text-xl text-text-secondary mb-10 leading-relaxed">
            Deploy advanced conversational agents that understand context, access your knowledge base, and execute complex workflows from lead qualification to CRM synchronization.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center px-6 py-3 rounded-md transition-opacity font-medium">
              Deploy a Chatbot <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="#workflow" className="btn-secondary inline-flex items-center px-6 py-3 rounded-md border border-text-muted text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors font-medium">
              Explore Workflow
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-12 text-text-primary">How Our Chatbots Operate</h2>
        
        <div className="bg-bg-alt rounded-lg border border-bg-surface p-8">
          <div className="grid md:grid-cols-9 gap-4">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <MessageSquare className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">1. Inquiry</h3>
              <p className="text-xs text-text-muted">User asks a question.</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-text-muted" />
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <Database className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">2. Retrieval</h3>
              <p className="text-xs text-text-muted">RAG model queries knowledge base.</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-text-muted" />
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <UserCheck className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">3. Qualification</h3>
              <p className="text-xs text-text-muted">Qualifies lead & captures data.</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-text-muted" />
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <Calendar className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">4. Booking</h3>
              <p className="text-xs text-text-muted">Schedules meeting.</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-text-muted" />
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <Layers className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">5. CRM Sync</h3>
              <p className="text-xs text-text-muted">Logs interaction.</p>
            </div>
            
          </div>
          
          <div className="mt-12 pt-8 border-t border-bg-surface flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <Headset className="w-5 h-5 text-text-primary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">Human Escalation</h3>
              <p className="text-xs text-text-muted max-w-xs">If the request is complex or falls outside defined parameters, the bot seamlessly routes the conversation to a human agent along with full context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Integrations */}
      <section className="py-20 px-6 md:px-12 bg-bg-alt border-y border-bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-medium mb-8 text-text-primary">Primary Use Cases</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-text-secondary shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-1">Customer Support Triage</h4>
                  <p className="text-text-secondary text-sm">Automatically resolve tier-1 issues and route complex tickets to specialized human agents.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-text-secondary shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-1">Sales Qualification</h4>
                  <p className="text-text-secondary text-sm">Engage website visitors 24/7, ask qualifying questions, and push qualified leads to your sales pipeline.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-text-secondary shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-1">Internal Operations Helpdesk</h4>
                  <p className="text-text-secondary text-sm">Assist employees with HR, IT, and administrative inquiries by surfacing internal documentation.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-8 text-text-primary">Ecosystem Integrations</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-bg-surface border border-bg-base rounded-md flex items-center gap-3">
                <Database className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary font-medium">Salesforce</span>
              </div>
              <div className="p-4 bg-bg-surface border border-bg-base rounded-md flex items-center gap-3">
                <Database className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary font-medium">HubSpot</span>
              </div>
              <div className="p-4 bg-bg-surface border border-bg-base rounded-md flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary font-medium">Zendesk</span>
              </div>
              <div className="p-4 bg-bg-surface border border-bg-base rounded-md flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary font-medium">Intercom</span>
              </div>
            </div>
            <p className="text-sm text-text-muted mt-6">
              Our bots sync conversation logs, lead statuses, and support tickets bi-directionally with your existing operational stack.
            </p>
          </div>
        </div>
      </section>

      {/* Approach & Limitations */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-medium mb-8 text-text-primary">Implementation Approach</h2>
          <div className="space-y-6">
            <div className="pl-6 border-l-2 border-text-secondary">
              <h4 className="text-lg font-medium text-text-primary mb-2">1. Knowledge Ingestion</h4>
              <p className="text-text-secondary text-sm">We structure your existing documentation, FAQs, and product manuals into a vector database for precise retrieval.</p>
            </div>
            <div className="pl-6 border-l-2 border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">2. Workflow Mapping</h4>
              <p className="text-text-secondary text-sm">We define specific qualification criteria, routing logic, and escalation triggers tailored to your business rules.</p>
            </div>
            <div className="pl-6 border-l-2 border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">3. Deployment & Fine-tuning</h4>
              <p className="text-text-secondary text-sm">The chatbot is deployed to a staging environment for rigorous edge-case testing before live production rollout.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium mb-8 text-text-primary">Technical Limitations</h2>
          <div className="bg-bg-surface p-6 rounded-md border border-bg-base">
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 shrink-0" />
                <p>Strict dependency on the quality and recency of your provided knowledge base.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 shrink-0" />
                <p>Inability to execute actions outside explicitly approved API integrations (e.g., cannot process manual refunds without API access).</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 shrink-0" />
                <p>Requires a mandatory human-escalation pathway; cannot operate 100% autonomously in critical edge cases.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-bg-alt border-y border-bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-10 text-center text-text-primary">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-bg-base p-6 rounded-md border border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">How does the bot know when to escalate to a human?</h4>
              <p className="text-sm text-text-secondary">We configure semantic triggers based on user sentiment, specific keywords, or repeated failures to answer a question. When triggered, the bot pauses and notifies your team via Slack or your helpdesk.</p>
            </div>
            <div className="bg-bg-base p-6 rounded-md border border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">Is user data secure?</h4>
              <p className="text-sm text-text-secondary">Yes. Our bots are stateless beyond the active session, and all captured PII is immediately routed to your secure CRM and purged from the bot's temporary memory.</p>
            </div>
            <div className="bg-bg-base p-6 rounded-md border border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">Can it adapt to multiple languages?</h4>
              <p className="text-sm text-text-secondary">Our underlying LLM architecture natively supports over 50 languages, providing real-time translation and localized responses without requiring multiple discrete knowledge bases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-text-primary mb-6">Ready to Automate Your Interactions?</h2>
        <p className="text-lg text-text-secondary mb-10">
          Let's discuss how a custom chatbot can reduce your support load and increase your lead conversion rate.
        </p>
        <Link href="/contact" className="btn-primary inline-flex items-center px-8 py-4 rounded-md transition-opacity font-medium text-lg">
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}

