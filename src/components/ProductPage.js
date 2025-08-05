'use client';

import React from 'react';
import Image from 'next/image';
import kreoBG from "@/assets/images/kreo.jpg";
import BottomInformationPanel from '@/components/BottomInformationPanel';
import ImageWithCaption from '@/components/ImageWithCaption';
import ContentPage from '@/components/ContentPage';

export default function ProductPage({
    title = "", image = kreoBG,
    data = {
        owner: '-',
        year: 0,
        products: '-',
        prices: '-',
        socials: '-',
        description: ''
    }
}) {

    const content = [
        <div className='flex w-full items-center justify-center'>
          <table class="table-auto border border-black text-black">
            <thead>
              <tr>
                <th class="border border-black px-4 py-2">Aspek</th>
                <th class="border border-black px-4 py-2">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-black px-4 py-2">Nama Pemilik</td>
                <td class="border border-black px-4 py-2">{data.owner}</td>
              </tr>
              <tr>
                <td class="border border-black px-4 py-2">Tahun Berdiri</td>
                <td class="border border-black px-4 py-2">{data.year ?? "-"}</td>
              </tr>
              <tr>
                <td class="border border-black px-4 py-2">Produk</td>
                <td class="border border-black px-4 py-2">{data.products}</td>
              </tr>
              <tr>
                <td class="border border-black px-4 py-2">Harga</td>
                <td class="border border-black px-4 py-2">{data.prices}</td>
              </tr>
              <tr>
                <td class="border border-black px-4 py-2">Media Sosial</td>
                <td class="border border-black px-4 py-2">{data.socials}</td>
              </tr>
            </tbody>
          </table>
        </div>,
        <ImageWithCaption
          imageSrc={image}
          caption={title}
          imageWidth={64}
        />,
        <p className={`text-base text-black`}>
          {data.description}
        </p>
    ];

    const keyedContent = content.map((element, index) => {
        return React.cloneElement(element, { key: index });
    });

  return (
    <ContentPage title={title} image={image} content={content}/>
  );
}
