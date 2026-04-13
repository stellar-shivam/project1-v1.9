const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'pages');
fs.readdirSync(p).forEach(f => {
  if (f.endsWith('.jsx')) {
    let cnt = fs.readFileSync(path.join(p, f), 'utf-8');
    // React doesn't allow style=""
    cnt = cnt.replace(/style=""/g, "style={{}}");
    fs.writeFileSync(path.join(p, f), cnt);
  }
});
console.log('Fixed empty style strings');
