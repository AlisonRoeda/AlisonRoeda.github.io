'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

export default function FloatModePhotography() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseX, setLastMouseX] = useState(0);

  // Photos for floating effect
  const photos = [
    "/images/photography/IMG_4601.JPG",
    "/images/photography/13E359F1-7897-4467-88A9-E6646E2F5D5E 2.JPG",
    "/images/photography/609248BD-C482-45FE-90AA-8D1B8559BFED 2.JPEG",
    "/images/photography/ECB9A3DE-B306-44BE-8DCE-443BE0B592A9 2.JPG",
    "/images/photography/2A04EF11-856C-4FCB-B56D-2BFC0A43EF4F 2.JPEG",
    "/images/photography/88A40FA0-2380-46FD-8989-669F199DFCBF 2.JPEG",
    "/images/photography/F8E61E54-2501-4736-B4CC-D7005F16CC53.JPEG",
    "/images/photography/16FF2599-E27B-4676-A72B-BEE5F8BA518A.JPG",
    "/images/photography/noteAndNecklace2.PNG",
    "/images/photography/354E15C6-E1CC-4102-A85E-B4E3903AAA48 4.JPEG",
    "/images/photography/EF34352B-D961-4E6F-BBE3-AE56625183BA 2.JPEG",
    "/images/photography/28B29B6D-B0A8-4DFD-BE28-3E32C5231DF7.JPG",
    "/images/photography/dontForget.PNG",
    "/images/photography/E85DB0EC-67A1-4B03-80DE-88E0042486AD 2.JPEG",
    "/images/photography/183C2C1C-832F-4AEE-834A-B9E9AE4E0C58.JPEG",
    "/images/photography/EC2B4F57-D897-4D8A-A1C4-0AD7973EC5E0 2.JPEG",
    "/images/photography/IMG_4609 2.JPG",
    "/images/photography/389DF58F-A891-4636-AEAC-E7A3AF218DDD 2.JPG",
    "/images/photography/AF2A5D90-F3A2-43A4-898C-1C88799B32F3 2.JPEG",
    "/images/photography/5E4B0F97-06BB-49F6-A88F-3FA51F409A74 2.JPEG",
    "/images/photography/fullbodyBlue2.PNG",
    "/images/photography/B24F9C15-982D-482C-9574-8967B4848F7A 2.JPEG",
    "/images/photography/D7707D25-4703-4D9D-B371-3FE6DF35AE5A.JPG",
    "/images/photography/E0837465-02F7-41E2-9D25-02322AF4A774 2.JPEG"
  ];

  // Pre-calculated stable values for particles
  const particleData = [
    { left: 87.9, top: 19.2, duration: 13.5, delay: 4.6 },
    { left: 6.8, top: 28.3, duration: 11.7, delay: 2.0 },
    { left: 63.9, top: 0.7, duration: 11.7, delay: 0.3 },
    { left: 98.5, top: 88.5, duration: 11.7, delay: 3.7 },
    { left: 63.8, top: 31.5, duration: 5.6, delay: 3.8 },
    { left: 1.7, top: 40.7, duration: 10.9, delay: 1.9 },
    { left: 83.9, top: 67.6, duration: 14.3, delay: 2.2 },
    { left: 36.8, top: 89.8, duration: 12.3, delay: 2.5 },
    { left: 83.1, top: 96.1, duration: 7.1, delay: 3.5 },
    { left: 73.0, top: 36.2, duration: 5.1, delay: 4.6 },
    { left: 55.8, top: 33.6, duration: 5.0, delay: 3.6 },
    { left: 61.7, top: 7.9, duration: 9.6, delay: 2.2 },
    { left: 81.1, top: 69.1, duration: 11.9, delay: 4.1 },
    { left: 92.4, top: 46.4, duration: 13.1, delay: 4.6 },
    { left: 24.8, top: 99.8, duration: 13.1, delay: 0.7 },
    { left: 17.5, top: 54.1, duration: 8.8, delay: 0.8 },
    { left: 11.6, top: 99.8, duration: 12.9, delay: 0.5 },
    { left: 46.1, top: 59.7, duration: 7.0, delay: 0.4 },
    { left: 42.5, top: 76.1, duration: 13.4, delay: 2.2 },
    { left: 99.0, top: 1.6, duration: 14.0, delay: 0.4 },
    { left: 69.7, top: 58.5, duration: 9.2, delay: 3.8 },
    { left: 92.7, top: 52.2, duration: 5.3, delay: 1.2 },
    { left: 3.2, top: 90.4, duration: 6.7, delay: 0.9 },
    { left: 87.3, top: 21.0, duration: 11.2, delay: 1.0 },
    { left: 72.0, top: 62.3, duration: 7.7, delay: 4.9 },
    { left: 68.8, top: 61.6, duration: 5.1, delay: 1.3 },
    { left: 23.7, top: 38.7, duration: 5.4, delay: 4.7 },
    { left: 37.7, top: 40.1, duration: 10.6, delay: 1.0 },
    { left: 7.9, top: 38.5, duration: 8.1, delay: 3.1 },
    { left: 22.0, top: 98.2, duration: 6.9, delay: 2.1 },
    { left: 5.7, top: 19.2, duration: 9.1, delay: 1.2 },
    { left: 49.1, top: 63.6, duration: 12.8, delay: 4.3 },
    { left: 26.0, top: 30.9, duration: 9.7, delay: 2.0 },
    { left: 51.2, top: 50.2, duration: 6.2, delay: 2.0 },
    { left: 9.7, top: 98.2, duration: 14.5, delay: 0.6 },
    { left: 31.0, top: 73.6, duration: 10.1, delay: 1.9 },
    { left: 39.8, top: 92.8, duration: 11.8, delay: 0.1 },
    { left: 69.5, top: 68.3, duration: 9.0, delay: 0.0 },
    { left: 25.9, top: 60.7, duration: 8.5, delay: 4.6 },
    { left: 78.9, top: 70.3, duration: 8.0, delay: 4.5 },
    { left: 83.2, top: 45.1, duration: 10.6, delay: 0.7 },
    { left: 80.2, top: 15.6, duration: 10.7, delay: 3.6 },
    { left: 89.8, top: 86.0, duration: 7.6, delay: 2.1 },
    { left: 78.5, top: 2.4, duration: 7.8, delay: 0.2 },
    { left: 50.6, top: 49.9, duration: 11.3, delay: 4.9 },
    { left: 25.8, top: 99.9, duration: 9.5, delay: 3.9 },
    { left: 47.0, top: 34.0, duration: 7.2, delay: 4.2 },
    { left: 32.1, top: 66.1, duration: 7.8, delay: 1.9 },
    { left: 63.3, top: 50.2, duration: 7.1, delay: 1.0 },
    { left: 91.0, top: 29.4, duration: 13.4, delay: 3.6 }
  ];

  // Initialize client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mouse drag handling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouseX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMouseX;
    setRotation(prev => prev + deltaX * 0.5);
    setLastMouseX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setLastMouseX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - lastMouseX;
    setRotation(prev => prev + deltaX * 0.5);
    setLastMouseX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Wheel scroll handling
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setRotation(prev => prev + e.deltaY * 0.5);
  };

  const openModal = (src: string) => {
    setSelectedPhoto(src);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">FLOATING CAROUSEL</h1>
          <p className="text-gray-400">Loading 3D carousel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              FLOAT MODE
            </h1>
            <div className="flex gap-4">
              <Link
                href="/photography"
                className="bg-gray-700 text-white px-4 py-2 font-bold text-sm uppercase tracking-wider hover:bg-gray-600 transition-colors duration-200 rounded-lg"
              >
                Grid View
              </Link>
              <Link
                href="/"
                className="bg-white text-black px-4 py-2 font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors duration-200 rounded-lg"
              >
                ← Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Carousel Container */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Debug Info */}
        <div className="absolute top-20 left-4 text-white text-sm bg-black/50 p-2 rounded">
          Photos: {photos.length} | Rotation: {Math.round(rotation)}°
        </div>

        {/* 3D Carousel */}
        <div 
          className="relative w-96 h-96 mx-auto"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {photos.slice(0, 8).map((photo, index) => {
            const angle = (360 / 8) * index;
            const radius = 200; // Distance from center
            
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const z = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={`photo-${index}`}
                className="absolute"
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${-angle}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="relative cursor-pointer group"
                  onClick={() => openModal(photo)}
                >
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-32 h-32 object-cover rounded-lg shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl border-2 border-white/30"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-50">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm mb-2">Drag to rotate • Scroll to spin • Click to enlarge</p>
            <div className="flex gap-2 text-xs justify-center">
              <kbd className="bg-white/20 px-2 py-1 rounded">Drag</kbd>
              <kbd className="bg-white/20 px-2 py-1 rounded">Scroll</kbd>
              <kbd className="bg-white/20 px-2 py-1 rounded">Click</kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {particleData.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float ${particle.duration}s infinite linear`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 z-[9999]"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <img
              src={selectedPhoto}
              alt="Enlarged photo"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 text-center">
        <p className="text-white text-sm">Scroll to fly through space • Click photos to enlarge</p>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}