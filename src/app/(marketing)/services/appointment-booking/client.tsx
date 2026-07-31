'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle2, Mail, CalendarCheck, Sparkles, RefreshCcw, Bell } from 'lucide-react';

const SLOTS = [
  { time: '09:00 AM', status: 'available' },
  { time: '10:30 AM', status: 'booked' },
  { time: '01:00 PM', status: 'available' },
  { time: '03:30 PM', status: 'available' },
];

export default function AppointmentBookingClient() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev === 0) {
          setSelectedSlot(2);
          return 1;
        } else if (prev === 1) {
          return 2;
        } else {
          setSelectedSlot(null);
          return 0;
        }
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-base selection:bg-mint/20 selection:text-mint">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-bg-surface via-bg-base to-bg-base opacity-70" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-border mb-8">
              <CalendarCheck className="w-4 h-4 text-mint" />
              <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">Smart Scheduling</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary tracking-tight mb-8">
              The lifecycle of a booking, <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-primary">fully automated.</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
              From the first inquiry to post-meeting follow-ups. Handle rescheduling, waitlists, and no-shows gracefully without lifting a finger.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-mint text-bg-base rounded-full font-medium hover:bg-mint/90 transition-colors w-full sm:w-auto">
                Explore Features
              </button>
              <button className="px-8 py-4 bg-bg-surface text-text-primary rounded-full font-medium border border-border hover:bg-bg-alt transition-colors w-full sm:w-auto">
                Book a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Calendar UI Visualization */}
      <section className="py-24 bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-display font-bold text-text-primary mb-4">Real-time Availability Sync</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">Watch as availability is instantly updated and automated confirmations are dispatched without human intervention.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-bg-base border border-border rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Calendar Side */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-border">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-bg-surface flex items-center justify-center border border-border">
                      <Calendar className="w-5 h-5 text-mint" />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-medium">Select a time</h3>
                      <p className="text-sm text-text-muted">Duration: 30 min</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {SLOTS.map((slot, idx) => (
                    <motion.div
                      key={idx}
                      className={`relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300
                        ${slot.status === 'booked' 
                          ? 'bg-bg-surface border-border opacity-50' 
                          : selectedSlot === idx 
                            ? 'bg-mint/10 border-mint shadow-[0_0_15px_rgba(var(--color-mint),0.1)]' 
                            : 'bg-bg-surface border-border'
                        }`}
                      animate={selectedSlot === idx ? { scale: 1.02 } : { scale: 1 }}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className={`w-4 h-4 ${slot.status === 'booked' ? 'text-text-muted' : selectedSlot === idx ? 'text-mint' : 'text-text-primary'}`} />
                        <span className={`font-medium ${slot.status === 'booked' ? 'text-text-muted line-through' : selectedSlot === idx ? 'text-mint' : 'text-text-primary'}`}>
                          {slot.time}
                        </span>
                      </div>
                      {slot.status === 'booked' && (
                        <span className="text-xs font-medium text-text-muted uppercase tracking-wider">Booked</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Automation Side */}
              <div className="p-8 bg-bg-surface/50 flex flex-col justify-center">
                <div className="space-y-8 relative">
                  {/* Step 1 */}
                  <div className={`transition-opacity duration-500 ${activeStep >= 0 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${activeStep === 0 ? 'bg-mint/10 border-mint text-mint' : 'bg-bg-base border-border text-text-muted'}`}>
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-text-primary font-medium mb-1">Lead selects time</h4>
                        <p className="text-sm text-text-secondary">System locks the calendar slot to prevent double-booking.</p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div className="absolute left-4 top-8 bottom-8 w-px bg-border -z-10" />

                  {/* Step 2 */}
                  <div className={`transition-opacity duration-500 ${activeStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${activeStep === 1 ? 'bg-primary/10 border-primary text-primary' : activeStep > 1 ? 'bg-bg-base border-mint text-mint' : 'bg-bg-base border-border text-text-muted'}`}>
                        {activeStep > 1 ? <CheckCircle2 className="w-4 h-4" /> : <RefreshCcw className="w-4 h-4 animate-spin-slow" />}
                      </div>
                      <div>
                        <h4 className="text-text-primary font-medium mb-1">Calendar Synced</h4>
                        <p className="text-sm text-text-secondary">CRM is updated and internal team calendars are blocked.</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className={`transition-opacity duration-500 ${activeStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${activeStep === 2 ? 'bg-accent/10 border-accent text-accent' : 'bg-bg-base border-border text-text-muted'}`}>
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-text-primary font-medium mb-1">Confirmations Sent</h4>
                        <AnimatePresence>
                          {activeStep === 2 && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-3 p-3 bg-bg-base rounded-lg border border-border text-sm"
                            >
                              <div className="flex items-center gap-2 mb-2 text-text-primary">
                                <Sparkles className="w-3 h-3 text-accent" />
                                <span>Automated Email Sequence</span>
                              </div>
                              <p className="text-text-secondary line-clamp-2">"Hi there, your meeting for 01:00 PM is confirmed. Here is the agenda..."</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
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
                icon: CalendarCheck,
                title: "Complex Availability",
                desc: "Handle multi-participant routing, round-robin, and buffer times effortlessly."
              },
              {
                icon: Mail,
                title: "Automated Sequences",
                desc: "Dispatch customized confirmation and reminder emails tailored to the meeting type."
              },
              {
                icon: RefreshCcw,
                title: "Frictionless Rescheduling",
                desc: "Allow clients to cancel or reschedule via a single link, automatically freeing up your calendar."
              },
              {
                icon: Bell,
                title: "No-show Handling",
                desc: "Automatically send follow-ups to no-shows and offer priority rescheduling."
              },
              {
                icon: User,
                title: "Pre-meeting Intake",
                desc: "Send dynamic forms before the meeting to gather necessary context and data."
              },
              {
                icon: CheckCircle2,
                title: "Waitlist Management",
                desc: "Automatically fill unexpected gaps in your calendar from a prioritized waitlist."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-bg-surface border border-border hover:border-mint/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-bg-base rounded-xl border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
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
