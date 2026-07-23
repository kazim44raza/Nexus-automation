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
  "Every call answered instantly by AI",
  "Leads engaged in under 1 second",
  "Contacts auto-synced to your CRM",
  "All tools connected in one workflow",
  "Automated follow-up sequences",
  "Smart reminders reduce no-shows"
];

export default function BeforeAfter() {
  return (
    <section className="page-container section-py section-light">
      <SectionHeading 
        eyebrow="The Difference"
        title="Before and after automation"
        description="See the tangible impact of implementing AI-driven automation systems across your core business operations."
        align="center"
      />

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Before Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-red-50/50 border border-red-100 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <XCircle className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800">Without Automation</h3>
          </div>
          
          <ul className="space-y-5">
            {beforeItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600 font-medium">{item}</span>
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
          className="bg-emerald-50/40 border border-emerald-100 rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full opacity-30 -mr-10 -mt-10 blur-2xl" />
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">With Nexus Automation</h3>
          </div>
          
          <ul className="space-y-5 relative z-10">
            {afterItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
