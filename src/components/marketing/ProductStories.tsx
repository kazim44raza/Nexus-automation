'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export default function ProductStories() {
  return (
    <section className="flex flex-col w-full bg-bg-base border-t border-border">
      
      {/* Story 1: Voice Agents */}
      <div className="section-py overflow-hidden">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-bg-alt border border-border">
                {/* Abstract visualization replacing the fake UI */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bg-surface via-bg-base to-bg-base mix-blend-screen opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-48 h-48 rounded-full border border-primary/20 flex items-center justify-center relative">
                     <div className="w-32 h-32 rounded-full border border-primary/40 flex items-center justify-center">
                       <div className="w-16 h-16 rounded-full bg-primary/10 shadow-[0_0_30px_rgba(180,135,91,0.2)] animate-pulse" />
                     </div>
                     <div className="absolute inset-0 rounded-full border border-primary/10 rotate-45 scale-[1.1]" />
                     <div className="absolute inset-0 rounded-full border border-primary/10 -rotate-45 scale-[1.2]" />
                   </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-text-muted mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Voice Infrastructure
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary tracking-tight mb-6 leading-tight">
                Turn every inbound call into a handled conversation.
              </h2>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed font-light">
                Our voice agents answer instantly, qualify leads through natural conversation, and book appointments directly into your calendar. Zero hold times, absolute precision.
              </p>
              <Link href="/services/voice-agents" className="btn-primary inline-flex items-center gap-2">
                Explore Voice Architecture <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Story 2: Chatbots */}
      <div className="section-py bg-bg-alt overflow-hidden border-y border-border">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <AnimatedSection className="order-1">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-text-muted mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Text & Chat Systems
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary tracking-tight mb-6 leading-tight">
                Capture intent while interest is highest.
              </h2>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed font-light">
                Deploy intelligent systems that engage visitors, answer complex business-specific questions, and capture lead information autonomously.
              </p>
              <Link href="/services/chatbots" className="btn-primary inline-flex items-center gap-2">
                Explore Chat Systems <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-2">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-bg-base border border-border flex flex-col justify-end p-8">
                {/* Abstract Text representation */}
                <div className="w-full space-y-4">
                  <div className="w-3/4 h-8 bg-bg-surface rounded-md border border-border ml-auto" />
                  <div className="w-1/2 h-8 bg-bg-alt rounded-md border border-border" />
                  <div className="w-2/3 h-8 bg-bg-surface rounded-md border border-border ml-auto" />
                  <div className="w-3/4 h-8 bg-bg-alt rounded-md border border-border" />
                  <div className="w-1/3 h-12 bg-primary/10 rounded-md border border-primary/20 mt-4" />
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>

      {/* Story 3: Automation */}
      <div className="section-py overflow-hidden">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection className="order-2 md:order-1">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-bg-alt border border-border flex items-center justify-center p-8">
                {/* Abstract connection representation */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                  {[...Array(4)].map((_, i) => (
                     <div key={i} className="aspect-square rounded-xl bg-bg-surface border border-border shadow-inner relative">
                       {i !== 3 && <div className="absolute top-1/2 -right-10 w-10 h-[1px] bg-border" />}
                       {i === 0 && <div className="absolute -bottom-10 left-1/2 w-[1px] h-10 bg-border" />}
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-text-muted" />
                       </div>
                     </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-text-muted mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Business Workflows
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-text-primary tracking-tight mb-6 leading-tight">
                Connect your tools. Eliminate manual entry.
              </h2>
              <p className="text-lg text-text-secondary mb-10 leading-relaxed font-light">
                Build intelligent workflows that connect your CRM, calendar, email, and internal tools into one cohesive, automated system.
              </p>
              <Link href="/services/business-automation" className="btn-primary inline-flex items-center gap-2">
                Explore Automation <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>

    </section>
  );
}
