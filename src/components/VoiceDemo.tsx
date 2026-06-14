'use client';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Brain,
  PhoneCall,
  Calendar,
  PhoneMissed,
  Phone,
  RotateCcw,
} from 'lucide-react';

interface TranscriptLine {
  speaker: 'Caller' | 'AI Agent';
  text: string;
}

const transcript: TranscriptLine[] = [
  {
    speaker: 'Caller',
    text: "Hi, I'd like to schedule an oil change for my car.",
  },
  {
    speaker: 'AI Agent',
    text: 'Of course! I can help you with that. What day works best for you?',
  },
  {
    speaker: 'Caller',
    text: 'How about Thursday afternoon?',
  },
  {
    speaker: 'AI Agent',
    text: 'I have openings at 2:00 PM and 3:30 PM on Thursday. Which would you prefer?',
  },
  {
    speaker: 'Caller',
    text: '2 PM works.',
  },
  {
    speaker: 'AI Agent',
    text: "Perfect. I've booked your oil change for Thursday at 2:00 PM. You'll receive a confirmation text shortly. Is there anything else I can help with?",
  },
];

const features = [
  {
    icon: <Brain className="h-5 w-5" />,
    text: 'Natural language understanding',
  },
  {
    icon: <PhoneCall className="h-5 w-5" />,
    text: 'Handles inbound and outbound calls',
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    text: 'Schedules appointments instantly',
  },
  {
    icon: <PhoneMissed className="h-5 w-5" />,
    text: 'Recovers missed calls automatically',
  },
];

const BAR_COUNT = 28;

function AudioWaveform({ isActive }: { isActive: boolean }) {
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: BAR_COUNT }, () => 4)
  );

  useEffect(() => {
    if (!isActive) {
      setHeights(Array.from({ length: BAR_COUNT }, () => 4));
      return;
    }
    const id = setInterval(() => {
      setHeights(
        Array.from({ length: BAR_COUNT }, () =>
          Math.floor(Math.random() * 28) + 4
        )
      );
    }, 120);
    return () => clearInterval(id);
  }, [isActive]);

  return (
    <div
      className="flex items-end justify-center gap-[3px]"
      style={{ height: 48 }}
      aria-label="Audio waveform visualization"
    >
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-[4px] rounded-full sm:w-[5px]"
          animate={{ height: h }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          style={{
            backgroundColor: '#00F0FF',
            opacity: 0.35 + (h / 32) * 0.65,
          }}
        />
      ))}
    </div>
  );
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function VoiceDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [callSeconds, setCallSeconds] = useState(0);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalCallDuration = useMemo(
    () => transcript.length * 2.5 + 2,
    []
  );

  const clearAll = useCallback(() => {
    timeoutRefs.current.forEach(clearTimeout);
    timeoutRefs.current = [];
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const playSequence = useCallback(() => {
    clearAll();
    setVisibleLines([]);
    setCallSeconds(0);
    setIsCallActive(true);
    setIsComplete(false);
    setHasStarted(true);

    // Start timer
    timerRef.current = setInterval(() => {
      setCallSeconds((prev) => prev + 1);
    }, 1000);

    // Reveal transcript lines
    transcript.forEach((_, index) => {
      const t = setTimeout(
        () => {
          setVisibleLines((prev) => [...prev, index]);
        },
        1000 + index * 2500
      );
      timeoutRefs.current.push(t);
    });

    // End call
    const endDelay = 1000 + transcript.length * 2500 + 1500;
    const tEnd = setTimeout(() => {
      setIsCallActive(false);
      setIsComplete(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }, endDelay);
    timeoutRefs.current.push(tEnd);
  }, [clearAll]);

  useEffect(() => {
    if (isInView && !hasStarted) {
      playSequence();
    }
  }, [isInView, hasStarted, playSequence]);

  useEffect(() => {
    return () => clearAll();
  }, [clearAll]);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleLines]);

  const handleReplay = () => {
    playSequence();
  };

  return (
    <section
      ref={sectionRef}
      id="voice-demo"
      className="relative overflow-hidden bg-[#0A0A1A] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-[#8B5CF6]/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-[#00F0FF]/[0.04] blur-[120px]" />

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
              AI Voice Agents That Sound Human
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg">
            Experience our AI voice technology — natural conversations that
            qualify leads and book appointments over the phone.
          </p>
        </motion.div>

        {/* Two-column layout (reversed) */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left – Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 flex flex-col gap-8 lg:order-1"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Beyond Traditional IVR
              </h3>
              <p className="text-base leading-relaxed text-slate-400">
                Forget &quot;Press 1 for sales.&quot; Our AI voice agents hold
                real conversations, understand caller intent, and take action —
                booking appointments, qualifying leads, and recovering missed
                opportunities automatically.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#8B5CF6]/10 bg-[#8B5CF6]/[0.06] text-[#8B5CF6]">
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
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.25)] transition-shadow hover:shadow-[0_0_36px_rgba(139,92,246,0.4)]"
                aria-label="Get your AI voice agent"
              >
                Get Your AI Voice Agent
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

          {/* Right – Voice Simulation Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(17,17,39,0.7)] shadow-[0_0_40px_rgba(139,92,246,0.06)] backdrop-blur-xl">
              {/* Top bar – call status */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6]">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {isComplete ? 'Call Completed' : isCallActive ? 'Active Call' : 'Incoming Call'}
                    </p>
                    <div className="flex items-center gap-1.5">
                      {isCallActive && (
                        <>
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </span>
                          <span className="text-[11px] text-emerald-400">
                            Connected
                          </span>
                        </>
                      )}
                      {isComplete && (
                        <>
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                          <span className="text-[11px] text-slate-400">
                            Ended
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-xs font-mono text-slate-300">
                  {formatTime(callSeconds)}
                </div>
              </div>

              {/* Waveform */}
              <div className="border-b border-white/[0.06] px-5 py-5">
                <AudioWaveform isActive={isCallActive} />
              </div>

              {/* Transcript area */}
              <div className="h-[280px] overflow-y-auto px-5 py-4 sm:h-[300px]">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-slate-500" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    Live Transcript
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {visibleLines.map((lineIndex) => {
                    const line = transcript[lineIndex];
                    const isCaller = line.speaker === 'Caller';
                    return (
                      <motion.div
                        key={lineIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex gap-3"
                      >
                        <span
                          className={`mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full ${
                            isCaller ? 'bg-[#3B82F6]' : 'bg-[#00F0FF]'
                          }`}
                        />
                        <div>
                          <span
                            className={`text-xs font-semibold ${
                              isCaller ? 'text-blue-400' : 'text-[#00F0FF]'
                            }`}
                          >
                            {line.speaker}
                          </span>
                          <p className="mt-0.5 text-sm leading-relaxed text-slate-300">
                            {line.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                  <div ref={transcriptEndRef} />
                </div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-white/[0.06] px-5 py-3">
                {isComplete ? (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleReplay}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.08] py-2.5 text-sm font-medium text-[#8B5CF6] transition-colors hover:bg-[#8B5CF6]/[0.15]"
                    aria-label="Replay voice demo"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Replay
                  </motion.button>
                ) : (
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00F0FF] opacity-40" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00F0FF]/60" />
                    </span>
                    AI is listening...
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
