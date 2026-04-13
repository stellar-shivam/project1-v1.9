const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const urls = {
  'main_page.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzIyYWRkOWUwNTkxNTQ1OGY5MTkxMzEyMWY4NGMwMDJiEgsSBxDd0JCduw0YAZIBIwoKcHJvamVjdF9pZBIVQhM4MDY4MjcwNjgzNDEwMzY4MDI2&filename=&opi=89354086',
  'signin.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2U0ZTMwNDczY2FiMjQ1ZjU5NTViZDBmMWExY2Q5NWE2EgsSBxDd0JCduw0YAZIBIwoKcHJvamVjdF9pZBIVQhM4MDY4MjcwNjgzNDEwMzY4MDI2&filename=&opi=89354086',
  'signup.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2M4ODljN2IwNzY5ZjRkNWViYWVkMzJmMmQ5NDJmZjA2EgsSBxDd0JCduw0YAZIBIwoKcHJvamVjdF9pZBIVQhM4MDY4MjcwNjgzNDEwMzY4MDI2&filename=&opi=89354086',
  'forgot.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzlhZGU5NWY5NjI1NzRjZDI5NWY4ZGQ5Y2MxOGU2YmRlEgsSBxDd0JCduw0YAZIBIwoKcHJvamVjdF9pZBIVQhM4MDY4MjcwNjgzNDEwMzY4MDI2&filename=&opi=89354086',
  'upload.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2MxNWNhZDZhZDBjMTQyMzRiODc3NWM5NjUwNzkyZDFmEgsSBxDd0JCduw0YAZIBIwoKcHJvamVjdF9pZBIVQhM4MDY4MjcwNjgzNDEwMzY4MDI2&filename=&opi=89354086',
  'analysis.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzkyMjI4ZDhlYzhlNzQyODQ4NDY1MDkwNDA1NTk2ZjY4EgsSBxDd0JCduw0YAZIBIwoKcHJvamVjdF9pZBIVQhM4MDY4MjcwNjgzNDEwMzY4MDI2&filename=&opi=89354086'
};

const files = [
  { name: 'main_page.html', comp: 'LandingPage', route: '/' },
  { name: 'signin.html', comp: 'SignIn', route: '/account/signin' },
  { name: 'signup.html', comp: 'SignUp', route: '/account/signup' },
  { name: 'forgot.html', comp: 'ForgotPassword', route: '/account/forgot-password' },
  { name: 'upload.html', comp: 'VideoUpload', route: '/analysis/upload' },
  { name: 'analysis.html', comp: 'VideoAnalysis', route: '/analysis/results' },
];

function convertToJSX(html) {
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  let content = bodyMatch ? bodyMatch[1] : html;
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '');
  content = content.replace(/class=/g, 'className=');
  content = content.replace(/for=/g, 'htmlFor=');
  content = content.replace(/<(img|br|input|hr)([^>]*?)(?!\/)>([^<]*?)/gi, (match, tag, attr, text) => {
    return `<${tag}${attr.replace(/\/$/, '')} />${text}`;
  });
  content = content.replace(/style='([^']+)'/g, (match, p1) => {
    let styles = p1.split(';').filter(s => s.trim()).map(s => {
      let [k, v] = s.split(':');if (!v) return '';
      k = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return `${k}: "${v.trim().replace(/"/g, "'")}"`;
    }).filter(x=>x).join(', ');
    return `style={{${styles}}}`;
  });
  content = content.replace(/style="([^"]+)"/g, (match, p1) => {
    let styles = p1.split(';').filter(s => s.trim()).map(s => {
      let [k, v] = s.split(':');if (!v) return '';
      k = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return `${k}: "${v.trim().replace(/'/g, "'")}"`;
    }).filter(x=>x).join(', ');
    return `style={{${styles}}}`;
  });
  content = content.replace(/clip-rule/g, 'clipRule');
  content = content.replace(/fill-rule/g, 'fillRule');
  content = content.replace(/stroke-width/g, 'strokeWidth');
  content = content.replace(/stroke-linecap/g, 'strokeLinecap');
  content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
  content = content.replace(/viewbox/gi, 'viewBox');
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  content = content.replace(/style=\{\{\}\}/g, '');
  return content.trim();
}

const mapping = {
  'LandingPage.jsx': [
    { regex: /<button([^>]*)>\s*Login\s*<\/button>/g, replace: '<Link to="/account/signin"><button$1>Login</button></Link>'},
    { regex: /<button([^>]*)>\s*Try now for free\s*<\/button>/g, replace: '<Link to="/account/signup"><button$1>Try now for free</button></Link>'}
  ],
  'SignIn.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>\s*Create an account([\s\S]*?)<\/a>/g, replace: '<Link$1to="/account/signup"$2>Create an account$3</Link>'},
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>\s*Forgot password\?([\s\S]*?)<\/a>/g, replace: '<Link$1to="/account/forgot-password"$2>Forgot password?$3</Link>'},
    { regex: /<button([^>]*)>\s*Login\s*<\/button>/g, replace: '<Link to="/analysis/upload" className="w-full relative z-10 block"><button$1>Login</button></Link>'}
  ],
  'SignUp.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>\s*Log in([\s\S]*?)<\/a>/g, replace: '<Link$1to="/account/signin"$2>Log in$3</Link>'},
    { regex: /<button([^>]*)>\s*Create Account\s*<\/button>/g, replace: '<Link to="/analysis/upload" className="w-full relative z-10 block"><button$1>Create Account</button></Link>'}
  ],
  'ForgotPassword.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>\s*Return to login([\s\S]*?)<\/a>/g, replace: '<Link$1to="/account/signin"$2>Return to login$3</Link>'},
    { regex: /<button([^>]*)>\s*Send Reset Link\s*<\/button>/g, replace: '<Link to="/account/signin" className="w-full block relative z-10"><button$1>Send Reset Link</button></Link>'}
  ],
  'VideoUpload.jsx': [
    { regex: /<span([^>]*)>\s*Logout\s*<\/span>/g, replace: '<Link to="/"><span$1>Logout</span></Link>'},
    { regex: /<button([^>]*)>\s*Upload Evidence\s*<\/button>/g, replace: '<Link to="/analysis/results" className="w-full block relative z-10"><button$1>Upload Evidence</button></Link>'}
  ],
  'VideoAnalysis.jsx': [
    { regex: /<span([^>]*)>\s*Logout\s*<\/span>/g, replace: '<Link to="/"><span$1>Logout</span></Link>'},
    { regex: /<button([^>]*)>\s*End Analysis\s*<\/button>/g, replace: '<Link to="/analysis/upload"><button$1>End Analysis</button></Link>'}
  ]
};

async function run() {
  for (let file of files) {
    console.log('Fetching', file.name);
    execSync(`powershell -Command "Invoke-WebRequest -Uri '${urls[file.name]}' -OutFile '${file.name}'"`);
    let html = fs.readFileSync(file.name, 'utf8');
    let jsxContent = convertToJSX(html);
    
    // Fix Links Safely
    if (mapping[`${file.comp}.jsx`]) {
      for (const r of mapping[`${file.comp}.jsx`]) {
         jsxContent = jsxContent.replace(r.regex, r.replace);
      }
    }
    
    const componentCode = `import React, { useEffect } from 'react';\nimport { Link } from 'react-router-dom';\n\nexport default function ${file.comp}() {\n  useEffect(() => {\n    const reveal = () => {\n      const reveals = document.querySelectorAll(".reveal");\n      for (let i = 0; i < reveals.length; i++) {\n        const windowHeight = window.innerHeight;\n        const elementTop = reveals[i].getBoundingClientRect().top;\n        const elementVisible = 150;\n        if (elementTop < windowHeight - elementVisible) {\n          reveals[i].classList.add("active");\n        }\n      }\n    };\n    window.addEventListener("scroll", reveal);\n    reveal();\n    return () => window.removeEventListener("scroll", reveal);\n  }, []);\n\n  return (\n    <div className="min-h-screen bg-background text-on-surface">\n      ${jsxContent}\n    </div>\n  );\n}\n`;
    const cleanComponent = componentCode.replace(/<br>/gi, '<br />');
    
    fs.writeFileSync(path.join(__dirname, 'pages', `${file.comp}.jsx`), cleanComponent);
    fs.unlinkSync(file.name);
  }
}
run();
