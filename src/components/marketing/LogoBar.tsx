import { AnimatedSection } from '@/components/shared/AnimatedSection'

const integrations = [
  'GoHighLevel', 'HubSpot', 'Calendly', 'Zapier', 'Make', 'Airtable',
  'Twilio', 'OpenAI', 'Google Calendar', 'Slack', 'Stripe', 'Salesforce',
]

export function LogoBar() {
  return (
    <section className="bg-bg-alt border-y border-border py-10">
      <div className="page-container">
        <AnimatedSection>
          <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-text-muted mb-8">
            Seamlessly integrates with your existing tools
          </p>
        </AnimatedSection>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {integrations.map(name => (
            <span key={name} className="text-sm font-semibold text-text-muted hover:text-text-secondary transition-colors cursor-default select-none">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
