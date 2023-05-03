class Achievement {
    static Type = {
        Exhibition: 'exhibitions',
        Award: 'awards',
        Publication: 'publications',
    };

    constructor(id, title, description, type) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
    }

    static validType(type) {
        return Object.values(Achievement.Type).includes(type);
    }
}

module.exports = Achievement;