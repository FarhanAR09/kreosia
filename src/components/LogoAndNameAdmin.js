'use client';

import React from 'react';

export default function LogoAndNameAdmin({
  className
}) {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}> {/* Added flex, items-center, justify-center, space-x-2 */}
    {/* Your new icon goes here! */}
          <h1 className="text-2xl font-bold tracking-wider">KREOSIA Admin</h1>
        </div>
  );
}
