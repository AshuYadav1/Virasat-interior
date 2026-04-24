"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { openQuoteModal } from "@/hooks/useQuoteModal";

const projects = [
  {
    id: 1,
    title: "Modern 4 BHK Penthouse, Bangalore",
    image: "/images/project-1.png",
    gallery: ["/images/project-1.png", "/images/hero.png", "/images/kitchen.png"],
  },
  {
    id: 2,
    title: "Contemporary 4 BHK penthouse, Noida",
    image: "/images/project-2.png",
    gallery: ["/images/project-2.png", "/images/bedroom.png", "/images/kitchen.png"],
  },
  {
    id: 3,
    title: "Elegant 2 BHK flat, Mumbai",
    image: "/images/project-3.png",
    gallery: ["/images/project-3.png", "/images/hero.png", "/images/bedroom.png"],
  },
  {
    id: 4,
    title: "Luxury Villa, Hyderabad",
    image: "/images/hero.png",
    gallery: ["/images/hero.png", "/images/project-1.png", "/images/project-2.png"],
  },
];

export default function VirasatHomes() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="inspiration" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary">
              Get a glimpse of Virasat homes
            </h2>
            <p className="text-secondary/60 text-lg font-light">
              Latest dream home interiors delivered the hassle-free way
            </p>
          </div>
          <button 
            onClick={openQuoteModal}
            className="px-8 py-4 bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            Get Free Quote
          </button>
        </div>

        {/* Carousel */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/5] relative rounded-[32px] overflow-hidden cursor-pointer snap-start group/card shadow-xl shadow-black/5"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-xl font-bold leading-tight group-hover/card:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white"
          >
            <ChevronLeft size={24} className="text-secondary" />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-white"
          >
            <ChevronRight size={24} className="text-secondary" />
          </button>
        </div>
      </div>

      {/* Full Page Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            <div className="sticky top-0 right-0 p-8 flex justify-end z-20 bg-white/80 backdrop-blur-md">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors shadow-xl"
              >
                <X size={24} />
              </button>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 pb-24 space-y-12">
              <div className="space-y-4 text-center mt-8">
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-secondary">{selectedProject.title}</h2>
                <p className="text-secondary/40 uppercase tracking-widest text-xs font-bold">Project Gallery</p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {selectedProject.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative aspect-video rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl shadow-black/10 ${
                      idx % 3 === 2 ? "col-span-2 aspect-[21/9]" : "col-span-1"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
