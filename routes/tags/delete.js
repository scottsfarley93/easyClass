module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Tags = Models.Tags;
    var Tag = Models.Tag;

    var deleteAll = function(req, res) {
        res.status(401).json({ error: true, data: { message: "Unauthorized." } });
    };

    var deleteOne = function(req, res) {
        Tag.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(tag) {
                tag.destroy()
                    .then(function() {
                        res.json({ error: true, data: { message: 'Tag successfully deleted' } });
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