"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { openQuoteModal } from "@/hooks/useQuoteModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#estimate" },
  { name: "Portfolio", href: "/#inspiration" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isDark = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center ${isScrolled ? "pt-4" : "pt-0"
        }`}
    >
      <div
        className={`w-full max-w-[1440px] transition-all duration-500 px-6 md:px-12 ${isScrolled
            ? "mx-6 bg-white/80 backdrop-blur-xl shadow-2xl shadow-black/5 py-4 rounded-full border border-black/5"
            : `py-8 ${isHome ? "bg-transparent" : "bg-white border-b border-black/5"}`
          }`}
      >
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-10">
            <span className={`text-xl md:text-2xl font-playfair font-bold tracking-tighter transition-colors ${isDark ? "text-[#1A1A1A]" : "text-white"
              }`}>
              VIRASAT <span className="text-[#B05B4B]">INTERIORS</span>
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            <div className="flex items-center space-x-10 pointer-events-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-[#B05B4B] relative group ${isDark ? "text-[#1A1A1A]/70" : "text-white/70"
                    }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B05B4B] transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block z-10">
            <button
              onClick={openQuoteModal}
              className={`px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all rounded-full ${isDark
                  ? "bg-[#1A1A1A] text-white hover:bg-[#B05B4B]"
                  : "bg-white text-[#1A1A1A] hover:bg-[#B05B4B] hover:text-white"
                }`}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-[#1A1A1A]" />
            ) : (
              <Menu size={24} className={isDark ? "text-[#1A1A1A]" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 right-0 bg-white shadow-2xl z-[90] overflow-hidden"
          >
            <div className="pt-24 pb-12 px-8 flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-[0.3em] text-secondary hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="bg-accent text-white py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-lg shadow-accent/20"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
