module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Class = Models.Class;
    var Classes = Models.Classes;

    var deleteAll = function(req, res) {
        res.status(401).json({ error: true, data: { message: "Unauthorized." } });
    };

    var deleteOne = function(req, res) {
        Class.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(c) {
                c.destroy()
                    .then(function() {
                        res.json({ error: true, data: { message: 'Class successfully deleted' } });
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