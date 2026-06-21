import { Accordion } from '@/components/ui/Accordion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const faqs = [
  {
    question: "How quickly can you get an AI system live for my business?",
    answer: "Most clients are live within 5–10 business days. Simple chatbot and missed-call recovery setups can be done in as little as 48 hours. Complex multi-system integrations may take 2–3 weeks. We'll give you a precise timeline during your discovery call."
  },
  {
    question: "Do I need technical knowledge to use these systems?",
    answer: "None at all. We build, maintain, and manage everything for you. You'll have a simple dashboard to view leads, conversations, and performance metrics — no code required. Our team handles all the technical work."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on the services and complexity of your setup. Most clients invest between $500–$3,000/month for a complete automation stack. We offer flexible monthly plans and project-based engagements. Book a call and we'll give you an exact quote based on your needs and expected ROI."
  },
  {
    question: "What tools and CRMs do you integrate with?",
    answer: "We integrate with most major platforms including GoHighLevel, HubSpot, Salesforce, Zoho, Pipedrive, Calendly, Google Calendar, Microsoft Calendar, Twilio, Slack, Airtable, Zapier, Make, and many more. If you use a specific tool, ask us — chances are we've integrated it before."
  },
  {
    question: "What AI model powers the chatbots and voice agents?",
    answer: "We use a combination of leading AI models depending on the use case and your preferences — including GPT-4, Claude, Gemini, and Groq. All AI systems are trained on your specific business, products, and workflows to ensure they represent your brand accurately."
  },
  {
    question: "Is my customers' data secure?",
    answer: "Absolutely. We follow industry-standard security practices, and all data is encrypted in transit and at rest. For healthcare clients, we build HIPAA-compliant workflows. For all clients, we sign data processing agreements and ensure your customer data is never used for AI training."
  },
  {
    question: "What happens if the AI can't answer something?",
    answer: "We always build in escalation paths. If the AI encounters a question it can't handle, it will collect the customer's details and notify your team immediately. You define the escalation thresholds — we make sure nothing falls through the cracks."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. All plans include ongoing monitoring, optimization, and support. You'll have access to a dedicated account manager and our support team. We proactively monitor performance and make adjustments to improve results over time."
  },
]

export function FAQSection() {
  return (
    <section className="section-py bg-bg-base">
      <div className="page-container max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title max-w-xl mx-auto mt-3">
            Common questions, honest answers
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Accordion items={faqs} />
        </AnimatedSection>
      </div>
    </section>
  )
}
