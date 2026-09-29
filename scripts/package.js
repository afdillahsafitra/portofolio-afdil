// Build dist/portofolio-afdil.zip with only the files the website needs,
// ready to upload to the subdomain folder in cPanel File Manager.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const zipPath = path.join(dist, 'portofolio-afdil.zip');
const files = ['index.html', '.htaccess', 'assets'];

fs.mkdirSync(dist, { recursive: true });
fs.rmSync(zipPath, { force: true });
execFileSync('zip', ['-r', '-q', zipPath, ...files, '-x', '*.DS_Store'], { cwd: root, stdio: 'inherit' });
console.log(`Created ${path.relative(root, zipPath)}`);
