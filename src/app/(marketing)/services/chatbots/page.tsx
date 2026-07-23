import { Metadata } from "next";
import { ChatbotsClient } from "./client";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chatbots",
  description: "Deploy automated chatbots that answer inquiries, capture information, and book appointments.",
};

export default function ChatbotsPage() {
  return (
    <main className="bg-slate-50">
      <ChatbotsClient />
      
      {/* Supporting Human Scene */}
      <section className="py-24 bg-white border-t border-slate-100 font-inter">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <Image 
              src="/images/chatbot_owner_scene.jpg" 
              alt="Business owner reviewing a new inquiry" 
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-manrope text-slate-900 tracking-tight">
              Wake Up to Qualified Leads
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              While you focus on running your business, your automated chat assistant works around the clock. It greets visitors, answers routine questions, and captures essential contact details before you even open your laptop.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Capture caller information automatically",
                "Answer routine questions 24/7",
                "Book appointments directly to your calendar",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-100 font-inter">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold font-manrope text-slate-900 mb-4">Instant</h3>
            <p className="text-slate-600">Answers to common customer inquiries and frequent questions.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-manrope text-slate-900 mb-4">Integrated</h3>
            <p className="text-slate-600">Connects directly with your CRM and scheduling tools.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-manrope text-slate-900 mb-4">Practical</h3>
            <p className="text-slate-600">Collects necessary information to prepare your team for follow-up.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
