'use client';

import { motion } from 'framer-motion';
import { Quote, ArrowRight, Star } from 'lucide-react';

const caseStudies = [
  {
    category: 'Healthcare Automation',
    gradient: 'from-[#00F0FF] to-[#3B82F6]',
    glowColor: 'rgba(0, 240, 255, 0.08)',
    iconOpacity: 0.06,
  },
  {
    category: 'Real Estate Lead Gen',
    gradient: 'from-[#3B82F6] to-[#8B5CF6]',
    glowColor: 'rgba(59, 130, 246, 0.08)',
    iconOpacity: 0.05,
  },
  {
    category: 'Legal Client Intake',
    gradient: 'from-[#8B5CF6] to-[#00F0FF]',
    glowColor: 'rgba(139, 92, 246, 0.08)',
    iconOpacity: 0.06,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-white">Early Client </span>
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are currently partnering with businesses to deliver measurable automation
            results and will showcase real case studies here soon.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.category}
              variants={cardVariants}
              className="relative group rounded-2xl border border-white/[0.08] p-8 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:border-white/[0.14]"
              style={{
                background: 'rgba(17, 17, 39, 0.7)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              {/* Background decorative icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Quote
                  className="w-40 h-40 text-white"
                  strokeWidth={0.5}
                  style={{ opacity: study.iconOpacity }}
                />
              </div>

              {/* Subtle top glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${study.glowColor.replace('0.08', '0.5')}, transparent)`,
                }}
              />

              {/* Star pattern placeholder */}
              <div className="relative mb-6 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 bg-gradient-to-r ${study.gradient}`}
                    style={{ color: 'rgba(255,255,255,0.12)' }}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Main text */}
              <h3 className="relative text-white text-lg font-semibold mb-3">
                Case Study Coming Soon
              </h3>

              {/* Category label */}
              <span
                className={`relative inline-block text-sm font-medium mb-4 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
              >
                {study.category}
              </span>

              {/* Sub text */}
              <p className="relative text-[#94A3B8] text-sm mb-6">
                Results being documented
              </p>

              {/* Coming Soon Badge */}
              <div className="relative mt-auto">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium text-[#00F0FF] border border-[#00F0FF]/30 bg-[#00F0FF]/[0.06]">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative rounded-2xl border border-white/[0.08] p-8 md:p-10 text-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(0, 240, 255, 0.04), rgba(59, 130, 246, 0.04), rgba(139, 92, 246, 0.04))',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.04)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#00F0FF]/30 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#00F0FF]/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#8B5CF6]/30 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-[#8B5CF6]/30 to-transparent" />
          </div>

          <p className="text-[#CBD5E1] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Want to be one of our featured success stories? Partner with us today and let
            us transform your business.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #00F0FF, #3B82F6)',
              boxShadow:
                '0 0 20px rgba(0, 240, 255, 0.25), 0 4px 12px rgba(0, 0, 0, 0.3)',
            }}
            aria-label="Become a case study - contact us"
          >
            Become a Case Study
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
