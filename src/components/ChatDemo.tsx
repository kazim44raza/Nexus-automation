'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Brain,
  Target,
  Calendar,
  Clock,
  RotateCcw,
} from 'lucide-react';

interface ChatMessage {
  sender: 'visitor' | 'ai';
  text: string;
}

const conversation: ChatMessage[] = [
  {
    sender: 'visitor',
    text: 'Hi, can you help automate my dental clinic?',
  },
  {
    sender: 'ai',
    text: 'Absolutely! I can help automate appointment booking, patient intake, lead qualification, reminders, and after-hours support for your clinic.',
  },
  {
    sender: 'visitor',
    text: 'How quickly can you set it up?',
  },
  {
    sender: 'ai',
    text: 'Most clinics are fully live within 7–14 days. We handle everything — strategy, build, testing, and launch. You focus on patients, we handle the rest.',
  },
  {
    sender: 'visitor',
    text: 'That sounds great. Can I book a demo?',
  },
  {
    sender: 'ai',
    text: "Of course! I've opened our booking calendar for you. Pick a time that works best. ✅",
  },
];

const features = [
  {
    icon: <Brain className="h-5 w-5" />,
    text: 'Understands context and intent',
  },
  {
    icon: <Target className="h-5 w-5" />,
    text: 'Qualifies leads automatically',
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    text: 'Books appointments in real-time',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    text: 'Available 24/7, never misses a lead',
  },
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block h-2 w-2 rounded-full bg-[#00F0FF]/60"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function ChatDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
  }, []);

  const playSequence = useCallback(() => {
    clearAllTimeouts();
    setVisibleMessages([]);
    setIsTyping(false);
    setIsComplete(false);
    setHasStarted(true);

    let cumulativeDelay = 500;

    conversation.forEach((msg, index) => {
      if (msg.sender === 'visitor') {
        const t = setTimeout(() => {
          setVisibleMessages((prev) => [...prev, index]);
        }, cumulativeDelay);
        timeoutRefs.current.push(t);
        cumulativeDelay += 2000;
      } else {
        // Show typing indicator
        const t1 = setTimeout(() => {
          setIsTyping(true);
        }, cumulativeDelay);
        timeoutRefs.current.push(t1);
        cumulativeDelay += 1500;

        // Reveal AI message
        const t2 = setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => [...prev, index]);
        }, cumulativeDelay);
        timeoutRefs.current.push(t2);
        cumulativeDelay += 2000;
      }
    });

    // Mark complete
    const tEnd = setTimeout(() => {
      setIsComplete(true);
    }, cumulativeDelay);
    timeoutRefs.current.push(tEnd);
  }, [clearAllTimeouts]);

  useEffect(() => {
    if (isInView && !hasStarted) {
      playSequence();
    }
  }, [isInView, hasStarted, playSequence]);

  useEffect(() => {
    return () => clearAllTimeouts();
  }, [clearAllTimeouts]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleMessages, isTyping]);

  const handleReplay = () => {
    playSequence();
  };

  return (
    <section
      ref={sectionRef}
      id="chat-demo"
      className="relative overflow-hidden bg-[#0A0A1A] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#00F0FF]/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#3B82F6]/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              See Our AI In Action
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg">
            Watch how our AI chatbot handles a real business conversation in
            real-time.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left – Chat Window */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(17,17,39,0.7)] shadow-[0_0_40px_rgba(0,240,255,0.06)] backdrop-blur-xl">
              {/* Chat top bar */}
              <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#00F0FF] to-[#3B82F6]">
                  <span className="text-sm font-bold text-white">N</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">
                    Nexus AI Assistant
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    <span className="text-[11px] text-cyan-400">Online</span>
                  </div>
                </div>
              </div>

              {/* Messages area */}
              <div className="h-[380px] overflow-y-auto px-4 py-4 sm:h-[420px]">
                <div className="flex flex-col gap-3">
                  {visibleMessages.map((msgIndex) => {
                    const msg = conversation[msgIndex];
                    const isVisitor = msg.sender === 'visitor';
                    return (
                      <motion.div
                        key={msgIndex}
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className={`flex ${isVisitor ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`chat-message max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:max-w-[75%] ${
                            isVisitor
                              ? 'rounded-br-md bg-white/[0.08] text-white'
                              : 'rounded-bl-md border border-[#00F0FF]/10 bg-[#00F0FF]/[0.06] text-slate-200'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Typing indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="rounded-2xl rounded-bl-md border border-[#00F0FF]/10 bg-[#00F0FF]/[0.06] px-4 py-3">
                        <TypingIndicator />
                      </div>
                    </motion.div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              </div>

              {/* Replay button / input bar */}
              <div className="border-t border-white/[0.06] px-4 py-3">
                {isComplete ? (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleReplay}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#00F0FF]/20 bg-[#00F0FF]/[0.08] py-2.5 text-sm font-medium text-[#00F0FF] transition-colors hover:bg-[#00F0FF]/[0.15]"
                    aria-label="Replay chat demo"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Replay Demo
                  </motion.button>
                ) : (
                  <div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm text-slate-500">
                    <span>Type a message...</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right – Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Intelligent Conversations That Convert
              </h3>
              <p className="text-base leading-relaxed text-slate-400">
                Our AI chatbot engages visitors instantly, understands their
                needs, and guides them toward booking — all without human
                intervention.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#00F0FF]/10 bg-[#00F0FF]/[0.06] text-[#00F0FF]">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-300 sm:text-base">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,240,255,0.25)] transition-shadow hover:shadow-[0_0_36px_rgba(0,240,255,0.4)]"
                aria-label="Get your AI chatbot"
              >
                Get Your AI Chatbot
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
