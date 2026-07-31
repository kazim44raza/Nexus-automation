'use client';

import { ServiceLayout } from '@/components/shared/ServiceLayout';

export default function CustomerSupportClient() {
  return (
    <ServiceLayout
      title="Resolve the routine. Escalate the complex."
      subtitle="Support Command Centre"
      description="An AI-powered command centre that handles common queries, seamlessly escalates nuanced issues to humans, and logs everything for deep analytics."
      features={[
        "Instant deflection of repetitive tier-1 support tickets",
        "Context-rich handoffs to human operators",
        "Automated sentiment analysis and priority routing",
        "Multi-channel ingestion (Email, Chat, Social)"
      ]}
      workflow={[
        { step: "Omnichannel Ingestion", desc: "Inquiries arrive from any supported platform." },
        { step: "Confidence Calculation", desc: "System checks routing rules and calculates a confidence score." },
        { step: "Automated Resolution", desc: "High-confidence queries are instantly resolved based on internal knowledge." },
        { step: "Strategic Escalation", desc: "Low-confidence or high-value tickets are routed to specialized teams." }
      ]}
    />
  );
}
