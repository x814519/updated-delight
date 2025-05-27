const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'src/index.js',
  'src/App.js',
  'public/index.html',
  'package.json',
  'vercel.json'
];

console.log('Verifying required files...');
console.log('Current directory:', process.cwd());

let allFilesExist = true;

requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(process.cwd(), file));
  console.log(`${file}: ${exists ? '✓' : '✗'}`);
  if (!exists) {
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.error('Some required files are missing!');
  process.exit(1);
}

console.log('All required files present.');
console.log('\nContents of src directory:');
fs.readdirSync(path.join(process.cwd(), 'src')).forEach(file => {
  console.log(`- ${file}`);
}); 