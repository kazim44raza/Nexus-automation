import type { Metadata } from 'next';
import AppointmentBookingClient from './client';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Automated Appointment Booking Workflows',
  description: 'Connect inquiries, calendar availability, reminders, rescheduling, and follow-up in one controlled booking workflow.',
  path: '/services/appointment-booking',
});

export default function AppointmentBookingPage() {
  return <AppointmentBookingClient />;
}
