'use client';

import Link from "next/link";
import LiquidEther from "../components/LiquidEther";

export default function Art() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* LiquidEther Background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <LiquidEther
          colors={['#6366F1', '#8B5CF6', '#A855F7', '#C084FC', '#72c7f3']}
          mouseForce={80}
          cursorSize={20}
          resolution={0.4}
          autoDemo={false}
          isViscous={true}
          viscous={70}
          iterationsViscous={70}
          iterationsPoisson={70}
          dt={0.016}
          key="liquid-ether-stable"
          style={{ 
            width: '100%', 
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
            ART
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 font-medium mb-8">
            Coming Soon
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block text-white px-8 py-4 font-bold text-lg uppercase tracking-wider transition-all duration-300 rounded-lg border border-gray-600 hover:border-gray-400"
              style={{
                background: 'transparent',
                color: '#B9D5E3'
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
