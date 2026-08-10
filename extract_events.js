const fs = require('fs');
const content = fs.readFileSync('c:/Users/Tran Gia Thieu/.gemini/antigravity-ide/scratch/quychien-landing/luat_choi_clean.txt', 'utf8');

const queries = [
  'Kho người nhận đầy',
  'Kiểm dịch hàng hóa',
  'Mất chứng từ nhập',
  'Mất vận đơn',
  'Thiếu thiết bị dỡ hàng',
  'Thuế bất ngờ',
  'Tranh chấp hợp đồng',
  'Tàu hỏng máy',
  'Tắc đường nội địa',
  'Đình công bốc dỡ',
  'Địa chỉ giao sai'
];

queries.forEach(q => {
  let index = content.toLowerCase().indexOf(q.toLowerCase());
  if (index !== -1) {
    console.log(`=== EVENT: "${q}" ===`);
    // Find paragraph boundaries
    const start = Math.max(0, index - 20);
    const end = Math.min(content.length, index + 350);
    console.log(content.slice(start, end).trim());
    console.log('------------------------------------------------------\n');
  } else {
    console.log(`XXX NOT FOUND: "${q}"`);
  }
});
