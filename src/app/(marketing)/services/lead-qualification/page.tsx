import { Metadata } from 'next';
import LeadQualificationClient from './client';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'AI Lead Qualification & Routing Systems',
  description: 'Capture inquiry context, apply your qualification rules, and route each lead to the appropriate next step or person.',
  path: '/services/lead-qualification',
});

export default function LeadQualificationPage() {
  return <LeadQualificationClient />;
}
