'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AutomationHub3D() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-bg-base to-bg-base opacity-50" />
      
      {/* Abstract Animated Nodes */}
      <div className="relative w-full h-full max-w-lg mx-auto">
        {/* Core Node */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-accent/30 bg-bg-surface/50 backdrop-blur-md shadow-[0_0_60px_-15px_rgba(180,135,91,0.3)] flex items-center justify-center z-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 rounded-full border border-text-secondary/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-bg-surface to-bg-base border border-accent/40 shadow-inner" />
          </div>
        </motion.div>

        {/* Orbiting Elements */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 z-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbital Ring 1 */}
          <div className="absolute inset-0 rounded-full border border-dashed border-text-secondary/10" />
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_rgba(180,135,91,0.6)]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div 
          className="absolute top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {/* Orbital Ring 2 */}
          <div className="absolute inset-0 rounded-full border border-text-secondary/5" />
          <motion.div 
            className="absolute bottom-0 left-1/4 w-3 h-3 rounded-full bg-text-primary/50"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
        
        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            d="M50 50 L20 20 M50 50 L80 30 M50 50 L30 80 M50 50 L85 75" 
            stroke="currentColor" 
            className="text-accent"
            strokeWidth="0.2" 
            strokeDasharray="2 2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, transparent 40%, var(--bg-base) 100%)'
      }} />
    </div>
  );
}
