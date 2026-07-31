'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Phone,
  MessageSquare,
  Workflow,
  ArrowRight,
  MessageCircle,
  Target,
  Calendar,
  Headset,
  Database,
  RefreshCw,
  Bot
} from 'lucide-react';

const capabilities = [
  { icon: MessageCircle, label: "WhatsApp Automation" },
  { icon: Target, label: "Lead Qualification" },
  { icon: Calendar, label: "Appointment Booking" },
  { icon: Headset, label: "Customer Support" },
  { icon: Database, label: "CRM Sync" },
  { icon: RefreshCw, label: "Automated Follow-Up" }
];

export default function ProductStories() {
  return (
    <section className="flex flex-col w-full bg-bg-base">
      
      {/* Story 1: Voice Agents */}
      <div className="section-py overflow-hidden border-t border-border">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="text-xs font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Voice Agents
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary tracking-tight mb-6">
                Turn every inbound call into a handled conversation.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed font-light">
                Our voice agents answer calls instantly, qualify leads through natural conversation, book appointments directly into your calendar, and escalate to your team when needed.
              </p>
              <Link href="/services/voice-agents" className="btn-primary inline-flex items-center gap-2">
                Explore Voice Agents <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="card bg-bg-surface p-6 rounded-2xl shadow-xl max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-bg-alt border border-border rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-mint" />
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">Inbound Caller</div>
                      <div className="text-xs text-mint flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse" /> Active Call — 0:42
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-16 flex items-center justify-center gap-1 mb-6">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary/40 rounded-full"
                      animate={{ height: ['20%', '90%', '30%', '100%', '20%'] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: Math.random(), ease: "easeInOut" }}
                    />
                  ))}
                </div>

                <div className="bg-bg-alt p-4 rounded-xl border border-border mb-4 relative before:absolute before:-top-2 before:left-6 before:w-4 before:h-4 before:bg-bg-alt before:border-l before:border-t before:border-border before:rotate-45">
                  <p className="text-sm text-text-secondary italic">"I'd like to schedule a consultation for next week."</p>
                </div>

                <div className="flex gap-2">
                  <span className="text-xs font-medium px-2.5 py-1.5 bg-bg-alt text-primary rounded-md border border-border flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Booking</span>
                  <span className="text-xs font-medium px-2.5 py-1.5 bg-bg-alt text-mint rounded-md border border-border flex items-center gap-1.5"><Target className="w-3 h-3" /> High Intent</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Story 2: Chatbots */}
      <div className="section-py bg-bg-alt overflow-hidden border-t border-border">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 md:order-1"
            >
              <div className="card bg-bg-surface rounded-2xl shadow-xl overflow-hidden max-w-sm mx-auto">
                <div className="bg-bg-alt px-4 py-3 flex items-center gap-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <div className="bg-bg-surface border border-border text-[10px] text-text-muted mx-auto px-4 py-1.5 rounded-md shadow-sm w-3/4 text-center font-code tracking-wide">
                    azorvin.com
                  </div>
                </div>
                
                <div className="p-5 space-y-5">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-bg-alt border border-border flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-bg-alt border border-border p-3.5 rounded-2xl rounded-tl-none text-sm text-text-primary">
                      Hi! How can I help you today?
                    </div>
                  </div>
                  
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="bg-primary/10 border border-primary/20 text-text-primary p-3.5 rounded-2xl rounded-tr-none text-sm">
                      I need help automating my appointment booking.
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-bg-alt border border-border flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-bg-alt border border-border p-3.5 rounded-2xl rounded-tl-none text-sm text-text-primary">
                      I can help with that! What industry is your business in?
                    </div>
                  </div>

                  <div className="flex justify-end pt-3 border-t border-border mt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg-alt border border-border rounded-md shadow-sm">
                      <Target className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-text-primary">Qualified Lead</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg order-1 md:order-2"
            >
              <div className="text-xs font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Chat Systems
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary tracking-tight mb-6">
                Capture intent while interest is highest.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed font-light">
                Deploy intelligent chatbots that engage visitors, answer business-specific questions, capture lead information, and schedule consultations — all without human intervention.
              </p>
              <Link href="/services/chatbots" className="btn-primary inline-flex items-center gap-2">
                Explore Chat Systems <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Story 3: Automation */}
      <div className="section-py overflow-hidden border-t border-border">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="text-xs font-bold tracking-widest text-primary uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Business Workflows
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary tracking-tight mb-6">
                Connect your tools. Eliminate manual entry.
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed font-light">
                Build intelligent workflows that connect your CRM, calendar, email, messaging, and internal tools into one cohesive, automated system.
              </p>
              <Link href="/services/business-automation" className="btn-primary inline-flex items-center gap-2">
                Explore Automation <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative py-12"
            >
              <div className="relative max-w-sm mx-auto h-[280px]">
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  <path d="M 60 40 L 160 80 L 260 40 L 260 160 L 160 220 L 60 160 Z" fill="none" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 4" />
                  <circle r="4" fill="var(--color-primary)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 60 40 L 160 80 L 260 40 L 260 160 L 160 220 L 60 160 Z" />
                  </circle>
                </svg>

                {/* Nodes */}
                {[
                  { icon: Target, label: 'Form', x: 20, y: 10 },
                  { icon: Database, label: 'CRM', x: 120, y: 50 },
                  { icon: MessageSquare, label: 'Email', x: 220, y: 10 },
                  { icon: Calendar, label: 'Calendar', x: 220, y: 130 },
                  { icon: Workflow, label: 'Slack', x: 120, y: 190 },
                  { icon: Bot, label: 'AI', x: 20, y: 130 },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-bg-alt border border-border shadow-sm rounded-lg p-2 flex flex-col items-center justify-center gap-1 w-20 h-16 z-10"
                    style={{ left: node.x, top: node.y }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  >
                    <node.icon className="w-5 h-5 text-text-secondary" />
                    <span className="text-[10px] font-medium text-text-muted">{node.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Capability Chips */}
      <div className="pb-16 bg-bg-base border-b border-border">
        <div className="page-container flex flex-wrap justify-center gap-3">
          {capabilities.map((cap, i) => (
            <div key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-bg-surface border border-border rounded-full text-sm font-medium text-text-secondary transition-colors cursor-default shadow-sm">
              <cap.icon className="w-4 h-4 text-primary" />
              {cap.label}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
