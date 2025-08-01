'use client';

import React, { useState, useEffect, useRef } from 'react'; // Import useState, useEffect
import { useSearchParams } from 'next/navigation';

import kreoBG from '@/assets/images/kreo.jpg';
import Image from 'next/image';
import CardButton from '@/components/CardButton';
import KreosiaPageTemplate from '@/components/KreosiaPageTemplate';
import BottomInformationPanel from '@/components/BottomInformationPanel';

//Thumbnails Wisata
import imgDamSerayu from '@/assets/images/wisata/wisata-damSerayu2.jpg'
import imgTamanBunga from '@/assets/images/wisata/wisata-tamanBunga.jpg'
import imgKebunTeh from '@/assets/images/wisata/wisata-kebunTeh.jpg'

export default function Home() { // Or RootLayout if this is your app/layout.tsx

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [activeSection, setActiveSection] = useState("WISATA");
  const buttons = ["WISATA", "PRODUK LOKAL", "PROFIL DESA"];

  // Scroll Refs
  const searchParams = useSearchParams();
  const section = searchParams.get('section');
  const contentRef = useRef(null);
  useEffect(() => {
    if (!section) return;
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }, [section]);

  // Effect to manage body scrolling when sidebar is open/closed
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'; // Disable body scroll
    } else {
      document.body.style.overflow = ''; // Re-enable body scroll
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  const HEADER_HEIGHT_CLASS = 'h-16'; // Using h-16 (64px) for consistency
  const HEADER_HEIGHT_PX = '64px'; // Explicit pixel value for `top` if not using Tailwind's `top-XX`

  useEffect(() => {
    setMounted(true);
  }, []);

  //Loading Produk
  const SkeletonCard = () => (
    <div className="w-full h-48 rounded-xl shadow-md bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-[pulseFast_0.5s_ease-in-out_infinite]"></div>
  );
  const [produkLoading, setProdukLoading] = useState(true);
  useEffect(() => {
    if (activeSection != buttons[1]) {
      return;
    }
    setProdukLoading(true);
    const timer = setTimeout(() => setProdukLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const [mounted, setMounted] = useState(false);
  if (!mounted) return null;

  return (
    <KreosiaPageTemplate
      content={<div className="flex flex-col gap-4">
        <div
          className="relative w-full"
          style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX})` }}
        >
          <div
  className="relative w-full text-white"
  style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX})` }}
>
  <Image
    src={kreoBG}
    alt="Desa Kreo"
    fill
    className="object-cover"
    priority
  />

  {/* Top-right text block */}
  <div className="absolute top-6 right-6 flex flex-col items-center gap-1 text-right z-10 text-white">
    <h2 className="text-sm sm:text-base font-medium h-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">WISATA ALAM</h2>
    <h1 className="text-5xl sm:text-2xl font-bold h-9 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">KREOSIA</h1>
    <p className="text-xs sm:text-sm h-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">KREO, KEJAJAR, WONOSOBO</p>
  </div>

  {/* Bottom-right "JELAJAHI SEKARANG" with arrow */}
  <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10 animate-bounce">
    <span className="text-2xl sm:text-base font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
      JELAJAHI SEKARANG
    </span>
    <svg
      className="w-8 h-8 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>
        </div>
        <div className="flex flex-row justify-center items-center w-full gap-x-2 px-4">
          {buttons.map((label) => (
            <button
              key={label}
              onClick={() => setActiveSection(label)}
              className={`flex-1 h-12 rounded-xl transition-colors duration-200 font-semibold
                ${activeSection === label
                  ? "bg-[#87CD87] text-white shadow-md"
                  : "bg-[#375E37] text-white hover:bg-[#004300]"}`}
            >
              <p className="text-l">
                {label}
              </p>
            </button>
          ))}
        </div>
        <div ref={contentRef}>
          {
            (activeSection === buttons[0]) &&
            <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_240px))] px-4 gap-4 justify-center">
              <CardButton
                imageSrc={imgDamSerayu}
                title="Dam Serayu"
                subtitle="Infrastruktur Bersejarah yang Vital bagi Jawa Tengah"
                pageRoute="/wisata/dam-serayu"
              />
              <CardButton
                imageSrc={imgTamanBunga}
                title="Taman Bunga Kreosia"
                subtitle="Wisata Bunga Hortensia dengan Pemandangan Sindoro"
                pageRoute="/wisata/taman-bunga"
              />
              <CardButton
                imageSrc={imgKebunTeh}
                title="Kebun Teh"
                subtitle="Permadani Hijau di Bawah Sindoro"
                pageRoute="/wisata/kebun-teh"
              />
            </div>
          }
          {
            (activeSection === buttons[1] && produkLoading) &&
            <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_240px))] px-4 gap-4 justify-center">
              <SkeletonCard/>
              <SkeletonCard/>
              <SkeletonCard/>
              <SkeletonCard/>
            </div>
          }
          {
            (activeSection === buttons[1] && !produkLoading) &&
            <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_240px))] px-4 gap-4 justify-center">
              <CardButton
                imageSrc={kreoBG}
                title="Wisata Kreo"
                subtitle="Lorem ipsum dolor sit amet"
                pageRoute="/wisata/loremipsum"
              />
              <CardButton
                imageSrc={kreoBG}
                title="Wisata Kreo"
                subtitle="Lorem ipsum dolor sit amet"
                pageRoute="/wisata/loremipsum"
              />
            </div>
          }
          {
            (activeSection === buttons[2]) &&
            <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_240px))] px-4 gap-4 justify-center">
              <CardButton
                imageSrc={kreoBG}
                title="Wisata Kreo"
                subtitle="Lorem ipsum dolor sit amet"
                pageRoute="/wisata/dam-serayu"
              />
              <CardButton
                imageSrc={kreoBG}
                title="Wisata Kreo"
                subtitle="Lorem ipsum dolor sit amet"
                pageRoute="/wisata/taman-bunga"
              />
              <CardButton
                imageSrc={kreoBG}
                title="Wisata Kreo"
                subtitle="Lorem ipsum dolor sit amet"
                pageRoute="/wisata/kebun-teh"
              />
            </div>
          }
        </div>

        {/*Bottom Information Panel*/}
        <BottomInformationPanel/>
      </div>}
    />
  );
}
