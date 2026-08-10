const fs = require('fs');
const content = fs.readFileSync('c:/Users/Tran Gia Thieu/.gemini/antigravity-ide/scratch/quychien-landing/luat_choi_clean.txt', 'utf8');

function search(keyword, before = 100, after = 1500) {
  let index = content.toLowerCase().indexOf(keyword.toLowerCase());
  if (index !== -1) {
    console.log(`=== "${keyword}" ===`);
    console.log(content.slice(Math.max(0, index - before), Math.min(content.length, index + after)));
    console.log('------------------------------------------------------\n');
  } else {
    console.log(`NOT FOUND: "${keyword}"`);
  }
}

search('Thẻ Event');
search('Tắc đường nội địa');
search('Kiểm dịch hàng hóa');
search('Mất chứng từ nhập');
search('Thuế bất ngờ');
