import { Metadata } from "next";
import BusinessAutomationClient from "./client";

export const metadata: Metadata = {
  title: "Business Automation | Luminous Graphite",
  description: "Connect your tools and automate your workflows visually.",
};

export default function BusinessAutomationPage() {
  return <BusinessAutomationClient />;
}
