export class Discountpolicy {
}
class PersentageDiscount extends Discountpolicy {
    persentage = 20;
    calculateDiscount(totalPrice) {
        return (this.persentage * totalPrice) / 100;
    }
}
class FixedAmountDiscount extends Discountpolicy {
    fixedAmount = 50000;
    calculateDiscount(totalPrice) {
        if (totalPrice < this.fixedAmount)
            throw new Error("totalPrice must be greater than fixedAmount");
        return this.fixedAmount;
    }
}
