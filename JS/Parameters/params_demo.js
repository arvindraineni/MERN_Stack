function testFunction(a=4, b=20) //default value
{ 
    console.log("a is ", a)
    console.log("b is ", b)
}
testFunction(100,800) //priority value


function testFunction1(a,b,c)
{
    console.log(a,b,c)
}
testFunction1(10,20,30,40,50,60)


function testFunction2(...a) //rest parameter receives n values 
{ 
    console.log("a is ",a)
}
testFunction2(10,20,30,40,50,60)



//Strings

//primitve value
let name1 = "Arvind"

//string as object
let name2 = new String("Arvind")

console.log("type is", typeof name1)
console.log("type is", typeof name2)

console.log(name1.toUpperCase())
console.log(name2.length)

//primitive value

let name3 = " is a big city" 
console.log(name3.length)

let name4="hyderabad"

console.log(name4.indexOf("yderabad"))
console.log(name4.charAt(5))

//let result=name4+name3;
let result=name4.concat(name3); //concat
console.log(result)

let name5="hyderabad/is/a/big/city"
let result1=name5.split('/')
console.log(result1)



//Unpacking

let arr=[10,20,30,40]

//destructure the above array
let [,,a]=arr
console.log(a)
let obj = {x:10, y:20}

//destructure the above object
let {x,y}=obj
console.log(x,y)


//closures

function outer(){

    let a = 20;                             //even thought local variable is declared it can be called outsied the function
    function inner() {
        let b = 30;
        let sum = a + b;
        return sum;
    }

    return inner;
}

let result2=outer()

console.log(result2())


//Hoisting
test()         //compiler looks for scope and calls the function
function test(){
    console.log("test called")
}


let test1=function(){
    console.log("test called")
}

test1()








