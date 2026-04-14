const fs = require('fs');

function htmlToJsx(html) {
    let jsx = html;
    
    // Extract body content
    const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        jsx = bodyMatch[1];
    }
    
    // Remove script tags
    jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Class to className
    jsx = jsx.replace(/class=/g, 'className=');
    
    // for to htmlFor
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    // Self-closing tags
    const selfClosing = ['img', 'input', 'br', 'hr', 'path', 'circle', 'line', 'polygon', 'polyline', 'rect', 'ellipse'];
    selfClosing.forEach(tag => {
        const regex = new RegExp('<' + tag + '([^>]*?)(?<!/)>', 'g');
        jsx = jsx.replace(regex, '<' + tag + '$1 />');
    });

    // Handle SVG and other dash attributes
    const dashAttrs = [
        'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray', 'stroke-dashoffset',
        'stroke-miterlimit', 'fill-rule', 'clip-rule', 'color-interpolation-filters',
        'font-family', 'font-size', 'font-weight', 'text-anchor', 'xml:space'
    ];
    dashAttrs.forEach(attr => {
        const camel = attr.replace(/-([a-z])/g, g => g[1].toUpperCase()).replace(':', '');
        const regex = new RegExp(attr + '=', 'g');
        jsx = jsx.replace(regex, camel + '=');
    });

    // Basic inline style conversion (very rudimentary, covers style="...")
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
        const styleObj = {};
        styleString.split(';').forEach(rule => {
            if (!rule.trim()) return;
            const parts = rule.split(':');
            if (parts.length >= 2) {
                let key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                let value = parts.slice(1).join(':').trim();
                styleObj[key] = value;
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Fix comments: <!-- --> to {/* */}
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    return jsx;
}

['video_analysis.html', 'dashboard.html'].forEach(file => {
    const html = fs.readFileSync(file, 'utf8');
    const jsxContent = htmlToJsx(html);
    fs.writeFileSync(file.replace('.html', '.jsx'), jsxContent);
});

console.log('Done');
