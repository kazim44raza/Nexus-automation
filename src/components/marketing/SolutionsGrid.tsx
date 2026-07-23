'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Bot, Calendar, Target, MessageSquare, Workflow, Mail, HeadphonesIcon } from 'lucide-react'

const categories = ['All', 'Capture Leads', 'Answer Calls', 'Book Appointments', 'Reduce Manual Work', 'Customer Support', 'Follow Up']

const solutions = [
  { id: 'missed-call', icon: Phone, title: 'Missed Call Recovery', problem: 'Calls go to voicemail after hours', trigger: 'Missed call detected', action: 'AI calls back, qualifies, books appointment', tools: ['Twilio', 'Calendar', 'CRM'], outcome: 'Never lose a lead to voicemail', href: '/services/voice-agents', categories: ['Answer Calls', 'Capture Leads'] },
  { id: 'website-lead', icon: Bot, title: 'Website Lead Capture', problem: 'Visitors leave without converting', trigger: 'Visitor lands on site', action: 'Chatbot engages, qualifies, captures info', tools: ['Website', 'CRM', 'Email'], outcome: 'Convert more visitors into leads', href: '/services/chatbots', categories: ['Capture Leads'] },
  { id: 'booking-pipeline', icon: Calendar, title: 'Automated Booking Pipeline', problem: 'Manual scheduling wastes time', trigger: 'Customer requests appointment', action: 'AI checks availability, books, confirms, reminds', tools: ['Calendar', 'SMS', 'Email'], outcome: 'Full calendar without manual work', href: '/services/appointment-booking', categories: ['Book Appointments'] },
  { id: 'lead-scoring', icon: Target, title: 'AI Lead Scoring', problem: 'Team wastes time on unqualified leads', trigger: 'New inquiry received', action: 'AI scores, routes, prioritizes', tools: ['CRM', 'Email', 'Slack'], outcome: 'Focus on highest-value opportunities', href: '/services/lead-qualification', categories: ['Capture Leads'] },
  { id: 'whatsapp-support', icon: MessageSquare, title: 'WhatsApp Customer Channel', problem: 'Customers expect instant responses on WhatsApp', trigger: 'WhatsApp message received', action: 'AI responds, qualifies, books', tools: ['WhatsApp API', 'CRM', 'Calendar'], outcome: 'Always-on WhatsApp presence', href: '/services/whatsapp-automation', categories: ['Capture Leads', 'Customer Support'] },
  { id: 'crm-workflow', icon: Workflow, title: 'CRM Workflow Automation', problem: 'Manual data entry and scattered tools', trigger: 'New contact or status change', action: 'Auto-sync, update records, trigger sequences', tools: ['HubSpot/Salesforce', 'Zapier', 'Email'], outcome: 'Eliminate repetitive data work', href: '/services/business-automation', categories: ['Reduce Manual Work'] },
  { id: 'follow-up', icon: Mail, title: 'Automated Follow-Up Sequences', problem: 'Leads go cold without follow-up', trigger: 'Lead captured or appointment missed', action: 'Multi-channel follow-up sequence', tools: ['Email', 'SMS', 'WhatsApp'], outcome: 'No lead left behind', href: '/services/business-automation', categories: ['Follow Up'] },
  { id: 'ai-support', icon: HeadphonesIcon, title: 'AI Support Desk', problem: 'Support tickets pile up', trigger: 'Customer question received', action: 'AI searches KB, resolves or escalates', tools: ['Chat', 'Email', 'Knowledge Base'], outcome: 'Faster resolution, lower costs', href: '/services/customer-support', categories: ['Customer Support'] }
]

export function SolutionsGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSolutions = solutions.filter(sol => 
    activeCategory === 'All' || sol.categories.includes(activeCategory)
  )

  return (
    <div>
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? 'bg-primary text-white' : 'bg-bg-alt text-text-secondary hover:bg-bg-alt/80'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredSolutions.map((sol, index) => {
            const Icon = sol.icon
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                key={sol.id}
                className="card card-hover p-6 flex flex-col group h-full border border-border"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h2 className="heading-sm text-text-primary mb-4">{sol.title}</h2>
                
                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Problem</span>
                    <p className="text-sm text-text-secondary mt-1">{sol.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Trigger</span>
                    <p className="text-sm text-text-secondary mt-1">{sol.trigger}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">AI Action</span>
                    <p className="text-sm text-text-secondary mt-1">{sol.action}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">Connected Tools</span>
                    <div className="flex flex-wrap gap-2">
                      {sol.tools.map(tool => (
                        <span key={tool} className="badge-neutral text-xs">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">Business Outcome</span>
                    <p className="text-sm text-text-primary font-medium">{sol.outcome}</p>
                  </div>
                </div>

                <Link href={sol.href} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  View System <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
