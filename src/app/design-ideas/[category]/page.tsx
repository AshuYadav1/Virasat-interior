"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, Filter } from "lucide-react";
import { openQuoteModal } from "@/hooks/useQuoteModal";

const designCategories = {
  "living-room": {
    title: "Living Room Interior Designs",
    description: "Thinking of redoing your Living Room? Let's make it personal. Your living room should feel like you—calm, comfortable, and effortlessly stylish.",
    image: "/images/hero.png",
  },
  "master-bedroom": {
    title: "Bedroom Interior Designs",
    description: "Your master bedroom should be your sanctuary. Explore designs that blend luxury with comfort for the perfect night's rest.",
    image: "/images/bedroom.png",
  },
  "kitchen": {
    title: "Kitchen Interior Designs",
    description: "The heart of your home deserves the best. Modern, functional, and beautiful kitchen designs for Indian homes.",
    image: "/images/kitchen.png",
  },
  "wardrobe": {
    title: "Wardrobe & Storage Designs",
    description: "Maximize your space with intelligent storage solutions that don't compromise on style.",
    image: "/images/portfolio.png",
  },
  "bathroom": {
    title: "Modern Bathroom Designs",
    description: "Elegant and functional bathroom solutions that turn your daily routine into a spa-like experience.",
    image: "/images/ceiling.png",
  },
};

const designs = [
  { id: 1, title: "Modern Master Bedroom with Upholstered Bed", image: "/images/bedroom.png" },
  { id: 2, title: "Contemporary Design with Forest-Themed Wall", image: "/images/hero.png" },
  { id: 3, title: "Minimalist Style with Textured Accents", image: "/images/ceiling.png" },
  { id: 4, title: "Scandinavian Inspired Layout", image: "/images/dining.png" },
  { id: 5, title: "Industrial Loft Style", image: "/images/kitchen.png" },
  { id: 6, title: "Bohemian Chic Sanctuary", image: "/images/portfolio.png" },
];

export default function CategoryPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const params = useParams();
  const categorySlug = params.category as string;
  const category = designCategories[categorySlug as keyof typeof designCategories] || designCategories["master-bedroom"];

  const filterOptions = [
    { label: "Style", options: ["Modern", "Classic", "Minimalist", "Bose", "Industrial"] },
    { label: "Budget", options: ["Standard", "Premium", "Luxury"] },
    { label: "Layout", options: ["L-Shaped", "U-Shaped", "Straight", "Parallel"] },
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-secondary/40 mb-8">
            <Link href="/" className="hover:text-accent">Home</Link>
            <ChevronRight size={12} />
            <Link href="/design-ideas" className="hover:text-accent">Design Ideas</Link>
            <ChevronRight size={12} />
            <span className="text-secondary">{category.title}</span>
          </nav>
          
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-secondary md:whitespace-nowrap">
              {category.title}
            </h1>
            <p className="text-secondary/60 text-lg font-light leading-relaxed max-w-2xl">
              {category.description}
            </p>
            <button className="text-accent text-sm font-bold uppercase tracking-widest border-b border-accent pb-1">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Sub-nav / Filters */}
      <section className="border-b border-secondary/5 sticky top-20 bg-white z-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-8 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {[
                { name: "Kitchen", slug: "kitchen" },
                { name: "Master Bedroom", slug: "master-bedroom" },
                { name: "Living room", slug: "living-room" },
                { name: "Bathroom", slug: "bathroom" },
                { name: "Wardrobe", slug: "wardrobe" }
              ].map((item) => (
                <Link 
                  key={item.slug}
                  href={`/design-ideas/${item.slug}`}
                  className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap pb-2 border-b-2 transition-colors ${
                    item.slug === categorySlug ? "border-accent text-accent" : "border-transparent text-secondary/40 hover:text-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest border px-4 py-2 rounded-full transition-all duration-300 ${
                isFilterOpen ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary/10 hover:bg-secondary/5"
              }`}
            >
              <Filter size={14} className={isFilterOpen ? "rotate-180 transition-transform" : ""} />
              <span>{isFilterOpen ? "Close Filters" : "Filters"}</span>
            </button>
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 pb-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {filterOptions.map((filter) => (
                    <div key={filter.label} className="space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{filter.label}</h4>
                      <div className="flex flex-wrap gap-2">
                        {filter.options.map((option) => (
                          <button 
                            key={option}
                            className="px-4 py-2 rounded-full border border-secondary/10 text-[10px] uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center space-x-2 mb-12">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Top Trending Designs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designs.map((design) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={`/design-ideas/${categorySlug}/${design.id}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 shadow-xl shadow-black/5">
                    <Image
                      src={design.image}
                      alt={design.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-secondary group-hover:text-accent transition-colors leading-tight">
                      {design.title}
                    </h3>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openQuoteModal();
                      }}
                      className="w-full py-4 border border-accent text-accent text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-accent hover:text-white transition-all"
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <button className="px-12 py-5 bg-secondary text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-accent transition-colors">
              Load More Designs
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
