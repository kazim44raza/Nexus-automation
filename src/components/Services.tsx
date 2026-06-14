'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare,
  Phone,
  Workflow,
  Target,
  CalendarCheck,
  PhoneMissed,
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description:
      'Deploy intelligent chatbots that engage visitors, answer questions, qualify leads, and convert prospects into booked appointments — all without human intervention.',
  },
  {
    icon: Phone,
    title: 'AI Voice Agents',
    description:
      'AI-powered voice agents that handle inbound and outbound calls, qualify leads, schedule appointments, and never put a customer on hold.',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description:
      'End-to-end workflow automation that connects your CRM, calendar, email, and messaging platforms into one seamless system.',
  },
  {
    icon: Target,
    title: 'Lead Qualification',
    description:
      'Automatically score and qualify every lead based on custom criteria, ensuring your sales team only talks to high-value prospects.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointment Booking',
    description:
      'Intelligent scheduling that syncs with your calendar, sends confirmations and reminders, and reduces no-shows by up to 60%.',
  },
  {
    icon: PhoneMissed,
    title: 'Missed Call Recovery',
    description:
      'Never lose a lead to a missed call. Our AI instantly follows up via text or callback, recovering up to 80% of missed opportunities.',
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
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="glass-card relative group overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col gap-5 transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] hover:border-nexus-cyan/30"
    >
      {/* Card glow overlay at top */}
      <div className="card-glow absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-nexus-cyan/[0.05] to-transparent pointer-events-none rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon container */}
      <div className="relative z-10">
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-nexus-cyan to-nexus-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_28px_rgba(0,240,255,0.35)] transition-shadow duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-xl font-semibold text-white">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-sm text-slate-400 leading-relaxed flex-1">
        {service.description}
      </p>

      {/* Learn more link */}
      <a
        href="#"
        className="relative z-10 inline-flex items-center text-sm font-medium text-nexus-cyan hover:text-nexus-cyan/80 transition-colors duration-200 group/link"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">
          →
        </span>
      </a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            What We Build For You
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Intelligent Automation Solutions
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
