const fs = require('fs');
const path = require('path');

// 1. CursorGlow z-index
const cursorPath = path.join(__dirname, 'components', 'CursorGlow.jsx');
if (fs.existsSync(cursorPath)) {
  let cc = fs.readFileSync(cursorPath, 'utf8');
  cc = cc.replace('z-[-1]', 'z-50 mix-blend-screen');
  fs.writeFileSync(cursorPath, cc);
}

// 2. LandingPage Contact button scroll & footer ID
const landingPath = path.join(__dirname, 'pages', 'LandingPage.jsx');
if (fs.existsSync(landingPath)) {
  let lc = fs.readFileSync(landingPath, 'utf8');
  lc = lc.replace('<footer className="bg-surface-container-low border-t border-white/5 px-12 py-16 mt-24">', '<footer className="bg-surface-container-low border-t border-white/5 px-12 py-16 mt-24" id="footer">');
  lc = lc.replace('<button className="hidden lg:block text-on-surface-variant/60 hover:text-purple-400 transition-colors text-sm font-space-grotesk uppercase tracking-widest px-4 py-2" style={{}}>Contact</button>', '<a href="#footer"><button className="hidden lg:block text-on-surface-variant/60 hover:text-purple-400 transition-colors text-sm font-space-grotesk uppercase tracking-widest px-4 py-2" style={{}}>Contact</button></a>');
  fs.writeFileSync(landingPath, lc);
}

// 3. SignUp.jsx Sign-in Anchor Fix
const signupPath = path.join(__dirname, 'pages', 'SignUp.jsx');
if (fs.existsSync(signupPath)) {
  let sc = fs.readFileSync(signupPath, 'utf8');
  sc = sc.replace(/<a className="([^"]+)" href="#">Sign in<\/a>/g, '<Link className="$1" to="/account/signin">Sign in</Link>');
  fs.writeFileSync(signupPath, sc);
}

// 4. Logout links in VideoUpload / VideoAnalysis
const pagesPath = path.join(__dirname, 'pages');
['VideoUpload.jsx', 'VideoAnalysis.jsx'].forEach(f => {
  const fp = path.join(pagesPath, f);
  if (fs.existsSync(fp)) {
    let pContent = fs.readFileSync(fp, 'utf8');
    // Replace <a href="#"> with exact class and logout text to <Link>
    pContent = pContent.replace(/<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white\/5 transition-all duration-300 font-headline font-semibold tracking-wide" href="#">\n<span className="material-symbols-outlined" data-icon="logout">logout<\/span>\n<span>Log Out<\/span>\n<\/a>/g, '<Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all duration-300 font-headline font-semibold tracking-wide">\n<span className="material-symbols-outlined" data-icon="logout">logout</span>\n<span>Log Out</span>\n</Link>');
    
    // Fallback if the whitespace wasn't exactly identical
    pContent = pContent.replace(/<a([^>]+)href="#">([\s\S]*?)logout([\s\S]*?)Log Out([\s\S]*?)<\/a>/gi, '<Link$1to="/">$2logout$3Log Out$4</Link>');
    
    fs.writeFileSync(fp, pContent);
  }
});

console.log('Post-fixes executed');
