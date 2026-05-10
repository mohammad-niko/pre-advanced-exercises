export class Product {
    _ID;
    name;
    price;
    constructor(_ID, name, price) {
        this._ID = _ID;
        this.name = name;
        this.price = price;
        this._ID = _ID;
        this.name = name;
        if (price < 0)
            throw new Error("Price must be greater than zero");
        this.price = price ?? 0;
    }
}
class PhysicalProduct extends Product {
    shipingcoust;
    constructor(_ID, name, price, shipingcoust) {
        super(_ID, name, price);
        this.shipingcoust = shipingcoust;
        this.shipingcoust = shipingcoust;
    }
}
class DigitalProduct extends Product {
    downloadLink;
    constructor(_ID, name, price, downloadLink) {
        super(_ID, name, price);
        this.downloadLink = downloadLink;
        this.downloadLink = downloadLink;
    }
}
