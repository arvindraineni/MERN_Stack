class A{
    constructor(a){
        this.a = a;
    }
}                               // values in parent will be inherited to child 

class B extends A{
    constructor(a,b){
        super(a)
        this.b=b;
    }

}
class C extends B{
    constructor(a,b,c){
        super(a,b)
        this.c=c;
    }

}

let objB=new B(100,200)
console.log(objB)
let objC=new C(10,20,30)
console.log(objC)