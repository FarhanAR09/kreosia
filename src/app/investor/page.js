'use client';

import React, { useState, useEffect } from 'react'; // Import useState, useEffect

import kreoBG from '@/assets/images/kreo.jpg';
import Image from 'next/image';
import ContentPage from '@/components/ContentPage';

export default function DummyContentPage() {

  const image = kreoBG;
  const content = [
              <p className={`text-base text-black`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mi libero. Pellentesque congue nec turpis ornare suscipit. Proin accumsan sem quis magna tempor pellentesque. Aliquam erat volutpat. Mauris ut tincidunt odio. Maecenas id venenatis leo. Vivamus euismod augue non ipsum auctor, non malesuada sem tincidunt. Vivamus eget sagittis urna, et ullamcorper lorem. Donec rutrum nunc eu dui malesuada luctus. Cras facilisis ligula eget odio pulvinar, ut sollicitudin risus ornare. Sed et lacinia nibh. Nam eu urna tellus. Phasellus vel velit accumsan, bibendum sapien eu, sodales justo. Vivamus ut tincidunt felis. Phasellus eros enim, facilisis sit amet ipsum ac, hendrerit tristique nibh.
              </p>,
              <p className={`text-2xl text-black font-bold pr-16 text-center w-full`}>
                Benefits
              </p>,
              <p className={`text-base text-black`}>
                Vestibulum id risus tristique nulla accumsan euismod non ut quam. Quisque condimentum nibh velit, et gravida libero porta et. Etiam porta blandit felis, at sagittis eros vulputate et. Ut tellus purus, pulvinar id dui quis, facilisis cursus felis. Donec non orci diam. Ut accumsan, velit in cursus dapibus, odio nunc tincidunt libero, sed molestie erat arcu ac orci. Maecenas id nunc faucibus turpis ultrices feugiat. Integer eu gravida nulla, nec suscipit risus. Vestibulum facilisis, ante eget auctor molestie, lectus magna lobortis justo, eu sodales felis erat sagittis justo.
              </p>,
              <div className="flex flex-col w-full items-center gap-2">
                <Image src={kreoBG} alt="Gambar Desa Kreo" className='w-64 object-fit'/>
                <p className={`text-xs text-black text-center `}>
                  Gambar Desa Kreo
                </p>
              </div>,
              <p className={`text-base text-black`}>
                Nam vitae augue sed magna dapibus pellentesque eu ac enim. Nam pulvinar mauris vel venenatis gravida. Proin sit amet ante nisi. Vivamus non suscipit lacus. Nunc vitae lacus non arcu ullamcorper pharetra id ac risus. Proin rhoncus, purus ac aliquet semper, lectus urna dictum risus, vel vestibulum augue metus et leo. Proin imperdiet consectetur nulla vel imperdiet. Aliquam mollis nunc erat, at commodo elit eleifend vitae. Nam et libero sit amet libero vestibulum accumsan id non risus. Phasellus nec nisl erat. Mauris commodo enim leo, vel fermentum urna pellentesque ut. Nunc id dictum mauris.
              </p>
  ]

  return (
    <ContentPage title="Investasi di Kreosia!" image={image} content={content}/>
  );
}
