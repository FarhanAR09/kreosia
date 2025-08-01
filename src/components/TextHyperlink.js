'use client';

import React from 'react';

export default function TextHyperlink({
  displayedText,
  link,
}) {return (
    <a href={link} className="text-blue-500 underline">
        {displayedText}
    </a>
  );
}
