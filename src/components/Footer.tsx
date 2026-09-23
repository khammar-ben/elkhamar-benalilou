"use client";

import React from 'react';

export function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-[#222] bg-[#111]/80 backdrop-blur-md pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[#ea580c] font-bold font-mono text-xl tracking-tight">&lt;/&gt;</span>
          <span className="text-gray-200 font-bold font-sans text-lg md:text-xl">
            Benalilou Elkhamar <span className="text-gray-600 mx-1">|</span> Software Engineer
          </span>
        </div>
        
        <p className="text-gray-400 font-mono text-xs mb-3 font-medium">
          Built with &lt;3 using Next.js, TypeScript & Tailwind
        </p>
        
        <p className="text-gray-600 font-mono text-[10px]">
          © {new Date().getFullYear()} Benalilou Elkhamar. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
