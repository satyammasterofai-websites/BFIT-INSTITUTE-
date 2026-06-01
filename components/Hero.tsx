'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg', // Upload 'hero-1.jpg' into the /public/images/ folder
  },
  {
    id: 2,
    image: '/images/hero-2.jpg', // Upload 'hero-2.jpg' into the /public/images/ folder
  },
  {
    id: 4,
    image: '/images/hero-4.jpg', // Upload 'hero-3.jpg' into the /public/images/ folder
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-full min-h-[500px] w-full rounded-3xl overflow-hidden bg-[#0E2A47] p-8 md:p-12 flex flex-col justify-end text-white border-4 border-white shadow-xl">
      {/* Background Slider & Overlays */}
      <div className="absolute inset-0 opacity-30 select-none pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0E2A47] via-[#0E2A47]/80 to-[#1D4ED8] z-10"></div>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt="BFIT Classroom"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Decorative Shapes inside Hero */}
        <div className="absolute top-10 right-10 w-64 h-64 border border-white rounded-full opacity-20 z-20 pointer-events-none hidden md:block"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FF8A00] blur-[100px] opacity-40 z-20 pointer-events-none"></div>
      </div>

      <div className="relative z-30 flex flex-col items-start gap-4 h-full justify-end max-w-2xl">
        <span className="px-4 py-1.5 bg-[#FF8A00] text-xs font-bold rounded-full inline-block tracking-widest uppercase shadow-lg shadow-orange-900/20 text-white">
          ★ 4.9 Rating | Registration Free
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[0.95] text-white">
          Empowering<br/>The Next Generation
        </h1>
        
        <p className="text-lg md:text-xl text-slate-200 font-light mt-2 mb-6">
          Practical computer skills and career-focused training at Saharanpur's leading institute. <span className="text-white font-medium italic">"Knowledge is the best asset."</span>
        </p>
        
        <div className="flex flex-wrap gap-4 mt-2">
          <Link href="#courses" className="px-6 py-3.5 bg-white text-[#0E2A47] font-bold rounded-xl flex items-center gap-2 hover:bg-slate-100 transition-colors shadow-lg active:scale-95">
            Explore Courses 
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="px-6 py-3.5 bg-white/10 backdrop-blur border border-white/20 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/20 transition-colors">
            <PlayCircle className="w-5 h-5 text-[#FFB000]" />
            Watch Video
          </button>
        </div>
      </div>
      
      {/* Slide Indicators inside hero */}
      <div className="absolute top-8 right-8 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-[#FF8A00]' : 'w-2 bg-white/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
