const mongoose = require('mongoose');
const personController = require("../controllers/persons.js");

module.exports = function(app){
    // set root route to load all persons
    app.get('/', personController.index);

    // route that creates person through name parameter in URL
    app.get('/new/:name', personController.create);

    // route that finds a specific person through name parameter in URL
    app.get('/:name', personController.find);

    // route that removes person from database
    app.get('/remove/:name', personController.delete);
}