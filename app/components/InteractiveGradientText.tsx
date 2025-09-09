'use client';

import { useEffect, useRef, useState } from 'react';

export default function InteractiveGradientText({ children }: { children: React.ReactNode }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const textElement = textRef.current;
    if (textElement) {
      textElement.addEventListener('mousemove', handleMouseMove);
      textElement.addEventListener('mouseenter', () => setIsHovering(true));
      textElement.addEventListener('mouseleave', () => setIsHovering(false));

      return () => {
        textElement.removeEventListener('mousemove', handleMouseMove);
        textElement.removeEventListener('mouseenter', () => setIsHovering(true));
        textElement.removeEventListener('mouseleave', () => setIsHovering(false));
      };
    }
  }, []);

  const gradientStyle = {
    backgroundImage: isHovering
      ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
          #ff9a9e 0%, 
          #fecfef 25%, 
          #fecfef 50%, 
          #a8edea 75%, 
          #fed6e3 100%)`
      : `linear-gradient(135deg, 
          #ff9a9e 0%, 
          #fecfef 25%, 
          #a8edea 50%, 
          #fed6e3 75%, 
          #ff9a9e 100%)`,
    backgroundSize: isHovering ? '200% 200%' : '400% 400%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    transition: 'all 0.3s ease',
    animation: isHovering ? 'none' : 'gradientShift 8s ease infinite',
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <div
        ref={textRef}
        className="relative inline-block cursor-pointer"
        style={gradientStyle}
      >
        {children}
      </div>
    </>
  );
}
