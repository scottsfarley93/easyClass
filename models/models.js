module.exports = (function() {
    var Bookshelf = require("./../db")
        // Single user
    var User = Bookshelf.Model.extend({
        tableName: 'public.Users',
        hasTimestamps: true,
        bcrypt: { field: 'password' }
    });


    //collection of users
    var Users = Bookshelf.Collection.extend({
        model: User
    });

    return {
        User: User,
        Users: Users
    }
})();