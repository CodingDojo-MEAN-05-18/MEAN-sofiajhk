// load and store express module in variable express
var express = require("express");
// invoke express and store in variable app
var app = express();


// tells our server to use the "/static" folder for static content (html/css/js)
// navigating to route route ('/') automatically serves index.html file
app.use(express.static(__dirname + "/static"));

// tells express we are going to use ejs
app.set('views', __dirname + '/views');
// sets view engine itself so express knows we are using ejs
app.set('view engine', 'ejs');

// new route to render ejs view
app.get('/cars', function(request, response){
    console.log("rendering cars ejs file")
    response.render('cars')
})

app.get('/cats', function(request, response){
    console.log("rendering cats ejs file")
    response.render('cats')
})

app.get('/cars/new', function(request, response){
    console.log("rendering form ejs file")
    response.render('form')
})

// new routes so that when you click on cats image, corresponding data is rendered
// use hard-coding to load cat's info since we have not worked with databases yet!
app.get('/cat1/info', function(request, response){
    var cat_data = {
        name: "Purrla",
        birthday: "11/15/2009",
        toys: ['mouse squishy', 'sock', 'yarn']
    };
    response.render('details', {details: cat_data});
})

app.get('/cat2/info', function(request, response){
    var cat_data = {
        name: "Mr. Cuddles",
        birthday: "07/29/2015",
        toys: ['anything he can nibble on']
    };
    response.render('details', {details: cat_data});
})

app.get('/cat3/info', function(request, response){
    var cat_data = {
        name: "Pebbles",
        birthday: "05/01/2011",
        toys: ['bottle cap', 'hair tie', 'tennis ball']
    };
    response.render('details', {details: cat_data});
})


// tell the express app to listen on port 8000, always put this at the end of your server.js 
app.listen(8000, function() {
  console.log("listening on port 8000");
})
