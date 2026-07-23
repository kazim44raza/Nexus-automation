'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Phone, User, Calendar, CheckCircle2, Activity, Mic } from 'lucide-react';

export function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function VoiceHeroVisual() {
  const [waveform, setWaveform] = useState<number[]>(Array(20).fill(10));
  const [lines, setLines] = useState<string[]>([]);
  
  const fullTranscript = [
    "Hi, this is Sarah from Nexus Dental. How can I help you?",
    "I'd like to book a cleaning for next week.",
    "I can help with that. Are you a new or returning patient?",
    "I'm a returning patient.",
    "Great. I have availability next Thursday at 2:00 PM. Does that work?",
    "Yes, that's perfect.",
    "Excellent. Your appointment is booked. You'll receive an SMS confirmation shortly."
  ];

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setWaveform(prev => prev.map(() => Math.floor(Math.random() * 40) + 10));
    }, 150);

    let lineIndex = 0;
    const textInterval = setInterval(() => {
      if (lineIndex < fullTranscript.length) {
        setLines(prev => [...prev, fullTranscript[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 2000);

    return () => {
      clearInterval(waveInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative background blur */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
      
      <div className="relative card glass border border-white/10 p-6 shadow-2xl rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <User className="h-6 w-6 text-cyan-400" />
            </div>
            <div>
              <p className="font-semibold text-white">Sarah M.</p>
              <p className="text-sm text-gray-400">New Patient Inquiry</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-green-400">01:24</span>
          </div>
        </div>

        {/* Waveform */}
        <div className="h-24 flex items-center justify-center gap-1 mb-8">
          {waveform.map((height, i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-cyan-400 rounded-full"
              animate={{ height: `${height}px` }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          ))}
        </div>

        {/* Transcript */}
        <div className="space-y-3 mb-8 h-40 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 pointer-events-none" />
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-3 rounded-lg text-sm ${i % 2 === 0 ? 'bg-white/5 border border-white/10 mr-8 text-gray-300' : 'bg-cyan-500/10 border border-cyan-500/20 ml-8 text-cyan-50'}`}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Badges & Outcomes */}
        <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-1">
              <Activity className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-gray-400">Detected Intent</span>
            </div>
            <p className="text-sm font-medium text-white flex items-center justify-between">
              Appointment
              <span className="badge-accent bg-purple-500/20 text-purple-300 text-[10px]">98%</span>
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">Action Taken</span>
            </div>
            <p className="text-sm font-medium text-white flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Booked Thu 2PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WaveDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="currentColor" className="text-cyan-500" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,240C672,256,768,224,864,208C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
}
