'use client';

import { motion } from 'motion/react';
import { 
  Laptop, Palette, Calculator, Keyboard, 
  TerminalSquare, Code2, FileCode2, BookText, ArrowRight 
} from 'lucide-react';

const courses = [
  { id: 1, icon: Palette, title: "Graphic Designing", desc: "PS, AI, CorelDraw", bg: "bg-[#f0f4ff]", border: "border-blue-100" },
  { id: 2, icon: Calculator, title: "Smart Accountant", desc: "Tally, GST, Taxation", bg: "bg-[#fff4e6]", border: "border-orange-100" },
  { id: 3, icon: FileCode2, title: "Python Programming", desc: "Data & AI Logic", bg: "bg-[#f3f4f6]", border: "border-slate-200" },
  { id: 4, icon: Laptop, title: "IT Essential / CCC", desc: "Computer Fundamentals", bg: "bg-[#f3f4f6]", border: "border-slate-200" },
  { id: 5, icon: BookText, title: "Tally.ERP9 & Prime", desc: "Accounting With GST", bg: "bg-[#f0f4ff]", border: "border-blue-100" },
  { id: 6, icon: Keyboard, title: "Hindi & English Typing", desc: "Speed & Accuracy", bg: "bg-[#fff4e6]", border: "border-orange-100" },
  { id: 7, icon: TerminalSquare, title: "C & C++ Language", desc: "Core Programming", bg: "bg-[#f3f4f6]", border: "border-slate-200" },
  { id: 8, icon: Code2, title: "Core Java", desc: "Object Oriented Code", bg: "bg-[#f3f4f6]", border: "border-slate-200" },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm flex flex-col h-full text-[#0E2A47]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
          <div className="w-2 h-6 bg-[#1D4ED8] rounded-full"></div>
          Featured Programs
        </h3>
        <button className="text-[#1D4ED8] text-sm font-bold flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-xl transition-colors">
          View All Courses <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course, idx) => (
          <div
            key={course.id}
            className={`p-5 rounded-2xl border ${course.bg} ${course.border} group hover:shadow-md transition-all cursor-pointer`}
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm text-[#0E2A47] group-hover:scale-110 transition-transform">
              <course.icon className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold leading-tight mb-1 group-hover:text-[#1D4ED8] transition-colors">{course.title}</h4>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
