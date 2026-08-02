import { Accordion } from '@/components/ui/Accordion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const faqs = [
  {
    question: "How quickly can you get an AI system live for my business?",
    answer: "The timeline depends on the number of channels, the systems being connected, the access available, and how much testing the workflow needs. After discovery, we provide a written scope and milestone schedule rather than promising a launch date before we understand the work."
  },
  {
    question: "Do I need technical knowledge to use these systems?",
    answer: "You should not need to write code for day-to-day use. We document how to review conversations, update approved information, handle escalations, and contact us when something needs changing. The exact controls depend on the tools chosen for your project."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing is quoted after the scope is clear. The main factors are channels, integrations, conversation volume, testing requirements, and whether ongoing support is included. You receive a written breakdown before any work begins."
  },
  {
    question: "What tools and CRMs do you integrate with?",
    answer: "We work with common CRM, calendar, phone, messaging, and workflow platforms. Compatibility depends on the API, webhook, and account access your specific plan provides, so we confirm each required connection during discovery before including it in the scope."
  },
  {
    question: "What AI model powers the chatbots and voice agents?",
    answer: "The model is selected for the job rather than used as a headline. Voice latency, reliability, data handling, language support, and running cost all matter. We keep model access on the server and document the vendors included in your proposed setup."
  },
  {
    question: "Is my customers' data secure?",
    answer: "Security requirements are part of the scope. We minimise access, validate data on the server, keep credentials out of client code, and agree what should be stored. Regulatory compliance is never assumed; if your work is regulated, we verify the required vendors, contracts, and controls before building."
  },
  {
    question: "What happens if the AI can't answer something?",
    answer: "We define the limits before launch. Depending on the situation, the system can ask a clarifying question, collect contact details, or route the conversation to a person with the available context. Your team agrees the escalation rules during testing."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Support and monitoring are defined in the proposal. A project can include a handover, an agreed review period, or ongoing maintenance. We state the response route, review cadence, and included changes before you commit."
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-bg-base border-t border-border">
      <div className="page-container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <AnimatedSection className="sticky top-28">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-text-muted mb-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                FAQ
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-text-primary mb-4 leading-tight">
                Questions worth asking before a build
              </h2>
              <p className="text-text-secondary text-lg font-light">
                Straight answers about scope, access, pricing, security, and what happens when automation reaches its limit.
              </p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-8 bg-bg-surface p-6 md:p-8 rounded-2xl shadow-sm border border-border">
            <AnimatedSection delay={0.1}>
              <Accordion items={faqs} />
            </AnimatedSection>
          </div>
          
        </div>
      </div>
    </section>
  )
}
