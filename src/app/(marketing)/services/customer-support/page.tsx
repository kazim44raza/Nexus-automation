import { Metadata } from 'next';
import CustomerSupportClient from './client';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'AI Customer Support Automation',
  description: 'Triage routine requests, use approved sources, and hand sensitive or complex issues to your support team with full context.',
  path: '/services/customer-support',
});

export default function CustomerSupportPage() {
  return <CustomerSupportClient />;
}
