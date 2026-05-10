class Cart {
    productList;
    constructor(productList) {
        this.productList = productList;
        this.productList = productList;
    }
    addProduct(product) {
        if (!product)
            throw new Error("Product can't be falsy");
        this.productList.push(product);
    }
    CalculateTotalFinal(discountPolicy) {
        const totalPrice = this.productList.reduce((total, product) => total + product.price, 0);
        const discountAmount = discountPolicy.calculateDiscount(totalPrice);
        return totalPrice - discountAmount;
    }
}
export {};
