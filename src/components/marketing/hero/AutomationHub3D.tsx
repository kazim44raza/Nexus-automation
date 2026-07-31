'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AutomationHub3D() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden perspective-[2000px]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />
      
      {/* 3D Container */}
      <motion.div 
        className="relative w-64 h-64 sm:w-80 sm:h-80 [transform-style:preserve-3d]"
        animate={{ 
          rotateX: [20, 25, 20],
          rotateY: [0, 360]
        }}
        transition={{ 
          rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      >
        {/* Core physical sphere (simulated via multiple crossing rings) */}
        
        {/* Ring 1 - Outer Gold */}
        <div className="absolute inset-0 border-[4px] border-primary/40 rounded-full [transform-style:preserve-3d] shadow-[0_0_30px_rgba(180,135,91,0.2)]" style={{ transform: 'rotateX(90deg)' }} />
        
        {/* Ring 2 - Outer Dark */}
        <div className="absolute inset-0 border-[2px] border-border rounded-full [transform-style:preserve-3d]" style={{ transform: 'rotateY(90deg)' }} />

        {/* Inner floating core (glass effect) */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full border border-primary/30 bg-bg-surface/40 backdrop-blur-md shadow-inner flex items-center justify-center [transform-style:preserve-3d]"
          style={{ transform: 'translateZ(0px)' }}
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Innermost element */}
          <div className="w-1/3 h-1/3 rounded-full bg-primary/20 shadow-[0_0_20px_var(--color-primary)] animate-pulse" />
        </motion.div>

        {/* Orbiting Physical Plates */}
        <motion.div 
          className="absolute -inset-12 border border-dashed border-text-secondary/10 rounded-full"
          style={{ transform: 'rotateX(75deg)' }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Plate 1 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-bg-surface border border-border/80 rounded-xl shadow-xl flex items-center justify-center backdrop-blur-md" style={{ transform: 'rotateX(-75deg)' }}>
            <div className="w-8 h-8 rounded-full bg-mint/10 border border-mint/20" />
          </div>
          {/* Plate 2 */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-bg-surface border border-border/80 rounded-xl shadow-xl flex items-center justify-center backdrop-blur-md" style={{ transform: 'rotateX(-75deg)' }}>
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20" />
          </div>
        </motion.div>

        {/* Secondary Orbit */}
        <motion.div 
          className="absolute -inset-4 border border-text-secondary/10 rounded-full"
          style={{ transform: 'rotateX(105deg) rotateY(45deg)' }}
          animate={{ rotateZ: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-bg-alt border border-border rounded-lg shadow-lg flex items-center justify-center backdrop-blur-sm" style={{ transform: 'rotateX(-105deg) rotateY(-45deg)' }}>
             <div className="w-2 h-2 bg-text-primary rounded-full animate-ping" />
          </div>
        </motion.div>

      </motion.div>
      
      {/* Heavy vignette for premium lighting feel */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_30%,_var(--bg-base)_100%)]" />
    </div>
  );
}
