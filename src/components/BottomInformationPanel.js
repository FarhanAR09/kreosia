'use client';

import React from 'react';
import LogoAndName from '@/components/LogoAndName';
import SocialButton from '@/components/SocialButton';

import logoKreo from '@/assets/images/logo-kreo.png';
import logoArunika from '@/assets/images/logo-arunika.png';
import logoUGM from '@/assets/images/logo-ugm.png';
import logoKKN from '@/assets/images/logo-kkn.png';
import Image from 'next/image';

export default function BottomInformationPanel({

}) {
  return (
    <div className='flex flex-col bg-[#002B00] w-full items-center justify-start gap-4 p-8'>
          <LogoAndName/>
          <div/>
          <p className='text-justify'>
            Website kreosia.com adalah kolaborasi antara Pemerintah Desa Kreo, Kelompok Sadar Wisata Desa Kreo, dan Tim KKN-PPM UGM 2025 Arunika Wonosobo yang bertujuan untuk mempromosikan potensi pariwisata dan UMKM lokal Desa Kreo secara digital, memudahkan akses informasi bagi wisatawan, serta membuka peluang investasi untuk pengembangan desa secara berkelanjutan.
          </p>
          <p className='text-justify'>
            Melalui kolaborasi ini, kreosia.com tidak hanya menjadi sarana promosi, tetapi juga wadah pemberdayaan masyarakat Desa Kreo. Dengan memanfaatkan teknologi digital, masyarakat didorong untuk aktif mengelola dan mempublikasikan potensi wisata serta produk unggulan mereka, sehingga mampu menjangkau pasar yang lebih luas. Kolaborasi ini diharapkan dapat meningkatkan kunjungan wisatawan, memperkuat brand Desa Kreo sebagai destinasi wisata unggulan Wonosobo, dan mendorong pertumbuhan ekonomi lokal yang berkesinambungan.
          </p>
          <div/>
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
          <div className={`flex items-center justify-center space-x-2 bg-white p-4 rounded-4xl`}>
            <div className="relative h-8 w-8">
                <Image
                  src={logoUGM}
                  alt="Kreosia Logo"
                  fill
                  className="object-contain"
                />
            </div>
            <div className="relative h-8 w-8">
                <Image
                  src={logoKKN}
                  alt="Kreosia Logo"
                  fill
                  className="object-contain"
                />
            </div>
            <div className="relative h-8 w-8">
                <Image
                  src={logoArunika}
                  alt="Kreosia Logo"
                  fill
                  className="object-contain"
                />
            </div>
            <div className="relative h-8 w-8">
                <Image
                  src={logoKreo}
                  alt="Kreosia Logo"
                  fill
                  className="object-contain"
                />
            </div>
          </div>
        </div>
  );
}
