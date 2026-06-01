'use client';

import { PhoneCall, BookOpenCheck, UserPlus, Lightbulb } from 'lucide-react';

const steps = [
  { icon: PhoneCall, title: "Contact", desc: "Counseling" },
  { icon: BookOpenCheck, title: "Select", desc: "Choose Course" },
  { icon: UserPlus, title: "Register", desc: "Free Setup" },
  { icon: Lightbulb, title: "Learn", desc: "Practically" }
];

export default function Timeline() {
  return (
    <section className="bg-[#0E2A47] rounded-3xl p-6 md:p-8 border-4 border-white shadow-xl h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">
          <div className="w-2 h-6 bg-[#FF8A00] rounded-full"></div>
          Admission Process
        </h3>

        <div className="space-y-6 flex-1 flex flex-col justify-center">
          {steps.map((step, idx) => (
             <div key={idx} className="flex gap-4 items-center group relative">
                {idx !== steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-[-24px] w-0.5 bg-slate-700/50 group-hover:bg-[#FF8A00] transition-colors"></div>
                )}
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 text-[#FFB000] group-hover:bg-[#FF8A00] group-hover:text-white group-hover:border-[#FF8A00] transition-all shadow-lg z-10">
                   <step.icon className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="text-white font-bold leading-tight">{step.title}</h4>
                   <p className="text-[#FFB000] text-xs font-medium uppercase tracking-wider">{step.desc}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
