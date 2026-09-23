"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Play, CodeXml } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/benalilou.elkhamar@gmail.com", {
        method: "POST",
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });
      alert("Message transmitted successfully! I will reply soon.");
      form.reset();
    } catch (error) {
      alert("System Error: Could not send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 w-full mb-20">
      <div className="flex items-center mb-16 relative gap-4">
        <Mail className="w-8 h-8 text-[#f97316]" />
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white tracking-tight">
          $ ./contact.exe
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto">
        
        {/* LEFT PANEL: JSON VIEW */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 bg-[#151515] rounded-xl border border-[#2a2a2a] overflow-hidden shadow-2xl flex flex-col h-full"
        >
          {/* Mac OS Window Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-[#2a2a2a]">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
               <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
               <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
             </div>
             <div className="flex items-center gap-2 text-gray-500 font-mono text-xs">
                <CodeXml className="w-3.5 h-3.5" />
                contact_info.json
             </div>
          </div>

          <div className="p-4 sm:p-6 font-mono text-[10px] sm:text-xs md:text-sm leading-6 sm:leading-8 text-gray-300 overflow-x-auto">
             <div className="flex"><span className="w-8 text-gray-600 select-none">1</span><span className="text-[#fef08a]">{'{'}</span></div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">2</span>
               <span className="pl-6"><span className="text-[#e27a5f]">"status"</span><span className="text-white">: </span><span className="text-[#4ade80]">"open_to_work"</span><span className="text-white">,</span></span>
             </div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">3</span>
               <span className="pl-6"><span className="text-[#e27a5f]">"email"</span><span className="text-white">: </span><span className="text-[#4ade80]">"benalilou.elkhamar@gmail.com"</span><span className="text-white">,</span></span>
             </div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">4</span>
               <span className="pl-6"><span className="text-[#e27a5f]">"socials"</span><span className="text-white">: </span><span className="text-[#fef08a]">{'{'}</span></span>
             </div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">5</span>
               <span className="pl-12"><span className="text-[#e27a5f]">"github"</span><span className="text-white">: </span><span className="text-[#4ade80]">"@BenalilouElkhamar"</span><span className="text-white">,</span></span>
             </div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">6</span>
               <span className="pl-12"><span className="text-[#e27a5f]">"linkedin"</span><span className="text-white">: </span><span className="text-[#4ade80]">"@benalilou-elkhamar"</span><span className="text-white">,</span></span>
             </div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">7</span>
               <span className="pl-12"><span className="text-[#e27a5f]">"twitter"</span><span className="text-white">: </span><span className="text-[#4ade80]">"@khammar_ben"</span></span>
             </div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">8</span>
               <span className="pl-6"><span className="text-[#fef08a]">{'}'}</span><span className="text-white">,</span></span>
             </div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">9</span>
               <span className="pl-6"><span className="text-[#e27a5f]">"location"</span><span className="text-white">: </span><span className="text-[#4ade80]">"Morocco"</span></span>
             </div>
             <div className="flex"><span className="w-8 text-gray-600 select-none">10</span><span className="text-[#fef08a]">{'}'}</span></div>
             <div className="flex"><span className="w-8 text-gray-600 select-none">11</span></div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">12</span>
               <span className="text-gray-500 italic">// Waiting for connection...</span>
             </div>
             <div className="flex">
               <span className="w-8 text-gray-600 select-none">13</span>
               <span className="w-2.5 h-4 bg-[#f97316] animate-pulse inline-block mt-2"></span>
             </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: EMAIL COMPOSE FORM */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/2 bg-[#151515] rounded-xl border border-[#2a2a2a] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Active Tab Header */}
          <div className="bg-[#1a1a1a] flex border-b border-[#2a2a2a]">
             <div className="flex items-center gap-3 px-5 py-3 border-t-2 border-t-[#f97316] bg-[#151515] border-r border-[#2a2a2a]">
               <span className="text-[#60a5fa] font-bold text-xs font-mono">TS</span>
               <span className="text-gray-300 text-xs font-mono font-bold">sendMessage.ts</span>
               <span className="text-gray-500 hover:text-gray-300 cursor-pointer ml-4">×</span>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 flex-1 flex flex-col bg-[#111]">
            {/* Honeypot to prevent spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex items-center justify-between mb-2">
               <div className="flex items-center gap-2 text-white font-mono text-[13px] font-bold">
                 <Mail className="w-4 h-4 text-[#f97316]" />
                 mail.compose
               </div>
               <span className="text-gray-500 font-mono text-[11px]">secure channel</span>
            </div>
            
            <div className="flex items-center justify-between font-mono text-[11px] pb-4 mb-6 border-b border-[#2a2a2a]">
               <div className="flex gap-2">
                 <span className="text-gray-400">to:</span>
                 <span className="text-[#f97316]">benalilou.elkhamar@gmail.com</span>
               </div>
               <div className="flex gap-1.5 hidden sm:flex">
                 <span className="text-gray-400">response:</span>
                 <span className="text-[#4ade80]">within 24h</span>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <div className="w-full">
                <label className="block font-mono text-[10px] text-gray-500 mb-2 tracking-widest">NAME</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-4 py-2.5 text-sm text-white font-mono placeholder:text-gray-700 outline-none focus:border-[#f97316]/50 transition-colors"
                />
              </div>
              <div className="w-full">
                <label className="block font-mono text-[10px] text-gray-500 mb-2 tracking-widest">EMAIL</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-4 py-2.5 text-sm text-white font-mono placeholder:text-gray-700 outline-none focus:border-[#f97316]/50 transition-colors"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block font-mono text-[10px] text-gray-500 mb-2 tracking-widest">SUBJECT</label>
              <input 
                type="text" 
                name="_subject"
                required
                placeholder="Project inquiry / Collaboration"
                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-4 py-2.5 text-sm text-white font-mono placeholder:text-gray-700 outline-none focus:border-[#f97316]/50 transition-colors"
              />
            </div>

            <div className="mb-6 flex-1">
              <label className="block font-mono text-[10px] text-gray-500 mb-2 tracking-widest">MESSAGE</label>
              <textarea 
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, timeline, and goals..."
                className="w-full bg-[#151515] border border-[#2a2a2a] rounded px-4 py-3 text-sm text-white font-mono placeholder:text-gray-700 outline-none focus:border-[#f97316]/50 transition-colors resize-none"
              ></textarea>
            </div>

            <p className="font-mono text-gray-600 text-[11px] mb-6 italic">
              // FormSubmit.co integration active
            </p>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 hover:bg-[#f97316]/20 text-[#f97316] px-5 py-2.5 rounded font-mono text-xs font-bold transition-all w-[180px] justify-center disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="animate-pulse">TRANSMITTING...</span>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>

        </motion.div>
      </div>
    </section>
  );
}
