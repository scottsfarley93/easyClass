module.exports = (function() {
    var PostgreSql = require('knex')({
        client: 'postgresql',
        connection: {
            host: 'localhost',
            port: '5432',
            user: 'postgres',
            password: '',
            database: 'new_database'
        }
    });

    var Bookshelf = require('bookshelf')(PostgreSql);

    // enable auto password hashing
    Bookshelf.plugin(require('bookshelf-bcrypt'))

    return Bookshelf
})();