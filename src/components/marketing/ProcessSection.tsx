import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/shared/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Map the current process',
    description: "We follow a real request from first contact to completion, noting every tool, handoff, delay, and decision that must stay with your team.",
    duration: 'Scope first',
  },
  {
    number: '02',
    title: 'Build and test the handoffs',
    description: "We connect the agreed systems, test ordinary and difficult cases, and confirm what your team receives when automation reaches its limit.",
    duration: 'Tested together',
  },
  {
    number: '03',
    title: 'Launch with a review plan',
    description: "We document ownership, failure paths, and the checks needed after launch. Any ongoing monitoring or support is agreed before the project begins.",
    duration: 'Review agreed',
  },
]

export function ProcessSection() {
  return (
    <section className="section-py bg-bg-base">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <AnimatedSection direction="left">
            <span className="section-eyebrow">How a project runs</span>
            <h2 className="section-title mt-3">
              First understand the work. Then automate it.
            </h2>
            <p className="section-desc mt-4">
              The schedule depends on the systems involved and the access available. You receive a written scope, responsibilities, and acceptance checks before build work starts.
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
