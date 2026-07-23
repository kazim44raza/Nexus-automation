'use client';
import { motion } from 'framer-motion';
import { AlertCircle, BarChart3, BellRing, Filter, Flame, GitBranch, Target, TrendingUp, Users } from 'lucide-react';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';

export default function LeadQualificationClient() {
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
                <Target className="w-4 h-4" /> Precision Routing
              </motion.div>
              <motion.h1 variants={itemVariants} className="heading-display mb-6 font-bold text-5xl md:text-6xl text-[#1A1A1A] leading-tight">
                Know which leads need your attention <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] to-blue-600">first.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 leading-relaxed">
                AI-powered lead qualification that scores, routes, and prioritizes every inquiry based on your custom criteria — so your team focuses on the highest-value opportunities.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="btn-primary-lg bg-[#06B6D4] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#06B6D4]/90 transition-all flex items-center gap-2">
                  Build Your Scorecard
                </button>
              </motion.div>
            </motion.div>
            
            {/* Dashboard Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="card bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Filter className="w-5 h-5 text-[#06B6D4]"/> Real-time Lead Queue
                  </h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded font-medium">Live</span>
                </div>
                
                <div className="space-y-4">
                  {/* Lead 1: Hot */}
                  <div className="p-4 rounded-xl border border-orange-100 bg-orange-50/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900">Sarah M.</h4>
                          <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                            <Flame className="w-3 h-3"/> Hot
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Dental clinic, 3 locations, ready to start</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-orange-600">92<span className="text-xs text-gray-400">/100</span></div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-orange-100/50 flex justify-between items-center">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mr-4">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">Priority Route</span>
                    </div>
                  </div>

                  {/* Lead 2: Warm */}
                  <div className="p-4 rounded-xl border border-yellow-100 bg-yellow-50/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900">James R.</h4>
                          <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                            Warm
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Real estate agent, exploring options</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-yellow-600">67<span className="text-xs text-gray-400">/100</span></div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-yellow-100/50 flex justify-between items-center">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mr-4">
                        <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '67%' }}></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">Nurture Sequence</span>
                    </div>
                  </div>

                  {/* Lead 3: Cold */}
                  <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-gray-900">Alex K.</h4>
                          <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                            Cold
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Student, research project</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">34<span className="text-xs text-gray-400">/100</span></div>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-blue-100/50 flex justify-between items-center">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mr-4">
                        <div className="bg-blue-400 h-1.5 rounded-full" style={{ width: '34%' }}></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">Auto-respond</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 text-[10px] text-gray-400 uppercase tracking-wider">
                  Interactive Demo Representation
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scoring Criteria */}
      <section className="section-py bg-white border-y border-gray-100">
        <div className="page-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-lg text-3xl md:text-4xl font-bold mb-4">Multi-dimensional Scoring</h2>
            <p className="text-gray-600">Customize how your AI evaluates leads based on what matters most to your business.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { name: 'Service Match', weight: 85, color: 'bg-purple-500' },
                { name: 'Budget Indication', weight: 92, color: 'bg-green-500' },
                { name: 'Timeline Urgency', weight: 78, color: 'bg-orange-500' },
                { name: 'Business Size', weight: 65, color: 'bg-blue-500' },
                { name: 'Engagement Level', weight: 45, color: 'bg-cyan-500' }
              ].map((criteria, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span>{criteria.name}</span>
                    <span className="text-gray-500">Weight: {criteria.weight}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${criteria.weight}%` }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${criteria.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#FAF9F6] p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">You set the rules. AI executes.</h3>
              <p className="text-gray-600 mb-6">Our AI doesn't just guess; it analyzes conversations in real-time, pulling intent, budget constraints, and urgency signals to formulate a concrete score based on your exact definitions of an ideal client.</p>
              <div className="flex items-center gap-3 text-sm font-medium p-3 bg-white rounded-lg shadow-sm">
                <AlertCircle className="w-5 h-5 text-[#06B6D4]" /> Dynamic adjustment based on conversation flow
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routing Logic & Alerts */}
      <section className="section-py bg-[#FAF9F6]">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] mb-6">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Routing Logic</h3>
              <p className="text-gray-600 mb-8">Once scored, leads are instantly routed to the optimal outcome without human bottlenecks.</p>
              
              <div className="space-y-4 border-l-2 border-gray-200 ml-4 pl-6 relative">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-[#FAF9F6]"></span>
                  <h4 className="font-bold text-gray-900">Score &gt; 80</h4>
                  <p className="text-sm text-gray-600 mt-1">Bypasses queue, alerts sales team, offers immediate booking.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-yellow-400 border-4 border-[#FAF9F6]"></span>
                  <h4 className="font-bold text-gray-900">Score 50 - 80</h4>
                  <p className="text-sm text-gray-600 mt-1">Enters long-term nurture sequence, receives automated follow-ups.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-400 border-4 border-[#FAF9F6]"></span>
                  <h4 className="font-bold text-gray-900">Score &lt; 50</h4>
                  <p className="text-sm text-gray-600 mt-1">Polite automated decline, redirected to self-serve resources.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] mb-6">
                <BellRing className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Alerts</h3>
              <p className="text-gray-600 mb-6">When a VIP lead hits your inbox, your team knows instantly via Slack, Teams, or SMS.</p>
              
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center font-bold text-xl text-blue-600">S</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm">Nexus Bot</span>
                      <span className="text-xs text-gray-500">12:04 PM</span>
                    </div>
                    <p className="text-sm text-gray-800">🚨 <strong className="text-orange-600">HOT LEAD (Score: 92)</strong><br/>Sarah M. from Apex Dental just inquired. Ready to buy.<br/><a href="#" className="text-blue-500 hover:underline">Click here to claim</a></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pipeline Analytics */}
      <section className="section-py bg-white border-y border-gray-100">
        <div className="page-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="heading-lg text-3xl font-bold mb-4">Pipeline Visibility</h2>
            <p className="text-gray-600">Track conversion rates and lead quality across your entire funnel.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Total Inquiries', value: '1,248', trend: '+12%' },
              { icon: Target, label: 'Qualified (Hot)', value: '312', trend: '+5%' },
              { icon: TrendingUp, label: 'Conversion Rate', value: '25%', trend: '+2.1%' },
              { icon: BarChart3, label: 'Avg Lead Score', value: '68', trend: '+4' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#FAF9F6] p-6 rounded-2xl border border-gray-100 text-center">
                <stat.icon className="w-8 h-8 text-[#06B6D4] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                <div className="text-xs text-green-600 font-semibold mt-2">{stat.trend} this month</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <FAQSection />
      <CTASection />
    </div>
  );
}
