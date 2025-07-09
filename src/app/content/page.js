'use client';

import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import SidebarNavLink from '@/components/SidebarNavLink';
import SocialButton from '@/components/SocialButton';

import kreoBG from '@/assets/images/kreo.jpg';
import logoIG from '@/assets/images/logo-instagram.png';
import logoKreo from '@/assets/images/logo-pemdeskreo.png';
import Image from 'next/image';
import CardButton from '@/components/CardButton';
import KreosiaPageTemplate from '@/components/KreosiaPageTemplate';

export default function ContentPage() {

  return (
    <KreosiaPageTemplate
        content={<div className='flex flex-col items-center w-full overflow-y-auto'>
            <Image src={kreoBG} alt="Main Image" className='w-full h-64 object-cover'/>
            <div className='flex flex-col items-center p-8 w-full gap-4'>
              <p className={`text-4xl text-black pr-16 text-left w-full`}>
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet 
              </p>
              <p className={`text-base text-black`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec feugiat lacus. Sed quis posuere elit. Nam euismod maximus lectus, nec fermentum lectus gravida et. Vestibulum euismod mi ac magna rutrum condimentum. Aliquam tellus magna, pretium quis pulvinar at, malesuada in mi. Proin imperdiet dapibus neque, eu tempus est ultricies et. Nulla facilisi. Curabitur sed dui fringilla, pretium ipsum id, varius neque. Aenean id metus in leo auctor rhoncus vel sit amet orci. Integer venenatis, dui eget ultricies auctor, ante nibh blandit dui, dapibus tincidunt felis elit molestie tortor. Curabitur id justo a mauris molestie varius.
              </p>
              <p className={`text-base text-black`}>
                Vestibulum id risus tristique nulla accumsan euismod non ut quam. Quisque condimentum nibh velit, et gravida libero porta et. Etiam porta blandit felis, at sagittis eros vulputate et. Ut tellus purus, pulvinar id dui quis, facilisis cursus felis. Donec non orci diam. Ut accumsan, velit in cursus dapibus, odio nunc tincidunt libero, sed molestie erat arcu ac orci. Maecenas id nunc faucibus turpis ultrices feugiat. Integer eu gravida nulla, nec suscipit risus. Vestibulum facilisis, ante eget auctor molestie, lectus magna lobortis justo, eu sodales felis erat sagittis justo.
              </p>
              <div className="flex flex-col w-full items-center gap-2">
                <Image src={kreoBG} alt="Gambar Desa Kreo" className='w-64 object-fit'/>
                <p className={`text-xs text-black text-center `}>
                  Gambar Desa Kreo
                </p>
              </div>
              <p className={`text-base text-black`}>
                Nam vitae augue sed magna dapibus pellentesque eu ac enim. Nam pulvinar mauris vel venenatis gravida. Proin sit amet ante nisi. Vivamus non suscipit lacus. Nunc vitae lacus non arcu ullamcorper pharetra id ac risus. Proin rhoncus, purus ac aliquet semper, lectus urna dictum risus, vel vestibulum augue metus et leo. Proin imperdiet consectetur nulla vel imperdiet. Aliquam mollis nunc erat, at commodo elit eleifend vitae. Nam et libero sit amet libero vestibulum accumsan id non risus. Phasellus nec nisl erat. Mauris commodo enim leo, vel fermentum urna pellentesque ut. Nunc id dictum mauris.
              </p>
            </div>
        </div>}
    />
  );
}
