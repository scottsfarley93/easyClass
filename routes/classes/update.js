module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Class = Models.Class;
    var Classes = Models.Classes;

    var updateOne = function(req, res) {
        Class.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(c) {
                c.save({
                        classText: req.body.classText || c.get('classText'),
                        properties: req.body.properties || project.get('properties')
                    })
                    .then(function() {
                        res.json({ error: false, data: { message: 'Class details updated' } });
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