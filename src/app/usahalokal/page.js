'use client';

import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import { useRouter, useSearchParams  } from 'next/navigation';

import kreoBG from '@/assets/images/kreo.jpg';
import ContentPage from '@/components/ContentPage';

export default function Page() {

  const router = useRouter();
  const searchParams = useSearchParams ();
  const slug = searchParams.get('slug');
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        console.log("Requesting");
        const res = await fetch(`/api/usaha-lokal?slug=${slug}`);
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        setContent(data);
      } catch (err) {
        router.push('/notfound');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug, router]);

  let title = "Usaha Lokal"
  let children = [];

  if (content)
  {
    title = content.title
    children = [
              <p className={`text-base text-black`}>
                {content.text}
              </p>
    ];
  }

  const image = kreoBG;

  return (
    <ContentPage title={isLoading ? "Memuat..." : title} image={image} content={ isLoading ? [<div className="flex justify-center items-center py-12">
        <div className="w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
    </div>] : children }/>
  );
}
