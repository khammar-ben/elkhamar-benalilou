"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FolderGit2, Book, Star, GitFork, ExternalLink, ChevronRight } from 'lucide-react';

const pinnedProjects = [
  {
    title: "Email ANALYSIS Tool",
    isPublic: false,
    description: "A powerful full-stack email intelligence platform. Connects directly to a live mailbox via IMAP, fetches and parses raw email headers, applies rule-based optimization (domain replace, CC stripping, body removal), and visualizes cleaned vs raw source side by side. Features export, copy, and script deployment.",
    image: "/projects/email-tool.png",
    tech: ["React.js", "Node.js", "IMAP", "Express", "JavaScript"],
    mainLang: "JavaScript",
    langColor: "bg-[#f1e05a]",
    stars: 0,
    forks: 0,
    demo: "#"
  },
  {
    title: "Happy Hostel Room Booking",
    isPublic: false,
    description: "Full-stack room booking and comprehensive hostel management application. Features a robust Laravel 12 API backend handling complex booking logic, activities, and authentication, coupled with a React/Vite admin dashboard for real-time guest management, alert monitoring, and revenue tracking.",
    image: "/projects/happy-hostel.png",
    tech: ["Laravel 12", "React 18", "PHP 8.2", "Vite", "SQLite"],
    mainLang: "PHP",
    langColor: "bg-[#4F5D95]",
    stars: 0,
    forks: 0,
    demo: "#"
  },
  {
    title: "IT Asset Management",
    isPublic: false,
    description: "Comprehensive IT park management platform. Features role-based JWT authentication, real-time KPI dashboards, hardware lifecycle tracking, incident management, automated stock deductions during repairs, loan workflows, email notifications, and CSV reporting.",
    image: "/projects/pt17.png",
    tech: ["Spring Boot 3.2", "React", "Java 17", "MySQL", "JWT"],
    mainLang: "Java",
    langColor: "bg-[#b07219]",
    stars: 0,
    forks: 0,
    demo: "#"
  }
];

const reposList = [
  { title: "Email-ANALYSIS-Tool", lang: "JavaScript", color: "bg-[#f1e05a]", updated: "1 week ago" },
  { title: "Happy-Hostel-Booking", lang: "PHP", color: "bg-[#4F5D95]", updated: "2 weeks ago" },
  { title: "IT-Asset-Management", lang: "Java", color: "bg-[#b07219]", updated: "1 month ago" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 w-full">
      <div className="flex items-center mb-16 relative gap-4">
        <FolderGit2 className="w-8 h-8 text-[#ea580c]" />
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white tracking-tight">
          $ ls -la ~/projects
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
        
        {/* LEFT COMPONENT: REPOSITORIES BROWSER */}
        <div className="w-full lg:w-[300px] xl:w-[350px] flex-shrink-0">
          <div className="bg-[#111] border border-[#222] rounded-xl overflow-hidden flex flex-col shadow-xl">
            {/* Repo Header */}
            <div className="bg-[#1a1a1a] p-4 flex items-center justify-between border-b border-[#222]">
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4 text-gray-400" />
                <span className="text-gray-200 font-bold text-sm">Repositories</span>
              </div>
              <span className="bg-[#222] text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#333]">
                {reposList.length}
              </span>
            </div>
            
            {/* Repo List */}
            <div className="flex flex-col">
              {reposList.map((repo, i) => (
                <div key={i} className="p-4 border-b border-[#222] last:border-b-0 hover:bg-[#151515] transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#ea580c] font-bold text-[14px] truncate pr-4 group-hover:underline">
                      {repo.title}
                    </h4>
                    <span className="text-gray-400 text-[10px] border border-[#333] px-2 py-0.5 rounded-full mt-0.5 whitespace-nowrap">
                      Public
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.color}`}></span>
                      <span>{repo.lang}</span>
                    </div>
                    <span>Updated {repo.updated}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COMPONENT: PINNED PROJECTS */}
        <div className="w-full flex-1 flex flex-col">
          <h3 className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-6 ml-2">
            Pinned Projects
          </h3>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
            {pinnedProjects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#151515] border border-[#262626] rounded-xl p-5 md:p-6 flex flex-col hover:border-[#ea580c]/30 transition-colors h-full shadow-lg"
              >
                {/* Project Screen Image */}
                <div className="w-full h-40 md:h-48 rounded-lg overflow-hidden mb-5 border border-[#2a2a2a] relative group-hover:border-[#ea580c]/50 transition-colors bg-[#111]">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover object-top opacity-60 hover:opacity-100 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Book className="w-4 h-4 text-gray-500 mt-0.5" />
                    <h3 className="text-[17px] font-bold text-[#ea580c] hover:underline cursor-pointer line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-gray-400 text-[11px] font-medium border border-[#333] px-2.5 py-0.5 rounded-full whitespace-nowrap bg-[#111]">
                    Public
                  </span>
                </div>

                <p className="text-[#8b949e] text-[13px] leading-[1.6] mb-5 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] text-[#d97757] border border-[#d97757]/30 px-2 py-0.5 rounded font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Footer (Stars, Forks, Demo) */}
                <div className="flex items-center justify-between text-[12px] text-gray-400 mt-auto pt-2">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className={`w-3 h-3 rounded-full ${project.langColor}`}></span>
                      {project.mainLang}
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition-colors">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-400 cursor-pointer transition-colors">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </div>
                  </div>
                  
                  <a href={project.demo} className="flex items-center gap-1.5 border border-[#333] bg-[#1a1a1a] hover:bg-[#222] px-3 py-1 rounded transition-colors text-gray-300 font-medium">
                    Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center w-full">
             <a href="https://github.com/BenalilouElkhamar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white font-medium group transition-colors">
               View all repositories <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>

      </div>
    </section>
  );
}
