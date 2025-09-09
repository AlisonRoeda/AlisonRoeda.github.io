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
      <div className="relative z-30 flex justify-center" style={{ pointerEvents: 'none' }}>
        <div className="relative">
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
            className="hidden md:block absolute left-1/2 top-[35%] -z-10"
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
            className="hidden md:block absolute left-1/2 top-[35%] -z-10"
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

          {/* Mobile Buttons - Side by side below name text, in front of Girl image with parallax */}
          <div 
            className="md:hidden absolute left-1/2 z-50 w-full px-4" 
            style={{ 
              transform: `translateX(-50%) translateY(${scrollY * -0.1}px)`,
              top: 'calc(50% + 25% + 40px)' // Moved up higher
            }}
          >
            <div className="flex gap-3 w-full">
              <Link
                href="/graphic-design"
                className="group block flex-1"
              >
                <div className="bg-transparent border-8 border-white px-4 sm:px-6 py-6 sm:py-8 text-center transition-all duration-300 active:scale-95 rounded-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    GRAPHIC DESIGN
                  </h2>
                </div>
              </Link>
              
              <Link
                href="/photography"
                className="group block flex-1"
              >
                <div className="bg-transparent border-8 border-white px-4 sm:px-6 py-6 sm:py-8 text-center transition-all duration-300 active:scale-95 rounded-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    PHOTOGRAPHY
                  </h2>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Name Overlay - On top of Girl photo with parallax */}
          <div 
            className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none md:translate-y-[5%]"
            style={{
              transform: `translateY(${scrollY * -0.2}px) translateY(25%)`,
            }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[16rem] font-black text-white tracking-tight drop-shadow-2xl text-center whitespace-nowrap px-8">
              {displayText}
              {isTyping && <span className="animate-pulse">|</span>}
            </h1>
          </div>
        </div>
      </div>

      {/* About Section - Flush with Girl image */}
      <div className="relative z-10 bg-white min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-black text-slate-700 mb-8 tracking-tight">
              ABOUT ME
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                I'm a creative with a deep passion for technology and its power to open doors. I believe 
                innovation should make creativity and entrepreneurship accessible to everyone, not just a select few.
              </p>
              <p>
                I look to explore how tech can break down barriers, spark new ideas, and empower people to 
                build what matters to them. 
              </p>
              <div className="pt-8 space-y-6">
                <a
                  href="mailto:alisonroeda@gmail.com"
                  className="inline-block bg-slate-700 text-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-slate-600 transition-colors duration-200"
                >
                  Get In Touch
                </a>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <a
                    href="https://www.instagram.com/alisonroeda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-md border border-slate-200"
                  >
                    Instagram: @alisonroeda
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alison-roeda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-md border border-slate-200"
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
