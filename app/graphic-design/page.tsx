'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import TextPressure from "@/components/TextPressure";
import GradualBlur from "@/components/GradualBlur";

export default function GraphicDesign() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Graphic design images
  const images = [
    // Chalk Guys Series
    "/images/graphic-design/chalkguys-1.png",
    "/images/graphic-design/ChalkGuys-2.png",
    "/images/graphic-design/ChalkGuys-3.png",
    "/images/graphic-design/ChalkGuys-4.png",
    "/images/graphic-design/ChalkGuys.png",
    
    // Demo Day Designs
    "/images/graphic-design/Demo dayDesign 2.png",
    "/images/graphic-design/Demo_dayDesign 1.png",
    
    // Frame Designs
    "/images/graphic-design/Frame2-1.png",
    "/images/graphic-design/Frame2.png",
    
    // Instagram Content
    "/images/graphic-design/Insta Post part 2.png",
    "/images/graphic-design/Insta Slide 1.png",
    "/images/graphic-design/insta slide 8.png",
    "/images/graphic-design/insta.png",
    "/images/graphic-design/Instagram post - 21.png",
    
    // Twitter Content
    "/images/graphic-design/Twitter post - 23.png",
    "/images/graphic-design/twitter.png",
    
    // Poster Design
    "/images/graphic-design/Poster.png",
    
    // Additional Designs
    "/images/graphic-design/innovate or die.png",
    
    // GIF Animations
    "/images/graphic-design/IMG_8417 2.GIF",
    "/images/graphic-design/IMG_8728.GIF"
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-black p-8 relative">
      {/* Floating Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 bg-black text-white border-2 border-white px-4 py-2 font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors duration-200 rounded-lg shadow-lg"
      >
        ← Back to Home
      </Link>

      {/* TextPressure Title */}
      <div className="pt-20 pb-16 h-64 flex items-center justify-center">
        <TextPressure
          text="GRAPHIC DESIGN"
          textColor="#FFFFFF"
          minFontSize={48}
          className="w-full h-full"
        />
      </div>

      {/* Masonry-style Image Layout */}
      <div className="mt-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openModal(image)}
          >
            <Image
              src={image}
              alt={`Graphic Design ${index + 1}`}
              width={400}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              loading="lazy"
            />
          </div>
        ))}
        </div>
      </div>

      {/* Simple Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged image"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}

      {/* Gradual Blur Effect at bottom of page */}
      <GradualBlur
        position="bottom"
        height="3rem"
        strength={1.5}
        divCount={5}
        curve="ease-out"
        opacity={0.6}
        animated={true}
        duration="0.5s"
        target="page"
        zIndex={10}
      />
    </div>
  );
}