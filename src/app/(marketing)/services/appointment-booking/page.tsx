import { Metadata } from "next";
import AppointmentBookingClient from "./client";

export const metadata: Metadata = {
  title: "Smart Appointment Booking | Luminous Graphite",
  description: "Dimensional calendar system managing inquiries to no-shows automatically.",
};

export default function AppointmentBookingPage() {
  return <AppointmentBookingClient />;
}
