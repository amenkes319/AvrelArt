class Painting {
    static Type = {
        Landscape: 'landscapes',
        Abstract: 'abstracts',
        WorkOnPaper: 'worksonpaper',
        ItalySeries: 'italyseries',
        UnprecedentedTimes: 'unprecedentedtimes',
        Assemblage: 'assemblages',
    };

    constructor(id, filename, title, description, medium, size, price, type) {
        this.id = id;
        this.filename = filename;
        this.title = title;
        this.description = description;
        this.medium = medium;
        this.size = size;
        this.price = price;
        this.type = type;
    }

    static validType(type) {
        return Object.values(Painting.Type).includes(type);
    }
}

module.exports = Painting;
