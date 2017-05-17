var Schema = {
    users: {
        id: { type: 'increments', nullable: false, primary: true },
        FirstName: { type: 'string', maxlength: 150, nullable: false },
        LastName: { type: 'string', maxlength: 150, nullable: false },
        Email: { type: 'string', maxlength: 254, nullable: false, unique: true },
        password: { type: 'string', maxlength: 254, nullable: false, unique: false },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timetamp' }
    },
    projects: {
        id: { type: 'increments', nullable: false, primary: true },
        name: { type: 'string', maxlength: 254, nullable: false },
        description: { type: 'string', maxlength: 1024, nullable: false },
        owner: { type: 'integer' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timetamp' }
    },
    tags: {
        id: { type: 'increments', nullable: false, primary: true },
        userID: { type: 'integer' },
        classID: { type: 'integer' },
        projectID: { type: 'integer' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timetamp' }
    },
    classes: {
        id: { type: 'increments', nullable: false, primary: true },
        projectID: { type: 'integer' },
        classText: { type: 'string', maxLength: 254 },
        properties: { type: 'string' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timetamp' }
    },
    artifacts: {
        id: { type: 'increments', nullable: false, primary: true },
        projectID: { type: 'integer' },
        body: { type: 'string', maxLength: 1044 },
        aux: { type: 'string' },
        layout: { type: 'integer' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timetamp' }
    },
    layouts: {
        id: { type: 'increments', nullable: false, primary: true },
        title: { type: 'string' },
        auxs: { type: 'string' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timetamp' }
    },
    media: {
        id: { type: 'increments', nullable: false, primary: true },
        artifactID: { type: 'integer' },
        URI: { type: 'string' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timetamp' }
    }
}