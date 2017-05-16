module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Users = Models.Users;
    var User = Models.User;

    var updateOne = function(req, res) {
        User.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(user) {
                user.save({
                        name: req.body.name || user.get('name'),
                        email: req.body.email || user.get('email')
                    })
                    .then(function() {
                        res.json({ error: false, data: { message: 'User details updated' } });
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
        one: updateOne
    };
})();