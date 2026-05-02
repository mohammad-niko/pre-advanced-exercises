export class Product {
  constructor(
    private _ID: number,
    readonly name: string,
    readonly price: number,
  ) {
    this._ID = _ID;
    this.name = name;
    if (price < 0) throw new Error("Price must be greater than zero");
    this.price = price ?? 0;
  }
}

class PhysicalProduct  extends Product {
    constructor( _ID:number,  name:string,  price: number ,public shipingcoust: number){
        super(_ID,name,price);
        this.shipingcoust = shipingcoust
    }
}

class DigitalProduct extends Product{
    constructor(_ID:number,  name:string,  price: number ,public downloadLink: string){
super(_ID,name,price);
this.downloadLink = downloadLink;
}

}