"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = [
  { id: 1, src: "/Videos/Video-119.mp4" },
  { id: 2, src: "/Videos/Video-591.mp4" },
  { id: 3, src: "/Videos/Video-648.mp4" },
  { id: 4, src: "/Videos/Video-763.mp4" },
];

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex-shrink-0 w-[300px] md:w-[350px] aspect-[9/16] bg-[#1A1A1A] overflow-hidden relative border border-[#1A1A1A]/10 shadow-2xl group cursor-pointer"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />
      
      {/* Premium Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Central Play/Pause Icon */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="w-20 h-20 bg-[#C5A059]/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm shadow-xl">
              <Play fill="white" size={32} className="ml-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {isPlaying && (
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
            <Pause fill="white" size={24} />
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={toggleMute}
            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#C5A059] transition-colors"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 w-full bg-white/20 overflow-hidden">
          <motion.div 
            className="h-full bg-[#C5A059]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", bounce: 0, duration: 0.1 }}
          />
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-6 left-6 z-20">
        <div className="px-3 py-1 bg-[#C5A059] text-white text-[10px] font-bold tracking-widest uppercase">
          Project Reveal
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkVideos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#F7F7F7] overflow-hidden border-y border-[#1A1A1A]/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-[#1A1A1A] leading-tight md:whitespace-nowrap">
              Experience the <span className="text-[#C5A059] italic">Transformation</span>
            </h2>
            <p className="text-[#1A1A1A]/60 text-lg font-inter max-w-2xl">
              Watch our latest project reveals and behind-the-scenes transformations. Witness the journey from concept to reality.
            </p>
          </div>
        </div>

        <div className="relative group">
          {/* Carousel */}
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12"
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="snap-start"
              >
                <VideoCard src={video.src} />
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-8 md:absolute md:top-0 md:right-0 md:mt-0">
            <button 
              onClick={() => scroll("left")}
              className="w-14 h-14 bg-white border border-[#1A1A1A] flex items-center justify-center transition-all hover:bg-[#1A1A1A] hover:text-white group"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-14 h-14 bg-white border border-[#1A1A1A] flex items-center justify-center transition-all hover:bg-[#1A1A1A] hover:text-white group"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
