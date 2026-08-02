import { Metadata } from "next";
import WhatsAppAutomationClient from "./client";

export const metadata: Metadata = {
  title: "WhatsApp Automation Workflows",
  description: "Design WhatsApp workflows for common questions, lead capture, order updates, booking links, and clear human handoff.",
};

export default function WhatsAppAutomationPage() {
  return <WhatsAppAutomationClient />;
}
