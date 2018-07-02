const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
    index(req, res){
        Person.find()
            .then( data => {
                console.log("List of people received!");
                res.json(data);
            })
            .catch( error => {
                console.log("ERROR:", error);
                res.json(error);
            });
    },

    create(req, res){
        Person.create(req.params)
            .then( person => {
                console.log("Added new person to db! Name:", person.name);
                res.json(person);
            })
            .catch( error => {
                console.log("ERROR:", error);
                res.json(error);
            });
    },

    find(req, res){
        Person.findOne(req.params)
            .then( person => {
                console.log("Found person:", person.name);
                res.json(person);
            })
            .catch( error => {
                console.log("ERROR:", error);
                res.json(error);
            });
    },

    delete(req, res){
        Person.remove(req.params)
            .then( data => {
                console.log("Succesfully removed person");
                res.json(data);
            })
            .catch( error => {
                console.log("ERROR:", error);
                res.json(error);
            });
    }
}