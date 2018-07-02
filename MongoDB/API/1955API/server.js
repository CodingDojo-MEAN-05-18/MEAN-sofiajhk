// require express
const express = require('express');
// create express app
const app = express();

// require all the other appropriate node modules
const bodyParser = require('body-parser');

// setting up server
const server = app.listen(8000)

// set up body-parser to read JSON
app.use(bodyParser.json());
// set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));

// require database file!
require('./server/config/mongoose')

// require routes.js so you can access the routes.js file
require('./server/config/routes')(app);
