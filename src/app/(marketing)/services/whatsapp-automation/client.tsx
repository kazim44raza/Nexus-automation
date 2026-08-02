'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppAutomationClient() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-border bg-bg-surface text-text-secondary text-sm tracking-widest uppercase">
            Conversational Commerce
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Conversations that keep moving. <br />
            <span className="text-accent">Right in WhatsApp.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
            Give customers a useful path from first message to a clear next step. We design WhatsApp workflows for common questions, lead capture, order updates, and human handoff.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="inline-flex min-h-11 items-center px-6 py-3 bg-text-primary text-bg-base font-medium rounded-lg hover:bg-text-secondary transition-colors">
              Plan the workflow
            </a>
            <a href="#capabilities" className="inline-flex min-h-11 items-center px-6 py-3 bg-bg-surface border border-border text-text-primary font-medium rounded-lg hover:border-text-muted transition-colors">
              View capabilities
            </a>
          </div>
        </motion.div>

        {/* WhatsApp Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-sm flex justify-center"
        >
          <WhatsAppMockup />
        </motion.div>
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-bg-surface lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[360px] lg:min-h-[520px]">
            <Image
              src="/images/whatsapp-workspace.png"
              alt="A small-business owner managing customer messages from a phone and laptop"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-base/75 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 max-w-md text-sm text-white/80">
              Designed for the person who still needs to see, approve, and take over the conversation.
            </p>
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Human context</span>
            <h2 className="font-display text-3xl font-semibold leading-tight lg:text-4xl">Automation should shorten the queue, not hide the customer.</h2>
            <p className="mt-5 leading-relaxed text-text-secondary">We map the messages that can be handled safely, define when a teammate should step in, and preserve the full conversation so nobody starts from zero.</p>
          </div>
        </div>
      </section>
      
      {/* Workflow text */}
      <section id="capabilities" className="py-20 px-6 border-t border-border bg-bg-surface text-center mt-12 scroll-mt-28">
        <h2 className="text-3xl font-semibold mb-6">Drive Engagement Where Customers Actually Look</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">Use the channel your customers already choose for product questions, follow-ups, booking links, and service updates—with clear consent and an obvious path to a person.</p>
      </section>
    </div>
  );
}

function WhatsAppMockup() {
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageCount(c => (c < 5 ? c + 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const messages = [
    { sender: 'user', text: "Hey! Do you have the Midnight Chair in stock?", time: "10:14 AM" },
    { sender: 'bot', text: "Hello — yes, we have 3 Midnight Chairs left in stock at our Downtown warehouse.", time: "10:14 AM" },
    { sender: 'user', text: "Awesome. How long does delivery take to Brooklyn?", time: "10:15 AM" },
    { sender: 'bot', text: "Standard delivery to Brooklyn takes 2 days. I can show the available delivery options before checkout.", time: "10:15 AM" },
    { sender: 'bot', text: "Would you like me to send a checkout link to secure one now?", time: "10:15 AM", isAction: true },
  ];

  return (
    <div className="w-[320px] h-[640px] bg-[#0b141a] rounded-[3rem] border-[8px] border-bg-alt shadow-2xl overflow-hidden flex flex-col relative">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-bg-alt rounded-b-3xl w-40 mx-auto z-20" />
      
      {/* Header */}
      <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 pt-8 z-10 shadow-md">
        <div className="w-6 h-6 text-text-muted flex items-center justify-center">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </div>
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent shrink-0">
          AZ
        </div>
        <div>
          <div className="text-[#e9edef] font-medium text-sm">Azorvin Concierge</div>
          <div className="text-[#8696a0] text-xs">assistant · human handoff available</div>
        </div>
      </div>

      {/* Chat Background */}
      <div className="flex-1 bg-[#0b141a] p-4 flex flex-col gap-3 overflow-y-auto relative" style={{ backgroundImage: "radial-gradient(#1f2c34 1px, transparent 1px)", backgroundSize: "20px 20px", opacity: 0.9 }}>
        <AnimatePresence>
          {messages.slice(0, messageCount + 1).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`max-w-[85%] rounded-lg p-2 text-[13px] relative shadow-sm ${
                msg.sender === 'user'
                  ? "bg-[#202c33] text-[#e9edef] self-end rounded-tr-none"
                  : "bg-[#005c4b] text-[#e9edef] self-start rounded-tl-none"
              }`}
            >
              <span className="leading-relaxed">{msg.text}</span>
              {msg.isAction && (
                <div className="mt-2 pt-2 border-t border-[#374045] flex justify-center">
                  <span className="text-[#53bdeb] font-medium text-sm">Checkout Now</span>
                </div>
              )}
              <div className="text-[10px] text-[#8696a0] text-right mt-1 ml-4 flex justify-end items-center gap-1">
                {msg.time}
                {msg.sender === 'user' && (
                  <svg viewBox="0 0 16 15" width="16" height="15" className="fill-[#53bdeb]">
                    <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Typing indicator */}
        <AnimatePresence>
          {messageCount < messages.length - 1 && messageCount % 2 === 0 && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#202c33] rounded-lg rounded-tl-none p-3 w-16 self-start shadow-sm flex items-center gap-1 mt-2"
            >
              <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
              <div className="w-1.5 h-1.5 bg-[#8696a0] rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input area */}
      <div className="bg-[#202c33] px-2 py-3 flex items-center gap-2 z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="text-[#8696a0] p-2">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </div>
        <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-[#8696a0] text-sm flex items-center">
          Message
        </div>
        <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0">
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-1"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
        </div>
      </div>
    </div>
  );
}
