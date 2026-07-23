import { Metadata } from "next";
import WhatsAppAutomationClient from "./client";

export const metadata: Metadata = {
  title: "WhatsApp Automation | Luminous Graphite",
  description: "Seamlessly automate conversations, booking, and CRM updates on WhatsApp.",
};

export default function WhatsAppAutomationPage() {
  return <WhatsAppAutomationClient />;
}
