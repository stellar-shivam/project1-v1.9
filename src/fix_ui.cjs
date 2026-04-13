const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, 'pages');

// App.jsx -> remove AnimatePresence
const appPath = path.join(__dirname, 'App.jsx');
let appCode = fs.readFileSync(appPath, 'utf8');
appCode = appCode.replace(/import \{ AnimatePresence \} from 'framer-motion';/g, '');
appCode = appCode.replace(/<AnimatePresence mode="wait">/g, '');
appCode = appCode.replace(/<\/AnimatePresence>/g, '');
appCode = appCode.replace(/<Routes location=\{location\} key=\{[^\}]+\}>/g, '<Routes>');
appCode = appCode.replace(/import \{ BrowserRouter, Routes, Route, Navigate, useLocation \} from 'react-router-dom';/g, "import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';");
appCode = appCode.replace(/const location = useLocation\(\);/g, '');
fs.writeFileSync(appPath, appCode);

// Index.css -> scroll offsets
const cssPath = path.join(__dirname, 'index.css');
let cssCode = fs.readFileSync(cssPath, 'utf8');
if (!cssCode.includes('scroll-smooth')) {
  cssCode = cssCode.replace(/@layer base \{/, '@layer base {\n  html {\n    @apply scroll-smooth;\n    scroll-padding-top: 120px;\n  }');
  fs.writeFileSync(cssPath, cssCode);
}

// Fix pages
fs.readdirSync(p).forEach(f => {
  if (f.endsWith('.jsx')) {
    let cnt = fs.readFileSync(path.join(p, f), 'utf-8');

    // Make Logo clickable
    cnt = cnt.replace(/<div className="text-xl font-bold tracking-tighter text-primary uppercase font-headline">\s*Vision Trace\s*<\/div>/g, '<Link to="/"><div className="text-xl font-bold tracking-tighter text-primary uppercase font-headline hover:text-white transition-colors cursor-pointer">\n        Vision Trace\n    </div></Link>');
    cnt = cnt.replace(/<span className="text-xl font-black tracking-tight text-primary uppercase">Vision Trace<\/span>/g, '<Link to="/"><span className="text-xl font-black tracking-tight text-primary uppercase hover:text-white transition-colors cursor-pointer">Vision Trace</span></Link>');
    cnt = cnt.replace(/<span className="text-xl font-bold tracking-tighter text-on-surface font-space-grotesk" style={{}}>VISION TRACE<\/span>/g, '<Link to="/"><span className="text-xl font-bold tracking-tighter text-on-surface font-space-grotesk hover:text-primary transition-colors cursor-pointer" style={{}}>VISION TRACE</span></Link>');

    // Make all logout buttons work (they usually look like `<button ... logout >` or similar, I'll target the parent container of logout)
    cnt = cnt.replace(/<button([^>]*)>\s*<span([^>]*)>logout<\/span>\s*<span([^>]*)>Logout<\/span>\s*<\/button>/gi, '<Link to="/"><button$1>\n<span$2>logout</span>\n<span$3>Logout</span>\n</button></Link>');

    if (f === 'SignIn.jsx') {
      cnt = cnt.replace(/<Link className="([^"]*)" href="#">Forgot Password\?<\/Link>/g, '<Link className="$1" to="/account/forgot-password">Forgot Password?</Link>');
    }
    
    fs.writeFileSync(path.join(p, f), cnt);
  }
});
console.log('Fixed requested UI updates');
