"use client";

import { motion } from "framer-motion";
import { Shield, Calendar, ClipboardCheck, Home, MapPin, Package } from "lucide-react";

const features = [
  { 
    icon: Shield, 
    title: "Lifetime warranty¹", 
    desc: "Virasat assurance" 
  },
  { 
    icon: Calendar, 
    title: "45-day move-in guarantee²", 
    desc: "On-time delivery" 
  },
  { 
    icon: ClipboardCheck, 
    title: "146 quality checks", 
    desc: "Poka-yoke standards" 
  },
  { 
    icon: Home, 
    title: "1,00,000+ happy homes", 
    desc: "Trusted by families" 
  },
  { 
    icon: MapPin, 
    title: "100+ cities", 
    desc: "Pan-India presence" 
  },
  { 
    icon: Package, 
    title: "20 lakh+ catalogue products", 
    desc: "Infinite choices" 
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary">
            Why choose us
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-secondary/5 flex flex-col items-center text-center group hover:shadow-xl hover:border-accent/20 transition-all duration-500"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <feature.icon className="text-secondary/40 group-hover:text-accent transition-colors" size={28} />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-secondary mb-2 leading-snug">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[10px] text-secondary/40 uppercase tracking-widest font-bold">
            ¹Terms and Conditions Apply | ²Valid for select cities and projects
          </p>
        </div>
      </div>
    </section>
  );
}
