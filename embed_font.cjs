const fs = require('fs');
try {
  const font = fs.readFileSync('AddisonBrother.ttf');
  const base64 = font.toString('base64');
  let html = fs.readFileSync('index.html', 'utf8');
  html = html.replace("url('./AddisonBrother.ttf')", "url('data:font/truetype;charset=utf-8;base64," + base64 + "')");
  fs.writeFileSync('index.html', html);
  console.log('Font embedded successfully.');
} catch (e) {
  console.error(e);
  process.exit(1);
}
