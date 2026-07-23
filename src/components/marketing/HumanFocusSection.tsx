'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

export function HumanFocusSection() {
  return (
    <section className="section-py bg-surface overflow-hidden">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <AnimatedSection>
              <h2 className="heading-xl mb-6">
                Your team focuses on the customer in front of them.
              </h2>
              <p className="text-lg text-secondary leading-relaxed max-w-lg mb-8">
                While you deliver exceptional service in person, Nexus handles the incoming calls, messages, and follow-ups happening in the background. Stop choosing between answering the phone and helping the client at the desk.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-primary-text font-medium">Never put a physical customer on hold</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-primary-text font-medium">Never miss an inbound opportunity</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-primary-text font-medium">Maintain a calm, focused environment</p>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Right Visual */}
          <div className="relative order-1 lg:order-2">
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-gray-100">
                <Image
                  src="/images/receptionist_scene.jpg"
                  alt="Receptionist helping customer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Subtle UI Overlay 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[280px]"
                >
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Call Answered</p>
                    <p className="text-xs text-slate-300">New patient inquiry</p>
                  </div>
                </motion.div>

                {/* Subtle UI Overlay 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[280px]"
                >
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CalendarCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Appointment Proposed</p>
                    <p className="text-xs text-slate-300">Tomorrow at 2:00 PM</p>
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
