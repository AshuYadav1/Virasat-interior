"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Share2, Heart, Star, ChevronDown, MessageCircle } from "lucide-react";
import { openQuoteModal } from "@/hooks/useQuoteModal";

export default function DesignDetailPage() {
  const params = useParams();

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-secondary/40 mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <ChevronRight size={12} />
          <Link href="/design-ideas" className="hover:text-accent">Design Ideas</Link>
          <ChevronRight size={12} />
          <Link href={`/design-ideas/${params.category}`} className="hover:text-accent capitalize">{params.category?.toString().replace('-', ' ')}</Link>
          <ChevronRight size={12} />
          <span className="text-secondary">Luxury Design Details</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
              <Image
                src="/images/bedroom.png"
                alt="Design Detail"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 right-6 flex space-x-3">
                <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-secondary hover:bg-accent hover:text-white transition-all shadow-lg">
                  <Share2 size={20} />
                </button>
                <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-secondary hover:text-accent transition-all shadow-lg">
                  <Heart size={20} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer hover:ring-2 ring-accent transition-all">
                  <Image src={`/images/${i === 1 ? 'hero' : i === 2 ? 'kitchen' : 'ceiling'}.png`} alt="thumbnail" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details Section */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex bg-accent/10 px-3 py-1 rounded-full items-center space-x-2">
                  <Star size={14} className="text-accent fill-accent" />
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">4.9 Rating</span>
                </div>
                <span className="text-[10px] font-bold text-secondary/40 uppercase tracking-widest">Premium Collection</span>
              </div>
              <h1 className="text-4xl font-playfair font-bold text-secondary leading-tight">
                Contemporary Master Bedroom Design with Terracotta Wall
              </h1>
            </div>

            <div className="grid grid-cols-3 gap-4 border-y border-secondary/5 py-8">
              <div className="text-center">
                <span className="block text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-1">Warranty</span>
                <span className="block text-xs font-bold text-secondary">Lifetime</span>
              </div>
              <div className="text-center border-x border-secondary/5">
                <span className="block text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-1">Delivery</span>
                <span className="block text-xs font-bold text-secondary">45 Days</span>
              </div>
              <div className="text-center">
                <span className="block text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-1">Checks</span>
                <span className="block text-xs font-bold text-secondary">146+ Quality</span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">Design Details:</h4>
              <ul className="space-y-4">
                <li className="flex justify-between text-sm border-b border-secondary/5 pb-2">
                  <span className="text-secondary/60">Style:</span>
                  <span className="font-bold text-secondary">Contemporary</span>
                </li>
                <li className="flex justify-between text-sm border-b border-secondary/5 pb-2">
                  <span className="text-secondary/60">Room Dimension:</span>
                  <span className="font-bold text-secondary">14x12 feet</span>
                </li>
              </ul>
              
              <div className="space-y-3">
                <span className="block text-xs font-bold text-secondary/60 uppercase tracking-widest">Furniture Highlights:</span>
                <ul className="space-y-2 list-disc list-inside text-sm text-secondary/80 font-light">
                  <li>Queen size bed with hydraulic storage</li>
                  <li>Two drawer bedside table</li>
                  <li>Terracotta accent wall with wooden panels</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <button 
                onClick={openQuoteModal}
                className="w-full py-5 bg-accent text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full shadow-2xl shadow-accent/30 hover:scale-[1.02] transition-transform"
              >
                Get Free Quote
              </button>
              <button className="w-full py-5 border border-secondary/10 text-secondary text-xs font-bold uppercase tracking-[0.3em] rounded-full hover:bg-secondary hover:text-white transition-all flex items-center justify-center space-x-3">
                <MessageCircle size={18} />
                <span>Chat with Designer</span>
              </button>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-muted transition-colors">
              <div className="space-y-1">
                <span className="block text-[10px] font-bold text-secondary/40 uppercase tracking-widest">Estimated Cost</span>
                <span className="block text-xl font-playfair font-bold text-secondary">₹1.5 Lakhs - 2.8 Lakhs</span>
              </div>
              <ChevronRight className="text-accent group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
