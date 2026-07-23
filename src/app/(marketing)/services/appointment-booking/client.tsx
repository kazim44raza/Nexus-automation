'use client';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Globe, Mail, MessageSquare, Phone, RefreshCw, Smartphone, UserX, Zap } from 'lucide-react';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';

export default function AppointmentBookingClient() {
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
                <Calendar className="w-4 h-4" /> Smart Scheduling
              </motion.div>
              <motion.h1 variants={itemVariants} className="heading-display mb-6 font-bold text-5xl md:text-6xl text-[#1A1A1A] leading-tight">
                Move customers from inquiry to confirmed appointment <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] to-blue-600">automatically.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed">
                AI-powered scheduling that checks availability, books appointments, sends confirmations and reminders, handles rescheduling, and follows up on no-shows — all without manual work.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="btn-primary-lg bg-[#06B6D4] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#06B6D4]/90 transition-all flex items-center gap-2">
                  Get Started
                </button>
                <button className="btn-secondary px-8 py-4 rounded-xl font-semibold border border-gray-200 hover:bg-white transition-all flex items-center gap-2 bg-transparent text-[#1A1A1A]">
                  View Demo
                </button>
              </motion.div>
            </motion.div>
            
            {/* Interactive Calendar Card */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
              <div className="card bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-lg">October 2026</h3>
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-50 rounded"><RefreshCw className="w-4 h-4 text-gray-400"/></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-gray-500 mb-2">
                    <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-sm">
                    {/* Mock calendar days */}
                    {Array.from({length: 31}).map((_, i) => (
                      <div key={i} className={`h-8 flex items-center justify-center rounded-full ${i === 14 ? 'bg-[#06B6D4] text-white font-bold' : 'hover:bg-gray-50'} ${[2, 5, 12, 18, 25].includes(i) ? 'relative' : ''}`}>
                        {i + 1}
                        {[2, 5, 12, 18, 25].includes(i) && <span className="absolute bottom-1 w-1 h-1 bg-[#06B6D4] rounded-full"></span>}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                  <h4 className="font-semibold text-sm mb-4">Today's Appointments</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-100 relative">
                      <div className="text-xs text-green-700 font-semibold mb-1">10:00 AM</div>
                      <div className="text-sm font-medium">Sarah M.</div>
                      <div className="text-xs text-gray-500">Consultation</div>
                      <span className="absolute top-3 right-3 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg border border-green-100 relative">
                      <div className="text-xs text-green-700 font-semibold mb-1">2:00 PM</div>
                      <div className="text-sm font-medium">James R.</div>
                      <div className="text-xs text-gray-500">Follow-up</div>
                    </div>
                    
                    <div className="p-3 bg-[#06B6D4]/5 rounded-lg border border-[#06B6D4]/20 relative">
                      <div className="text-xs text-[#06B6D4] font-semibold mb-1 flex items-center gap-1">
                        4:30 PM <Zap className="w-3 h-3" /> Auto-filled
                      </div>
                      <div className="text-sm font-medium">Alex K.</div>
                      <div className="text-xs text-gray-500">Waitlist slot claimed</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The booking journey */}
      <section className="section-py bg-white border-y border-gray-100">
        <div className="page-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-lg text-3xl md:text-4xl font-bold mb-4">The Intelligent Booking Journey</h2>
            <p className="text-gray-600">See how our AI completely automates the scheduling pipeline from start to finish.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start justify-between relative">
            <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-gray-100 -z-10"></div>
            
            {[
              { icon: MessageSquare, title: 'Inquiry', desc: 'Captures intent from any channel' },
              { icon: Clock, title: 'Availability', desc: 'Cross-references your calendar' },
              { icon: Globe, title: 'Timezone', desc: 'Auto-adjusts for both parties' },
              { icon: Calendar, title: 'Selection', desc: 'Offers optimal meeting slots' },
              { icon: CheckCircle, title: 'Confirmation', desc: 'Secures the appointment' }
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center mb-8 md:mb-0 w-full md:w-1/5 relative">
                <div className="w-16 h-16 rounded-full bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] mb-4 border-4 border-white shadow-sm">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Rescheduling & Reminders */}
      <section className="section-py bg-[#FAF9F6]">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] mb-6">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Rescheduling</h3>
              <p className="text-gray-600 mb-6">Changes happen. When a customer needs to cancel or reschedule, the AI handles it seamlessly and automatically reaches out to your waitlist to fill the gap.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-[#06B6D4]"/> 24/7 automated adjustments</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-[#06B6D4]"/> Instant calendar syncing</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-5 h-5 text-[#06B6D4]"/> Intelligent slot backfilling</li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Multi-channel Reminders</h3>
              <p className="text-gray-600 mb-6">Drastically reduce no-shows with personalized reminder sequences delivered exactly where your customers are most responsive.</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Email Confirmation</div>
                    <div className="text-xs text-gray-500">Sent immediately upon booking</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <Smartphone className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">SMS Reminder</div>
                    <div className="text-xs text-gray-500">Sent 24 hours before</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#06B6D4]/5 p-3 rounded-lg border border-[#06B6D4]/20">
                  <MessageSquare className="w-5 h-5 text-[#06B6D4]" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#06B6D4]">WhatsApp Nudge</div>
                    <div className="text-xs text-[#06B6D4]/70">Sent 1 hour before</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* No-show Recovery & Integrations */}
      <section className="section-py bg-white border-y border-gray-100">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="heading-md text-3xl font-bold mb-6">Automated No-Show Recovery</h2>
              <p className="text-gray-600 mb-8">Don't let a missed appointment become a lost customer. Our AI detects no-shows and automatically initiates a polite recovery sequence to get them back on the calendar.</p>
              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <UserX className="w-8 h-8 text-red-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Recovery Flow</h4>
                    <p className="text-sm text-gray-500 mb-4">"Hi Sarah, it looks like we missed you at 10 AM. We hope everything is okay! Would you like to reschedule for later this week?"</p>
                    <div className="flex gap-2">
                      <span className="text-xs font-medium bg-white px-2 py-1 rounded border shadow-sm">Yes, please</span>
                      <span className="text-xs font-medium bg-white px-2 py-1 rounded border shadow-sm">Not right now</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {[
                { name: 'Google Calendar', color: 'bg-blue-50 text-blue-600 border-blue-100' },
                { name: 'Outlook', color: 'bg-cyan-50 text-cyan-600 border-cyan-100' },
                { name: 'Calendly', color: 'bg-indigo-50 text-indigo-600 border-indigo-100' },
                { name: 'GoHighLevel', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' }
              ].map((integration, i) => (
                <div key={i} className={`p-6 rounded-xl border flex flex-col items-center justify-center text-center gap-3 ${integration.color}`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm">{integration.name}</span>
                </div>
              ))}
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
