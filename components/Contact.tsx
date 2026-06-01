'use client';

import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-[#0E2A47]">
        <div className="w-2 h-6 bg-[#1D4ED8] rounded-full"></div>
        Contact & Admission
      </h3>

      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        {/* Info Area */}
        <div className="flex-1 space-y-4 flex flex-col justify-center">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8f9fa] border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF8A00] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Our Address</p>
              <p className="text-sm font-bold text-[#0E2A47] leading-tight">R.K Puram Colony, Sardar Patel Marg,<br/>Saharanpur, UP 247001</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8f9fa] border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1D4ED8] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Call Support</p>
              <a href="tel:+919760650025" className="text-lg font-black text-[#0E2A47] hover:text-[#1D4ED8] transition-colors">+91 97606 50025</a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#f8f9fa] border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</p>
              <p className="text-sm font-bold text-[#0E2A47]">Mon-Sat: 9AM – 8PM</p>
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="flex-1 bg-[#1D4ED8] rounded-2xl p-6 text-white relative overflow-hidden shadow-lg border-4 border-blue-100">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8A00] rounded-bl-full opacity-20 pointer-events-none"></div>
          <h4 className="font-bold text-lg mb-4">Request Callback</h4>
          <form className="space-y-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-sm focus:outline-none focus:bg-white/20 placeholder:text-blue-200 transition-colors" />
            <input type="tel" placeholder="Mobile Number" className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-sm focus:outline-none focus:bg-white/20 placeholder:text-blue-200 transition-colors" />
            <select className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-sm appearance-none text-white focus:outline-none focus:bg-white/20 transition-colors">
              <option className="text-slate-800">Select Course</option>
              <option className="text-slate-800">Graphic Designer</option>
              <option className="text-slate-800">Smart Accountant</option>
              <option className="text-slate-800">Python Programming</option>
            </select>
            <button className="w-full py-3 bg-[#FF8A00] hover:bg-[#e67a00] text-white font-bold rounded-xl mt-2 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20">
              Send Request <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
