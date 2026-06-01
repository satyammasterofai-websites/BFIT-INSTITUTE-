'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 max-w-[1400px] mx-auto ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-slate-200 py-3' : 'bg-white shadow-sm py-4'} border border-slate-200 rounded-3xl px-6`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#0E2A47] rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#1D4ED8] transition-colors">
            <span className=
image: '/images/logo.png', // Upload 'logo.png' into the /public/images/ folder
          </div>
          <span className="font-bold text-xl tracking-tight uppercase text-[#0E2A47]">
            BFIT<sup className="text-sm">®</sup> <span className="text-[#1D4ED8] font-medium hidden sm:inline">Institute</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#1D4ED8] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1D4ED8] group-hover:w-full transition-all"></span>
            </Link>
          ))}
          <Link href="#contact" className="ml-4 px-6 py-2.5 bg-[#FF8A00] text-white rounded-full font-bold shadow-lg shadow-orange-200 hover:bg-[#e67a00] hover:scale-105 active:scale-95 transition-all">
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold text-slate-700 hover:text-[#1D4ED8]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-2 text-center w-full py-3 bg-[#FF8A00] text-white rounded-xl font-bold shadow-lg shadow-orange-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
