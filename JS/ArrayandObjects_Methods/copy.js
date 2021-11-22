let a =20;
let b=a;

console.log(`a is ${a} and b is ${b}`)

a = 200;
console.log(`a is ${a} and b is ${b}`)


//Obj

let testObj = {
    x:10,
    y:20
}


//let copyObj = testObj;  -> wrong

let copyObj=Object.assign({},testObj)
let copyObj={...testObj}   //spread syntax

console.log("testObj", testObj)
console.log("Copy", copyObj)


testObj.x = 1234;
console.log("testObj", testObj)
console.log("copy", copyObj)





let arr=[1,2,3]
let copyArr=[...arr]
