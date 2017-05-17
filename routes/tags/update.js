module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Tags = Models.Tags;
    var Tag = Models.Tag;

    var updateOne = function(req, res) {
        Tag.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(tag) {
                tag.save({
                        UserID: req.body.UserID || user.get('UserID'),
                        classID: req.body.classID || user.get('classID'),
                        projectID: req.body.projectID || user.get('projectID')
                    })
                    .then(function() {
                        res.json({ error: false, data: { message: 'Tag details updated' } });
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