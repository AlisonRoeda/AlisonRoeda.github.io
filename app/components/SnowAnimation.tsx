'use client';

import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

export default function SnowAnimation() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    // Create initial snowflakes
    const createSnowflakes = () => {
      const flakes: Snowflake[] = [];
      const colors = ['#ffffff', '#f0f8ff', '#e6f3ff', '#ddeeff', '#d4e9ff', '#cbe4ff'];
      
      for (let i = 0; i < 40; i++) {
        flakes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 12 + 2, // 2-14px (much smaller, including tiny ones)
          speed: Math.random() * 2 + 0.5, // Slower movement
          opacity: Math.random() * 0.6 + 0.3, // More transparent
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();

    // Animation loop
    const animate = () => {
      setSnowflakes(prev => 
        prev.map(flake => ({
          ...flake,
          y: flake.y + flake.speed, // Falling down
          x: flake.x - Math.sin(flake.y * 0.01) * 1.5, // Gentle swaying motion (left)
        })).map(flake => 
          flake.y > 100 ? { ...flake, y: -10, x: Math.random() * 100 } : flake
        )
      );
    };

    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full"
          style={{
            left: `${flake.x}%`,
            top: `${flake.y}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: flake.color,
            opacity: flake.opacity,
            transform: `rotate(${flake.y * 2}deg)`,
            transition: 'none',
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.4))',
          }}
        />
      ))}
    </div>
  );
}
