import { Metadata } from "next";
import { VoiceAgentsClient } from "./client";

export const metadata: Metadata = {
  title: "AI Voice Agents | Nexus Automation",
  description: "Deploy conversational AI voice agents that sound human, qualify leads, and book appointments 24/7.",
};

export default function VoiceAgentsPage() {
  return (
    <main className="bg-[#07111F]">
      <VoiceAgentsClient />
      {/* Additional sections can be added here, maintaining the 20% dark cinematic theme for this signature page */}
      <section className="py-24 bg-slate-900 text-white border-t border-slate-800 font-inter">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold font-manrope text-blue-400 mb-4">Zero</h3>
            <p className="text-slate-400">Latency conversations that feel entirely natural.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-manrope text-blue-400 mb-4">24/7</h3>
            <p className="text-slate-400">Availability to answer calls and capture leads.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-manrope text-blue-400 mb-4">98%</h3>
            <p className="text-slate-400">Accuracy in intent recognition and data capture.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
