import { Metadata } from 'next';
import AppointmentBookingClient from './client';

export const metadata: Metadata = {
  title: 'AI Appointment Booking Automation | Nexus Automation',
  description: 'Move customers from inquiry to confirmed appointment automatically. AI-powered scheduling that checks availability, books appointments, and sends reminders without manual work.',
};

export default function AppointmentBookingPage() {
  return <AppointmentBookingClient />;
}
