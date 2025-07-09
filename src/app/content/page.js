'use client';

import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import SidebarNavLink from '@/components/SidebarNavLink';
import SocialButton from '@/components/SocialButton';

import kreoBG from '@/assets/images/kreo.jpg';
import logoIG from '@/assets/images/logo-instagram.png';
import logoKreo from '@/assets/images/logo-pemdeskreo.png';
import Image from 'next/image';
import CardButton from '@/components/CardButton';
import KreosiaPageTemplate from '@/components/KreosiaPageTemplate';

export default function Home() { // Or RootLayout if this is your app/layout.tsx

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [active, setActive] = useState("Wisata");
  const buttons = ["Wisata", "Produk Lokal", "Profil Desa"];

  return (
    <KreosiaPageTemplate
        content={<div>
            
        </div>}
    />
  );
}
