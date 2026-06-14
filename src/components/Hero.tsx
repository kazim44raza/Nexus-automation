'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, TrendingUp, Zap, Phone } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Floating Particles                                                 */
/* ------------------------------------------------------------------ */

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  top: `${5 + Math.random() * 90}%`,
  size: 2 + Math.random() * 3,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 4,
  opacity: 0.15 + Math.random() * 0.35,
}));

/* ------------------------------------------------------------------ */
/*  Chat Messages for Dashboard Mockup                                 */
/* ------------------------------------------------------------------ */

const chatMessages = [
  {
    role: 'user' as const,
    text: 'Hi, I need help scheduling a consultation.',
  },
  {
    role: 'ai' as const,
    text: "Of course! I'd be happy to help. What day works best for you this week?",
  },
  {
    role: 'user' as const,
    text: 'Thursday afternoon would be great.',
  },
  {
    role: 'ai' as const,
    text: "Perfect ✅ I've booked you for Thursday at 2:00 PM. You'll receive a confirmation email shortly!",
  },
];

/* ------------------------------------------------------------------ */
/*  Scroll helper                                                      */
/* ------------------------------------------------------------------ */

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.getElementById(href.replace('#', ''));
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]"
      aria-label="Hero section"
    >
      {/* ---- Grid Pattern Background ---- */}
      <div className="grid-pattern absolute inset-0 pointer-events-none" />

      {/* ---- Animated Gradient Orbs ---- */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,240,255,0.12) 0%, rgba(0,240,255,0) 70%)',
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[20%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.10) 0%, rgba(59,130,246,0) 70%)',
        }}
        animate={{ x: [0, -35, 15, 0], y: [0, 25, -35, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[30%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.10) 0%, rgba(139,92,246,0) 70%)',
        }}
        animate={{ x: [0, 30, -25, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[60%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,240,255,0.07) 0%, rgba(0,240,255,0) 70%)',
        }}
        animate={{ x: [0, 20, -15, 0], y: [0, -40, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ---- Floating Particles ---- */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#00F0FF] pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{ y: [0, -18, 0, 18, 0], x: [0, 10, -10, 5, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* ---- Main Content ---- */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-[#00F0FF] bg-[#00F0FF]/[0.06] border border-[#00F0FF]/20 shadow-[0_0_15px_rgba(0,240,255,0.08)] animate-pulse-subtle">
            🚀 AI-Powered Automation for Modern Businesses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white mb-6"
        >
          Stop Losing{' '}
          <span className="gradient-text-cyan">Leads</span>
          <br className="hidden sm:block" /> After Business Hours
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI chatbots, voice agents, and automation systems that respond
          instantly, qualify leads, and book appointments&nbsp;&mdash;&nbsp;24/7.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 sm:mb-20"
        >
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="btn-primary group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.45)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            onClick={(e) => scrollTo(e, '#services')}
            className="btn-secondary group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.07] hover:text-white shadow-lg transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            See Services
            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        {/* ---- Hero Visual / Dashboard Mockup ---- */}
        <motion.div
          variants={scaleIn}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Main Dashboard Card */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-[rgba(17,17,39,0.7)] backdrop-blur-xl shadow-[0_0_60px_rgba(0,240,255,0.06)] overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-slate-500 font-medium">
                Nexus AI Assistant — Live Chat
              </span>
            </div>

            {/* Chat Interface */}
            <div className="p-5 sm:p-6 space-y-4 min-h-[280px] sm:min-h-[320px]">
              {chatMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.25, duration: 0.5 }}
                  className={`flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] sm:max-w-[70%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-[#00F0FF]/20 to-[#3B82F6]/20 text-white border border-[#00F0FF]/20 rounded-br-md'
                        : 'bg-white/[0.05] text-slate-300 border border-white/[0.06] rounded-bl-md'
                    }`}
                  >
                    {msg.role === 'ai' && (
                      <span className="inline-flex items-center gap-1.5 text-[#00F0FF] text-xs font-semibold mb-1.5">
                        <Zap className="w-3 h-3" />
                        Nexus AI
                      </span>
                    )}
                    <p>{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Bar */}
            <div className="px-5 sm:px-6 pb-5">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <span className="text-sm text-slate-500 flex-1">
                  Type your message...
                </span>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* ---- Floating Stat Cards ---- */}

          {/* Appointments Booked — Right */}
          <motion.div
            className="absolute -right-3 sm:-right-6 top-[18%] z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[rgba(17,17,39,0.85)] backdrop-blur-lg border border-white/[0.08] shadow-[0_0_25px_rgba(0,240,255,0.08)]">
              <div className="w-9 h-9 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Appointments Booked
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-white">1,247</span>
                  <span className="text-xs font-semibold text-emerald-400">
                    +34%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Response Time — Left */}
          <motion.div
            className="absolute -left-3 sm:-left-6 top-[35%] z-20"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.2,
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[rgba(17,17,39,0.85)] backdrop-blur-lg border border-white/[0.08] shadow-[0_0_25px_rgba(59,130,246,0.08)]">
              <div className="w-9 h-9 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Response Time
                </p>
                <span className="text-lg font-bold text-white">&lt;1 sec</span>
              </div>
            </div>
          </motion.div>

          {/* Call Waveform — Bottom Right */}
          <motion.div
            className="absolute -right-2 sm:right-4 bottom-[12%] z-20"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[rgba(17,17,39,0.85)] backdrop-blur-lg border border-white/[0.08] shadow-[0_0_25px_rgba(139,92,246,0.08)]">
              <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#8B5CF6]" />
              </div>
              <div>
                <p className="text-[11px] text-slate-500 font-medium mb-1">
                  Voice Agent Active
                </p>
                <svg
                  width="100"
                  height="24"
                  viewBox="0 0 100 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#8B5CF6]"
                  aria-label="Audio waveform visualization"
                >
                  <motion.path
                    d="M0 12 Q5 4, 10 12 Q15 20, 20 12 Q25 4, 30 12 Q35 20, 40 12 Q45 4, 50 12 Q55 20, 60 12 Q65 4, 70 12 Q75 20, 80 12 Q85 4, 90 12 Q95 20, 100 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.8, ease: 'easeOut' }}
                  />
                  <motion.path
                    d="M0 12 Q5 7, 10 12 Q15 17, 20 12 Q25 7, 30 12 Q35 17, 40 12 Q45 7, 50 12 Q55 17, 60 12 Q65 7, 70 12 Q75 17, 80 12 Q85 7, 90 12 Q95 17, 100 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity={0.4}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, delay: 2.0, ease: 'easeOut' }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Ambient glow behind dashboard */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-[#00F0FF]/[0.04] via-transparent to-[#8B5CF6]/[0.04] blur-xl scale-105 pointer-events-none" />
        </motion.div>

        {/* ---- Scroll Indicator ---- */}
        <motion.div
          className="mt-14 sm:mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-slate-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
