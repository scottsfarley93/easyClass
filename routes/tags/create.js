module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Tag = Models.Tag;

    var addOne = function(req, res) {
        Tag.forge({
                UserID: req.body.UserID,
                classID: req.body.classID,
                projectID: req.body.projectID
            })
            .save()
            .then(function(tag) {
                res.json({ error: false, data: { id: tag.get('') } });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        one: addOne
    };
})();