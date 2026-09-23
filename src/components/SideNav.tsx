"use client";

import React, { useEffect, useState } from 'react';
import { Code, User, Cpu, Briefcase, FolderGit2, Mail } from 'lucide-react';

const sections = [
  { id: 'home', icon: Code },
  { id: 'about', icon: User },
  { id: 'skills', icon: Cpu },
  { id: 'experience', icon: Briefcase },
  { id: 'projects', icon: FolderGit2 },
  { id: 'contact', icon: Mail },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is most visible in the viewport
      let current = '';
      let maxVisibleHeight = 0;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
          
          // Calculate how much of the section is visible
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(viewHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          
          // Special case for top of page
          if (window.scrollY < 100) {
            current = 'home';
            return;
          }

          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            current = id;
          }
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center z-50">
      
      {/* Absolute dark line connecting all dots */}
      <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-[#333] -z-10"></div>

      <div className="flex flex-col gap-8 py-4">
        {sections.map(({ id, icon: Icon }) => {
          const isActive = activeSection === id;

          return (
             <div 
               key={id} 
               onClick={() => scrollToSection(id)}
               className="relative flex items-center justify-center cursor-pointer group w-10 h-10"
               title={`Navigate to ${id}`}
             >
                {isActive ? (
                  // ACTIVE STATE
                  <>
                    {/* The spinning dashed outer ring */}
                    <div className="absolute inset-[1px] rounded-full border border-dashed border-[#f97316] animate-[spin_4s_linear_infinite]" />
                    
                    {/* The subtle cyan/orange radial glow */}
                    <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.3)] bg-gradient-to-r from-transparent to-[#38bdf8]/10" />
                    
                    {/* The solid inner ring with icon */}
                    <div className="w-7 h-7 rounded-full border border-[#f97316] bg-[#111] flex items-center justify-center relative z-10">
                      <Icon className="w-3.5 h-3.5 text-[#f97316]" />
                    </div>
                  </>
                ) : (
                  // INACTIVE STATE
                  <div className="w-2.5 h-2.5 rounded-full bg-[#18181A] border border-[#333] group-hover:border-[#f97316] group-hover:scale-125 transition-all duration-300 relative z-10" />
                )}
             </div>
          );
        })}
      </div>
    </div>
  );
}
