'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const beforeItems = [
  "Missed calls go to voicemail",
  "Leads wait hours for a response",
  "Manual data entry into CRM",
  "Scattered tools, no integration",
  "Lost leads from slow follow-up",
  "Appointment no-shows pile up"
];

const afterItems = [
  "Defined call coverage and overflow routing",
  "New inquiries enter a clear response queue",
  "Contacts auto-synced to your CRM",
  "All tools connected in one workflow",
  "Automated follow-up sequences",
  "Smart reminders reduce no-shows"
];

export default function BeforeAfter() {
  return (
    <section className="section-py bg-bg-alt border-y border-border">
      <div className="page-container">
        <SectionHeading 
          eyebrow="The Difference"
          title="What a connected workflow changes"
          description="A practical comparison of fragmented operations and a deliberately connected process—not a promise of identical results."
          align="center"
        />

        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Before Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bg-surface/50 border border-border rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/20 rounded-bl-full opacity-30 -mr-10 -mt-10 blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-10 relative z-10 pb-6 border-b border-border/50">
              <div className="w-12 h-12 bg-bg-alt border border-border rounded-full flex items-center justify-center flex-shrink-0">
                <XCircle className="w-6 h-6 text-red-400/80" />
              </div>
              <h3 className="text-2xl font-display font-medium text-text-primary tracking-tight">Without Automation</h3>
            </div>
            
            <ul className="space-y-6 relative z-10">
              {beforeItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-red-400/60 mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-bg-surface border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full opacity-40 -mr-10 -mt-10 blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-10 relative z-10 pb-6 border-b border-border/50">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-medium text-text-primary tracking-tight">With a Connected System</h3>
            </div>
            
            <ul className="space-y-6 relative z-10">
              {afterItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text-primary font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
