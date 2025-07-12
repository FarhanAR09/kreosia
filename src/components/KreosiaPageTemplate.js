'use client';

import React, {useState} from 'react';
import SidebarNavLink from '@/components/SidebarNavLink';
import SocialButton from '@/components/SocialButton';
import kreoBG from '@/assets/images/kreo.jpg';
import logoIG from '@/assets/images/logo-instagram.png';
import logoKreo from '@/assets/images/logo-pemdeskreo.png';
import LogoAndName from '@/components/LogoAndName';

export default function KreosiaPageTemplate({
  content
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const HEADER_HEIGHT_CLASS = 'h-16'; // Using h-16 (64px) for consistency
    const HEADER_HEIGHT_PX = '64px'; // Explicit pixel value for `top` if not using Tailwind's `top-XX`

    return (
    <div className="flex flex-col h-screen">

      {/* Top Bar (Header) */}
      <header className={`bg-[#002B00] text-white p-4 shadow-md sticky top-0 z-50 flex items-center justify-between ${HEADER_HEIGHT_CLASS}`}>
        <div className="flex-shrink-0">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white hover:text-blue-200 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <svg
              className={`w-8 h-8 transition-transform duration-300 ${
                isSidebarOpen ? 'rotate-90' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <LogoAndName className={`flex-grow`}/>
        <div className="flex-shrink-0 w-8 h-8"></div>
      </header>

      {/* Main content area below header - always takes full width and scrolls */}
      <main className="flex-1 overflow-y-auto bg-gray-100 relative">
        {content}
      </main>

      {/* Sidebar - Overlay behavior */}
      <aside
            className={`
              fixed left-0 z-40 w-3/4 max-w-64 bg-[#375E37] text-white
              transform transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              flex flex-col
            `}
            style={{ top: HEADER_HEIGHT_PX, height: `calc(100vh - ${HEADER_HEIGHT_PX})` }}
          >
            {/* Navigation Buttons (WISATA, PRODUK LOKAL, etc.) */}
            <nav className="flex-grow flex flex-col items-center gap-y-4 overflow-y-auto p-6"> {/* Added pt-8 for top padding */}
              <div className='flex flex-col items-center flex-grow gap-y-4 w-full'> {/* ADDED flex-grow and gap-y-6 and w-full */}
                {/* WISATA */}
                <SidebarNavLink imageUrl={kreoBG} buttonText={"WISATA"} altText={"WISATA"} section="content">
                </SidebarNavLink>
                {/* PRODUK LOKAL */}
                <SidebarNavLink imageUrl={kreoBG} buttonText={"PRODUK LOKAL"} altText={"PRODUK LOKAL"} section="content">
                </SidebarNavLink>
                {/* INVESTING */}
                <SidebarNavLink imageUrl={kreoBG} buttonText={"INVESTING"} altText={"INVESTING"}>
                </SidebarNavLink>
                {/* PROFIL KREO */}
                <SidebarNavLink imageUrl={kreoBG} buttonText={"PROFIL KREO"} altText={"PROFIL KREO"} section="content">
                </SidebarNavLink>
              </div>
            </nav>

            {/* Social Media Links at the bottom */}
            <div className="mt-auto flex flex-col gap-y-4 pb-4 bg-[#002B00] p-6">
              <SocialButton // <-- Using the new component
                href="https://www.instagram.com/kreo_sia"
                icon={logoIG}
                altText="Instagram Kreosia"
                handleText="@kreo_sia"
                backgroundColorClass="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                circleColorClass="bg-white"
                textColorClass="text-white"
                onClick={() => setIsSidebarOpen(false)}
              />
              <SocialButton // <-- Using the new component
                href="https://kreo.desacantik.id"
                icon={logoKreo}
                altText="Website Pemdes Kreo"
                handleText="kreo.desacantik.id"
                backgroundColorClass="bg-gradient-to-r from-red-500 to-red-400 hover:from-red-700 hover:to-red-500"
                circleColorClass="bg-white"
                textColorClass="text-white"
                onClick={() => setIsSidebarOpen(false)}
              />
            </div>
      </aside>

      {/* Overlay (Backdrop) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black z-30 transition-opacity duration-300 ease-in-out opacity-50"
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
}
