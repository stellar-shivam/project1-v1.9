import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
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
<nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl shadow-[0_0_20px_rgba(219,144,255,0.1)] flex justify-between items-center px-8 py-3 z-50 transition-all duration-300">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
<Link to="/"><span className="text-xl font-bold tracking-tighter text-on-surface font-space-grotesk hover:text-primary transition-colors cursor-pointer" style={{}}>VISION TRACE</span></Link>
</div>
<div className="hidden md:flex items-center gap-8 font-space-grotesk tracking-tight text-sm uppercase">
<a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 px-3 py-1 rounded-lg" href="#solutions" style={{}}>Solutions</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 px-3 py-1 rounded-lg" href="#technology" style={{}}>Technology</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 px-3 py-1 rounded-lg" href="#dataset" style={{}}>Data Access</a>
<a className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 px-3 py-1 rounded-lg" href="#research" style={{}}>Research</a>
</div>
<div className="flex items-center gap-4">
<a href="#footer"><button className="hidden lg:block text-on-surface-variant/60 hover:text-purple-400 transition-colors text-sm font-space-grotesk uppercase tracking-widest px-4 py-2" style={{}}>Contact</button></a>
<Link to="/account/signin"><button className="bg-primary text-on-primary font-space-grotesk font-bold text-sm uppercase tracking-wider px-6 py-2.5 rounded-xl glow-primary hover:scale-[0.98] active:scale-95 transition-all" style={{}}>Login</button></Link>
</div>
</nav>
<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto">
{/*  Hero Section  */}
<section className="grid lg:grid-cols-12 gap-12 items-center mb-32" id="hero">
<div className="lg:col-span-7 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-[0.2em] text-primary font-space-grotesk" style={{}}>System Live: Protocol 8.4</span>
</div>
<h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tighter leading-[0.9] mb-6" style={{}}>AI Analyzing Actions, Delivering Truth and Evidence <div><font color="#db90ff">Truth and Evidence</font></div></h1>
<p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-manrope" style={{}}>
                    Advanced AI system for identifying suspects using gait, gestures, BMI, and motion behavior. Secure intelligence for high-stakes environments.
                </p>
<div className="flex flex-wrap gap-4">
<Link to="/account/signup"><button className="px-8 py-4 rounded-xl font-bold font-space-grotesk uppercase tracking-wider transition-all bg-[#ff4da6] text-white shadow-[0_0_30px_rgba(255,77,166,0.6)] hover:scale-105" style={{}}>Try now for free</button></Link>
</div>
</div>
{/*  Central Visual  */}
<div className="lg:col-span-5 relative flex justify-center items-center">
<div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-75"></div>
<div className="relative w-80 h-80 flex justify-center items-center">
<div className="absolute inset-0 border border-primary/20 rounded-full animate-[ping_3s_linear_infinite]"></div>
<div className="absolute inset-4 border border-primary/10 rounded-full animate-[ping_4s_linear_infinite_reverse]"></div>
<div className="absolute inset-10 border border-primary/30 rounded-full border-dashed"></div>
<div className="z-10 bg-surface-container rounded-full p-8 border border-primary/30 shadow-[0_0_50px_rgba(219,144,255,0.2)]">
<span className="material-symbols-outlined text-[120px] text-primary" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
</div>
<div className="absolute top-0 right-0 font-space-grotesk text-[10px] text-primary bg-primary/10 px-2 py-1 border border-primary/20 uppercase" style={{}}>Match Found: 93.4%</div>
<div className="absolute bottom-10 -left-10 font-space-grotesk text-[10px] text-tertiary bg-tertiary/10 px-2 py-1 border border-tertiary/20 uppercase" style={{}}>bmi :- 24.8</div>
</div>
</div>
</section>
{/*  Problem Section (Replacement)  */}
<section className="mb-32 reveal active" id="problem">
<div className="mb-12">
<h2 className="text-4xl font-bold font-space-grotesk uppercase tracking-tighter mb-4" style={{}}>Critical Vulnerabilities</h2>
<p className="text-on-surface-variant font-manrope max-w-2xl" style={{}}>Traditional surveillance methods are failing to meet the demands of modern threat landscapes.</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="glass-panel rounded-2xl p-8 border-t-2 border-primary/30 relative overflow-hidden group">
<div className="scan-line opacity-20"></div>
<div className="flex justify-between items-start mb-8">
<div className="bg-surface-container-highest p-3 rounded-xl">
<span className="material-symbols-outlined text-primary" style={{}}>visibility_off</span>
</div>
<span className="text-[10px] font-space-grotesk text-primary uppercase tracking-widest" style={{}}>Efficiency Gap</span>
</div>
<h3 className="text-xl font-bold font-space-grotesk mb-4 uppercase tracking-tight text-on-surface" style={{}}>Inefficient Manual Monitoring</h3>
<p className="text-sm text-on-surface-variant font-manrope leading-relaxed" style={{}}>Human operators can only maintain focus for 20 minutes, leading to missed events in 95% of standard surveillance footage.</p>
</div>
<div className="glass-panel rounded-2xl p-8 border-t-2 border-error/30 relative group">
<div className="flex justify-between items-start mb-8">
<div className="bg-error/10 p-3 rounded-xl">
<span className="material-symbols-outlined text-error" style={{}}>timer</span>
</div>
<span className="text-[10px] font-space-grotesk text-error uppercase tracking-widest" style={{}}>Behavioral Limitation</span>
</div>
<h3 className="text-xl font-bold font-space-grotesk mb-4 uppercase tracking-tight text-on-surface" style={{}}>Lack of Behavioral Intelligence</h3>
<p className="text-sm text-on-surface-variant font-manrope leading-relaxed" style={{}}>Traditional systems focus only on basic detection and fail to understand human behavior like gait, gestures, and actions.<br /></p>
</div>
<div className="glass-panel rounded-2xl p-8 border-t-2 border-tertiary/30 relative group overflow-hidden">
<div className="flex justify-between items-start mb-8">
<div className="bg-tertiary/10 p-3 rounded-xl">
<span className="material-symbols-outlined text-tertiary" style={{}}>notification_important</span>
</div>
<span className="text-[10px] font-space-grotesk text-tertiary uppercase tracking-widest" style={{}}>AI Gap</span>
</div>
<h3 className="text-xl font-bold font-space-grotesk mb-4 uppercase tracking-tight text-on-surface" style={{}}>Lack of AI Integration</h3>
<p className="text-sm text-on-surface-variant font-manrope leading-relaxed" style={{}}>Many existing surveillance systems lack proper AI integration and rely on basic monitoring or manual analysis.</p>
</div>
</div>
</section>
{/*  Solutions Section  */}
<section className="reveal mb-32 active" id="solutions">
<div className="mb-12">
<h2 className="text-4xl font-bold font-space-grotesk uppercase tracking-tighter mb-4" style={{}}>Core Solutions</h2>
<p className="text-on-surface-variant font-manrope max-w-2xl" style={{}}>Precision identification modules designed for the next generation of security infrastructure.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-panel p-8 rounded-2xl border-l-4 border-primary group hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{}}>directions_walk</span>
<h3 className="text-xl font-bold font-space-grotesk uppercase mb-4" style={{}}>Gait Analysis</h3>
<p className="text-sm text-on-surface-variant font-manrope leading-relaxed" style={{}}><strong data-end="164" data-start="84">Gait analysis studies the walking pattern of individuals from video footage.</strong><br data-end="167" data-start="164" />
<strong data-end="238" data-start="169">It helps identify unique movement traits for suspect recognition.</strong>.</p>
</div>
<div className="glass-panel p-8 rounded-2xl border-l-4 border-primary group hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{}}>person_alert</span>
<h3 className="text-xl font-bold font-space-grotesk uppercase mb-4" style={{}}>Behavior Detection</h3>
<p className="text-sm text-on-surface-variant font-manrope leading-relaxed" style={{}}><blockquote data-end="245" data-start="86"><p data-end="245" data-start="88"><strong data-end="166" data-start="88">Behavior detection analyzes human actions and gestures from video footage.</strong><br data-end="169" data-start="166" />
<strong data-end="245" data-start="171">It helps identify suspicious or abnormal activities for investigation.</strong></p>
</blockquote></p>
</div>
<div className="glass-panel p-8 rounded-2xl border-l-4 border-primary group hover:bg-white/5 transition-all">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{}}>monitoring</span>
<h3 className="text-xl font-bold font-space-grotesk uppercase mb-4" style={{}}>AI Tracking</h3>
<p className="text-sm text-on-surface-variant font-manrope leading-relaxed" style={{}}><strong data-end="150" data-start="81">AI tracking monitors and follows individuals across video frames.</strong><br data-end="153" data-start="150" />
<strong data-end="238" data-start="155">It maintains consistent identification for accurate analysis and investigation.</strong></p>
</div>
</div>
</section>
{/*  Technology Section  */}
<section className="reveal mb-32 active" id="technology">
<div className="mb-12">
<h2 className="text-4xl font-bold font-space-grotesk uppercase tracking-tighter mb-4" style={{}}>System Architecture</h2>
<p className="text-on-surface-variant font-manrope max-w-2xl" style={{}}>ML analyzes visual behavior, while LLM provides contextual understanding for deeper insights.</p>
</div>
<div className="glass-panel p-10 rounded-3xl relative overflow-hidden">
<div className="grid md:grid-cols-4 gap-4 items-center relative z-10">
<div className="flex flex-col items-center p-6 bg-surface-container rounded-xl border border-white/5">
<span className="material-symbols-outlined text-primary mb-2" style={{}}>sensor_window</span>
<span className="text-[10px] font-space-grotesk uppercase tracking-widest text-on-surface-variant" style={{}}>Ml model</span>
</div>
<div className="h-px bg-gradient-to-r from-primary/50 to-transparent md:block hidden"></div>
<div className="flex flex-col items-center p-6 bg-primary/10 rounded-xl border border-primary/30 glow-primary">
<span className="material-symbols-outlined text-primary mb-2" style={{}}>hub</span>
<span className="text-[10px] font-space-grotesk uppercase tracking-widest text-primary" style={{}}>llm </span>
</div>
<div className="h-px bg-gradient-to-r from-transparent to-tertiary/50 md:block hidden"></div>
</div>
<div className="mt-12 grid md:grid-cols-2 gap-12">
<div className="space-y-6">
<h4 className="font-space-grotesk font-bold uppercase tracking-wider text-primary" style={{}}>Motion Analysis</h4>
<p className="text-sm text-on-surface-variant leading-relaxed" style={{}}><strong data-end="132" data-start="54">Our system uses machine learning models to analyze recorded video footage.</strong><br data-end="135" data-start="132" />
<strong data-end="227" data-start="137">It extracts key outputs including actions, gestures, and gait patterns of individuals.</strong><br data-end="230" data-start="227" />
<strong data-end="328" data-start="232">These outputs help in identifying suspicious behavior and supporting accurate investigation.</strong></p>
</div>
<div className="space-y-6">
<h4 className="font-space-grotesk font-bold uppercase tracking-wider text-tertiary" style={{}}>Language Intelligence</h4>
<p className="text-sm text-on-surface-variant leading-relaxed" style={{}}><strong data-end="165" data-start="72">The system uses a Large Language Model (LLM) to analyze audio and contextual information.</strong><br data-end="168" data-start="165" />
<strong data-end="255" data-start="170">It interprets speech, tone, and patterns to understand the situation more deeply.</strong><br data-end="258" data-start="255" />
<strong data-end="353" data-start="260">This enhances decision-making by providing meaningful insights alongside visual analysis.</strong></p>
</div>
</div>
</div>
</section>
{/*  Dataset Access Section  */}
<section className="reveal mb-32 active" id="dataset">
<div className="glass-panel rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-surface-container to-primary/5">
<div className="max-w-xl">
<h2 className="text-4xl font-bold font-space-grotesk uppercase tracking-tighter mb-6" style={{}}>police data base</h2>
<p className="text-on-surface-variant font-manrope mb-8 leading-relaxed" style={{}}>Integrated with authorized law enforcement databases for enhanced identification and verification.</p>
</div>
</div>
</section>
{/*  Research Section  */}
<section className="reveal mb-24 active" id="research">
<div className="mb-12">
<h2 className="text-4xl font-bold font-space-grotesk uppercase tracking-tighter mb-4" style={{}}>Research &amp; Insights</h2>
<p className="text-on-surface-variant font-manrope max-w-2xl" style={{}}>Peer-reviewed documentation on behavioral identification and AI ethics.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-colors">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-space-grotesk text-primary uppercase tracking-widest border border-primary/30 px-2 py-1" style={{}}>existing systems </span>
</div>
<h3 className="text-xl font-bold font-space-grotesk uppercase mb-4" style={{}}>Gap in Existing Systems</h3>
<p className="text-sm text-on-surface-variant font-manrope mb-6" style={{}}>Existing surveillance systems focus mainly on basic detection and lack deep behavioral analysis such as gait, gestures, and contextual understanding, making investigations less accurate and more dependent on manual effort.</p>
<a className="text-primary text-xs font-bold font-space-grotesk uppercase tracking-widest hover:underline" href="#" style={{}}>Read Abstract</a>
</div>
<div className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-colors">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-space-grotesk text-tertiary uppercase tracking-widest border border-tertiary/30 px-2 py-1" style={{}}>powered by ai</span>
</div>
<h3 className="text-xl font-bold font-space-grotesk uppercase mb-4" style={{}}>Proposed AI-Based Solution</h3>
<p className="text-sm text-on-surface-variant font-manrope mb-6" style={{}}><blockquote data-end="641" data-start="430"><p data-end="641" data-start="432">Our research introduces an AI-driven forensic system that analyzes recorded video footage to detect human behavior, identify suspects, and ensure accountability through gait, gesture, motion, and BMI analysis.</p>
</blockquote></p>
<a className="text-tertiary text-xs font-bold font-space-grotesk uppercase tracking-widest hover:underline" href="#" style={{}}>View Insights</a>
</div>
</div>
</section>
</motion.main>
{/*  Footer  */}
<footer className="bg-surface-container-low border-t border-white/5 px-12 py-16 mt-24" id="footer">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="flex flex-col gap-6 items-start">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{}}>center_focus_strong</span>
<span className="text-xl font-black text-on-surface font-space-grotesk uppercase tracking-tighter" style={{}}>VISION TRACE</span>
</div>
<p className="font-manrope text-xs tracking-widest uppercase text-on-surface-variant/60 max-w-xs leading-loose" style={{}}>
                    Secure AI Protocol Enabled.<br />
                    Global Surveillance Intelligence Network.<br />
                    © 2026 VISION TRACE.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
<div className="space-y-4">
<h5 className="font-space-grotesk text-[10px] text-primary uppercase tracking-[0.2em] font-bold" style={{}}>Contact</h5>
<p className="text-xs text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" style={{}}>rajaarav054@gmail.com</p>
<p className="text-xs text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" style={{}}>+91 8298212541</p>
</div>
<div className="space-y-4">
<h5 className="font-space-grotesk text-[10px] text-primary uppercase tracking-[0.2em] font-bold" style={{}}>Documentation</h5>
<a className="block text-xs text-on-surface-variant hover:text-on-surface transition-colors" href="#" style={{}}>Security Protocols</a>
<a className="block text-xs text-on-surface-variant hover:text-on-surface transition-colors" href="#" style={{}}>Privacy Policy</a>
<a className="block text-xs text-on-surface-variant hover:text-on-surface transition-colors" href="#" style={{}}>API Docs</a>
</div>
<div className="space-y-4">
<h5 className="font-space-grotesk text-[10px] text-primary uppercase tracking-[0.2em] font-bold" style={{}}>Connect</h5>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all" href="#" style={{}}><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path></svg></a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all" href="#" style={{}}>
<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3V11.3h-2.8v7.2h2.8v-4.27a1.3 1.3 0 0 1 1.3-1.3 1.3 1.3 0 0 1 1.3 1.3v4.27h2.78M7 18.5V11.3H4.2v7.2H7M5.6 9.8a1.55 1.55 0 0 0 1.55-1.55A1.55 1.55 0 0 0 5.6 6.7 1.55 1.55 0 0 0 4.05 8.25 1.55 1.55 0 0 0 5.6 9.8z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</footer>
    </motion.div>
  );
}
