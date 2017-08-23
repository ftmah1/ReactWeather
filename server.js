var express = require('express');

var app = express();

app.use(express.static('public'));  //helps to add functionality to the express module

app.listen(3000, function() {
  console.log("Server on port 3000");  
});
