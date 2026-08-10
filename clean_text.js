const fs = require('fs');

const xmlContent = fs.readFileSync('c:/Users/Tran Gia Thieu/.gemini/antigravity-ide/scratch/quychien-landing/luat_choi.txt', 'utf8');

// Strip all HTML/XML-like tags
const cleanText = xmlContent.replace(/<[^>]+>/g, ' ');

// Remove duplicate whitespace
const formattedText = cleanText.replace(/\s+/g, ' ').trim();

fs.writeFileSync('c:/Users/Tran Gia Thieu/.gemini/antigravity-ide/scratch/quychien-landing/luat_choi_clean.txt', formattedText, 'utf8');

console.log('Cleaned text saved! Length: ' + formattedText.length);
