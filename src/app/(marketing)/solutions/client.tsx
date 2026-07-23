'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhoneCall, UserPlus, Calendar, MessageSquare, Clock, HelpCircle, ArrowRight, CheckCircle2, Zap } from 'lucide-react'

const goals = [
  { id: 'answer-calls', label: 'Answer calls', icon: PhoneCall },
  { id: 'capture-leads', label: 'Capture leads', icon: UserPlus },
  { id: 'book-appointments', label: 'Book appointments', icon: Calendar },
  { id: 'follow-up', label: 'Follow up', icon: MessageSquare },
  { id: 'reduce-manual-work', label: 'Reduce manual work', icon: Clock },
  { id: 'improve-support', label: 'Improve support', icon: HelpCircle },
]

const maps = {
  'answer-calls': {
    title: 'Voice AI Answering System',
    description: 'Never miss an opportunity. AI answers instantly, qualifies the caller, and books the appointment or routes the call.',
    steps: [
      { id: 1, title: 'Inbound Call', desc: 'Customer calls outside hours or during peak times' },
      { id: 2, title: 'AI Answers', desc: 'Natural voice assistant picks up instantly' },
      { id: 3, title: 'Qualification', desc: 'Asks required triage/intake questions' },
      { id: 4, title: 'Resolution', desc: 'Books appointment or pushes details to CRM' }
    ]
  },
  'capture-leads': {
    title: 'Omnichannel Lead Capture',
    description: 'Turn web traffic and social messages into qualified CRM contacts without lifting a finger.',
    steps: [
      { id: 1, title: 'Prospect Engages', desc: 'Visits website, texts, or DMs on social' },
      { id: 2, title: 'AI Assistant Responds', desc: 'Instant reply to start conversation' },
      { id: 3, title: 'Data Collection', desc: 'Gathers name, email, and intent' },
      { id: 4, title: 'CRM Sync', desc: 'Pushes qualified lead directly to your pipeline' }
    ]
  },
  'book-appointments': {
    title: 'Automated Booking Flow',
    description: 'Sync with your calendar to fill empty slots without the email back-and-forth.',
    steps: [
      { id: 1, title: 'Booking Intent', desc: 'Lead expresses desire to meet' },
      { id: 2, title: 'Calendar Sync', desc: 'AI checks real-time availability' },
      { id: 3, title: 'Slot Proposed', desc: 'Offers optimized meeting times' },
      { id: 4, title: 'Confirmation', desc: 'Sends invite and sets up reminders' }
    ]
  },
  'follow-up': {
    title: 'Smart Follow-up Sequences',
    description: 'Revive dead leads and nurture prospects until they are ready to buy.',
    steps: [
      { id: 1, title: 'Trigger Event', desc: 'Quote sent, trial expired, or lead went cold' },
      { id: 2, title: 'Channel Selection', desc: 'AI chooses SMS, Email, or WhatsApp' },
      { id: 3, title: 'Personalized Outreach', desc: 'Sends contextual follow-up message' },
      { id: 4, title: 'Re-engagement', desc: 'Handoff to human when lead replies positively' }
    ]
  },
  'reduce-manual-work': {
    title: 'Internal Process Automation',
    description: 'Connect your disjointed tools to eliminate copy-pasting and repetitive admin tasks.',
    steps: [
      { id: 1, title: 'Data Entry', desc: 'New info enters system (e.g. form submit)' },
      { id: 2, title: 'Data Processing', desc: 'AI formats and validates the data' },
      { id: 3, title: 'System Updates', desc: 'Updates CRM, billing, and project management' },
      { id: 4, title: 'Team Notification', desc: 'Alerts staff on Slack/Teams only if needed' }
    ]
  },
  'improve-support': {
    title: 'Tier 1 Support Automation',
    description: 'Resolve common tickets instantly and escalate complex issues with full context.',
    steps: [
      { id: 1, title: 'Support Ticket', desc: 'Customer submits question or issue' },
      { id: 2, title: 'Knowledge Retrieval', desc: 'AI searches docs and past tickets' },
      { id: 3, title: 'Instant Answer', desc: 'Provides resolution for common queries' },
      { id: 4, title: 'Escalation', desc: 'Routes complex issues to human with summary' }
    ]
  }
}

export function InteractiveSystemMap() {
  const [activeGoal, setActiveGoal] = useState(goals[0].id)
  const currentMap = maps[activeGoal as keyof typeof maps]

  return (
    <div className="w-full max-w-6xl mx-auto mt-12">
      {/* Goal Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {goals.map((goal) => {
          const isActive = activeGoal === goal.id
          const Icon = goal.icon
          return (
            <button
              key={goal.id}
              onClick={() => setActiveGoal(goal.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive 
                  ? 'bg-text-primary text-white shadow-lg scale-105' 
                  : 'bg-white text-text-secondary border border-border hover:border-text-muted hover:bg-bg-alt'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-text-muted'}`} />
              {goal.label}
            </button>
          )
        })}
      </div>

      {/* System Map Diorama */}
      <div className="bg-white rounded-3xl border border-border shadow-sm p-8 md:p-12 min-h-[400px] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-radial-gradient from-accent/5 to-transparent opacity-50" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGoal}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h3 className="heading-lg text-text-primary mb-4">{currentMap.title}</h3>
              <p className="text-lg text-text-secondary">{currentMap.description}</p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
              
              <div className="grid md:grid-cols-4 gap-6 relative z-10">
                {currentMap.steps.map((step, idx) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-bg-base border border-border rounded-2xl p-6 relative group hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-text-primary text-white flex items-center justify-center font-bold text-sm mb-4 mx-auto md:mx-0">
                      {step.id}
                    </div>
                    <h4 className="font-bold text-text-primary mb-2 text-center md:text-left">{step.title}</h4>
                    <p className="text-sm text-text-secondary text-center md:text-left">{step.desc}</p>
                    
                    {/* Arrow for mobile */}
                    {idx < currentMap.steps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-6">
                        <ArrowRight className="w-5 h-5 text-text-muted rotate-90" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
