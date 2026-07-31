'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const NODES = [
  { label: 'Voice Agent',    icon: '📞', angle: 0,   color: '#B8774F', delay: 0 },
  { label: 'WhatsApp',       icon: '💬', angle: 60,  color: '#6B9E78', delay: 0.1 },
  { label: 'CRM Sync',       icon: '🗄️', angle: 120, color: '#7A8FA6', delay: 0.2 },
  { label: 'Appointments',   icon: '📅', angle: 180, color: '#B8774F', delay: 0.3 },
  { label: 'Lead Qualify',   icon: '🎯', angle: 240, color: '#9B7ABF', delay: 0.4 },
  { label: 'Auto Follow-up', icon: '⚡', angle: 300, color: '#6B9E78', delay: 0.5 },
];

function polarToXY(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

function NodeItem({ node, index }: { node: typeof NODES[0]; index: number }) {
  const pos = polarToXY(node.angle, 140);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 + node.delay, duration: 0.4, type: 'spring', stiffness: 200 }}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
      }}
      className="flex flex-col items-center gap-1 group cursor-default"
    >
      {/* Connector line drawn via CSS from center */}
      <div
        style={{
          position: 'absolute',
          width: `${Math.sqrt(pos.x ** 2 + pos.y ** 2) - 36}px`,
          height: '1px',
          background: `linear-gradient(90deg, ${node.color}60, ${node.color}00)`,
          transformOrigin: '0 50%',
          transform: `rotate(${Math.atan2(-pos.y, -pos.x) * (180 / Math.PI)}deg)`,
          left: '50%',
          top: '50%',
          marginTop: '-0.5px',
          pointerEvents: 'none',
        }}
      />
      {/* Node pill */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{ borderColor: node.color + '60', boxShadow: `0 0 16px ${node.color}30` }}
        className="relative w-14 h-14 rounded-2xl border bg-[#181915] flex items-center justify-center text-2xl z-10"
      >
        <span>{node.icon}</span>
        {/* Pulse ring */}
        <motion.span
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: node.delay + 1 }}
          style={{ borderColor: node.color }}
          className="absolute inset-0 rounded-2xl border pointer-events-none"
        />
      </motion.div>
      <span className="text-[10px] text-text-secondary font-medium whitespace-nowrap leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
        {node.label}
      </span>
    </motion.div>
  );
}

function SignalDot({ angle, color, duration, delay }: { angle: number; color: string; duration: number; delay: number }) {
  const pos = polarToXY(angle, 140);
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: `0 0 8px ${color}`,
        marginLeft: -3,
        marginTop: -3,
      }}
      animate={{
        x: [0, pos.x, 0],
        y: [0, pos.y, 0],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
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
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
      mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    const onLeave = () => { mouseX.set(0); mouseY.set(0); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[440px] flex items-center justify-center select-none" style={{ perspective: '1200px' }}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-[340px] h-[340px]"
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-[-40px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B8774F18 0%, transparent 70%)' }}
        />

        {/* Orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: '1px dashed #B8774F30',
            width: '280px',
            height: '280px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Core hub */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl flex items-center justify-center z-20"
          style={{
            background: 'linear-gradient(135deg, #20211C 0%, #11120F 100%)',
            border: '1px solid #B8774F60',
            boxShadow: '0 0 32px #B8774F40, inset 0 1px 0 #B8774F30',
          }}
        >
          {/* Azorvin "A" mark */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4 L28 28 H20 L16 18 L12 28 H4 Z" fill="#B8774F" opacity="0.9"/>
            <path d="M10 22 H22" stroke="#B8774F" strokeWidth="2" opacity="0.5"/>
          </svg>
          {/* Core pulse */}
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ border: '1px solid #B8774F' }}
          />
        </motion.div>

        {/* Nodes */}
        {NODES.map((node, i) => <NodeItem key={i} node={node} index={i} />)}

        {/* Animated signal dots */}
        {NODES.map((node, i) => (
          <SignalDot
            key={i}
            angle={node.angle}
            color={node.color}
            duration={2 + i * 0.3}
            delay={i * 0.5}
          />
        ))}
      </motion.div>

      {/* Corner label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 right-4 text-[10px] text-text-muted font-mono uppercase tracking-widest"
      >
        Automation Hub · Live
      </motion.div>
    </div>
  );
}
