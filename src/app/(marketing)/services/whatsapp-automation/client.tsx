'use client';

import { ServiceLayout } from '@/components/shared/ServiceLayout';

export default function WhatsAppAutomationClient() {
  return (
    <ServiceLayout
      title="Engage where your customers actually live."
      subtitle="WhatsApp Automation"
      description="Transform WhatsApp from a simple messaging app into a fully-fledged automated operational channel for sales, support, and engagement."
      features={[
        "Interactive structured messages, lists, and rapid replies",
        "Secure end-to-end encrypted notification delivery",
        "Automated cart recovery and appointment reminder sequences",
        "Shared team inboxes with intelligent routing capabilities"
      ]}
      workflow={[
        { step: "Template Dispatch", desc: "Pre-approved templates trigger based on backend operational events." },
        { step: "User Interaction", desc: "Customer responds via quick replies or natural language." },
        { step: "Automated Journey", desc: "System navigates the user through qualification, support, or purchasing flows." },
        { step: "State Synchronization", desc: "Final outcomes and interaction logs are synced to central databases." }
      ]}
    />
  );
}
