// simple POS with class
// product price quantity amount
class Pos{
    constructor(productName, UnitPrice, qty){
        this.productName = productName
        this.UnitPrice = UnitPrice
        this.qty = qty
    }
    totalamount(){
        this.amount = this.UnitPrice * this.qty
        return this.amount
    }
}

// var p = new Pos()//not applicable to a parameterized constructor
var p = new Pos('Gari', 4, 20)
console.log(p.totalamount())