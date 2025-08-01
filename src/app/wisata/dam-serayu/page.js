'use client';

import img1 from '@/assets/images/wisata/wisata-damSerayu1.jpg'
import img2 from '@/assets/images/wisata/wisata-damSerayu2.jpg'
import ContentPage from '@/components/ContentPage';
import ImageWithCaption from '@/components/ImageWithCaption';
import TextHyperlink from '@/components/TextHyperlink';


export default function Page() {

  const content = [
    <p className={`text-base text-black`}>
      Dam Serayu atau yang kerap disebut Dam Sigelap dibangun sebagai bagian dari proyek pengelolaan air Sungai Serayu oleh pemerintah kolonial Belanda pada awal abad ke-20. Pembangunan ini bertujuan untuk mendukung sistem irigasi dan pembangkit listrik tenaga air (PLTA), dengan salah satu proyek utamanya adalah PLTA Garung. PLTA ini memanfaatkan aliran air dari Sungai Serayu yang dialirkan melalui bendungan dan terowongan sepanjang ±2 km menuju Telaga Menjer. Dam Serayu memiliki beberapa fungsi utama, yaitu mengalirkan air ke Telaga Menjer untuk operasional PLTA Garung, mengendalikan debit air Sungai Serayu agar tidak meluap saat musim hujan, serta menyokong sistem irigasi pertanian di kawasan Wonosobo dan sekitarnya.
    </p>,
    <ImageWithCaption
      imageSrc={img1}
      caption="Gambar Dam Serayu dari Atas"
      imageWidth={64}
    />,
    <p className={`text-base text-black`}>
      Keberadaan Dam Serayu tidak hanya penting dari segi fungsi teknis, tetapi juga menyimpan nilai sejarah dan potensi wisata. Menurut penuturan penduduk setempat, lembah di sekitar dam terbentuk akibat proyek pembangunan yang dilakukan pada masa Hindia-Belanda. Proses tersebut menghasilkan jurang sedalam sekitar 150 meter, yang kini dikenal sebagai Lembah Sigelap. Lembah ini memiliki batuan andesit berwarna hitam ke abu-abuan yang tersusun indah seperti punden berundak. Nama ‘Sigelap’ sendiri diberikan bukan karena unsur mistis, melainkan merujuk pada warna gelap khas bebatuan tersebut. Kini, Dam Serayu dan kawasan sekitarnya menjadi bagian penting dari infrastruktur energi dan pertanian di Jawa Tengah, sekaligus menyuguhkan potensi wisata alam dan edukasi.
    </p>,
    <p className={`text-base text-black`}>
      Jam Buka: 06.00 s.d. 16.00
    </p>,
    <p className={`text-base text-black`}>
      HTM: Seikhlasnya
    </p>,
    <TextHyperlink displayedText={"Google Maps Dam Serayu"} link="https://maps.app.goo.gl/fUk646sskGCFh8Qn8?g_st=ic"/>
  ];

  return (
    <ContentPage title="Dam Serayu: Infrastruktur Bersejarah yang Vital bagi Jawa Tengah" image={img2} content={content}/>
  );
}
