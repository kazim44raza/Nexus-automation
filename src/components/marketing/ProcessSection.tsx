import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: "We map your current workflows, identify where leads are being lost, and design the automation architecture that fits your specific business.",
    duration: '1–2 days',
  },
  {
    number: '02',
    title: 'Build & Integrate',
    description: "Our team builds your AI systems, integrates them with your existing tools (CRM, calendar, phone), and trains them on your business knowledge.",
    duration: '3–10 days',
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description: "We deploy, monitor performance, and continuously refine. You get weekly reports and a dedicated account manager available when you need us.",
    duration: 'Ongoing',
  },
]

export function ProcessSection() {
  return (
    <section className="section-py bg-bg-base">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <AnimatedSection direction="left">
            <span className="section-eyebrow">How It Works</span>
            <h2 className="section-title mt-3">
              Up and running in under 2 weeks
            </h2>
            <p className="section-desc mt-4">
              No long implementations. No complex onboarding. We move fast and you start seeing results before month one is over.
            </p>
          </AnimatedSection>

          {/* Right: steps */}
          <StaggerContainer className="space-y-6">
            {steps.map((step, i) => (
              <StaggerItem key={i} direction="right">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center">
                      <span className="font-display font-extrabold text-primary text-sm">{step.number}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-8 bg-border mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-text-primary">{step.title}</h3>
                      <span className="badge-neutral text-xs">{step.duration}</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
