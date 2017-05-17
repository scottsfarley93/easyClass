module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Media = Models.Media;
    var Medias = Models.MediaCollection;

    var deleteAll = function(req, res) {
        res.status(401).json({ error: true, data: { message: "Unauthorized." } });
    };

    var deleteOne = function(req, res) {
        Media.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(media) {
                media.destroy()
                    .then(function() {
                        res.json({ error: true, data: { message: 'Media successfully deleted' } });
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