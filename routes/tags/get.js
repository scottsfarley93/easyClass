module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Tags = Models.Tags;
    var Tag = Models.Tag;

    var getAll = function(req, res) {
        Tags.forge()
            .fetch()
            .then(function(collection) {
                res.json({ error: false, data: collection.toJSON() });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    };

    var getOne = function(req, res) {
        Tag.forge({ id: req.params.id })
            .fetch()
            .then(function(tag) {
                if (!tag) {
                    res.status(404).json({ error: true, data: {} });
                } else {
                    res.json({ error: false, data: tag.toJSON() });
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