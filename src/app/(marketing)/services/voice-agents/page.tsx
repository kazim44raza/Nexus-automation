import type { Metadata } from 'next';
import VoiceAgentsClient from './client';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'AI Voice Agent Workflow Design',
  description: 'Design voice workflows for qualification, booking, support, routing, and considered human handoff.',
  path: '/services/voice-agents',
});

export default function VoiceAgentsPage() {
  return <VoiceAgentsClient />;
}
