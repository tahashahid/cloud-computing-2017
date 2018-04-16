console.log("app");

var aFile = require("./a.js");
var bFile = require("./b.js");



console.log(aFile)


var fs = require('fs');
fs.readFile("./mytext.txt", 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ');
  console.log(data)

  var users  = data.split("|");

  users.forEach(function(data){
      console.log(data);
  })

});