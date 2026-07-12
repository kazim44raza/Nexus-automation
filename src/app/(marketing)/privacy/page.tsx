import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Nexus Automation',
  description: 'How Nexus Automation collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'Contact details you submit through our forms: name, email address, phone number, business name, industry, and your message.',
      'Chat messages you send to our website assistant, so we can respond to your questions and improve our answers.',
      'Basic technical data such as your IP address, used only for security purposes like rate limiting and abuse prevention.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'To respond to your inquiries and provide the services you request.',
      'To schedule and confirm appointments you book with us.',
      'To send you information you asked for. We do not send marketing email you did not request.',
      'We never sell, rent, or trade your personal information to third parties.',
    ],
  },
  {
    title: '3. How We Protect Your Data',
    body: [
      'Data is transmitted over encrypted connections (HTTPS) and stored in access-controlled databases.',
      'Access to customer data is restricted to authorized team members only, behind authenticated, role-based admin access.',
      'We apply security controls including rate limiting, input validation, and security headers across the site.',
    ],
  },
  {
    title: '4. Third-Party Services',
    body: [
      'We use trusted service providers to operate this site — for example, email delivery and AI-assisted chat. These providers process data only as needed to provide their service to us.',
      'Our AI chat assistant processes the messages you type in order to reply. Please do not share sensitive personal information (such as financial or health details) in the chat.',
    ],
  },
  {
    title: '5. Data Retention & Your Rights',
    body: [
      'We keep your information only as long as needed to serve you or as required by law.',
      'You can request a copy of your data, ask us to correct it, or ask us to delete it at any time by emailing hello@nexusautomation.ai.',
    ],
  },
  {
    title: '6. Changes to This Policy',
    body: [
      'If we make material changes to this policy, we will update this page. Continued use of the site after changes means you accept the updated policy.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative page-container max-w-3xl">
          <h1 className="heading-display text-white mb-3">Privacy Policy</h1>
          <p className="text-white/55">How we collect, use, and protect your information.</p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-bg-base to-transparent" />
      </section>

      <section className="section-py-sm bg-bg-base">
        <div className="page-container max-w-3xl space-y-10 pb-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="heading-md text-text-primary mb-3">{s.title}</h2>
              <div className="space-y-2.5">
                {s.body.map((p, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
          <p className="text-sm text-text-muted border-t border-border pt-6">
            Questions about this policy? Email us at hello@nexusautomation.ai.
          </p>
        </div>
      </section>
    </>
  )
}
