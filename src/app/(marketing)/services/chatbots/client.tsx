'use client';

import { ServiceLayout } from '@/components/shared/ServiceLayout';

export function ChatbotsClient() {
  return (
    <ServiceLayout
      title="Automated conversational workflows."
      subtitle="Chat Assistants"
      description="Deploy intelligent conversational agents that capture visitor information, answer routine questions, and book appointments directly into your calendar."
      features={[
        "Context-aware natural language understanding",
        "Instant answers retrieved from your proprietary knowledge base",
        "Automatic lead qualification and CRM ingestion",
        "Seamless handoff to human agents with full conversation history"
      ]}
      workflow={[
        { step: "Visitor Intent Recognition", desc: "Assistant immediately parses the user's primary goal." },
        { step: "Knowledge Retrieval", desc: "System queries your approved documentation to formulate a response." },
        { step: "Lead Capture", desc: "Contact details are seamlessly requested and verified during the chat." },
        { step: "CRM Sync", desc: "Conversation transcripts and extracted entities are pushed to your database." }
      ]}
    />
  );
}
