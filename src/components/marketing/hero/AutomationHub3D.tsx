'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const NODES = [
  { label: 'Voice Agent', icon: 'VA', angle: 0, color: '#67B4FF', delay: 0 },
  { label: 'WhatsApp', icon: 'WA', angle: 60, color: '#18D4E8', delay: 0.1 },
  { label: 'CRM Sync', icon: 'CRM', angle: 120, color: '#8BAED1', delay: 0.2 },
  { label: 'Appointments', icon: 'CAL', angle: 180, color: '#67B4FF', delay: 0.3 },
  { label: 'Lead Qualify', icon: 'LQ', angle: 240, color: '#789CFF', delay: 0.4 },
  { label: 'Auto Follow-up', icon: 'FLOW', angle: 300, color: '#62D6CF', delay: 0.5 },
];

function polarToXY(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

function NodeItem({ node }: { node: typeof NODES[0] }) {
  const pos = polarToXY(node.angle, 140);
  return (
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + node.delay, duration: 0.4, type: 'spring', stiffness: 200 }} style={{ position: 'absolute', left: '50%', top: '50%', transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }} className="flex flex-col items-center gap-1 group cursor-default">
      <div style={{ position: 'absolute', width: `${Math.sqrt(pos.x ** 2 + pos.y ** 2) - 36}px`, height: '1px', background: `linear-gradient(90deg, ${node.color}60, ${node.color}00)`, transformOrigin: '0 50%', transform: `rotate(${Math.atan2(-pos.y, -pos.x) * (180 / Math.PI)}deg)`, left: '50%', top: '50%', marginTop: '-0.5px', pointerEvents: 'none' }} />
      <motion.div whileHover={{ scale: 1.08 }} style={{ borderColor: node.color + '60', boxShadow: `0 0 16px ${node.color}30` }} className="relative w-14 h-14 rounded-2xl border bg-bg-alt flex items-center justify-center text-[10px] font-bold tracking-wide z-10">
        <span>{node.icon}</span>
        <motion.span animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: node.delay + 1 }} style={{ borderColor: node.color }} className="absolute inset-0 rounded-2xl border pointer-events-none" />
      </motion.div>
      <span className="text-[10px] text-text-secondary font-medium whitespace-nowrap leading-tight opacity-0 group-hover:opacity-100 transition-opacity">{node.label}</span>
    </motion.div>
  );
}

function SignalDot({ angle, color, duration, delay }: { angle: number; color: string; duration: number; delay: number }) {
  const pos = polarToXY(angle, 140);
  return <motion.div style={{ position: 'absolute', left: '50%', top: '50%', width: 6, height: 6, borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 8px ${color}`, marginLeft: -3, marginTop: -3 }} animate={{ x: [0, pos.x, 0], y: [0, pos.y, 0], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.5] }} transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }} />;
}

export default function AutomationHub3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), { stiffness: 80, damping: 20 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => { const rect = el.getBoundingClientRect(); mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1); mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1); };
    const onLeave = () => { mouseX.set(0); mouseY.set(0); };
    el.addEventListener('mousemove', onMove); el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [mouseX, mouseY]);

  return <div ref={containerRef} className="relative w-full h-full min-h-[440px] flex items-center justify-center select-none" style={{ perspective: '1200px' }}>
    <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="relative w-[340px] h-[340px]">
      <motion.div animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-[-40px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, #3B9BFF20 0%, transparent 70%)' }} />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full pointer-events-none" style={{ border: '1px dashed #67B4FF38', width: '280px', height: '280px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
      <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, type: 'spring', stiffness: 150 }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl flex items-center justify-center z-20" style={{ background: 'linear-gradient(135deg, #102641 0%, #07111F 100%)', border: '1px solid #18D4E860', boxShadow: '0 0 32px #18D4E840, inset 0 1px 0 #67B4FF30' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 4 L28 28 H20 L16 18 L12 28 H4 Z" fill="#67B4FF" opacity="0.9"/><path d="M10 22 H22" stroke="#18D4E8" strokeWidth="2" opacity="0.75"/></svg>
        <motion.div animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-2xl pointer-events-none" style={{ border: '1px solid #18D4E8' }} />
      </motion.div>
      {NODES.map(node => <NodeItem key={node.label} node={node} />)}
      {NODES.map((node, i) => <SignalDot key={node.label} angle={node.angle} color={node.color} duration={2 + i * 0.3} delay={i * 0.5} />)}
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="absolute bottom-4 right-4 text-[10px] text-text-muted font-mono uppercase tracking-widest">Automation Hub / Live</motion.div>
  </div>;
}
