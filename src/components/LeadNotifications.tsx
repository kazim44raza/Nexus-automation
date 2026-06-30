'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  MessageSquare,
  CalendarCheck,
  Target,
  PhoneIncoming,
  Send,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface LeadNotification {
  id: number;
  title: string;
  icon: LucideIcon;
  accentColor: string;
  dotColor: string;
  glowColor: string;
}

const notifications: LeadNotification[] = [
  {
    id: 0,
    title: 'New Inquiry Received',
    icon: MessageSquare,
    accentColor: '#00F0FF',
    dotColor: 'bg-cyan-400',
    glowColor: 'rgba(0, 240, 255, 0.15)',
  },
  {
    id: 1,
    title: 'Appointment Booked',
    icon: CalendarCheck,
    accentColor: '#22C55E',
    dotColor: 'bg-sky-400',
    glowColor: 'rgba(34, 197, 94, 0.15)',
  },
  {
    id: 2,
    title: 'Lead Qualified',
    icon: Target,
    accentColor: '#3B82F6',
    dotColor: 'bg-blue-400',
    glowColor: 'rgba(59, 130, 246, 0.15)',
  },
  {
    id: 3,
    title: 'Missed Call Recovered',
    icon: PhoneIncoming,
    accentColor: '#8B5CF6',
    dotColor: 'bg-purple-400',
    glowColor: 'rgba(139, 92, 246, 0.15)',
  },
  {
    id: 4,
    title: 'Customer Follow-up Sent',
    icon: Send,
    accentColor: '#F59E0B',
    dotColor: 'bg-amber-400',
    glowColor: 'rgba(245, 158, 11, 0.15)',
  },
];

const timestamps = [
  'Just now',
  '2 minutes ago',
  '5 minutes ago',
  '8 minutes ago',
  '12 minutes ago',
];

export default function LeadNotifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [timestampIndex, setTimestampIndex] = useState(0);

  const getRandomInterval = useCallback(() => {
    return 5000 + Math.random() * 5000;
  }, []);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setHasStarted(true);
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const showDuration = 4000;

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, showDuration);

    const nextInterval = getRandomInterval();
    const nextTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setTimestampIndex((prev) => (prev + 1) % timestamps.length);
      setIsDismissed(false);
      setIsVisible(true);
    }, showDuration + 800 + (nextInterval - showDuration));

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [currentIndex, hasStarted, getRandomInterval]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const notification = notifications[currentIndex];
  const IconComponent = notification.icon;
  const timestamp = timestamps[timestampIndex];

  return (
    <div
      className="fixed bottom-6 left-6 z-40"
      aria-live="polite"
      aria-label="Lead notifications"
    >
      <AnimatePresence mode="wait">
        {isVisible && !isDismissed && hasStarted && (
          <motion.div
            key={notification.id + '-' + currentIndex + '-' + timestampIndex}
            initial={{ x: -100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -100, opacity: 0, scale: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
              mass: 0.8,
            }}
            className="relative max-w-xs rounded-xl border border-white/10 p-4 backdrop-blur-xl"
            style={{
              background: 'rgba(17, 17, 39, 0.85)',
              boxShadow: `0 4px 30px ${notification.glowColor}, 0 0 60px ${notification.glowColor}`,
            }}
          >
            <button
              onClick={handleDismiss}
              className="absolute right-2 top-2 rounded-full p-1 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Dismiss notification"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <div className="flex items-start gap-3 pr-4">
              <div
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${notification.accentColor}22, ${notification.accentColor}11)`,
                  border: `1px solid ${notification.accentColor}33`,
                }}
              >
                <IconComponent
                  className="h-4.5 w-4.5"
                  style={{ color: notification.accentColor }}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full ${notification.dotColor} opacity-75`}
                    />
                    <span
                      className={`relative inline-flex h-2 w-2 rounded-full ${notification.dotColor}`}
                    />
                  </span>
                  <span className="text-sm font-medium text-white">
                    {notification.title}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{timestamp}</p>
              </div>
            </div>

            <motion.div
              className="absolute bottom-0 left-4 right-4 h-[2px] origin-left rounded-full"
              style={{ background: notification.accentColor }}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 4, ease: 'linear' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
