'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm h-full flex flex-col lg:flex-row gap-8">
      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-[#0E2A47]">
          <div className="w-2 h-6 bg-[#1D4ED8] rounded-full"></div>
          About Our Institute
        </h3>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-[#0E2A47] mb-6 leading-tight">
          Dedicated To Practical Education
        </h2>
        
        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
          BFIT® Institute of Computer Science is one of the leading computer training institutes in Saharanpur. We are dedicated to providing practical, career-oriented education through professional offline training programs.
        </p>
        
        <div className="bg-[#f0f4ff] border border-blue-100 p-5 rounded-2xl">
          <p className="text-[#1D4ED8] font-medium leading-relaxed italic text-lg lg:text-xl">
            "We focus on skill development, hands-on learning, industry-relevant curriculum, and student success."
          </p>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[300px]">
        <Image 
          src="/images/about.jpg" 
          alt="Students learning at BFIT"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 border-4 border-white rounded-2xl pointer-events-none"></div>
        {/* Floating badge inside image */}
        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]">
          <div className="w-10 h-10 rounded-xl bg-[#0E2A47] text-[#FFB000] flex justify-center items-center font-black text-xl shrink-0">
            #1
          </div>
          <p className="font-bold text-xs uppercase text-slate-800 leading-tight">Institute in Saharanpur</p>
        </div>
      </div>
    </section>
  );
}
