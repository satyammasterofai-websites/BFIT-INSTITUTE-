'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Award } from 'lucide-react';

function Counter({ end, suffix = '', duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      let animationFrame: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        if (end % 1 !== 0) {
           setCount(Number((easeOutQuart * end).toFixed(1)));
        } else {
           setCount(Math.floor(easeOutQuart * end));
        }

        if (progress < 1) animationFrame = requestAnimationFrame(animate);
        else setCount(end);
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [end, duration, isInView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="h-full grid grid-cols-2 gap-3 sm:gap-4">
      {/* Stat 1 */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 flex flex-col items-center justify-center shadow-sm col-span-1 min-h-[140px]">
        <span className="text-4xl sm:text-5xl font-black text-[#1D4ED8]">
           <Counter end={50} suffix="+" />
        </span>
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold text-center mt-2">Completed Batches</span>
      </div>

      {/* Stat 2 */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 flex flex-col items-center justify-center shadow-sm col-span-1">
        <span className="text-4xl sm:text-5xl font-black text-[#FF8A00]">
           <Counter end={7} suffix="+" />
        </span>
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold text-center mt-2">Pro Courses</span>
      </div>

      {/* Stat 3 */}
      <div className="bg-[#FFB000] rounded-3xl p-5 sm:p-6 flex items-center justify-between border border-orange-200 shadow-sm col-span-2">
        <div className="text-[#0E2A47] font-bold leading-tight text-lg sm:text-xl">
          Placement<br/>Guidance
        </div>
        <div className="bg-[#0E2A47] rounded-2xl p-4 text-white shadow-lg">
          <Award className="w-8 h-8" />
        </div>
      </div>
      
      {/* Stat 4 */}
      <div className="bg-white rounded-3xl p-5 border border-slate-100 flex items-center justify-between shadow-sm col-span-2 group">
        <div className="flex -space-x-3 items-center">
            <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 text-[#1D4ED8] flex items-center justify-center font-bold text-sm z-30">1k+</div>
            <div className="w-12 h-12 rounded-full border-2 border-[#1D4ED8] bg-slate-300 z-20 overflow-hidden"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Student" className="w-full h-full object-cover"/></div>
            <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-400 z-10 overflow-hidden"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Student" className="w-full h-full object-cover"/></div>
        </div>
        <div className="text-right">
           <p className="font-bold text-[#0E2A47] text-lg lg:text-xl">Students</p>
           <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Trained</p>
        </div>
      </div>
    </section>
  );
}
