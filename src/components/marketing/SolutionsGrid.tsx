'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Bot, Calendar, Target, MessageSquare, Workflow, Mail, HeadphonesIcon } from 'lucide-react'

const categories = ['All', 'Capture Leads', 'Answer Calls', 'Book Appointments', 'Reduce Manual Work', 'Customer Support', 'Follow Up']

const solutions = [
  { id: 'missed-call', icon: Phone, title: 'Missed Call Recovery', problem: 'Calls go to voicemail after hours, leading to lost revenue and poor customer experience.', trigger: 'Missed call detected', action: 'AI calls back instantly, qualifies the lead, and books an appointment', tools: ['Twilio', 'Calendar', 'CRM'], outcome: 'Never lose a lead to voicemail', href: '/services/voice-agents', categories: ['Answer Calls', 'Capture Leads'] },
  { id: 'website-lead', icon: Bot, title: 'Website Lead Capture', problem: 'Visitors land on your site and leave without converting because they cannot find immediate answers.', trigger: 'Visitor lands on site', action: 'Chatbot engages naturally, qualifies intent, and captures contact info', tools: ['Website', 'CRM', 'Email'], outcome: 'Convert more visitors into qualified leads', href: '/services/chatbots', categories: ['Capture Leads'] },
  { id: 'booking-pipeline', icon: Calendar, title: 'Automated Booking Pipeline', problem: 'Manual scheduling wastes hours of staff time and creates friction for clients.', trigger: 'Customer requests appointment', action: 'System checks real-time availability, books, confirms, and manages reminders', tools: ['Calendar', 'SMS', 'Email'], outcome: 'A full calendar without manual intervention', href: '/services/appointment-booking', categories: ['Book Appointments'] },
  { id: 'lead-scoring', icon: Target, title: 'AI Lead Scoring', problem: 'Your sales team wastes valuable time speaking with unqualified leads.', trigger: 'New inquiry received', action: 'AI parses data, scores the lead, and routes to the appropriate tier', tools: ['CRM', 'Email', 'Slack'], outcome: 'Focus human effort on highest-value opportunities', href: '/services/lead-qualification', categories: ['Capture Leads'] },
  { id: 'whatsapp-support', icon: MessageSquare, title: 'WhatsApp Customer Channel', problem: 'Customers expect instant, conversational responses on WhatsApp, overwhelming your staff.', trigger: 'WhatsApp message received', action: 'AI interprets context, resolves common queries, and handles bookings', tools: ['WhatsApp API', 'CRM', 'Calendar'], outcome: 'Always-on, intelligent WhatsApp presence', href: '/services/whatsapp-automation', categories: ['Capture Leads', 'Customer Support'] },
  { id: 'crm-workflow', icon: Workflow, title: 'CRM Workflow Automation', problem: 'Scattered tools lead to manual data entry errors and siloed information.', trigger: 'New contact or status change', action: 'Auto-syncs data across platforms, updates records, and triggers next steps', tools: ['HubSpot/Salesforce', 'Zapier', 'Email'], outcome: 'Eliminate repetitive data work entirely', href: '/services/business-automation', categories: ['Reduce Manual Work'] },
  { id: 'follow-up', icon: Mail, title: 'Automated Follow-Up Sequences', problem: 'Warm leads go cold because manual follow-up is inconsistent.', trigger: 'Lead captured or appointment missed', action: 'Executes a context-aware, multi-channel follow-up sequence', tools: ['Email', 'SMS', 'WhatsApp'], outcome: 'No potential client left behind', href: '/services/business-automation', categories: ['Follow Up'] },
  { id: 'ai-support', icon: HeadphonesIcon, title: 'AI Support Desk', problem: 'Support tickets pile up while your team repeatedly answers the same questions.', trigger: 'Customer question received', action: 'AI searches knowledge base, resolves issue, or intelligently escalates', tools: ['Chat', 'Email', 'Knowledge Base'], outcome: 'Faster resolution times and lower support costs', href: '/services/customer-support', categories: ['Customer Support'] }
]

export function SolutionsGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSolutions = solutions.filter(sol => 
    activeCategory === 'All' || sol.categories.includes(activeCategory)
  )

  return (
    <div>
      <div className="flex overflow-x-auto pb-4 mb-16 gap-6 no-scrollbar border-b border-border/20">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap pb-4 text-sm font-medium transition-colors border-b-2 -mb-[17px] ${activeCategory === category ? 'border-accent-primary text-text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="space-y-16 lg:space-y-32">
        <AnimatePresence mode="popLayout">
          {filteredSolutions.map((sol, index) => {
            const Icon = sol.icon
            const isEven = index % 2 === 0
            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={sol.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start`}
              >
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-text-muted">
                      <Icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h2 className="font-display text-3xl text-text-primary">{sol.title}</h2>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-text-muted block mb-3 font-semibold">The Problem</span>
                      <p className="text-text-secondary font-light text-lg leading-relaxed">{sol.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-text-muted block mb-3 font-semibold">The Solution</span>
                      <p className="text-text-primary font-light text-lg leading-relaxed">
                        When <span className="italic">{sol.trigger.toLowerCase()}</span>, the system automatically acts: {sol.action.toLowerCase()}.
                      </p>
                    </div>
                  </div>
                  <div className="mt-10">
                     <Link href={sol.href} className="inline-flex items-center gap-2 text-text-primary border-b border-text-primary/30 pb-1 hover:border-text-primary transition-colors text-sm uppercase tracking-wider font-medium">
                      View Architecture <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} bg-bg-base border border-border/30 p-10 lg:p-16 flex flex-col justify-center min-h-[400px]`}>
                   <div className="grid sm:grid-cols-2 gap-12">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-text-muted block mb-6 font-semibold">Tech Stack</span>
                        <ul className="space-y-4">
                          {sol.tools.map(tool => (
                            <li key={tool} className="text-text-secondary font-light text-base flex items-center gap-3">
                              <span className="w-1.5 h-1.5 bg-accent-primary/50 rounded-full" /> {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                         <span className="text-xs uppercase tracking-widest text-text-muted block mb-6 font-semibold">Business Outcome</span>
                         <p className="text-text-primary font-medium text-xl leading-tight border-l-2 border-accent-primary/30 pl-4 py-2">{sol.outcome}</p>
                      </div>
                   </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
