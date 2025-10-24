'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import TextPressure from "@/components/TextPressure";

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isLightMode, setIsLightMode] = useState(false);

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
    "/images/photography/E0837465-02F7-41E2-9D25-02322AF4A774 2.JPEG",
    "/images/photography/2D040655-A36E-45CF-AE5B-99F9E49B30FF.jpg",
    "/images/photography/3E056757-F1BD-44DC-809E-24647FE6B7AD.JPEG",
    "/images/photography/3FB42332-248C-4D0D-8B97-1BFE1BB7E7E7.JPG",
    "/images/photography/438E95EA-F58D-4252-BAC2-61484BB109F4.JPEG",
    "/images/photography/8AB1A98F-298E-4B80-AF93-0AB4159C2098.JPG",
    "/images/photography/9BAAA546-FACF-4924-8A74-9A2A3FD95D91.JPEG",
    "/images/photography/9BEDE9AA-760E-43BD-9B71-73659540861C.JPG",
    "/images/photography/C6A22C9B-9DDE-48D1-862F-E4281046C24D.JPEG",
    "/images/photography/D1F377F7-0355-4C9A-9D34-7757C77776D5.jpg",
    "/images/photography/ECF302C4-5572-4EFA-A2D8-745E42608F8C.JPEG",
    "/images/photography/EFECEA32-EE2B-4DF5-B5E9-3FF3D58CD4C6 2.JPEG",
    "/images/photography/F73D9B28-29E6-43A2-BC63-92B2BD21B091.JPG",
    "/images/photography/IMG_1097 2.JPG",
    "/images/photography/IMG_3684.jpg",
    "/images/photography/IMG_6352.JPG",
    "/images/photography/IMG_8128.JPG"
  ];

  const openModal = (src: string) => {
    setSelectedPhoto(src);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className={`min-h-screen p-8 ${isLightMode ? 'bg-gray-50' : 'bg-black'}`}>
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

      {/* Header */}
      <div className="pt-20 pb-20 mb-12">
        <div className={`text-2xl font-thin mb-2 ${isLightMode ? 'text-black' : 'text-white'}`} style={{ fontFamily: 'sans-serif' }}>
          SELF-PORTRAIT
        </div>
        <div className="h-40 flex items-center">
          <TextPressure
            text="PHOTOGRAPHY"
            textColor={isLightMode ? "#000000" : "#FFFFFF"}
            minFontSize={48}
            className="w-full h-full"
          />
        </div>
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
              className="w-full h-auto rounded-lg shadow-2xl hover:shadow-3xl transition-shadow border-2 border-black"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Simple Modal */}
      {selectedPhoto && (
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
}// Force deployment Fri Oct 24 02:34:53 EDT 2025
