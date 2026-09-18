const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('glass card art-card')) {
        // Regex to match the <p>...</p> right after </h3> inside an art-card.
        // It looks like: <h3>...</h3><p>...</p>
        const updated = content.replace(/(<h3>.*?<\/h3>)<p>.*?<\/p>/g, '$1');
        if (updated !== content) {
          fs.writeFileSync(fullPath, updated);
          console.log('Updated', fullPath);
        }
      }
    }
  }
}

processDir('/home/sct/dd/my0/nextjs-website/content/pages');
