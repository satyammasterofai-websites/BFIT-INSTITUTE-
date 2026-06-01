'use client';

import Image from 'next/image';

const faculty = [
  { id: 1, name: "Director's Name", role: "Institute Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  { id: 2, name: "Senior Trainer", role: "Programming", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { id: 3, name: "Design Lead", role: "Graphic Design", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
  { id: 4, name: "Finance Expert", role: "Accounting", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop" }
];

export default function Faculty() {
  return (
    <section id="faculty" className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-[#0E2A47]">
        <div className="w-2 h-6 bg-[#1D4ED8] rounded-full"></div>
        Meet Our Faculty
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
        {faculty.map((member) => (
          <div key={member.id} className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-[3/4] flex justify-end flex-col">
             <Image 
               src={member.img} 
               alt={member.name}
               fill
               className="object-cover group-hover:scale-110 transition-transform duration-500"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A47]/90 via-[#0E2A47]/20 to-transparent opacity-90"></div>
             
             <div className="relative z-10 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
               <h4 className="text-white font-bold leading-tight mb-1">{member.name}</h4>
               <p className="text-[#FFB000] text-[10px] sm:text-xs font-bold uppercase tracking-wider">{member.role}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
