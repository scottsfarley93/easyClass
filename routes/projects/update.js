module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Projects = Models.Projects;
    var Project = Models.Project;

    var updateOne = function(req, res) {
        Project.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(project) {
                project.save({
                        name: req.body.name || project.get('name'),
                        description: req.body.description || project.get('email'),
                        owner: req.body.owner || project.get('owner')
                    })
                    .then(function() {
                        res.json({ error: false, data: { message: 'Project details updated' } });
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