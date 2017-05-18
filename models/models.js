module.exports = (function() {

    var Bookshelf = require("./../db")
        // Single user
    var User = Bookshelf.Model.extend({
        tableName: 'User',
        hasTimestamps: true,
        bcrypt: { field: 'password' },
        tags: function() {
            return this.hasMany(Tag)
        },
        projects: function() {
            return this.hasMany(Project)
        }
    });

    var Project = Bookshelf.Model.extend({
        tableName: 'Project',
        hasTimestamps: true,
        tags: function() {
            return this.hasMany(Tag)
        },
        classes: function() {
            return this.hasMany(Class)
        },
        artifacts: function() {
            return this.hasMany(Artifact)
        },
        user: function() {
            return this.belongsTo(User)
        }
    });

    var Tag = Bookshelf.Model.extend({
        tableName: "Tag",
        hasTimestamps: true,
        user: function() {
            return this.belongsTo(User)
        }
    })

    var Class = Bookshelf.Model.extend({
        tableName: "Class",
        hasTimestamps: true,
        project: function() {
            return this.belongsTo(Project)
        },
        tags: function() {
            return this.hasMany(Tag)
        },
        artifacts: function() {
            return this.hasMany(Artifact)
        }
    })

    var Artifact = Bookshelf.Model.extend({
        tableName: "Artifact",
        hasTimestamps: true,
        project: function() {
            this.belongsTo(Project)
        },
        tags: function() {
            this.hasMany(Tag)
        }
    })

    var Media = Bookshelf.Model.extend({
        tableName: "Media",
        hasTimestamps: true
    })


    //collection of users
    var Users = Bookshelf.Collection.extend({
        model: User
    });

    var Projects = Bookshelf.Collection.extend({
        model: Project
    });

    var Tags = Bookshelf.Collection.extend({
        model: Tag
    });

    var Classes = Bookshelf.Collection.extend({
        model: Class
    });

    var MediaCollection = Bookshelf.Collection.extend({
        model: Media
    });

    var Artifacts = Bookshelf.Collection.extend({
        model: Artifact
    });

    return {
        User: User,
        Users: Users,
        Project: Project,
        Projects: Projects,
        Tag: Tag,
        Tags: Tags,
        Artifact: Artifact,
        Artifacts: Artifacts,
        Media: Media,
        MediaCollection: MediaCollection,
        Class: Class,
        Classes: Classes
    }
})();