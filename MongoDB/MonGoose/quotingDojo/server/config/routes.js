const mongoose = require('mongoose');
const quoteController = require("../controllers/quotes.js");


module.exports = function(app){
    // set root route to render index.ejs
    app.get('/', quoteController.index);

    // route that renders all quotes in db to quotes.ejs
    app.get('/quotes', quoteController.showQuotes);

    // route to save quote to db from form 
    app.post('/quotes', quoteController.newQuote);    
};
