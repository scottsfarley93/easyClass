module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Artifacts = Models.Artifacts;
    var Artifact = Models.Artifact;

    var deleteAll = function(req, res) {
        res.status(401).json({ error: true, data: { message: "Unauthorized." } });
    };

    var deleteOne = function(req, res) {
        Artifact.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(artifact) {
                artifact.destroy()
                    .then(function() {
                        res.json({ error: true, data: { message: 'Artifact successfully deleted' } });
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