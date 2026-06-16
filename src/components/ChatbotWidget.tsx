'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X, Minimize2, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! 👋 I'm Nexus AI Assistant. I'm here to help you with our automation services, answer questions, and get you started with the perfect solution for your business. What can I help you with today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I apologize, but I'm having trouble responding right now. Please try again in a moment, or contact our team at support@nexusautomation.com",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-nexus-cyan to-nexus-blue flex items-center justify-center shadow-lg text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className={`fixed z-50 right-6 bg-[#0A0A1A] border border-nexus-cyan/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            isMinimized
              ? 'bottom-6 w-80 h-14'
              : 'bottom-6 w-80 h-[600px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-nexus-cyan/10 to-nexus-blue/10 border-b border-nexus-cyan/20 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-nexus-cyan animate-pulse" />
              <div>
                <h3 className="text-white font-semibold text-sm">
                  Nexus AI Assistant
                </h3>
                <p className="text-nexus-cyan/70 text-xs">Always here to help</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 hover:bg-nexus-cyan/10 rounded-lg transition-colors"
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4 text-nexus-cyan" />
                ) : (
                  <Minimize2 className="w-4 h-4 text-nexus-cyan" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-nexus-cyan/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-nexus-cyan" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      message.role === 'user'
                        ? 'justify-end'
                        : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-nexus-cyan/20 text-white rounded-br-none'
                          : 'bg-nexus-blue/20 text-gray-100 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 items-center"
                  >
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-nexus-cyan/50 animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-nexus-cyan/50 animate-bounce delay-100" />
                      <div className="w-2 h-2 rounded-full bg-nexus-cyan/50 animate-bounce delay-200" />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSendMessage}
                className="border-t border-nexus-cyan/20 p-4 flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 bg-nexus-blue/10 border border-nexus-cyan/30 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-nexus-cyan/60 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-nexus-cyan to-nexus-blue p-2 rounded-lg text-white hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </motion.div>
      )}
    </>
  );
}
