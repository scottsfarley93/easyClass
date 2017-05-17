module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Artifact = Models.Artifact;
    var Artifacts = Models.Artifacts;

    var updateOne = function(req, res) {
        Artifact.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(artifact) {
                artifact.save({
                        Body: req.body.body || project.get('Body'),
                        Aux: req.body.aux || project.get('Aux'),
                        layout: req.body.layout || project.get('layout')
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