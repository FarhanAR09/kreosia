'use client';

import React from 'react';
import Image from 'next/image';
import logoKreosia from '@/assets/images/logo-kreosia.png';

export default function LogoAndName({ className }) {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="relative h-12 w-12">
        <Image
          src={logoKreosia}
          alt="Kreosia Logo"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold tracking-wider">KREOSIA</h1>
    </div>
  );
}
