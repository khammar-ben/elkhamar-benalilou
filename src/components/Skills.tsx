"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, fetchSimpleIcons, ICloud, renderSimpleIcon } from 'react-icon-cloud';
import { Layout, Server, Wrench, Globe, Database } from 'lucide-react';

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 0,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

// Updated slugs to truly reflect the updated tech stack
const slugs = [
  'react', 'nextdotjs', 'typescript', 'javascript', 'tailwindcss', 
  'nodedotjs', 'express', 'mysql', 'postgresql', 'supabase', 'git', 
  'github', 'java', 'spring', 'php', 'laravel', 'csharp', 'linux',
  'html5', 'css3', 'python', 'microsoftsqlserver', 'jsonwebtokens', 'framer'
];

const skillCategories = [
  {
    title: "1. Backend & APIs",
    icon: <Server className="w-5 h-5 text-[#22c55e]" />,
    color: "border-[#22c55e]/30",
    bg: "bg-[#22c55e]/5",
    textCol: "text-[#22c55e]",
    skills: [
      { name: "Python", level: 3 },
      { name: "Java", level: 3 },
      { name: "Spring Boot", level: 3 },
      { name: "Node.js", level: 3 },
      { name: "Express.js", level: 3 },
      { name: "PHP", level: 2 },
      { name: "Laravel", level: 2 },
      { name: "C#", level: 2 },
      { name: "ADO.NET", level: 2 }
    ]
  },
  {
    title: "2. Frontend Development",
    icon: <Layout className="w-5 h-5 text-[#3b82f6]" />,
    color: "border-[#3b82f6]/30",
    bg: "bg-[#3b82f6]/5",
    textCol: "text-[#3b82f6]",
    skills: [
      { name: "HTML5", level: 3 },
      { name: "CSS3", level: 3 },
      { name: "React.js", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "TypeScript", level: 2 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Framer Motion", level: 2 }
    ]
  },
  {
    title: "3. Databases & Security",
    icon: <Database className="w-5 h-5 text-[#eab308]" />,
    color: "border-[#eab308]/30",
    bg: "bg-[#eab308]/5",
    textCol: "text-[#eab308]",
    skills: [
      { name: "MySQL", level: 3 },
      { name: "PostgreSQL", level: 3 },
      { name: "SQL Server", level: 2 },
      { name: "Supabase", level: 3 },
      { name: "JWT", level: 3 },
      { name: "RBAC", level: 3 }
    ]
  },
  {
    title: "4. IT Operations & Support",
    icon: <Wrench className="w-5 h-5 text-[#f97316]" />,
    color: "border-[#f97316]/30",
    bg: "bg-[#f97316]/5",
    textCol: "text-[#f97316]",
    skills: [
      { name: "TCP/IP", level: 3 },
      { name: "VPN", level: 2 },
      { name: "DNS Security", level: 3 },
      { name: "VLAN", level: 2 },
      { name: "Active Directory", level: 2 },
      { name: "IT Support", level: 3 }
    ]
  }
];

export function Skills() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setData);
  }, []);

  const renderedIcons = React.useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon: any) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => e.preventDefault(),
        },
      })
    );
  }, [data]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden w-full max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex items-center mb-16">
        <svg className="w-6 h-6 text-[#f97316] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
        <h2 className="text-3xl font-bold font-mono text-white tracking-wide">
          # Skills_Matrix.json
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row gap-12 lg:gap-20 w-full items-start">
        
        {/* LEFT COMPONENT: Categorized Skills grids */}
        <div className="w-full xl:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="w-full bg-[#111] rounded-xl border border-[#262626] p-5 hover:border-[#444] hover:shadow-[0_0_30px_rgba(249,115,22,0.05)] transition-all duration-500 relative group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#1a1a1a] rounded-lg border border-[#333] shadow-inner group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-gray-100 tracking-wide">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="text-[12px] sm:text-[13px] font-mono font-medium text-gray-400 bg-[#161616] border border-[#2a2a2a] px-3.5 py-1.5 rounded-lg hover:border-[#f97316]/50 hover:text-white hover:bg-[#1a1a1a] transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* RIGHT COMPONENT: 3D Interactive Cloud */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full xl:w-5/12 min-h-[400px] lg:min-h-[500px] relative flex flex-col items-center justify-center sticky top-24"
        >
          {/* Wireframe Globe Background Overlay */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30 mt-[-20px]">
             <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-[#f97316]/50 relative flex items-center justify-center shadow-[0_0_80px_rgba(249,115,22,0.1)]">
                <div className="absolute w-full h-full rounded-full border border-[#f97316]/30 rotate-[45deg] scale-y-[0.3]"></div>
                <div className="absolute w-full h-full rounded-full border border-[#f97316]/30 rotate-[-45deg] scale-y-[0.3]"></div>
                <div className="absolute w-full h-full rounded-full border border-[#f97316]/30 rotate-[90deg] scale-y-[0.3]"></div>
                <div className="absolute w-full h-full rounded-full border border-[#f97316]/30 scale-y-[0.3]"></div>
             </div>
          </div>

          <div className="relative z-10 w-full max-w-[350px] md:max-w-[450px] flex items-center justify-center" style={{ marginTop: '-40px' }}>
            {renderedIcons && (
              <Cloud {...cloudProps}>
                {renderedIcons}
              </Cloud>
            )}
          </div>
          
          <div className="absolute bottom-4 z-20 flex items-center gap-3 px-5 py-2.5 bg-[#1a1a1a]/80 backdrop-blur-md border border-[#333] rounded-full text-[11px] font-mono text-gray-400 shadow-xl cursor-default hover:border-[#f97316]/50 transition-colors">
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            Drag to explore matrix
          </div>
        </motion.div>

      </div>
    </section>
  );
}
