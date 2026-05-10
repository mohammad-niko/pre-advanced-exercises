class Laptop {
    id;
    name;
    company;
    constructor(id, name, company) {
        this.id = id;
        this.name = name;
        this.company = company;
    }
}
class Book {
    id;
    name;
    author;
    constructor(id, name, author) {
        this.id = id;
        this.name = name;
        this.author = author;
    }
}
class MemoryStorage {
    _items = [];
    add(item) {
        this._items.push(item);
    }
    getById(id) {
        return this._items.find((item) => item.id === id);
    }
}
class BookStorage extends MemoryStorage {
    getByAuthor(auther) {
        return this._items.find((item) => item.author === auther);
    }
}
export {};
