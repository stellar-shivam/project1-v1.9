const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'pages');

fs.readdirSync(srcDir).forEach(f => {
  if (f.endsWith('.jsx')) {
    const fp = path.join(srcDir, f);
    let cnt = fs.readFileSync(fp, 'utf-8');
    
    if (!cnt.includes('framer-motion')) {
      // Add import
      cnt = `import { motion } from "framer-motion";\n` + cnt;
      
      // Update the main container
      const motionTag = `<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4, ease: "easeOut" }} className="min-h-screen`;
      cnt = cnt.replace(/<div className="min-h-screen/, motionTag);
      
      // Close motion.div
      const lastDiv = cnt.lastIndexOf('</div>');
      if (lastDiv !== -1) {
        cnt = cnt.substring(0, lastDiv) + '</motion.div>' + cnt.substring(lastDiv + 6);
      }
      
      // Look for key structural elements to add stagger effects
      cnt = cnt.replace(/<main className="/g, '<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="');
      cnt = cnt.replace(/<\/main>/g, '</motion.main>');
      
      fs.writeFileSync(fp, cnt);
    }
  }
});
console.log('Framer motion integrated across all pages.');
