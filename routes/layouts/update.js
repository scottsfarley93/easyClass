module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Layout = Models.Layout;
    var Layouts = Models.Layouts;

    var updateOne = function(req, res) {
        Layout.forge({ id: req.params.id })
            .fetch({ require: true })
            .then(function(layout) {
                layout.save({
                        title: req.body.title || project.get('title'),
                        aux: req.body.aux || project.get('aux')
                    })
                    .then(function() {
                        res.json({ error: false, data: { message: 'Layout details updated' } });
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