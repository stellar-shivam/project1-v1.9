import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function VideoAnalysis() {
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
<nav className="fixed top-0 w-full z-50 h-16 bg-surface-container-lowest flex justify-between items-center px-6 border-b border-white/5">
<div className="flex items-center gap-4">
<Link to="/"><span className="text-xl font-black tracking-tight text-primary uppercase hover:text-white transition-colors cursor-pointer">Vision Trace</span></Link>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center gap-2 pl-4 border-l border-white/10">
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
<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="ml-64 mt-16 p-8 h-[calc(100vh-4rem)] overflow-hidden">
<div className="grid grid-cols-12 gap-8 h-full max-w-[1600px] mx-auto">
{/*  Left Column: Video & Timeline  */}
<div className="col-span-12 lg:col-span-8 flex flex-col space-y-6 h-full min-h-0">
{/*  Video Player Container  */}
<div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-container-lowest ring-1 ring-white/10 group shadow-2xl flex flex-col border border-primary/20">
{/*  Video Content Area  */}
<div className="relative flex-1 overflow-hidden">
<img alt="Surveillance footage" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQrfwdSBP_OiLHFU9cN8zrVtHFme4WCiD1CZ-zk9AVNN_74gbCz1Ce55_yAoeszgBXfIx85rfKzijuq3X_MGpetXJ-O5MJNEb4PNuClAks3Rgiki_QyWhq5WCtMyZMNkQzetEFnfnkIiR8QoIuyl2Iq5wmn2zzf656frdYueR9d2_KGCtkdJPzihEOYvF47tU5wXRV56nmqRhsprWL-CEMl7aZKiG50Zjoj5miCsGzOi5R3WkK2c0BBYAx39N81l0CpPnOC5xZgARq" />
{/*  Overlays  */}
<div className="absolute inset-0 pointer-events-none">
{/*  Skeleton Mockup  */}
<svg className="absolute top-1/4 left-1/3 w-32 h-64 text-primary animate-pulse" viewBox="0 0 100 200">
<circle cx="50" cy="20" fill="none" r="10" stroke="currentColor" strokeWidth="2"></circle>
<line stroke="currentColor" strokeWidth="2" x1="50" x2="50" y1="30" y2="100"></line>
<line stroke="currentColor" strokeWidth="2" x1="50" x2="20" y1="50" y2="80"></line>
<line stroke="currentColor" strokeWidth="2" x1="50" x2="80" y1="50" y2="80"></line>
<line stroke="currentColor" strokeWidth="2" x1="50" x2="30" y1="100" y2="170"></line>
<line stroke="currentColor" strokeWidth="2" x1="50" x2="70" y1="100" y2="170"></line>
</svg>
{/*  BMI Overlay  */}
<div className="absolute bottom-16 left-1/3 ml-36 glass-panel rounded-lg px-3 py-2 border-l-4 border-primary pointer-events-auto">
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Subject 042</p>
<p className="text-lg font-headline font-extrabold text-primary">BMI 24.1</p>
</div>
{/*  Scan Effect  */}
<div className="absolute inset-x-0 top-0 h-1 bg-primary/40 shadow-[0_0_20px_rgba(219,144,255,0.8)] animate-scan"></div>
</div>
</div>
{/*  Redesigned Media Control Bar  */}
<div className="media-control-bar h-16 w-full flex items-center px-6 gap-6 border-t border-white/10 z-20">
{/*  Left Control Cluster  */}
<div className="flex items-center gap-1 bg-white/5 p-1 rounded-full pill-btn">
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<span className="material-symbols-outlined text-white text-xl">skip_previous</span>
</button>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<span className="material-symbols-outlined text-white text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
</button>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<span className="material-symbols-outlined text-white text-xl">skip_next</span>
</button>
</div>
{/*  Center Component: Timeline Seek  */}
<div className="flex-1 flex items-center gap-4">
<span className="text-xs font-mono text-white/80 w-16 text-right">00:15:03</span>
<div className="relative flex-1 h-1 bg-white/10 rounded-full">
<div className="absolute left-0 top-0 h-full w-[42%] bg-primary rounded-full shadow-[0_0_8px_rgba(219,144,255,0.6)]"></div>
<div className="absolute left-[42%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg cursor-pointer"></div>
</div>
<span className="text-xs font-mono text-white/80 w-16">00:30:04</span>
</div>
{/*  Right Control Cluster  */}
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 group">
<span className="material-symbols-outlined text-white text-xl">volume_up</span>
<div className="w-16 h-1 bg-surface-container-highest rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 h-full w-2/3 bg-white"></div>
</div>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors">
<span className="material-symbols-outlined text-white text-xl">fullscreen</span>
</button>
</div>
</div>
</div>
{/*  Dual-Track Timeline Map (Restructured)  */}
<div className="bg-surface-container-low/50 backdrop-blur-md rounded-2xl p-6 border border-white/5">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline font-bold text-sm tracking-widest uppercase text-on-surface/70">Temporal Evidence Map</h3>
<span className="text-xs font-mono text-on-surface-variant">00:15:03 / 00:30:04</span>
</div>
<div className="space-y-6">
{/*  Track: Flagged  */}
<div className="relative h-12 flex items-center">
<span className="absolute -left-4 text-[10px] font-black uppercase rotate-180 [writing-mode:vertical-lr] text-red-500 animate-pulse">Flagged</span>
<div className="w-full h-[2px] bg-white/5 rounded-full relative ml-6">{/*  Markers  */}
<div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 ring-4 ring-red-500/30 shadow-[0_0_25px_8px_rgba(239,68,68,0.8)]"></div>
<div className="absolute left-[55%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 ring-4 ring-red-500/30 shadow-[0_0_25px_8px_rgba(239,68,68,0.8)]"></div>
<div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-600 ring-8 ring-red-600/20 shadow-[0_0_35px_12px_rgba(239,68,68,0.9)]"></div></div>
</div>
</div>
{/*  Main Progress Bar  */}
<div className="relative h-2 bg-surface-container-highest/50 rounded-full overflow-hidden mt-6">
<div className="absolute left-0 top-0 h-full w-[42%] bg-primary/30"></div>
<div className="absolute left-[42%] top-1/2 -translate-y-1/2 w-[2px] h-8 bg-primary shadow-[0_0_15px_#db90ff] z-10"></div>
</div>
</div>
</div>
{/*  Right Column: Identity & Behavior Log  */}
<div className="col-span-12 lg:col-span-4 flex flex-col space-y-6 h-full min-h-0">
{/*  Identity Card  */}
<div className="bg-surface-container-high/40 glass-panel rounded-2xl p-6 border-t border-white/10">
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="font-headline font-extrabold text-xl text-on-surface">Unknown Person</h3>
</div>
<div className="bg-primary/10 p-2 rounded-xl">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
</div>
</div>
{/*  Circular Gait Chart  */}
<div className="flex flex-col items-center py-2">
<div className="relative w-32 h-32">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-white/5" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-primary" cx="64" cy="64" fill="transparent" filter="drop-shadow(0 0 4px #db90ff)" r="58" stroke="currentColor" stroke-dasharray="364.4" stroke-dashoffset="54.6" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-black font-headline text-on-surface">85%</span>
<span className="text-[8px] font-bold text-on-surface-variant uppercase tracking-tighter">MATCH</span>
</div>
</div>
<p className="mt-4 text-[13px] text-center text-on-surface-variant leading-relaxed">
                        High probability match with <span className="text-primary font-bold">Suspect J. Doe</span> based on kinematic analysis.
                    </p>
</div>
</div>
{/*  Behavior Log  */}
<div className="flex-1 bg-surface-container/30 border border-white/5 rounded-2xl flex flex-col min-h-0 overflow-hidden">
<div className="p-5 border-b border-white/5 bg-white/5">
<h3 className="font-headline font-bold text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">analytics</span>
                        Behavior Log
                    </h3>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-6">
{/*  Log Entry 1  */}
<div className="space-y-3">
<span className="text-[10px] font-mono text-on-surface-variant/60 bg-white/5 px-2 py-0.5 rounded">00:15:03</span>
<div className="flex flex-wrap gap-2">
<span className="bg-primary-container/20 text-primary border border-primary/20 px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">pan_tool</span>
                                [Improper Gesture]
                            </span>
<span className="bg-surface-variant/30 text-on-surface px-3 py-1 rounded-full text-[11px] font-medium">Hostile</span>
</div>
</div>
{/*  Log Entry 2  */}
<div className="space-y-3">
<span className="text-[10px] font-mono text-on-surface-variant/60 bg-white/5 px-2 py-0.5 rounded">00:15:03</span>
<div className="flex flex-wrap gap-2">
<span className="bg-tertiary-container/20 text-tertiary border border-tertiary-container/30 px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">warning</span>
                                [Unusual Gait]
                            </span>
<span className="bg-surface-variant/30 text-on-surface px-3 py-1 rounded-full text-[11px] font-medium">Limp detected</span>
</div>
</div>
{/*  Log Entry 3  */}
<div className="space-y-3">
<span className="text-[10px] font-mono text-on-surface-variant/60 bg-white/5 px-2 py-0.5 rounded">00:15:15</span>
<div className="flex flex-wrap gap-2">
<span className="bg-secondary-container/20 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">face</span>
                                [Anxious Tick]
                            </span>
</div>
</div>
{/*  Log Entry 4  */}
<div className="space-y-3">
<span className="text-[10px] font-mono text-on-surface-variant/60 bg-white/5 px-2 py-0.5 rounded">00:15:15</span>
<div className="flex flex-wrap gap-2">
<span className="bg-secondary-container/20 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]">visibility_off</span>
                                [Eye contact avoidance]
                            </span>
</div>
</div>
</div>
{/*  Input Section  */}
<div className="p-4 bg-white/5 border-t border-white/5">
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-primary/10 rounded-xl text-xs py-3.5 pl-4 pr-12 focus:ring-1 focus:ring-primary/40 focus:border-primary/40 placeholder-on-surface-variant/40 transition-all text-on-surface" placeholder="Add behavioral note..." type="text" />
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform p-1.5">
<span className="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
</div>
</div>
</motion.main>
    </motion.div>
  );
}
