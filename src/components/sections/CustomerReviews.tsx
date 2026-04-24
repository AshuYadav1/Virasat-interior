"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rohit Paul & Shveta",
    location: "Gurugram",
    image: "/images/review-1.png",
    quote: "Hats off to the entire team at Virasat. They finished the project ahead of time and the quality is exceptional.",
  },
  {
    name: "Swati & Gaurav",
    location: "Bangalore",
    image: "/images/review-2.png",
    quote: "Our experience with Virasat was nice thanks to the project managers who handled every detail with care.",
  },
  {
    name: "Puja Bhatia",
    location: "Gurugram",
    image: "/images/review-3.png",
    quote: "We reached out to Virasat and they designed the house that we really wanted. Simply beautiful work.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary">
            Check out some of our customer reviews
          </h2>
          <button className="flex items-center space-x-2 text-accent text-sm font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
            <span>View More</span>
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F7F7F7] rounded-[32px] p-8 relative overflow-hidden group border border-secondary/5"
            >
              <Quote className="absolute top-6 left-6 text-secondary/5" size={80} />
              
              <div className="relative z-10 space-y-8">
                {/* Image Container with Play Button */}
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 transform transition-transform group-hover:scale-110">
                      <Play fill="white" size={24} className="ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-lg font-bold leading-tight">{review.name}</h4>
                    <p className="text-xs text-white/70 uppercase tracking-widest mt-1">{review.location}</p>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-secondary/60 text-lg font-light leading-relaxed italic">
                    "{review.quote}"
                  </p>
                  <Quote className="absolute -bottom-4 -right-4 text-secondary/5 rotate-180" size={60} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
