'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Stethoscope, ShieldPlus, Scale, Home, 
  Wrench, Dumbbell, ShoppingCart, Briefcase,
  MessageSquare, CheckCircle2, ArrowRight
} from 'lucide-react';

const industries = [
  {
    id: 'dental',
    name: 'Dental',
    icon: Stethoscope,
    request: "I need to book a cleaning for next week",
    action: ["Checks availability", "Captures patient details", "Books appointment", "Sends confirmation"],
    benefit: "Reception coverage during busy and after-hours periods"
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: ShieldPlus,
    request: "I'd like to schedule a follow-up with Dr. Johnson",
    action: ["Verifies patient info", "Checks doctor availability", "Books appointment", "Sends reminder"],
    benefit: "Reduced front-desk workload and faster patient scheduling"
  },
  {
    id: 'legal',
    name: 'Legal',
    icon: Scale,
    request: "I need a consultation about a contract dispute",
    action: ["Captures case details", "Routes to practice area", "Schedules consultation", "Sends intake form"],
    benefit: "Faster client intake without attorney interruption"
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: Home,
    request: "I saw the listing on Oak Street — is it still available?",
    action: ["Confirms availability", "Qualifies buyer interest", "Schedules viewing", "Notifies agent"],
    benefit: "Instant lead response before competitors"
  },
  {
    id: 'homeservices',
    name: 'Home Services',
    icon: Wrench,
    request: "My AC stopped working — can someone come today?",
    action: ["Captures issue details", "Checks technician availability", "Books urgent appointment", "Sends confirmation"],
    benefit: "Faster dispatch and fewer missed service requests"
  },
  {
    id: 'fitness',
    name: 'Fitness',
    icon: Dumbbell,
    request: "I'd like to try a free class this week",
    action: ["Shows class schedule", "Captures contact info", "Books trial class", "Sends welcome info"],
    benefit: "Higher trial-to-membership conversion"
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: ShoppingCart,
    request: "Where's my order? It was supposed to arrive yesterday",
    action: ["Looks up order status", "Provides tracking info", "Offers resolution", "Escalates if needed"],
    benefit: "Reduced support tickets and faster resolution"
  },
  {
    id: 'professional',
    name: 'Professional Services',
    icon: Briefcase,
    request: "I'd like to discuss your consulting packages",
    action: ["Qualifies business needs", "Explains service tiers", "Schedules discovery call", "Sends proposal"],
    benefit: "Automated lead qualification and booking"
  }
];

export function IndustrySelector() {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section className="section-py bg-bg-alt">
      <div className="page-container">
        <SectionHeading 
          eyebrow="Industries" 
          title="Built for your industry" 
          align="center" 
        />
        
        {/* Scrollable Tabs */}
        <div className="mt-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-center gap-2 md:justify-center min-w-max px-4 md:px-0">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab.id === industry.id 
                    ? 'bg-accent text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <industry.icon className="w-4 h-4" />
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="mt-8 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-surface rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="grid md:grid-cols-2">
                {/* Left: Info */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <activeTab.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="heading-md">{activeTab.name}</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Common Customer Request
                      </p>
                      <div className="bg-gray-50 rounded-2xl rounded-tl-sm p-4 text-gray-800 border border-gray-100 inline-block">
                        "{activeTab.request}"
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        AI Action
                      </p>
                      <ul className="space-y-2">
                        {activeTab.action.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Operational Benefit
                      </p>
                      <p className="text-gray-800 font-medium">
                        {activeTab.benefit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Mock UI Preview */}
                <div className="p-8 md:p-12 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
                  
                  <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/80 backdrop-blur flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">AI Assistant</p>
                        <p className="text-xs text-green-500 font-medium">Online</p>
                      </div>
                    </div>
                    <div className="p-4 space-y-4 h-64 overflow-y-auto">
                      <div className="flex justify-end">
                        <div className="bg-accent text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
                          {activeTab.request}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                           <MessageSquare className="w-3 h-3 text-accent" />
                        </div>
                        <div className="space-y-2 max-w-[85%]">
                          <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm text-sm">
                            I can help with that. Let me check the schedule for you.
                          </div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-sm text-sm"
                          >
                            I found an opening that works. Would you like me to book it?
                          </motion.div>
                          
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col gap-1 mt-2"
                          >
                            <button className="text-xs bg-white border border-accent text-accent py-1.5 px-3 rounded-full font-medium hover:bg-accent/5 transition-colors w-full text-left flex justify-between items-center">
                              Yes, book it
                              <ArrowRight className="w-3 h-3" />
                            </button>
                            <button className="text-xs bg-white border border-gray-200 text-gray-600 py-1.5 px-3 rounded-full font-medium hover:bg-gray-50 transition-colors w-full text-left">
                              See other times
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
