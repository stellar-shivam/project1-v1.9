const fs = require('fs');

function buildReactComponent(name, sourceJsxFile, destFile) {
    let jsxContent = fs.readFileSync(sourceJsxFile, 'utf8');

    // Extract body content if it contains head/meta tags
    const bodyMatch = jsxContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        jsxContent = bodyMatch[1];
    } else {
        // Just remove everything up to the first <nav> if there's no body parsed explicitly
        const navIndex = jsxContent.indexOf('<nav ');
        if (navIndex !== -1) {
            jsxContent = jsxContent.substring(navIndex);
        }
        // Remove trailing ``` codeblocks if any
        jsxContent = jsxContent.replace(/```\s*$/g, '');
    }

    // Convert standard <a> tags with text Evidence/Dashboard/Log Out to use <Link>
    // Link Evidence to /analysis/upload
    jsxContent = jsxContent.replace(/<a([^>]*href="#"[^>]*)>([\s\S]*?<span[^>]*>(?:folder_open)<\/span>[\s\S]*?<span[^>]*>Evidence<\/span>[\s\S]*?)<\/a>/g, '<Link to="/analysis/upload"$1>$2</Link>');
    
    // Link Dashboard to /analysis/dashboard
    jsxContent = jsxContent.replace(/<a([^>]*href="#"[^>]*)>([\s\S]*?<span[^>]*>(?:dashboard)<\/span>[\s\S]*?<span[^>]*>Dashboard<\/span>[\s\S]*?)<\/a>/g, '<Link to="/analysis/dashboard"$1>$2</Link>');

    // Link Log Out to /
    jsxContent = jsxContent.replace(/<a([^>]*href="#"[^>]*)>([\s\S]*?<span[^>]*>(?:logout)<\/span>[\s\S]*?<span[^>]*>Log Out<\/span>[\s\S]*?)<\/a>/g, '<Link to="/"$1>$2</Link>');
    
    // Also change `href="#"` inside <Link> wrapper to `to="..."`? Actually, I just created <Link to="..." href="#"> which is harmless but I can remove href="#".
    jsxContent = jsxContent.replace(/<Link ([^>]*)href="#"/g, '<Link $1');

    // Also change Vision Trace header link
    jsxContent = jsxContent.replace(/<div className="text-xl font-bold tracking-tighter text-\[#db90ff\] font-\['Space_Grotesk'\]"[^>]*>Vision Trace<\/div>/g, '<Link to="/"><div className="text-xl font-bold tracking-tighter text-[#db90ff] font-[\'Space_Grotesk\']">Vision Trace</div></Link>');
    jsxContent = jsxContent.replace(/<span className="text-xl font-black tracking-tight text-primary uppercase">Vision Trace<\/span>/g, '<Link to="/"><span className="text-xl font-black tracking-tight text-primary uppercase hover:text-white transition-colors cursor-pointer">Vision Trace</span></Link>');

    // Replace <main ...> with <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} ...>
    jsxContent = jsxContent.replace(/<main (className="[^"]*")/g, '<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} $1');
    jsxContent = jsxContent.replace(/<\/main>/g, '</motion.main>');

    const componentCode = `import { motion } from "framer-motion";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ${name}() {
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
      ${jsxContent}
    </motion.div>
  );
}
`;

    fs.writeFileSync(destFile, componentCode);
}

buildReactComponent('VideoAnalysis', 'video_analysis.jsx', 'src/pages/VideoAnalysis.jsx');
buildReactComponent('Dashboard', 'dashboard.jsx', 'src/pages/Dashboard.jsx');

console.log('Build complete');
