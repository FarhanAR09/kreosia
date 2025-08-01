'use client';

import React from 'react';
import Image from 'next/image';

export default function ImageWithCaption({
    imageSrc,
    caption,
    imageWidth = 64
}) {
  return (
    <div className="flex flex-col w-full items-center gap-2">
        <Image src={imageSrc} alt={caption} className={`w-${imageWidth} object-fit`}/>
        <p className={`text-xs text-black text-center `}>
            {caption}
        </p>
    </div>
  );
}
