import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Faculty from '@/components/Faculty';
import Timeline from '@/components/Timeline';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#0E2A47] overflow-x-hidden selection:bg-[#1D4ED8] selection:text-white pb-6">
      <Preloader />
      <Navbar />
      <main className="max-w-[1400px] mx-auto p-4 sm:p-6 pt-28 sm:pt-32 flex flex-col gap-4 sm:gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-8 h-full"><Hero /></div>
          <div className="lg:col-span-4 h-full"><Stats /></div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
          <div className="xl:col-span-4 h-full"><Features /></div>
          <div className="xl:col-span-8 h-full"><About /></div>
        </div>

        <Courses />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-4 h-full"><Timeline /></div>
          <div className="lg:col-span-8 h-full"><Faculty /></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="h-full"><Testimonials /></div>
          <div className="h-full"><Gallery /></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-8 h-full"><Contact /></div>
          <div className="lg:col-span-4 h-full"><CTA /></div>
        </div>
      </main>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <Footer />
      </div>
    </div>
  );
}
