class Achievement {
    static Type = {
        Exhibition: 'exhibition',
        Award: 'award',
        Publication: 'publication',
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