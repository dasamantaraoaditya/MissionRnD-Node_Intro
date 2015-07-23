var fs = require('fs');

var str = "Hello, World!";

fs.writeFileSync("..\\data\\contact.json", str);

var str2 = fs.readFileSync("contact.json");

console.log(str2);

str2 = fs.readFileSync("contact.json","utf8");

console.log(str2);
