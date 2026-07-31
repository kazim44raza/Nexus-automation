'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomerSupportClient() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-border bg-bg-surface text-text-secondary text-sm tracking-widest uppercase">
            Autonomous Support
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Resolve Issues. <br />
            <span className="text-mint italic">Without Human Intervention.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary mb-16">
            Our autonomous AI support agent plugs directly into your ticketing system, instantly resolving common inquiries, processing refunds, and troubleshooting issues.
          </p>
        </motion.div>

        {/* Ticketing UI Mockup */}
        <TicketingUI />
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-bg-surface border-y border-border mt-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Empower your team to handle complex problems.</h2>
            <p className="text-text-secondary text-lg mb-8">Let AI handle the repetitive tickets so your human agents can focus on high-touch interactions that build loyalty.</p>
            <ul className="space-y-4">
              {['24/7 Instant Resolutions', 'Multi-Language Support', 'Seamless CRM Integration', 'Zero Hallucinations Guarantee'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-text-primary">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-bg-alt p-6 rounded-xl border border-border flex flex-col justify-center items-center text-center h-48">
              <span className="text-4xl font-light text-mint mb-2">98%</span>
              <span className="text-sm text-text-secondary uppercase tracking-widest">Resolution Rate</span>
            </div>
            <div className="bg-bg-alt p-6 rounded-xl border border-border flex flex-col justify-center items-center text-center h-48 mt-8">
              <span className="text-4xl font-light text-primary mb-2">&lt; 1s</span>
              <span className="text-sm text-text-secondary uppercase tracking-widest">Response Time</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TicketingUI() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage(s => (s < 4 ? s + 1 : 0));
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-bg-surface border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden text-sm">
      {/* Header */}
      <div className="flex items-center px-6 py-4 bg-bg-alt border-b border-border gap-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-text-muted/30" />
          <div className="w-3 h-3 rounded-full bg-text-muted/30" />
          <div className="w-3 h-3 rounded-full bg-text-muted/30" />
        </div>
        <div className="text-text-muted font-mono ml-4">Ticket #9928 - Late Delivery Request</div>
      </div>

      <div className="flex flex-col md:flex-row h-[500px]">
        {/* Sidebar */}
        <div className="w-full md:w-64 border-r border-border bg-bg-base p-6 hidden md:block">
          <div className="mb-8">
            <div className="text-xs text-text-muted uppercase tracking-widest mb-3">Status</div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/10 text-mint rounded border border-mint/20">
              <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              {stage < 3 ? "In Progress" : "Resolved"}
            </div>
          </div>
          <div>
            <div className="text-xs text-text-muted uppercase tracking-widest mb-3">Assignee</div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary">AI</div>
              <span className="text-text-primary font-medium">Azorvin Bot</span>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 bg-bg-surface p-6 flex flex-col gap-6 relative overflow-hidden">
          {/* User Message */}
          <div className="flex gap-4 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-bg-alt border border-border flex-shrink-0" />
            <div className="bg-bg-base border border-border p-4 rounded-xl rounded-tl-none">
              <p className="text-text-primary">Hi, my order #ORD-5542 was supposed to arrive yesterday, but the tracking hasn't updated. Can you check what's going on or issue a refund?</p>
              <div className="text-xs text-text-muted mt-2">Received 2 mins ago</div>
            </div>
          </div>

          {/* AI Processing Step 1 */}
          <AnimatePresence>
            {stage >= 1 && (
              <motion.div
                key="processing1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-text-secondary ml-12"
              >
                <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                <span className="text-xs font-mono">Analyzing intent... Fetching tracking data via API...</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Processing Step 2 */}
          <AnimatePresence>
            {stage >= 2 && (
              <motion.div
                key="processing2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-mint ml-12"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-xs font-mono">Carrier delay detected. Policy allows 15% partial refund or cancel. Executing refund API call.</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* AI Response */}
          <AnimatePresence>
            {stage >= 3 && (
              <motion.div
                key="response"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse mt-auto"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary flex-shrink-0 text-xs font-bold">AI</div>
                <div className="bg-bg-alt border border-primary/30 p-4 rounded-xl rounded-tr-none">
                  <p className="text-text-primary">Hello! I've checked the status of #ORD-5542 with our shipping partner. It appears there is a localized weather delay, and it's now scheduled for delivery tomorrow.</p>
                  <p className="mt-2 text-text-primary">I sincerely apologize for the inconvenience. As per our guarantee, I have automatically issued a $15.00 credit to your original payment method for the delay.</p>
                  <p className="mt-2 text-text-primary">Is there anything else I can help you with?</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
