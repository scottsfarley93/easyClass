module.exports = (function() {

    var Bookshelf = require("./../db")
        // Single user
    var User = Bookshelf.Model.extend({
        tableName: 'public.Users',
        hasTimestamps: true,
        bcrypt: { field: 'password' }
    });

    var Project = Bookshelf.Model.extend({
        tableName: 'Projects',
        hasTimestamps: true
    });

    var Tag = Bookshelf.Model.extend({
        tableName: "Tags",
        hasTimestamps: true
    })

    var Class = Bookshelf.Model.extend({
        tableName: "Classes",
        hasTimestamps: true
    })

    var Artifact = Bookshelf.Model.extend({
        tableName: "Artifacts",
        hasTimestamps: true
    })

    var Media = Bookshelf.Model.extend({
        tableName: "Media",
        hasTimestamps: true
    })

    var Layout = Bookshelf.Model.extend({
        tableName: "Layouts",
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

    var Layouts = Bookshelf.Collection.extend({
        model: Layout
    })

    return {
        User: User,
        Users: Users,
        Project: Project,
        Projects: Projects,
        Tag: Tag,
        Tags: Tags,
        Artifact: Artifact,
        Artifacts: Artifacts,
        Layout: Layout,
        Layouts: Layouts,
        Media: Media,
        MediaCollection: MediaCollection,
        Class: Class,
        Classes: Classes
    }
})();