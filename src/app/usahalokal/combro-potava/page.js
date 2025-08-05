'use client';

import image from '@/assets/images/produk/produk-combropotava.jpg'
import ProductPage from '@/components/ProductPage';

export default function Page() {
  
  const data={
        owner: 'Bapak Sukron',
        year: 2021,
        products: "Combro Kentang",
        prices: "Rp10.000 ",
        socials: "Instagram: @potava.id",
        description: "Usaha Combro Kentang Potava telah berjalan hampir 4 tahun. Produk utama adalah combro kentang, yang sebenarnya menggunakan kentang sebagai campuran singkong untuk menarik minat pasar. Produksi dilakukan hampir setiap hari dengan kapasitas 40–50 kg per hari. Proses produksi masih manual, termasuk pengupasan, pengadonan, pencetakan, dan penggorengan, menggunakan alat sederhana tanpa mesin cetak otomatis. Produk dipasarkan terutama secara offline melalui warung, oleh-oleh, dan pemesanan lewat WhatsApp, dengan harga Rp10.000 per kemasan. Penjualan combro kentang ini telah dipasarkan hingga ke luar kota seperti Jogja, Magelang, Semarang hingga Kalimantan. Saat ini, usaha masih mengandalkan tenaga kerja lokal sebanyak 7 orang, dan belum aktif memanfaatkan platform e-commerce. Upaya diversifikasi seperti frozen product pernah direncanakan, namun terkendala alat vakum dan teknik penyimpanan."
    };

  return (
    <ProductPage title="Combro Kentang Potava" image={image}
    data={data}
    />    
  );
}
