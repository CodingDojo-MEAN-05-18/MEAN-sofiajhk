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

// setting up server
var server = app.listen(8000)

// setting up socket.io
var io = require('socket.io')(server);
var counter = 0;

// 2. when socket connection is made, triggers server's connection listener to run
io.on('connection', function(socket){
    // 3. server will emit message 'connected' to client 
    socket.emit('connected', {msg: 'socket connection has been made!'});

    // 6. server's 'epic_button' listener is triggered and emits updated count to client-side
    socket.on('epic_button', function(){
        // io.emit emits to ALL clients
        io.emit('update_count', ++counter);
    });

    // 9. server's 'reset_button' listener is tirggered and emits updated count (0) to client-side
    socket.on('reset_button', function(){
        counter = 0;
        io.emit('reset_count', counter);
    });

});



// root route that renders index.ejs view
app.get('/', function(req, res){
    res.render('index');
});

// NO LONGER NEED THIS BECAUSE OF LINE 24!
// tell the express app to listen on port 8000, always put this at the end of your server.js 
//app.listen(8000, function() {
//    console.log("listening on port 8000");
//  })