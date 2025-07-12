'use client';

import React from 'react';
import LogoAndName from '@/components/LogoAndName';
import SocialButton from '@/components/SocialButton';

import logoKreo from '@/assets/images/logo-pemdeskreo.png';

export default function BottomInformationPanel({

}) {
  return (
    <div className='flex flex-col bg-[#002B00] w-full items-center justify-start gap-4 p-8'>
          <LogoAndName/>
          <div/>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat lacus. Sed quis posuere elit. Nam euismod maximus lectus, nec fermentum lectus gravida et. Vestibulum euismod mi ac magna rutrum condimentum. Aliquam tellus magna, pretium quis pulvinar at, malesuada in mi. Proin imperdiet dapibus neque, eu tempus est ultricies et. Nulla facilisi. Curabitur sed dui fringilla, pretium ipsum id, varius neque. Aenean id metus in leo auctor rhoncus vel sit amet orci. Integer venenatis, dui eget ultricies auctor, ante nibh blandit dui, dapibus tincidunt felis elit molestie tortor. Curabitur id justo a mauris molestie varius.
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat lacus. Sed quis posuere elit. Nam euismod maximus lectus, nec fermentum lectus gravida et. Vestibulum euismod mi ac magna rutrum condimentum. Aliquam tellus magna, pretium quis pulvinar at, malesuada in mi. Proin imperdiet dapibus neque, eu tempus est ultricies et. Nulla facilisi. Curabitur sed dui fringilla, pretium ipsum id, varius neque. Aenean id metus in leo auctor rhoncus vel sit amet orci. Integer venenatis, dui eget ultricies auctor, ante nibh blandit dui, dapibus tincidunt felis elit molestie tortor. Curabitur id justo a mauris molestie varius.
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
        </div>
  );
}
