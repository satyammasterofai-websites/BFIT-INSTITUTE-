'use client';

import { Building2, Wrench, Users, MonitorPlay, Briefcase, UserCheck } from 'lucide-react';

const features = [
  { icon: Building2, title: "Pro Labs", desc: "Modern Equipments" },
  { icon: Wrench, title: "Practical", desc: "Hands-on projects" },
  { icon: Users, title: "Expert Faculty", desc: "Industry pros" },
  { icon: MonitorPlay, title: "Offline Study", desc: "Classroom focus" },
  { icon: Briefcase, title: "Career Focus", desc: "Job ready courses" },
  { icon: UserCheck, title: "Personal Focus", desc: "One-to-one attention" },
];

export default function Features() {
  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-[#0E2A47]">
        <div className="w-2 h-6 bg-[#FF8A00] rounded-full"></div>
        Why Choose BFIT
      </h3>
      
      <div className="grid grid-cols-2 gap-3 flex-1">
        {features.map((feature, idx) => (
           <div key={idx} className="p-4 bg-[#f8f9fa] rounded-2xl border border-slate-100 group hover:border-[#1D4ED8]/30 hover:bg-[#eff3ff] transition-colors flex flex-col justify-center">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                <feature.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold leading-tight text-[#0E2A47] group-hover:text-[#1D4ED8] transition-colors">{feature.title}</h4>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1 font-medium">{feature.desc}</p>
           </div>
        ))}
      </div>
    </section>
  );
}
