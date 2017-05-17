module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Artifact = Models.Artifact;
    var Artifacts = Models.Artifacts;

    var getAll = function(req, res) {
        Artifacts.forge()
            .fetch()
            .then(function(collection) {
                res.json({ error: false, data: collection.toJSON() });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    };

    var getOne = function(req, res) {
        Artifact.forge({ id: req.params.id })
            .fetch()
            .then(function(artifact) {
                if (!artifact) {
                    res.status(404).json({ error: true, data: {} });
                } else {
                    res.json({ error: false, data: artifact.toJSON() });
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