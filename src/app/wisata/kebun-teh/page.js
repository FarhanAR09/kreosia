'use client';

import img1 from '@/assets/images/wisata/wisata-kebunTeh.jpg'
import ContentPage from '@/components/ContentPage';
import ImageWithCaption from '@/components/ImageWithCaption';
import TextHyperlink from '@/components/TextHyperlink';


export default function Page() {

  const content = [
    <p className={`text-base text-black`}>
      Kebun Teh Kreosia berada tepat di lereng Gunung Sindoro, Desa Kreo, Kecamatan Kejajar, Kabupaten Wonosobo — kawasan dengan ketinggian antara 1.200–2.000 mdpl yang menawarkan udara pegunungan khas dengan suhu rata-rata 15–24 °C. Dengan luas hamparan yang memungkinkan untuk aktivitas agrowisata, kebun teh ini membentang seperti permadani hijau yang memukau sejauh pandangan mata. Dari berbagai titik kebun, terutama pagi hari saat kabut tipis atau sore dengan sinar lembut, Gunung Sindoro tampak menjulang megah menghiasi lanskap kebun teh sebagai latar fotogenic. Pukul 07.00-08.00 menjadi waktu terbaik untuk berkunjung karena masih mendapatkan pemandangan cerah dari Gunung Sindoro.
    </p>,
    <ImageWithCaption
      imageSrc={img1}
      caption="Gambar Kebun Teh dengan Pemandangan Gunung Sindoro"
      imageWidth={96}
    />,
    <p className={`text-base text-black`}>
      Jam buka : Setiap Hari
    </p>,
    <TextHyperlink displayedText={"Google Maps Kebun Teh Kreosia"} link="https://maps.app.goo.gl/jw12iXB1VSk4VThe9?g_st=ic "/>
  ];

  return (
    <ContentPage title="Kebun Teh: Permadani Hijau di Bawah Sindoro" image={img1} content={content}/>
  );
}
