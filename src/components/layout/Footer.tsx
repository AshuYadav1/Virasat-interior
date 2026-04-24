"use client";

import Link from "next/link";
import { Camera, Share2, Briefcase, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted pt-24 pb-12 text-secondary">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-secondary/5 pb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <span className="text-2xl font-playfair font-bold tracking-tighter">
            VIRASAT <span className="text-accent">INTERIORS</span>
          </span>
          <p className="text-secondary/60 text-sm leading-relaxed max-w-xs font-light">
            Crafting heritage-inspired luxury interiors that blend timeless elegance with modern functionality. Every space tells a story.
          </p>
          <div className="flex space-x-5">
            <Link href="#" className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all">
              <Camera size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all">
              <Share2 size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all">
              <Briefcase size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary/40">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Services", "Portfolio", "Process", "Reviews"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm hover:text-accent transition-colors font-light">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary/40">Our Services</h4>
          <ul className="space-y-4">
            {["Modular Kitchen", "Full Home Interiors", "Wardrobe Design", "Living Room Transformation", "Commercial Spaces"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm hover:text-accent transition-colors font-light">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-secondary/40">Get in Touch</h4>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <MapPin className="text-accent shrink-0" size={18} />
              <span className="text-secondary/60 text-sm font-light leading-relaxed">
                123 Design Avenue, <br />
                MG Road, Mumbai - 400001
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="text-accent shrink-0" size={18} />
              <span className="text-secondary/60 text-sm font-light">+91 89994 51189</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail className="text-accent shrink-0" size={18} />
              <span className="text-secondary/60 text-sm font-light">hello@virasatinteriors.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-secondary/30">
        <p>© {currentYear} VIRASAT INTERIORS. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
