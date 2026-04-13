import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VideoUpload() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4, ease: "easeOut" }} className="min-h-screen bg-background text-on-surface">
      {/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 h-16 bg-surface-container-lowest flex justify-between items-center px-6 border-b border-outline-variant/20">
<div className="flex items-center gap-4">
<Link to="/"><span className="text-xl font-black tracking-tight text-primary uppercase hover:text-white transition-colors cursor-pointer">Vision Trace</span></Link>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center gap-2 pl-4 border-l border-outline-variant/20">
<span className="material-symbols-outlined text-primary">account_circle</span>
<span className="font-headline font-bold text-lg text-on-surface hidden md:block">Analyst_09</span>
</div>
</div>
</nav>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-surface-container-lowest flex flex-col py-6 space-y-2 border-r border-white/5 bg-gradient-to-r from-background to-surface-container-low shadow-2xl shadow-black/60 z-40">
<div className="px-6 mb-8">
<h2 className="font-headline font-semibold tracking-wide text-on-surface">Analyst Hub</h2>
</div>
<nav className="flex-1 px-3 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary bg-primary/10 border-r-2 border-primary transition-all duration-300 ease-in-out font-headline font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span>Evidence</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 hover:backdrop-blur-md transition-all duration-300 ease-in-out font-headline font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
</nav>
<div className="px-4 mt-auto mb-6">
<button className="w-full flex items-center justify-center gap-2 active:opacity-80 active:scale-[0.98] transition-all group" style={{borderRadius: "8px", padding: "12px 32px", background: "linear-gradient(135deg, rgba(125, 66, 166, 0.4), rgba(29, 26, 32, 0.8))", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(219, 144, 255, 0.3)", boxShadow: "inset 0px 2px 2px rgba(255, 255, 255, 0.1), 0 8px 16px rgba(0, 0, 0, 0.5)"}}>
<span className="material-symbols-outlined text-white text-[1.5rem]" style={{fontVariationSettings: "'wght' 500"}}>add</span>
<span className="text-white font-medium">New Analysis</span>
</button>
</div>
<div className="px-3 border-t border-white/5 pt-4 space-y-1">
<Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all duration-300 font-headline font-semibold tracking-wide">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span>Log Out</span>
</Link>
</div>
</aside>
{/*  Main Content Canvas  */}
<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="ml-64 mt-16 p-8 min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
{/*  Atmospheric Background Elements  */}
<div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-tertiary/5 rounded-full blur-[100px]"></div>
<div className="max-w-3xl w-full">
{/*  Header Section  */}
<div className="text-center mb-12">
<h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-3">Insert Evidence</h1>
<p className="text-on-surface-variant font-body">Submit video assets for gait extraction and behavioral analysis.</p>
</div>
{/*  Central Ingestion Zone  */}
<div className="relative group">
{/*  Outer Glass Boundary  */}
<div className="absolute -inset-1 bg-gradient-to-b from-primary/30 to-transparent rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-surface-container-low border border-outline-variant/30 rounded-[2rem] p-12 flex flex-col items-center justify-center min-h-[400px] transition-all duration-500 cursor-pointer">
{/*  Glassmorphism Processing Ring  */}
<div className="relative mb-10">
<div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
<div className="w-40 h-40 rounded-full glass-panel flex items-center justify-center border border-white/5 relative z-10">
{/*  Animated Ring  */}
<div className="absolute inset-2 processing-ring rounded-full"></div>
<span className="material-symbols-outlined text-primary text-6xl opacity-80" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>upload_file</span>
</div>
</div>
<div className="text-center space-y-4">
<div className="space-y-1">
<h3 className="text-2xl font-headline font-bold text-on-surface">Drag &amp; Drop Video file</h3>
<p className="text-on-surface-variant">or click to browse your secure workstation</p>
</div>
<div className="flex items-center justify-center gap-6 pt-6">
<div className="flex flex-col items-center px-6 py-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
<span className="text-[10px] uppercase tracking-widest text-outline mb-1 font-bold">Supported formats</span>
<span className="text-primary font-bold">MP4, MOV</span>
</div>
<div className="flex flex-col items-center px-6 py-4 rounded-lg bg-surface-container-lowest border border-outline-variant/20">
<span className="text-[10px] uppercase tracking-widest text-outline mb-1 font-bold">Max file size</span>
<span className="text-primary font-bold">2GB</span>
</div>
</div>
</div>
</div>
</div>
{/*  Secondary Actions/Guidelines  */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-highest/20 rounded-lg p-5 border border-outline-variant/20">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary text-xl">security</span>
<h4 className="font-headline font-semibold text-sm">Encrypted Uplink</h4>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">All media is processed within a sandboxed environment with AES-256 bit encryption at rest.</p>
</div>
<div className="bg-surface-container-highest/20 rounded-lg p-5 border border-outline-variant/20">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary text-xl">verified</span>
<h4 className="font-headline font-semibold text-sm">Integrity Check</h4>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">MD5 hash validation is performed automatically upon upload to ensure chain of custody.</p>
</div>
<div className="bg-surface-container-highest/20 rounded-lg p-5 border border-outline-variant/20">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary text-xl">auto_videocam</span>
<h4 className="font-headline font-semibold text-sm">Auto-Extraction</h4>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">Neural gait extraction begins immediately after validation for faster turnaround.</p>
</div>
</div>
</div>
</motion.main>
    </motion.div>
  );
}
