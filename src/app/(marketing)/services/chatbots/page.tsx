import { Metadata } from "next";
import { ChatbotsClient } from "./client";

export const metadata: Metadata = {
  title: "AI Chatbots | Nexus Automation",
  description: "Deploy intelligent chatbots that understand context, search knowledge bases, and drive conversions.",
};

export default function ChatbotsPage() {
  return (
    <main className="bg-slate-50">
      <ChatbotsClient />
      
      <section className="py-24 bg-white border-t border-slate-100 font-inter">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-4xl font-bold font-manrope text-slate-900 mb-4">Instant</h3>
            <p className="text-slate-600">Resolution for common customer inquiries and support tickets.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-manrope text-slate-900 mb-4">Native</h3>
            <p className="text-slate-600">Integration with your existing CRM and knowledge bases.</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold font-manrope text-slate-900 mb-4">Smart</h3>
            <p className="text-slate-600">Lead qualification and dynamic routing to human agents.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
