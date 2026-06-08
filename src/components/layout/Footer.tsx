"use client";

import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

interface IconProps {
  size?: number;
  className?: string;
}

const Instagram = ({ size = 24, className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24, className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Youtube = ({ size = 24, className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);


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
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/virasatinterior" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61589067932145" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://youtube.com/@virasatinteriors" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all"
              aria-label="Subscribe to our YouTube channel"
            >
              <Youtube size={18} />
            </a>
            <a 
              href="https://wa.me/918999451189" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
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
                <a 
                  href="https://share.google/VIYpHKtU51YYsoezv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent transition-all duration-300"
                >
                  A-1804 Shree Krishna Elegance,<br />
                  Opposite Deep Sky Building, Madhuban,<br />
                  Vasai East
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <Phone className="text-accent shrink-0" size={18} />
              <span className="text-secondary/60 text-sm font-light">
                <a href="tel:+918999451189" className="hover:text-accent transition-all duration-300">
                  +91 89994 51189
                </a>
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail className="text-accent shrink-0" size={18} />
              <span className="text-secondary/60 text-sm font-light">
                <a href="mailto:virasatinterior@gmail.com" className="hover:text-accent transition-all duration-300">
                  virasatinterior@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Serving Areas Section for SEO/GEO/AEO */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-secondary/5">
        <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/40 mb-3">Serving Areas</h5>
        <p className="text-secondary/50 text-xs font-light leading-relaxed">
          Mumbai • Vasai Virar • Dadar • Borivali • Malad • Ghatkopar • Andheri • Bandra • Thane • Navi Mumbai • and other premium residential areas in MMR.
        </p>
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
