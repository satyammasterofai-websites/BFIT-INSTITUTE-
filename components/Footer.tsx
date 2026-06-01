'use client';

export default function Footer() {
  return (
    <footer className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 mt-2 flex flex-col md:flex-row items-center justify-between shadow-sm">
      <div className="text-sm font-bold text-[#0E2A47] mb-4 md:mb-0 text-center md:text-left">
        © 2025 BFIT® Institute of Computer Science.<br className="md:hidden"/> All Rights Reserved.
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wide">
        <a href="#" className="hover:text-[#1D4ED8] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#1D4ED8] transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-[#1D4ED8] transition-colors">Sitemap</a>
      </div>
    </footer>
  );
}
