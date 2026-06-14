'use client';

import { motion } from 'framer-motion';
import { Search, Code, Rocket } from 'lucide-react';
import { ReactNode } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discover & Strategize',
    description:
      'We analyze your business workflows, identify automation opportunities, and design a custom AI strategy tailored to your goals and industry.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Build & Integrate',
    description:
      'Our team builds your AI chatbots, voice agents, and automation workflows, then integrates them seamlessly with your existing tools and CRM.',
    icon: <Code className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description:
      'We deploy your system, monitor performance, and continuously optimize your AI agents every month to maximize conversions and ROI.',
    icon: <Rocket className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.9 },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A1A] overflow-hidden"
      aria-label="How It Works"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From discovery to launch in days, not months. Your AI automation
            system, built, deployed, and optimized — every month.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="relative flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-0 lg:justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Connecting Line — Vertical on mobile, Horizontal on desktop */}
          {/* Desktop horizontal line */}
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-[2px]"
            aria-hidden="true"
          >
            <div className="w-full h-full bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] rounded-full opacity-40" />
          </div>
          {/* Mobile vertical line */}
          <div
            className="lg:hidden absolute top-[52px] bottom-[52px] left-1/2 w-[2px] -translate-x-1/2"
            aria-hidden="true"
          >
            <div className="w-full h-full bg-gradient-to-b from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] rounded-full opacity-40" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center lg:w-1/3 px-4"
              variants={stepVariants}
            >
              {/* Numbered Circle */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div
                  className="w-[104px] h-[104px] rounded-full p-[2px]"
                  style={{
                    background:
                      'linear-gradient(135deg, #00F0FF, #3B82F6, #8B5CF6)',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#111127] flex flex-col items-center justify-center gap-1 shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                    <span className="text-[#00F0FF] text-xs font-mono font-bold tracking-widest">
                      {step.number}
                    </span>
                    <span className="text-[#00F0FF]">{step.icon}</span>
                  </div>
                </div>
              </motion.div>

              {/* Card */}
              <motion.div
                className="group rounded-2xl border border-white/[0.06] bg-[rgba(17,17,39,0.7)] backdrop-blur-md p-6 w-full max-w-xs transition-all duration-300 hover:border-[#00F0FF]/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.12)]"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3 className="text-white text-lg font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          className="mt-16 lg:mt-20 max-w-3xl mx-auto"
          variants={highlightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="rounded-2xl border border-[#00F0FF]/20 bg-[rgba(17,17,39,0.7)] backdrop-blur-md p-6 sm:p-8 text-center shadow-[0_0_40px_rgba(0,240,255,0.08)]">
            <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
              <span className="text-2xl mr-2" role="img" aria-label="Refresh">
                🔄
              </span>
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] bg-clip-text text-transparent font-bold">
                Ongoing Monthly Support
              </span>{' '}
              — Your subscription includes continuous monitoring, optimization,
              and dedicated support. We don&apos;t just launch and leave.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
