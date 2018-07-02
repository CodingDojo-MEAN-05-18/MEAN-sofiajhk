// require express
var express = require('express');
// create express app
var app = express();

// require all the other appropriate node modules
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// setting up server
var server = app.listen(8000)

// set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));

// connect mongoose to mongoDB (quotingDojo is our DB name)
mongoose.connect('mongodb://localhost/quotingDojo');

// use native promises
mongoose.Promise = global.Promise;

// create mongoose schemas
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    quote:{type: String, required: true, minlength: 5},
});

var Quote = mongoose.model('Quote', QuoteSchema);

// so server can server static content
app.use(express.static(path.join(__dirname, './static')));

// setting up ejs and views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// set root route to render index.ejs
app.get('/', function(req, res){
    res.render('index');
});

// route that renders all quotes in db to quotes.ejs
app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        console.log("Quotes:", quotes);
        res.render('quotes', {context: quotes});
    });
});

// route to save quote to db from form 
app.post('/quotes', function(req, res){
    console.log("POST DATA", req.body);
    // create variable to save to db
    var quote = new Quote({
        name: req.body.name,
        quote: req.body.quote,
    });
    // save quote to db
    quote.save(function(err){
        if(err){
            console.log("there was an error:", err);
            res.redirect('/');
        }
        else{
            console.log("succesfully added quote!");
            res.redirect('/quotes');
        }
    });
});