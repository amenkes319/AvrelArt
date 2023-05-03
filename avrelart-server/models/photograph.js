class Photograph {
    static Type = {
        Landscape: 'landscapes',
        Portrait: 'portraits',
    }

    constructor(id, filename, title, description, type) {
        this.id = id;
        this.filename = filename;
        this.title = title;
        this.description = description;
        this.type = type;
    }

    static validType(type) {
        return Object.values(Photograph.Type).includes(type);
    }
}

module.exports = Photograph;
