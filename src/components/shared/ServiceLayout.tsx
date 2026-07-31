import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  workflow: { step: string; desc: string }[];
}

export function ServiceLayout({ title, subtitle, description, features, workflow }: ServiceLayoutProps) {
  return (
    <div className="bg-bg-base min-h-screen text-text-primary font-body">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <AnimatedSection className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-bg-surface border border-border text-text-secondary text-xs uppercase tracking-widest font-semibold mb-8">
                {subtitle}
              </div>
              <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.05] mb-8 text-text-primary tracking-tight">
                {title}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-light mb-10">
                {description}
              </p>
              <div className="flex gap-4">
                <button className="bg-text-primary text-bg-base px-8 py-4 rounded-sm font-medium hover:bg-text-secondary transition-colors flex items-center gap-2">
                  Explore Architecture <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-5 relative">
              <div className="bg-bg-surface p-8 rounded-xl border border-border shadow-xl">
                <h3 className="font-display text-2xl text-text-primary mb-6">Core Capabilities</h3>
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-text-primary">System Architecture</h2>
            <p className="text-lg text-text-secondary max-w-2xl font-light">
              A breakdown of the automated resolution pipeline, step by step.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="bg-bg-surface border border-border p-8 rounded-xl">
                <div className="text-accent font-display text-3xl mb-4">0{i + 1}</div>
                <h4 className="text-xl font-bold mb-3 text-text-primary">{step.step}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
