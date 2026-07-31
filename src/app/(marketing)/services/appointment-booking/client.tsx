'use client';

import { ServiceLayout } from '@/components/shared/ServiceLayout';

export default function AppointmentBookingClient() {
  return (
    <ServiceLayout
      title="The lifecycle of a booking, fully automated."
      subtitle="Smart Appointment Booking"
      description="From the first inquiry to post-meeting follow-ups. Handle rescheduling, waitlists, and no-shows gracefully without lifting a finger."
      features={[
        "Intelligent slot suggestion based on complex availability rules",
        "Automated confirmation and reminder sequences",
        "Frictionless rescheduling and cancellation handling",
        "Waitlist management and automatic gap-filling"
      ]}
      workflow={[
        { step: "Inquiry Received", desc: "System ingests intent across channels (web, email, SMS)." },
        { step: "Availability Sync", desc: "Real-time calendar verification and slot offering." },
        { step: "Booking Confirmed", desc: "Calendar updated, confirmation sent to all parties." },
        { step: "Pre-meeting Sequences", desc: "Scheduled reminders and intake form dispatches." }
      ]}
    />
  );
}
