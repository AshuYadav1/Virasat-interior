"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const inspirationItems = [
  {
    title: "Living Room",
    slug: "living-room",
    image: "/images/hero.png",
    gridClass: "md:col-span-2 md:row-span-2 h-[400px] md:h-full",
  },
  {
    title: "Master Bedroom",
    slug: "master-bedroom",
    image: "/images/bedroom.png",
    gridClass: "col-span-1 row-span-1 h-[250px] md:h-[300px]",
  },
  {
    title: "False Ceiling",
    slug: "false-ceiling",
    image: "/images/ceiling.png",
    gridClass: "col-span-1 row-span-1 h-[250px] md:h-[300px]",
  },
  {
    title: "Dining Room",
    slug: "dining-room",
    image: "/images/dining.png",
    gridClass: "col-span-1 row-span-1 h-[250px] md:h-[300px]",
  },
  {
    title: "Wardrobe",
    slug: "wardrobe",
    image: "/images/portfolio.png",
    gridClass: "col-span-1 row-span-1 h-[250px] md:h-[300px]",
  },
];

export default function Inspiration() {
  return (
    <section id="inspiration" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-playfair font-bold text-secondary leading-tight md:whitespace-nowrap">
              Inspiration for <span className="italic text-accent">home interior designs</span>
            </h2>
            <p className="text-secondary/60 text-lg font-light">
              Give your home a new look with these interior design ideas curated for you
            </p>
          </div>
          <Link href="/design-ideas" className="flex items-center space-x-2 text-secondary text-sm font-bold uppercase tracking-[0.3em] hover:text-accent transition-colors group">
            <div className="text-right">
              <span className="block">VIEW</span>
              <span className="block">ALL</span>
            </div>
            <div className="w-12 h-12 border border-secondary group-hover:border-accent rounded-full flex items-center justify-center transition-colors">
              <ChevronRight size={24} />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {inspirationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer rounded-2xl shadow-lg ${item.gridClass}`}
            >
              <Link href={`/design-ideas/${item.slug}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-6 left-6">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white rounded-lg group-hover:bg-accent group-hover:border-accent transition-all">
                    {item.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
