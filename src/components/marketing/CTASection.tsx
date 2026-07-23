import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const WHATSAPP_NUMBER = '923303579530'
const PREFILLED_MESSAGE = "Hi Nexus Automation! I'd like to book a free automation audit."

export function CTASection() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 page-container text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-accent-light tracking-wide uppercase mb-6">
            Free Discovery Call — No Commitment
          </span>
          <h2 className="font-geist text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto">
            See what your business could automate next.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            We&apos;ll map your biggest communication and workflow bottlenecks and show you a practical AI system built around them.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 text-base rounded-xl hover:bg-gray-100 hover:-translate-y-0.5 shadow-lg shadow-white/10 transition-all duration-200 w-full sm:w-auto">
              <Calendar className="w-5 h-5 text-accent" />
              Book My Free Automation Audit
            </Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white font-semibold border border-gray-700 px-8 py-4 text-base rounded-xl hover:bg-gray-700 hover:border-gray-600 transition-all duration-200 w-full sm:w-auto">
              Message Us on WhatsApp
              <MessageCircle className="w-5 h-5 text-green-400" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-8">No sales pressure · 30-minute call · Actionable insights guaranteed</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
