import { Metadata } from 'next';
import LeadQualificationClient from './client';

export const metadata: Metadata = {
  title: 'AI Lead Qualification & Scoring | Nexus Automation',
  description: 'Know which leads need your attention first. AI-powered lead qualification that scores, routes, and prioritizes every inquiry based on your custom criteria.',
};

export default function LeadQualificationPage() {
  return <LeadQualificationClient />;
}
