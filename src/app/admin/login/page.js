'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminPageTemplate from '@/components/AdminPageTemplate';

export default function Page() {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempted with password:', password);
    if (password === "admin"){
      router.push("/admin")
    }
  };

  return (
    <AdminPageTemplate
      content={
        <div className="flex flex-col items-center justify-start min-h-screen p-6 text-black">
          <h1 className="text-2xl font-bold text-center mb-8">
            Selamat Datang di Website Admin Kreosia!
          </h1>

          <form
            onSubmit={handleLogin}
            className="w-full max-w-sm rounded-md"
          >
            <h2 className="text-center font-semibold text-lg mb-6">Login</h2>

            <div className="mb-6">
              <label className="block font-semibold text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                className="w-full px-4 py-2 rounded-full bg-gray-300 placeholder-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-900 text-white py-2 rounded-full font-semibold hover:bg-green-800"
            >
              Login
            </button>
          </form>
        </div>
      }
    />
  );
}
