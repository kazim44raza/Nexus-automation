'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Building,
  Scale,
  Dumbbell,
  Car,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
  tags: string[];
  accent: string;
  accentRgb: string;
}

const industries: Industry[] = [
  {
    icon: Heart,
    name: 'Healthcare',
    description:
      'AI-powered patient intake, appointment scheduling, reminder systems, and after-hours support for clinics and practices.',
    tags: ['Patient Intake', 'Scheduling', 'Follow-ups'],
    accent: '#00F0FF',
    accentRgb: '0, 240, 255',
  },
  {
    icon: Building,
    name: 'Real Estate',
    description:
      'Automated lead capture, property inquiry handling, showing coordination, and prospect qualification for agents and brokerages.',
    tags: ['Lead Capture', 'Showings', 'Qualification'],
    accent: '#3B82F6',
    accentRgb: '59, 130, 246',
  },
  {
    icon: Scale,
    name: 'Legal Firms',
    description:
      'Client intake automation, consultation booking, case follow-ups, and document request handling for law firms.',
    tags: ['Client Intake', 'Booking', 'Follow-ups'],
    accent: '#8B5CF6',
    accentRgb: '139, 92, 246',
  },
  {
    icon: Dumbbell,
    name: 'Fitness Centers',
    description:
      'Membership inquiries, class booking, trial scheduling, and member retention campaigns for gyms and studios.',
    tags: ['Memberships', 'Booking', 'Retention'],
    accent: '#22C55E',
    accentRgb: '34, 197, 94',
  },
  {
    icon: Car,
    name: 'Auto Services',
    description:
      'Service scheduling, quote requests, appointment reminders, and customer follow-up automation for auto shops.',
    tags: ['Scheduling', 'Quotes', 'Reminders'],
    accent: '#F59E0B',
    accentRgb: '245, 158, 11',
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce',
    description:
      'Customer support automation, order tracking, abandoned cart recovery, and post-purchase engagement.',
    tags: ['Support', 'Cart Recovery', 'Engagement'],
    accent: '#EC4899',
    accentRgb: '236, 72, 153',
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className="group relative glass-card rounded-2xl border border-white/[0.06] bg-[rgba(17,17,39,0.7)] backdrop-blur-xl p-6 sm:p-7 overflow-hidden transition-shadow duration-500"
      style={{
        // @ts-expect-error -- CSS custom properties for dynamic accent colors
        '--card-accent': industry.accent,
        '--card-accent-rgb': industry.accentRgb,
      }}
    >
      {/* Hover gradient overlay at top */}
      <div
        className="absolute inset-x-0 top-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(${industry.accentRgb}, 0.06) 0%, transparent 100%)`,
        }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px rgba(${industry.accentRgb}, 0.25), 0 0 30px rgba(${industry.accentRgb}, 0.08)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, rgba(${industry.accentRgb}, 0.15), rgba(${industry.accentRgb}, 0.05))`,
            boxShadow: `0 0 0 1px rgba(${industry.accentRgb}, 0.15)`,
          }}
        >
          <Icon
            className="w-7 h-7 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_var(--card-accent)]"
            style={{ color: industry.accent }}
          />
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {industry.name}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {industry.description}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2">
          {industry.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full border transition-colors duration-300"
              style={{
                color: industry.accent,
                borderColor: `rgba(${industry.accentRgb}, 0.2)`,
                backgroundColor: `rgba(${industry.accentRgb}, 0.08)`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative py-24 sm:py-32 overflow-hidden"
      aria-label="Industries we serve"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/5 blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              Industries We Transform
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Tailored AI automation solutions engineered for your specific
            industry challenges.
          </p>
        </motion.div>

        {/* Industry cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6 text-base sm:text-lg">
            Don&apos;t see your industry? We build custom solutions for any
            business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] text-[#0A0A1A] font-semibold py-3 px-7 rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
