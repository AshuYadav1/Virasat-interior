"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WarrantyBanner() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden bg-[#F7F7F7] flex flex-col md:flex-row shadow-2xl shadow-black/5"
        >
          {/* Image Side */}
          <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
            <Image
              src="/images/warranty-kitchen.png"
              alt="Lifetime Warranty"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center p-8 md:p-16 space-y-6 relative overflow-hidden bg-white">
            {/* Warranty Badge */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-dashed border-accent flex items-center justify-center p-2"
              >
                <div className="w-full h-full bg-accent rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl shadow-accent/30">
                  <span className="text-[8px] md:text-[10px] font-bold text-white uppercase leading-tight">Lifetime Warranty</span>
                </div>
              </motion.div>
            </div>

            <h2 className="text-4xl md:text-6xl font-playfair font-black text-accent leading-tight">
              ONCE YOU BUY, <br />
              <span className="text-secondary">WE NEVER SAY GOODBYE.</span>
            </h2>
            <p className="text-secondary/40 text-xs font-bold uppercase tracking-widest mt-4">
              *T&C Apply
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
