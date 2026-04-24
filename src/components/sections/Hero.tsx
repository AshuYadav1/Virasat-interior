"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { openQuoteModal } from "@/hooks/useQuoteModal";

const slides = [
  {
    title: "Timeless Quality, Lifetime Warranty",
    description: "Experience the gold standard of interior design with our commitment to excellence and generational beauty.",
    image: "/images/hero.png",
    buttonText: "Book Free Consultation",
  },
  {
    title: "Luxury Interiors, Smart Estimates",
    description: "Get an instant, accurate estimate for your interiors in just 30 seconds with our intelligent design tool.",
    image: "/images/kitchen.png",
    buttonText: "Get Free Quote",
  },
  {
    title: "Bespoke Designs, Modern Living",
    description: "Crafting heritage-inspired luxury interiors that blend elegance with functionality for your unique story.",
    image: "/images/bedroom.png",
    buttonText: "Explore Projects",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden bg-secondary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover opacity-60"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-secondary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl pt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full backdrop-blur-md"
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Virasat Exclusive</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white leading-[1.1] tracking-tight">
                {slides[current].title.split(',')[0]}
                {slides[current].title.includes(',') && (
                  <span className="block italic text-accent opacity-90">
                    {slides[current].title.split(',')[1]}
                  </span>
                )}
              </h1>
              
              <p className="text-white/70 text-lg md:text-xl max-w-xl font-light leading-relaxed mx-auto">
                {slides[current].description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 pt-6">
                <button 
                  onClick={openQuoteModal}
                  className="group relative px-10 py-5 bg-accent hover:bg-accent/90 text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all transform hover:scale-105 shadow-xl rounded-full overflow-hidden"
                >
                  <span className="relative z-10">{slides[current].buttonText}</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
                </button>
                
                <a 
                  href="#inspiration"
                  className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Work</span>
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls & Progress */}
      <div className="absolute inset-x-0 bottom-12 z-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-center">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center space-x-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="group py-4"
                >
                  <div className="relative w-12 h-[2px] bg-white/10 overflow-hidden">
                    {i === current && (
                      <motion.div
                        layoutId="progress"
                        className="absolute inset-0 bg-accent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 6, ease: "linear" }}
                      />
                    )}
                  </div>
                  <span className={`block mt-2 text-[10px] font-bold transition-colors ${i === current ? "text-accent" : "text-white/20"}`}>
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={prevSlide} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-secondary transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-secondary transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
