'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadQualificationClient() {
  // We'll build a hero, features, and workflow section.
  return (
    <div className="min-h-screen bg-bg-base text-text-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-border bg-bg-surface text-text-secondary text-sm tracking-widest uppercase">
            Intelligent Lead Qualification
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Filter the Noise. <br />
            <span className="text-primary italic">Capture the Signal.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary mb-12">
            Build a consistent first-pass qualification process that captures intent, context, and urgency before a lead reaches the right person.
          </p>
        </motion.div>

        {/* Scoring Matrix Visual */}
        <ScoringMatrix />
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="flex flex-col justify-center rounded-[2rem] border border-border bg-bg-surface p-8 lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Judgment stays human</span>
            <h2 className="mt-5 font-display text-3xl font-semibold">A score is a routing aid, not a verdict.</h2>
            <p className="mt-4 leading-relaxed text-text-secondary">Your team defines the criteria, reviews edge cases, and can see why a lead was prioritized.</p>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-border">
            <Image src="/images/crm_workflow.jpg" alt="A team member reviewing a CRM workflow and lead pipeline" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6 bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="text-text-muted">A seamless pipeline from inquiry to qualified opportunity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <WorkflowStep num="01" title="Context Enrichment" desc="Add relevant business context from the sources you approve before the lead reaches your CRM." />
            <WorkflowStep num="02" title="Intent Scoring" desc="Apply your qualification criteria to the inquiry and retain the reasoning for review." />
            <WorkflowStep num="03" title="Clear Routing" desc="Send priority leads to the right owner and place the remainder into an agreed follow-up path." />
          </div>
        </div>
      </section>
    </div>
  );
}

function ScoringMatrix() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 5);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const criteria = [
    { label: "Company Size", val: "500-1000", score: "+25", activeAt: 1 },
    { label: "Industry", val: "SaaS", score: "+15", activeAt: 2 },
    { label: "Budget Mentioned", val: "Yes", score: "+40", activeAt: 3 },
    { label: "Urgency", val: "High", score: "+15", activeAt: 4 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-bg-surface border border-border rounded-xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bg-surface via-primary to-bg-surface opacity-50" />
      <div className="mb-6 text-left text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Illustrative scoring model</div>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side: Incoming Lead */}
        <div className="flex-1 space-y-6 w-full">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h3 className="text-text-primary font-medium tracking-wide">Incoming Lead</h3>
            <span className="text-xs bg-bg-alt px-2 py-1 rounded text-text-muted">ID: #8492</span>
          </div>
          
          <div className="space-y-4">
            {criteria.map((c, i) => (
              <div key={i} className="flex justify-between items-center h-10">
                <span className="text-text-secondary">{c.label}</span>
                <AnimatePresence mode="wait">
                  {step >= c.activeAt ? (
                    <motion.div
                      key="active"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-text-primary">{c.val}</span>
                      <span className="text-mint font-mono text-sm bg-mint/10 px-2 py-0.5 rounded">{c.score}</span>
                    </motion.div>
                  ) : (
                    <motion.div key="skeleton" className="w-24 h-4 bg-bg-alt rounded animate-pulse" />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Total Score */}
        <div className="w-full md:w-64 aspect-square rounded-full border-4 border-bg-alt flex flex-col items-center justify-center relative shadow-[0_0_40px_rgba(0,0,0,0.3)] bg-bg-base">
          <AnimatePresence mode="wait">
            {step === 4 && (
              <motion.div
                key="halo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 rounded-full border-4 border-primary"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                transition={{ duration: 1 }}
              />
            )}
          </AnimatePresence>
          <span className="text-text-muted text-sm uppercase tracking-widest mb-2 z-10">Total Score</span>
          <motion.span
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-light text-primary z-10"
          >
            {step === 0 ? "0" : step === 1 ? "25" : step === 2 ? "40" : step === 3 ? "80" : "95"}
          </motion.span>
          <AnimatePresence>
            {step === 4 && (
              <motion.div
                key="badge"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 bg-mint text-bg-base text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg z-20"
              >
                Hot Lead
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function WorkflowStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="p-6 border border-border rounded-lg bg-bg-surface hover:border-primary/50 transition-colors group">
      <div className="text-4xl font-light text-text-muted mb-4 group-hover:text-primary transition-colors">{num}</div>
      <h3 className="text-xl font-medium mb-3 text-text-primary">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{desc}</p>
    </div>
  );
}
