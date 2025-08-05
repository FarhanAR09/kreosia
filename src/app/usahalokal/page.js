"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import kreoBG from "@/assets/images/kreo.jpg";
import ContentPage from "@/components/ContentPage";

// Tell Next.js this page should always be dynamic (good for SSR)
export const dynamic = "force-dynamic";

function UsahaLokalContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Requesting");
        const res = await fetch(`/api/usaha-lokal?slug=${slug}`);
        if (!res.ok || !slug) throw new Error("Not found");
        const data = await res.json();
        setContent(data);
      } catch (err) {
        router.push("/notfound");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug, router]);

  let title = "Usaha Lokal";
  let children = [];

  if (content) {
    title = content.title;
    children = [
      <Image
        key="image"
        src={content.imageUrl || kreoBG}
        alt="Gambar Desa Kreo"
        className="w-64 object-fit"
        width={1200}
        height={400}
      />,
      <p key="text" className="text-base text-black">
        {content.text}
      </p>,
    ];
  }

  return (
    <ContentPage
      title={isLoading ? "Memuat..." : title}
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7ylvRNdmeewpoS0fuBKJYvj0b5f5h6HItw&s"
      content={
        isLoading
          ? [
              <div
                key="loader"
                className="flex justify-center items-center py-12"
              >
                <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
              </div>,
            ]
          : children
      }
    />
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsahaLokalContent />
    </Suspense>
  );
}
