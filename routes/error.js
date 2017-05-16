var error = (function() {
    handleError = function(err, req, res, next) {
        res.json({
            "error": "There is no page here."
        })
    };


    return {
        handleError: handleError
    }
})();

module.exports = error;