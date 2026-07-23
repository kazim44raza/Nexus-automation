'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Phone, Video, MoreVertical, Send, Check, CheckCheck, Smile } from 'lucide-react';

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

export function WhatsAppHeroVisual() {
  const [messages, setMessages] = useState<{role: string, text: string, time: string, status?: 'sent'|'delivered'|'read'}[]>([]);
  
  const conversation = [
    { role: 'user', text: "Hi, I'd like to book a service appointment", time: "10:42 AM", status: 'read' as const },
    { role: 'bot', text: "Welcome to AutoFix! 🚗 I'd be happy to help. What service do you need?", time: "10:42 AM" },
    { role: 'user', text: "Oil change for my Honda Civic", time: "10:43 AM", status: 'read' as const },
    { role: 'bot', text: "Great! I have availability tomorrow at 10:00 AM or 2:00 PM. Which works best for you?", time: "10:43 AM" },
    { role: 'user', text: "10 AM please", time: "10:44 AM", status: 'read' as const },
    { role: 'bot', text: "✅ Booked! Oil change for Honda Civic, tomorrow at 10 AM. You'll receive a reminder here 1 hour before.", time: "10:44 AM" }
  ];

  useEffect(() => {
    let currentIndex = 0;
    
    const showNextMessage = () => {
      if (currentIndex < conversation.length) {
        setMessages(conversation.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(showNextMessage, currentIndex % 2 === 0 ? 1200 : 2000);
      }
    };
    
    const timeout = setTimeout(showNextMessage, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* Decorative glows */}
      <div className="absolute -inset-10 bg-[#25D366]/20 blur-3xl rounded-full" />
      
      {/* Phone Mockup Card */}
      <div className="relative bg-gray-900 border-[8px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden h-[600px] flex flex-col">
        {/* Dynamic Island / Notch area */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
          <div className="w-32 h-6 bg-gray-800 rounded-b-2xl" />
        </div>

        {/* WhatsApp Header */}
        <div className="bg-[#075E54] text-white pt-10 pb-3 px-4 flex items-center justify-between z-10 shadow-md">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Auto+Fix&background=25D366&color=fff" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[15px]">AutoFix Service</span>
              <span className="text-[11px] text-white/80">bot • always available</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Video className="w-5 h-5 opacity-80" />
            <Phone className="w-5 h-5 opacity-80" />
            <MoreVertical className="w-5 h-5 opacity-80" />
          </div>
        </div>

        {/* Chat Background */}
        <div className="flex-1 overflow-y-auto bg-[#efeae2] dark:bg-[#0b141a] p-4 space-y-3 relative z-0">
          {/* WA Background Pattern (Simplified) */}
          <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83-2.69 2.69a23.957 23.957 0 0 0-4.043-2.029L54.627 0zm-5.1 0l-3.3 3.3a24.038 24.038 0 0 0-4.25-1.5L44.8 0h4.727zm-5.727 0l-1.92 1.92a23.952 23.952 0 0 0-4.64-.78L38.455 0h5.346zM32.8 0l-.82.82a23.952 23.952 0 0 0-4.64.78L29.273 0h3.527zm-4.727 0l-3.3-3.3a24.038 24.038 0 0 0-4.25 1.5L23.345 0h4.728zm-5.727 0l-2.69-2.69a23.957 23.957 0 0 0-4.043 2.029L21.4 0h.945zm-6.173 0L.98 15.193A24.008 24.008 0 0 0 0 19.347V0h16.173zM0 20.327l12.18 12.18a23.952 23.952 0 0 0-.78 4.64L0 25.673v-5.346zm0 6.327l9.46 9.46a24.038 24.038 0 0 0 1.5 4.25L0 29.418v-2.764zm0 4.218l6.76 6.76a23.957 23.957 0 0 0 2.029 4.043L0 31.854v-1.02zm0 2.19l3.89 3.89a23.952 23.952 0 0 0 2.47 3.52L0 34.02v-1.02zm0 2.155l.98.98a24.008 24.008 0 0 0 4.154 3.193L0 36.327v-1.02zm0 2.154l2.18 2.18a24.008 24.008 0 0 0 3.193-4.154L0 38.481v-1.02z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`}}>
          </div>

          <div className="flex justify-center mb-4">
            <span className="bg-[#E1F3FB] dark:bg-[#182229] text-[#54656f] dark:text-gray-300 text-[11px] py-1 px-3 rounded-lg shadow-sm">
              Today
            </span>
          </div>

          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`relative max-w-[85%] rounded-lg px-2 pt-2 pb-1 text-[14.5px] shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-[#d9fdd3] dark:bg-[#005c4b] rounded-tr-none text-gray-900 dark:text-[#e9edef]' 
                  : 'bg-white dark:bg-[#202c33] rounded-tl-none text-gray-900 dark:text-[#e9edef]'
              }`}>
                {/* Tail */}
                <svg viewBox="0 0 8 13" width="8" height="13" className={`absolute top-0 ${msg.role === 'user' ? '-right-2 text-[#d9fdd3] dark:text-[#005c4b]' : '-left-2 text-white dark:text-[#202c33]'}`}>
                  <path opacity="1" fill="currentColor" d={msg.role === 'user' ? "M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z" : "M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"}></path>
                </svg>
                
                <div className="leading-snug pr-2 pb-3">{msg.text}</div>
                
                <div className="absolute right-2 bottom-1 flex items-center gap-1">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 leading-none">{msg.time}</span>
                  {msg.role === 'user' && (
                    <span className={`text-[14px] ${msg.status === 'read' ? 'text-[#53bdeb]' : 'text-gray-500'}`}>
                      <CheckCheck className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WA Input Area */}
        <div className="bg-[#f0f2f5] dark:bg-[#202c33] p-2 flex items-center gap-2">
          <Smile className="w-6 h-6 text-gray-500 mx-1 flex-shrink-0" />
          <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-full py-2 px-4 shadow-sm text-[15px] text-gray-400">
            Message
          </div>
          <div className="w-10 h-10 rounded-full bg-[#00a884] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-white transform translate-x-[2px]">
              <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
            </svg>
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="h-1 bg-[#f0f2f5] dark:bg-[#202c33] pb-2 flex justify-center">
          <div className="w-1/3 h-1 bg-gray-400/50 rounded-full mt-1"></div>
        </div>
      </div>
    </div>
  );
}
