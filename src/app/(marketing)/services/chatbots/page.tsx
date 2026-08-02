import type { Metadata } from 'next';
import { ChatbotsClient } from './client';

export const metadata: Metadata = {
  title: 'Chat Assistant Design',
  description: 'Build grounded chat assistants that answer routine questions, capture context, and hand complex conversations to your team.',
};

export default function ChatbotsServicePage() {
  return <ChatbotsClient />;
}
