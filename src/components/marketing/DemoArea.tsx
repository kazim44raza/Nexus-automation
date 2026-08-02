'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Workflow, Play, Square, Loader2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

// Subcomponents for tabs
function VoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  
  const transcript = [
    { speaker: 'AI', text: "Good afternoon, thank you for calling. How can I help you today?" },
    { speaker: 'Caller', text: "Hi, I'd like to schedule an appointment for next week." },
    { speaker: 'AI', text: "Of course! I have openings on Tuesday at 2 PM and Thursday at 10 AM. Which works better?" },
    { speaker: 'Caller', text: "Thursday at 10 works." },
    { speaker: 'AI', text: "Perfect. I've booked you for Thursday at 10 AM. You'll receive a confirmation text shortly." }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setDuration(d => d + 1);
        if (duration > 0 && duration % 3 === 0 && visibleLines < transcript.length) {
          setVisibleLines(v => v + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, visibleLines, transcript.length]);

  const togglePlay = () => {
    if (!isPlaying && visibleLines === transcript.length) {
      // Reset
      setVisibleLines(0);
      setDuration(0);
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-2xl mx-auto bg-bg-surface rounded-xl border border-border p-6 md:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={togglePlay}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              isPlaying ? 'bg-bg-alt text-text-primary hover:bg-bg-base border border-border' : 'bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20'
            }`}
          >
            {isPlaying ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>
          <div>
            <h4 className="text-text-primary font-medium tracking-tight">Inbound Call</h4>
            <p className="text-text-muted text-sm font-mono">{formatTime(duration)}</p>
          </div>
        </div>

        {/* Waveform */}
        <div className="flex items-center gap-1 h-10 px-4">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-primary rounded-full"
              animate={{ 
                height: isPlaying ? [10, Math.random() * 30 + 10, 10] : 4 
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4 min-h-[250px] bg-bg-base p-6 rounded-xl border border-border overflow-hidden">
        <AnimatePresence>
          {transcript.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${line.speaker === 'Caller' ? 'items-end' : 'items-start'}`}
            >
              <span className="text-xs text-text-muted mb-1 font-medium tracking-wide uppercase">{line.speaker}</span>
              <div className={`px-4 py-2.5 rounded-2xl max-w-[85%] text-sm font-light ${
                line.speaker === 'Caller' ? 'bg-bg-surface text-text-primary rounded-tr-sm border border-border' : 'bg-primary/10 text-text-primary rounded-tl-sm border border-primary/20'
              }`}>
                {line.text}
              </div>
            </motion.div>
          ))}
          {isPlaying && visibleLines < transcript.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-text-muted text-sm p-2 font-mono"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Listening...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="bg-bg-alt border border-border px-3 py-1.5 rounded-md text-xs font-mono text-text-secondary tracking-wide">
          Intent: Booking
        </div>
        <div className="bg-bg-alt border border-border px-3 py-1.5 rounded-md text-xs font-mono text-text-secondary tracking-wide">
          Source: booking policy
        </div>
      </div>
    </div>
  );
}

function ChatDemo() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! Welcome to Azorvin. What can I help you with today?' }
  ]);
  const [showOptions, setShowOptions] = useState(true);

  const handleOption = (text: string) => {
    setShowOptions(false);
    setMessages(prev => [...prev, { role: 'user', text }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'Great! Let me get that information for you right away.' }]);
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-bg-surface rounded-xl border border-border overflow-hidden shadow-2xl">
      <div className="bg-bg-alt px-4 py-3 flex items-center gap-3 border-b border-border">
        <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-text-primary text-sm font-medium tracking-tight">Azorvin Assistant</h4>
          <p className="text-primary text-xs flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Online</p>
        </div>
      </div>
      
      <div className="p-4 h-[350px] overflow-y-auto space-y-4 bg-bg-base">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`px-4 py-2.5 rounded-2xl max-w-[85%] text-sm font-light border ${
              msg.role === 'user' ? 'bg-primary/10 border-primary/20 text-text-primary rounded-tr-sm' : 'bg-bg-surface border-border text-text-primary rounded-tl-sm'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        
        {showOptions && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-2 items-end mt-4"
          >
            {["Learn about services", "Book a demo", "Pricing info"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleOption(opt)}
                className="bg-bg-surface hover:bg-bg-alt text-text-primary text-xs px-4 py-2 rounded-full border border-border transition-colors shadow-sm"
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </div>
      
      <div className="p-3 bg-bg-alt border-t border-border">
        <div className="bg-bg-base rounded-full border border-border flex items-center px-4 py-2">
          <span className="text-text-muted text-sm flex-1 font-light">Type a message...</span>
          <ArrowRight className="w-4 h-4 text-text-muted" />
        </div>
      </div>
    </div>
  );
}

function WorkflowDemo() {
  const nodes = [
    { id: 1, label: 'Website Form' },
    { id: 2, label: 'AI Chatbot' },
    { id: 3, label: 'Lead Scored' },
    { id: 4, label: 'CRM Updated' },
    { id: 5, label: 'Calendar Booked' },
    { id: 6, label: 'Team Notified' }
  ];

  const [activeNode, setActiveNode] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(curr => (curr === nodes.length ? 1 : curr + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 z-0" />
        <div className="md:hidden absolute left-1/2 top-0 h-full w-[1px] bg-border -translate-x-1/2 z-0" />

        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          const isPast = activeNode > node.id;
          
          return (
            <div key={node.id} className="relative z-10 flex flex-col items-center gap-3 bg-bg-base p-2">
              <motion.div
                animate={{
                  backgroundColor: isActive ? 'rgba(180, 135, 91, 0.1)' : 'var(--color-bg-surface)',
                  borderColor: isActive || isPast ? 'var(--color-primary)' : 'var(--color-border)',
                  scale: isActive ? 1.1 : 1,
                }}
                className="w-12 h-12 rounded-xl border flex items-center justify-center shadow-lg transition-colors bg-bg-surface"
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(180,135,91,0.8)]" 
                  />
                )}
                {isPast && !isActive && <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-50" />}
              </motion.div>
              <span className={`text-xs font-mono whitespace-nowrap px-2 py-1 rounded-md border ${
                isActive ? 'text-primary bg-primary/10 border-primary/20' : 'text-text-muted border-transparent'
              }`}>
                {node.label}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 bg-bg-surface h-[2px] w-full max-w-md mx-auto">
        <motion.div 
          className="h-full bg-primary"
          animate={{ width: `${(activeNode / nodes.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export function DemoArea() {
  const [activeTab, setActiveTab] = useState<'voice' | 'chat' | 'workflow'>('voice');

  return (
    <section className="section-py bg-bg-base overflow-hidden border-t border-border">
      <div className="page-container">
        <SectionHeading 
          eyebrow="Interactive" 
          title="Experience the architecture" 
          description="See exactly how the systems respond and process information."
          align="center"
        />

        <div className="mt-12">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center bg-bg-surface rounded-full p-1 border border-border">
              <button
                onClick={() => setActiveTab('voice')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'voice' ? 'bg-bg-alt text-text-primary shadow-sm border border-border' : 'text-text-secondary hover:text-text-primary border border-transparent'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Voice</span>
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'chat' ? 'bg-bg-alt text-text-primary shadow-sm border border-border' : 'text-text-secondary hover:text-text-primary border border-transparent'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Chat</span>
              </button>
              <button
                onClick={() => setActiveTab('workflow')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'workflow' ? 'bg-bg-alt text-text-primary shadow-sm border border-border' : 'text-text-secondary hover:text-text-primary border border-transparent'
                }`}
              >
                <Workflow className="w-4 h-4" />
                <span className="hidden sm:inline">Workflow</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'voice' && <VoiceDemo />}
                {activeTab === 'chat' && <ChatDemo />}
                {activeTab === 'workflow' && <WorkflowDemo />}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest">Interactive demonstration — responses generated dynamically</p>
          </div>
        </div>
      </div>
    </section>
  );
}
