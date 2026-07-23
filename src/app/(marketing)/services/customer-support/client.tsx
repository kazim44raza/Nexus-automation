'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Headphones, HelpCircle, Mail, MessageSquare, Phone, ShieldAlert, Zap, Smartphone } from 'lucide-react';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';

export default function CustomerSupportClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="section-py relative overflow-hidden">
        <div className="page-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-2xl">
              <motion.div variants={itemVariants} className="badge-accent mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] font-medium text-sm">
                <Headphones className="w-4 h-4" /> 24/7 AI Agent
              </motion.div>
              <motion.h1 variants={itemVariants} className="heading-display mb-6 font-bold text-5xl md:text-6xl text-[#1A1A1A] leading-tight">
                Resolve routine requests instantly. Escalate the rest <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] to-blue-600">intelligently.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed">
                AI-powered customer support that handles common questions, searches your knowledge base, resolves tickets, and escalates complex issues to the right team member — across every channel.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="btn-primary-lg bg-[#06B6D4] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#06B6D4]/90 transition-all flex items-center gap-2">
                  Upgrade Your Support
                </button>
              </motion.div>
            </motion.div>
            
            {/* Command Centre Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="card bg-[#111827] text-white p-6 rounded-2xl shadow-2xl border border-gray-800 font-sans">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
                  <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-200">
                    <ShieldAlert className="w-5 h-5 text-[#06B6D4]"/> Support Command Centre
                  </h3>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-gray-400">System Online</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                    <div className="text-xs text-gray-400 mb-1">Open Tickets</div>
                    <div className="text-xl font-bold">12</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                    <div className="text-xs text-gray-400 mb-1">Avg Resolution</div>
                    <div className="text-xl font-bold">45s</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                    <div className="text-xs text-gray-400 mb-1">AI Resolved</div>
                    <div className="text-xl font-bold text-green-400">84%</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                    <div className="text-xs text-gray-400 mb-1">Satisfaction</div>
                    <div className="text-xl font-bold">4.8/5</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Live Activity</h4>
                  
                  {/* Ticket 1 */}
                  <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-200">Order status inquiry</div>
                        <div className="text-xs text-gray-500">ID: #4092</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-green-400">AI Resolved ✓</div>
                      <div className="text-xs text-gray-500">23s ago</div>
                    </div>
                  </div>

                  {/* Ticket 2 */}
                  <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-200">Billing question</div>
                        <div className="text-xs text-gray-500">ID: #4093</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-green-400">AI Resolved ✓</div>
                      <div className="text-xs text-gray-500">38s ago</div>
                    </div>
                  </div>

                  {/* Ticket 3 */}
                  <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-200">Technical issue</div>
                        <div className="text-xs text-gray-500">ID: #4094</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-amber-400">Escalated (Tech)</div>
                      <div className="text-xs text-gray-500">1m 12s ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Flow Section */}
      <section className="section-py bg-white border-y border-gray-100">
        <div className="page-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-lg text-3xl font-bold mb-4">How AI Support Works</h2>
            <p className="text-gray-600">A sophisticated decision engine that guarantees the right outcome for every inquiry.</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: HelpCircle, title: 'Inquiry Received', desc: 'Customer asks a question via any channel' },
                { icon: Zap, title: 'Knowledge Search', desc: 'AI scans your docs, FAQs, and history instantly' },
                { icon: CheckCircle, title: 'Auto-Resolve', desc: 'High-confidence matches are answered perfectly' },
                { icon: ShieldAlert, title: 'Smart Escalate', desc: 'Complex issues routed to humans with full context' }
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] mx-auto mb-4 border-4 border-white">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Channels */}
      <section className="section-py bg-[#FAF9F6]">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-bold mb-6">Omnichannel Presence</h3>
              <p className="text-gray-600 mb-8">Meet your customers exactly where they are. Our AI integrates natively with your existing communication platforms to provide a unified support experience.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MessageSquare, name: 'Website Chat', desc: 'Embedded widget' },
                  { icon: Smartphone, name: 'WhatsApp', desc: 'Direct messaging' },
                  { icon: Phone, name: 'Voice Calls', desc: 'AI answering' },
                  { icon: Mail, name: 'Email Support', desc: 'Inbox management' }
                ].map((channel, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-[#06B6D4]/5 flex items-center justify-center text-[#06B6D4] shrink-0">
                      <channel.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">{channel.name}</h5>
                      <p className="text-xs text-gray-500">{channel.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Resolution Capabilities</h3>
              <ul className="space-y-4">
                {[
                  'Order tracking and status updates',
                  'FAQ responses and policy explanations',
                  'Account information and password resets',
                  'Scheduling changes and bookings',
                  'Return and refund initiation',
                  'Basic troubleshooting guides'
                ].map((capability, i) => (
                  <li key={i} className="flex items-center gap-3 border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{capability}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <FAQSection />
      <CTASection />
    </div>
  );
}
