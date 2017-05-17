module.exports = (function() {
    // User model
    var Models = require("./../../models/models");
    var Media = Models.Layout;

    var addOne = function(req, res) {
        Layout.forge({
                title: req.body.title,
                aux: req.body.aux
            })
            .save()
            .then(function(layout) {
                res.json({ error: false, data: { id: layout.get('') } });
            })
            .catch(function(err) {
                res.status(500).json({ error: true, data: { message: err.message } });
            });
    }
    return {
        one: addOne
    };
})();