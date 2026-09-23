"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SideNav } from "@/components/SideNav";
import { motion } from "framer-motion";

const BG_MARQUEES = [
  ">_ INITIALIZING CORE SYSTEM ENV... [OK]   ||   RUNNING DIAGNOSTICS... [OK]   ||   IMPORTING DEVELOPER MODULES... [DONE]   ||   SYSTEM.KERNEL RESTORED :: AWAITING COMMAND PORTAL ACCESS...   ||   ",
  "npm run build --production... [OK]   ||   FETCHING REMOTE DEPENDENCIES... [OK]   ||   COMPILING BUNDLE... [DONE]   ||   DEPLOYING TO EDGE NETWORK... [SUCCESS]   ||   ",
  "SELECT * FROM active_nodes WHERE status = 'ONLINE'... [EXCUTED]   ||   SYNCING DATABASE REPLICAS... [DONE]   ||   FLUSHING REDIS CACHE... [OK]   ||   ",
  "docker-compose stop && docker-compose up -d --build... [OK]   ||   STARTING CONTAINERS... [OK]   ||   MAPPING PORTS 8080:80... [DONE]   ||   ",
  "export const Developer = { role: 'Full Stack', available: true };   ||   LOADING USER PROFILE... [100%]   ||   VERIFYING AUTH TOKEN... [VALID]   ||   "
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#18181A] text-gray-300 overflow-x-hidden selection:bg-[#f97316]/30 selection:text-orange-200 relative">
      {/* Global Background Grid */}
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      
      {/* Global Multi-Line Dense Scrolling Command Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-10 filter blur-[1px] mix-blend-screen flex flex-col h-screen">
        {[...Array(40)].map((_, i) => {
          const text = BG_MARQUEES[i % BG_MARQUEES.length];
          return (
            <motion.div
              key={i}
              animate={{ x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ duration: 60 + (i % 5) * 10, repeat: Infinity, ease: "linear" }}
              className="font-mono text-sm md:text-base font-bold text-[#4ade80] whitespace-nowrap opacity-40 select-none leading-relaxed"
            >
              {text}
              {text}
              {text}
              {text}
            </motion.div>
          );
        })}
      </div>
      <div className="relative z-10 w-full">
        <SideNav />
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
