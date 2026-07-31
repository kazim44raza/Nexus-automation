'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Building, User, Activity, MessageSquare, Calendar } from 'lucide-react'
import Image from 'next/image'

export function IndustryClientView({ slug, industry }: { slug: string, industry: any }) {
  if (slug === 'healthcare') {
    return <HealthcareMockup industry={industry} />
  }
  
  if (slug === 'real-estate') {
    return <RealEstateMockup industry={industry} />
  }

  return <FallbackMockup industry={industry} />
}

function WorkflowSteps({ workflow }: { workflow: any[] }) {
  return (
    <div className="space-y-6 relative">
      <div className="absolute top-4 bottom-4 left-5 w-px bg-border" />
      {workflow.map((item: any, idx: number) => (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.5 }}
          key={idx} 
          className="relative flex items-start gap-6"
        >
          <div className={`w-10 h-10 rounded-full border-4 border-bg-alt shrink-0 flex items-center justify-center shadow-sm relative z-10 
            ${item.type === 'input' ? 'bg-bg-surface text-text-secondary' : 
              item.type === 'ai' ? 'bg-mint text-bg-base' : 
              item.type === 'system' ? 'bg-border text-text-secondary' : 'bg-primary text-bg-base'}`}
          >
            <span className="font-bold text-sm">{idx + 1}</span>
          </div>
          <div className="bg-bg-base border border-border p-5 rounded-2xl flex-1 shadow-sm mt-[-4px]">
             <p className="font-medium text-text-primary">{item.step}</p>
             <p className="text-xs text-text-muted mt-2 uppercase tracking-wider font-semibold">
                {item.type === 'input' ? 'User Action' : item.type === 'ai' ? 'AI Assistant' : item.type === 'system' ? 'System Process' : 'Result'}
             </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function StatsGrid({ stats }: { stats: any[] }) {
  if (!stats) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 mt-8">
      {stats.map((stat: any, index: number) => (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          key={index} 
          className="bg-bg-surface border border-border p-6 rounded-2xl shadow-sm text-center"
        >
          <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
          <p className="font-bold text-text-primary text-sm mb-1">{stat.label}</p>
          <p className="text-xs text-text-secondary">{stat.context}</p>
        </motion.div>
      ))}
    </div>
  )
}

function HealthcareMockup({ industry }: { industry: any }) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div>
          <h2 className="heading-lg text-text-primary mb-4">HIPAA-Compliant Automation</h2>
          <p className="text-lg text-text-secondary">See how our secure AI assistant handles patient inquiries seamlessly while maintaining compliance.</p>
        </div>
        <WorkflowSteps workflow={industry.workflow} />
      </div>

      <div className="relative lg:sticky lg:top-24">
        <div className="absolute inset-0 bg-radial-gradient from-mint/10 to-transparent opacity-50 blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 bg-bg-base border border-border rounded-3xl p-6 shadow-2xl mb-8"
        >
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-mint" />
              <span className="font-semibold text-text-primary">Secure Patient Portal</span>
            </div>
            <div className="px-3 py-1 bg-mint/10 text-mint text-xs font-bold uppercase tracking-wider rounded-full border border-mint/20">
              HIPAA Compliant
            </div>
          </div>
          
          <div className="space-y-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-bg-surface p-4 rounded-2xl rounded-tl-sm border border-border w-[85%]"
            >
              <div className="flex items-center gap-2 mb-2">
                 <User className="w-3 h-3 text-text-muted" />
                 <span className="text-xs font-semibold text-text-secondary">Patient</span>
              </div>
              <p className="text-sm text-text-primary">Do you have any availability for a checkup tomorrow?</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="bg-bg-alt p-4 rounded-2xl rounded-tr-sm border border-border w-[85%] ml-auto"
            >
               <div className="flex items-center gap-2 mb-2 justify-end">
                 <span className="text-xs font-semibold text-text-secondary">AI Assistant</span>
                 <Activity className="w-3 h-3 text-mint" />
               </div>
              <p className="text-sm text-text-primary text-right">Yes, I see a slot at 2:00 PM with Dr. Smith. Would you like me to securely book that for you?</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.0, duration: 0.5 }}
              className="mt-6 bg-mint/5 border border-mint/20 rounded-xl p-4 flex items-center justify-between"
            >
               <div className="flex flex-col">
                  <span className="text-xs text-text-muted mb-1">EMR Sync Status</span>
                  <span className="text-sm font-semibold text-mint">Appointment Confirmed</span>
               </div>
               <CheckCircle2 className="w-6 h-6 text-mint" />
            </motion.div>
          </div>
        </motion.div>

        <StatsGrid stats={industry.stats} />
      </div>
    </div>
  )
}

function RealEstateMockup({ industry }: { industry: any }) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div>
          <h2 className="heading-lg text-text-primary mb-4">Instant Lead Routing</h2>
          <p className="text-lg text-text-secondary">Capture every listing inquiry 24/7 and route them to the right agent instantly.</p>
        </div>
        <WorkflowSteps workflow={industry.workflow} />
      </div>

      <div className="relative lg:sticky lg:top-24">
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent opacity-50 blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 bg-bg-base border border-border rounded-3xl p-6 shadow-2xl mb-8"
        >
           <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              <span className="font-semibold text-text-primary">Property Connect</span>
            </div>
            <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Active
            </div>
          </div>
          
          <div className="space-y-4">
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5, duration: 0.4 }}
               className="bg-bg-surface border border-border p-5 rounded-xl"
             >
                <div className="flex justify-between items-start mb-3">
                   <div className="flex gap-3 items-center">
                     <div className="w-10 h-10 rounded-lg bg-bg-alt flex items-center justify-center border border-border">
                       <MessageSquare className="w-5 h-5 text-text-secondary" />
                     </div>
                     <div>
                        <h4 className="text-sm font-bold text-text-primary">New Web Inquiry</h4>
                        <p className="text-xs text-text-secondary">Listing: 123 Ocean View Dr</p>
                     </div>
                   </div>
                   <span className="text-[10px] font-semibold bg-bg-alt px-2 py-1 rounded text-text-muted uppercase tracking-wider">Just now</span>
                </div>
                
                <div className="w-full bg-border h-px my-4" />
                
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="flex gap-1">
                       <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-primary" />
                       <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-primary" />
                       <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-primary" />
                     </div>
                     <p className="text-xs font-medium text-primary">AI qualifying lead...</p>
                   </div>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, height: 0 }}
               whileInView={{ opacity: 1, height: 'auto' }}
               viewport={{ once: true }}
               transition={{ delay: 2.5, duration: 0.5 }}
               className="bg-bg-alt border border-primary/20 p-5 rounded-xl overflow-hidden"
             >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                       <User className="w-4 h-4 text-primary" />
                     </div>
                     <div>
                       <p className="text-sm font-semibold text-text-primary">Agent Matched: Sarah J.</p>
                       <p className="text-xs text-text-secondary">High intent buyer • Pre-approved</p>
                     </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="bg-bg-base rounded-lg p-3 border border-border flex items-center justify-between">
                  <span className="text-xs font-medium text-text-secondary">Showing scheduled</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-text-primary">
                    <Calendar className="w-3 h-3" />
                    Tomorrow, 10:00 AM
                  </div>
                </div>
             </motion.div>
          </div>
        </motion.div>

        <StatsGrid stats={industry.stats} />
      </div>
    </div>
  )
}

function FallbackMockup({ industry }: { industry: any }) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div>
          <h2 className="heading-lg text-text-primary mb-4">Example Workflow</h2>
          <p className="text-lg text-text-secondary">See how automation handles a typical scenario from start to finish without human intervention.</p>
        </div>
        
        <WorkflowSteps workflow={industry.workflow} />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative lg:sticky lg:top-24"
      >
        <div className="absolute inset-0 bg-radial-gradient from-accent/10 to-transparent opacity-50 blur-3xl" />
        <div className="flex flex-col gap-6 relative z-10">
          {industry.image && (
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border transform hover:scale-[1.02] transition-transform duration-500">
              <Image 
                src={industry.image} 
                alt={`${industry.title} workflow context`}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <StatsGrid stats={industry.stats} />
        </div>
      </motion.div>
    </div>
  )
}
