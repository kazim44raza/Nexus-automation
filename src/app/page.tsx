import AdCarousel from '@/components/AdCarousel';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveDashboard from '@/components/LiveDashboard';
import Stats from '@/components/Stats';
import TrustSection from '@/components/TrustSection';
import Services from '@/components/Services';
import ChatDemo from '@/components/ChatDemo';
import VoiceDemo from '@/components/VoiceDemo';
import HowItWorks from '@/components/HowItWorks';
import Industries from '@/components/Industries';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <AdCarousel />
      <Navbar />
      <Hero />
      <section className="py-12 bg-[#0A0A1A]">
        <LiveDashboard />
      </section>
      <Stats />
      <TrustSection />
      <Services />
      <ChatDemo />
      <VoiceDemo />
      <HowItWorks />
      <Industries />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
