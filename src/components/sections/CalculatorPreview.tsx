"use client";

import { motion } from "framer-motion";
import { Home, Utensils, DoorClosed, ChevronRight } from "lucide-react";
import { openQuoteModal } from "@/hooks/useQuoteModal";

const estimateOptions = [
  {
    title: "Full Home Interior",
    desc: "Know the estimate price for your full home interiors",
    icon: Home,
    bg: "bg-[#FFF4F4]"
  },
  {
    title: "Kitchen",
    desc: "Get an approximate costing for your kitchen interior",
    icon: Utensils,
    bg: "bg-[#F4F9FF]"
  },
  {
    title: "Wardrobe",
    desc: "Our estimate for your dream wardrobe",
    icon: DoorClosed,
    bg: "bg-[#F4FFF8]"
  }
];

export default function CalculatorPreview() {
  return (
    <section id="estimate" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary">
            Get a free quote for your <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">Wardrobe</span>
          </h2>
          <p className="text-secondary/60 text-lg font-light">
            Tell us about your home and get a personalized interior design quote
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {estimateOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl border border-secondary/5 shadow-xl shadow-black/5 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 ${option.bg} rounded-2xl flex items-center justify-center relative`}>
                  <option.icon className="text-secondary" size={28} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-secondary">{option.title}</h3>
                  <p className="text-secondary/60 text-sm leading-relaxed">
                    {option.desc}
                  </p>
                </div>
              </div>

              <button 
                onClick={openQuoteModal}
                className="mt-10 w-full py-4 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full flex items-center justify-center space-x-2 group-hover:bg-accent/90 transition-colors"
              >
                <span>Get Free Quote</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
