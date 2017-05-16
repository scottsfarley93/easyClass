//load the dependencies
var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

// application routing
var router = express.Router();

//create the server
var app = express();



// define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var Bookshelf = require("./db")



var Schema = require('./schema');
var sequence = require('when/sequence');
var _ = require('lodash');




router.route("/")
    .get(function(req, res) {
        res.send("text");
    })


router.route('/users')
    // fetch all users
    .get(function(req, res) {
        var get = require('./routes/users/get.js');
        get.all(req, res);
    })
    // create a user
    .post(function(req, res) {
        var create = require("./routes/users/create.js");
        create.one(req, res);
    });



router.route('/users/:id')
    // fetch user
    .get(function(req, res) {
        var get = require('./routes/users/get.js');
        get.one(req, res);
    })
    // update user details
    .put(function(req, res) {
        var update = require("./routes/users/update.js");
        update.one(req, res);
    })
    // delete a user
    .delete(function(req, res) {
        var del = require("./routes/users/delete.js");
        del.one(req, res);
    });




app.use('/api', router);

app.listen(3000, function() {
    console.log("listening on 3000")
})