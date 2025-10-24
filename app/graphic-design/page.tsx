'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import TextPressure from "@/components/TextPressure";
import GradualBlur from "@/components/GradualBlur";

export default function GraphicDesign() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLightMode, setIsLightMode] = useState(false);

  // Graphic design images organized by groups
  const imageGroups = [
    {
      title: "SHIP-IT DESIGNS",
      images: [
        "/images/graphic-design/Ship-it.png",
        "/images/graphic-design/Ship-it -2.png"
      ],
      biggerSize: true
    },
    {
      title: "RETREAT COLLAGE",
      images: [
        "/images/graphic-design/mo1.JPG",
        "/images/graphic-design/mo2.JPG",
        "/images/graphic-design/mo3.JPG",
        "/images/graphic-design/mo4-2.GIF",
        "/images/graphic-design/mo5.JPG",
        "/images/graphic-design/m06-2.GIF",
        "/images/graphic-design/mo7-2.GIF"
      ],
      singleRow: true,
      fixedHeight: true,
      snugSpacing: true
    },
    {
      title: "PRODUCT STUDIO",
      images: [
        "/images/graphic-design/chalkguys-1.png",
        "/images/graphic-design/ChalkGuys-2.png",
        "/images/graphic-design/ChalkGuys-3.png",
        "/images/graphic-design/ChalkGuys-4.png",
        "/images/graphic-design/ChalkGuys.png"
      ],
      singleRow: true,
      originalLayout: true
    },
    {
      title: "DEMO DAY DESIGNS",
      images: [
        "/images/graphic-design/Demo dayDesign 2.png",
        "/images/graphic-design/Demo_dayDesign 1.png",
        "/images/graphic-design/demoday - 21.png"
      ]
    },
    {
      title: "FALL RECRUITMENT",
      images: [
        "/images/graphic-design/Frame2-1.png",
        "/images/graphic-design/Frame2.png",
        "/images/graphic-design/Insta Post part 2.png",
        "/images/graphic-design/Insta Slide 1.png",
        "/images/graphic-design/insta slide 8.png",
        "/images/graphic-design/Twitter post - 23.png",
        "/images/graphic-design/Poster.png",
        "/images/graphic-design/IMG_8417 2.GIF",
        "/images/graphic-design/IMG_8728.GIF"
      ],
      mixedLayout: true
    },
    {
      title: "WOMEN IN ENTR",
      images: [
        "/images/graphic-design/wentr.png",
        "/images/graphic-design/wentr2.png"
      ]
    },
    {
      title: "T-SHIRT DESIGNS",
      images: [
        "/images/graphic-design/innovate or die.png"
      ],
      singleRow: true,
      biggerSize: true
    }
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={`min-h-screen p-8 relative ${isLightMode ? 'bg-gray-50' : 'bg-black'}`}>
      {/* Floating Back Button */}
      <Link
        href="/"
        className={`fixed top-6 left-6 z-50 px-4 py-2 font-bold text-sm uppercase tracking-wider transition-colors duration-200 rounded-lg shadow-lg ${
          isLightMode 
            ? 'bg-white text-black border-2 border-black hover:bg-gray-100' 
            : 'bg-black text-white border-2 border-white hover:bg-gray-800'
        }`}
      >
        ← Back to Home
      </Link>

      {/* Light Mode Toggle Button */}
      <button
        onClick={() => setIsLightMode(!isLightMode)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full transition-colors duration-200 shadow-lg ${
          isLightMode 
            ? 'bg-black hover:bg-gray-800' 
            : 'bg-white hover:bg-gray-100'
        }`}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span style={{ fontSize: '20px', lineHeight: '1', color: isLightMode ? 'white' : 'black' }}>
          {isLightMode ? '★' : '◐'}
        </span>
      </button>

      {/* TextPressure Title */}
      <div className="pt-20 pb-16 h-64 flex items-center justify-center">
        <TextPressure
          text="GRAPHIC DESIGN"
          textColor={isLightMode ? "#000000" : "#FFFFFF"}
          minFontSize={48}
          className="w-full h-full"
        />
      </div>

      {/* Grouped Image Layout */}
      <div className="mt-12 space-y-16">
        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-6">
            {/* Group Title */}
            <h2 className={`text-2xl font-bold text-center mb-8 pb-4 ${
              isLightMode 
                ? 'text-black border-b border-gray-400' 
                : 'text-white border-b border-gray-600'
            }`} style={{ fontFamily: isLightMode ? 'serif' : 'inherit' }}>
              {group.title}
            </h2>
            
            {/* Image Layout for this group */}
            {group.singleRow ? (
              <div className="flex justify-start">
                {group.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="break-inside-avoid cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ marginRight: group.snugSpacing ? '8px' : (group.originalLayout ? '16px' : '5px') }}
                    onClick={() => openModal(image)}
                  >
                    <Image
                      src={image}
                      alt={`${group.title} ${imageIndex + 1}`}
                      width={group.originalLayout ? 400 : 200}
                      height={group.originalLayout ? 600 : 200}
                      className={`${group.originalLayout ? 'w-full h-auto' : (group.fixedHeight ? 'w-full h-64 object-contain' : (group.biggerSize ? 'w-full h-80 object-contain' : 'w-48 h-48 object-contain'))} rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
                      loading="lazy"
                      unoptimized={image.includes('.GIF')}
                    />
                  </div>
                ))}
              </div>
            ) : group.mixedLayout ? (
              <div className="columns-1 sm:columns-3 md:columns-4 lg:columns-5 gap-2 space-y-2">
                {group.images.map((image, imageIndex) => {
                  // Randomly select some images to be featured (larger)
                  const isFeatured = [0, 2, 5].includes(imageIndex); // Frame2-1, Insta Slide 1, Twitter post
                  return (
                    <div
                      key={imageIndex}
                      className={`break-inside-avoid cursor-pointer hover:opacity-80 transition-opacity ${isFeatured ? 'col-span-2' : ''}`}
                      onClick={() => openModal(image)}
                    >
                      <Image
                        src={image}
                        alt={`${group.title} ${imageIndex + 1}`}
                        width={isFeatured ? 600 : 300}
                        height={isFeatured ? 800 : 400}
                        className={`${isFeatured ? 'w-full h-auto' : 'w-full h-auto'} rounded-lg shadow-lg hover:shadow-xl transition-shadow`}
                        loading="lazy"
                        unoptimized={image.includes('.GIF')}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="columns-1 sm:columns-3 md:columns-4 lg:columns-5 gap-2 space-y-2">
                {group.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="break-inside-avoid mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openModal(image)}
                  >
                    <Image
                      src={image}
                      alt={`${group.title} ${imageIndex + 1}`}
                      width={400}
                      height={600}
                      className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      loading="lazy"
                      unoptimized={image.includes('.GIF')}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Simple Modal */}
      {selectedImage && (
        <div 
          className={`fixed inset-0 flex items-center justify-center p-4 z-50 ${
            isLightMode ? 'bg-white bg-opacity-95' : 'bg-black bg-opacity-90'
          }`}
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={closeModal}
              className={`absolute -top-12 right-0 text-4xl ${
                isLightMode ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
              }`}
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