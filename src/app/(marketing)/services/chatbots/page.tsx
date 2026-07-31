import { Metadata } from "next";
import { ChatbotsClient } from "./client";

export const metadata: Metadata = {
  title: "Chatbots",
  description: "Deploy automated chatbots that answer inquiries, capture information, and book appointments.",
};

export default function ChatbotsPage() {
  return (
    <main className="bg-bg-base min-h-screen">
      <ChatbotsClient />
    </main>
  );
}
