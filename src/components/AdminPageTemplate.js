'use client';

import React, {useState} from 'react';
import LogoAndNameAdmin from '@/components/LogoAndNameAdmin';
import { useRouter } from 'next/navigation';

export default function AdminPageTemplate({
  content
}) {
    const HEADER_HEIGHT_CLASS = 'h-16'; // Using h-16 (64px) for consistency
    const HEADER_HEIGHT_PX = '64px'; // Explicit pixel value for `top` if not using Tailwind's `top-XX`
    
    const router = useRouter();
    
    return (
    <div className="flex flex-col h-screen">

      {/* Top Bar (Header) */}
      <header className={`bg-[#002B00] text-white p-4 shadow-md sticky top-0 z-50 flex items-center justify-between ${HEADER_HEIGHT_CLASS}`}>
        <div className="flex-shrink-0">
          <button
            onClick={() => {router.push("/")}}
            className="text-white hover:text-blue-200 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 1.293a1 1 0 00-1.414 0l-8 8A1 1 0 002 10h1v7a1 1 0 001 1h4a1 1 0 001-1v-4h2v4a1 1 0 001 1h4a1 1 0 001-1v-7h1a1 1 0 00.707-1.707l-8-8z" />
            </svg>
          </button>
        </div>
        <LogoAndNameAdmin className={`flex-grow`}/>
        <div className="flex-shrink-0 w-8 h-8"></div>
      </header>

      {/* Main content area below header - always takes full width and scrolls */}
      <main className="flex-1 overflow-y-auto bg-gray-100 relative">
        {content}
      </main>
    </div>
  );
}
