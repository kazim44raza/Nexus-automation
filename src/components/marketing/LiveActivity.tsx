'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Target, Calendar, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { DemoDisclaimer } from '@/components/ui/DemoDisclaimer';

const MOCK_EVENTS = [
  { id: 1, text: "New call answered — Dr. Smith Dental", color: "bg-cyan-500" },
  { id: 2, text: "Lead qualified — HomeEdge Realty", color: "bg-violet-500" },
  { id: 3, text: "Appointment confirmed — 2:30 PM today", color: "bg-emerald-500" },
  { id: 4, text: "Follow-up sent — Bright Smile Dental", color: "bg-amber-500" },
  { id: 5, text: "CRM updated — Foster & Associates", color: "bg-blue-500" },
  { id: 6, text: "Missed call recovered — FitLife Studio", color: "bg-cyan-500" }
];

export default function LiveActivity() {
  const [events, setEvents] = useState(MOCK_EVENTS.slice(0, 3));
  const [eventIndex, setEventIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setEvents(prev => {
        const nextEvent = MOCK_EVENTS[eventIndex % MOCK_EVENTS.length];
        const newEvents = [...prev.slice(1), { ...nextEvent, id: Date.now() }];
        return newEvents;
      });
      setEventIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [eventIndex]);

  const metrics = [
    { label: "Calls Answered", value: 847, icon: Phone, trend: "+12%", color: "text-cyan-500", bg: "bg-cyan-50" },
    { label: "Leads Qualified", value: 312, icon: Target, trend: "+18%", color: "text-violet-500", bg: "bg-violet-50" },
    { label: "Appointments Booked", value: 156, icon: Calendar, trend: "+24%", color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Avg Response", value: "<1s", icon: Zap, trend: "Real-time", color: "text-amber-500", bg: "bg-amber-50", isString: true }
  ];

  return (
    <section className="w-full section-py bg-bg-dark text-text-on-dark border-y border-border-dark">
      <div className="page-container">
        <SectionHeading 
          eyebrow="Live Demo"
          title="Your business activity, managed by AI"
          description="See how our automation systems work in real-time to handle interactions and update your tools seamlessly."
          align="center"
          dark={true}
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="card-dark p-6 md:p-8 relative">
            {/* Subtle glow behind dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-border-dark gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-mint"></span>
                </span>
                <h3 className="font-semibold text-text-on-dark">Live Operations Dashboard</h3>
              </div>
              <DemoDisclaimer />
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-border-dark bg-[#0F1A2C] flex flex-col hover:border-border-dark transition-colors duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-opacity-10 ${metric.bg}`}>
                      <metric.icon className={`w-4 h-4 ${metric.color}`} />
                    </div>
                    <span className="text-xs font-medium text-mint bg-mint/10 px-2 py-1 rounded-full border border-mint/20">
                      {metric.trend}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-text-on-dark mb-1">
                    {metric.isString ? metric.value : <AnimatedCounter value={metric.value as number} duration={2000} />}
                  </div>
                  <div className="text-sm text-text-muted">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="relative z-10 bg-[#0F1A2C] rounded-xl p-4 border border-border-dark overflow-hidden min-h-[160px]">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Activity Feed</div>
              <div className="space-y-3 relative h-full">
                <AnimatePresence initial={false}>
                  {events.map((event, idx) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-3 bg-bg-dark-alt p-3 rounded-lg shadow-sm border border-border-dark absolute w-full"
                      style={{ top: `${idx * 52}px` }}
                    >
                      <div className={`w-2 h-2 rounded-full ${event.color} shadow-[0_0_8px_currentColor]`} />
                      <span className="text-sm font-medium text-text-on-dark">{event.text}</span>
                      <span className="ml-auto text-xs text-text-muted">Just now</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
