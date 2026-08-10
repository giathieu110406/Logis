const fs = require('fs');
const content = fs.readFileSync('c:/Users/Tran Gia Thieu/.gemini/antigravity-ide/scratch/quychien-landing/luat_choi_clean.txt', 'utf8');

function search(keyword, context = 1000) {
  let index = 0;
  console.log(`\n======================================================`);
  console.log(`SEARCH RESULTS FOR: "${keyword}"`);
  console.log(`======================================================`);
  let count = 0;
  while ((index = content.toLowerCase().indexOf(keyword.toLowerCase(), index)) !== -1 && count < 10) {
    const start = Math.max(0, index - 200);
    const end = Math.min(content.length, index + context);
    console.log(`[Match #${count+1} at index ${index}]:`);
    console.log(content.slice(start, end));
    console.log('------------------------------------------------------');
    index += keyword.length;
    count++;
  }
}

// Search for different cards lists or descriptions
search('Danh sách đầy đủ');
search('Sự Kiện');
search('phương tiện');
