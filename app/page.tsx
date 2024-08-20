'use client'
import Navbar from '../components/Navbar'
import Hero from '@/components/Hero';
export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
        </div>
    </div>
  );
}
