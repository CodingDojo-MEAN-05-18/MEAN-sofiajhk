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

// set root route to render index.ejs
// counts # of times the root route ('/') has been viewed
app.get('/', function(req, res){
    if (!req.session.count){
        req.session.count = 1;
    }
    else{
        req.session.count += 1;
    }
    res.render('index', {req});
});

// another route that reloads pages and increments counter by 2
app.get('/plus2', function(req, res){
    if (!req.session.count){
        req.session.count = 1;
        // the redirect will add 1 and 1 more after page reloads
        res.redirect('/');
    }
    else {
        req.session.count += 1;
        res.redirect('/');
    }
});

// another route that resets the counter back to 1
app.get('/reset', function(req, res){
    req.session.count = null;
    res.redirect('/');
});


// tell the express app to listen on port 8000, always put this at the end of your server.js 
app.listen(8000, function() {
    console.log("listening on port 8000");
  })