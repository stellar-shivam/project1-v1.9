const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'pages');

['SignUp.jsx', 'ForgotPassword.jsx'].forEach(f => {
  const fp = path.join(srcDir, f);
  if (fs.existsSync(fp)) {
    let cnt = fs.readFileSync(fp, 'utf-8');

    // Make dropdown work reliably using Tailwind pseudo classes
    cnt = cnt.replace(/className="relative dropdown group\/menu"/g, 'className="relative group/menu"');
    cnt = cnt.replace(/className="w-full py-4 px-8 bg-surface-container-highest text-on-surface font-semibold rounded-lg border border-outline-variant hover:bg-surface-variant transition-all flex items-center justify-between group"/g, 'className="w-full py-4 px-8 bg-surface-container-highest text-on-surface font-semibold rounded-lg border border-outline-variant hover:bg-surface-variant transition-all flex items-center justify-between group/btn peer"');
    cnt = cnt.replace(/className="dropdown-content absolute left-0 right-0 top-full mt-2 bg-surface-container-highest border border-outline-variant rounded-lg shadow-2xl overflow-hidden z-20"/g, 'className="absolute left-0 right-0 top-full mt-2 bg-surface-container-highest border border-outline-variant rounded-lg shadow-2xl overflow-hidden z-20 opacity-0 invisible translate-y-2 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 transition-all duration-300"');

    fs.writeFileSync(fp, cnt);
  }
});

console.log('Dropdowns fixed on SignUp and ForgotPassword');
