import type { Metadata } from 'next';
import { ChatbotsClient } from './client';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'AI Chatbot Design for Service Businesses',
  description: 'Build grounded chat assistants that answer routine questions, capture context, and hand complex conversations to your team.',
  path: '/services/chatbots',
});

export default function ChatbotsServicePage() {
  return <ChatbotsClient />;
}
