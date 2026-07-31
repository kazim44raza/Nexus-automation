'use client';

import { ServiceLayout } from '@/components/shared/ServiceLayout';

export default function BusinessAutomationClient() {
  return (
    <ServiceLayout
      title="Orchestrate your entire business."
      subtitle="Business Automation"
      description="Connect triggers to AI decisions and automated actions. Replace manual data entry with reliable, intelligent workflows that operate autonomously."
      features={[
        "Visual workflow orchestration across disparate tools",
        "AI-driven decision routing and conditional logic",
        "Seamless integration with legacy CRMs and ERPs",
        "Human-in-the-loop escalation for edge cases"
      ]}
      workflow={[
        { step: "Event Trigger", desc: "System detects a state change or new data entry." },
        { step: "AI Qualification", desc: "Data is parsed and evaluated against business rules." },
        { step: "Action Execution", desc: "Target systems are updated instantly without manual copying." },
        { step: "Exception Handling", desc: "Uncertain cases are routed to human operators with full context." }
      ]}
    />
  );
}
