"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { SideNav } from "@/components/SideNav";

// SSR-enabled lazy loading: HTML rendered on server, JS hydrated lazily
const About      = dynamic(() => import("@/components/About").then(m => ({ default: m.About })));
const Skills     = dynamic(() => import("@/components/Skills").then(m => ({ default: m.Skills })));
const Experience = dynamic(() => import("@/components/Experience").then(m => ({ default: m.Experience })));
const Projects   = dynamic(() => import("@/components/Projects").then(m => ({ default: m.Projects })));
const Contact    = dynamic(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer     = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

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
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Scrolling Command Background — pure CSS, zero JS cost */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-10 flex flex-col h-screen">
        {BG_MARQUEES.map((text, i) => (
          <div
            key={i}
            className={`font-mono text-sm font-bold text-[#4ade80] whitespace-nowrap opacity-40 select-none leading-relaxed ${i % 2 === 0 ? 'marquee-ltr' : 'marquee-rtl'}`}
          >
            {text}{text}{text}{text}
          </div>
        ))}
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
