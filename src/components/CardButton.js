'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CardButton({
  imageSrc,
  title = '',
  subtitle = '',
  pageRoute = "",
}) {

  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {router.push(pageRoute)}}
      className={`relative w-full h-48 rounded-xl overflow-hidden shadow-lg
                  group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent
                  transition-opacity duration-300 group-hover:opacity-80"
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 z-10 text-white">
        <h1>{title}</h1>
        {subtitle}
      </div>
    </button>
  );
}
