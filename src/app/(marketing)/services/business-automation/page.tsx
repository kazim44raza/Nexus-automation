import type { Metadata } from 'next';
import BusinessAutomationClient from './client';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Workflow Automation',
  description: 'Connect operational triggers, approvals, integrations, and actions in workflows your team can inspect and control.',
  path: '/services/business-automation',
});

export default function BusinessAutomationPage() {
  return <BusinessAutomationClient />;
}
