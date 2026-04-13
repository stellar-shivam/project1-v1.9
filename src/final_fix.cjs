const fs = require('fs');
const path = require('path');

// Fix index.html
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  let html = fs.readFileSync(indexHtmlPath, 'utf8');
  if (!html.includes('Material+Symbols+Outlined')) {
    html = html.replace('</head>', '    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />\n  </head>');
    fs.writeFileSync(indexHtmlPath, html);
    console.log('Fixed index.html icons');
  }
}

// Fix JSX files
const mapping = {
  'LandingPage.jsx': [
    { search: '<button className="hidden lg:block', replace: '<button className="hidden lg:block' }, // do nothing
    { search: '<button className="bg-primary text-on-primary', replace: '<Link to="/account/signin"><button className="bg-primary text-on-primary', suffix: '</button>', replSuffix: '</button></Link>' },
    { search: '<button className="px-8 py-4 rounded-xl', replace: '<Link to="/account/signup"><button className="px-8 py-4 rounded-xl', suffix: '</button>', replSuffix: '</button></Link>' }
  ],
  'SignIn.jsx': [
    { search: 'href="#"', replace: 'to="/account/forgot-password"' }, // Assuming only one valid href link
    { search: '<a className="text-xs text-primary', replace: '<Link className="text-xs text-primary', suffix: '</a>', replSuffix: '</Link>' },
    { search: '<button className="w-full py-4 liquid-glass-primary', replace: '<Link to="/analysis/upload" className="w-full block relative z-10"><button className="w-full py-4 liquid-glass-primary', suffix: '</button>', replSuffix: '</button></Link>' },
    { search: '<button className="w-full py-4 liquid-glass text-on-surface', replace: '<Link to="/account/signup" className="w-full block relative z-10"><button className="w-full py-4 liquid-glass text-on-surface', suffix: '</button>', replSuffix: '</button></Link>' }
  ],
  'SignUp.jsx': [
    { search: '<button className="w-full py-4 liquid-glass-primary', replace: '<Link to="/analysis/upload" className="w-full block relative z-10"><button className="w-full py-4 liquid-glass-primary', suffix: '</button>', replSuffix: '</button></Link>' },
    { search: '<button className="w-full py-4 liquid-glass text-on-surface', replace: '<Link to="/account/signin" className="w-full block relative z-10"><button className="w-full py-4 liquid-glass text-on-surface', suffix: '</button>', replSuffix: '</button></Link>' }
  ],
  'ForgotPassword.jsx': [
    { search: '<button className="w-full py-4 liquid-glass-primary', replace: '<Link to="/account/signin" className="w-full block relative z-10"><button className="w-full py-4 liquid-glass-primary', suffix: '</button>', replSuffix: '</button></Link>' },
    { search: '<button className="w-full py-4 liquid-glass text-on-surface', replace: '<Link to="/account/signin" className="w-full block relative z-10"><button className="w-full py-4 liquid-glass text-on-surface', suffix: '</button>', replSuffix: '</button></Link>' }
  ],
  'VideoUpload.jsx': [
    { search: '>Logout</span>', replace: '><Link to="/">Logout</Link></span>' },
    { search: '<button className="relative px-8 py-3', replace: '<Link to="/analysis/results" className="inline-block relative z-10"><button className="relative px-8 py-3', suffix: '</button>', replSuffix: '</button></Link>' }
  ],
  'VideoAnalysis.jsx': [
    { search: '>Logout</span>', replace: '><Link to="/">Logout</Link></span>' },
    { search: '<button className="relative w-full py-4', replace: '<Link to="/analysis/upload" className="block w-full"><button className="relative w-full py-4', suffix: '</button>', replSuffix: '</button></Link>' },
    { search: '<button className="w-full py-4 bg-tertiary', replace: '<Link to="/analysis/upload" className="block w-full"><button className="w-full py-4 bg-tertiary', suffix: '</button>', replSuffix: '</button></Link>' }
  ]
};

const pagesPath = path.join(__dirname, 'pages');
for (const [file, rules] of Object.entries(mapping)) {
  const fp = path.join(pagesPath, file);
  if (fs.existsSync(fp)) {
    let content = fs.readFileSync(fp, 'utf8');
    
    // reset prior links if any failed
    content = content.replace(/<Link[^>]*>/g, '').replace(/<\/Link>/g, '');
    
    // Add Link back
    for (const r of rules) {
      if (r.search && content.includes(r.search)) {
         if (r.suffix) {
           // String processing to wrap whole button
           const startIdx = content.indexOf(r.search);
           const endIdx = content.indexOf(r.suffix, startIdx) + r.suffix.length;
           if (startIdx !== -1 && endIdx > startIdx) {
              const fullMatch = content.substring(startIdx, endIdx);
              const replaced = r.replace + fullMatch.substring(r.search.length, fullMatch.length - r.suffix.length) + r.replSuffix;
              content = content.replace(fullMatch, replaced);
           }
         } else {
           content = content.replace(r.search, r.replace);
         }
      }
    }
    
    // Forgot Password Link specific fix
    if (file === 'SignIn.jsx') {
      content = content.replace('<a className="text-xs text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4" to="/account/forgot-password">Forgot Password?</a>', '<Link className="text-xs text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4" to="/account/forgot-password">Forgot Password?</Link>');
    }
    
    // Ensure Link is imported
    if (!content.includes('import { Link }')) {
       content = `import { Link } from 'react-router-dom';\n` + content;
    }
    
    fs.writeFileSync(fp, content);
    console.log('Fixed routing in', file);
  }
}
