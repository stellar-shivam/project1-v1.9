const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'pages');
const compDir = path.join(__dirname, 'components');

if (!fs.existsSync(compDir)) {
  fs.mkdirSync(compDir);
}

// 1. Create CursorGlow component
const cursorContent = `import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // useSpring provides a sleek, laggy follow physics
  const springX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of blur width to center it on cursor
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-[-1]"
      style={{ x: springX, y: springY }}
    />
  );
}
`;
fs.writeFileSync(path.join(compDir, 'CursorGlow.jsx'), cursorContent);

// App.jsx -> Import and render CursorGlow
const appPath = path.join(__dirname, 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');
if (!appCode.includes('CursorGlow')) {
  appCode = appCode.replace("import LandingPage", "import CursorGlow from './components/CursorGlow.jsx';\nimport LandingPage");
  appCode = appCode.replace("<BrowserRouter>", "<BrowserRouter>\n      <CursorGlow />");
  fs.writeFileSync(appPath, appCode);
}

// Fix logic in Pages
fs.readdirSync(srcDir).forEach(f => {
  if (f.endsWith('.jsx')) {
    let cnt = fs.readFileSync(path.join(srcDir, f), 'utf-8');

    // Make dropdown work reliably using Tailwind pseudo classes
    if (f === 'SignIn.jsx') {
      cnt = cnt.replace(/className="relative dropdown group\/menu"/g, 'className="relative group/menu"');
      cnt = cnt.replace(/className="w-full py-4 px-8 bg-surface-container-highest text-on-surface font-semibold rounded-lg border border-outline-variant hover:bg-surface-variant transition-all flex items-center justify-between group"/g, 'className="w-full py-4 px-8 bg-surface-container-highest text-on-surface font-semibold rounded-lg border border-outline-variant hover:bg-surface-variant transition-all flex items-center justify-between group/btn peer"');
      cnt = cnt.replace(/className="dropdown-content absolute left-0 right-0 top-full mt-2 bg-surface-container-highest border border-outline-variant rounded-lg shadow-2xl overflow-hidden z-20"/g, 'className="absolute left-0 right-0 top-full mt-2 bg-surface-container-highest border border-outline-variant rounded-lg shadow-2xl overflow-hidden z-20 opacity-0 invisible translate-y-2 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 transition-all duration-300"');
    }

    // Fix Log in button on SignUp Page
    if (f === 'SignUp.jsx') {
       cnt = cnt.replace(/<a className="text-xs text-primary[^>]+href="#">Log in<\/a>/gi, '<Link className="text-xs text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4" to="/account/signin">Log in</Link>');
    }

    fs.writeFileSync(path.join(srcDir, f), cnt);
  }
});

console.log('UI Requests Addressed!');
