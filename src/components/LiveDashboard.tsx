'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Calendar,
  Zap,
  Target,
  TrendingUp,
} from 'lucide-react';

const activityEvents = [
  { text: 'Lead qualified — Dr. Smith Dental', color: '#00F0FF' },
  { text: 'Appointment confirmed — 2:30 PM today', color: '#22C55E' },
  { text: 'New inquiry — Real estate consultation', color: '#3B82F6' },
  { text: 'Follow-up sent — Martinez Auto Group', color: '#8B5CF6' },
  { text: 'Voicemail recovered — Sunrise Plumbing', color: '#00F0FF' },
  { text: 'Demo booked — Peak Fitness Studio', color: '#22C55E' },
];

function useAnimatedNumber(
  min: number,
  max: number,
  intervalMs: number,
  isFloat = false
) {
  const [value, setValue] = useState(min);

  useEffect(() => {
    // Hydration fix: Set random value only after mount
    setValue(
      isFloat
        ? parseFloat((Math.random() * (max - min) + min).toFixed(1))
        : Math.floor(Math.random() * (max - min + 1)) + min
    );

    const id = setInterval(() => {
      setValue(
        isFloat
          ? parseFloat((Math.random() * (max - min) + min).toFixed(1))
          : Math.floor(Math.random() * (max - min + 1)) + min
      );
    }, intervalMs);
    return () => clearInterval(id);
  }, [min, max, intervalMs, isFloat]);

  return value;
}

function useIncrementingCounter(start: number, minMs: number, maxMs: number) {
  const [value, setValue] = useState(start);

  const scheduleNext = useCallback(() => {
    const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    return setTimeout(() => {
      setValue((v) => v + 1);
    }, delay);
  }, [minMs, maxMs]);

  useEffect(() => {
    let timeout = scheduleNext();
    const interval = setInterval(() => {
      clearTimeout(timeout);
      timeout = scheduleNext();
    }, Math.floor((minMs + maxMs) / 2));

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [scheduleNext, minMs, maxMs]);

  return value;
}

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  accent: string;
  trend: string;
}

function MetricCard({ icon, label, value, accent, trend }: MetricCardProps) {
  return (
    <motion.div
      className="relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur-sm"
      whileHover={{ scale: 1.03, borderColor: `${accent}33` }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accent}08 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <div className="mb-3 flex items-center justify-between">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${accent}15` }}
          >
            <div style={{ color: accent }}>{icon}</div>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-cyan-500/10 px-2 py-0.5 text-[11px] font-medium text-cyan-400">
            <TrendingUp className="h-3 w-3" />
            {trend}
          </div>
        </div>
        <p className="mb-0.5 text-xs text-slate-400">{label}</p>
        <motion.p
          key={String(value)}
          initial={{ opacity: 0.6, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          {value}
        </motion.p>
      </div>
    </motion.div>
  );
}

function PulseBar() {
  return (
    <div className="flex items-end gap-[3px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-amber-400"
          animate={{
            height: [6, 14, 8, 16, 6],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function LiveDashboard() {
  const activeConversations = useAnimatedNumber(12, 28, 3000);
  const appointmentsBooked = useIncrementingCounter(147, 8000, 15000);
  const qualificationRate = useAnimatedNumber(89, 96, 4000);
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % activityEvents.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const visibleEvents = [
    activityEvents[activeEventIndex % activityEvents.length],
    activityEvents[(activeEventIndex + 1) % activityEvents.length],
    activityEvents[(activeEventIndex + 2) % activityEvents.length],
  ];

  return (
    <div className="flex w-full items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(17,17,39,0.7)] shadow-[0_0_60px_rgba(0,240,255,0.08)] backdrop-blur-xl"
      >
        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-[#00F0FF]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 right-10 h-32 w-64 rounded-full bg-[#8B5CF6]/[0.05] blur-3xl" />

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
            </span>
            <span className="text-sm font-medium text-white">
              Live Dashboard
            </span>
          </div>
          <div className="rounded-full border border-[#00F0FF]/20 bg-[#00F0FF]/[0.08] px-3 py-1 text-xs font-semibold text-[#00F0FF]">
            Nexus AI
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-4">
          <MetricCard
            icon={<MessageSquare className="h-4 w-4" />}
            label="Active Conversations"
            value={activeConversations}
            accent="#00F0FF"
            trend="+12%"
          />
          <MetricCard
            icon={<Calendar className="h-4 w-4" />}
            label="Appointments Booked"
            value={appointmentsBooked}
            accent="#22C55E"
            trend="+8%"
          />
          <MetricCard
            icon={<Zap className="h-4 w-4" />}
            label="Avg Response Time"
            value="<1 sec"
            accent="#F59E0B"
            trend="+24%"
          />
          <MetricCard
            icon={<Target className="h-4 w-4" />}
            label="Lead Qualification Rate"
            value={`${qualificationRate}%`}
            accent="#8B5CF6"
            trend="+5%"
          />
        </div>

        {/* Response time pulse – sits inside the Avg Response Time visually via the card, but we add a global pulse too */}
        <div className="pointer-events-none absolute right-[27%] top-[55%] hidden md:block">
          {/* decorative only on large screens */}
        </div>

        {/* Activity log */}
        <div className="border-t border-white/[0.06] px-6 py-3.5">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-slate-500" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
              Recent Activity
            </span>
          </div>
          <div className="space-y-1.5 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {visibleEvents.map((event, i) => (
                <motion.div
                  key={`${activeEventIndex}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1 - i * 0.25, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-2.5 text-sm"
                >
                  <span
                    className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: event.color }}
                  />
                  <span className="text-slate-300">{event.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom pulse bar for response time decoration */}
        <div className="absolute bottom-[105px] right-[42px] hidden md:block">
          <PulseBar />
        </div>
      </motion.div>
    </div>
  );
}
