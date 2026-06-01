'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Aarav Sharma", crs: "Core Java", rating: 5, txt: "Practical approach helped me land a job. Excellent faculty.", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Priya Singh", crs: "Graphic Designer", rating: 5, txt: "Registration being free helped. My design skills improved dramatically.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" }
];

export default function Testimonials() {
  const [curr, setCurr] = useState(0);
  const nextSlide = () => setCurr((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-[#f0f4ff] rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm h-full flex flex-col relative overflow-hidden group">
      <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-blue-200/50 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-xl font-bold flex items-center gap-3 text-[#0E2A47]">
          <div className="w-2 h-6 bg-[#1D4ED8] rounded-full"></div>
          Student Reviews
        </h3>
        <button onClick={nextSlide} className="w-8 h-8 rounded-full bg-white text-[#1D4ED8] shadow-sm flex items-center justify-center hover:bg-[#1D4ED8] hover:text-white transition-colors">
           <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center relative z-10">
        <Quote className="w-10 h-10 text-blue-200 mb-4" />
        <p className="text-slate-700 italic text-lg leading-relaxed mb-6 font-medium">
          "{testimonials[curr].txt}"
        </p>

        <div className="flex items-center gap-4 mt-auto">
           <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
             <Image src={testimonials[curr].img} alt="Student" width={48} height={48} className="object-cover h-full" referrerPolicy="no-referrer" />
           </div>
           <div>
             <h4 className="font-bold text-[#0E2A47] text-sm leading-tight">{testimonials[curr].name}</h4>
             <p className="text-[#FF8A00] text-[10px] font-bold uppercase tracking-wider">{testimonials[curr].crs}</p>
             <div className="flex gap-0.5 mt-1 text-[#FFB000]">
               {[...Array( testimonials[curr].rating )].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
