console.log("a");

var bFile = require("./b");

var a = {
    b : 1
}

var d = a;

a.b =2;


a = {
    b : 1
}

console.log("A",a);
console.log("D",d);


module.exports = 100;