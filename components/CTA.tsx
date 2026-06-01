'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-[#FF8A00] to-[#E65100] rounded-3xl p-6 md:p-10 text-center text-white shadow-xl flex flex-col justify-center h-full relative overflow-hidden">
      <div className="absolute top-[-50%] left-[-20%] w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <span className="px-3 py-1 bg-white/20 font-bold rounded-full text-[10px] sm:text-xs uppercase tracking-widest mb-4 inline-block backdrop-blur">
          Limited Seats Available
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-black mb-4 leading-tight">
          Ready to Start<br/>Your Journey?
        </h2>
        <p className="text-white/90 text-sm md:text-base font-medium mb-8 max-w-sm mx-auto">
          Join BFIT and build your future with practical computer education today.
        </p>

        <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-[#E65100] font-black rounded-full overflow-hidden transition-transform hover:-translate-y-1 shadow-lg w-full sm:w-auto active:scale-95">
          <span className="relative z-10 flex items-center gap-2 text-lg">
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
}
