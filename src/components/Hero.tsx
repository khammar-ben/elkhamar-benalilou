"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MODULES = ["REACT", "NEXT.JS", "PYTHON", "C#", "TYPESCRIPT", "SQL"];

export function Hero() {
  const [codeLines, setCodeLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeLines(prev => (prev < 6 ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-10 pb-12 flex relative overflow-hidden">
      
      {/* Background Radial Glow to match the warmth of the screenshot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f97316]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Faint watermark top right */}
      <div className="absolute top-10 right-20 font-mono text-[#444] text-sm pointer-events-none select-none">
        &lt;System.Init /&gt;
      </div>

      {/* Faint code bottom left */}
      <div className="absolute bottom-10 left-10 font-mono text-[#222] text-sm pointer-events-none select-none hidden md:block z-0">
        while(alive) {'{'} code() {'}'}
      </div>


      
      {/* Scroll indicator - Bottom Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#f97316] animate-bounce z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
        
        {/* LEFT COLUMN */}
        <div className="flex-1 space-y-7 max-w-2xl">
          {/* Status Pill / Easter Egg Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-[#f97316]/30 rounded text-[10px] sm:text-[11px] font-mono text-[#f97316] uppercase tracking-widest bg-[#f97316]/5 cursor-pointer relative"
            title="Access Kernel Terminal (Easter Egg)"
            onClick={() => {
              const cmd = window.prompt("TERMINAL ACCESS GRANTED.\nEnter command (e.g., 'whoami' or 'sudo hire'):");
              if (cmd) {
                const command = cmd.toLowerCase().trim();
                if (command === 'whoami') {
                  alert('You are a recruiter about to hire a 10x Full Stack Engineer! 😉');
                } else if (command === 'sudo hire') {
                  alert('Access Granted! Sending offer letter protocols...');
                } else {
                  alert(`Command not found: ${command}. Try 'whoami' or 'sudo hire'`);
                }
              }
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse shadow-[0_0_8px_#f97316]"></span>
            SYSTEM.KERNEL :: CLICK FOR TERMINAL
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] min-[400px]:text-[40px] sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-white tracking-tight leading-[1.1] mb-2"
          >
            Hello, I'm <br />
            <span className="whitespace-nowrap inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f97316] to-[#3b82f6]">
              Elkhamar BENALILOU
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-[21px] text-gray-300 font-sans leading-relaxed mt-4"
          >
            <span className="font-mono text-[#ea580c]">&lt;Architect /&gt;</span> Engineering Beyond Boundaries.
            <br /> Specializing in distributed systems, real-time architecture, <br className="hidden md:block"/> and high-performance applications.
          </motion.div>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="relative group border border-[#333] hover:border-[#f97316]/50 bg-[#151515] transition-all flex flex-col justify-center px-5 py-4 w-full sm:w-[320px]"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#ea580c] bg-[#1a1a1a] rounded px-2 py-1 font-mono font-bold text-sm border border-[#2a2a2a]">
                    &gt;_
                  </span>
                  <span className="font-sans font-bold text-white text-[15px]">Initialize OS</span>
                </div>
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
              <div className="w-full bg-[#222] h-[3px] rounded-full overflow-hidden mb-2 relative">
                 <div className="absolute top-0 left-0 w-3/4 h-full bg-[#f97316]"></div>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-gray-500">
                <span>&gt; sudo boot_gui</span>
                <span className="text-[#ea580c] animate-pulse font-semibold tracking-wider">Loading...</span>
              </div>
            </a>

            <a 
              href="https://github.com/BenalilouElkhamar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative group border border-[#333] hover:border-[#555] bg-[#111] transition-all flex items-center justify-center gap-3 px-6 py-4 w-full sm:w-auto"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)' }}
            >
              <div className="flex flex-col items-center opacity-80 group-hover:opacity-100 transition-opacity">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="flex flex-col text-left border-l border-[#333] pl-3 ml-1">
                <span className="text-[10px] text-gray-400 leading-tight">Check out</span>
                <span className="font-bold text-white font-sans text-[15px] leading-tight">GitHub</span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-6 flex items-center flex-wrap gap-x-4 gap-y-3"
          >
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">LOADED_MODULES:</span>
            <div className="flex flex-wrap gap-2">
              {MODULES.map((m, i) => (
                <span 
                  key={i} 
                  className="text-[10px] font-mono font-semibold text-[#d97757] border border-[#d97757]/30 px-2 py-0.5 uppercase tracking-wider bg-transparent rounded-sm"
                >
                  {m}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - CODE EDITOR UI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex w-full max-w-[550px] mt-10 lg:mt-0 mx-auto flex-col rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#0c0c0c] shadow-2xl relative shadow-[0_20px_60px_-15px_rgba(249,115,22,0.1)]"
        >
          {/* Editor Header */}
          <div className="bg-[#1e1e1e] border-b border-[#2a2a2a] px-4 py-3 flex items-center justify-between relative z-10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
              <div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
              <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
            </div>
            <div className="flex items-center justify-center absolute inset-0 pointer-events-none">
              <span className="text-xs font-mono text-gray-300 flex items-center font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mr-2"></span>
                portfolio.tsx
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-6 font-mono text-[10px] sm:text-[13px] leading-6 sm:leading-7 text-gray-300 relative z-10 min-h-[360px] sm:min-h-[380px] flex flex-col w-full">
            <div className="w-full mb-6">
              <div className="flex">
                <span className="w-6 text-gray-500 select-none text-right pr-4">1</span>
                <span><span className="text-gray-400 font-medium">// Welcome to my workspace</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none text-right pr-4">2</span>
                <span>
                  <span className="text-[#c084fc]">import</span> <span className="text-white">{'{'}</span> <span className="text-[#f97316]">Developer</span> <span className="text-white">{'}'}</span> <span className="text-[#c084fc]">from</span> <span className="text-[#4ade80]">'./universe'</span><span className="text-white">;</span>
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none text-right pr-4">3</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none text-right pr-4">4</span>
                <span>
                  <span className="text-[#c084fc]">const</span> <span className="text-[#fef08a]">Portfolio</span> <span className="text-white">=</span> <span className="text-[#60a5fa]">()</span> <span className="text-[#c084fc]">=&gt;</span> <span className="text-white">{'{'}</span>
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none text-right pr-4">5</span>
                <span className="pl-4">
                  <span className="text-[#c084fc]">return</span> <span className="text-white">(</span>
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none text-right pr-4">6</span>
                <span className="pl-8">
                  <span className="text-gray-400">&lt;</span><span className="text-white">Developer</span>
                </span>
              </div>
              
              {codeLines >= 1 && (
                <div className="flex">
                  <span className="w-6 text-gray-500 select-none text-right pr-4">7</span>
                  <span className="pl-12">
                    <span className="text-[#f87171]">name</span><span className="text-white">=</span><span className="text-[#4ade80]">"Benalilou Elkhamar"</span>
                  </span>
                </div>
              )}
              {codeLines >= 2 && (
                <div className="flex">
                  <span className="w-6 text-gray-500 select-none text-right pr-4">8</span>
                  <span className="pl-12">
                    <span className="text-[#f87171]">role</span><span className="text-white">=</span><span className="text-[#4ade80]">"Full Stack Engineer"</span>
                  </span>
                </div>
              )}
              {codeLines >= 3 && (
                <div className="flex">
                  <span className="w-6 text-gray-500 select-none text-right pr-4">9</span>
                  <span className="pl-12">
                    <span className="text-[#f87171]">passion</span><span className="text-white">=</span><span className="text-[#4ade80]">"Engineering Beyond Boundaries"</span>
                  </span>
                </div>
              )}
              {codeLines >= 4 && (
                <div className="flex">
                  <span className="w-6 text-gray-500 select-none text-right pr-4">10</span>
                  <span className="pl-8">
                    <span className="text-gray-400">/&gt;</span>
                  </span>
                </div>
              )}
              {codeLines >= 5 && (
                <div className="flex">
                  <span className="w-6 text-gray-500 select-none text-right pr-4">11</span>
                  <span className="pl-4">
                    <span className="text-white">);</span>
                  </span>
                </div>
              )}
              {codeLines >= 6 && (
                <div className="flex">
                  <span className="w-6 text-gray-500 select-none text-right pr-4">12</span>
                  <span className="text-white">
                    {'}'};<span className="w-2 h-4 bg-[#f97316] animate-pulse inline-block ml-1 translate-y-1"></span>
                  </span>
                </div>
              )}
              {codeLines < 6 && (
                <div className="flex relative">
                   <span className="w-6 text-gray-500 select-none text-right pr-4"></span>
                   <span className="absolute left-[34px] ml-4 mt-1 w-2 h-4 bg-[#f97316] animate-pulse"></span>
                </div>
              )}
            </div>

            <div className="mt-auto flex gap-4">
              <a href="#about" className="border border-[#f97316]/20 bg-[#f97316]/5 text-[#f97316] hover:bg-[#f97316]/10 px-5 py-2 font-mono text-xs rounded transition-colors flex items-center">
                <svg className="w-3.5 h-3.5 mr-2 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Run Profile
              </a>
              <a href="#projects" className="border border-[#222] text-gray-300 hover:bg-white/5 hover:border-[#444] px-5 py-2 font-mono text-xs rounded transition-colors flex items-center">
                <svg className="w-3.5 h-3.5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
