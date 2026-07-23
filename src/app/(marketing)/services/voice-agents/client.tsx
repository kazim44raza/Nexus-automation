"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mic, 
  Activity, 
  UserPlus, 
  Calendar, 
  MessageSquare,
  Bot,
  User,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { useState, useEffect } from "react";

export function VoiceAgentsClient() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { label: "Incoming Call", icon: Phone, detail: "Connecting..." },
    { label: "Qualification", icon: Activity, detail: "Intent: Pricing Inquiry" },
    { label: "Booking", icon: Calendar, detail: "Available slot found" },
    { label: "CRM Update", icon: UserPlus, detail: "Lead captured" },
    { label: "Human Escalate", icon: AlertCircle, detail: "Transferring to agent" },
  ];

  return (
    <section className="relative min-h-[90vh] bg-[#07111F] text-white flex items-center justify-center overflow-hidden font-sans">
      {/* Background circular waves */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-blue-500/30"
            style={{ width: `${i * 300}px`, height: `${i * 300}px` }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 font-inter">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white font-manrope mb-6">
              Voice Agents that <br />
              <span className="text-blue-400">Answer Incoming Calls</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl">
              Practical voice solutions that capture caller information, route urgent requests, and book appointments with zero latency.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-2xl transition-colors duration-500 ${activeStep === index ? 'bg-blue-900/40 border border-blue-500/30' : 'opacity-50'}`}
              >
                <div className={`p-3 rounded-full ${activeStep === index ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  <step.icon size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{step.label}</h3>
                  <p className="text-sm text-slate-400">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spatial Phone Interface */}
        <motion.div 
          className="relative perspective-[1000px]"
          initial={{ opacity: 0, rotateY: -10 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-md mx-auto bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-[3rem] p-8 shadow-2xl overflow-hidden shadow-blue-900/20">
            {/* Phone Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                  <User size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg">Alex Johnson</p>
                  <p className="text-sm text-emerald-400 flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>02:14</span>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Mic className="text-slate-500" size={20} />
                <Activity className="text-blue-400" size={20} />
              </div>
            </div>

            {/* Circular Audio Visualizer */}
            <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center z-10 border border-slate-700 shadow-inner">
                <Bot size={40} className="text-blue-400" />
              </div>
            </div>

            {/* Live Transcript & Intent */}
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1 flex justify-between">
                  <span>Detected Intent</span>
                  <span className="text-blue-400">98% Confidence</span>
                </p>
                <p className="font-medium">Schedule Demo</p>
              </div>
              
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Live Transcript</p>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-300">"Yes, I'm looking for a solution to automate our customer service."</p>
                  <p className="text-blue-400">"I'd be happy to show you how Nexus can help. Would you like to schedule a quick demo?"</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <div className="flex-1 bg-emerald-900/30 border border-emerald-500/30 p-3 rounded-xl flex items-center justify-center space-x-2 text-emerald-400 text-sm font-medium">
                  <CheckCircle2 size={16} />
                  <span>Positive Sentiment</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
