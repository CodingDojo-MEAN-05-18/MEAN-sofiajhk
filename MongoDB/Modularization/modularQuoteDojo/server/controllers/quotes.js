const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');


module.exports = {
    // set root route to render index.ejs
    index(req,res){
        res.render('index');
    },

    // route to save quote to db from form 
    newQuote(req, res){
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
    },

    // route that renders all quotes in db to quotes.ejs
    showQuotes(req, res){
        Quote.find({}, function(err, quotes){
            console.log("Quotes:", quotes);
            res.render('quotes', {context: quotes});
        });
    }
}