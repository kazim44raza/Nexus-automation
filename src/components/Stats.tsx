'use client';

import { motion } from 'framer-motion';
import { Zap, Clock, Target, ShieldCheck } from 'lucide-react';

const capabilities = [
  {
    icon: Zap,
    displayValue: '<1s',
    subtitle: 'response time',
    label: 'Instant Response',
    description:
      'AI agents respond to every inquiry in under 1 second, 24 hours a day, 7 days a week.',
    gradient: 'from-[#00F0FF] to-[#3B82F6]',
    glowColor: 'rgba(0, 240, 255, 0.12)',
  },
  {
    icon: Clock,
    displayValue: '24/7',
    subtitle: 'availability',
    label: '24/7 Coverage',
    description:
      'Never miss a lead again. Your AI works every hour of every day — holidays, weekends, after hours.',
    gradient: 'from-[#3B82F6] to-[#8B5CF6]',
    glowColor: 'rgba(59, 130, 246, 0.12)',
  },
  {
    icon: Target,
    displayValue: 'AI',
    subtitle: 'powered qualification',
    label: 'Smart Qualification',
    description:
      'Automatically qualify leads based on your custom criteria before they reach your team.',
    gradient: 'from-[#8B5CF6] to-[#00F0FF]',
    glowColor: 'rgba(139, 92, 246, 0.12)',
  },
  {
    icon: ShieldCheck,
    displayValue: '99.9%',
    subtitle: 'uptime',
    label: 'Zero Downtime',
    description:
      'Enterprise-grade reliability ensures your automation system is always online and performing.',
    gradient: 'from-[#00F0FF] to-[#8B5CF6]',
    glowColor: 'rgba(0, 240, 255, 0.10)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Stats() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label="AI Capabilities"
    >
      {/* Mesh-style background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A1A] via-[#0D0D22] to-[#0A0A1A]" />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00F0FF]/[0.02] blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/[0.03] blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#3B82F6]/[0.02] blur-[80px]" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.label}
              variants={cardVariants}
              className="relative group rounded-2xl border border-white/[0.08] p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-white/[0.14]"
              style={{
                background: 'rgba(17, 17, 39, 0.7)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              {/* Background icon at low opacity */}
              <div className="absolute -top-2 -right-2 pointer-events-none opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500">
                <cap.icon className="w-28 h-28 text-white" strokeWidth={0.8} />
              </div>

              {/* Top glow line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cap.glowColor.replace(/[\d.]+\)$/, '0.6)')}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-gradient-to-br ${cap.gradient}`}
                style={{ boxShadow: `0 0 16px ${cap.glowColor}` }}
              >
                <cap.icon className="w-5 h-5 text-white" strokeWidth={2} />
              </div>

              {/* Display Value */}
              <div className="mb-1">
                <span
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #00F0FF, #3B82F6)',
                  }}
                >
                  {cap.displayValue}
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-[#94A3B8] text-xs uppercase tracking-wider mb-4">
                {cap.subtitle}
              </p>

              {/* Label */}
              <h3 className="text-white text-base font-semibold mb-2">{cap.label}</h3>

              {/* Description */}
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
