const fs = require('fs');
let c = fs.readFileSync('profile.html', 'utf8');
c = c.replace(/'\$\{t\('([^']+)'\)\}'/g, "t('$1')");
fs.writeFileSync('profile.html', c);
console.log("Replaced substrings.");
