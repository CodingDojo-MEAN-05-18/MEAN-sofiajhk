const mongoose = require('mongoose');
const { Schema } = mongoose;

// create mongoose schemas
var QuoteSchema = new Schema({
    name: {type: String, required: true, minlength: 1},
    quote: {type: String, required: true, minlength: 5},
});

module.exports = mongoose.model('Quote', QuoteSchema);