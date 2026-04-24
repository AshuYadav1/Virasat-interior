"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Modular Kitchens",
    description: "Highly functional, ergonomic designs that make the heart of your home truly exceptional.",
    image: "/images/kitchen.png",
    tag: "Gourmet Experience",
  },
  {
    title: "Luxury Wardrobes",
    description: "Bespoke storage solutions that blend seamless aesthetics with intelligent space management.",
    image: "/images/bedroom.png",
    tag: "Elegance Defined",
  },
  {
    title: "Full Home Interiors",
    description: "Turnkey solutions from concept to completion, ensuring a cohesive and premium living experience.",
    image: "/images/hero.png",
    tag: "Complete Transformation",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-stone">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-brass"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-playfair font-bold text-charcoal"
            >
              Comprehensive Design <br />
              <span className="text-sage italic">For Every Corner</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-charcoal/60 max-w-sm text-sm leading-relaxed"
          >
            From modular components to complete structural transformations, we provide the highest standards of craftsmanship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] overflow-hidden bg-charcoal mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-white">
                    {service.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 bg-brass flex items-center justify-center text-white">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-3 group-hover:text-brass transition-colors">
                {service.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
