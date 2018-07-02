// require express
var express = require('express');
// create express app
var app = express();

// require all the other appropriate node modules
var bodyParser = require('body-parser');
var path = require('path');

// setting up server
var server = app.listen(8000)

// set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));


// so server can server static content
app.use(express.static(path.join(__dirname, './static')));

// setting up ejs and views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// require database file!
require('./server/config/mongoose.js')

// require routes.js so you can access the routes.js file
require('./server/config/routes.js')(app);
