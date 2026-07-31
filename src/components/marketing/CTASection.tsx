import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const WHATSAPP_NUMBER = '923303579530'
const PREFILLED_MESSAGE = "Hi Azorvin! I'd like to book a free automation audit."

export function CTASection() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`

  return (
    <section className="py-32 bg-bg-base border-t border-border relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
      
      {/* Editorial overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 page-container text-center max-w-4xl mx-auto">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 border border-border bg-bg-surface rounded-full px-4 py-1.5 text-xs font-semibold text-text-muted tracking-wide uppercase mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Free Discovery Call — No Commitment
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-primary mb-6 leading-[1.1]">
            See what your business could automate next.
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            We&apos;ll map your biggest communication and workflow bottlenecks and show you a practical AI architecture built around them.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto h-14 px-8 text-base shadow-xl">
              Book Your Automation Audit
            </Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center justify-center gap-2 w-full sm:w-auto h-14 px-8 text-base">
              Message Us on WhatsApp
              <MessageCircle className="w-4 h-4 text-text-muted" />
            </a>
          </div>
          
          <p className="text-text-muted text-xs font-mono uppercase tracking-widest mt-10">No sales pressure · 30-minute consultation · Actionable architecture</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
