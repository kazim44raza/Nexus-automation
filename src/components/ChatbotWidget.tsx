'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Minimize2, Maximize2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! 👋 I'm Nexus AI. I'm here to answer any questions about our automation services, or help you find the perfect solution for your business. What can I help you with today?",
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fix hydration mismatch by only rendering after mount
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now().toString(), role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    const newHistory = [...messages, userMessage];

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newHistory }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      
      if (!reader) throw new Error('No stream available');

      // Create a placeholder for the assistant's streaming message
      const assistantMessageId = (Date.now() + 1).toString();
      setMessages(prev => [
        ...prev,
        { id: assistantMessageId, role: 'assistant', content: '' }
      ]);
      setIsLoading(false); // We started receiving data

      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });
        
        if (chunkValue) {
          setMessages(prev => 
            prev.map(msg => 
              msg.id === assistantMessageId 
                ? { ...msg, content: msg.content + chunkValue } 
                : msg
            )
          );
        }
      }
    } catch (err) {
      console.error('Chat error:', err);
      setIsLoading(false);
      setError("I'm having trouble connecting to my brain right now. Please check if your API Key is set correctly in .env.local!");
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasHydrated) return null;

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-24 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] text-[#0A0A1A] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300"
            aria-label="Open Chatbot"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '550px' 
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 flex w-[90vw] sm:w-[400px] flex-col overflow-hidden rounded-2xl border border-[#00F0FF]/20 bg-[#0A0A1A]/95 shadow-[0_0_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,240,255,0.1)] backdrop-blur-xl"
            style={{ maxHeight: 'calc(100vh - 40px)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-gradient-to-r from-[#00F0FF]/10 to-[#3B82F6]/10 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00F0FF] to-[#3B82F6] shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <MessageCircle className="h-5 w-5 text-[#0A0A1A]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Nexus AI Agent</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-xs text-cyan-400">Online & Ready</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-white/[0.08] hover:text-white transition-colors"
                  aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-white/[0.08] hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
                  <div className="flex flex-col gap-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                            msg.role === 'user'
                              ? 'rounded-br-sm bg-gradient-to-r from-[#00F0FF] to-[#3B82F6] text-[#0A0A1A] font-medium shadow-[0_0_15px_rgba(0,240,255,0.15)] whitespace-pre-wrap'
                              : 'rounded-bl-sm border border-[#00F0FF]/20 bg-white/[0.03] text-slate-200 whitespace-pre-wrap'
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex items-start">
                        <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-[#00F0FF]/20 bg-white/[0.03] px-4 py-3">
                          <Loader2 className="h-4 w-4 animate-spin text-[#00F0FF]" />
                        </div>
                      </div>
                    )}
                    
                    {error && (
                      <div className="flex items-start mt-2">
                        <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                          {error}
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Input Area */}
                <form
                  onSubmit={handleSubmit}
                  className="border-t border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      disabled={isLoading}
                      className="w-full rounded-xl border border-white/[0.1] bg-[#0A0A1A] py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-[#00F0FF]/50 focus:ring-1 focus:ring-[#00F0FF]/50 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-[#00F0FF] transition-all hover:bg-[#00F0FF]/10 disabled:opacity-50 disabled:hover:bg-white/[0.05]"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-2 text-center text-[10px] text-slate-500">
                    Powered by Nexus Automation AI
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
