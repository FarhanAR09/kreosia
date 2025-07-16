'use client';

import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

import kreoBG from '@/assets/images/kreo.jpg';
import Image from 'next/image';
import ContentPage from '@/components/ContentPage';

export default function Page() {

    const router = useRouter()
  const image = kreoBG;
  const content = [
              <p className={`text-base text-black`}>
                Mohon kembali ke laman utama dengan tombol berikut.
              </p>,
              <Button content={[
                <p className=''>
                    Kembali
                </p>
              ]}/>
  ];

  return (
    <ContentPage title="Laman Tidak Ditemukan" image={image} content={content}/>
  );
}
