'use client';

import { motion } from 'framer-motion';
import { Target, ArrowRight, DollarSign, Clock, MapPin, Activity, Zap, Heart, User, Filter, GitBranch, Sparkles } from 'lucide-react';
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

export default function LeadQualificationClient() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-inter">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100/40 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100/50 text-violet-700 font-medium text-sm mb-8 border border-violet-200/50">
                <Target className="w-4 h-4" /> AI Lead Engine
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-manrope font-bold text-5xl md:text-7xl text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
                Identify your best leads <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">instantly.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Our decision engine visualizes intent, budget, and urgency, automatically routing high-value prospects to your team while nurturing the rest.
              </motion.p>
              <motion.div variants={fadeUp} className="flex gap-4">
                <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                  Explore the Engine
                </button>
              </motion.div>
            </motion.div>
            
            {/* Interactive Decision Engine Spatial Diagram */}
            <motion.div 
              initial={{ opacity: 0, rotateX: 20, rotateY: -10, y: 40 }} 
              animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }} 
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative perspective-1000"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Central Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 border-4 border-violet-50">
                  <div className="w-24 h-24 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-inner">
                    <Sparkles className="w-10 h-10" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[
                  { icon: DollarSign, label: 'Budget', angle: 0, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { icon: Clock, label: 'Timeline', angle: 51, color: 'text-blue-600', bg: 'bg-blue-50' },
                  { icon: MapPin, label: 'Location', angle: 102, color: 'text-amber-600', bg: 'bg-amber-50' },
                  { icon: Zap, label: 'Urgency', angle: 154, color: 'text-orange-600', bg: 'bg-orange-50' },
                  { icon: Filter, label: 'Need', angle: 205, color: 'text-pink-600', bg: 'bg-pink-50' },
                  { icon: Heart, label: 'Fit', angle: 257, color: 'text-rose-600', bg: 'bg-rose-50' },
                  { icon: Activity, label: 'Sentiment', angle: 308, color: 'text-cyan-600', bg: 'bg-cyan-50' }
                ].map((item, i) => {
                  const radius = 160;
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center shadow-sm border border-white/50 backdrop-blur-sm`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm">{item.label}</span>
                    </motion.div>
                  )
                })}

                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  {[0, 51, 102, 154, 205, 257, 308].map((angle, i) => {
                    const x = 200 + Math.cos((angle * Math.PI) / 180) * 160;
                    const y = 200 + Math.sin((angle * Math.PI) / 180) * 160;
                    return (
                      <line key={i} x1="200" y1="200" x2={x} y2={y} stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" />
                    )
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cinematic Analysis Section */}
      <section className="py-32 bg-[#0B0F19] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-manrope text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Deep signal processing.
              </h2>
              <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">
                We go beyond simple forms. The AI analyzes conversational context, reading between the lines to determine true intent, budget flexibility, and timeline urgency.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Sentiment & Fit Analysis", desc: "Evaluates language patterns to gauge how serious the prospect is and if they align with your ideal customer profile.", icon: Activity },
                  { title: "Budget vs. Need Mapping", desc: "Correlates stated problems with inferred budget capacity to prioritize high-yield opportunities.", icon: Target }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1 w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center text-violet-400 shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial UI Split */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-2xl rounded-[3rem]" />
              <div className="relative bg-[#131A2B] border border-gray-800 rounded-3xl p-8 overflow-hidden">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-medium">Alex Chen</div>
                      <div className="text-xs text-gray-500">Enterprise Inquiry</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-light text-violet-400">94/100</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Match Score</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Need Match", value: "High", width: "95%", color: "bg-emerald-500" },
                    { label: "Budget Alignment", value: "$50k+", width: "80%", color: "bg-emerald-500" },
                    { label: "Urgency", value: "Immediate", width: "90%", color: "bg-violet-500" },
                    { label: "Sentiment", value: "Positive", width: "75%", color: "bg-blue-500" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className="text-gray-200">{stat.value}</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className={`h-full ${stat.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routing Outcomes */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-manrope text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A]">Intelligent Routing</h2>
            <p className="text-lg text-gray-600 font-light">
              Don't just score leads. Action them. Our engine automatically directs every prospect to the optimal next step based on your predefined rules.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: 'Priority', desc: 'Direct to senior sales', color: 'bg-violet-50 text-violet-700 border-violet-100' },
              { title: 'Book Appt', desc: 'Calendar link sent', color: 'bg-blue-50 text-blue-700 border-blue-100' },
              { title: 'Nurture', desc: 'Added to sequence', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
              { title: 'Review', desc: 'Flagged for human', color: 'bg-amber-50 text-amber-700 border-amber-100' },
              { title: 'Unqualified', desc: 'Polite redirection', color: 'bg-gray-50 text-gray-600 border-gray-200' },
            ].map((route, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 rounded-2xl border ${route.color} flex flex-col items-center text-center h-full`}
              >
                <GitBranch className="w-6 h-6 mb-4 opacity-80" />
                <h4 className="font-semibold mb-2">{route.title}</h4>
                <p className="text-xs opacity-80">{route.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </div>
  );
}
