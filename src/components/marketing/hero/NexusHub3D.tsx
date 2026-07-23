'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Phone,
  Bot,
  MessageSquare,
  MessageCircle,
  Target,
  Calendar,
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
  { id: 'incoming', icon: Phone, label: 'Incoming Call', angle: 270, radius: 180, delay: 0 },
  { id: 'voice', icon: Bot, label: 'AI Voice Agent', angle: 320, radius: 190, delay: 0.2 },
  { id: 'chat', icon: MessageSquare, label: 'Website Chat', angle: 40, radius: 190, delay: 0.4 },
  { id: 'whatsapp', icon: MessageCircle, label: 'WhatsApp', angle: 90, radius: 180, delay: 0.6 },
  { id: 'lead', icon: Target, label: 'Lead Qualified', angle: 140, radius: 190, delay: 0.8 },
  { id: 'book', icon: Calendar, label: 'Appointment Booked', angle: 220, radius: 190, delay: 1.0 },
  { id: 'team', icon: Bell, label: 'Team Notified', angle: 180, radius: 160, delay: 1.2 },
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
          rotateX: isReduced ? 0 : mousePos.y * -20 + 10,
          rotateY: isReduced ? 0 : mousePos.x * 20,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* SVG Connections Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" style={{ transform: 'translateZ(-1px)' }}>
          <svg width="400" height="400" viewBox="-200 -200 400 400" className="opacity-30">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
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
                    <circle r="3" fill="#0ea5e9" filter="drop-shadow(0 0 4px #0ea5e9)">
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
          className="absolute z-20 flex flex-col items-center justify-center w-24 h-24 bg-white/90 backdrop-blur rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.3)] border border-cyan-100"
          style={{ transform: 'translateZ(40px)' }}
          animate={!isReduced ? {
            y: [0, -5, 0],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative flex items-center justify-center w-12 h-12 bg-cyan-50 rounded-xl mb-1">
            <Cpu className="w-6 h-6 text-cyan-500" />
            <motion.div 
              className="absolute inset-0 rounded-xl bg-cyan-400 opacity-20"
              animate={!isReduced ? { scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-violet-600">
            Nexus AI
          </span>
        </motion.div>

        {/* Floating Panels */}
        {panels.map((panel) => {
          const pos = getPosition(panel.angle, panel.radius);
          return (
            <motion.div
              key={panel.id}
              className="absolute z-10 flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-md border border-slate-100 whitespace-nowrap"
              style={{
                x: pos.x,
                y: pos.y,
                transform: `translateZ(${20 + Math.random() * 30}px)`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: panel.delay, duration: 0.5, type: 'spring' }}
            >
              <motion.div
                animate={!isReduced ? {
                  y: [0, -3, 0],
                } : {}}
                transition={{ duration: 2.5 + Math.random(), repeat: Infinity, delay: panel.delay }}
                className="flex items-center gap-2 w-full h-full"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-50 rounded-lg text-slate-600">
                  <panel.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-slate-700">{panel.label}</span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
