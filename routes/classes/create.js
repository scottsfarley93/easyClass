module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Class = Models.Class;

    var addOne = function(req, res) {
        Class.forge({
                ArtifactID: req.body.ArtifactID,
                URI: req.body.URI
            })
            .save()
            .then(function(c) {
                res.json({ error: false, data: { id: c.get('') } });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        one: addOne
    };
})();