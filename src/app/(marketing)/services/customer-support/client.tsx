'use client';

import { motion } from 'framer-motion';
import { Headphones, ShieldAlert, Zap, HelpCircle, CheckCircle, Smartphone, BarChart, Server, Users, MessageSquare } from 'lucide-react';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function CustomerSupportClient() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-inter">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 rounded-bl-[100px] -z-10 opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium text-sm mb-8">
                <ShieldAlert className="w-4 h-4" /> Support Command Centre
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-manrope font-bold text-5xl md:text-7xl text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
                Resolve the routine. <br/>
                <span className="text-gray-400">Escalate the complex.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                An AI-powered command centre that handles common queries, seamlessly escalates nuanced issues to humans, and logs everything for deep analytics.
              </motion.p>
              <motion.div variants={fadeUp} className="flex gap-4">
                <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                  View Architecture
                </button>
              </motion.div>
            </motion.div>
            
            {/* Command Centre 3D Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-[#111827] rounded-3xl p-8 shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">System Active</span>
                  </div>
                  <div className="text-sm text-gray-500">Live Telemetry</div>
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Row 1: AI Resolved */}
                  <div className="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Routine: Password Reset</span>
                        <span className="text-emerald-400 font-medium">Auto-Resolved</span>
                      </div>
                      <div className="text-xs text-gray-500">Confidence: 99.8% • Time: 1.2s</div>
                    </div>
                  </div>

                  {/* Row 2: Human Escalate */}
                  <div className="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Complex: API Integration</span>
                        <span className="text-amber-400 font-medium">Escalated</span>
                      </div>
                      <div className="text-xs text-gray-500">Confidence: 42.1% • Routing to Tier 2</div>
                    </div>
                  </div>
                  
                  {/* Row 3: Data logged */}
                  <div className="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <BarChart className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Analytics Update</span>
                        <span className="text-blue-400 font-medium">Synced</span>
                      </div>
                      <div className="text-xs text-gray-500">Conversation summary & sentiment logged to CRM</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spatial Workflow Diagram */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">The Resolution Pipeline</h2>
            <p className="text-lg text-gray-600 font-light">
              Watch how an inquiry moves from arrival to resolution.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />

            {[
              { title: "Request Received", desc: "Omnichannel ingestion from Chat, Email, or Social.", icon: MessageSquare, align: "right" },
              { title: "Knowledge Search", desc: "AI instantly scans internal KB and historical tickets.", icon: Server, align: "left" },
              { title: "Confidence Calculated", desc: "System evaluates if it can safely answer without hallucinating.", icon: Zap, align: "right" },
              { title: "Response Generated", desc: "Context-aware reply formulated in brand voice.", icon: CheckCircle, align: "left" },
              { title: "Ticket Resolved or Escalated", desc: "Issue closed automatically, or handed off with full summary.", icon: ShieldAlert, align: "right" },
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-center mb-12 ${step.align === 'left' ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`hidden md:block w-1/2 ${step.align === 'left' ? 'pl-12' : 'pr-12 text-right'}`}>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center md:-translate-x-1/2 z-10">
                  <step.icon className="w-6 h-6 text-gray-700" />
                </div>
                
                <div className="pl-20 md:hidden pb-4">
                  <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Split Layout */}
      <section className="py-32 bg-[#0B0F19] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Instant KB Access", value: "< 200ms", icon: Server },
                  { title: "Deflection Rate", value: "Up to 60%", icon: ShieldAlert },
                  { title: "Channels Supported", value: "8+", icon: Smartphone },
                  { title: "Human Escalations", value: "Context-Rich", icon: Users }
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#131A2B] border border-gray-800">
                    <stat.icon className="w-6 h-6 text-gray-500 mb-4" />
                    <div className="text-2xl font-light mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.title}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="font-manrope text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Scale support without scaling headcount.
              </h2>
              <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">
                By handling the repetitive 60% of inquiries, your human agents are freed to focus on high-value, relationship-building interactions that actually require empathy.
              </p>
              <ul className="space-y-4">
                {[
                  "No more repetitive copy-pasting.",
                  "Zero wait times for customers.",
                  "Agents step in with full context."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
}
