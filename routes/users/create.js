module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var User = Models.User;

    var addOne = function(req, res) {
        User.forge({
                FirstName: req.body.firstName,
                LastName: req.body.lastName,
                Email: req.body.email,
                password: req.body.password
            })
            .save()
            .then(function(user) {
                res.json({ error: false, data: { id: user.get('') } });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        one: addOne
    };
})();