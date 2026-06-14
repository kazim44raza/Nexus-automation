'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  CalendarPlus,
  Settings,
  DollarSign,
  Clock,
  type LucideIcon,
} from 'lucide-react';

interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  glowColor: string;
}

const benefits: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: 'Never Miss a Lead',
    description:
      'Every inquiry gets an instant response, even at 3 AM. Your AI never sleeps, never takes a break, and never drops a lead.',
    gradient: 'linear-gradient(135deg, #00F0FF 0%, #3B82F6 100%)',
    glowColor: 'rgba(0, 240, 255, 0.4)',
  },
  {
    icon: Zap,
    title: 'Respond Instantly',
    description:
      'Sub-second response times across chat, voice, and text. Beat your competition by being the first to reply — every single time.',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
    glowColor: 'rgba(59, 130, 246, 0.4)',
  },
  {
    icon: CalendarPlus,
    title: 'Book More Appointments',
    description:
      'Automated scheduling that converts conversations into confirmed appointments, reducing friction and increasing show rates.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #00F0FF 100%)',
    glowColor: 'rgba(139, 92, 246, 0.4)',
  },
  {
    icon: Settings,
    title: 'Reduce Manual Work',
    description:
      'Eliminate repetitive tasks like data entry, follow-ups, and scheduling. Free your team to focus on closing deals and growing revenue.',
    gradient: 'linear-gradient(135deg, #00F0FF 0%, #8B5CF6 100%)',
    glowColor: 'rgba(0, 240, 255, 0.4)',
  },
  {
    icon: DollarSign,
    title: 'Increase Revenue',
    description:
      'More leads captured, more appointments booked, more deals closed. Our clients see an average 40% increase in qualified leads.',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #00F0FF 100%)',
    glowColor: 'rgba(59, 130, 246, 0.4)',
  },
  {
    icon: Clock,
    title: 'Work 24/7',
    description:
      'Your AI automation system works every hour of every day. Holidays, weekends, after hours — it never stops generating business.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
    glowColor: 'rgba(139, 92, 246, 0.4)',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function Results() {
  return (
    <section
      id="results"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      {/* Background ambient elements */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-[0.06]"
          style={{
            background:
              'radial-gradient(circle, #8B5CF6 0%, #3B82F6 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-0 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              'radial-gradient(circle, #00F0FF 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
            style={{
              background:
                'linear-gradient(135deg, #FFFFFF 0%, #00F0FF 50%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Real Results, Real Impact
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#94A3B8' }}>
            See what happens when AI works for your business around the clock.
          </p>
        </motion.div>

        {/* Grid with connecting lines */}
        <div className="relative">
          {/* Connecting gradient lines — desktop only */}
          <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            aria-hidden="true"
          >
            {/* Horizontal line row 1 */}
            <div
              className="absolute h-px"
              style={{
                top: '50%',
                left: '10%',
                right: '10%',
                transform: 'translateY(-80px)',
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.12) 20%, rgba(59,130,246,0.12) 50%, rgba(139,92,246,0.12) 80%, transparent 100%)',
              }}
            />
            {/* Horizontal line row 2 */}
            <div
              className="absolute h-px"
              style={{
                top: '50%',
                left: '10%',
                right: '10%',
                transform: 'translateY(80px)',
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.12) 20%, rgba(0,240,255,0.12) 50%, rgba(59,130,246,0.12) 80%, transparent 100%)',
              }}
            />
            {/* Vertical line left */}
            <div
              className="absolute w-px"
              style={{
                left: '33.33%',
                top: '10%',
                bottom: '10%',
                background:
                  'linear-gradient(180deg, transparent 0%, rgba(0,240,255,0.1) 30%, rgba(59,130,246,0.1) 70%, transparent 100%)',
              }}
            />
            {/* Vertical line right */}
            <div
              className="absolute w-px"
              style={{
                left: '66.66%',
                top: '10%',
                bottom: '10%',
                background:
                  'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.1) 30%, rgba(139,92,246,0.1) 70%, transparent 100%)',
              }}
            />
          </div>

          {/* Cards grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={cardVariants}
                  className="group relative rounded-2xl p-[1px]"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                  }}
                >
                  <div
                    className="relative flex flex-col h-full rounded-[15px] p-6 sm:p-7 transition-all duration-300"
                    style={{
                      backgroundColor: '#111127',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#141432';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#111127';
                    }}
                  >
                    {/* Animated pulse accent dot */}
                    <motion.div
                      className="absolute top-4 right-4 h-2 w-2 rounded-full"
                      style={{ backgroundColor: benefit.glowColor }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      aria-hidden="true"
                    />

                    {/* Icon */}
                    <div className="mb-5">
                      <div
                        className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{
                          background: benefit.gradient,
                          boxShadow: `0 0 20px ${benefit.glowColor}`,
                        }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Accent line under icon */}
                    <div
                      className="mb-4 h-[2px] w-10 rounded-full transition-all duration-500 group-hover:w-16"
                      style={{ background: benefit.gradient }}
                      aria-hidden="true"
                    />

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#94A3B8' }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
