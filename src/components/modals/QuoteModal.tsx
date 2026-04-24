"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ChevronDown, Award, Sparkles } from "lucide-react";

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleToggle = (e: any) => {
      setIsOpen(e.detail);
      if (e.detail === false) {
        setStatus("idle");
      }
    };
    window.addEventListener("toggle-quote-modal", handleToggle);
    return () => window.removeEventListener("toggle-quote-modal", handleToggle);
  }, []);

  const onClose = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3000);
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1A1A]/90 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[550px] bg-white rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] flex flex-col md:flex-row"
          >
            {/* Decorative Side Ribbon (Brass Accent) */}
            <div className="hidden md:block w-3 bg-gradient-to-b from-[#C5A059] via-[#E2C68E] to-[#C5A059] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:4px_4px]" />
            </div>

            <div className="flex-1 relative">
              {/* Premium Badge */}
              <div className="absolute -top-1 -right-1 bg-gradient-to-br from-[#B05B4B] to-[#8E4437] text-white px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] rounded-bl-2xl shadow-lg z-10 flex items-center space-x-2">
                <Award size={10} />
                <span>Premium Quality</span>
              </div>

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#1A1A1A]/5 flex items-center justify-center hover:bg-[#B05B4B] hover:text-white transition-all duration-300 z-10"
              >
                <X size={18} />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 space-y-8 text-center"
                  >
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-200">
                        <Check size={48} />
                      </div>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -inset-4 bg-green-500/20 rounded-full -z-10"
                      />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-3xl font-playfair font-bold text-[#1A1A1A]">Inquiry Received</h4>
                      <p className="text-[#1A1A1A]/60 leading-relaxed text-lg font-light">
                        Thank you for choosing Virasat. <br />
                        Our designer will contact you shortly.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="space-y-10">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-[#C5A059]">
                        <Sparkles size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Exclusive Design Consultation</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-playfair font-bold text-[#1A1A1A] leading-tight">
                        Transform your home <br />
                        <span className="text-[#B05B4B]">into a masterpiece</span>
                      </h3>
                      <p className="text-[#1A1A1A]/40 text-sm font-light">Enter your details and get a personalized interior quote in 24 hours.</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative group">
                          <input 
                            type="text" 
                            required
                            placeholder="Full Name" 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-6 py-4 bg-[#F7F7F7] border-2 border-transparent rounded-2xl focus:border-[#C5A059]/20 focus:bg-white outline-none text-[#1A1A1A] transition-all duration-300 placeholder:text-[#1A1A1A]/30 text-sm"
                          />
                        </div>
                        <div className="relative group">
                          <input 
                            type="email" 
                            required
                            placeholder="Email Address" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-6 py-4 bg-[#F7F7F7] border-2 border-transparent rounded-2xl focus:border-[#C5A059]/20 focus:bg-white outline-none text-[#1A1A1A] transition-all duration-300 placeholder:text-[#1A1A1A]/30 text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-24 px-4 py-4 bg-[#F7F7F7] rounded-2xl flex items-center justify-center gap-2 border-2 border-transparent">
                          <span className="text-xl">🇮🇳</span>
                          <span className="text-[#1A1A1A] font-bold text-sm">+91</span>
                        </div>
                        <input 
                          type="tel" 
                          required
                          placeholder="Phone Number" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="flex-1 px-6 py-4 bg-[#F7F7F7] border-2 border-transparent rounded-2xl focus:border-[#C5A059]/20 focus:bg-white outline-none text-[#1A1A1A] transition-all duration-300 placeholder:text-[#1A1A1A]/30 text-sm"
                        />
                      </div>

                      <div className="relative">
                        <select 
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-6 py-4 bg-[#F7F7F7] border-2 border-transparent rounded-2xl focus:border-[#C5A059]/20 focus:bg-white outline-none text-[#1A1A1A] transition-all duration-300 appearance-none text-sm cursor-pointer"
                        >
                          <option value="">Select Your City</option>
                          <option value="bangalore">Bangalore</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="noida">Noida</option>
                          <option value="gurugram">Gurugram</option>
                          <option value="other">Other Cities</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#1A1A1A]/20">
                          <ChevronDown size={18} />
                        </div>
                      </div>

                      {status === "error" && (
                        <motion.p 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-xs text-[#B05B4B] font-bold tracking-tight"
                        >
                          {errorMessage}
                        </motion.p>
                      )}

                      <button 
                        disabled={status === "submitting"}
                        className="w-full relative group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#B05B4B] to-[#8E4437] transition-transform duration-500 group-hover:scale-105" />
                        <div className="relative px-8 py-5 flex items-center justify-center space-x-3 text-white">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                            {status === "submitting" ? "Securing Lead..." : "Get Free Quote"}
                          </span>
                          <Sparkles size={14} className="group-hover:rotate-12 transition-transform duration-500" />
                        </div>
                      </button>

                      <div className="flex items-center justify-center space-x-6 pt-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                          <span className="text-[8px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">10 Year Warranty</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                          <span className="text-[8px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">45 Days Delivery</span>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
