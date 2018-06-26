// load and store express module in variable express
var express = require("express");
// invoke express and store in variable app
var app = express();


// tells our server to use the "/static" folder for static content (html/css/js)
app.use(express.static(__dirname + "/static"));

// navigating to route route ('/') automatically serves index.html file

// tell the express app to listen on port 8000, always put this at the end of your server.js 
app.listen(8000, function() {
  console.log("listening on port 8000");
})
