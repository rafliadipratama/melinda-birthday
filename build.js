const postcss = require('postcss');
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'src', 'input.css');
const outputDir = path.join(__dirname, 'dist');
const outputFile = path.join(outputDir, 'output.css');

// Create dist directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read input CSS
const css = fs.readFileSync(inputFile, 'utf8');

// Process with PostCSS
postcss([tailwindcss, autoprefixer])
  .process(css, { from: inputFile, to: outputFile })
  .then(result => {
    fs.writeFileSync(outputFile, result.css);
    console.log('✅ Tailwind CSS built successfully!');
    console.log(`📄 Output: ${outputFile}`);
  })
  .catch(error => {
    console.error('❌ Build failed:', error);
    process.exit(1);
  });
