import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
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
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e14]/80 backdrop-blur-xl border-b border-[#db90ff]/15 shadow-[0_0_20px_rgba(219,144,255,0.05)] flex justify-between items-center px-6 py-3">
<Link to="/"><div className="text-xl font-bold tracking-tighter text-[#db90ff] font-['Space_Grotesk']">Vision Trace</div></Link>
<div className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] tracking-tight"></div>
<div className="flex items-center space-x-4">
<div className="flex items-center gap-2 pl-4 border-l border-white/10">
<span className="material-symbols-outlined text-primary" style={{}}>account_circle</span>
<span className="font-headline font-bold text-lg text-on-surface hidden md:block" style={{}}>Analyst_09</span>
</div>
</div>
</nav>
{/* SideNavBar */}
<aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-surface-container-lowest flex flex-col py-6 space-y-2 border-r border-white/5 bg-gradient-to-r from-background to-surface-container-low shadow-2xl shadow-black/60 z-40">
<div className="px-6 mb-8">
<h2 className="font-headline font-semibold tracking-wide text-on-surface" style={{}}>Analyst Hub</h2>
</div>
<nav className="flex-1 px-3 space-y-1">
<Link to="/analysis/upload" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 hover:backdrop-blur-md transition-all duration-300 ease-in-out font-headline font-semibold tracking-wide"  style={{}}>
<span className="material-symbols-outlined" data-icon="folder_open" style={{}}>folder_open</span>
<span className="" style={{}}>Evidence</span>
</Link>
<Link to="/analysis/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary bg-primary/10 border-r-2 border-primary transition-all duration-300 ease-in-out font-headline font-semibold tracking-wide"  style={{}}>
<span className="material-symbols-outlined" data-icon="dashboard" style={{}}>dashboard</span>
<span className="" style={{}}>Dashboard</span>
</Link>
</nav>
<div className="px-4 mt-auto mb-6">
<Link to="/analysis/upload" className="w-full block">
<button className="w-full flex items-center justify-center gap-2 active:opacity-80 active:scale-[0.98] transition-all group" style={{"borderRadius":"8px","padding":"12px 32px","background":"linear-gradient(135deg, rgba(125, 66, 166, 0.4), rgba(29, 26, 32, 0.8))","backdropFilter":"blur(12px)","border":"1px solid rgba(219, 144, 255, 0.3)","boxShadow":"rgba(255, 255, 255, 0.1) 0px 2px 2px inset, rgba(0, 0, 0, 0.5) 0px 8px 16px"}}>
<span className="material-symbols-outlined text-white text-[1.5rem]" style={{"fontVariationSettings":"&quot"}}>add</span>
<span className="text-white font-medium" style={{}}>New Analysis</span>
</button>
</Link>
</div>
<div className="px-3 border-t border-white/5 pt-4 space-y-1">
<Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all duration-300 font-headline font-semibold tracking-wide"  style={{}}>
<span className="material-symbols-outlined" data-icon="logout" style={{}}>logout</span>
<span className="" style={{}}>Log Out</span>
</Link>
</div>
</aside>
{/* Main Content Canvas */}
<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="md:ml-64 pt-24 px-6 pb-12 min-h-screen">
{/* Header Section */}
<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-on-surface" style={{}}>Insight&nbsp;<font color="#db90ff">Dashboard</font></h1>
<p className="text-on-surface-variant font-body mt-2 max-w-xl" style={{}}>Transforming Video Footage into Actionable Intelligence</p>
</div>
<div className="glass-card reveal p-4 rounded-xl bloom-primary flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{}}>shield</span>
</div>
<div>
<div className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold" style={{}}>Secure Your Data</div>
<div className="text-xs text-on-surface-variant" style={{}}>Encrypted Link Established</div>
</div>
</div>
</header>
<div className="grid grid-cols-12 gap-6 reveal">
{/* Left Column: Video Categorization Grid */}
<section className="col-span-12 lg:col-span-8 space-y-8">
{/* High Risk Videos */}
<div>
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline text-lg font-bold flex items-center gap-2 text-red-700" style={{}}>
<span className="w-2 h-2 rounded-full bg-error bloom-error"></span>
                        HIGH RISK VIDEOS</h3>
<span className="text-[10px] uppercase tracking-widest text-error-dim font-bold" style={{}}>more-&gt;</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/* High Risk Card 1 */}
<div className="glass-card reveal rounded-xl overflow-hidden border-error/30 relative">
<div className="relative aspect-video">
<img className="w-full h-full object-cover grayscale opacity-60" data-alt="security camera footage of a shadowy figure in a server room at night with glowing blue server lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0X0b7k4hl2ntUBz5LXeyO7TZpi7VmPihQYkYgkgJRClRZuuvLpZ5t7oG2dXE6Nevh6zrbs3_3AqoxKXIjLBNBi1oJkUFXtkhOGWilY23x5mpjIewoKHPS71SOzSIdCstu8w5eBX75AbgfPgvHqwmWyYdqQSKkViu62h9ppTyGcLzCubGTF9JF_p1_K8UYCryVgL4QgDPoz4XO-DL2sIhqDhxPcmw69B_93KxejvNuhUPMaVg0k2x7IyyHF6SkwZOea99vI3zLbWRH" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-2">
<div className="text-[10px] font-mono text-on-surface/70 bg-surface/80 px-2 py-1 rounded" style={{}}>12:44:02 UTC</div>
</div>
</div>
<div className="p-4 flex justify-between items-center">
<div>
<p className="text-xs font-headline font-bold text-on-surface" style={{}}>Subject #8842</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter" style={{}}>Erratic Gait Pattern Detected</p>
</div>
</div>
<div className="scanner-line"></div>
</div>
{/* High Risk Card 2 */}
<div className="glass-card reveal rounded-xl overflow-hidden border-error/30 relative">
<div className="relative aspect-video">
<img className="w-full h-full object-cover grayscale opacity-60" data-alt="night vision style footage of a city street with heat maps overlaid on pedestrians" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOUI9MpSB0Un8HfjxSrd1PoST9VL6L6ftatwt-cKnDvOzDv65bD44Z_vS_cH1wAgsW2uC6veuNFl57UF1lzdxkc1kG4woa8KH5_RQcrvYnQtYLp_3LmAShEG9qwiAPvG48nkIWPliMzslej48drFK-f4J1lpyAU1uqKhzwXR9osEBBtkimeoKw7aP3HGPdEufLfZ9Tk6DQ-SK9sIbYLPtbco5EZvP43oO2d7W5IwIchwCDSPPwo5m2elljb2evC1qBFj9aiYIwoONy" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-[#0e0e14] via-transparent to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-2">
<div className="text-[10px] font-mono text-on-surface/70 bg-surface/80 px-2 py-1 rounded" style={{}}>12:40:15 UTC</div>
</div>
</div>
<div className="p-4 flex justify-between items-center">
<div>
<p className="text-xs font-headline font-bold text-on-surface" style={{}}>Multiple Targets</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter" style={{}}>Coordinated Loitering Alert</p>
</div>
</div>
</div>
</div>
</div>
{/* Low Risk Section */}
<div className="space-y-4 reveal">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-tertiary-container" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                        Low Risk videos</h3>
<span className="text-[10px] uppercase tracking-widest text-primary font-bold" style={{"color":"rgb(161, 250, 255)"}}>More-&gt;</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass-card reveal rounded-xl overflow-hidden border-tertiary-container/20">
<div className="relative aspect-video">
<img className="w-full h-full object-cover opacity-40" data-alt="urban street intersection seen from above in a moody cool blue morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH3u9WbmmVfvXX9tIvIO_80rK94DIZ6YzTq4lPpzJe9_9SKMFDMqmRt1n4zKruva4HUDL6LxR9Cx_1-34NRWpbMTbBSrLbTe1fHgFGH9mDSHkNSttcok4uXEYaHYMyNYgM9hKlbppUpQ0lnqvdmgvrOa79gv5XIPXiK1gT7P0F81Li9vqKEYaQ5es_14lQUOF_FW6csnhPbFer2cmr_CQ2pD4ZvgrWSFR26QeH3-sFlSQCdTW5765daFi4KGUM26uaW2DNRcpzLyWo" style={{}} />
</div>
<div className="p-3">
<div className="text-xs font-headline font-bold text-on-surface" style={{}}>Station 4 North</div>
<div className="text-[10px] text-on-surface-variant" style={{}}>Crowd density within limits.</div>
</div>
</div>
<div className="glass-card reveal rounded-xl overflow-hidden border-tertiary-container/20">
<div className="relative aspect-video">
<img className="w-full h-full object-cover opacity-40" data-alt="urban street intersection seen from above in a moody cool blue morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH3u9WbmmVfvXX9tIvIO_80rK94DIZ6YzTq4lPpzJe9_9SKMFDMqmRt1n4zKruva4HUDL6LxR9Cx_1-34NRWpbMTbBSrLbTe1fHgFGH9mDSHkNSttcok4uXEYaHYMyNYgM9hKlbppUpQ0lnqvdmgvrOa79gv5XIPXiK1gT7P0F81Li9vqKEYaQ5es_14lQUOF_FW6csnhPbFer2cmr_CQ2pD4ZvgrWSFR26QeH3-sFlSQCdTW5765daFi4KGUM26uaW2DNRcpzLyWo" style={{}} />
</div>
<div className="p-3">
<div className="text-xs font-headline font-bold text-on-surface" style={{}}>Station 4 North</div>
<div className="text-[10px] text-on-surface-variant" style={{}}>Crowd density within limits.</div>
</div>
</div>
</div>
</div>
{/* NO RISK section */}
<div className="space-y-4 reveal">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-primary" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        No Risk
                    </h3>
<span className="text-[10px] uppercase tracking-widest text-primary font-bold" style={{}}>more-&gt;</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass-card reveal rounded-xl overflow-hidden border-primary/20">
<div className="relative aspect-video">
<img className="w-full h-full object-cover opacity-40" data-alt="clean modern construction site with bright white lights and high technical detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByXaOwQ6RtBYKUjJ6imceuESQ9Gn8y962LKcyxVLKNclvSwob53ZcV-lbxKqcKGcjPRsNmuWc13-d7AU1LbbWSlt6gJrHpqP8k-jyUSUqHo-VSDyQAPVE34ybDX8VerRmDwFQETuD2i1qMT-Lalgm2YpV_c8fauTnaz5ThV_ruuFgm4_pDeTWEg2lntNtbSzn2xALu_O2qTebwdrPtLcc30X9EJERNzf-ZH6Py2U64m5qOpzn4WYMXLq9AGX1HIJMf9QkvwEM_S0QG" style={{}} />
</div>
<div className="p-3">
<div className="text-xs font-headline font-bold text-on-surface" style={{}}>Loading Bay 2</div>
<div className="text-[10px] text-on-surface-variant" style={{}}>System baseline matched.</div>
</div>
</div>
<div className="glass-card reveal rounded-xl overflow-hidden border-primary/20">
<div className="relative aspect-video">
<img className="w-full h-full object-cover opacity-40" data-alt="clean modern construction site with bright white lights and high technical detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByXaOwQ6RtBYKUjJ6imceuESQ9Gn8y962LKcyxVLKNclvSwob53ZcV-lbxKqcKGcjPRsNmuWc13-d7AU1LbbWSlt6gJrHpqP8k-jyUSUqHo-VSDyQAPVE34ybDX8VerRmDwFQETuD2i1qMT-Lalgm2YpV_c8fauTnaz5ThV_ruuFgm4_pDeTWEg2lntNtbSzn2xALu_O2qTebwdrPtLcc30X9EJERNzf-ZH6Py2U64m5qOpzn4WYMXLq9AGX1HIJMf9QkvwEM_S0QG" style={{}} />
</div>
<div className="p-3">
<div className="text-xs font-headline font-bold text-on-surface" style={{}}>Loading Bay 2</div>
<div className="text-[10px] text-on-surface-variant" style={{}}>System baseline matched.</div>
</div>
</div>
</div>
</div>
{/* Previous Videos Archives */}
<div className="glass-card reveal rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline text-lg font-bold" style={{}}>Previous Feed Archives</h3>
<button className="text-primary text-xs uppercase tracking-widest hover:underline" style={{}}>TIME AND ALERTS</button>
</div>
<div className="space-y-4 reveal">
<div className="flex items-center justify-between p-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" style={{}}>videocam</span>
</div>
<div>
<div className="text-xs font-bold" style={{}}>FEED_LOG_882.mp4</div>
<div className="text-[10px] text-on-surface-variant uppercase" style={{}}>Biometric Stamp: Verified</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-mono" style={{}}>11:30:12</div>
<div className="text-[10px] text-primary uppercase" style={{}}>No Risk</div>
</div>
</div>
<div className="flex items-center justify-between p-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-error" style={{}}>warning</span>
</div>
<div>
<div className="text-xs font-bold" style={{}}>FEED_LOG_879.mp4</div>
<div className="text-[10px] text-on-surface-variant uppercase" style={{}}>Biometric Stamp: Alert Issued</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-mono" style={{}}>10:45:55</div>
<div className="text-[10px] text-error uppercase" style={{}}>High Risk</div>
</div>
</div>
</div>
</div>
</section>
{/* Right Column: Analytics & Suspect Panels */}
<aside className="col-span-12 lg:col-span-4 space-y-6">
{/* Analytics Panel */}
<div className="glass-card reveal rounded-2xl p-6 border-primary/40 relative">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline text-lg font-bold" style={{}}>Active Suspect&nbsp;</h3>
<span className="material-symbols-outlined text-primary" data-weight="fill" style={{}}>verified_user</span>
</div>
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-primary/50 relative">
<img className="w-full h-full object-cover" data-alt="portrait of a man with serious expression against a dark textured wall with dramatic cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt7gH52hYMONvOEPHU3_BhQySQJEidx-rNYs9romMOCxNOrwFPU1qlqKlQvtoNzfOLiR_uWQ0hT_0yPXEa4C3cQQjCYXdW0Bg6UO9KcM-SkAOqHeEoYTVHQ_lJO3XhW27sLP8kHZS77QpUPi3oJj4zFemxZgWEilI2bfY2WRcCK878yJgFeVLz4vlfc3iIvOPvBZ5ZVAxSdlgqgTnKOZkRqPpc_DQCRY3HGZqtJeRNMLfHQBfk5bcVguaEhZ40EG1cJXiQXowO2Pdq" style={{}} />
<div className="absolute inset-0 bg-primary/10"></div>
</div>
<div>
<div className="text-sm font-headline font-bold" style={{}}>SUBJECT_ID: 8842-X</div>
<div className="text-[10px] uppercase text-on-surface-variant tracking-tighter" style={{}}>Last Seen: Sector 4 Gatehouse</div>
</div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] uppercase tracking-widest font-bold mb-2">
<span className="" style={{}}>RISK SCORE</span>
<span className="text-primary" style={{}}>20</span>
</div>
<input className="w-full h-1 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary" type="range" value="88" />
</div>
<div>
<div className="flex justify-between text-[10px] uppercase tracking-widest font-bold mb-2">
<span className="" style={{}}>MOVEMENT</span>
<span className="" style={{}}>6.32</span>
</div>
<input className="w-full h-1 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary" type="range" value="45" />
</div>
<div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5">
<div className="p-2 bg-surface-container rounded">
<div className="text-[8px] uppercase text-on-surface-variant" style={{}}>CONFIDENCE</div>
<div className="text-xs font-bold" style={{}}>0.913</div>
</div>
<div className="p-2 bg-surface-container rounded">
<div className="text-[8px] uppercase text-on-surface-variant" style={{}}>GESTURE</div>
<div className="text-xs font-bold" style={{}}>NORMAL</div>
</div>
<div className="p-2 bg-surface-container rounded">
<div className="text-[8px] uppercase text-on-surface-variant" style={{}}>BMI</div>
<div className="text-xs font-bold" style={{}}>HEAVY</div>
</div>
<div className="p-2 bg-surface-container rounded">
<div className="text-[8px] uppercase text-on-surface-variant" style={{}}>GAIT</div>
<div className="text-xs font-bold" style={{}}>NORMAL</div>
</div>
</div>
</div>
</div><div className="glass-card reveal rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
<h3 className="font-headline text-lg font-bold mb-8" style={{}}>Risk Distribution</h3>
<div className="relative w-48 h-48 mx-auto mb-8">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
<path className="text-red-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="25, 100" strokeLinecap="round" strokeWidth="3" />
<path className="text-yellow-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="35, 100" strokeDashoffset="-25" strokeLinecap="round" strokeWidth="3" />
<path className="text-green-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="40, 100" strokeDashoffset="-60" strokeLinecap="round" strokeWidth="3" />
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="text-3xl font-headline font-bold" style={{}}>15</span>
<span className="text-[10px] uppercase text-on-surface-variant tracking-widest" style={{}}>Detections</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> High Risk</div>
<div className="font-bold">25%</div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Low Risk</div>
<div className="font-bold">35%</div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> No Risk</div>
<div className="font-bold">40%</div>
</div>
</div>
</div>
{/* Suspect Biometrics Panel */}
</aside>
</div>
</motion.main>
{/* Bottom Navigation for Mobile */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container border-t border-primary/10 py-3 flex justify-around items-center z-50">
<button className="flex flex-col items-center text-primary" style={{}}>
<span className="material-symbols-outlined" style={{}}>grid_view</span>
<span className="text-[10px] font-bold" style={{}}>FEED</span>
</button>
<button className="flex flex-col items-center text-on-surface-variant" style={{}}>
<span className="material-symbols-outlined" style={{}}>analytics</span>
<span className="text-[10px]" style={{}}>DATA</span>
</button>
<button className="flex flex-col items-center text-on-surface-variant" style={{}}>
<span className="material-symbols-outlined" style={{}}>emergency_share</span>
<span className="text-[10px]" style={{}}>ALERT</span>
</button>
<button className="flex flex-col items-center text-on-surface-variant" style={{}}>
<span className="material-symbols-outlined" style={{}}>settings</span>
<span className="text-[10px]" style={{}}>CORE</span>
</button>
</nav>

    </motion.div>
  );
}
