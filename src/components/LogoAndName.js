'use client';

import React from 'react';

export default function LogoAndName({
  className
}) {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}> {/* Added flex, items-center, justify-center, space-x-2 */}
    {/* Your new icon goes here! */}
          <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 000 2h12a1 1 0 100-2H4z" clipRule="evenodd"></path>
          </svg>
          <h1 className="text-2xl font-bold tracking-wider">Kreosia</h1>
        </div>
  );
}
