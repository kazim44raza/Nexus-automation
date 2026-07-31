'use client';

import { ServiceLayout } from '@/components/shared/ServiceLayout';

export default function VoiceAgentsClient() {
  return (
    <ServiceLayout
      title="Never miss another phone call."
      subtitle="Voice Agents"
      description="Deploy highly capable conversational AI voice agents that handle inbound support, outbound dispatch, and complex routing with sub-second latency."
      features={[
        "Ultra-low latency conversational processing",
        "Natural prosody, interruption handling, and dynamic turn-taking",
        "Direct integrations into your existing VoIP infrastructure",
        "Post-call transcription, summarization, and logging"
      ]}
      workflow={[
        { step: "Inbound Call Connected", desc: "Agent answers within rings, initiating with custom brand greeting." },
        { step: "Intent & Entity Extraction", desc: "System listens, handles interruptions, and extracts key entities." },
        { step: "Action Execution", desc: "Agent performs database lookups, books appointments, or routes the call." },
        { step: "Post-Call Processing", desc: "Detailed summary and action items are immediately pushed to your CRM." }
      ]}
    />
  );
}
