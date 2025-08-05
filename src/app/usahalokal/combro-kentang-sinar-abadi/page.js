'use client';

import image from '@/assets/images/produk/produk-combrosinarabadi.jpg'
import ProductPage from '@/components/ProductPage';

export default function Page() {
  
  const data={
        owner: 'Bapak Dodit',
        year: 2018,
        products: "Combro Kentang",
        prices: "Rp7.500 (kecil), Rp10.000 (besar)",
        socials: "Instagram: @combrokentangsinarabadi | Shopee: Combro Kentang Sinar Abadi",
        description: "Usaha Combro Kentang Sinar Abadi sudah berjalan sejak 2018 dengan fokus produksi combro berbahan dasar singkong dan kentang. Produk ini dipasarkan ke berbagai pusat oleh-oleh di Semarang, Yogyakarta, bahkan sampai luar Jawa, dengan sistem penjualan langsung, titip jual, hingga platform online seperti Shopee, TikTok, dan WhatsApp. Harga combro dibedakan berdasarkan ukuran, yaitu Rp7.500 untuk kecil dan Rp10.000 untuk besar, dengan dua varian rasa utama. Proses produksi masih dilakukan secara manual oleh sekitar 11 orang pekerja, yang sebagian besar ibu-ibu setempat. Produksi dilakukan setiap hari dengan kapasitas sekitar 1 kuintal, menggunakan bahan baku dari pengumpul lokal, terutama dari Desa Kreo dan sekitarnya. Produk hanya dijual dalam kondisi matang karena tidak tahan disimpan mentah. Saat ini, usaha sedang merencanakan pengembangan produk baru, seperti keripik buah dan carica, sambil tetap mengandalkan promosi melalui Shopee dan media sosial."
    };

  return (
    <ProductPage title="Combro Kentang Sinar Abadi" image={image}
    data={data}
    />    
  );
}
