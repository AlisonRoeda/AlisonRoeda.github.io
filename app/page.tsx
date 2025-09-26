'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import SnowAnimation from "./components/SnowAnimation";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'ALISON ROEDA';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150); // Typing speed
      return () => clearTimeout(timeout);
    } else if (displayText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayText, isTyping, fullText]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer - Static */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <Image
          src="/images/BG3.png?v=4"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Girl Image - Main focal point, fills most of screen */}
      <div className="relative z-30" style={{ pointerEvents: 'none' }}>
        <Image
          src="/images/Girl3.png?v=4"
          alt="Girl"
          width={800}
          height={1000}
          className="w-full h-screen object-cover"
          priority
        />
          
        {/* Desktop Buttons - Fixed distance from center with different parallax */}
        <div 
          className="hidden md:block absolute left-1/2 top-[10%] -z-10"
          style={{ 
            transform: `translateX(calc(-95% - 200px)) translateY(${scrollY * 0.2}px)` 
          }}
        >
          <Link
            href="/projects"
            className="group block"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="bg-transparent border-8 border-white px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 rounded-full">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white uppercase tracking-wider">
                PROJECTS
              </h2>
            </div>
          </Link>
        </div>

        <div 
          className="hidden md:block absolute left-1/2 top-[10%] -z-10"
          style={{ 
            transform: `translateX(calc(-50% + 200px)) translateY(${scrollY * 0.2}px)` 
          }}
        >
          <Link
            href="/art"
            className="group block"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="bg-transparent border-8 border-white px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-4 sm:py-6 md:py-8 lg:py-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 rounded-full">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white uppercase tracking-wider">
                ART
              </h2>
            </div>
          </Link>
        </div>

        <div 
          className="hidden md:block absolute left-1/2 top-[30%] -z-10"
          style={{ 
            transform: `translateX(calc(-95% - 200px)) translateY(${scrollY * 0.2}px)` 
          }}
        >
          <Link
            href="/photography"
            className="group block"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="bg-transparent border-8 border-white px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 rounded-full">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white uppercase tracking-wider">
                PHOTOGRAPHY
              </h2>
            </div>
          </Link>
        </div>

        <div 
          className="hidden md:block absolute left-1/2 top-[30%] -z-10"
          style={{ 
            transform: `translateX(calc(-20% + 200px)) translateY(${scrollY * 0.2}px)` 
          }}
        >
          <Link
            href="/graphic-design"
            className="group block"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="bg-transparent border-8 border-white px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 rounded-full">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white uppercase tracking-wider">
                GRAPHIC DESIGN
              </h2>
            </div>
          </Link>
        </div>

        {/* Mobile Buttons - Stacked vertically on mobile */}
        <div 
          className="md:hidden absolute left-1/2 z-50 w-full px-4" 
          style={{ 
            transform: `translateX(-50%) translateY(${scrollY * -0.1}px)`,
            top: 'calc(50% + 20% + 20px)' // Moved up higher and closer
          }}
        >
          <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
            <Link
              href="/projects"
              className="group block w-full"
            >
              <div className="bg-white border-6 border-white px-6 py-4 text-center transition-all duration-300 active:scale-95 rounded-full shadow-lg">
                <h2 className="text-lg font-black text-black uppercase tracking-wider">
                  PROJECTS
                </h2>
              </div>
            </Link>
            
            <Link
              href="/art"
              className="group block w-full"
            >
              <div className="bg-white border-6 border-white px-6 py-4 text-center transition-all duration-300 active:scale-95 rounded-full shadow-lg">
                <h2 className="text-lg font-black text-black uppercase tracking-wider">
                  ART
                </h2>
              </div>
            </Link>
            
            <Link
              href="/graphic-design"
              className="group block w-full"
            >
              <div className="bg-white border-6 border-white px-6 py-4 text-center transition-all duration-300 active:scale-95 rounded-full shadow-lg">
                <h2 className="text-lg font-black text-black uppercase tracking-wider">
                  GRAPHIC DESIGN
                </h2>
              </div>
            </Link>
            
            <Link
              href="/photography"
              className="group block w-full"
            >
              <div className="bg-white border-6 border-white px-6 py-4 text-center transition-all duration-300 active:scale-95 rounded-full shadow-lg">
                <h2 className="text-lg font-black text-black uppercase tracking-wider">
                  PHOTOGRAPHY
                </h2>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Name Overlay - On top of Girl photo with parallax */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none md:translate-y-[15%]"
          style={{
            transform: `translateY(${scrollY * -0.2}px) translateY(10%)`,
          }}
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[16rem] font-black text-white tracking-tight drop-shadow-2xl text-center whitespace-nowrap px-4 sm:px-6 md:px-8">
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </h1>
        </div>
      </div>

      {/* About Section - Flush with Girl image */}
      <div className="relative z-10 bg-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-700 mb-6 md:mb-8 tracking-tight">
              ABOUT ME
            </h2>
            <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                I&apos;m a creative with a deep passion for technology and its power to open doors. I believe 
                innovation should make creativity and entrepreneurship accessible to everyone, not just a select few.
              </p>
              <p>
                I look to explore how tech can break down barriers, spark new ideas, and empower people to 
                build what matters to them. 
              </p>
              <div className="pt-6 md:pt-8 space-y-4 md:space-y-6">
                <a
                  href="mailto:alisonroeda@gmail.com"
                  className="inline-block bg-slate-700 text-white px-6 py-3 md:px-8 md:py-4 font-bold text-base md:text-lg uppercase tracking-wider hover:bg-slate-600 transition-colors duration-200"
                >
                  Get In Touch
                </a>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
                  <a
                    href="https://www.instagram.com/alisonroeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-200 hover:shadow-md border border-slate-200 text-sm md:text-base"
                  >
                    Instagram: @alisonroeda
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alison-roeda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-200 hover:shadow-md border border-slate-200 text-sm md:text-base"
                  >
                    LinkedIn: @alison-roeda
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Snow Animation */}
      <SnowAnimation />
    </div>
  );
}
