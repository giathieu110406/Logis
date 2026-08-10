const fs = require('fs');
const content = fs.readFileSync('c:/Users/Tran Gia Thieu/.gemini/antigravity-ide/scratch/quychien-landing/luat_choi.txt', 'utf8');

function searchKeyword(keyword, contextChars = 1500) {
  let index = 0;
  console.log(`=== SEARCHING FOR: ${keyword} ===`);
  let count = 0;
  while ((index = content.indexOf(keyword, index)) !== -1 && count < 5) {
    console.log(`Match at index ${index}:`);
    const start = Math.max(0, index - 200);
    const end = Math.min(content.length, index + contextChars);
    console.log(content.slice(start, end));
    console.log('\n---------------------------------\n');
    index += keyword.length;
    count++;
  }
}

searchKeyword('Thẻ phương tiện');
searchKeyword('phương tiện');
