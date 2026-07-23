'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Wrench, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const stages = [
  {
    id: 1,
    title: 'Map',
    icon: Search,
    description: 'We analyze your calls, customer journey, and manual workflows to identify the biggest automation opportunities.'
  },
  {
    id: 2,
    title: 'Build',
    icon: Wrench,
    description: 'We design and integrate a custom AI system around your specific business processes and tools.'
  },
  {
    id: 3,
    title: 'Improve',
    icon: TrendingUp,
    description: 'We monitor conversations, refine AI performance, and expand automation as your business grows.'
  }
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="section-py bg-surface">
      <div className="page-container" ref={containerRef}>
        <SectionHeading 
          eyebrow="Our Process" 
          title="How we build your AI system" 
          align="center" 
        />
        
        <div className="mt-16 relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gray-200">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Animated dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              initial={{ left: "0%" }}
              whileInView={{ left: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
          
          {/* Connecting line mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-[2px] bg-gray-200">
             <motion.div 
              className="absolute top-0 left-0 w-full bg-accent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {stages.map((stage, index) => (
              <motion.div 
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-16 md:pl-0 md:text-center"
              >
                {/* Mobile icon/circle */}
                <div className="md:hidden absolute left-0 top-0 w-12 h-12 bg-white rounded-full border-2 border-gray-100 flex items-center justify-center z-10 shadow-sm">
                  <stage.icon className="w-5 h-5 text-accent" />
                </div>
                
                {/* Desktop icon/circle */}
                <div className="hidden md:flex mx-auto w-24 h-24 bg-white rounded-full border-4 border-gray-50 items-center justify-center relative z-10 shadow-sm mb-6">
                  <stage.icon className="w-10 h-10 text-accent" />
                </div>
                
                {/* Large Background Number */}
                <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 text-9xl font-bold text-accent/5 select-none -z-10">
                  0{stage.id}
                </div>
                
                <h3 className="heading-md mb-3">
                  <span className="md:hidden text-accent mr-2">0{stage.id}.</span>
                  {stage.title}
                </h3>
                <p className="text-secondary">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
