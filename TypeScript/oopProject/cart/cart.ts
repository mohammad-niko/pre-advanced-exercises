import { Discountpolicy } from "../discount/discount";
import { Product } from "../products/products";

class Cart {
  constructor(readonly productList: Product[]) {
    this.productList = productList;
  }

  addProduct(product: Product) {
    if (!product) throw new Error("Product can't be falsy");
    this.productList.push(product);
  }

  CalculateTotalFinal(discountPolicy: Discountpolicy) {
    const totalPrice = this.productList.reduce(
      (total, product) => total + product.price,
      0,
    );
    
    const discountAmount = discountPolicy.calculateDiscount(totalPrice);

    return totalPrice - discountAmount;
  }
}
