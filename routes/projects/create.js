module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Project = Models.Project;

    var addOne = function(req, res) {
        Project.forge({
                name: req.body.projectName,
                description: req.body.projectDescription,
                owner: req.body.ownerID
            })
            .save()
            .then(function(project) {
                res.json({ error: false, data: { id: project.get('') } });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        one: addOne
    };
})();