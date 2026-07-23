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
import { SectionHeading } from '@/components/ui/SectionHeading';

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
    <section className="flex flex-col w-full">
      
      {/* Story 1: Voice Agents */}
      <div className="section-py section-light overflow-hidden">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="text-sm font-bold tracking-wider text-cyan-600 uppercase mb-4">AI Voice Agents</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Turn every incoming call into a handled conversation.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our AI voice agents answer calls instantly, qualify leads through natural conversation, book appointments directly into your calendar, and escalate to your team when needed.
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
              <div className="card bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Sarah M.</div>
                      <div className="text-xs text-emerald-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Active Call — 0:42
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-16 flex items-center justify-center gap-1 mb-6">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-cyan-400 rounded-full"
                      animate={{ height: ['20%', '80%', '40%', '100%', '30%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: Math.random(), ease: "easeInOut" }}
                    />
                  ))}
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                  <p className="text-sm text-slate-600 italic">"I'd like to schedule a cleaning for next week."</p>
                </div>

                <div className="flex gap-2">
                  <span className="text-xs font-medium px-2.5 py-1 bg-violet-50 text-violet-700 rounded-md border border-violet-100">Intent: Booking</span>
                  <span className="text-xs font-medium px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-100">Sentiment: Positive</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Story 2: Chatbots */}
      <div className="section-py bg-slate-50 overflow-hidden">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 md:order-1"
            >
              <div className="card bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-sm mx-auto">
                <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b border-slate-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="bg-white text-[10px] text-slate-400 mx-auto px-4 py-1 rounded-md shadow-sm">nexus-automation.tech</div>
                </div>
                
                <div className="p-4 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex-shrink-0 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700">
                      Hi! How can I help you today?
                    </div>
                  </div>
                  
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0" />
                    <div className="bg-cyan-600 text-white p-3 rounded-2xl rounded-tr-none text-sm">
                      I need help automating my appointment booking
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex-shrink-0 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700">
                      I can help with that! What industry is your business in?
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 border border-violet-100 rounded-full shadow-sm">
                      <Target className="w-3.5 h-3.5 text-violet-600" />
                      <span className="text-xs font-semibold text-violet-700">Score: 85/100</span>
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
              <div className="text-sm font-bold tracking-wider text-cyan-600 uppercase mb-4">AI Chatbots</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Convert website visitors while their interest is highest.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Deploy intelligent chatbots that engage visitors, answer business-specific questions, capture lead information, and schedule consultations — all without human intervention.
              </p>
              <Link href="/services/chatbots" className="btn-primary inline-flex items-center gap-2">
                Explore Chatbots <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Story 3: Automation */}
      <div className="section-py section-light overflow-hidden">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <div className="text-sm font-bold tracking-wider text-cyan-600 uppercase mb-4">Business Automation</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Connect your tools and eliminate repetitive work.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Build intelligent workflows that connect your CRM, calendar, email, messaging, and team tools into one coordinated system that runs automatically.
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
                  <path d="M 60 40 L 160 80 L 260 40 L 260 160 L 160 220 L 60 160 Z" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
                  <circle r="4" fill="#0ea5e9">
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
                    className="absolute bg-white border border-slate-200 shadow-sm rounded-lg p-2 flex flex-col items-center justify-center gap-1 w-20 h-16 z-10"
                    style={{ left: node.x, top: node.y }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  >
                    <node.icon className="w-5 h-5 text-cyan-600" />
                    <span className="text-[10px] font-medium text-slate-600">{node.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Capability Chips */}
      <div className="pb-16 bg-white border-b border-slate-100">
        <div className="page-container flex flex-wrap justify-center gap-3">
          {capabilities.map((cap, i) => (
            <div key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors cursor-default shadow-sm">
              <cap.icon className="w-4 h-4 text-cyan-600" />
              {cap.label}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
