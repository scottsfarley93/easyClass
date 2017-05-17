module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Artifact = Models.Artifact;

    var addOne = function(req, res) {
        Artifact.forge({
                ProjectID: req.body.ProjectID,
                Body: req.body.body,
                Aux: req.body.aux,
                layout: req.body.layoutID
            })
            .save()
            .then(function(artifact) {
                res.json({ error: false, data: { id: artifact.get('') } });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        one: addOne
    };
})();