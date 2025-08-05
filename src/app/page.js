"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import kreoBG from "@/assets/images/kreo.jpg";
import CardButton from "@/components/CardButton";
import KreosiaPageTemplate from "@/components/KreosiaPageTemplate";
import BottomInformationPanel from "@/components/BottomInformationPanel";

// Thumbnails Wisata
import imgDamSerayu from "@/assets/images/wisata/wisata-damSerayu2.jpg";
import imgTamanBunga from "@/assets/images/wisata/wisata-tamanBunga.jpg";
import imgKebunTeh from "@/assets/images/wisata/wisata-kebunTeh.jpg";

// Thumbnails Produk
import imgSinarAbadi from "@/assets/images/produk/produk-combrosinarabadi.jpg";
import imgPotava from "@/assets/images/produk/produk-combropotava.jpg";
import imgWidji from "@/assets/images/produk/produk-kopiwidji.jpg";

export default function HomeContentPage() {
  return (
    <Suspense
      fallback={
        <KreosiaPageTemplate
          content={
            <div className="flex flex-col gap-4">
              <div
                className="relative w-full"
                style={{ height: `calc(100vh - 64px)` }}
              >
                <Image
                  src={kreoBG}
                  alt="Desa Kreo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <BottomInformationPanel />
            </div>
          }
        />
      }
    >
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  /**
   * -------------------------
   * Hooks
   * -------------------------
   */
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("WISATA");
  const [produkLoading, setProdukLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const buttons = ["WISATA", "PRODUK LOKAL", "PROFIL DESA"];
  const contentRef = useRef(null);

  /**
   * -------------------------
   * Effects
   * -------------------------
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    if (!mounted) return;
    if (activeSection === "PRODUK LOKAL") {
      setProdukLoading(true);
      const timer = setTimeout(() => setProdukLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [activeSection, mounted]);

  /**
   * -------------------------
   * Handlers
   * -------------------------
   */
  const handleSectionClick = (label) => {
    setActiveSection(label);
    const timeout = setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => clearTimeout(timeout);
  };

  /**
   * -------------------------
   * Components
   * -------------------------
   */
  const HEADER_HEIGHT_PX = "64px";

  const SkeletonCard = () => (
    <div className="w-full h-48 rounded-xl shadow-md bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-[pulseFast_0.5s_ease-in-out_infinite]" />
  );

  /**
   * -------------------------
   * Render
   * -------------------------
   */
  return (
    <KreosiaPageTemplate
      content={
        <div className="flex flex-col gap-4">
          {/* Hero Section */}
          <div
            className="relative w-full"
            style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX})` }}
          >
            <div
              className="relative w-full text-white"
              style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX})` }}
            >
              <Image src={kreoBG} alt="Desa Kreo" fill className="object-cover" priority />

              {/* Top-right text */}
              <div className="absolute top-6 right-6 flex flex-col items-center gap-1 text-right z-10 text-white">
                <h2 className="text-sm sm:text-base font-medium h-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  WISATA ALAM
                </h2>
                <h1 className="text-5xl sm:text-2xl font-bold h-9 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  KREOSIA
                </h1>
                <p className="text-xs sm:text-sm h-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  KREO, KEJAJAR, WONOSOBO
                </p>
              </div>

              {/* Bottom-right CTA */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10 animate-bounce">
                <span className="text-2xl sm:text-base font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  JELAJAHI SEKARANG
                </span>
                <svg
                  className="w-8 h-8 text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Section Buttons */}
          <div className="flex flex-row justify-center items-center w-full gap-x-2 px-4">
            {buttons.map((label) => (
              <button
                key={label}
                onClick={() => handleSectionClick(label)}
                className={`flex-1 h-12 rounded-xl transition-colors duration-200 font-semibold
                  ${
                    activeSection === label
                      ? "bg-[#87CD87] text-white shadow-md"
                      : "bg-[#375E37] text-white hover:bg-[#004300]"
                  }`}
              >
                <p className="text-l">{label}</p>
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div ref={contentRef}>
            {activeSection === "WISATA" && (
              <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_240px))] px-4 gap-4 justify-center">
                <CardButton
                  imageSrc={imgDamSerayu}
                  title="Dam Serayu"
                  subtitle="Infrastruktur Bersejarah yang Vital bagi Jawa Tengah"
                  pageRoute="/wisata/dam-serayu"
                />
                <CardButton
                  imageSrc={imgTamanBunga}
                  title="Taman Bunga Kreosia"
                  subtitle="Wisata Bunga Hortensia dengan Pemandangan Sindoro"
                  pageRoute="/wisata/taman-bunga"
                />
                <CardButton
                  imageSrc={imgKebunTeh}
                  title="Kebun Teh"
                  subtitle="Permadani Hijau di Bawah Sindoro"
                  pageRoute="/wisata/kebun-teh"
                />
              </div>
            )}

            {activeSection === "PRODUK LOKAL" && produkLoading && (
              <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_240px))] px-4 gap-4 justify-center">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            )}

            {activeSection === "PRODUK LOKAL" && !produkLoading && (
              <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(0,_240px))] px-4 gap-4 justify-center">
                <CardButton
                  imageSrc={imgSinarAbadi}
                  title="Combro Kentang Sinar Abadi"
                  subtitle=""
                  pageRoute="/usahalokal/combro-kentang-sinar-abadi"
                />
                <CardButton
                  imageSrc={imgWidji}
                  title="Widji Coffee"
                  subtitle=""
                  pageRoute="/usahalokal/kopi-widji"
                />
                <CardButton
                  imageSrc={imgPotava}
                  title="Combro Kentang Potava"
                  subtitle=""
                  pageRoute="/usahalokal/combro-potava"
                />
              </div>
            )}

            {activeSection === "PROFIL DESA" && (
              <div className="pl-16 pr-16 pt-8 pb-8 flex flex-col gap-4">
                <p className={`text-3xl font-bold text-black`}>
                  Identitas Desa
                </p>
                <p className={`text-lg font-semibold text-black pl-4`}>
                  Apa nama desa?
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Desa Kreo
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Kata Kreo berasal dari kata magreho yang artinya peliharalah atau jagalah. Berdasarkan informasi tutur masyarakat, Kreo berasal dari kata Krenyo yang berarti sembung atau kayu sembung, konon katanya dulu di kreo banyak ditumbuhi pohon sembung. Ada yang mengatakan kata Kreo dari bahasa arab yaitu qoryatun atau qoriyah yang berarti desa. Dan jika benar, kata kreo berasal dari bahasa arab, maka yang memberi nama tentu orang yang sudah mengenal islam atau mubaligh yang menyebarkan agama di wilayah dieng. Disinyalir mereka adalah pasukan dari Demak Bintara yang makamnya ada di perkuburan sigelap.
                </p>
                <p className={`text-lg font-semibold text-black pl-4`}>
                  Di mana lokasi desa?
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Desa Kreo merupakan desa di Kecamatan Kejajar, Kabupaten Wonosobo, Provinsi Jawa Tengah, Indonesia. Desa Kreo berada di sebelah barat Kecamatan Kejajar. Wilayahnya terletak di lereng Gunung Seroja dengan luas wilayah sekitar 2,84 km². Penduduk Desa Kreo mengandalkan mata pencahariannya sebagai petani terutama petani tembakau dan berbagai sayur-mayur musiman.
                </p>
                <p className={`text-lg font-semibold text-black pl-4`}>
                  Berapa luas wilayah desa?
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Luas wilayah sekitar 2,84 km².
                </p>
                <p className={`text-lg font-semibold text-black pl-4`}>
                  Berapa jumlah penduduk desa?
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  1909 penduduk
                </p>

                <p className={`text-3xl font-bold text-black`}>
                  Geografi dan Iklim
                </p>
                <p className={`text-lg font-semibold text-black pl-4`}>
                  Bagaimana iklim di desa ini?
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Suhu sekitar 16⁰ C - 23⁰ C pada siang hari, dan malam sekitar 12⁰ C - 16⁰ C, dan pada musim kemarau tentunya bisa lebih dingin.
                </p>
                <p className={`text-lg font-semibold text-black pl-4`}>
                  Bagaimana keadaan geografis desa? 
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Desa Kreo terletak di kaki Gunung Seroja atau Gunung Sikudi, yang merupakan pecahan dari letusan Gunung Prahu, gunung yang berada di tengah-tengah pulau Jawa, tetapi setelah mengalami letusan terdahsyat, gunung Prahu pecah menjadi bukit-bukit, Pakuwaja, Sikunir, Prahu, dan Sikudi, yang menyebar di wilayah pegunungan Dieng, dan sekarang lebih dikenal dengan Dataran Tinggi Dieng (dieng plateu). Desa Kreo berada di ketinggian sekitar 1.400 mdpl. 
                </p>

                <p className={`text-3xl font-bold text-black`}>
                  Ekonomi dan Infrastruktur
                </p>
                <p className={`text-lg font-semibold text-black pl-4`}>
                  Apa sektor ekonomi utama di desa?
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Pertanian, UMKM
                </p>
                <p className={`text-lg font-semibold text-black pl-4`}>
                  Apa jenis usaha yang paling banyak di desa?
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Kopi dan Combro Kentang
                </p>

                <p className={`text-3xl font-bold text-black`}>
                  Budaya
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Desa Kreo merupakan salah satu desa di Kecamatan Kejajar, Kabupaten Wonosobo, Jawa Tengah. Berdasarkan informasi tutur masyarakat, Kreo berasal dari kata “krenyo” yang berarti sembung atau kayu sembung, konon katanya dulu di Kreo banyak ditumbuhi pohon sembung.
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Secara geografis, Desa Kreo terletak di lereng Gunung Seroja atau Gunung Sikudi, pecahan dari letusan Gunung Prahu yang membentuk pegunungan Dieng. Berada di ketinggian sekitar 1.400 meter di atas permukaan laut, desa ini memiliki iklim sejuk, dengan suhu siang berkisar antara 16°C – 23°C dan malam hari antara 12°C – 16°C, bahkan lebih dingin saat musim kemarau.
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Luas wilayah Desa Kreo mencapai 2,84 km², dihuni oleh sekitar 1.909 jiwa. Sebagian besar penduduk menggantungkan hidup dari sektor pertanian, khususnya petani tembakau dan sayur-mayur. Selain itu, desa ini juga dikenal dengan produk UMKM seperti kopi dan combro kentang sebagai produk unggulan lokal.
                </p>
                <p className={`text-base font-normal text-black pl-8`}>
                  Desa Kreo merupakan salah satu desa pegunungan yang potensial baik dari sektor pertanian maupun pengembangan ekonomi lokal berbasis UMKM, dengan potensi wisata alam dan budaya yang bisa dikembangkan di masa depan.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Info Panel */}
          <BottomInformationPanel />
        </div>
      }
    />
  );
}
