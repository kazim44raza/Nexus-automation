import { Metadata } from "next";
import VoiceAgentsClient from "./client";

export const metadata: Metadata = {
  title: "Voice Agents",
  description: "Deploy voice agents that answer incoming calls, capture caller information, and route urgent requests.",
};

export default function VoiceAgentsPage() {
  return (
    <main className="bg-bg-base min-h-screen">
      <VoiceAgentsClient />
    </main>
  );
}
