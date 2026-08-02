import { Metadata } from 'next';
import CustomerSupportClient from './client';

export const metadata: Metadata = {
  title: 'AI Customer Support Command Centre',
  description: 'Triage routine requests, use approved sources, and hand sensitive or complex issues to your support team with full context.',
};

export default function CustomerSupportPage() {
  return <CustomerSupportClient />;
}
