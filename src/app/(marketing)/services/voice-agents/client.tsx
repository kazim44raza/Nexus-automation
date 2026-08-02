'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mic, Zap, BarChart, PhoneCall, BrainCircuit, Activity, Clock } from 'lucide-react';

export default function VoiceAgentsClient() {
  const [agentState, setAgentState] = useState<'listening' | 'processing' | 'speaking'>('speaking');

  // Simulate conversation state changes
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentState(prev => {
        if (prev === 'speaking') return 'listening';
        if (prev === 'listening') return 'processing';
        return 'speaking';
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans pt-24 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface border border-border text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Natural turn-taking</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-text-primary leading-tight">
                Never miss <br/>
                <span className="text-text-secondary">another phone call.</span>
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-lg">
                Design voice workflows for inbound support, qualification, booking, and routing—with clear escalation paths and a voice that fits your business.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/contact" className="inline-flex min-h-11 items-center px-6 py-3 bg-primary text-bg-base rounded-md font-medium hover:opacity-90 transition-opacity">
                Plan a voice workflow
              </a>
              <a href="#workflow" className="inline-flex min-h-11 items-center px-6 py-3 bg-bg-surface border border-border text-text-primary rounded-md font-medium hover:bg-bg-alt transition-colors">
                See the call flow
              </a>
            </motion.div>
          </div>

          {/* Visual Anchor: Waveform and Latency Simulation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-bg-surface border border-border rounded-2xl p-8 overflow-hidden flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bg-surface to-bg-alt opacity-50 pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-sm flex flex-col gap-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center border border-border">
                    <PhoneCall className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Live Call Active</div>
                    <div className="text-xs text-text-muted">Lead Qualification</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-primary bg-bg-base px-2 py-1 rounded border border-border">
                  {agentState === 'processing' ? 'Checking context' : 'Call connected'}
                </div>
              </div>

              {/* Waveform */}
              <div className="h-24 flex items-center justify-center gap-1.5">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-1.5 rounded-full ${
                      agentState === 'speaking' ? 'bg-primary' : 
                      agentState === 'listening' ? 'bg-mint' : 'bg-text-muted'
                    }`}
                    animate={{
                      height: agentState === 'speaking' ? ['20%', '80%', '40%', '100%', '30%'] :
                              agentState === 'listening' ? ['10%', '30%', '15%', '20%', '10%'] : '10%'
                    }}
                    transition={{
                      duration: agentState === 'speaking' ? 0.5 + (i % 3) * 0.2 : 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.05
                    }}
                  />
                ))}
              </div>

              {/* State Indicator */}
              <div className="flex flex-col gap-2 bg-bg-base border border-border rounded-lg p-4">
                <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-1">Agent Status</div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      agentState === 'processing' ? 'bg-accent' : agentState === 'speaking' ? 'bg-primary' : 'bg-mint'
                    }`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${
                      agentState === 'processing' ? 'bg-accent' : agentState === 'speaking' ? 'bg-primary' : 'bg-mint'
                    }`}></span>
                  </span>
                  <span className="text-sm text-text-primary font-medium capitalize">
                    {agentState === 'listening' && 'User Speaking...'}
                    {agentState === 'processing' && 'Navigating Interruption...'}
                    {agentState === 'speaking' && 'Preparing response...'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-border lg:min-h-[540px]">
          <Image src="/images/voice-agent-human-scene-v2.webp" alt="A service professional reviewing a live voice-call workflow on the edge of her monitor" fill priority sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-base/90 via-bg-base/35 to-transparent" />
          <div className="relative flex min-h-[480px] max-w-xl flex-col justify-end p-8 lg:min-h-[540px] lg:p-12">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">The handoff matters</span>
            <h2 className="font-display text-3xl font-semibold">A useful voice agent knows when a person should take the call.</h2>
            <p className="mt-4 text-text-secondary">We define scope, fallback behavior, consent language, call logging, and the context your team receives at transfer.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="mb-12">
          <h2 className="text-3xl font-medium text-text-primary mb-4">Designed around the whole call</h2>
          <p className="text-text-muted max-w-2xl text-lg">The useful details are in pacing, interruptions, integrations, and what happens after the caller hangs up.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: "Response pacing", desc: "Conversation timing is tuned for natural turn-taking and clear recovery." },
            { icon: Activity, title: "Interruption handling", desc: "Seamless turn-taking and dynamic interruption recovery." },
            { icon: PhoneCall, title: "VoIP integrations", desc: "Connect compatible telephony providers and existing call-routing infrastructure." },
            { icon: BarChart, title: "Post-call logging", desc: "Prepare transcripts, summaries, and agreed CRM updates after a call." },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-primary transition-colors group"
            >
              <feature.icon className="w-8 h-8 text-mint mb-4 group-hover:text-primary transition-colors" />
              <h3 className="text-lg font-medium text-text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-28">
        <div className="bg-bg-surface border border-border rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-3xl font-medium text-text-primary mb-12">How it works</h2>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {[
                { step: "01", title: "Inbound Call Connected", desc: "The configured call path begins with an approved brand greeting.", icon: PhoneCall },
                { step: "02", title: "Intent & Entity Extraction", desc: "System listens, handles interruptions, and extracts key entities in real-time.", icon: BrainCircuit },
                { step: "03", title: "Action Execution", desc: "The workflow can perform approved lookups, offer appointments, or route the call.", icon: Zap },
                { step: "04", title: "Post-Call Processing", desc: "A summary and agreed action items can be added to your CRM for review.", icon: BarChart },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-bg-base border border-border flex items-center justify-center shrink-0 z-10 text-xs font-mono text-primary shadow-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-text-primary mb-2 flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-text-muted" />
                      {item.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
