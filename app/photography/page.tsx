'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Photos in shuffled order (no numbers)
  const photos = [
    "/images/photography/YOUANDME.PNG",
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

  const openModal = (src: string) => {
    setSelectedPhoto(src);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-black p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-6xl font-black text-white mb-4">SELF-PORTRAIT PHOTOGRAPHY</h1>
          <Link
            href="/"
            className="inline-block text-white px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 rounded-lg border border-gray-600 hover:border-gray-400"
            style={{
              background: 'transparent',
              color: '#B9D5E3'
            }}
          >
            ← Back to Home
          </Link>
        </div>

      {/* Masonry-style Photo Layout - No Numbers */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openModal(photo)}
          >
            <Image
              src={photo}
              alt={`Photography ${index + 1}`}
              width={400}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl hover:shadow-3xl transition-shadow border border-gray-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Simple Modal */}
      {selectedPhoto && (
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
              src={selectedPhoto}
              alt="Enlarged photo"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}