'use client';

import image from '@/assets/images/produk/produk-kopiwidji.jpg'
import ProductPage from '@/components/ProductPage';

export default function Page() {
  
  const data={
        owner: 'Bapak Widji',
        products: "Kopi Widji",
        prices: "Rp250.000 - Rp400.000/kg; mulai Rp25.00/100 gram",
        socials: "Instagram: @widjicoffee | TikTok: @widjicoffee | Facebook: @widjicoffee | Shopee: widjicoffee",
        description: "Widji Coffee merupakan usaha pengolahan kopi lokal yang memproduksi bubuk kopi dan roasted bean (biji kopi sangrai). Awalnya mereka juga menjual green bean, namun karena keterbatasan stok, fokusnya kini pada roasted dan bubuk kopi. Kopi yang diproduksi didominasi jenis Arabika dari kebun sendiri, sedangkan Robusta didatangkan dari Temanggung. Produk dipasarkan langsung ke konsumen, baik secara offline maupun lewat Shopee dan WhatsApp. Produksi dilakukan setiap hari, menyesuaikan dengan panen yang berlangsung setahun sekali. Widji Coffee menggunakan berbagai metode pengolahan seperti honey, natural, wine, semi wash dan full wash, yang mempengaruhi rasa dan harga. Harga berkisar Rp250.000–Rp400.000 per kg, tergantung jenis dan proses. Sementara untuk kemasan 100 gram, harganya mulai dari Rp25.000. Proses pengolahan, mulai dari panen, penjemuran, pengupasan, hingga roasting dan pengemasan, dilakukan secara mandiri."
    };

  return (
    <ProductPage title="Widji Coffee" image={image}
    data={data}
    />    
  );
}
