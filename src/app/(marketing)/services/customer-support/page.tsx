import { Metadata } from 'next';
import CustomerSupportClient from './client';

export const metadata: Metadata = {
  title: 'AI Customer Support Command Centre',
  description: 'Resolve routine requests instantly. Escalate the rest intelligently. AI-powered customer support that handles common questions across every channel.',
};

export default function CustomerSupportPage() {
  return <CustomerSupportClient />;
}
