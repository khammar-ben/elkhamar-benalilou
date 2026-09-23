"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileCode2 } from 'lucide-react';

const expData = [
  {
    id: 1,
    role: "IT Technician",
    company: "Cloud Marketing Hub (CMH), Tangier",
    date: "Mar 2023 - Present",
    hash: "a1b2ca2",
    branch: "HEAD -> operations",
    description: "Analyzed technical incidents and supported users through resolution. Maintained and optimized operational tools. Developed Python scripts to automate internal tasks and improve workflows. Controlled and secured DNS, SPF, DKIM, and DMARC configurations. Designed and maintained web interfaces using HTML, CSS, JavaScript, and React.js.",
    tech: ["Python", "React.js", "JavaScript", "DNS/Email Security", "HTML/CSS"],
    stats: { files: 24, added: 512, removed: 120 }
  },
  {
    id: 2,
    role: "Developer Intern",
    company: "RIM-SK S.A.R.L",
    date: "Apr 2022 - May 2022",
    hash: "c3d4e5f",
    branch: "HEAD -> dev",
    description: "Developed a credit management application using C#, ADO.NET, and SQL Server. Designed comprehensive CRUD functionalities and debugged functional anomalies to ensure system stability.",
    tech: ["C#", "ADO.NET", "SQL Server"],
    stats: { files: 15, added: 230, removed: 45 }
  },
  {
    id: 3,
    role: "IT Support Intern",
    company: "ELGEEK.MA S.A.R.L",
    date: "Jan 2021 - Mar 2021",
    hash: "f6g7h8i",
    branch: "HEAD -> support",
    description: "Provided comprehensive IT maintenance and support. Handled software installations, user assistance, and local network troubleshooting for staff workstations.",
    tech: ["IT Support", "Networking", "Maintenance"],
    stats: { files: 5, added: 40, removed: 12 }
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="flex items-center mb-16 relative">
        <svg className="w-6 h-6 text-[#f97316] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <h2 className="text-3xl font-bold font-mono text-white tracking-wide">
          # Experience.log
        </h2>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Main Vertical Center Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#333] -translate-x-1/2 z-0"></div>

        <div className="space-y-12 md:space-y-24 pt-4">
          {expData.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center md:justify-between w-full
                  ${isLeft ? 'flex-row' : 'flex-row md:flex-row-reverse'}
                `}
              >
                {/* 1. Center Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-[3px] border-[#f97316] bg-white ring-4 ring-[#18181A] transform -translate-x-1/2 z-20 shadow-[0_0_12px_rgba(249,115,22,0.4)]"></div>

                {/* 2. Horizontal Connecting Line */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 h-[1px] bg-[#f97316]/40 z-10 hidden md:block
                    ${isLeft 
                      ? 'left-1/2 right-[calc(50%+4rem)]' 
                      : 'right-1/2 left-[calc(50%+4rem)]'
                    }
                  `}
                ></div>
                <div className="absolute top-1/2 -translate-y-1/2 h-[1px] bg-[#f97316]/40 z-10 block md:hidden left-[20px] w-8"></div>

                {/* 3. The Date Pill & Card Container */}
                <div className={`
                    w-full pl-14 md:pl-0 md:w-[calc(50%-4rem)] flex flex-col md:flex-row items-start md:items-center relative z-20
                    ${isLeft ? 'md:justify-end' : 'md:justify-start'}
                  `}
                >
                  
                  {/* Date Pill */}
                  <div className={`
                    mb-4 md:mb-0 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18181a] border border-[#333] z-30 shadow-xl
                    md:absolute top-1/2 -translate-y-1/2
                    ${isLeft ? 'md:-right-[140px]' : 'md:-left-[140px]'}
                  `}>
                    <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                    <span className="text-[11px] font-mono text-gray-300 font-medium whitespace-nowrap">{exp.date}</span>
                  </div>

                  {/* Main Card */}
                  <div className="w-full bg-[#151515] border border-[#222] rounded-lg overflow-hidden shadow-2xl relative group transition-colors">
                    
                    {/* Card Header */}
                    <div className="bg-[#1a1a1a] border-b border-[#222] px-5 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-[#eab308] font-mono text-[11px] font-bold tracking-wider">{exp.hash}</span>
                        <span className="border border-[#1d4ed8]/30 bg-[#1e3a8a]/20 text-[#60a5fa] font-mono text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
                          {exp.branch}
                        </span>
                      </div>
                      <span className="text-[#666] font-mono text-[10px] sm:text-xs font-semibold">{exp.company}</span>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 md:p-6 relative z-10">
                      
                      <h3 className="text-[17px] md:text-xl font-bold text-gray-100 mb-5">
                        {exp.role} <span className="text-gray-500 font-medium text-sm md:text-base">@ {exp.company}</span>
                      </h3>
                      
                      <p className="text-[13px] tracking-wide leading-[1.8] text-[#888] font-mono mb-6">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-2">
                        {exp.tech.map((t, idx) => (
                          <span 
                            key={idx} 
                            className="text-[10px] font-mono border border-[#eab308]/20 text-[#d97757] px-2 py.5 rounded bg-transparent font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: Diffs */}
                    <div className="bg-[#121212] border-t border-[#222] px-5 py-3 flex items-center gap-4 font-mono text-[11px]">
                      <div className="flex items-center text-[#666] gap-1.5">
                        <FileCode2 className="w-3.5 h-3.5" />
                        <span>{exp.stats.files} files changed</span>
                      </div>
                      <span className="text-[#16a34a] font-medium">+{exp.stats.added} insertions</span>
                      <span className="text-[#dc2626] font-medium">-{exp.stats.removed} deletions</span>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
