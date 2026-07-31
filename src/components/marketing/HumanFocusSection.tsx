'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export function HumanFocusSection() {
  return (
    <section className="section-py bg-bg-alt overflow-hidden border-t border-border">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight text-text-primary mb-6">
                Your team focuses on the customer in front of them.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-lg mb-8 font-light">
                While you deliver exceptional service in person, Azorvin handles the incoming calls, messages, and follow-ups happening in the background. Stop choosing between answering the phone and helping the client at the desk.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-text-primary">Never put a physical customer on hold</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-text-primary">Never miss an inbound opportunity</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-text-primary">Maintain a calm, focused environment</p>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Right Visual */}
          <div className="relative order-1 lg:order-2">
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-border">
                {/* Monochrome overlay for the premium dark aesthetic */}
                <div className="absolute inset-0 bg-bg-base/20 mix-blend-multiply z-10 pointer-events-none" />
                <Image
                  src="/images/receptionist_scene.jpg"
                  alt="Professional reception environment"
                  fill
                  className="object-cover grayscale-[30%] opacity-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Subtle UI Overlay 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-6 left-6 bg-bg-surface/90 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-[280px] z-20"
                >
                  <div className="w-10 h-10 bg-bg-alt rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                    <PhoneCall className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Call Processed</p>
                    <p className="text-xs text-text-muted">Automated lead qualification</p>
                  </div>
                </motion.div>

                {/* Subtle UI Overlay 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute top-6 right-6 bg-bg-surface/90 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-[280px] z-20"
                >
                  <div className="w-10 h-10 bg-bg-alt rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                    <CalendarCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Schedule Updated</p>
                    <p className="text-xs text-text-muted">Appointment confirmed</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
