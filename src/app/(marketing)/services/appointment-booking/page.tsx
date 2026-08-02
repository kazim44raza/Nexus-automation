import type { Metadata } from 'next';
import AppointmentBookingClient from './client';

export const metadata: Metadata = {
  title: 'Appointment Booking Workflows',
  description: 'Connect inquiries, calendar availability, reminders, rescheduling, and follow-up in one controlled booking workflow.',
};

export default function AppointmentBookingPage() {
  return <AppointmentBookingClient />;
}
