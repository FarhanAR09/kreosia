// app/api/content.js
import { NextResponse } from 'next/server';

// This would be replaced by actual CosmosDB + Blob logic
const mockData = {
  'combro': {
    title: 'Usaha Lokal',
    text: 'Contoh konten dari CosmosDB.',
    imageId: 'usaha-lokal.jpg'
  }
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  await delay(1000);

  if (!slug || !mockData[slug]) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const data = mockData[slug];

  return NextResponse.json({
    title: data.title,
    text: data.text,
    //imageUrl: `https://<your-storage-account>.blob.core.windows.net/images/${data.imageId}`
    //imageUrl: `@/assets/images/${data.imageId}`
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf7ylvRNdmeewpoS0fuBKJYvj0b5f5h6HItw&s"
  }, { status: 200 });
}
