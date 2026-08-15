const fs = require('fs');
const src = fs.readFileSync('write_buy.py', 'utf8');
const startMarker = 'html = """';
const endMarker = '"""\n\nwith open';
const startIdx = src.indexOf(startMarker) + startMarker.length;
const endIdx = src.indexOf(endMarker);
if (startIdx > 0 && endIdx > 0) {
  const html = src.substring(startIdx, endIdx);
  fs.writeFileSync('buy.html', html, 'utf8');
  console.log('Wrote buy.html, bytes:', html.length, 'lines:', html.split('\n').length);
} else {
  console.log('Match failed, start:', startIdx, 'end:', endIdx);
}
