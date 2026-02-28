const fs = require('fs');
const path = require('path');

const replacements = {
    'text-button-text/70': 'text-button-text/90',
    'text-button-text/60': 'text-button-text/80',
    'text-button-text/50': 'text-button-text/70',
    'text-button-text/40': 'text-button-text/60',
    'bg-secondary/50': 'bg-white',
    'bg-secondary/80': 'bg-primary/5',
    'border-primary/10': 'border-primary/30',
    'border-primary/5': 'border-primary/20',
};

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));
let totalReplaced = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'g');
        if (regex.test(content)) {
            content = content.replace(regex, value);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
        totalReplaced++;
    }
});

console.log(`Replacement complete. Modified ${totalReplaced} files.`);
