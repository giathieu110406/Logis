const fs = require('fs');
const content = fs.readFileSync('c:/Users/Tran Gia Thieu/.gemini/antigravity-ide/scratch/quychien-landing/luat_choi_clean.txt', 'utf8');

function searchAll(keyword) {
  let index = 0;
  console.log(`=== "${keyword}" ===`);
  while ((index = content.toLowerCase().indexOf(keyword.toLowerCase(), index)) !== -1) {
    console.log(`Index ${index}:`);
    console.log(content.slice(Math.max(0, index - 100), Math.min(content.length, index + 300)));
    index += keyword.length;
  }
}

searchAll('Cướp biển');
searchAll('Kênh đào tắc');
