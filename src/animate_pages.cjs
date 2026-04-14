const fs = require('fs');

let dash = fs.readFileSync('src/pages/Dashboard.jsx', 'utf8');
dash = dash.replace(/className=\"glass-card/g, 'className="glass-card reveal');
dash = dash.replace(/className=\"grid grid-cols-12 gap-6\"/g, 'className="grid grid-cols-12 gap-6 reveal"');
dash = dash.replace(/className=\"space-y-4\"/g, 'className="space-y-4 reveal"');
// Added to avoid nested reveal causing issues or just a lot of reveals
fs.writeFileSync('src/pages/Dashboard.jsx', dash);

let va = fs.readFileSync('src/pages/VideoAnalysis.jsx', 'utf8');
va = va.replace(/className=\"bg-\[#121118\] rounded-2xl/g, 'className="bg-[#121118] rounded-2xl reveal');
va = va.replace(/className=\"flex-1 bg-surface-container\/30/g, 'className="flex-1 bg-surface-container/30 reveal');
va = va.replace(/className=\"media-control-bar/g, 'className="media-control-bar reveal');
va = va.replace(/className=\"bg-surface-container-low\/50 backdrop-blur-md rounded-2xl/g, 'className="bg-surface-container-low/50 backdrop-blur-md rounded-2xl reveal');
va = va.replace(/className=\"relative aspect-video rounded-2xl/g, 'className="relative aspect-video rounded-2xl reveal');
fs.writeFileSync('src/pages/VideoAnalysis.jsx', va);

console.log('Animations added');
