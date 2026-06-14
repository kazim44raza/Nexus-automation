'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What exactly does Nexus Automation do?',
    answer:
      'Nexus Automation builds and manages AI-powered chatbots, voice agents, and business automation systems. We help businesses capture leads 24/7, respond to inquiries instantly, qualify prospects automatically, book appointments, and recover missed calls — all through intelligent AI automation.',
  },
  {
    question: 'Are your services billed monthly?',
    answer:
      'Yes, all our plans are monthly subscriptions with no long-term contracts. Your subscription includes the initial setup, ongoing optimization, monitoring, and dedicated support. You can upgrade, downgrade, or cancel at any time.',
  },
  {
    question: 'Can you customize the chatbot or voice agent for my business?',
    answer:
      "Absolutely. Every AI system we build is fully customized to your business — your brand voice, your services, your qualifying questions, your booking workflow. We don't use generic templates. Your AI agents are trained on your specific business data and processes.",
  },
  {
    question: 'How fast can you launch my automation system?',
    answer:
      'Most businesses are fully live within 7-14 days. Our onboarding process includes discovery, strategy, build, testing, and launch. We handle everything so you can focus on running your business.',
  },
  {
    question: 'Do you support my industry?',
    answer:
      'We work with businesses across many industries including healthcare, real estate, legal, automotive, fitness, e-commerce, and local services. If you have leads to capture and appointments to book, we can help. Contact us for a custom assessment.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer:
      'Yes, you can upgrade your plan at any time. As your business grows, we\'ll scale your automation to match. Many of our clients start with the Starter plan and move to Growth or Scale within a few months as they see results.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: '#0A0A1A' }}
    >
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #FFFFFF 0%, #00F0FF 50%, #3B82F6 100%)',
              }}
            >
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our AI automation services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border backdrop-blur-xl transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(17, 17, 39, 0.7)',
                  borderColor: isOpen
                    ? 'rgba(0, 240, 255, 0.25)'
                    : 'rgba(255, 255, 255, 0.08)',
                  borderLeftWidth: isOpen ? '3px' : '1px',
                  borderLeftColor: isOpen
                    ? '#00F0FF'
                    : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isOpen
                    ? '0 0 20px rgba(0, 240, 255, 0.08)'
                    : 'none',
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full text-left px-6 py-5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]/50 focus-visible:ring-inset rounded-xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-white font-medium text-sm sm:text-base pr-4 group-hover:text-[#00F0FF] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className="w-5 h-5 transition-colors duration-200"
                      style={{ color: isOpen ? '#00F0FF' : '#94A3B8' }}
                    />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div
                          className="h-px w-full mb-4"
                          style={{
                            background:
                              'linear-gradient(to right, rgba(0, 240, 255, 0.2), rgba(255,255,255,0.06), transparent)',
                          }}
                        />
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
