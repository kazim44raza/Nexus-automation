'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box, Cpu, Database, MessageSquare, Workflow, Zap, CheckCircle, Network, Layers, Command } from 'lucide-react';

const NODES = [
  { id: 'typeform', icon: Box, label: 'Form Submit', delay: 0 },
  { id: 'ai', icon: Cpu, label: 'AI Qualifier', delay: 1 },
  { id: 'hubspot', icon: Database, label: 'Update CRM', delay: 2 },
  { id: 'slack', icon: MessageSquare, label: 'Team Alert', delay: 3 },
];

export default function BusinessAutomationClient() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % NODES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg-base selection:bg-primary/20 selection:text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-bg-surface via-bg-base to-bg-base opacity-70" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-border mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">Business Automation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary tracking-tight mb-8">
              Orchestrate your entire <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">business logic.</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
              Connect triggers to AI decisions and automated actions. Replace manual data entry with reliable, intelligent workflows that operate autonomously.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-primary text-bg-base rounded-full font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto">
                Start Automating
              </button>
              <button className="px-8 py-4 bg-bg-surface text-text-primary rounded-full font-medium border border-border hover:bg-bg-alt transition-colors w-full sm:w-auto">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Pipeline Visualization */}
      <section className="py-24 bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-display font-bold text-text-primary mb-4">Autonomous Data Pipelines</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Watch data flow instantly from lead capture through AI qualification, CRM updates, and team notifications.</p>
          </div>

          <div className="relative max-w-5xl mx-auto bg-bg-base rounded-2xl border border-border p-8 md:p-16 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 z-10">
              {NODES.map((node, index) => {
                const Icon = node.icon;
                const isActive = index === activeNode;
                const isPast = index < activeNode;
                
                return (
                  <React.Fragment key={node.id}>
                    {/* Node */}
                    <div className="relative flex flex-col items-center group">
                      <motion.div 
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-500
                          ${isActive ? 'bg-bg-surface border-primary shadow-[0_0_30px_rgba(var(--color-primary),0.2)]' : 
                            isPast ? 'bg-bg-surface border-mint/50' : 'bg-bg-base border-border'}`}
                        animate={{ scale: isActive ? 1.1 : 1 }}
                      >
                        <Icon className={`w-8 h-8 transition-colors duration-500
                          ${isActive ? 'text-primary' : isPast ? 'text-mint' : 'text-text-muted'}`} 
                        />
                      </motion.div>
                      
                      <div className="absolute -bottom-10 whitespace-nowrap text-center">
                        <span className={`text-sm font-medium transition-colors duration-500
                          ${isActive ? 'text-primary' : isPast ? 'text-text-primary' : 'text-text-muted'}`}>
                          {node.label}
                        </span>
                      </div>

                      {/* Floating Data Packet Indicator */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: -40 }}
                            exit={{ opacity: 0, y: -60 }}
                            className="absolute top-0 px-3 py-1 bg-bg-surface border border-border rounded-full text-xs text-text-secondary flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Processing
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Connecting Line */}
                    {index < NODES.length - 1 && (
                      <div className="hidden md:block flex-1 h-0.5 bg-border relative">
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-primary"
                          initial={{ width: '0%' }}
                          animate={{ width: isPast ? '100%' : isActive ? '50%' : '0%' }}
                          transition={{ duration: 0.5 }}
                        />
                        {/* Moving Data Particle */}
                        {(isActive || isPast) && (
                          <motion.div
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--color-primary),0.8)]"
                            initial={{ left: '0%', opacity: 0 }}
                            animate={
                              isActive
                                ? { left: ['0%', '100%'], opacity: [0, 1, 0] }
                                : { left: '100%', opacity: 0 }
                            }
                            transition={
                              isActive
                                ? { duration: 1, repeat: Infinity, ease: 'linear' }
                                : { duration: 0 }
                            }
                          />
                        )}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "Visual Orchestration",
                desc: "Design complex workflows across disparate tools with an intuitive visual canvas."
              },
              {
                icon: Cpu,
                title: "AI-Driven Routing",
                desc: "Leverage LLMs to parse unstructured data and make conditional routing decisions."
              },
              {
                icon: Layers,
                title: "Legacy Integrations",
                desc: "Connect modern SaaS tools with legacy CRMs and ERPs seamlessly."
              },
              {
                icon: Command,
                title: "Human-in-the-loop",
                desc: "Automatically escalate edge cases to human operators with full context."
              },
              {
                icon: Workflow,
                title: "Error Handling",
                desc: "Robust retry logic and fallback paths ensure your processes never break."
              },
              {
                icon: CheckCircle,
                title: "Audit Trails",
                desc: "Comprehensive logging of every automated action for compliance and debugging."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-bg-surface border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-bg-base rounded-xl border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="text-xl font-medium text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
