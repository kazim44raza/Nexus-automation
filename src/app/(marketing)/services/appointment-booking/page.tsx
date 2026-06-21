import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/marketing/ServicePageTemplate'
import { Calendar, Clock, Bell, RefreshCw, Users, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Appointment Booking Automation — Reduce No-Shows 60% | Nexus Automation',
  description: 'Automate scheduling, send reminders, and fill cancellations automatically. Reduce no-shows by 60% and keep your calendar full 24/7.',
}

export default function AppointmentBookingPage() {
  return (
    <ServicePageTemplate
      data={{
        tag: 'Appointment Booking',
        headline: 'A full calendar, managed by AI',
        subheadline: 'Our intelligent booking system handles scheduling 24/7, syncs with your calendar, sends multi-step reminders, and auto-fills cancellations — so you never have an empty slot.',
        heroVisual: (
          <div className="card-dark p-5 max-w-sm ml-auto">
            <div className="flex items-center justify-between mb-4">
              <p className="text-white font-semibold text-sm">Today's Schedule</p>
              <span className="badge bg-accent/20 text-accent-light text-xs">4 confirmed</span>
            </div>
            <div className="space-y-2.5">
              {[
                { time: '9:00 AM', name: 'Sarah Chen', type: 'Consultation', status: 'Confirmed' },
                { time: '10:30 AM', name: 'James Wilson', type: 'Follow-up', status: 'Confirmed' },
                { time: '12:00 PM', name: '[Lunch]', type: '', status: 'Break' },
                { time: '2:00 PM', name: 'Maria Rodriguez', type: 'New Patient', status: 'Confirmed' },
                { time: '3:30 PM', name: 'David Thompson', type: 'Strategy Call', status: 'Auto-Filled ✓' },
              ].map((apt, i) => (
                <div key={i} className={`flex items-center gap-3 rounded-xl px-3 py-2 ${apt.type ? 'bg-white/5' : 'bg-white/2 opacity-40'}`}>
                  <span className="text-white/40 text-xs w-16">{apt.time}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{apt.name}</p>
                    {apt.type && <p className="text-white/30 text-[10px]">{apt.type}</p>}
                  </div>
                  <span className={`text-[10px] font-medium ${apt.status === 'Auto-Filled ✓' ? 'text-accent-light' : apt.status === 'Break' ? 'text-white/20' : 'text-white/40'}`}>{apt.status}</span>
                </div>
              ))}
            </div>
            <p className="text-accent-light text-xs mt-3 text-center">2 cancellations auto-filled today</p>
          </div>
        ),
        metrics: [
          { value: '60%', label: 'Fewer No-Shows', context: 'With multi-step reminder sequences' },
          { value: '24/7', label: 'Booking Availability', context: 'Clients book while you sleep' },
          { value: '< 5min', label: 'Cancellation Fill Time', context: 'Waitlist fills gaps automatically' },
        ],
        benefits: [
          { icon: <Calendar className="w-5 h-5" />, title: 'Real-Time Calendar Sync', description: 'Syncs with Google Calendar, Outlook, Calendly, and your booking software. Always shows accurate availability.' },
          { icon: <Bell className="w-5 h-5" />, title: 'Multi-Step Reminders', description: '48-hour email, 24-hour SMS, and 2-hour text reminders — customized to your service type and reduced no-shows by 60%.' },
          { icon: <RefreshCw className="w-5 h-5" />, title: 'Automatic Cancellation Fill', description: 'When a spot opens up, the AI immediately contacts your waitlist and fills the slot automatically.' },
          { icon: <Clock className="w-5 h-5" />, title: '24/7 Self-Booking', description: 'Clients book their own appointments any time via chatbot, voice agent, or online booking page.' },
          { icon: <Users className="w-5 h-5" />, title: 'Patient/Client Onboarding', description: 'Automatically send intake forms, pre-appointment instructions, and confirmations immediately after booking.' },
          { icon: <BarChart3 className="w-5 h-5" />, title: 'Booking Analytics', description: 'See no-show rates, booking sources, peak booking times, and revenue impact in one dashboard.' },
        ],
        steps: [
          { number: '01', title: 'Calendar Integration', description: 'We connect your calendar system and configure availability rules, buffer times, and service duration.', detail: '1 day · Works with all major calendar platforms' },
          { number: '02', title: 'Reminder Sequences', description: 'We build your custom reminder flows — timing, channel (email/SMS), and message content tailored to your service.', detail: '2 days · Fully customizable' },
          { number: '03', title: 'Waitlist & Fill Logic', description: 'We set up the automatic waitlist fill system and test it end-to-end with real booking scenarios.', detail: '1–2 days · Live testing included' },
        ],
        faqs: [
          { question: 'What calendar systems do you integrate with?', answer: 'Google Calendar, Outlook/Microsoft 365, Calendly, Acuity, Mindbody, Jane App, and most scheduling platforms. If you use something else, ask us.' },
          { question: 'Can the AI handle rescheduling requests?', answer: 'Yes — clients can text or call to reschedule and the AI will handle it automatically, offer alternatives, and update the calendar.' },
          { question: 'What if a client needs a specific service type or provider?', answer: 'We configure the booking logic to match specific service types with the right providers, rooms, or equipment.' },
          { question: 'Do you handle multi-location businesses?', answer: 'Yes — we can manage bookings across multiple locations, with location-specific availability and staff assignments.' },
        ],
        ctaTitle: 'Fill every slot in your schedule automatically',
        ctaDesc: 'See how we can integrate with your calendar system and set up a booking system that works 24/7.',
      }}
    />
  )
}
