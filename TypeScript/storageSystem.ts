interface IItem {
  id: number;
}

class Laptop implements IItem {
  id: number;
  name: string;
  company: string;
  constructor(id: number, name: string, company: string) {
    this.id = id;
    this.name = name;
    this.company = company;
  }
}

class Book implements IItem {
  id: number;
  name: string;
  author: string;

  constructor(id: number, name: string, author: string) {
    this.id = id;
    this.name = name;
    this.author = author;
  }
}

class MemoryStorage<T extends IItem>{
 protected _items : T[] = []
 
 add(item:T){
     this._items.push(item)
 }
 getById(id:number): T | undefined {
    return this._items.find((item)=> item.id === id)
 }
}

class BookStorage extends MemoryStorage<Book>{

    getByAuthor(auther:string){
    return    this._items.find((item)=>item.author === auther) 
    }
}