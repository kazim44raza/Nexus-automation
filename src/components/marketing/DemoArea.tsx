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
    <div className="max-w-2xl mx-auto bg-gray-900 rounded-2xl border border-gray-800 p-6 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={togglePlay}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              isPlaying ? 'bg-red-500/20 text-red-500 hover:bg-red-500/30' : 'bg-accent/20 text-accent hover:bg-accent/30'
            }`}
          >
            {isPlaying ? <Square className="w-5 h-5 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>
          <div>
            <h4 className="text-white font-medium">Inbound Call</h4>
            <p className="text-gray-400 text-sm font-mono">{formatTime(duration)}</p>
          </div>
        </div>

        {/* Waveform */}
        <div className="flex items-center gap-1 h-10 px-4">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 bg-accent rounded-full"
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

      <div className="space-y-4 min-h-[250px] bg-gray-950 p-4 rounded-xl border border-gray-800 overflow-hidden">
        <AnimatePresence>
          {transcript.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${line.speaker === 'Caller' ? 'items-end' : 'items-start'}`}
            >
              <span className="text-xs text-gray-500 mb-1">{line.speaker}</span>
              <div className={`px-4 py-2 rounded-2xl max-w-[85%] text-sm ${
                line.speaker === 'Caller' ? 'bg-gray-800 text-gray-200 rounded-tr-sm' : 'bg-accent/20 text-accent-light rounded-tl-sm'
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
              className="flex items-center gap-2 text-gray-500 text-sm p-2"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Listening...
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="bg-gray-800 px-3 py-1.5 rounded-md text-xs font-medium text-gray-300">
          Intent: Booking
        </div>
        <div className="bg-gray-800 px-3 py-1.5 rounded-md text-xs font-medium text-gray-300">
          Confidence: 98%
        </div>
      </div>
    </div>
  );
}

function ChatDemo() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! Welcome to Nexus Automation. What can I help you with today?' }
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
    <div className="max-w-md mx-auto bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
      <div className="bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-700">
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-white text-sm font-medium">Nexus Assistant</h4>
          <p className="text-green-400 text-xs">Online</p>
        </div>
      </div>
      
      <div className="p-4 h-[350px] overflow-y-auto space-y-4 bg-gray-950">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`px-4 py-2 rounded-2xl max-w-[85%] text-sm ${
              msg.role === 'user' ? 'bg-accent text-white rounded-tr-sm' : 'bg-gray-800 text-gray-200 rounded-tl-sm'
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
                className="bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs px-4 py-2 rounded-full border border-gray-700 transition-colors"
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </div>
      
      <div className="p-3 bg-gray-900 border-t border-gray-800">
        <div className="bg-gray-950 rounded-full border border-gray-700 flex items-center px-4 py-2">
          <span className="text-gray-500 text-sm flex-1">Type a message...</span>
          <ArrowRight className="w-4 h-4 text-gray-500" />
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
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0" />
        <div className="md:hidden absolute left-1/2 top-0 h-full w-1 bg-gray-800 -translate-x-1/2 z-0" />

        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          const isPast = activeNode > node.id;
          
          return (
            <div key={node.id} className="relative z-10 flex flex-col items-center gap-3 bg-gray-950 p-2">
              <motion.div
                animate={{
                  backgroundColor: isActive ? 'rgb(6 182 212 / 0.2)' : isPast ? 'rgb(6 182 212 / 0.1)' : 'rgb(31 41 55)',
                  borderColor: isActive || isPast ? 'rgb(6 182 212)' : 'rgb(55 65 81)',
                  scale: isActive ? 1.1 : 1,
                }}
                className="w-12 h-12 rounded-xl border-2 flex items-center justify-center shadow-lg transition-colors"
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeDot"
                    className="w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]" 
                  />
                )}
                {isPast && !isActive && <div className="w-2 h-2 bg-accent rounded-full opacity-50" />}
              </motion.div>
              <span className={`text-xs font-medium whitespace-nowrap px-2 py-1 rounded-md ${
                isActive ? 'text-accent bg-accent/10' : 'text-gray-500'
              }`}>
                {node.label}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 bg-gray-800 h-2 rounded-full overflow-hidden max-w-md mx-auto">
        <motion.div 
          className="h-full bg-accent"
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
    <section className="section-py bg-gray-950 section-dark overflow-hidden">
      <div className="page-container">
        <SectionHeading 
          eyebrow="Try It" 
          title="Experience the AI in action" 
          description="Interact with our live automation demos below to see exactly how the AI responds and processes information."
          align="center" 
          dark={true}
        />

        <div className="mt-12">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center bg-gray-900 rounded-full p-1 border border-gray-800">
              <button
                onClick={() => setActiveTab('voice')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'voice' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Listen to Voice Agent</span>
                <span className="sm:hidden">Voice</span>
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'chat' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Try AI Chatbot</span>
                <span className="sm:hidden">Chat</span>
              </button>
              <button
                onClick={() => setActiveTab('workflow')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'workflow' ? 'bg-gray-800 text-white shadow-sm' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <Workflow className="w-4 h-4" />
                <span className="hidden sm:inline">View Workflow</span>
                <span className="sm:hidden">Workflow</span>
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
            <p className="text-gray-500 text-sm">Interactive demonstration — actual AI responses may vary</p>
          </div>
        </div>
      </div>
    </section>
  );
}
