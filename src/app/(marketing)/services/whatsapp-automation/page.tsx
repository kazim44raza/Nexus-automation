import { Metadata } from "next";
import WhatsAppAutomationClient from "./client";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "WhatsApp Business Automation Workflows",
  description: "Design WhatsApp workflows for common questions, lead capture, order updates, booking links, and clear human handoff.",
  path: "/services/whatsapp-automation",
});

export default function WhatsAppAutomationPage() {
  return <WhatsAppAutomationClient />;
}
