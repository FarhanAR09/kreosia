'use client';

import img1 from '@/assets/images/wisata/wisata-makamsigelap1.jpg'
import img2 from '@/assets/images/wisata/wisata-makamsigelap2.jpg'
import ContentPage from '@/components/ContentPage';
import ImageWithCaption from '@/components/ImageWithCaption';
import TextHyperlink from '@/components/TextHyperlink';


export default function Page() {

  const content = [
    <p className={`text-base text-black text-justify`}>
      Makam Sigelap dikenal sebagai situs pemakaman tua yang memiliki nilai sejarah dan religius yang sangat kuat. Berdasarkan penuturan warga setempat, makam ini telah ada jauh sebelum wilayah Kreo berkembang seperti sekarang. Konon, kawasan ini dulunya merupakan tempat pemakaman masyarakat penganut Hindu-Buddha. Di dalam kompleks makam, diperkirakan terdapat ratusan makam, meskipun tidak semuanya diketahui siapa yang dimakamkan. Sebagian nama disamarkan atau bahkan sengaja tidak disebutkan.
    </p>,
    <p className={`text-base text-black text-justify`}>
      Keberadaan Makam Sigelap menjadi bukti penting akan jejak masyarakat purba Kreo. Pada masa silam, penduduk awal Kreo diketahui bermukim di wilayah barat makam, di daerah cekungan yang kini dikenal sebagai Jeblugan. Namun, mereka kemudian bermigrasi ke arah timur laut sejauh sekitar dua kilometer, yang kini menjadi wilayah Desa Kreo. Perpindahan ini terjadi akibat peristiwa alam berupa tanah amblas atau jeblug, yang oleh masyarakat dimitoskan berkaitan dengan peristiwa Nyai Tabi’es yang mandi jinabat di sumber mata air Jeblugan. Dikisahkan, peristiwa itu menyebabkan sumber air mati dan berpindah ke wilayah Gunung Tawang, yang kini dikenal sebagai sumber mata air Kreo.
    </p>,
    <ImageWithCaption
      imageSrc={img2}
      caption="Gambar Gerbang Masuk Makam Sigelap"
      imageWidth={96}
    />,
    <p className={`text-base text-black text-justify`}>
      Di masa berikutnya, masuknya Islam membawa perubahan besar terhadap wilayah ini. Utusan dari Kesultanan Demak Bintoro datang ke kawasan Jeblugan untuk menjadikan wilayah tersebut sebagai pusat dakwah dalam menyebarkan Islam ke wilayah Kayangan Dieng. Salah satu pencapaian penting dari dakwah ini adalah masuk Islamnya Kyai Kolodete, tokoh penting yang sebelumnya menganut ajaran Hindu, yang kemudian menjadi mubaligh penyebar Islam di tanah Dieng. Keberadaan para penyebar Islam ini diyakini kuat karena di kompleks Makam Sigelap ditemukan sejumlah makam tokoh Islam seperti Tumenggung Raden Kertosari, Mbah Pidha Ibrahim, Syeh Belabelo, Syeh Dami Aking, Kyai Jegang Jaya, Syeh Karim, Syeh Jangkung, dan Nyai Ajeng Rara Ayu. Para tokoh ini dikenal luas sebagai bagian dari sejarah spiritual dan kultural masyarakat Kreo.
    </p>,
    <p className={`text-base text-black text-justify`}>
      Hingga kini, Makam Sigelap tetap ramai dikunjungi peziarah, terutama pada bulan-bulan tertentu seperti bulan Suro. Tidak sedikit peziarah yang datang dari Yogyakarta hingga lingkungan Kraton. Tokoh-tokoh seperti Tumenggung Kertosari yang disebut memiliki hubungan dengan Kraton, semakin memperkuat nilai budaya dan historis dari situs ini. Meski tak semua nama penghuni makam diketahui, sebagian memang disamarkan atau sengaja dirahasiakan sesuai dengan tradisi setempat yang menjunjung kerahasiaan spiritual. Keberadaan Makam Sigelap tak hanya menjadi warisan budaya, namun juga cermin dari dinamika keyakinan, sejarah lokal, dan perpaduan antara mitos, sejarah, serta spiritualitas masyarakat Jawa.
    </p>,
    <ImageWithCaption
      imageSrc={img2}
      caption="Gambar Salah Satu Makam dalam Komplek Makam Sigelap"
      imageWidth={96}
    />,
    <p className={`text-xl font-bold text-black text-justify`}>
      Sumber
    </p>,
    <TextHyperlink displayedText={"https://p2k.stekom.ac.id/ensiklopedia/Kreo,_Kejajar,_Wonosobo"} link="https://p2k.stekom.ac.id/ensiklopedia/Kreo,_Kejajar,_Wonosobo"/>,
    <p className={`text-base text-black text-justify`}>
      Wawancara dengan Penjaga Makam Sigelap
    </p>,
  ];

  return (
    <ContentPage title="Sejarah Makam Sigelap" image={img1} content={content}/>
  );
}
