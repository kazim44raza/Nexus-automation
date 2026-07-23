"use client";

import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Search, 
  UserPlus, 
  TrendingUp, 
  Calendar, 
  Database,
  ArrowRight,
  Maximize2
} from "lucide-react";
import { useState, useEffect } from "react";

export function ChatbotsClient() {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    { id: 0, label: "Visitor Enters", icon: Maximize2 },
    { id: 1, label: "Chat Starts", icon: MessageCircle },
    { id: 2, label: "Intent Recognized", icon: Search },
    { id: 3, label: "KB Searched", icon: Database },
    { id: 4, label: "Lead Captured", icon: UserPlus },
    { id: 5, label: "Score +10", icon: TrendingUp },
    { id: 6, label: "Consult Booked", icon: Calendar },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [nodes.length]);

  return (
    <section className="relative min-h-[90vh] bg-slate-50 text-slate-900 flex items-center overflow-hidden font-sans pt-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent" />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-5 space-y-8 font-inter relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight font-manrope mb-6 text-slate-900">
              Intelligent Chat <br />
              <span className="text-blue-600">Spatial Workflows</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg">
              Automate customer journeys with context-aware chatbots that search knowledge bases, score leads, and update your CRM instantly.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex flex-col gap-3 relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 -z-10" />
              
              {nodes.map((node, i) => (
                <motion.div 
                  key={node.id}
                  className="flex items-center space-x-4"
                  animate={{
                    opacity: activeNode >= i ? 1 : 0.4,
                    x: activeNode === i ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm transition-colors duration-300 ${activeNode === i ? 'bg-blue-600 border-blue-500 text-white' : activeNode > i ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                    <node.icon size={20} />
                  </div>
                  <span className={`font-medium ${activeNode === i ? 'text-blue-700' : 'text-slate-600'}`}>
                    {node.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Spatial Environment */}
        <div className="lg:col-span-7 relative h-[600px] perspective-[1200px]">
          <motion.div 
            className="absolute inset-0 flex items-center justify-center transform-style-3d"
            initial={{ rotateX: 10, rotateY: -15 }}
            animate={{ rotateX: 5, rotateY: -5 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            
            {/* Background Browser Window */}
            <div className="absolute w-[500px] h-[400px] bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform -translate-z-20 -translate-y-10 translate-x-10 opacity-60">
              <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-8 opacity-20">
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-4" />
                <div className="h-4 bg-slate-200 rounded w-full mb-2" />
                <div className="h-4 bg-slate-200 rounded w-5/6 mb-8" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-slate-200 rounded" />
                  <div className="h-24 bg-slate-200 rounded" />
                  <div className="h-24 bg-slate-200 rounded" />
                </div>
              </div>
            </div>

            {/* Foreground Chat Interface */}
            <div className="absolute w-[400px] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden transform translate-z-20 flex flex-col h-[500px]">
              <div className="p-4 bg-blue-600 text-white flex justify-between items-center shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Nexus Support</h3>
                    <p className="text-xs text-blue-200">Online</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6 space-y-6 overflow-hidden relative">
                {/* Simulated Chat Messages based on activeNode */}
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: activeNode >= 1 ? 1 : 0, y: activeNode >= 1 ? 0 : 10 }}
                    className="flex space-x-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0" />
                    <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700">
                      Hi there! How can I help you optimize your workflows today?
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: activeNode >= 2 ? 1 : 0, y: activeNode >= 2 ? 0 : 10 }}
                    className="flex justify-end space-x-2"
                  >
                    <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none text-sm">
                      I need help integrating my CRM.
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: activeNode >= 3 ? 1 : 0, y: activeNode >= 3 ? 0 : 10 }}
                    className="flex space-x-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0" />
                    <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700">
                      <div className="flex items-center space-x-2 mb-2 text-xs text-slate-500 font-medium">
                        <Database size={12} />
                        <span>Searching Knowledge Base...</span>
                      </div>
                      I can help with that. We support Salesforce and HubSpot natively. Which one do you use?
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: activeNode >= 6 ? 1 : 0, scale: activeNode >= 6 ? 1 : 0.9 }}
                    className="mt-4 bg-white border border-slate-200 p-4 rounded-xl shadow-sm text-center"
                  >
                    <Calendar className="mx-auto text-blue-600 mb-2" size={24} />
                    <p className="text-sm font-semibold text-slate-900">Consultation Booked</p>
                    <p className="text-xs text-slate-500">Tomorrow at 10:00 AM</p>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <div className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-400 flex justify-between items-center">
                  <span>Type a message...</span>
                  <ArrowRight size={16} className="text-slate-400" />
                </div>
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div 
              className="absolute top-10 -right-10 bg-white p-3 rounded-xl shadow-lg border border-slate-100 transform translate-z-40 flex items-center space-x-3"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                <TrendingUp size={16} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Lead Score</p>
                <p className="text-sm font-bold text-slate-900">+10 Points</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
