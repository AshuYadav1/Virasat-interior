"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Skyline Penthouse",
    location: "Gurgaon",
    style: "Modern Heritage",
    image: "/images/portfolio.png",
  },
  {
    title: "The Velvet Lounge",
    location: "Delhi",
    style: "Luxury Minimalist",
    image: "/images/hero.png",
  },
  {
    title: "Culinary Haven",
    location: "Chandigarh",
    style: "Bespoke Modern",
    image: "/images/kitchen.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-charcoal text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-playfair font-bold"
          >
            Curated <span className="text-brass italic">Spaces</span>
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-brass mt-6 md:mt-0"
          >
            View All Projects —
          </motion.button>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-24 items-center`}
            >
              <div className="relative w-full md:w-3/5 h-[400px] md:h-[600px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="w-full md:w-2/5 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="w-12 h-px bg-brass" />
                  <span className="text-xs uppercase tracking-widest text-brass">{project.style}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-playfair font-bold leading-tight">
                  {project.title}
                </h3>
                <p className="text-stone/40 text-sm tracking-widest uppercase">
                  Location: {project.location}
                </p>
                <div className="pt-6">
                  <button className="px-8 py-4 border border-white/10 hover:bg-white hover:text-charcoal transition-all text-[10px] uppercase tracking-widest font-bold">
                    Discover Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
