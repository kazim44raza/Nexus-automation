'use client';

import { motion } from 'framer-motion';
import { FormInput, MessageSquare, Database, Mail, Calendar, Slack, ArrowRight, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BusinessHeroVisual() {
  const [activeNode, setActiveNode] = useState(0);
  
  const nodes = [
    { icon: FormInput, label: 'Form Submit', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: Database, label: 'HubSpot CRM', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { icon: Mail, label: 'Email Sequence', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: Calendar, label: 'Booking', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
    { icon: Slack, label: 'Team Alert', color: 'text-red-500', bg: 'bg-red-500/10' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto h-[400px]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative h-full w-full flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {/* Connecting lines */}
          <path d="M 120 200 L 220 120 L 320 200 L 420 120 L 520 200" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 dark:text-gray-700 stroke-dasharray-[4,4]" />
          
          {/* Animated dot following path */}
          <motion.circle 
            r="4" 
            fill="#3b82f6" 
            animate={{
              cx: [120, 220, 320, 420, 520],
              cy: [200, 120, 200, 120, 200],
            }}
            transition={{
              duration: 7.5, // 1.5s per segment
              ease: "linear",
              repeat: Infinity
            }}
          />
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0" style={{ zIndex: 10 }}>
          {[
            { x: '10%', y: '50%' },
            { x: '35%', y: '30%' },
            { x: '60%', y: '50%' },
            { x: '85%', y: '30%' },
            { x: '110%', y: '50%', labelOffset: '-10px' } // Adjust last one
          ].map((pos, i) => {
            const NodeIcon = nodes[i].icon;
            const isActive = activeNode === i;
            const hasPassed = activeNode > i;
            
            return (
              <div 
                key={i} 
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: pos.x, top: pos.y }}
              >
                <div className="relative">
                  <motion.div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-lg backdrop-blur-sm transition-colors duration-500 ${
                      isActive 
                        ? `bg-white dark:bg-gray-800 ${nodes[i].color.replace('text', 'border')}` 
                        : hasPassed 
                          ? 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600'
                          : 'bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700'
                    }`}
                    animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  >
                    <NodeIcon className={`w-6 h-6 ${isActive ? nodes[i].color : 'text-gray-400'}`} />
                  </motion.div>
                  
                  {/* Data Label */}
                  {isActive && i < nodes.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -right-24 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 text-xs px-2 py-1 rounded shadow border border-gray-100 dark:border-gray-700 whitespace-nowrap"
                    >
                      <Activity className="w-3 h-3 inline mr-1 text-blue-500" />
                      Processing...
                    </motion.div>
                  )}
                  
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-gray-600 dark:text-gray-300">
                    {nodes[i].label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
