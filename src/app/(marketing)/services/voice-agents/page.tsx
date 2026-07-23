import { Metadata } from "next";
import { VoiceAgentsClient } from "./client";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Voice Agents",
  description: "Deploy voice agents that answer incoming calls, capture caller information, and route urgent requests.",
};

export default function VoiceAgentsPage() {
  return (
    <main className="bg-[#07111F]">
      <VoiceAgentsClient />
      
      {/* Human Scene Section */}
      <section className="py-24 bg-[#07111F] text-white font-inter">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src="/images/voice_agent_scene.jpg" 
              alt="Receptionist assisting visitor while call is handled automatically" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex justify-between items-center shadow-lg">
              <div>
                <p className="text-xs text-slate-400 mb-1">Automated Call in Progress</p>
                <p className="text-sm font-medium text-slate-200">"Sure, I can book that for you."</p>
              </div>
              <button className="bg-slate-800 hover:bg-slate-700 text-xs px-3 py-1.5 rounded-lg border border-slate-600 transition-colors">
                Escalate to Human
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-manrope">
              Focus on the people <br />
              <span className="text-blue-400">in front of you</span>
            </h2>
            <p className="text-lg text-slate-400">
              While your team handles face-to-face interactions, our voice agents seamlessly manage routine inquiries in the background.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start space-x-3 text-slate-300">
                <CheckCircle2 size={24} className="text-blue-400 shrink-0" />
                <span><strong className="text-white block">Answers incoming calls</strong> Instantly pick up the phone without interrupting your current task.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-300">
                <CheckCircle2 size={24} className="text-blue-400 shrink-0" />
                <span><strong className="text-white block">Captures caller information</strong> Automatically collect details and basic requests.</span>
              </li>
              <li className="flex items-start space-x-3 text-slate-300">
                <CheckCircle2 size={24} className="text-blue-400 shrink-0" />
                <span><strong className="text-white block">Routes urgent requests</strong> Transfer high-priority calls directly to the right person.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white border-t border-slate-800 font-inter">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold font-manrope text-blue-400 mb-4">Zero</h3>
            <p className="text-slate-400">Latency when answering incoming calls.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-manrope text-blue-400 mb-4">24/7</h3>
            <p className="text-slate-400">Availability to capture caller information.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-manrope text-blue-400 mb-4">98%</h3>
            <p className="text-slate-400">Accuracy in routing urgent requests.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
