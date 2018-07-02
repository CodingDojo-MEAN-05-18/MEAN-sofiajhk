const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
// create regular expression to validate if you're reading a JS file
const reg = new RegExp('\\.js$', 'i')

const modelsPath = path.resolve('server', 'models');


// connect mongoose to mongoDB (quotingDojo is our DB name)
mongoose.connect('mongodb://localhost/quotingDojo');
mongoose.connection.on('connected', () => console.log('connected to mongodb'));

// use native promises
mongoose.Promise = global.Promise;

// use fs to read directory (if code from another file depends on what we're reading - MODELS - it may not be available yet, so make it available)
fs.readdirSync(modelsPath).forEach(file => {
    // make sure what we require is JS file by using RegExp to test it 
    if (reg.test(file)){
        // if file is a JS file, require it
        require(path.join(modelsPath, file));
    }
});