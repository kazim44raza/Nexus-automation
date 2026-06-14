'use client';

import { motion } from 'framer-motion';
import { Clock, Brain, Workflow, Rocket, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TrustItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const trustItems: TrustItem[] = [
  {
    number: '01',
    title: '24/7 Availability',
    description:
      'Your AI agents never sleep, never take breaks, and never miss an inquiry. Every lead gets an instant response, day or night, weekdays and weekends.',
    icon: Clock,
  },
  {
    number: '02',
    title: 'Human-Like AI Conversations',
    description:
      'Our AI agents are trained to communicate naturally, understand context, and engage prospects with the same warmth and professionalism as your best team members.',
    icon: Brain,
  },
  {
    number: '03',
    title: 'Business Automation Expertise',
    description:
      "We don't just build chatbots — we architect complete automation ecosystems that connect your CRM, calendar, email, and communication tools seamlessly.",
    icon: Workflow,
  },
  {
    number: '04',
    title: 'Fast Deployment',
    description:
      'Most businesses are fully live within 7–14 days. We handle discovery, strategy, build, testing, and launch — so you can focus on running your business.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Ongoing Monthly Support',
    description:
      "Your subscription includes continuous monitoring, optimization, and dedicated support. We don't just launch and leave — we grow with you.",
    icon: Headphones,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
};

export default function TrustSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ background: '#0A0A1A' }}
    >
      {/* Mesh gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: '#00F0FF' }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: '#8B5CF6' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: '#3B82F6' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #00F0FF, #3B82F6, #8B5CF6)',
              }}
            >
              Why Choose Nexus Automation
            </span>
          </h2>
          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            We combine cutting-edge AI technology with hands-on business
            expertise to deliver automation solutions that actually work.
          </p>
        </motion.div>

        {/* Trust items grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            const isLastRow = index >= 3;

            return (
              <motion.div
                key={item.number}
                variants={cardVariants}
                className={`group relative ${
                  isLastRow ? 'md:col-span-1 lg:col-span-1' : ''
                } ${
                  index === 3
                    ? 'lg:col-start-1 lg:ml-auto lg:w-full lg:translate-x-[50%]'
                    : ''
                } ${
                  index === 4
                    ? 'lg:col-start-2 lg:mr-auto lg:w-full lg:translate-x-[50%]'
                    : ''
                }`}
              >
                <div
                  className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.12] sm:p-8"
                  style={{
                    background: 'rgba(17, 17, 39, 0.7)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 8px 40px rgba(0, 240, 255, 0.08), 0 0 60px rgba(0, 240, 255, 0.04)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      '0 4px 30px rgba(0, 0, 0, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Animated accent line at top */}
                  <div className="absolute left-6 right-6 top-0 h-[2px] sm:left-8 sm:right-8">
                    <div
                      className="h-full w-12 rounded-full transition-all duration-500 group-hover:w-full"
                      style={{
                        background:
                          'linear-gradient(90deg, #00F0FF, #3B82F6, #8B5CF6)',
                      }}
                    />
                  </div>

                  {/* Background decorative number */}
                  <div
                    className="pointer-events-none absolute right-4 top-2 select-none text-7xl font-black sm:right-6 sm:top-4 sm:text-8xl"
                    style={{
                      color: 'rgba(255, 255, 255, 0.02)',
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="relative mb-5 sm:mb-6">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl"
                      style={{
                        background:
                          'linear-gradient(135deg, #00F0FF, #3B82F6)',
                        boxShadow:
                          '0 4px 20px rgba(0, 240, 255, 0.25), 0 0 40px rgba(0, 240, 255, 0.1)',
                      }}
                    >
                      <IconComponent className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2.5 text-lg font-semibold text-white sm:mb-3 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
