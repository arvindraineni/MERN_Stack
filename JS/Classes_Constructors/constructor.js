//literals
/*
let productObj={
    pid:100,
    name:"TV",
    price:200000
}

let productObj={
    pid:200,
    name:"Washing machine",
    price:200000
}
*/


//create product constructor function

function Product(pid,pname,price){

    //object initialization logic
    //console.log(this) //empty obj
    this.productId=pid;
    this.productName=pname;
    this.productPrice=price;
    this.isDurable=true;
    //console.log(this)
    this.getProductId = function(){
        return this.pid;
    }
    

}

//add method to prototype of Product
Product.prototypegetProductId = function() {
    return this.pid;
}

//add property to prototype of Product
Product.prototype.isDurable=true;

//create one product obj
let prObj1=new Product(100, "TV",2000)
let prObj2=new Product(200, "LEDTV",20000)

console.log(prObj1)
console.log(prObj2)





//create class Product

class ProductDetails{
    //object initialization logic
    constructor(pid, name, price){
        this.pid = pid;
        this.name = name;
        this.price = price;
    }

    getProductId(){
        return this, this.pid;
    }
}


let pr3=new ProductDetails(400, "Music system", 500000)
let pr4=new ProductDetails(400, "Desktop", 500000)

console.log(pr3)
console.log(pr4)
