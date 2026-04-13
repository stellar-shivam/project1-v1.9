const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'pages');

const mapping = {
  'LandingPage.jsx': [
    { regex: /<button([^>]*)>(.*?)Login(.*?)<\/button>/isg, replace: '<Link to="/account/signin"><button$1>$2Login$3</button></Link>'},
    { regex: /<button([^>]*)>(.*?)Try now for free(.*?)<\/button>/isg, replace: '<Link to="/account/signup"><button$1>$2Try now for free$3</button></Link>'}
  ],
  'SignIn.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>(.*?)Create an account(.*?)<\/a>/isg, replace: '<Link$1to="/account/signup"$2>$3Create an account$4</Link>'},
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>(.*?)Forgot password\?(.*?)<\/a>/isg, replace: '<Link$1to="/account/forgot-password"$2>$3Forgot password?$4</Link>'},
    { regex: /<button([^>]*)>(.*?)Login(.*?)<\/button>/isg, replace: '<Link to="/analysis/upload" className="w-full relative z-10"><button$1 className="w-full bg-primary text-on-primary font-space-grotesk font-bold uppercase tracking-wider py-4 rounded-xl shadow-[0_0_20px_rgba(219,144,255,0.3)] hover:scale-[0.98] transition-all">$2Login$3</button></Link>'}
  ],
  'SignUp.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>(.*?)Log in(.*?)<\/a>/isg, replace: '<Link$1to="/account/signin"$2>$3Log in$4</Link>'},
    { regex: /<button([^>]*)>(.*?)Create Account(.*?)<\/button>/isg, replace: '<Link to="/analysis/upload" className="w-full relative z-10 block"><button$1 className="w-full bg-primary text-on-primary font-space-grotesk font-bold uppercase tracking-wider py-4 rounded-xl shadow-[0_0_20px_rgba(219,144,255,0.3)] hover:scale-[0.98] transition-all">$2Create Account$3</button></Link>'}
  ],
  'ForgotPassword.jsx': [
    { regex: /<a([^>]*)href="[^"]*"([^>]*)>(.*?)Return to login(.*?)<\/a>/isg, replace: '<Link$1to="/account/signin"$2>$3Return to login$4</Link>'},
    { regex: /<button([^>]*)>(.*?)Send Reset Link(.*?)<\/button>/isg, replace: '<Link to="/account/signin" className="w-full"><button$1 className="w-full bg-primary text-on-primary font-space-grotesk font-bold uppercase tracking-wider py-4 rounded-xl shadow-[0_0_20px_rgba(219,144,255,0.3)] hover:scale-[0.98] transition-all">$2Send Reset Link$3</button></Link>'}
  ],
  'VideoUpload.jsx': [
    { regex: /<span([^>]*)>Logout<\/span>/ig, replace: '<Link to="/"><span$1>Logout</span></Link>'},
    { regex: /<button([^>]*)>(.*?)Upload Evidence(.*?)<\/button>/isg, replace: '<Link to="/analysis/results" className="w-full block relative z-10"><button$1 className="w-full bg-primary text-on-primary font-space-grotesk font-bold uppercase tracking-wider py-4 rounded-xl hover:scale-[0.98] transition-all bloom-primary hover:bloom-hover block">$2Upload Evidence$3</button></Link>'}
  ],
  'VideoAnalysis.jsx': [
    { regex: /<span([^>]*)>Logout<\/span>/ig, replace: '<Link to="/"><span$1>Logout</span></Link>'},
    { regex: /<button([^>]*)>(.*?)End Analysis(.*?)<\/button>/isg, replace: '<Link to="/analysis/upload"><button$1 className="px-6 py-2 rounded-xl border border-error/30 text-error font-space-grotesk text-sm uppercase tracking-widest hover:bg-error/10 transition-colors">$2End Analysis$3</button></Link>'}
  ]
};

for (const [file, replacements] of Object.entries(mapping)) {
  const filePath = path.join(srcDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    for (const r of replacements) {
      content = content.replace(r.regex, r.replace);
    }
    // Also strip out any <button> nesting if I accidentally did <Link><button>... but Tailwind/React Router v6 <Link> wrapping <button> is completely valid.
    
    // Fix: Remove any manual button className if we overwrite the whole button in replacements for specific styling cases. Wait, I used $1 so existing attributes are kept in some, but in others I specifically set className because $1 had class= or something. The replace is safe.
    
    fs.writeFileSync(filePath, content);
    console.log('Fixed', file);
  }
}
