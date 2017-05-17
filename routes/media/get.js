module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Media = Models.Media;
    var Medias = Models.MediaCollection;

    var getAll = function(req, res) {
        Medias.forge()
            .fetch()
            .then(function(collection) {
                res.json({ error: false, data: collection.toJSON() });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    };

    var getOne = function(req, res) {
        Media.forge({ id: req.params.id })
            .fetch()
            .then(function(media) {
                if (!media) {
                    res.status(404).json({ error: true, data: {} });
                } else {
                    res.json({ error: false, data: media.toJSON() });
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