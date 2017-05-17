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


router.route('/projects')
    // fetch all users
    .get(function(req, res) {
        var get = require('./routes/projects/get.js');
        get.all(req, res);
    })
    // create a user
    .post(function(req, res) {
        var create = require("./routes/projects/create.js");
        create.one(req, res);
    });

router.route('/projects/:id')
    // fetch user
    .get(function(req, res) {
        var get = require('./routes/projects/get.js');
        get.one(req, res);
    })
    // update user details
    .put(function(req, res) {
        var update = require("./routes/projects/update.js");
        update.one(req, res);
    })
    // delete a user
    .delete(function(req, res) {
        var del = require("./routes/projects/delete.js");
        del.one(req, res);
    });

router.route('/tags')
    // fetch all users
    .get(function(req, res) {
        var get = require('./routes/tags/get.js');
        get.all(req, res);
    })
    // create a user
    .post(function(req, res) {
        var create = require("./routes/tags/create.js");
        create.one(req, res);
    });



router.route('/tags/:id')
    // fetch user
    .get(function(req, res) {
        var get = require('./routes/tags/get.js');
        get.one(req, res);
    })
    // update user details
    .put(function(req, res) {
        var update = require("./routes/tags/update.js");
        update.one(req, res);
    })
    // delete a user
    .delete(function(req, res) {
        var del = require("./routes/tags/delete.js");
        del.one(req, res);
    });

router.route('/media')
    // fetch all users
    .get(function(req, res) {
        var get = require('./routes/media/get.js');
        get.all(req, res);
    })
    // create a user
    .post(function(req, res) {
        var create = require("./routes/media/create.js");
        create.one(req, res);
    });



router.route('/media/:id')
    // fetch user
    .get(function(req, res) {
        var get = require('./routes/media/get.js');
        get.one(req, res);
    })
    // update user details
    .put(function(req, res) {
        var update = require("./routes/media/update.js");
        update.one(req, res);
    })
    // delete a user
    .delete(function(req, res) {
        var del = require("./routes/media/delete.js");
        del.one(req, res);
    });



router.route('/layouts')
    // fetch all users
    .get(function(req, res) {
        var get = require('./routes/layouts/get.js');
        get.all(req, res);
    })
    // create a user
    .post(function(req, res) {
        var create = require("./routes/layouts/create.js");
        create.one(req, res);
    });



router.route('/layouts/:id')
    // fetch user
    .get(function(req, res) {
        var get = require('./routes/layouts/get.js');
        get.one(req, res);
    })
    // update user details
    .put(function(req, res) {
        var update = require("./routes/layouts/update.js");
        update.one(req, res);
    })
    // delete a user
    .delete(function(req, res) {
        var del = require("./routes/layouts/delete.js");
        del.one(req, res);
    });

router.route('/classes')
    // fetch all users
    .get(function(req, res) {
        var get = require('./routes/classes/get.js');
        get.all(req, res);
    })
    // create a user
    .post(function(req, res) {
        var create = require("./routes/classes/create.js");
        create.one(req, res);
    });



router.route('/classes/:id')
    // fetch user
    .get(function(req, res) {
        var get = require('./routes/classes/get.js');
        get.one(req, res);
    })
    // update user details
    .put(function(req, res) {
        var update = require("./routes/classes/update.js");
        update.one(req, res);
    })
    // delete a user
    .delete(function(req, res) {
        var del = require("./routes/classes/delete.js");
        del.one(req, res);
    });


router.route('/artifacts')
    // fetch all users
    .get(function(req, res) {
        var get = require('./routes/artifacts/get.js');
        get.all(req, res);
    })
    // create a user
    .post(function(req, res) {
        var create = require("./routes/artifacts/create.js");
        create.one(req, res);
    });



router.route('/artifacts/:id')
    // fetch user
    .get(function(req, res) {
        var get = require('./routes/artifacts/get.js');
        get.one(req, res);
    })
    // update user details
    .put(function(req, res) {
        var update = require("./routes/artifacts/update.js");
        update.one(req, res);
    })
    // delete a user
    .delete(function(req, res) {
        var del = require("./routes/artifacts/delete.js");
        del.one(req, res);
    });

app.use('/api', router);

app.listen(3000, function() {
    console.log("listening on 3000")
})