'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Phone,
  BrainCircuit,
  UserPlus,
  Target,
  Calendar,
  Database,
  Bell,
  Cpu
} from 'lucide-react';

interface PanelConfig {
  id: string;
  icon: React.ElementType;
  label: string;
  angle: number;
  radius: number;
  delay: number;
}

const panels: PanelConfig[] = [
  { id: 'step1', icon: Phone, label: '1. Inquiry Enters', angle: 270, radius: 180, delay: 0 },
  { id: 'step2', icon: BrainCircuit, label: '2. AI Understands', angle: 320, radius: 190, delay: 0.2 },
  { id: 'step3', icon: UserPlus, label: '3. Contact Captured', angle: 30, radius: 190, delay: 0.4 },
  { id: 'step4', icon: Target, label: '4. Lead Qualified', angle: 80, radius: 180, delay: 0.6 },
  { id: 'step5', icon: Calendar, label: '5. Appt. Booked', angle: 140, radius: 190, delay: 0.8 },
  { id: 'step6', icon: Database, label: '6. CRM Updated', angle: 190, radius: 190, delay: 1.0 },
  { id: 'step7', icon: Bell, label: '7. Team Notified', angle: 230, radius: 160, delay: 1.2 },
];

export default function NexusHub3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  const isReduced = prefersReducedMotion;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isReduced || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isReduced]);

  // Utility to calculate x,y position from angle and radius
  const getPosition = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden hidden sm:flex"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{
          rotateX: isReduced ? 0 : mousePos.y * -5 + 2.5,
          rotateY: isReduced ? 0 : mousePos.x * 5,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* SVG Connections Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" style={{ transform: 'translateZ(-1px)' }}>
          <svg width="400" height="400" viewBox="-200 -200 400 400" className="opacity-30">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                <stop offset="50%" stopColor="#22C7F2" stopOpacity="1" />
                <stop offset="100%" stopColor="#7657F5" stopOpacity="0" />
              </linearGradient>
            </defs>
            {panels.map((p) => {
              const pos = getPosition(p.angle, p.radius);
              return (
                <g key={`path-${p.id}`}>
                  <path
                    d={`M 0 0 L ${pos.x} ${pos.y}`}
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                  {!isReduced && (
                    <circle r="3" fill="#22C7F2" filter="drop-shadow(0 0 4px #22C7F2)">
                      <animateMotion
                        dur={`${2 + Math.random()}s`}
                        repeatCount="indefinite"
                        path={`M ${pos.x} ${pos.y} L 0 0`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Central Node */}
        <motion.div
          className="absolute z-20 flex flex-col items-center justify-center w-24 h-24 bg-white/95 backdrop-blur rounded-2xl shadow-[0_0_30px_rgba(34,199,242,0.15)] border border-border"
          style={{ transform: 'translateZ(40px)' }}
          animate={!isReduced ? {
            y: [0, -3, 0],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative flex items-center justify-center w-12 h-12 bg-[var(--color-bg-alt)] rounded-xl mb-1">
            <Cpu className="w-6 h-6 text-primary" />
            <motion.div 
              className="absolute inset-0 rounded-xl bg-accent opacity-10"
              animate={!isReduced ? { scale: [1, 1.3, 1], opacity: [0.1, 0, 0.1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-xs font-bold text-text-primary">
            Nexus Core
          </span>
        </motion.div>

        {/* Floating Panels */}
        {panels.map((panel) => {
          const pos = getPosition(panel.angle, panel.radius);
          return (
            <motion.div
              key={panel.id}
              className="absolute z-10 flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-sm border border-border whitespace-nowrap"
              style={{
                x: pos.x,
                y: pos.y,
                transform: `translateZ(${10 + Math.random() * 15}px)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: panel.delay, duration: 0.5, type: 'spring' }}
            >
              <motion.div
                animate={!isReduced ? {
                  y: [0, -2, 0],
                } : {}}
                transition={{ duration: 2.5 + Math.random(), repeat: Infinity, delay: panel.delay }}
                className="flex items-center gap-2 w-full h-full"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[var(--color-bg-alt)] rounded-lg text-text-secondary">
                  <panel.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-text-primary">{panel.label}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
