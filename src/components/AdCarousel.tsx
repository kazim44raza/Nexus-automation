'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ads = [
  "🚀 Special Offer: Get 50% Off Your First AI Chatbot Installation!",
  "📅 Stop Wasting Time: Book a Free Automation Consultation Today",
  "🤖 Upgrade to 24/7 AI Voice Agents and Never Miss a Lead Again"
];

export default function AdCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ads.length);
    }, 14000); // Rotates every 14 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0A0A1A] border-b border-white/[0.06] overflow-hidden z-50 relative">
      <div className="relative h-10 max-w-7xl mx-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute text-sm font-medium text-cyan-400 text-center w-full px-4"
          >
            {ads[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
