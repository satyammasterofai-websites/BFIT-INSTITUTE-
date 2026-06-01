'use client';

import Image from 'next/image';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-200 rounded-3xl overflow-hidden relative shadow-sm h-full min-h-[300px]">
      <div className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700" style={{ backgroundImage: "url('/images/gallery.jpg')" }}></div>
      <div className="absolute inset-0 bg-[#0E2A47]/30 backdrop-blur-[2px]"></div>
      
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        <h3 className="text-xl font-bold flex items-center gap-3 text-white">
          <div className="w-2 h-6 bg-[#FFB000] rounded-full"></div>
          Institute Gallery
        </h3>

        <div>
          <p className="text-white font-medium mb-4 shadow-sm">Explore our modern classrooms and advanced computer labs.</p>
          <button className="w-full py-3 bg-white/90 backdrop-blur shadow-xl text-[#0E2A47] text-sm font-bold rounded-xl hover:bg-white transition-colors active:scale-95">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
}
