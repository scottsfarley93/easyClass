module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Layout = Models.Layout;
    var Layouts = Models.Layouts;

    var deleteAll = function(req, res) {
        res.status(401).json({ error: true, data: { message: "Unauthorized." } });
    };

    var deleteOne = function(req, res) {
        Layout.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(layout) {
                layout.destroy()
                    .then(function() {
                        res.json({ error: true, data: { message: 'Layout successfully deleted' } });
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