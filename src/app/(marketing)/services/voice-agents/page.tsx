import type { Metadata } from 'next';
import VoiceAgentsClient from './client';

export const metadata: Metadata = {
  title: 'Voice Workflow Design',
  description: 'Design voice workflows for qualification, booking, support, routing, and considered human handoff.',
};

export default function VoiceAgentsPage() {
  return <VoiceAgentsClient />;
}
