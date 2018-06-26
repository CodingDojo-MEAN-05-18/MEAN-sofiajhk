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

// 2. when socket connection is made, triggers server's connection listener to run
io.on('connection', function(socket){
    // 3. server will emit message 'connected' to client 
    socket.emit('connected', {msg: 'socket connection has been made!'});

    // 6. server's 'posting_form' listener is triggered that organizes emitted info 
    // to form single message thats sent through even called 'updated_message'
    // also emits an even called 'random_number' w/ random # b/w 1-1000
    socket.on('posting_form', function(data){
        // generate a random number b/w 1-1000 (NOT INCLUDING 0)
        var rand_num = Math.floor((Math.random() * 1000) +1);

        // emit data form form back to client
        socket.emit('updated_message', {info: data});
        // emit random number back to client
        socket.emit('random_number', {num: rand_num});
    });
});



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
//app.listen(8000, function() {
//    console.log("listening on port 8000");
//  })