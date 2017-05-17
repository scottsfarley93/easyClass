module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Media = Models.Media;

    var addOne = function(req, res) {
        Media.forge({
                ArtifactID: req.body.ArtifactID,
                URI: req.body.URI
            })
            .save()
            .then(function(media) {
                res.json({ error: false, data: { id: media.get('') } });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        one: addOne
    };
})();