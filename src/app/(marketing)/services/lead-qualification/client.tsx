'use client';

import { ServiceLayout } from '@/components/shared/ServiceLayout';

export default function LeadQualificationClient() {
  return (
    <ServiceLayout
      title="Separate the signal from the noise."
      subtitle="Lead Qualification"
      description="Automatically engage, screen, and score inbound inquiries before they ever reach your sales team's desks."
      features={[
        "Instant multi-channel engagement to prevent lead decay",
        "Dynamic qualification frameworks based on your specific criteria",
        "Algorithmic lead scoring and predictive routing",
        "Automated CRM updates and sales rep notifications"
      ]}
      workflow={[
        { step: "Lead Ingestion", desc: "Form fills, inbound emails, and social DMs are captured instantly." },
        { step: "Dynamic Screening", desc: "System engages the prospect to gather budget, timeline, and need details." },
        { step: "Scoring Engine", desc: "Lead is scored against your ideal customer profile matrix." },
        { step: "Intelligent Routing", desc: "Qualified leads are fast-tracked to calendar booking; unqualified leads are nurtured." }
      ]}
    />
  );
}
