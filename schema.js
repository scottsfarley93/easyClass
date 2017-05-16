var Schema = {
    users: {
        id: { type: 'increments', nullable: false, primary: true },
        FirstName: { type: 'string', maxlength: 150, nullable: false },
        LastName: { type: 'string', maxlength: 150, nullable: false },
        Email: { type: 'string', maxlength: 254, nullable: false, unique: true },
        password: { type: 'string', maxlength: 254, nullable: false, unique: false },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timetamp' }
    }
}