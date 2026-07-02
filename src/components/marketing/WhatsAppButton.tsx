'use client'

import { useState } from 'react'

/* ──────────────────────────────────────────────────────────────
  Floating WhatsApp button. Clicking it opens a WhatsApp chat with
  the business number (pre-filled message). Sits above the AI chat
  bubble so it doesn't overlap the bottom-right widget.

   ╔═══════════════════════════════════════════════════════════════╗
   ║  TO LINK YOUR WHATSAPP — pick EITHER way, no coding needed:    ║
   ║                                                               ║
   ║  Easiest: open the `.env.local` file and set your number on   ║
   ║  the line:  NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567          ║
   ║  (international format, DIGITS ONLY — no +, spaces or dashes)  ║
   ║  then restart the server.                                     ║
   ║                                                               ║
   ║  Or: just type it into FALLBACK_NUMBER right below.           ║
   ║                                                               ║
   ║  Until a number is set, the button stays hidden.              ║
   ╚═══════════════════════════════════════════════════════════════╝ */
const FALLBACK_NUMBER = '923303579530' // 0330 3579530 (PK) in international format
const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || FALLBACK_NUMBER).replace(/[^0-9]/g, '')
const PREFILLED_MESSAGE = "Hi Nexus Automation! I'd like to know more about your AI automation services."

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  // No number configured yet → render nothing (avoids a dead link).
  if (!WHATSAPP_NUMBER) return null

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-24 right-6 z-50 flex items-center gap-2.5 group"
    >
      {/* Tooltip */}
      <span
        className={`hidden sm:block bg-white text-text-primary text-sm font-semibold px-3 py-2 rounded-xl shadow-card-lg border border-border whitespace-nowrap transition-all duration-200 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" style={{ animationDuration: '2.5s' }} />
        {/* WhatsApp glyph */}
        <svg viewBox="0 0 32 32" className="relative w-7 h-7 fill-white" aria-hidden="true">
          <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.06-3.63zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.04 1.06 1.08-3.94-.25-.4a10.55 10.55 0 0 1-1.62-5.63c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.57 10.57 0 0 1 3.12 7.54c0 5.87-4.78 10.64-10.66 10.64zm5.84-7.97c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.45 4.81.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </span>
    </a>
  )
}
