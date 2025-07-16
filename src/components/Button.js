'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Button({
  content = [],
  onClick,
}) {
  const router = useRouter();

  const keyedContent = content.map((element, index) =>
    React.cloneElement(element, { key: index })
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl 
                 bg-black text-white 
                 shadow-md hover:shadow-lg transition duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2`}
    >
      {keyedContent}
    </button>
  );
}
