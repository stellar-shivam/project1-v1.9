import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
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
<header className="fixed top-0 w-full z-50 h-16 bg-surface-container-lowest border-b border-white/5 flex justify-between items-center px-6">
<Link to="/"><div className="text-xl font-bold tracking-tighter text-primary uppercase font-headline hover:text-white transition-colors cursor-pointer">
        Vision Trace
    </div></Link>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-4">
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
</div>
</div>
</header>
<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="flex-grow flex flex-col md:flex-row pt-16 h-screen overflow-hidden">
{/*  Public User Portal (Left Side) - UNCHANGED  */}
<section className="relative w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-16 border-r border-white/5 overflow-hidden group">
<div className="absolute inset-0 z-0">
<img alt="Abstract deep digital network" className="w-full h-full object-cover opacity-20 saturate-0 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbVcitcWOKcpOS7u0BLN1V2zTCic7hpG1nLUkZck7HhEZgLPdQisggw4xkpqEGBQNEamtZrrGpQfj7ta-uG-mHpwPHTkHl1ZmNzaN4xIBIrH5yeCFalgkbfj0SQ6SWDHia5lyrIpX6zifEZqbDlOhq5Y6hoTV5Kfel9iriy5gWB5RuerWyjQbkMvICJp8kaGN0DXX-0WuYX9knC-MNSoV4SrBWNyUsQH4eDjbzVP8dZ5IQn-O4PWhP5gvpB3p9quxtEvBM_f-NluLU" />
<div className="absolute inset-0 bg-gradient-to-tr from-background/95 via-surface-container-low/70 to-transparent"></div>
</div>
<div className="relative z-10 max-w-md w-full text-center md:text-left">
<div className="inline-flex items-center px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8">
                Public Access
            </div>
<h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 leading-tight tracking-tighter">
                Detect. <br /> <span className="text-primary">Analyze.</span> <br /> Act.
            </h1>
<p className="text-on-surface-variant text-lg leading-relaxed mb-10 font-body">
                An AI-powered forensic analysis system that processes recorded video footage to detect suspicious behavior, analyze human motion, and generate actionable insights for investigation.
            </p>
<div className="space-y-4">
<div className="relative group/menu">
<button className="w-full py-4 px-8 bg-surface-container-highest text-on-surface font-semibold rounded-lg border border-outline-variant hover:bg-surface-variant transition-all flex items-center justify-between group/btn peer">
<span>Continue as Public User</span>
<span className="material-symbols-outlined transition-transform group-hover:rotate-180">expand_more</span>
</button>
<div className="absolute left-0 right-0 top-full mt-2 bg-surface-container-highest border border-outline-variant rounded-lg shadow-2xl overflow-hidden z-20 opacity-0 invisible translate-y-2 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 transition-all duration-300">
<a className="block w-full px-8 py-4 text-left text-on-surface hover:bg-primary/10 transition-colors border-b border-white/5" href="#">
                            Continue as public user
                        </a>
<a className="block w-full px-8 py-4 text-left text-on-surface hover:bg-primary/10 transition-colors" href="#">
                            Continue as government entity
                        </a>
</div>
</div>
<div className="flex items-center gap-4 px-4 py-3 bg-primary-container/10 rounded-lg border border-primary-container/20">
<span className="material-symbols-outlined text-primary">info</span>
<p className="text-xs text-on-surface-variant leading-tight">Account is required for basic analysis tools and public database searches.</p>
</div>
</div>
</div>
</section>
{/*  Professional/Forensic Portal (Right Side) - FORGOT PASSWORD STATE  */}
<section className="relative w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-16 bg-surface-container-low overflow-y-auto">
<div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(219,144,255,0.03)_0%,_transparent_50%)]"></div>
<div className="relative z-10 max-w-sm w-full">
{/*  Portal Header  */}
<div className="flex flex-col items-center mb-10">
<div className="w-20 h-20 bg-surface-container-highest rounded-xl flex items-center justify-center mb-6 shadow-2xl shadow-black/60 ring-1 ring-primary/20 group cursor-pointer hover:ring-primary/40 transition-all">
<span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>lock_reset</span>
</div>
<h2 className="text-2xl font-bold text-on-surface tracking-tight mb-2 uppercase">FORGOT PASSWORD</h2>
<p className="text-on-surface-variant text-sm font-label uppercase tracking-widest text-center">IDENTITY VERIFICATION REQUIRED</p>
</div>
{/*  Forgot Password Form  */}
<div className="space-y-5">
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">EMAIL</label>
<div className="flex gap-2">
<div className="relative group flex-grow">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">mail</span>
<input className="w-full bg-surface-container-lowest border-none ring-1 ring-white/5 focus:ring-2 focus:ring-primary/50 rounded-lg py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline transition-all" placeholder="example@email.com" type="email" />
</div>
<button className="px-6 py-3.5 bg-surface-container-highest text-primary font-bold text-xs uppercase tracking-widest rounded-lg border border-outline-variant hover:bg-surface-variant transition-all whitespace-nowrap">
                            Send
                        </button>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">OTP (ONE-TIME PASSWORD)</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">key</span>
<input className="w-full bg-surface-container-lowest border-none ring-1 ring-white/5 focus:ring-2 focus:ring-primary/50 rounded-lg py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline transition-all tracking-[0.5em]" maxlength="6" placeholder="••••••" type="text" />
</div>
</div>
<Link to="/account/signin" className="w-full block relative z-10"><button className="w-full py-4 liquid-glass-primary flex items-center justify-center gap-2 font-headline tracking-wide rounded-lg mt-4">
<span className="material-symbols-outlined text-xl">verified_user</span>
                    Verify &amp; Reset
                </button></Link>
<div className="flex items-center justify-center pt-2">
<p className="text-xs text-on-surface-variant">Remembered your key? <a className="text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4 ml-1" href="#">Sign in</a></p>
</div>
</div>
</div>
</section>
</motion.main>
    </motion.div>
  );
}
