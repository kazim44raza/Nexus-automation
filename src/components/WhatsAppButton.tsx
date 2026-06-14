'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-3 whitespace-nowrap rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-xl"
            style={{
              background: 'rgba(17, 17, 39, 0.9)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            }}
          >
            Chat on WhatsApp
            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-[rgba(17,17,39,0.9)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 2,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full"
        style={{
          background: '#25D366',
          boxShadow: isHovered
            ? '0 0 30px rgba(37, 211, 102, 0.6), 0 0 60px rgba(37, 211, 102, 0.3)'
            : '0 0 20px rgba(37, 211, 102, 0.3), 0 4px 15px rgba(0, 0, 0, 0.3)',
        }}
      >
        <span className="absolute inset-0 rounded-full">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        </span>

        <motion.span
          className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]"
          animate={{
            scale: [1, 1.35, 1.35],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />

        <motion.span
          className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]"
          animate={{
            scale: [1, 1.35, 1.35],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 1,
          }}
        />

        <MessageCircle className="relative z-10 h-6 w-6 fill-white text-white" />
      </motion.a>
    </div>
  );
}
