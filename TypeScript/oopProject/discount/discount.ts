
export abstract class Discountpolicy {

    abstract calculateDiscount(totalPrice: number) : number
}


class PersentageDiscount extends Discountpolicy{
    private  persentage = 20

    override calculateDiscount(totalPrice: number): number {
        return (this.persentage * totalPrice) / 100 
    }
}

class FixedAmountDiscount extends Discountpolicy {
    private fixedAmount = 50000

    override calculateDiscount(totalPrice: number): number {
        if(totalPrice < this.fixedAmount) throw new Error("totalPrice must be greater than fixedAmount")

        return  this.fixedAmount
    }
}