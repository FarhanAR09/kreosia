'use client';

import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import SidebarNavLink from '@/components/SidebarNavLink';
import SocialButton from '@/components/SocialButton';

import kreoBG from '@/assets/images/kreo.jpg';
import logoIG from '@/assets/images/logo-instagram.png';
import Image from 'next/image';
import CardButton from '@/components/CardButton';
import KreosiaPageTemplate from '@/components/KreosiaPageTemplate';
import LogoAndName from '@/components/LogoAndName';
import BottomInformationPanel from '@/components/BottomInformationPanel';

export default function Home() { // Or RootLayout if this is your app/layout.tsx

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [active, setActive] = useState("Wisata");
  const buttons = ["Wisata", "Produk Lokal", "Profil Desa"];


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

  const [mounted, setMounted] = useState(false);
  if (!mounted) return null;

  return (
    <KreosiaPageTemplate
      content={<div className="flex flex-col gap-4">
        <div
          className="relative w-full"
          style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX})` }}
        >
          <Image
            src={kreoBG}
            alt="Desa Kreo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-row justify-center items-center w-full gap-x-2 px-4">
          {buttons.map((label) => (
            <button
              key={label}
              onClick={() => setActive(label)}
              className={`flex-1 h-12 rounded-xl transition-colors duration-200 font-semibold
                ${active === label
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-red-200 text-red-800 hover:bg-red-300"}`}
            >
              {label}
            </button>
          ))}
        </div>
        {
          (active === buttons[0]) &&
          <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_240px))] px-4 gap-4 justify-center">
            <CardButton
              imageSrc={kreoBG}
              title="Wisata Kreo"
              subtitle="Lorem ipsum dolor sit amet"
            />
          </div>
        }

        {/*Bottom Information Panel*/}
        <BottomInformationPanel/>
      </div>}
    />
  );
}
