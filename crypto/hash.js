const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('Hello, world!'); 
// 6CD3556DEB0DA54BCA060B4C39479839
hash.update('Hello, nodejs!');
// 3F71594B0E079ECFB18AC06619BEF27D

hash.update('MR.Qiu');

var r = hash.digest('hex');
console.log(`md5 hash: ${r}`); // 7e1977739c748beac0c0fd14fd26a544
