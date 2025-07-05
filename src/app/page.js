// app/page.tsx (or app/layout.tsx, depending on where your main layout code lives)
'use client';

import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import SidebarNavLink from '@/components/SidebarNavLink';
import SocialButton from '@/components/SocialButton';

import kreoBG from '@/assets/images/kreo.jpg';

export default function Home() { // Or RootLayout if this is your app/layout.tsx

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  // Define your header height. This should match the actual height of your header.
  // Common Tailwind spacing values: 12 (48px), 14 (56px), 16 (64px)
  const HEADER_HEIGHT_CLASS = 'h-16'; // Using h-16 (64px) for consistency
  const HEADER_HEIGHT_PX = '64px'; // Explicit pixel value for `top` if not using Tailwind's `top-XX`

  return (
    <div className="flex flex-col h-screen">

      {/* Top Bar (Header) */}
      <header className={`bg-blue-700 text-white p-4 shadow-md sticky top-0 z-50 flex items-center justify-between ${HEADER_HEIGHT_CLASS}`}>
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
        <div className="flex-grow flex items-center justify-center space-x-2"> {/* Added flex, items-center, justify-center, space-x-2 */}
          {/* Your new icon goes here! */}
          <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z" clipRule="evenodd"></path>
          </svg>
          <h1 className="text-2xl font-bold tracking-wider">Kreosia</h1>
        </div>
        <div className="flex-shrink-0 w-8 h-8"></div>
      </header>

      {/* Main content area below header - always takes full width and scrolls */}
      <main className="flex-1 overflow-y-auto bg-gray-100 p-6 relative">
        <div className="bg-white p-8 rounded-lg shadow-md mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard!</h2>
          <p className="text-lg text-gray-600">
            This is the main content area. The sidebar will now overlay this content.
          </p>
        </div>

        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Content Block {i + 1}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        ))}
        {/* Remove `{children}` if this is app/page.tsx */}
      </main>

      {/* Sidebar - Overlay behavior */}
      <aside
            className={`
              fixed left-0 z-40 w-3/4 max-w-64 bg-gray-900 text-white
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
                <SidebarNavLink imageUrl={kreoBG} buttonText={"WISATA"} altText={"WISATA"}>
                </SidebarNavLink>
                {/* PRODUK LOKAL */}
                <SidebarNavLink imageUrl={kreoBG} buttonText={"PRODUK LOKAL"}  altText={"PRODUK LOKAL"}>
                </SidebarNavLink>
                {/* INVESTING */}
                <SidebarNavLink imageUrl={kreoBG} buttonText={"INVESTING"} altText={"INVESTING"}>
                </SidebarNavLink>
                {/* PROFIL KREO */}
                <SidebarNavLink imageUrl={kreoBG} buttonText={"PROFIL KREO"} altText={"PROFIL KREO"}>
                </SidebarNavLink>
              </div>
            </nav>

            {/* Social Media Links at the bottom */}
            <div className="mt-auto flex flex-col gap-y-4 pb-4 bg-black p-6">
              <SocialButton // <-- Using the new component
                href="https://www.instagram.com/kreo_sia"
                //icon={InstagramIcon}
                handleText="@kreo_sia"
                backgroundColorClass="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                circleColorClass="bg-purple-700"
                textColorClass="text-white"
                onClick={() => setIsSidebarOpen(false)}
              />
              <SocialButton // <-- Using the new component
                href="https://kreo.desacantik.id"
                //icon={CustomLinkIcon}
                handleText="kreo.desacantik.id"
                backgroundColorClass="bg-gradient-to-r from-red-500 to-red-400 hover:from-red-700 hover:to-red-500"
                circleColorClass="bg-red-500"
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