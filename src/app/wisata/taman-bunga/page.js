'use client';

import img1 from '@/assets/images/wisata/wisata-tamanBunga.jpg'
import ContentPage from '@/components/ContentPage';
import ImageWithCaption from '@/components/ImageWithCaption';
import TextHyperlink from '@/components/TextHyperlink';


export default function Page() {

  const content = [
    <p className={`text-base text-black`}>
      Taman Bunga Kreosia merupakan salah satu destinasi wisata alam yang sedang berkembang di Kabupaten Wonosobo, tepatnya di Desa Kreo, Kecamatan Kejajar. Dengan luas area sekitar 1 hektare, taman ini menyuguhkan hamparan keindahan bunga yang memanjakan mata, terutama bunga hortensia.
    </p>,
    <ImageWithCaption
      imageSrc={img1}
      caption="Gambar Taman Bunga Hortensia dengan Pemandangan Gunung Sindoro"
      imageWidth={96}
    />,
    <p className={`text-base text-black`}>
      Terletak di kawasan dataran tinggi yang berhawa sejuk, Taman Bunga Kreosia menawarkan suasana yang tenang, asri, dan penuh warna. Udara segar khas pegunungan Kejajar dan pemandangan Gunung Sindoro menambah kenyamanan para pengunjung yang ingin bersantai atau sekadar menikmati panorama alam yang indah. 
    </p>,
    <p className={`text-base text-black`}>
      Fokus utama taman ini adalah bunga hortensia, yang tumbuh subur dan mekar dengan warna-warna memikat seperti biru, ungu, merah muda, dan putih. Keindahan bunga hortensia yang tertata rapi dalam petak-petak taman menciptakan kesan visual yang memukau, apalagi saat bunga sedang berada dalam masa mekarnya.
    </p>,
    <p className={`text-base text-black`}>
      Selain menikmati keindahan bunga, pengunjung juga bisa berjalan santai di jalur-jalur kecil yang mengelilingi taman, duduk di gazebo sederhana, atau sekadar bersantai sambil menikmati pemandangan perbukitan sekitar.
    </p>,
    <p className={`text-base text-black`}>
      Jam buka : Setiap Hari
    </p>,
    <TextHyperlink displayedText={"Google Maps Taman Bunga Kreosia"} link="https://maps.app.goo.gl/y9HuYZuimHCJbTHA7?g_st=ic "/>
  ];

  return (
    <ContentPage title="Taman Bunga Kreosia: Wisata Bunga Hortensia dengan Pemandangan Sindoro" image={img1} content={content}/>
  );
}
