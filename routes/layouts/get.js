module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Layout = Models.Layout;
    var Layouts = Models.Layouts;

    var getAll = function(req, res) {
        Layouts.forge()
            .fetch()
            .then(function(collection) {
                res.json({ error: false, data: collection.toJSON() });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    };

    var getOne = function(req, res) {
        Layout.forge({ id: req.params.id })
            .fetch()
            .then(function(layout) {
                if (!layout) {
                    res.status(404).json({ error: true, data: {} });
                } else {
                    res.json({ error: false, data: layout.toJSON() });
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