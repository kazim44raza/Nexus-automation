'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Users, GitMerge, FileText, CheckCircle2, Bot } from 'lucide-react';

export function ChatbotsClient() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 0, label: "User Intent: 'Pricing'", icon: MessageSquare, color: "text-text-primary" },
    { id: 1, label: "Knowledge Retrieval", icon: Database, color: "text-mint" },
    { id: 2, label: "Formulate Response", icon: Bot, color: "text-primary" },
    { id: 3, label: "Lead Capture", icon: Users, color: "text-accent" },
    { id: 4, label: "CRM Sync", icon: CheckCircle2, color: "text-mint" },
  ];

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-surface border border-border text-mint text-sm font-medium mb-6">
                <GitMerge className="w-4 h-4" />
                <span>Context-Aware Routing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-text-primary leading-tight">
                Automated <br/>
                <span className="text-text-secondary">conversational workflows.</span>
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-lg">
                Deploy intelligent chat assistants that capture visitor information, answer routine questions, and route complex intents dynamically.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/contact" className="inline-flex min-h-11 items-center px-6 py-3 bg-text-primary text-bg-base rounded-md font-medium hover:opacity-90 transition-opacity">
                Plan a chat assistant
              </a>
              <a href="#process" className="inline-flex min-h-11 items-center px-6 py-3 bg-bg-surface border border-border text-text-primary rounded-md font-medium hover:bg-bg-alt transition-colors">
                View the process
              </a>
            </motion.div>
          </div>

          {/* Visual Anchor: Logic Tree */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-bg-surface border border-border rounded-2xl p-8 lg:p-12 min-h-[450px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bg-alt to-transparent opacity-30 pointer-events-none rounded-2xl" />
            
            <div className="relative z-10 w-full max-w-md flex flex-col gap-4">
              {nodes.map((node, i) => {
                const isActive = activeNode === i;
                const isPast = activeNode > i;
                
                return (
                  <div key={node.id} className="relative flex flex-col items-center">
                    {/* Connecting Line */}
                    {i !== 0 && (
                      <div className="h-6 w-px bg-border relative">
                        <motion.div 
                          className="absolute top-0 left-0 w-full bg-primary"
                          initial={{ height: 0 }}
                          animate={{ height: isPast || isActive ? '100%' : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    )}
                    
                    <motion.div 
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                        isActive 
                          ? 'bg-bg-base border-primary shadow-[0_0_15px_rgba(var(--primary),0.1)]' 
                          : isPast 
                            ? 'bg-bg-alt border-border opacity-70'
                            : 'bg-bg-base border-border opacity-40'
                      }`}
                      animate={{ 
                        scale: isActive ? 1.02 : 1,
                        x: isActive ? (i % 2 === 0 ? 5 : -5) : 0 
                      }}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-bg-surface' : 'bg-transparent'}`}>
                        <node.icon className={`w-5 h-5 ${isActive ? node.color : 'text-text-muted'}`} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-medium ${isActive ? 'text-text-primary' : 'text-text-muted'}`}>
                          {node.label}
                        </div>
                        {isActive && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-xs text-text-muted mt-1"
                          >
                            Processing node...
                          </motion.div>
                        )}
                      </div>
                      
                      {isActive && (
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      )}
                      {isPast && (
                        <CheckCircle2 className="w-4 h-4 text-mint" />
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="mb-12">
          <h2 className="text-3xl font-medium text-text-primary mb-4">Intelligent Infrastructure</h2>
          <p className="text-text-muted max-w-2xl text-lg">Robust chat experiences driven by custom knowledge bases and real-time API integrations.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-border">
            <Image src="/images/chatbot_owner_scene.jpg" alt="A business owner reviewing customer inquiries on a desktop computer" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base/85 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 text-sm text-white/80">The assistant handles the first pass; your team keeps visibility and control.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            { icon: MessageSquare, title: "Natural understanding", desc: "Context-aware LLM processing of user intent." },
            { icon: Database, title: "Knowledge Retrieval", desc: "Uses your approved business sources to prepare grounded answers." },
            { icon: Users, title: "Lead Qualification", desc: "Automatic CRM ingestion of verified contact details." },
            { icon: GitMerge, title: "Human Handoff", desc: "Seamless transition to live agents with full context." },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg-surface border border-border rounded-xl p-6 hover:border-mint transition-colors group"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:text-mint transition-colors" />
              <h3 className="text-lg font-medium text-text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="process" className="max-w-7xl mx-auto px-6 lg:px-8 scroll-mt-28">
        <div className="bg-bg-surface border border-border rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mint/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <h2 className="text-3xl font-medium text-text-primary mb-12">Deployment Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", title: "Intent Mapping", desc: "Assistant parses the user's primary goal accurately." },
              { step: "02", title: "Knowledge Sync", desc: "System queries your documentation to formulate response." },
              { step: "03", title: "Lead Capture", desc: "Contact details are requested and verified natively." },
              { step: "04", title: "CRM Ingestion", desc: "Transcripts and entities are pushed to your database." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-4xl font-light text-text-muted/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-medium text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                {i !== 3 && (
                  <div className="hidden md:block absolute top-6 right-0 w-[calc(100%-2rem)] h-px bg-border -z-10 transform translate-x-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
