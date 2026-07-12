import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Nexus Automation',
  description: 'The terms that apply when you use the Nexus Automation website and services.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By using this website, booking a call, or engaging our services, you agree to these terms. If you do not agree, please do not use the site.',
    ],
  },
  {
    title: '2. Our Services',
    body: [
      'Nexus Automation designs and builds AI automation systems — including chatbots, voice agents, and workflow automation — for businesses. Specific deliverables, timelines, and pricing for client projects are defined in a separate written agreement or proposal for each engagement.',
    ],
  },
  {
    title: '3. Website Use',
    body: [
      'You agree to use this website lawfully and not to attempt to disrupt, probe, or gain unauthorized access to any part of it.',
      'The AI chat assistant provides general information about our services. Its responses are informational and do not constitute a contract, quote, or professional advice.',
    ],
  },
  {
    title: '4. Results & Expectations',
    body: [
      'Metrics shown on this site describe typical or example outcomes. Actual results depend on your business, industry, and implementation, and are not guaranteed.',
    ],
  },
  {
    title: '5. Intellectual Property',
    body: [
      'The content, design, and branding of this website belong to Nexus Automation and may not be copied or reused without permission. Ownership of work we build for clients is defined in each client agreement.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    body: [
      'This website is provided "as is." To the maximum extent permitted by law, Nexus Automation is not liable for indirect or consequential damages arising from use of this website.',
    ],
  },
  {
    title: '7. Privacy',
    body: [
      'Your use of the site is also governed by our Privacy Policy, which explains what data we collect and how we protect it.',
    ],
  },
  {
    title: '8. Changes',
    body: [
      'We may update these terms from time to time. Material changes will be reflected on this page.',
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="bg-bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative page-container max-w-3xl">
          <h1 className="heading-display text-white mb-3">Terms of Service</h1>
          <p className="text-white/55">The terms that apply when you use this website and our services.</p>
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
            Questions about these terms? Email us at hello@nexusautomation.ai.
          </p>
        </div>
      </section>
    </>
  )
}
