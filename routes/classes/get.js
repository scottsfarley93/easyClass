module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Class = Models.Class;
    var Classes = Models.Classes;

    var getAll = function(req, res) {
        Classes.forge()
            .fetch()
            .then(function(collection) {
                res.json({ error: false, data: collection.toJSON() });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    };

    var getOne = function(req, res) {
        Class.forge({ id: req.params.id })
            .fetch({ withRelated: ['project'] })
            .then(function(c) {
                if (!c) {
                    res.status(404).json({ error: true, data: {} });
                } else {
                    res.json({ error: false, data: c.toJSON() });
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