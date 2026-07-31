'use client';
import React from 'react';
import { 
  MessageSquare, 
  CalendarSearch, 
  Clock, 
  CalendarPlus, 
  CheckCircle2, 
  Bell, 
  RefreshCw, 
  XCircle, 
  ListOrdered, 
  Mail,
  ArrowRight,
  Calendar,
  Layers,
  Headset,
  Database,
  CheckSquare
} from 'lucide-react';
import Link from 'next/link';

export default function AppointmentBookingServicePage() {
  return (
    <div className="bg-bg-base text-text-primary min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-bg-surface">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-text-primary mb-6">
            Intelligent Appointment Booking
          </h1>
          <p className="text-xl text-text-secondary mb-10 leading-relaxed">
            Automate your entire scheduling lifecycle. From initial inquiry and dynamic availability checks to waitlist management and team notifications, our autonomous agents handle the friction of calendar management.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center px-6 py-3 rounded-md transition-opacity font-medium">
              Automate Scheduling <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="#architecture" className="btn-secondary inline-flex items-center px-6 py-3 rounded-md border border-text-muted text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors font-medium">
              Explore Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="architecture" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-12 text-text-primary">End-to-End Scheduling Architecture</h2>
        
        <div className="bg-bg-alt rounded-lg border border-bg-surface p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <MessageSquare className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">1. Inquiry</h3>
              <p className="text-xs text-text-muted">User requests a meeting or appointment.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <CalendarSearch className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">2. Availability Check</h3>
              <p className="text-xs text-text-muted">Real-time sync with connected calendars.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <Clock className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">3. Slot Suggestion</h3>
              <p className="text-xs text-text-muted">Proposes optimal time slots considering constraints.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <CalendarPlus className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">4. Booking</h3>
              <p className="text-xs text-text-muted">User selects a slot and details are captured.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <CheckCircle2 className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">5. Confirmation</h3>
              <p className="text-xs text-text-muted">System sends calendar invites to all parties.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <Bell className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">6. Reminder</h3>
              <p className="text-xs text-text-muted">Automated nudges prior to the event.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <RefreshCw className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">7. Rescheduling</h3>
              <p className="text-xs text-text-muted">Frictionless modification of existing bookings.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <XCircle className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">8. Cancellation</h3>
              <p className="text-xs text-text-muted">Removes booking and frees up the calendar slot.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <ListOrdered className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">9. Waitlist Fill</h3>
              <p className="text-xs text-text-muted">Automatically offers newly freed slots to the waitlist.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <Mail className="w-5 h-5 text-text-secondary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">10. Team Notification</h3>
              <p className="text-xs text-text-muted">Alerts staff to changes across scheduling endpoints.</p>
            </div>
            
          </div>
          
          <div className="mt-12 pt-8 border-t border-bg-surface flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-bg-surface rounded-full flex items-center justify-center mb-4 border border-bg-base">
                <Headset className="w-5 h-5 text-text-primary" />
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-2">Human Escalation</h3>
              <p className="text-xs text-text-muted max-w-xs">Complex scheduling conflicts or out-of-bounds requests are seamlessly routed to staff with complete conversational context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Integrations */}
      <section className="py-20 px-6 md:px-12 bg-bg-alt border-y border-bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-medium mb-8 text-text-primary">Primary Use Cases</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-text-secondary shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-1">Healthcare & Clinics</h4>
                  <p className="text-text-secondary text-sm">Patient scheduling with dynamic doctor availability, pre-consultation questionnaires, and HIPAA-compliant handling of appointment details.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-text-secondary shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-1">Sales & Consultations</h4>
                  <p className="text-text-secondary text-sm">Seamless discovery call booking. The system qualifies leads, matches them to the right sales rep based on territory, and sets the meeting.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-text-secondary shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-text-primary mb-1">Service & Maintenance</h4>
                  <p className="text-text-secondary text-sm">Dispatch scheduling with route optimization considerations. Customers book repair windows that map to real-time technician availability.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-medium mb-8 text-text-primary">Ecosystem Integrations</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-bg-surface border border-bg-base rounded-md flex items-center gap-3">
                <Calendar className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary font-medium">Google Calendar</span>
              </div>
              <div className="p-4 bg-bg-surface border border-bg-base rounded-md flex items-center gap-3">
                <Calendar className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary font-medium">Outlook 365</span>
              </div>
              <div className="p-4 bg-bg-surface border border-bg-base rounded-md flex items-center gap-3">
                <Database className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary font-medium">Calendly API</span>
              </div>
              <div className="p-4 bg-bg-surface border border-bg-base rounded-md flex items-center gap-3">
                <Layers className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary font-medium">Zoom / Teams</span>
              </div>
            </div>
            <p className="text-sm text-text-muted mt-6">
              Bi-directional sync ensures no double-bookings. Video conferencing links are automatically generated and attached to calendar invites.
            </p>
          </div>
        </div>
      </section>

      {/* Approach & Limitations */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-medium mb-8 text-text-primary">Implementation Approach</h2>
          <div className="space-y-6">
            <div className="pl-6 border-l-2 border-text-secondary">
              <h4 className="text-lg font-medium text-text-primary mb-2">1. Infrastructure Integration</h4>
              <p className="text-text-secondary text-sm">We securely connect to your existing calendar systems, ensuring read/write permissions are accurately scoped and localized.</p>
            </div>
            <div className="pl-6 border-l-2 border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">2. Rule Definition</h4>
              <p className="text-text-secondary text-sm">We encode your scheduling logic: buffer times, round-robin assignments, working hours, and multi-participant requirements.</p>
            </div>
            <div className="pl-6 border-l-2 border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">3. Conversational Testing</h4>
              <p className="text-text-secondary text-sm">The agent is rigorously tested on edge cases like overlapping time zones, ambiguous time requests, and dynamic cancellations before deployment.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium mb-8 text-text-primary">Technical Limitations</h2>
          <div className="bg-bg-surface p-6 rounded-md border border-bg-base">
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 shrink-0" />
                <p>Total reliance on the API uptime of underlying calendar systems (e.g., Google or Microsoft).</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 shrink-0" />
                <p>Cannot visually 'force' a booking in blocked slots unless explicitly programmed with override authorizations.</p>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 shrink-0" />
                <p>Waitlist management requires structured triggers and cannot parse purely unstructured email replies accurately in 100% of cases.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-bg-alt border-y border-bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium mb-10 text-center text-text-primary">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-bg-base p-6 rounded-md border border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">How do you prevent double bookings?</h4>
              <p className="text-sm text-text-secondary">Our system queries real-time availability via API microseconds before confirming a slot. If a slot is taken during the transaction, the agent gracefully informs the user and proposes alternatives.</p>
            </div>
            <div className="bg-bg-base p-6 rounded-md border border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">Can the agent handle different time zones?</h4>
              <p className="text-sm text-text-secondary">Yes. The agent automatically parses the user's localized time zone context and handles all standard conversions when interacting with your base calendar timezone.</p>
            </div>
            <div className="bg-bg-base p-6 rounded-md border border-bg-surface">
              <h4 className="text-lg font-medium text-text-primary mb-2">What happens if a user wants to cancel?</h4>
              <p className="text-sm text-text-secondary">The agent can process cancellations directly through chat or SMS, verify user identity via booking reference, execute the cancellation API call, and automatically trigger your waitlist protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-medium text-text-primary mb-6">Ready to Automate Your Calendar?</h2>
        <p className="text-lg text-text-secondary mb-10">
          Reclaim hours lost to scheduling ping-pong. Deploy an autonomous booking agent today.
        </p>
        <Link href="/contact" className="btn-primary inline-flex items-center px-8 py-4 rounded-md transition-opacity font-medium text-lg">
          Get Started
        </Link>
      </section>
    </div>
  );
}

