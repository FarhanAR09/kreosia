import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SidebarNavLink = ({
  imageUrl,
  altText,
  buttonText,  
  section,
  className = '',
}) => {
  
  const router = useRouter();
  const handleClick = () => {
    router.push(`/?section=${encodeURIComponent(section || "")}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative w-full h-36 rounded-xl overflow-hidden shadow-lg
                  group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  ${className}`}
    >
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent
                   transition-opacity duration-300 group-hover:opacity-80"
      ></div>

      <div className="absolute inset-0 flex items-end justify-end p-4 z-10">
        <span className="text-white text-xl font-bold uppercase drop-shadow-lg">
          {buttonText}
        </span>
      </div>
    </button>
  );
};

export default SidebarNavLink;