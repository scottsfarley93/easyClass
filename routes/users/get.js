module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Users = Models.Users;
    var User = Models.User;

    var getAll = function(req, res) {
        Users.forge()
            .fetch()
            .then(function(collection) {
                res.json({ error: false, data: collection.toJSON() });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    };

    var getOne = function(req, res) {
        User.forge({ id: req.params.id })
            .fetch()
            .then(function(user) {
                if (!user) {
                    res.status(404).json({ error: true, data: {} });
                } else {
                    res.json({ error: false, data: user.toJSON() });
                }
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        all: getAll,
        one: getOne
    };
})();