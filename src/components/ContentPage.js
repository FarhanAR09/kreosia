'use client';

import React, { useState, useEffect } from 'react'; // Import useState, useEffect

import kreoBG from '@/assets/images/kreo.jpg';
import Image from 'next/image';
import KreosiaPageTemplate from '@/components/KreosiaPageTemplate';
import BottomInformationPanel from '@/components/BottomInformationPanel';

export default function ContentPage({
    image = kreoBG, title, content = <div/>
}) {

  const thumbnail = kreoBG;
  const information = <div className='flex flex-col items-center w-full overflow-y-auto gap-4'>
            <Image src={thumbnail} alt="Main Image" className='w-full h-64 object-cover'/>
            <div className='flex flex-col items-center p-8 w-full gap-4'>
                <p className={`text-4xl text-black font-bold pr-16 text-left w-full`}>
                    {title}
                </p>
                {content}
            </div>
            <BottomInformationPanel/>
        </div>;

  return (
    <KreosiaPageTemplate
        content={information}
    />
  );
}
