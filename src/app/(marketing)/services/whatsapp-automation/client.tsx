"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageCircle, CheckCircle2, Users, Calendar, Database, ArrowRight, Share2, Phone } from "lucide-react";
import React, { useRef, useEffect } from "react";

export default function WhatsAppAutomationClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 overflow-hidden font-inter selection:bg-mint-200 selection:text-mint-900 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 border border-emerald-100"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Automation</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight font-manrope mb-6"
          >
            Always-on conversations that convert.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Turn inquiries into bookings, sync leads to your CRM, and provide instant support without lifting a finger. Built for the world's most popular messaging app.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xs text-slate-400 mt-6"
          >
            *Not affiliated with, sponsored, or endorsed by Meta Platforms, Inc. or WhatsApp LLC.
          </motion.p>
        </div>

        {/* Spatial Hero */}
        <div 
          ref={containerRef}
          className="relative h-[600px] md:h-[800px] rounded-[32px] bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden mb-32"
          style={{ perspective: 1200 }}
        >
          {/* Radial gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_60%)]" />

          {/* Central Phone */}
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative z-10 w-64 md:w-80 h-[500px] md:h-[600px] bg-white rounded-[40px] shadow-2xl border-[8px] border-slate-900 p-4 flex flex-col"
          >
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-3xl" />
            
            {/* Header */}
            <div className="flex items-center gap-3 pt-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Nexus AI</h3>
                <p className="text-xs text-emerald-600">Online</p>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-hidden py-4 flex flex-col gap-3 relative">
               <motion.div 
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 }}
                 className="self-start max-w-[80%] bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-slate-800"
               >
                 Hi! I'd like to book a consultation for next week.
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 1 }}
                 className="self-end max-w-[80%] bg-emerald-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm"
               >
                 Hello! I can help with that. Are you looking for a morning or afternoon slot?
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 1.5 }}
                 className="self-start max-w-[80%] bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-slate-800"
               >
                 Afternoon please.
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 2 }}
                 className="self-end max-w-[80%] bg-emerald-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 text-sm"
               >
                 Great. I've found an opening on Thursday at 2:00 PM. I'll reserve it for you!
               </motion.div>
            </div>
            
            {/* Input area */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <div className="flex-1 h-9 bg-slate-100 rounded-full flex items-center px-4">
                <span className="text-xs text-slate-400">Message...</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Connected Nodes */}
          <motion.div 
             style={{ x: useTransform(mouseX, [-0.5, 0.5], [10, -10]), y: useTransform(mouseY, [-0.5, 0.5], [10, -10]) }}
             className="absolute left-8 md:left-32 top-1/4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 z-20"
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <Database className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Sync to CRM</p>
              <p className="text-[10px] text-slate-500">Lead captured automatically</p>
            </div>
          </motion.div>

          <motion.div 
             style={{ x: useTransform(mouseX, [-0.5, 0.5], [-15, 15]), y: useTransform(mouseY, [-0.5, 0.5], [15, -15]) }}
             className="absolute right-8 md:right-32 top-1/3 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 z-20"
          >
            <div className="p-2 bg-purple-50 rounded-lg">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Book Appointment</p>
              <p className="text-[10px] text-slate-500">Thursday, 2:00 PM Confirmed</p>
            </div>
          </motion.div>

          <motion.div 
             style={{ x: useTransform(mouseX, [-0.5, 0.5], [5, -5]), y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]) }}
             className="absolute left-1/2 -translate-x-1/2 bottom-12 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 z-20"
          >
            <div className="p-2 bg-amber-50 rounded-lg">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Human Handoff</p>
              <p className="text-[10px] text-slate-500">Routing complex queries to staff</p>
            </div>
          </motion.div>

          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M 300 300 Q 400 300 500 400" stroke="url(#lineGrad)" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-pulse" />
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Split Composition Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left: Customer Message */}
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-50 rounded-3xl -z-10" />
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-2xl font-semibold mb-6">Frictionless Customer Experience</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Your customers interact naturally on an app they already use daily. Our system handles the rest—updating records and managing schedules behind the scenes.
              </p>
              <div className="flex flex-col gap-4">
                <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-5 py-3 text-sm text-slate-800 w-fit">
                  Hi, I need to reschedule my Friday appointment.
                </div>
                <div className="bg-emerald-500 text-white rounded-2xl rounded-tr-sm px-5 py-3 text-sm w-fit self-end shadow-sm">
                  No problem! Would you prefer next Monday or Tuesday?
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: CRM Updating */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 relative group">
              <img 
                src="/images/crm_workflow.jpg" 
                alt="Professional working with CRM" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent flex items-end p-8">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg w-full flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">CRM Automatically Updated</p>
                    <p className="text-xs text-slate-600">Appointment moved to Monday</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Share2,
              title: "Omnichannel Routing",
              desc: "Intelligently route WhatsApp conversations to the right team member when human intervention is needed."
            },
            {
              icon: CheckCircle2,
              title: "Automated Confirmations",
              desc: "Send instant booking confirmations, reminders, and follow-ups directly through WhatsApp."
            },
            {
              icon: Phone,
              title: "Lead Qualification",
              desc: "Engage prospects 24/7, qualify leads using natural language, and seamlessly update your sales pipeline."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold font-manrope text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
