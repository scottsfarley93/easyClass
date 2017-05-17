module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Media = Models.Media;
    var Medias = Models.Medias;

    var updateOne = function(req, res) {
        Media.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(media) {
                media.save({
                        URI: req.body.uri || project.get('URI')
                    })
                    .then(function() {
                        res.json({ error: false, data: { message: 'Media URI updated' } });
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