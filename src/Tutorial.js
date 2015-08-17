//This tutorial shows you how to use node.js file APIs

//First, require the fs module.
var fs = require('fs');

var str = "Hello, World!";

// Lets write the hello world string to contact.json file
fs.writeFileSync("..\\data\\contact.json", str);

//Lets read the file back and print it.
// What do you see? Do you get back "Hello World!" or some thing else?

var str2 = fs.readFileSync("..\\data\\contact.json");

console.log(str2);

//Lets read the file back specifying utf8 as the encoding and print it.
// What do you see? Do you get back "Hello World!" or some thing else?

str2 = fs.readFileSync("..\\data\\contact.json","utf8");

console.log(str2);
