'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Send, MoreHorizontal, User, Sparkles } from 'lucide-react';

export function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ChatbotHeroVisual() {
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);
  const [score, setScore] = useState(45);
  
  const conversation = [
    { role: 'bot', text: 'Hi! How can I help you today?' },
    { role: 'user', text: "I'm looking for appointment booking automation" },
    { role: 'bot', text: 'Great choice! We can automate your entire booking flow. What industry are you in?' },
    { role: 'user', text: 'Dental clinic' },
    { role: 'bot', text: 'Perfect! For dental clinics, we automate patient intake, scheduling, reminders, and follow-ups. Would you like to see a demo?' }
  ];

  useEffect(() => {
    let currentIndex = 0;
    
    const showNextMessage = () => {
      if (currentIndex < conversation.length) {
        setMessages(conversation.slice(0, currentIndex + 1));
        
        // Update score based on progression
        if (currentIndex === 2) setScore(72);
        if (currentIndex === 4) setScore(89);
        
        currentIndex++;
        setTimeout(showNextMessage, currentIndex % 2 === 0 ? 1500 : 2500); // Users type slower
      }
    };
    
    const timeout = setTimeout(showNextMessage, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      {/* Decorative glows */}
      <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full" />
      
      {/* Browser Window Card */}
      <div className="relative card glass border border-white/10 rounded-2xl shadow-2xl bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl overflow-hidden flex flex-col h-[500px]">
        
        {/* Browser Chrome */}
        <div className="bg-gray-100 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 p-3 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-md px-3 py-1 text-xs text-gray-500 flex-1 mx-4 text-center truncate">
            nexusautomation.ai
          </div>
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </div>

        {/* Lead Score Widget (Floating) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-16 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 shadow-lg rounded-xl p-3 flex items-center gap-3 z-10"
        >
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Lead Score</span>
            <span className="text-xl font-bold text-purple-600 dark:text-purple-400 leading-none">{score}</span>
          </div>
          <div className="h-10 w-10 rounded-full border-2 border-purple-500/20 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500/20" />
              <motion.circle 
                cx="18" cy="18" r="16" 
                fill="none" stroke="currentColor" strokeWidth="2" 
                className="text-purple-500"
                strokeDasharray="100"
                animate={{ strokeDashoffset: 100 - score }}
                transition={{ duration: 1 }}
              />
            </svg>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
        </motion.div>

        {/* Chat Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 pt-12">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              {msg.role === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
              
              <div className={`p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-purple-600 text-white rounded-tr-sm' 
                  : 'bg-gray-100 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-tl-sm border border-gray-200 dark:border-white/5'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          
          {/* Quick Replies (show at end) */}
          {messages.length === conversation.length && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 ml-11 pt-2"
            >
              <button className="text-xs px-3 py-1.5 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 rounded-full hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors">
                Book a Demo
              </button>
              <button className="text-xs px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                See Pricing
              </button>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-black/20">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-purple-500"
              disabled
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center">
              <Send className="w-3 h-3 text-white ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
