"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cpu, Code2, Coffee } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative z-10 w-full">
      <div className="flex items-center mb-12">
        <span className="text-[#ea580c] font-mono text-xl md:text-2xl font-bold mr-4">
          &gt;_
        </span>
        <h2 className="text-3xl font-bold font-mono text-white tracking-wide flex items-center">
          <span className="text-gray-400 mr-3">#</span> About.system
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto">
        
        {/* LEFT PANEL: PROFILE CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-5/12 bg-[#121212] rounded-xl border border-[#222] p-8 flex flex-col relative"
          style={{
            boxShadow: '-30px 30px 80px -20px rgba(249,115,22,0.15), 30px -30px 80px -20px rgba(59,130,246,0.1)',
          }}
        >
          {/* Profile Picture with Broken Ring */}
          <div className="relative w-40 h-40 mx-auto mb-10 flex items-center justify-center mt-4">
            
            {/* SVG Broken Rings */}
            <svg className="absolute -inset-4 w-[120%] h-[120%] -rotate-90 pointer-events-none" viewBox="0 0 100 100">
              {/* Orange Ring Segment (Bottom/Left) */}
              <circle cx="50" cy="50" r="48" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="100 200" strokeDashoffset="-60" opacity="0.8" />
              {/* Blue Ring Segment (Right) */}
              <circle cx="50" cy="50" r="48" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="50 250" strokeDashoffset="-10" opacity="0.6" />
              {/* Gray Ring Segment (Top) */}
              <circle cx="50" cy="50" r="48" fill="none" stroke="#444" strokeWidth="1" strokeDasharray="20 280" strokeDashoffset="-280" />
            </svg>

            {/* Glowing Online Dot */}
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-[#121212] z-20 shadow-[0_0_10px_#22c55e]" />

            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#2a2a2a] relative z-10 p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-[#222]">
                <Image 
                  src="/profile.png" 
                  alt="Benalilou Elkhamar"
                  fill
                  priority
                  className="object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  sizes="160px"
                />
              </div>
            </div>
          </div>

          {/* User Details Rows */}
          <div className="flex flex-col w-full font-mono text-xs sm:text-[13px] tracking-wide mt-4">
            <div className="flex justify-between py-4 border-b border-[#222]">
              <span className="text-gray-500">OPERATOR</span>
              <span className="text-[#ea580c] font-bold">BENALILOU ELKHAMAR</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#222]">
              <span className="text-gray-500">ROLE</span>
              <span className="text-[#3b82f6] font-bold">FULL_STACK_SOFTWARE_ENGINEER</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#222]">
              <span className="text-gray-500">LOCATION</span>
              <span className="text-gray-300 font-medium">Morocco</span>
            </div>
            <div className="flex justify-between py-4 border-b border-[#222]/50">
              <span className="text-gray-500">STATUS</span>
              <span className="text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/10 px-2 py-0.5 rounded text-[10px] sm:text-xs">
                OPEN
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: CODE LOGS & STATS */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          
          {/* Editor Log Window */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full bg-[#151515] rounded-xl border border-[#2a2a2a] overflow-hidden flex-1 shadow-2xl"
          >
            <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] px-5 py-3 flex items-center">
              <span className="text-gray-500 font-mono text-xs">
                <span className="text-gray-400">&gt;_</span> user_profile.log
              </span>
            </div>

            <div className="p-6 md:p-8 font-mono text-[13px] sm:text-sm">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#a855f7] font-bold">-&gt;</span>
                  <span className="text-[#a855f7]">whoami</span>
                </div>
                <div className="border-l border-[#333] pl-4 lg:pl-6 ml-2">
                  <p className="text-gray-300 leading-relaxed max-w-xl">
                    Full-Stack Developer and IT Technician with 3+ years of experience spanning technical support, network security, and end-to-end web development. I build with <span className="text-white font-medium">Java/Spring Boot</span>, <span className="text-white font-medium">React.js</span>, and <span className="text-white font-medium">Laravel</span> — from REST APIs to production-ready interfaces — backed by hands-on experience keeping real infrastructure running. Currently completing a degree in Computer Engineering, and open to full-time roles or freelance collaborations.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#3b82f6] font-bold">-&gt;</span>
                  <span className="text-[#c084fc]">cat</span>
                  <span className="text-gray-300">mission.txt</span>
                </div>
                <div className="border-l border-[#333] pl-4 lg:pl-6 ml-2">
                  <p className="text-gray-400 leading-relaxed max-w-xl">
                    I started out fixing other people's computers — now I build the tools that replace half of that work. IT support taught me to find the real problem fast; development taught me how to fix it for good. These days that means <span className="text-white font-medium">automating internal workflows</span> and <span className="text-white font-medium">shipping full-stack apps</span> from the ground up. <span className="text-[#ea580c] font-medium">Automation</span> is where those two worlds meet.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Boxes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-5 flex flex-col hover:border-[#ea580c]/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-4 h-4 text-[#ea580c]" />
                <span className="text-[#666] font-mono text-[10px] font-bold tracking-wider">EXPERIENCE</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">3+</span>
                <span className="text-[#666] font-mono text-xs font-semibold">YRS</span>
              </div>
            </div>

            <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-5 flex flex-col hover:border-[#3b82f6]/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-[#3b82f6]" />
                <span className="text-[#666] font-mono text-[10px] font-bold tracking-wider">PROJECTS</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">15+</span>
                <span className="text-[#666] font-mono text-xs font-semibold">DEP</span>
              </div>
            </div>

            <div className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-5 flex flex-col hover:border-[#dc2626]/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="w-4 h-4 text-[#ef4444]" />
                <span className="text-[#666] font-mono text-[10px] font-bold tracking-wider">CAFFEINE</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">∞</span>
                <span className="text-[#666] font-mono text-xs font-semibold">ml</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
