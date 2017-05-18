module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Projects = Models.Projects;
    var Project = Models.Project;

    var getAll = function(req, res) {
        Projects.forge()
            .fetch()
            .then(function(collection) {
                res.json({ error: false, data: collection.toJSON() });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    };

    var getOne = function(req, res) {
        Project.forge({ id: req.params.id })
            .fetch({ withRelated: ['tags', 'user'] })
            .then(function(project) {
                if (!project) {
                    res.status(404).json({ error: true, data: {} });
                } else {
                    res.json({ error: false, data: project.toJSON() });
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