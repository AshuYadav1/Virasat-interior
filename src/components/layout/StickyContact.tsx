"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { openQuoteModal } from "@/hooks/useQuoteModal";

export default function StickyContact() {
  const cleanNumber = "918999451189";

  return (
    <>
      {/* Desktop Floating Buttons (Hidden on Mobile) */}
      <div className="fixed bottom-8 right-8 z-[100] hidden md:flex flex-col gap-4">
        {/* Floating Call */}
        <motion.a
          href={`tel:+${cleanNumber}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="group relative w-16 h-16 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center shadow-2xl border border-white/10"
        >
          <Phone size={28} />
          <span className="absolute right-full mr-4 bg-white text-[#1A1A1A] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Us
          </span>
        </motion.a>

        {/* Floating WhatsApp */}
        <motion.a
          href={`https://wa.me/${cleanNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          className="group relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-white text-[#1A1A1A] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp Us
          </span>
        </motion.a>
      </div>

      {/* Mobile Sticky CTA Bar (Visible only on Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-3 md:hidden shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)]">
        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${cleanNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white flex flex-col items-center justify-center py-4 gap-1 active:bg-[#20bd5a] transition-colors"
        >
          <MessageCircle size={20} />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em]">WhatsApp</span>
        </a>

        {/* Call Button */}
        <a 
          href={`tel:+${cleanNumber}`}
          className="bg-[#1A1A1A] text-white flex flex-col items-center justify-center py-4 gap-1 active:bg-black transition-colors border-x border-white/5"
        >
          <Phone size={20} />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Call</span>
        </a>

        {/* Quote Button */}
        <button 
          onClick={openQuoteModal}
          className="bg-[#C5A059] text-white flex flex-col items-center justify-center py-4 gap-1 active:bg-[#b38f4d] transition-colors"
        >
          <Sparkles size={20} />
          <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Quote</span>
        </button>
      </div>
    </>
  );
}
