import type { Metadata } from 'next';
import BusinessAutomationClient from './client';

export const metadata: Metadata = {
  title: 'Business Workflow Automation',
  description: 'Connect operational triggers, approvals, integrations, and actions in workflows your team can inspect and control.',
};

export default function BusinessAutomationPage() {
  return <BusinessAutomationClient />;
}
