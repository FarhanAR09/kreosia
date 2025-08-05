'use client';

import img1 from '@/assets/images/wisata/wisata-makamsigelap1.jpg'
import img2 from '@/assets/images/wisata/wisata-makamsigelap2.jpg'
import ContentPage from '@/components/ContentPage';
import ImageWithCaption from '@/components/ImageWithCaption';
import TextHyperlink from '@/components/TextHyperlink';


export default function Page() {

  const content = [
    <p className={`text-xl font-bold text-black text-justify`}>
      📜 Sejarah
    </p>,
    <p className={`text-base text-black text-justify`}>
      Makam Sigelap dikenal sebagai situs pemakaman tua yang memiliki nilai sejarah dan religius yang sangat kuat. Berdasarkan penuturan warga setempat, makam ini telah ada jauh sebelum wilayah Kreo berkembang seperti sekarang. Konon, kawasan ini dulunya merupakan tempat pemakaman masyarakat penganut Hindu-Buddha. Di dalam kompleks makam, diperkirakan terdapat ratusan makam, meskipun tidak semuanya diketahui siapa yang dimakamkan. Sebagian nama disamarkan atau bahkan sengaja tidak disebutkan.
    </p>,
    <p className={`text-base text-black text-justify`}>
      Di masa berikutnya, masuknya Islam membawa perubahan besar terhadap wilayah ini. Utusan dari Kesultanan Demak Bintoro datang ke kawasan Jeblugan untuk menjadikan wilayah tersebut sebagai pusat dakwah dalam menyebarkan Islam ke wilayah Kayangan Dieng. Salah satu pencapaian penting dari dakwah ini adalah masuk Islamnya Kyai Kolodete, tokoh penting yang sebelumnya menganut ajaran Hindu, yang kemudian menjadi mubaligh penyebar Islam di tanah Dieng. Keberadaan para penyebar Islam ini diyakini kuat karena di kompleks Makam Sigelap ditemukan sejumlah makam tokoh Islam seperti Tumenggung Raden Kertosari, Mbah Pidha Ibrahim, Syeh Belabelo, Syeh Dami Aking, Kyai Jegang Jaya, Syeh Karim, Syeh Jangkung, dan Nyai Ajeng Rara Ayu. Para tokoh ini dikenal luas sebagai bagian dari sejarah spiritual dan kultural masyarakat Kreo.
    </p>,
    <ImageWithCaption
      imageSrc={img2}
      caption="Gambar Gerbang Masuk Makam Sigelap"
      imageWidth={96}
    />,
    <p className={`text-xl font-bold text-black text-justify`}>
      ⏰ Jam Buka
    </p>,
    <p className={`text-base text-black text-justify`}>
      Makam Sigelap terbuka untuk umum setiap hari.
    </p>,
    <p className={`text-xl font-bold text-black text-justify`}>
      🌿 Kawasan
    </p>,
    <p className={`text-base text-black text-justify`}>
      Kompleks Makam Sigelap berada di lingkungan perbukitan yang asri dan tenang. Kawasan ini dikelilingi oleh pepohonan tua, menjadikannya tempat yang damai untuk berziarah maupun refleksi diri.
    </p>,
    <ImageWithCaption
      imageSrc={img2}
      caption="Gambar Salah Satu Makam dalam Komplek Makam Sigelap"
      imageWidth={96}
    />,
    <p className={`text-xl font-bold text-black text-justify`}>
      🗺️ Peta Lokasi
    </p>,
    <TextHyperlink displayedText={"Google Maps Makam Sigelap"} link="https://maps.app.goo.gl/m6uu1vNC7xgbM6J46"/>,
    <p className={`text-base text-black text-justify`}>
      Sawah & Hutan, Kreo, Kec. Kejajar, Kabupaten Wonosobo, Jawa Tengah 56354
    </p>,
  ];

  return (
    <ContentPage title="Makam Sigelap: Jejak Spiritual dan Sejarah Purba di Kreo" image={img1} content={content}/>
  );
}
