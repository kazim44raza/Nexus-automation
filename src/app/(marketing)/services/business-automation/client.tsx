"use client";

import { motion } from "framer-motion";
import { Workflow, Mail, Calendar, Database, CheckSquare, MessageSquare, Zap, AlertCircle } from "lucide-react";
import React, { useState } from "react";

const nodes = [
  { id: 'trigger', type: 'trigger', icon: Zap, label: 'New Lead Form', x: 10, y: 50, connections: ['ai-decision'] },
  { id: 'ai-decision', type: 'ai', icon: Workflow, label: 'AI Qualifier', x: 35, y: 50, connections: ['crm', 'email'] },
  { id: 'crm', type: 'action', icon: Database, label: 'Update CRM', x: 65, y: 20, connections: ['human'] },
  { id: 'email', type: 'action', icon: Mail, label: 'Send Follow-up', x: 65, y: 80, connections: ['whatsapp'] },
  { id: 'human', type: 'action', icon: CheckSquare, label: 'Manager Approval', x: 90, y: 20, connections: [] },
  { id: 'whatsapp', type: 'action', icon: MessageSquare, label: 'WhatsApp Alert', x: 90, y: 80, connections: [] },
];

export default function BusinessAutomationClient() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Helper to determine if a node is active in the current path
  const isNodeActive = (id: string) => {
    if (!hoveredNode) return false;
    if (id === hoveredNode) return true;
    
    // Simple path tracing
    if (hoveredNode === 'human') return ['trigger', 'ai-decision', 'crm', 'human'].includes(id);
    if (hoveredNode === 'whatsapp') return ['trigger', 'ai-decision', 'email', 'whatsapp'].includes(id);
    if (hoveredNode === 'crm') return ['trigger', 'ai-decision', 'crm'].includes(id);
    if (hoveredNode === 'email') return ['trigger', 'ai-decision', 'email'].includes(id);
    if (hoveredNode === 'ai-decision') return ['trigger', 'ai-decision'].includes(id);
    if (hoveredNode === 'trigger') return ['trigger'].includes(id);
    
    return false;
  };

  const isConnectionActive = (source: string, target: string) => {
    if (!hoveredNode) return false;
    return isNodeActive(source) && isNodeActive(target);
  };

  return (
    <div className="min-h-screen bg-[#111] text-slate-200 overflow-hidden font-inter selection:bg-indigo-500/30 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/20"
          >
            <Workflow className="w-4 h-4" />
            <span>Business Automation</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight font-manrope mb-6 text-white"
          >
            Orchestrate your entire business visually.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            Connect triggers to AI decisions and automated actions. Hover over any node in the canvas below to trace its data route.
          </motion.p>
        </div>

        {/* Node Canvas Hero */}
        <div className="relative w-full h-[600px] bg-[#161616] rounded-[32px] border border-slate-800 overflow-x-auto overflow-y-hidden mb-24 hide-scrollbar">
           {/* Background Grid */}
           <div className="absolute inset-0 opacity-[0.03] min-w-[800px]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
           
           <div className="relative w-full h-full min-w-[800px] max-w-4xl mx-auto p-8">
             {/* Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
               <defs>
                 <linearGradient id="activeLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                 </linearGradient>
               </defs>
               
               {/* Trigger -> AI */}
               <path d="M 10% 50% L 35% 50%" stroke={isConnectionActive('trigger', 'ai-decision') ? 'url(#activeLine)' : '#333'} strokeWidth={isConnectionActive('trigger', 'ai-decision') ? 3 : 2} fill="none" className="transition-all duration-300" />
               
               {/* AI -> CRM */}
               <path d="M 35% 50% C 50% 50%, 50% 20%, 65% 20%" stroke={isConnectionActive('ai-decision', 'crm') ? 'url(#activeLine)' : '#333'} strokeWidth={isConnectionActive('ai-decision', 'crm') ? 3 : 2} fill="none" className="transition-all duration-300" />
               
               {/* AI -> Email */}
               <path d="M 35% 50% C 50% 50%, 50% 80%, 65% 80%" stroke={isConnectionActive('ai-decision', 'email') ? 'url(#activeLine)' : '#333'} strokeWidth={isConnectionActive('ai-decision', 'email') ? 3 : 2} fill="none" className="transition-all duration-300" />

               {/* CRM -> Human */}
               <path d="M 65% 20% L 90% 20%" stroke={isConnectionActive('crm', 'human') ? 'url(#activeLine)' : '#333'} strokeWidth={isConnectionActive('crm', 'human') ? 3 : 2} fill="none" className="transition-all duration-300" />

               {/* Email -> WhatsApp */}
               <path d="M 65% 80% L 90% 80%" stroke={isConnectionActive('email', 'whatsapp') ? 'url(#activeLine)' : '#333'} strokeWidth={isConnectionActive('email', 'whatsapp') ? 3 : 2} fill="none" className="transition-all duration-300" />
             </svg>

             {/* Nodes */}
             {nodes.map(node => {
               const active = isNodeActive(node.id);
               
               return (
                 <motion.div
                   key={node.id}
                   onMouseEnter={() => setHoveredNode(node.id)}
                   onMouseLeave={() => setHoveredNode(null)}
                   style={{ left: `${node.x}%`, top: `${node.y}%`, x: '-50%', y: '-50%' }}
                   className={`absolute cursor-pointer transition-all duration-300 ${active ? 'scale-110 z-10' : 'scale-100 z-0 opacity-70'}`}
                 >
                   <div className={`p-4 rounded-xl flex items-center gap-3 backdrop-blur-md border ${
                     active 
                       ? 'bg-slate-900 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]' 
                       : 'bg-[#1a1a1a] border-slate-800'
                   }`}>
                     <div className={`p-2 rounded-lg ${active ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-400'}`}>
                       <node.icon className="w-5 h-5" />
                     </div>
                     <span className={`text-sm font-medium ${active ? 'text-white' : 'text-slate-400'}`}>{node.label}</span>
                   </div>
                 </motion.div>
               );
             })}
           </div>
        </div>

        {/* Supporting Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src="/images/business_automation_scene.jpg" 
              alt="Professional reviewing automated workflows" 
              className="w-full h-auto object-cover opacity-90"
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
          </div>
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-semibold tracking-tight font-manrope mb-6 text-white">
                Review work, don't just do data entry.
              </h2>
              <p className="text-lg text-slate-400 mb-6">
                Instead of manually copying data between systems, let automation handle the repetitive tasks. Your team can focus on reviewing completed workflows, making strategic decisions, and handling exceptions that require human judgment.
              </p>
              <ul className="space-y-4">
                {[
                  "Captures incoming lead information automatically.",
                  "Routes data to the correct CRM fields without manual entry.",
                  "Notifies your team only when human approval is needed."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <CheckSquare className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
