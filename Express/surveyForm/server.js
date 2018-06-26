// require express, body-parser, session module
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'thisIsSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// so server can server static content
app.use(express.static(path.join(__dirname, './static')));

// setting up ejs and views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route that renders index.ejs view
app.get('/', function(req, res){
    res.render('index');
});

// route to process data from form and display on results page
app.post('/result', function(req, res){
    req.session.data = req.body;
    var data = req.session.data;
    console.log('POST INFO', req.session.data);
    res.render('result', { data });
});

// close session and redirect to root route
app.post('/reset', function(req,res){
    req.session.destroy();
    console.log('session is closeed')
    res.redirect('/')
})

// tell the express app to listen on port 8000, always put this at the end of your server.js 
app.listen(8000, function() {
    console.log("listening on port 8000");
  })