module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Users = Models.Users;
    var User = Models.User;

    var deleteAll = function(req, res) {
        res.status(401).json({ error: true, data: { message: "Unauthorized." } });
    };

    var deleteOne = function(req, res) {
        User.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(user) {
                user.destroy()
                    .then(function() {
                        res.json({ error: true, data: { message: 'User successfully deleted' } });
                    })
                    .catch(function(err) {
                        res.status(500).json({ error: true, data: { message: err.message } });
                    });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        all: deleteAll,
        one: deleteOne
    };
})();