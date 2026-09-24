import fs from 'fs';

const tailwindConfigPath = './tailwind.config.js';
const content = fs.readFileSync(tailwindConfigPath, 'utf8');

// Extract the colors object
const match = content.match(/colors:\s*{([\s\S]*?)},[\s]*borderRadius/);
if (!match) {
  console.log('Could not find colors');
  process.exit(1);
}

const colorsString = match[1];
const colorLines = colorsString.split(',\n').map(line => line.trim()).filter(line => line);

let cssVariablesDark = '';
let cssVariablesLight = '';
let newColorsObject = '';

colorLines.forEach(line => {
  const parts = line.split(':');
  if (parts.length === 2) {
    const key = parts[0].trim().replace(/"/g, '');
    const value = parts[1].trim().replace(/"/g, '');
    
    // For light mode, let's just do a basic inversion for background and text if we can guess, 
    // or just leave it slightly different so we can see a change.
    // Actually, I'll just keep the original as .dark and create a dummy light mode
    
    cssVariablesDark += `  --color-${key}: ${value};\n`;
    
    // basic inversion logic for light mode
    let lightValue = value;
    if (key === 'background' || key === 'surface' || key === 'surface-dim') {
      lightValue = '#ffffff';
    } else if (key === 'on-surface' || key === 'on-background' || key === 'primary' || key === 'tertiary') {
      lightValue = '#121317';
    } else if (value.toLowerCase() === '#ffffff') {
      lightValue = '#000000';
    } else if (value.toLowerCase() === '#121317') {
      lightValue = '#ffffff';
    }
    cssVariablesLight += `  --color-${key}: ${lightValue};\n`;
    
    newColorsObject += `        "${key}": "var(--color-${key})",\n`;
  }
});

console.log('/* Add to index.css */');
console.log(':root {\n' + cssVariablesLight + '}');
console.log('.dark {\n' + cssVariablesDark + '}');
console.log('\n/* New colors object for tailwind.config.js */');
console.log(newColorsObject);
