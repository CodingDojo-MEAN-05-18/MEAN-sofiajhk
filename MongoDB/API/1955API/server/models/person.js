const mongoose = require('mongoose');
const { Schema } = mongoose;

// create schemas needed for app
const personSchema = new Schema({
    name: {type: String, required: true}
}, {timestamp: true});

module.exports = mongoose.model('Person', personSchema);