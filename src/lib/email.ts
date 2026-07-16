import { Resend } from 'resend'
import { absoluteUrl } from './utils'

const DEFAULT_CALENDLY_URL = 'https://calendly.com/nexus-automation'
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim()
const bookingUrl = calendlyUrl && calendlyUrl !== DEFAULT_CALENDLY_URL
  ? calendlyUrl
  : absoluteUrl('/contact#contact-form')

function getResend() { return new Resend(process.env.RESEND_API_KEY ?? 'placeholder') } 
const FROM = process.env.FROM_EMAIL ?? 'Nexus Automation <hello@nexusautomation.ai>'
const ADMIN = process.env.ADMIN_EMAIL ?? 'admin@nexusautomation.ai'

export async function sendLeadNotification(data: {
  name: string
  email: string
  phone?: string
  businessName?: string
  industry?: string
  serviceInterest?: string
  message?: string
}) {
  if (!process.env.RESEND_API_KEY) return

  await getResend().emails.send({
    from: FROM,
    to: ADMIN,
    subject: `New Lead: ${data.name} — ${data.businessName ?? 'Unknown Business'}`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: #0284C7; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Lead Received</h1>
        </div>
        <div style="background: #FAFAF9; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #E5E7EB; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            ${Object.entries(data).map(([key, val]) => val ? `
              <tr>
                <td style="padding: 8px 0; color: #6B7280; font-size: 14px; width: 160px; vertical-align: top; text-transform: capitalize;">${key.replace(/([A-Z])/g, ' $1').trim()}</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${val}</td>
              </tr>
            ` : '').join('')}
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E5E7EB;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/leads" style="background: #0284C7; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">View in Admin →</a>
          </div>
        </div>
      </div>
    `,
  })
}

export async function sendLeadWelcome(data: { name: string; email: string }) {
  if (!process.env.RESEND_API_KEY) return

  await getResend().emails.send({
    from: FROM,
    to: data.email,
    subject: `Thanks for reaching out, ${data.name.split(' ')[0]}!`,
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: linear-gradient(135deg, #0284C7, #0369A1); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800;">Nexus Automation</h1>
          <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">AI Automation Agency</p>
        </div>
        <div style="background: white; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #E5E7EB; border-top: none;">
          <h2 style="color: #111827; font-size: 20px; margin: 0 0 16px;">We got your message, ${data.name.split(' ')[0]}!</h2>
          <p style="color: #6B7280; line-height: 1.6; margin: 0 0 16px;">Our team will review your inquiry and get back to you within <strong style="color: #111827;">1 business day</strong>.</p>
          <p style="color: #6B7280; line-height: 1.6; margin: 0 0 24px;">In the meantime, you can book a free discovery call directly on our calendar.</p>
          <a href="${bookingUrl}" style="background: #0284C7; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">Book a Free Call →</a>
          <p style="color: #9CA3AF; font-size: 12px; margin-top: 32px;">Nexus Automation · AI Automation Agency</p>
        </div>
      </div>
    `,
  })
}

export async function sendAppointmentConfirmation(data: {
  name: string
  email: string
  service?: string
  date: string
  time?: string
}) {
  if (!process.env.RESEND_API_KEY) return

  await getResend().emails.send({
    from: FROM,
    to: data.email,
    subject: 'Appointment Confirmed — Nexus Automation',
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: linear-gradient(135deg, #0891B2, #0E7490); padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 8px;">✓</div>
          <h1 style="color: white; margin: 0; font-size: 20px;">Appointment Confirmed!</h1>
        </div>
        <div style="background: white; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #E5E7EB; border-top: none;">
          <p style="color: #6B7280;">Hi ${data.name.split(' ')[0]}, your appointment has been confirmed.</p>
          <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #111827;"><strong>Date:</strong> ${data.date}</p>
            ${data.time ? `<p style="margin: 8px 0 0; color: #111827;"><strong>Time:</strong> ${data.time}</p>` : ''}
            ${data.service ? `<p style="margin: 8px 0 0; color: #111827;"><strong>Service:</strong> ${data.service}</p>` : ''}
          </div>
          <p style="color: #6B7280; font-size: 12px;">Nexus Automation · AI Automation Agency</p>
        </div>
      </div>
    `,
  })
}
