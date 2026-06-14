'use client';

import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Blocks, CreditCard, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    label: 'Custom AI Strategy',
  },
  {
    icon: Blocks,
    label: 'Tailored Integrations',
  },
  {
    icon: CreditCard,
    label: 'Flexible Monthly Plans',
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00F0FF]/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Custom Solutions</span>{' '}
            <span className="text-white">For Every Business</span>
          </h2>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Every business has unique automation needs. We design, build, and optimize
            custom AI solutions tailored to your specific workflows, industry, and growth
            goals.
          </p>
        </motion.div>

        {/* Main Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative rounded-2xl border border-white/[0.08] p-8 md:p-12 lg:p-16 text-center"
          style={{
            background: 'rgba(17, 17, 39, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow:
              '0 0 40px rgba(0, 240, 255, 0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#00F0FF]/40 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#00F0FF]/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#8B5CF6]/40 to-transparent" />
            <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-[#8B5CF6]/40 to-transparent" />
          </div>

          {/* Sparkles Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 200 }}
            className="flex items-center justify-center mb-8"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #00F0FF, #3B82F6, #8B5CF6)',
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
              }}
            >
              <Sparkles className="w-9 h-9 text-white" strokeWidth={1.8} />
            </div>
          </motion.div>

          {/* Description */}
          <p className="text-[#CBD5E1] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            We believe in delivering real value, not one-size-fits-all packages. Every
            solution we build is custom-tailored to your business requirements, ensuring
            maximum ROI and seamless integration with your existing tools.
          </p>

          {/* Feature Items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#00F0FF]/[0.1] border border-[#00F0FF]/20">
                  <feature.icon className="w-5 h-5 text-[#00F0FF]" strokeWidth={1.8} />
                </div>
                <span className="text-white text-sm font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-3 px-10 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #00F0FF, #3B82F6)',
                boxShadow: '0 0 25px rgba(0, 240, 255, 0.3), 0 4px 15px rgba(0, 0, 0, 0.3)',
              }}
              aria-label="Contact us for custom pricing"
            >
              Contact For Pricing
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-[#94A3B8] text-sm">
              Free consultation · No commitment · Custom quote within 24 hours
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
